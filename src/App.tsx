import { useState } from "react";
import { BrandGrid } from "./components/BrandGrid";
import { GalleryView } from "./components/GalleryView";
import { UploadModal } from "./components/UploadModal";
import type { Brand } from "./data/mockData";
import type { Selection } from "./components/TreeSidebar";
import "./App.css";

export default function App() {
  const [selection, setSelection] = useState<Selection | null>(null);
  const [uploadOpen, setUploadOpen] = useState(false);

  function handleSelectBrand(brand: Brand) {
    setSelection({ brandId: brand.id });
  }

  function handleUploaded(next: Selection) {
    setSelection(next);
    setUploadOpen(false);
  }

  return (
    <div className="app">
      <header className="app__header">
        <span className="app__title">ROYALTON MEDIA GALLERY</span>
      </header>
      <main className="app__body">
        {selection ? (
          <GalleryView initialSelection={selection} onBackToBrands={() => setSelection(null)} />
        ) : (
          <BrandGrid
            onSelectBrand={handleSelectBrand}
            onUploadClick={() => setUploadOpen(true)}
            onJumpTo={setSelection}
          />
        )}
      </main>
      {uploadOpen && <UploadModal onClose={() => setUploadOpen(false)} onUploaded={handleUploaded} />}
    </div>
  );
}
