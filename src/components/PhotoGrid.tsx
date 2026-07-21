import type { Category, Photo } from "../data/mockData";
import type { Filters } from "./FilterBar";
import { Thumbnail } from "./Thumbnail";
import "./PhotoGrid.css";

function matchesFilters(photo: Photo, filters: Filters): boolean {
  if (filters.hqOnly && !photo.hq) return false;
  if (filters.orientation !== "any" && photo.orientation !== filters.orientation) return false;
  return true;
}

export function PhotoGrid({ category, filters }: { category: Category; filters: Filters }) {
  if (category.rooms) {
    const rooms = category.rooms
      .filter((r) => !filters.roomType || r.name === filters.roomType)
      .filter((r) => filters.query.trim() === "" || r.name.toLowerCase().includes(filters.query.trim().toLowerCase()))
      .sort((a, b) => a.tier - b.tier);

    return (
      <div className="photogrid">
        {rooms.map((room) => {
          const shown = room.photos.filter((p) => matchesFilters(p, filters));
          if (shown.length === 0) return null;
          return (
            <section key={room.id} className="photogrid__group">
              <h3 className="photogrid__group-title">{room.name}</h3>
              <div className="photogrid__grid">
                {shown.map((photo) => (
                  <Thumbnail key={photo.id} photo={photo} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    );
  }

  const photos = (category.photos ?? []).filter((p) => matchesFilters(p, filters));
  return (
    <div className="photogrid">
      <div className="photogrid__grid">
        {photos.map((photo) => (
          <Thumbnail key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}
