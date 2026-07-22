# Royalton Media Gallery

A media browsing prototype for Royalton's hotel photo/video library, implementing
the "2a" direction from the Media Gallery Wireframes design doc: a persistent
tree sidebar (Brand → Hotel → Category) combined with a filter/search bar over
the results grid.

## Structure

- Landing page: brand grid with a real global search (filters the brand
  tiles live, and surfaces matching resorts/room types as jump-to
  suggestions that navigate straight into that hotel — pre-filtered to the
  room type for a room match) + upload entry point.
- Tree sidebar: collapsible, drills Brand → Hotel → Category.
- Filter bar: search-within-view (matches room/category name and photo tags),
  room type, orientation, tag, and HQ-only filters.
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
Videos) — except Kids & Family, which is dropped for any hotel whose
`resorts_principal.csv` `Type` is `Adults Only` (Hideaway, Reserve, Grand
Lido, CHIC, Royalton Vessence Cancun, Planet Hollywood Adult Scene — Royalton
Vessence Barbados stays `Family`). Only Accommodations is backed by real
per-room data; the rest start as synthetic placeholders until real photos
are added (see below).

Brand grouping doesn't come from the CSVs' own `Brand` column (which is
coarser than the desired nav — e.g. CHIC and Luxury resorts are both tagged
`Royalton`) — it's inferred from each resort's name against the 9-brand list
the product side provided (Royalton Luxury, Hideaway, CHIC, Vessence,
Reserve, Planet Hollywood by Royalton, Mystique, Grand Lido, The Westin
Cancun). Planet Hollywood Adult Scene Cancun is a hotel *under* Planet
Hollywood by Royalton, not its own brand. One resort was renamed between the
two source files (room inventory's "Royalton Chic Barbados" ↔ the master
list's "Royalton Vessence Barbados"); that alias is hardcoded in the
generator.

The Westin Cancun's 12 accommodation types have no real bed-type/occupancy/
room-count data yet (`Total Rooms` is set to `Virtual` so no misleading "0
rooms" badge shows) — only the room names and a low→high tier order are
real. Fill in the rest in `room_inventory_2026.csv` as it becomes available.

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

`Tags` (semicolon-separated) are fully wired up: the tag filter dropdown in
the filter bar only lists tags actually present in the category being
viewed, "search within this view" matches against tags as well as
room/category names, and each photo's tags are shown in the lightbox.
Synthetic placeholder photos always have zero tags, so the tag filter only
appears once at least one real photo with tags exists in that category.

### Uploading photos from the app

The landing page's "Upload" button opens a real modal: pick a brand, resort,
category (respecting the adults-only Kids & Family exclusion automatically,
since it's populated from the same `hotel.categories` the rest of the app
uses), room type if the category is Accommodations, then drag in one photo
or many at once (or click to browse — the file input accepts multiple
files), add a caption/tags/HQ flag that apply to the whole batch, and
submit. Each thumbnail in the batch can be removed individually before
submitting, and a progress bar tracks the batch as it uploads (4 at a time).
On success it navigates you straight to that hotel/category so you see the
photos appear — uploads always *add* to whatever's already showing, never
replace, unlike `media_photos.csv` overrides.

There's no backend yet, so this is wired against a mock:
`src/lib/uploadApi.ts` exports a single `uploadPhoto()` function that
currently just keeps the file in memory via `URL.createObjectURL` (auto-
detecting landscape/portrait from the image's actual dimensions) and
resolves after a simulated delay. Uploaded photos live in a session-only
store (`src/state/uploadStore.ts`) that the gallery merges in at render
time — nothing here persists past a page reload. When a real backend
exists, `uploadPhoto()` is the one function to rewrite (e.g. a multipart
POST that returns a real hosted URL); the modal, the store, and the gallery
merge logic don't need to change.

## Development

```bash
npm install
npm run dev       # start the dev server
npm run build     # typecheck + production build
npm run lint      # oxlint
npm run gen:data  # regenerate royaltonResorts.generated.ts from the source CSVs
```
