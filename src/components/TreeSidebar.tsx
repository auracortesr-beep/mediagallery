import { useState } from "react";
import { BRANDS } from "../data/mockData";
import "./TreeSidebar.css";

export interface Selection {
  brandId: string;
  hotelId?: string;
  categoryId?: string;
}

export function TreeSidebar({
  selection,
  onSelect,
  onCollapse,
}: {
  selection: Selection;
  onSelect: (next: Selection) => void;
  onCollapse: () => void;
}) {
  const [expandedBrand, setExpandedBrand] = useState(selection.brandId);
  const [expandedHotel, setExpandedHotel] = useState(selection.hotelId ?? "");

  return (
    <nav className="tree">
      <div className="tree__header">
        <span>Browse</span>
        <button className="tree__collapse" onClick={onCollapse} aria-label="Collapse sidebar" title="Collapse">
          «
        </button>
      </div>
      {BRANDS.map((brand) => {
        const isExpanded = expandedBrand === brand.id;
        return (
          <div key={brand.id} className="tree__brand">
            <button
              className={`tree__brand-btn ${brand.id === selection.brandId ? "is-active" : ""}`}
              onClick={() => {
                setExpandedBrand(isExpanded ? "" : brand.id);
                onSelect({ brandId: brand.id });
              }}
            >
              <span className="tree__caret">{isExpanded ? "▾" : "▸"}</span>
              {brand.name}
            </button>
            {isExpanded && (
              <div className="tree__hotels">
                {brand.hotels.map((hotel) => {
                  const hotelExpanded = expandedHotel === hotel.id;
                  return (
                    <div key={hotel.id}>
                      <button
                        className={`tree__hotel-btn ${hotel.id === selection.hotelId ? "is-active" : ""}`}
                        onClick={() => {
                          setExpandedHotel(hotelExpanded ? "" : hotel.id);
                          onSelect({ brandId: brand.id, hotelId: hotel.id });
                        }}
                      >
                        <span className="tree__caret">{hotelExpanded ? "▾" : "▸"}</span>
                        {hotel.name}
                      </button>
                      {hotelExpanded && (
                        <div className="tree__categories">
                          {hotel.categories.map((cat) => (
                            <button
                              key={cat.id}
                              className={`tree__category-btn ${
                                cat.id === selection.categoryId && hotel.id === selection.hotelId ? "is-active" : ""
                              }`}
                              onClick={() =>
                                onSelect({ brandId: brand.id, hotelId: hotel.id, categoryId: cat.id })
                              }
                            >
                              {cat.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
