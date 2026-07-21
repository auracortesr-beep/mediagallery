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
  (low → high); other categories show a flat grid.

Data is mocked in `src/data/mockData.ts` — no backend is wired up yet.

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # typecheck + production build
npm run lint     # oxlint
```
