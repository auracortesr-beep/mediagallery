import { useMemo, useRef, useState } from "react";
import { BRANDS } from "../data/mockData";
import type { Selection } from "./TreeSidebar";
import { uploadPhoto } from "../lib/uploadApi";
import { addUploadedPhoto, uploadKey } from "../state/uploadStore";
import "./UploadModal.css";

function parseTags(raw: string): string[] {
  return raw
    .split(/[,;]/)
    .map((t) => t.trim())
    .filter(Boolean);
}

export function UploadModal({
  onClose,
  onUploaded,
}: {
  onClose: () => void;
  onUploaded: (selection: Selection) => void;
}) {
  const [brandId, setBrandId] = useState("");
  const [hotelId, setHotelId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [hq, setHq] = useState(true);
  const [tagsInput, setTagsInput] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const brand = BRANDS.find((b) => b.id === brandId);
  const hotel = brand?.hotels.find((h) => h.id === hotelId);
  const category = hotel?.categories.find((c) => c.id === categoryId);
  const isAccommodations = category?.id === "accommodations";

  const previewUrl = useMemo(() => (file ? URL.createObjectURL(file) : null), [file]);

  const canSubmit = Boolean(brandId && hotelId && categoryId && file && (!isAccommodations || roomCode));

  function handleFile(f: File | undefined) {
    if (!f) return;
    if (!f.type.startsWith("image/")) {
      setError("Please choose an image file.");
      return;
    }
    setError(null);
    setFile(f);
  }

  async function handleSubmit() {
    if (!canSubmit || !file || !hotel || !category) return;
    setSubmitting(true);
    setError(null);
    try {
      const uploaded = await uploadPhoto({ file, caption, hq, tags: parseTags(tagsInput) });
      const key = uploadKey(hotel.id, category.id, isAccommodations ? roomCode : "");
      addUploadedPhoto(key, {
        id: `upload-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        hq: uploaded.hq,
        orientation: uploaded.orientation,
        tags: uploaded.tags,
        hue: 0,
        src: uploaded.src,
        caption: uploaded.caption,
      });
      onUploaded({ brandId, hotelId, categoryId });
    } catch {
      setError("Upload failed. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="upload-modal" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="upload-modal__card" onClick={(e) => e.stopPropagation()}>
        <div className="upload-modal__header">
          <h2>Upload a photo</h2>
          <button className="upload-modal__close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="upload-modal__body">
          <div className="upload-modal__field-row">
            <label className="upload-modal__field">
              <span>Brand</span>
              <select
                value={brandId}
                onChange={(e) => {
                  setBrandId(e.target.value);
                  setHotelId("");
                  setCategoryId("");
                  setRoomCode("");
                }}
              >
                <option value="">Choose a brand…</option>
                {BRANDS.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="upload-modal__field">
              <span>Resort</span>
              <select
                value={hotelId}
                disabled={!brand}
                onChange={(e) => {
                  setHotelId(e.target.value);
                  setCategoryId("");
                  setRoomCode("");
                }}
              >
                <option value="">Choose a resort…</option>
                {brand?.hotels.map((h) => (
                  <option key={h.id} value={h.id}>
                    {h.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="upload-modal__field-row">
            <label className="upload-modal__field">
              <span>Category</span>
              <select
                value={categoryId}
                disabled={!hotel}
                onChange={(e) => {
                  setCategoryId(e.target.value);
                  setRoomCode("");
                }}
              >
                <option value="">Choose a category…</option>
                {hotel?.categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </label>

            {isAccommodations && (
              <label className="upload-modal__field">
                <span>Room type</span>
                <select value={roomCode} onChange={(e) => setRoomCode(e.target.value)}>
                  <option value="">Choose a room…</option>
                  {category?.rooms?.map((r) => (
                    <option key={r.roomCode} value={r.roomCode}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </label>
            )}
          </div>

          {categoryId === "videos" && (
            <p className="upload-modal__hint">
              Videos currently store a cover image only — playback in the lightbox isn't supported yet.
            </p>
          )}

          <div
            className={`upload-modal__dropzone ${dragOver ? "upload-modal__dropzone--active" : ""}`}
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
              handleFile(e.dataTransfer.files[0]);
            }}
          >
            {previewUrl ? (
              <img className="upload-modal__preview" src={previewUrl} alt="Selected upload preview" />
            ) : (
              <>
                <div className="upload-modal__dropzone-icon">⬆</div>
                <div>Drag a photo here, or click to browse</div>
              </>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => handleFile(e.target.files?.[0])}
            />
          </div>

          <label className="upload-modal__field">
            <span>Caption</span>
            <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Optional" />
          </label>

          <div className="upload-modal__field-row">
            <label className="upload-modal__field">
              <span>Tags</span>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="e.g. pool, sunset"
              />
            </label>
            <label className="upload-modal__checkbox">
              <input type="checkbox" checked={hq} onChange={(e) => setHq(e.target.checked)} />
              High quality
            </label>
          </div>

          {error && <p className="upload-modal__error">{error}</p>}
        </div>

        <div className="upload-modal__footer">
          <button className="btn" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn--primary" disabled={!canSubmit || submitting} onClick={handleSubmit}>
            {submitting ? "Uploading…" : "Upload"}
          </button>
        </div>
      </div>
    </div>
  );
}
