import { useEffect } from "react";
import type { FlatPhotoEntry } from "../data/selectors";
import "./Lightbox.css";

export function Lightbox({
  entry,
  index,
  total,
  hasPrev,
  hasNext,
  onPrev,
  onNext,
  onClose,
}: {
  entry: FlatPhotoEntry;
  index: number;
  total: number;
  hasPrev: boolean;
  hasNext: boolean;
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
}) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [hasPrev, hasNext, onPrev, onNext, onClose]);

  const { photo, groupLabel, meta } = entry;
  const isPortrait = photo.orientation === "portrait";

  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <button className="lightbox__close" onClick={onClose} aria-label="Close">
        ✕
      </button>

      <button
        className="lightbox__nav lightbox__nav--prev"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        disabled={!hasPrev}
        aria-label="Previous photo"
      >
        ‹
      </button>

      <div className="lightbox__stage" onClick={(e) => e.stopPropagation()}>
        {photo.src ? (
          <img
            className={`lightbox__image ${isPortrait ? "lightbox__image--portrait" : "lightbox__image--landscape"}`}
            src={photo.src}
            alt={photo.caption ?? ""}
          />
        ) : (
          <div
            className={`lightbox__image ${isPortrait ? "lightbox__image--portrait" : "lightbox__image--landscape"}`}
            style={{
              background: `linear-gradient(135deg, hsl(${photo.hue} 45% 62%), hsl(${photo.hue + 25} 55% 40%))`,
            }}
          />
        )}
        <div className="lightbox__meta">
          <div className="lightbox__meta-row">
            <span className="lightbox__group-label">{groupLabel}</span>
            <span className="lightbox__count">
              {index + 1} / {total}
            </span>
          </div>
          {photo.caption && <div className="lightbox__caption">{photo.caption}</div>}
          <div className="lightbox__badges">
            {photo.hq && <span className="lightbox__badge">HQ</span>}
            <span className="lightbox__badge lightbox__badge--outline">
              {isPortrait ? "Portrait" : "Landscape"}
            </span>
            {meta?.treatment && <span className="lightbox__badge">{meta.treatment}</span>}
            {meta?.bedType && <span className="lightbox__badge lightbox__badge--outline">{meta.bedType}</span>}
          </div>
          <div className="lightbox__actions">
            <button className="btn btn--primary">Download</button>
          </div>
        </div>
      </div>

      <button
        className="lightbox__nav lightbox__nav--next"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        disabled={!hasNext}
        aria-label="Next photo"
      >
        ›
      </button>
    </div>
  );
}
