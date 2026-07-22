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
          {showGroupLabels && (
            <div className="photogrid__group-header">
              <h3 className="photogrid__group-title">{group.label}</h3>
              {group.meta && (
                <div className="photogrid__group-meta">
                  {group.meta.treatment && (
                    <span className="photogrid__meta-badge photogrid__meta-badge--treatment">
                      {group.meta.treatment}
                    </span>
                  )}
                  {group.meta.totalRooms !== null && (
                    <span className="photogrid__meta-badge">{group.meta.totalRooms} rooms</span>
                  )}
                  {group.meta.bedType && <span className="photogrid__meta-badge">{group.meta.bedType}</span>}
                </div>
              )}
            </div>
          )}
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
