import type { Orientation } from "../data/mockData";

export interface UploadInput {
  file: File;
  caption: string;
  hq: boolean;
  tags: string[];
}

export interface UploadedPhoto {
  src: string;
  caption: string | null;
  hq: boolean;
  orientation: Orientation;
  tags: string[];
}

function detectOrientation(file: File): Promise<Orientation> {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      resolve(img.naturalWidth >= img.naturalHeight ? "landscape" : "portrait");
      URL.revokeObjectURL(url);
    };
    img.onerror = () => {
      resolve("landscape");
      URL.revokeObjectURL(url);
    };
    img.src = url;
  });
}

// TODO(backend): this is the one function to replace once a real server
// exists. Swap the body for e.g. a multipart POST to your upload endpoint
// and return the URL it gives back for `src`. Everything upstream (the
// modal, the store, the gallery merge) is already written against this
// same UploadedPhoto shape, so nothing else needs to change.
//
// This mock keeps the file only in the browser's memory via
// URL.createObjectURL — it does not persist anywhere, and the object URL
// stops working after a page reload.
export async function uploadPhoto(input: UploadInput): Promise<UploadedPhoto> {
  const [orientation] = await Promise.all([
    detectOrientation(input.file),
    new Promise((resolve) => setTimeout(resolve, 500)), // simulated network latency
  ]);
  return {
    src: URL.createObjectURL(input.file),
    caption: input.caption.trim() || null,
    hq: input.hq,
    orientation,
    tags: input.tags,
  };
}
