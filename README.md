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
(don't hand-edit the generated file — rerun the script instead). Every hotel
gets the full 13-category set (Accommodations, Around Resort, Restaurants &
Bars, Pools & Beach, Weddings, Groups & Meetings, Spa & Activities, Kids &
Family, Entertainment, Resort Map, Travel Partner Info, Logos & Brand Assets,
Videos) — only Accommodations is backed by real per-room data; the rest start
as synthetic placeholders until real photos are added (see below).

Brand grouping doesn't come from the CSVs' own `Brand` column (which is
coarser than the desired nav — e.g. CHIC and Luxury resorts are both tagged
`Royalton`) — it's inferred from each resort's name against the 10-brand
list the product side provided. One resort was renamed between the two
source files (room inventory's "Royalton Chic Barbados" ↔ the master list's
"Royalton Vessence Barbados"); that alias is hardcoded in the generator.

### Adding real photos

Add rows to `src/data/source/media_photos.csv` (columns: `Resort, Category,
Room Type, Image Path or URL, Caption, HQ, Orientation, Tags`) and put the
image files under `public/media/...` to match whatever relative path you use
(or just use a full `https://` URL instead — see `public/media/README.md`).
`Room Type` only applies to the Accommodations category — match it by room
code (e.g. `LXUUJ`) or the room's full name; leave it blank for every other
category. `Category` must exactly match one of the 13 names above.

Any row you add fully replaces the synthetic placeholder photos for that
exact resort+category(+room) combo — real and fake photos are never mixed
together in the same group. Run `npm run gen:data` afterward to pick up the
changes. Unmatched resort names, category names, or room types are skipped
with a console warning rather than failing the whole build, since this file
is meant to be hand-edited.

## Development

```bash
npm install
npm run dev       # start the dev server
npm run build     # typecheck + production build
npm run lint      # oxlint
npm run gen:data  # regenerate royaltonResorts.generated.ts from the source CSVs
```
