import type { Orientation } from "../data/mockData";
import "./FilterBar.css";

export interface Filters {
  query: string;
  roomType: string;
  hqOnly: boolean;
  orientation: Orientation | "any";
}

export function FilterBar({
  filters,
  onChange,
  roomTypeOptions,
  showRoomType,
  resultCount,
}: {
  filters: Filters;
  onChange: (next: Filters) => void;
  roomTypeOptions: string[];
  showRoomType: boolean;
  resultCount: number;
}) {
  return (
    <div className="filterbar">
      <div className="filterbar__row">
        <input
          className="filterbar__search"
          type="search"
          placeholder="Search within this view..."
          value={filters.query}
          onChange={(e) => onChange({ ...filters, query: e.target.value })}
        />
        {showRoomType && (
          <select
            className="filterbar__select"
            value={filters.roomType}
            onChange={(e) => onChange({ ...filters, roomType: e.target.value })}
          >
            <option value="">Room type: all</option>
            {roomTypeOptions.map((rt) => (
              <option key={rt} value={rt}>
                {rt}
              </option>
            ))}
          </select>
        )}
        <select
          className="filterbar__select"
          value={filters.orientation}
          onChange={(e) => onChange({ ...filters, orientation: e.target.value as Filters["orientation"] })}
        >
          <option value="any">Orientation: any</option>
          <option value="landscape">Landscape</option>
          <option value="portrait">Portrait</option>
        </select>
        <label className="filterbar__toggle">
          <input
            type="checkbox"
            checked={filters.hqOnly}
            onChange={(e) => onChange({ ...filters, hqOnly: e.target.checked })}
          />
          HQ only
        </label>
      </div>
      <div className="filterbar__count">{resultCount.toLocaleString()} results</div>
    </div>
  );
}
