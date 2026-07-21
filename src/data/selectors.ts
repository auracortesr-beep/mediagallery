import { BRANDS, type Brand, type Category, type Photo } from "./mockData";
import type { Filters } from "../components/FilterBar";

export function findBrand(brandId: string): Brand | undefined {
  return BRANDS.find((b) => b.id === brandId);
}

function matchesFilters(photo: Photo, filters: Filters): boolean {
  if (filters.hqOnly && !photo.hq) return false;
  if (filters.orientation !== "any" && photo.orientation !== filters.orientation) return false;
  return true;
}

export interface PhotoGroupMeta {
  treatment: string | null;
  totalRooms: number | null;
  bedType: string;
  maxOccupancy: number | null;
}

export interface PhotoGroup {
  label: string;
  photos: Photo[];
  meta?: PhotoGroupMeta;
}

export function visiblePhotoGroups(category: Category, filters: Filters): PhotoGroup[] {
  if (category.rooms) {
    return category.rooms
      .filter((r) => !filters.roomType || r.name === filters.roomType)
      .filter((r) => filters.query.trim() === "" || r.name.toLowerCase().includes(filters.query.trim().toLowerCase()))
      .sort((a, b) => a.tier - b.tier)
      .map((r) => ({
        label: r.name,
        photos: r.photos.filter((p) => matchesFilters(p, filters)),
        meta: { treatment: r.treatment, totalRooms: r.totalRooms, bedType: r.bedType, maxOccupancy: r.maxOccupancy },
      }))
      .filter((g) => g.photos.length > 0);
  }
  const photos = (category.photos ?? []).filter((p) => matchesFilters(p, filters));
  return photos.length > 0 ? [{ label: category.name, photos }] : [];
}

export function countVisiblePhotos(category: Category, filters: Filters): number {
  return visiblePhotoGroups(category, filters).reduce((sum, g) => sum + g.photos.length, 0);
}

export interface FlatPhotoEntry {
  photo: Photo;
  groupLabel: string;
  meta?: PhotoGroupMeta;
}

export function flattenGroups(groups: PhotoGroup[]): FlatPhotoEntry[] {
  return groups.flatMap((g) => g.photos.map((photo) => ({ photo, groupLabel: g.label, meta: g.meta })));
}
