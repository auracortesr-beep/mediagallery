import { BRANDS, type Brand, type Category, type Photo } from "./mockData";
import type { Filters } from "../components/FilterBar";
import { uploadKey } from "../state/uploadStore";

export function findBrand(brandId: string): Brand | undefined {
  return BRANDS.find((b) => b.id === brandId);
}

// Layers session-uploaded photos (from the Upload modal) on top of a
// category's existing photos. Unlike media_photos.csv overrides, uploads
// always add rather than replace — each one is a new photo a person just
// added, not a curated correction of the placeholder set.
export function withUploads(category: Category, hotelId: string, uploads: Record<string, Photo[]>): Category {
  if (category.rooms) {
    return {
      ...category,
      rooms: category.rooms.map((r) => {
        const extra = uploads[uploadKey(hotelId, category.id, r.roomCode)] ?? [];
        return extra.length > 0 ? { ...r, photos: [...r.photos, ...extra] } : r;
      }),
    };
  }
  const extra = uploads[uploadKey(hotelId, category.id, "")] ?? [];
  return extra.length > 0 ? { ...category, photos: [...(category.photos ?? []), ...extra] } : category;
}

function matchesFilters(photo: Photo, filters: Filters): boolean {
  if (filters.hqOnly && !photo.hq) return false;
  if (filters.orientation !== "any" && photo.orientation !== filters.orientation) return false;
  if (filters.tag && !photo.tags.includes(filters.tag)) return false;
  return true;
}

function matchesQuery(groupName: string, photo: Photo, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  if (groupName.toLowerCase().includes(q)) return true;
  return photo.tags.some((t) => t.toLowerCase().includes(q));
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
      .sort((a, b) => a.tier - b.tier)
      .map((r) => ({
        label: r.name,
        photos: r.photos.filter((p) => matchesFilters(p, filters) && matchesQuery(r.name, p, filters.query)),
        meta: { treatment: r.treatment, totalRooms: r.totalRooms, bedType: r.bedType, maxOccupancy: r.maxOccupancy },
      }))
      .filter((g) => g.photos.length > 0);
  }
  const photos = (category.photos ?? []).filter(
    (p) => matchesFilters(p, filters) && matchesQuery(category.name, p, filters.query),
  );
  return photos.length > 0 ? [{ label: category.name, photos }] : [];
}

export function countVisiblePhotos(category: Category, filters: Filters): number {
  return visiblePhotoGroups(category, filters).reduce((sum, g) => sum + g.photos.length, 0);
}

// All distinct tags across every photo in a category, regardless of current
// filters — used to populate the tag filter's option list.
export function availableTags(category: Category): string[] {
  const allPhotos = category.rooms ? category.rooms.flatMap((r) => r.photos) : (category.photos ?? []);
  const tags = new Set<string>();
  for (const photo of allPhotos) {
    for (const tag of photo.tags) tags.add(tag);
  }
  return Array.from(tags).sort();
}

export interface FlatPhotoEntry {
  photo: Photo;
  groupLabel: string;
  meta?: PhotoGroupMeta;
}

export function flattenGroups(groups: PhotoGroup[]): FlatPhotoEntry[] {
  return groups.flatMap((g) => g.photos.map((photo) => ({ photo, groupLabel: g.label, meta: g.meta })));
}
