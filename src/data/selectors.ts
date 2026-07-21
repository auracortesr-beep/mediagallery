import { BRANDS, type Brand, type Category } from "./mockData";
import type { Filters } from "../components/FilterBar";

export function findBrand(brandId: string): Brand | undefined {
  return BRANDS.find((b) => b.id === brandId);
}

function matchesFilters(photo: { hq: boolean; orientation: string }, filters: Filters): boolean {
  if (filters.hqOnly && !photo.hq) return false;
  if (filters.orientation !== "any" && photo.orientation !== filters.orientation) return false;
  return true;
}

export function countVisiblePhotos(category: Category, filters: Filters): number {
  if (category.rooms) {
    return category.rooms
      .filter((r) => !filters.roomType || r.name === filters.roomType)
      .filter((r) => filters.query.trim() === "" || r.name.toLowerCase().includes(filters.query.trim().toLowerCase()))
      .reduce((sum, r) => sum + r.photos.filter((p) => matchesFilters(p, filters)).length, 0);
  }
  return (category.photos ?? []).filter((p) => matchesFilters(p, filters)).length;
}
