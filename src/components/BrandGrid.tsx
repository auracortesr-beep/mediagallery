import { BRANDS, type Brand } from "../data/mockData";
import "./BrandGrid.css";

export function BrandGrid({
  onSelectBrand,
  onUploadClick,
}: {
  onSelectBrand: (brand: Brand) => void;
  onUploadClick: () => void;
}) {
  return (
    <div className="landing">
      <div className="landing__topbar">
        <input className="landing__search" type="search" placeholder="Search hotel, brand, room type..." />
        <button className="btn btn--primary" onClick={onUploadClick}>
          Upload
        </button>
      </div>
      <div className="landing__section-label">Brands</div>
      <div className="landing__grid">
        {BRANDS.map((brand) => (
          <button key={brand.id} className="brand-tile" onClick={() => onSelectBrand(brand)}>
            <div className="brand-tile__logo">{initials(brand.name)}</div>
            <div className="brand-tile__name">{brand.name}</div>
          </button>
        ))}
      </div>
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
