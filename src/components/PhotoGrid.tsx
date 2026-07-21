import type { Photo } from "../data/mockData";
import type { PhotoGroup } from "../data/selectors";
import { Thumbnail } from "./Thumbnail";
import "./PhotoGrid.css";

export function PhotoGrid({
  groups,
  showGroupLabels,
  onOpenPhoto,
}: {
  groups: PhotoGroup[];
  showGroupLabels: boolean;
  onOpenPhoto: (photo: Photo) => void;
}) {
  if (groups.length === 0) {
    return (
      <div className="photogrid photogrid--empty">
        <p>No photos match these filters.</p>
        <p className="photogrid__empty-hint">Try clearing the search, room type, or orientation filters.</p>
      </div>
    );
  }

  return (
    <div className="photogrid">
      {groups.map((group) => (
        <section key={group.label} className="photogrid__group">
          {showGroupLabels && <h3 className="photogrid__group-title">{group.label}</h3>}
          <div className="photogrid__grid">
            {group.photos.map((photo) => (
              <Thumbnail key={photo.id} photo={photo} onClick={() => onOpenPhoto(photo)} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
