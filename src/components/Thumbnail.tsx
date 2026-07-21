import type { Photo } from "../data/mockData";
import "./Thumbnail.css";

export function Thumbnail({ photo, onClick }: { photo: Photo; onClick: () => void }) {
  const isPortrait = photo.orientation === "portrait";
  return (
    <button
      type="button"
      className={`thumb ${isPortrait ? "thumb--portrait" : "thumb--landscape"}`}
      onClick={onClick}
    >
      <div
        className="thumb__img"
        style={{
          background: `linear-gradient(135deg, hsl(${photo.hue} 45% 62%), hsl(${photo.hue + 25} 55% 40%))`,
        }}
      />
      <div className="thumb__hover-veil" />
      {photo.hq && <span className="thumb__badge">HQ</span>}
      <span className="thumb__orientation" title={photo.orientation}>
        {isPortrait ? "⬍" : "⬌"}
      </span>
    </button>
  );
}
