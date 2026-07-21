import { useMemo, useState } from "react";
import { TreeSidebar, type Selection } from "./TreeSidebar";
import { FilterBar, type Filters } from "./FilterBar";
import { PhotoGrid } from "./PhotoGrid";
import { findBrand, countVisiblePhotos } from "../data/selectors";
import "./GalleryView.css";

const EMPTY_FILTERS: Filters = { query: "", roomType: "", hqOnly: false, orientation: "any" };

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

  const brand = findBrand(selection.brandId);
  const hotel = brand?.hotels.find((h) => h.id === selection.hotelId);
  const category = hotel?.categories.find((c) => c.id === selection.categoryId);

  const roomTypeOptions = useMemo(() => (category?.rooms ?? []).map((r) => r.name), [category]);

  function handleSelect(next: Selection) {
    setSelection(next);
    setFilters(EMPTY_FILTERS);
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
              <span>{hotel.name}</span>
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
              resultCount={countVisiblePhotos(category, filters)}
            />
            <PhotoGrid category={category} filters={filters} />
          </>
        ) : (
          <div className="gallery__placeholder">
            {hotel
              ? "Pick a category from the sidebar to see media."
              : "Pick a hotel, then a category, to browse media."}
          </div>
        )}
      </div>
    </div>
  );
}
