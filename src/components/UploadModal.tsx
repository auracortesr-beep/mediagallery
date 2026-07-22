import { useEffect, useRef, useState } from "react";
import { BRANDS } from "../data/mockData";
import type { Selection } from "./TreeSidebar";
import { uploadPhoto } from "../lib/uploadApi";
import { addUploadedPhoto, uploadKey } from "../state/uploadStore";
import "./UploadModal.css";

const BATCH_CONCURRENCY = 4;

function parseTags(raw: string): string[] {
  return raw
    .split(/[,;]/)
    .map((t) => t.trim())
    .filter(Boolean);
}

async function runBatch<T>(items: T[], concurrency: number, worker: (item: T) => Promise<void>): Promise<void> {
  let nextIndex = 0;
  async function runNext(): Promise<void> {
    const i = nextIndex++;
    if (i >= items.length) return;
    await worker(items[i]);
    return runNext();
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, runNext));
}

interface PendingFile {
  id: string;
  file: File;
  previewUrl: string;
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
  const [pendingFiles, setPendingFiles] = useState<PendingFile[]>([]);
  const [caption, setCaption] = useState("");
  const [hq, setHq] = useState(true);
  const [tagsInput, setTagsInput] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const [progress, setProgress] = useState<{ done: number; total: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const brand = BRANDS.find((b) => b.id === brandId);
  const hotel = brand?.hotels.find((h) => h.id === hotelId);
  const category = hotel?.categories.find((c) => c.id === categoryId);
  const isAccommodations = category?.id === "accommodations";
  const submitting = progress !== null;

  const canSubmit = Boolean(
    brandId && hotelId && categoryId && pendingFiles.length > 0 && (!isAccommodations || roomCode),
  );

  function addFiles(list: FileList | File[]) {
    const incoming = Array.from(list);
    const images = incoming.filter((f) => f.type.startsWith("image/"));
    const skipped = incoming.length - images.length;
    setError(skipped > 0 ? `Skipped ${skipped} file${skipped > 1 ? "s" : ""} — not an image.` : null);
    if (images.length === 0) return;
    setPendingFiles((prev) => [
      ...prev,
      ...images.map((file) => ({
        id: `${file.name}-${file.size}-${Math.random().toString(36).slice(2, 8)}`,
        file,
        previewUrl: URL.createObjectURL(file),
      })),
    ]);
  }

  function removeFile(id: string) {
    setPendingFiles((prev) => {
      const removed = prev.find((p) => p.id === id);
      if (removed) URL.revokeObjectURL(removed.previewUrl);
      return prev.filter((p) => p.id !== id);
    });
  }

  function clearAllFiles() {
    for (const p of pendingFiles) URL.revokeObjectURL(p.previewUrl);
    setPendingFiles([]);
  }

  useEffect(() => {
    return () => {
      for (const p of pendingFiles) URL.revokeObjectURL(p.previewUrl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit() {
    if (!canSubmit || !hotel || !category) return;
    setError(null);
    const key = uploadKey(hotel.id, category.id, isAccommodations ? roomCode : "");
    const tags = parseTags(tagsInput);
    const total = pendingFiles.length;
    let done = 0;
    setProgress({ done: 0, total });
    let failures = 0;
    await runBatch(pendingFiles, BATCH_CONCURRENCY, async (pending) => {
      try {
        const uploaded = await uploadPhoto({ file: pending.file, caption, hq, tags });
        addUploadedPhoto(key, {
          id: `upload-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          hq: uploaded.hq,
          orientation: uploaded.orientation,
          tags: uploaded.tags,
          hue: 0,
          src: uploaded.src,
          caption: uploaded.caption,
        });
      } catch {
        failures++;
      } finally {
        done++;
        setProgress({ done, total });
      }
    });
    setProgress(null);
    if (failures > 0) {
      setError(`${failures} of ${total} photo${total > 1 ? "s" : ""} failed to upload. Try again for those.`);
      setPendingFiles((prev) => prev.slice(-failures));
      return;
    }
    onUploaded({ brandId, hotelId, categoryId });
  }

  const submitLabel = submitting
    ? `Uploading ${progress.done}/${progress.total}…`
    : pendingFiles.length > 1
      ? `Upload ${pendingFiles.length} photos`
      : "Upload";

  return (
    <div className="upload-modal" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="upload-modal__card" onClick={(e) => e.stopPropagation()}>
        <div className="upload-modal__header">
          <h2>Upload photos</h2>
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
            className={`upload-modal__dropzone ${dragOver ? "upload-modal__dropzone--active" : ""} ${
              pendingFiles.length > 0 ? "upload-modal__dropzone--filled" : ""
            }`}
            onClick={() => pendingFiles.length === 0 && fileInputRef.current?.click()}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
              addFiles(e.dataTransfer.files);
            }}
          >
            {pendingFiles.length > 0 ? (
              <div className="upload-modal__grid">
                {pendingFiles.map((p) => (
                  <div key={p.id} className="upload-modal__thumb">
                    <img src={p.previewUrl} alt="" />
                    <button
                      type="button"
                      className="upload-modal__thumb-remove"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile(p.id);
                      }}
                      aria-label="Remove photo"
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="upload-modal__add-more"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                >
                  + Add more
                </button>
              </div>
            ) : (
              <>
                <div className="upload-modal__dropzone-icon">⬆</div>
                <div>Drag photos here (one or many), or click to browse</div>
              </>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              hidden
              onChange={(e) => {
                if (e.target.files) addFiles(e.target.files);
                e.target.value = "";
              }}
            />
          </div>
          {pendingFiles.length > 0 && (
            <div className="upload-modal__batch-info">
              <span>
                {pendingFiles.length} photo{pendingFiles.length > 1 ? "s" : ""} selected
              </span>
              <button type="button" className="upload-modal__clear" onClick={clearAllFiles}>
                Clear all
              </button>
            </div>
          )}

          {pendingFiles.length > 1 && (
            <p className="upload-modal__hint">Caption, tags, and HQ below apply to every photo in this batch.</p>
          )}

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

          {progress && (
            <div className="upload-modal__progress">
              <div
                className="upload-modal__progress-bar"
                style={{ width: `${(progress.done / progress.total) * 100}%` }}
              />
            </div>
          )}

          {error && <p className="upload-modal__error">{error}</p>}
        </div>

        <div className="upload-modal__footer">
          <button className="btn" onClick={onClose} disabled={submitting}>
            Cancel
          </button>
          <button className="btn btn--primary" disabled={!canSubmit || submitting} onClick={handleSubmit}>
            {submitLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
