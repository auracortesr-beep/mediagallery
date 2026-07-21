# Royalton Media Gallery

A media browsing prototype for Royalton's hotel photo/video library, implementing
the "2a" direction from the Media Gallery Wireframes design doc: a persistent
tree sidebar (Brand → Hotel → Category) combined with a filter/search bar over
the results grid.

## Structure

- Landing page: brand grid with global search + upload entry point.
- Tree sidebar: collapsible, drills Brand → Hotel → Category.
- Filter bar: search-within-view, room type, orientation, and HQ-only filters.
- Results grid: for Accommodations, photos are grouped by room tier
  (low → high), showing each room's treatment (Diamond Club / Star Class /
  The Mansion), total room count, and bed configuration; other categories
  show a flat grid.

## Data

Brands, resorts, and room types are real: generated from
`src/data/source/resorts_principal.csv` and `room_inventory_2026.csv` by
`scripts/generate-royalton-data.mjs` into `src/data/royaltonResorts.generated.ts`
(don't hand-edit the generated file — rerun the script instead). Photos
themselves are still synthetic (`src/data/mockData.ts` attaches placeholder
images to each real room type), since no photo backend exists yet, as are the
non-Accommodations categories (Around Resort, Restaurants, Weddings, Spa &
Activities).

Brand grouping doesn't come from the CSVs' own `Brand` column (which is
coarser than the desired nav — e.g. CHIC and Luxury resorts are both tagged
`Royalton`) — it's inferred from each resort's name against the 10-brand
list the product side provided. One resort was renamed between the two
source files (room inventory's "Royalton Chic Barbados" ↔ the master list's
"Royalton Vessence Barbados"); that alias is hardcoded in the generator.

## Development

```bash
npm install
npm run dev       # start the dev server
npm run build     # typecheck + production build
npm run lint      # oxlint
npm run gen:data  # regenerate royaltonResorts.generated.ts from the source CSVs
```
