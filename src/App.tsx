import { useState } from "react";
import { BrandGrid } from "./components/BrandGrid";
import { GalleryView } from "./components/GalleryView";
import type { Brand } from "./data/mockData";
import type { Selection } from "./components/TreeSidebar";
import "./App.css";

export default function App() {
  const [selection, setSelection] = useState<Selection | null>(null);

  function handleSelectBrand(brand: Brand) {
    setSelection({ brandId: brand.id });
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
          <BrandGrid onSelectBrand={handleSelectBrand} />
        )}
      </main>
    </div>
  );
}
