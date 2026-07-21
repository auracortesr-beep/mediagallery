import { useMemo, useState } from "react";
import { BRANDS, type Brand } from "../data/mockData";
import type { Selection } from "./TreeSidebar";
import "./BrandGrid.css";

interface HotelMatch {
  brandId: string;
  brandName: string;
  hotelId: string;
  hotelName: string;
}

interface RoomMatch extends HotelMatch {
  roomName: string;
}

const HOTEL_INDEX: HotelMatch[] = BRANDS.flatMap((b) =>
  b.hotels.map((h) => ({ brandId: b.id, brandName: b.name, hotelId: h.id, hotelName: h.name })),
);

const ROOM_INDEX: RoomMatch[] = BRANDS.flatMap((b) =>
  b.hotels.flatMap((h) => {
    const rooms = h.categories.find((c) => c.id === "accommodations")?.rooms ?? [];
    return rooms.map((r) => ({
      brandId: b.id,
      brandName: b.name,
      hotelId: h.id,
      hotelName: h.name,
      roomName: r.name,
    }));
  }),
);

const MAX_SUGGESTIONS = 6;

export function BrandGrid({
  onSelectBrand,
  onUploadClick,
  onJumpTo,
}: {
  onSelectBrand: (brand: Brand) => void;
  onUploadClick: () => void;
  onJumpTo: (selection: Selection) => void;
}) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const filteredBrands = useMemo(() => (q ? BRANDS.filter((b) => b.name.toLowerCase().includes(q)) : BRANDS), [q]);
  const hotelMatches = useMemo(
    () => (q ? HOTEL_INDEX.filter((h) => h.hotelName.toLowerCase().includes(q)).slice(0, MAX_SUGGESTIONS) : []),
    [q],
  );
  const roomMatches = useMemo(
    () => (q ? ROOM_INDEX.filter((r) => r.roomName.toLowerCase().includes(q)).slice(0, MAX_SUGGESTIONS) : []),
    [q],
  );

  const hasSuggestions = hotelMatches.length > 0 || roomMatches.length > 0;
  const noResultsAtAll = q.length > 0 && filteredBrands.length === 0 && !hasSuggestions;

  return (
    <div className="landing">
      <div className="landing__topbar">
        <div className="landing__search-wrap">
          <input
            className="landing__search"
            type="search"
            placeholder="Search hotel, brand, room type..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {hasSuggestions && (
            <div className="landing__suggestions">
              {hotelMatches.length > 0 && (
                <div className="landing__suggestion-group">
                  <div className="landing__suggestion-label">Resorts</div>
                  {hotelMatches.map((h) => (
                    <button
                      key={h.hotelId}
                      className="landing__suggestion"
                      onClick={() => onJumpTo({ brandId: h.brandId, hotelId: h.hotelId })}
                    >
                      <span>{h.hotelName}</span>
                      <span className="landing__suggestion-sub">{h.brandName}</span>
                    </button>
                  ))}
                </div>
              )}
              {roomMatches.length > 0 && (
                <div className="landing__suggestion-group">
                  <div className="landing__suggestion-label">Room types</div>
                  {roomMatches.map((r, i) => (
                    <button
                      key={`${r.hotelId}-${i}`}
                      className="landing__suggestion"
                      onClick={() =>
                        onJumpTo({
                          brandId: r.brandId,
                          hotelId: r.hotelId,
                          categoryId: "accommodations",
                          roomType: r.roomName,
                        })
                      }
                    >
                      <span>{r.roomName}</span>
                      <span className="landing__suggestion-sub">{r.hotelName}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        <button className="btn btn--primary" onClick={onUploadClick}>
          Upload
        </button>
      </div>
      <div className="landing__section-label">Brands</div>
      {noResultsAtAll ? (
        <div className="landing__empty">No matches for "{query}".</div>
      ) : (
        <div className="landing__grid">
          {filteredBrands.map((brand) => (
            <button key={brand.id} className="brand-tile" onClick={() => onSelectBrand(brand)}>
              <div className="brand-tile__logo">{initials(brand.name)}</div>
              <div className="brand-tile__name">{brand.name}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function initials(name: string): string {
  return name
    .split(" ")
    .filter((w) => w[0] === w[0]?.toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}
