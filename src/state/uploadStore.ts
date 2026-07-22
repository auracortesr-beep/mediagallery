import { useSyncExternalStore } from "react";
import type { Photo } from "../data/mockData";

// Session-only overlay of photos added through the Upload modal. Keyed the
// same way as REAL_PHOTOS (`${hotelId}||${categoryId}||${roomCode}`, empty
// roomCode for non-Accommodations categories) so the two line up naturally.
// Nothing here persists past a page reload — once a real backend exists,
// uploaded photos should come back from it instead of living in this store.
let photos: Record<string, Photo[]> = {};
const listeners = new Set<() => void>();

export function uploadKey(hotelId: string, categoryId: string, roomCode: string): string {
  return `${hotelId}||${categoryId}||${roomCode}`;
}

export function addUploadedPhoto(key: string, photo: Photo): void {
  photos = { ...photos, [key]: [...(photos[key] ?? []), photo] };
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): Record<string, Photo[]> {
  return photos;
}

export function useUploadedPhotos(): Record<string, Photo[]> {
  return useSyncExternalStore(subscribe, getSnapshot);
}
