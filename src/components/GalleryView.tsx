import { useEffect, useMemo, useState } from "react";
import { TreeSidebar, type Selection } from "./TreeSidebar";
import { FilterBar, type Filters } from "./FilterBar";
import { PhotoGrid } from "./PhotoGrid";
import { Lightbox } from "./Lightbox";
import { findBrand, visiblePhotoGroups, flattenGroups, availableTags } from "../data/selectors";
import type { Photo } from "../data/mockData";
import "./GalleryView.css";

const EMPTY_FILTERS: Filters = { query: "", roomType: "", hqOnly: false, orientation: "any", tag: "" };

export function GalleryView({
  initialSelection,
  onBackToBrands,
}: {
  initialSelection: Selection;
  onBackToBrands: () => void;
}) {
  const [selection, setSelection] = useState<Selection>(initialSelection);
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const brand = findBrand(selection.brandId);
  const hotel = brand?.hotels.find((h) => h.id === selection.hotelId);
  const category = hotel?.categories.find((c) => c.id === selection.categoryId);

  const roomTypeOptions = useMemo(() => (category?.rooms ?? []).map((r) => r.name), [category]);
  const tagOptions = useMemo(() => (category ? availableTags(category) : []), [category]);
  const groups = useMemo(() => (category ? visiblePhotoGroups(category, filters) : []), [category, filters]);
  const flatPhotos = useMemo(() => flattenGroups(groups), [groups]);
  const resultCount = useMemo(() => groups.reduce((sum, g) => sum + g.photos.length, 0), [groups]);

  useEffect(() => {
    setLightboxIndex(null);
  }, [category, filters]);

  function handleSelect(next: Selection) {
    setSelection(next);
    setFilters(EMPTY_FILTERS);
  }

  function handleOpenPhoto(photo: Photo) {
    const idx = flatPhotos.findIndex((entry) => entry.photo.id === photo.id);
    if (idx >= 0) setLightboxIndex(idx);
  }

  return (
    <div className="gallery">
      {!sidebarCollapsed ? (
        <TreeSidebar selection={selection} onSelect={handleSelect} onCollapse={() => setSidebarCollapsed(true)} />
      ) : (
        <button className="gallery__expand" onClick={() => setSidebarCollapsed(false)} title="Expand sidebar">
          »
        </button>
      )}
      <div className="gallery__main">
        <div className="gallery__breadcrumb">
          <button className="gallery__crumb-link" onClick={onBackToBrands}>
            All brands
          </button>
          {brand && (
            <>
              <span className="gallery__crumb-sep">/</span>
              <span>{brand.name}</span>
            </>
          )}
          {hotel && (
            <>
              <span className="gallery__crumb-sep">/</span>
              <span>
                {hotel.name} <span className="gallery__crumb-country">· {hotel.country}</span>
              </span>
            </>
          )}
          {category && (
            <>
              <span className="gallery__crumb-sep">/</span>
              <span className="gallery__crumb-current">{category.name}</span>
            </>
          )}
        </div>

        {category ? (
          <>
            <FilterBar
              filters={filters}
              onChange={setFilters}
              roomTypeOptions={roomTypeOptions}
              showRoomType={roomTypeOptions.length > 0}
              tagOptions={tagOptions}
              resultCount={resultCount}
            />
            <PhotoGrid groups={groups} showGroupLabels={Boolean(category.rooms)} onOpenPhoto={handleOpenPhoto} />
          </>
        ) : (
          <div className="gallery__placeholder">
            {hotel
              ? "Pick a category from the sidebar to see media."
              : brand && brand.hotels.length === 0
                ? `${brand.name} has no resorts yet.`
                : "Pick a hotel, then a category, to browse media."}
          </div>
        )}
      </div>

      {lightboxIndex !== null && flatPhotos[lightboxIndex] && (
        <Lightbox
          entry={flatPhotos[lightboxIndex]}
          index={lightboxIndex}
          total={flatPhotos.length}
          hasPrev={lightboxIndex > 0}
          hasNext={lightboxIndex < flatPhotos.length - 1}
          onPrev={() => setLightboxIndex((i) => (i ?? 0) - 1)}
          onNext={() => setLightboxIndex((i) => (i ?? 0) + 1)}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
