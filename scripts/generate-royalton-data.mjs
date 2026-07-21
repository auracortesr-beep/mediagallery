// Regenerates src/data/royaltonResorts.generated.ts from the source CSVs in
// src/data/source/. Run with: npm run gen:data
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SOURCE_DIR = path.join(__dirname, "..", "src", "data", "source");
const OUT_FILE = path.join(__dirname, "..", "src", "data", "royaltonResorts.generated.ts");

function parseCsv(text) {
  if (text.charCodeAt(0) === 0xfeff) text = text.slice(1);
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (c === "\r") {
      // skip
    } else {
      field += c;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((c) => c.trim() !== ""));
}

function cleanText(s) {
  return s
    .replace(/[´’]S\b/g, "'s")
    .replace(/'S\b/g, "'s")
    .replace(/\bDc\b/g, "DC")
    .trim();
}

const resortsCsv = parseCsv(readFileSync(path.join(SOURCE_DIR, "resorts_principal.csv"), "utf-8"));
const resortsHeader = resortsCsv[0];
const resortRows = resortsCsv.slice(1).map((r) => Object.fromEntries(resortsHeader.map((h, i) => [h, r[i] ?? ""])));

// Dedupe by HotelDescription, keeping the most recently added row, and drop the
// generic "all brands" placeholder row (Code=ROY, Country=All).
const resortByName = new Map();
for (const r of resortRows) {
  if (r.Code === "ROY") continue;
  resortByName.set(r.HotelDescription, r);
}

// Aliases: the room-inventory CSV's "Resort" names don't always match the
// master list's HotelDescription 1:1 (rebrands, shortened names).
const RESORT_ALIASES = {
  "Grand Lido Negril": "Grand Lido Negril Au-Naturel",
  "Royalton Blue Waters": "Royalton Blue Waters Montego Bay",
  "Royalton Chic Barbados": "Royalton Vessence Barbados",
  "Royalton Chic Punta Cana": "Royalton CHIC Punta Cana",
  "Planet Hollywood Adult Scene": "Planet Hollywood Adult Scene Cancun by Royalton",
  "Planet Hollywood Cancun": "Planet Hollywood Cancun by Royalton",
  "Planet Hollywood Costa Rica": "Planet Hollywood Costa Rica by Royalton",
};

function resolveResort(name) {
  const resolved = RESORT_ALIASES[name] ?? name;
  const meta = resortByName.get(resolved);
  if (!meta) throw new Error(`No master resort record for "${name}" (resolved "${resolved}")`);
  return meta;
}

// Same lookup, but for hand-edited input (media_photos.csv) — warn and skip
// rather than crash the whole build over one typo'd resort name.
function tryResolveResort(name) {
  const resolved = RESORT_ALIASES[name] ?? name;
  return resortByName.get(resolved) ?? null;
}

// Must stay in sync with the category id/name pairs in src/data/mockData.ts
// (PLACEHOLDER_CATEGORIES, plus the "accommodations" category built from
// room-inventory data).
const CATEGORY_NAME_TO_ID = {
  Accommodations: "accommodations",
  "Around Resort": "around-resort",
  "Restaurants & Bars": "restaurants-bars",
  "Pools & Beach": "pools-beach",
  Weddings: "weddings",
  "Groups & Meetings": "groups-meetings",
  "Spa & Activities": "spa-activities",
  "Kids & Family": "kids-family",
  Entertainment: "entertainment",
  "Resort Map": "resort-map",
  "Travel Partner Info": "travel-partner-info",
  "Logos & Brand Assets": "logos-brand-assets",
  Videos: "videos",
};

function brandBucketFor(hotelDescription, masterBrand) {
  const n = hotelDescription.toLowerCase();
  if (n.includes("hideaway")) return "hideaway";
  if (n.includes("chic")) return "chic";
  if (n.includes("mystique")) return "mystique";
  if (n.includes("vessence")) return "vessence";
  if (n.includes("reserve")) return "reserve";
  // Planet Hollywood Adult Scene lives under the same top-level brand as the
  // rest of Planet Hollywood (no separate "Adult Scene" brand tile).
  if (n.includes("planet hollywood")) return "planet-hollywood";
  if (n.includes("grand lido")) return "grand-lido";
  if (n.includes("westin")) return "westin";
  if (masterBrand === "Royalton" || n.includes("royalton")) return "royalton-luxury";
  return "royalton-luxury";
}

// The 9 top-level brands as given (name, external brand_id, bucket key).
const BRAND_DEFS = [
  { bucket: "royalton-luxury", id: "royalton-luxury", name: "Royalton Luxury Resorts", brandId: 1 },
  { bucket: "hideaway", id: "royalton-hideaway", name: "Royalton Hideaway Resorts", brandId: 3 },
  { bucket: "chic", id: "royalton-chic", name: "Royalton CHIC Resorts", brandId: 32 },
  { bucket: "vessence", id: "royalton-vessence", name: "Royalton Vessence", brandId: 2036 },
  { bucket: "reserve", id: "royalton-reserve", name: "Royalton Reserve", brandId: 2037 },
  { bucket: "planet-hollywood", id: "planet-hollywood", name: "Planet Hollywood by Royalton", brandId: 18 },
  { bucket: "mystique", id: "mystique", name: "Mystique by Royalton", brandId: 19 },
  { bucket: "grand-lido", id: "grand-lido", name: "Grand Lido", brandId: 10 },
  { bucket: "westin", id: "westin-cancun", name: "The Westin Cancun", brandId: 2039 },
];

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// --- Room inventory ---
const roomCsv = parseCsv(readFileSync(path.join(SOURCE_DIR, "room_inventory_2026.csv"), "utf-8"));
const roomHeader = roomCsv[0];
const roomRows = roomCsv.slice(1).map((r) => Object.fromEntries(roomHeader.map((h, i) => [h, (r[i] ?? "").trim()])));

const roomsByResort = new Map();
for (const r of roomRows) {
  if (!r.Resort) continue;
  const list = roomsByResort.get(r.Resort) ?? [];
  list.push({
    roomCode: r["Room Code"],
    name: cleanText(r["Room Name"]),
    tier: Number(r.Count),
    totalRooms: r["Total Rooms"] === "Virtual" ? null : Number(r["Total Rooms"]) || 0,
    bedType: r["Bed Type"].replace(/^\\+\s*/, ""),
    minOccupancy: Number(r["Min\nOccupancy"]) || null,
    maxOccupancy: Number(r["Max\nOccupancy"]) || null,
    maxAdults: Number(r["Max\nAdults"]) || null,
    kidsMax: r["Kids\nMax"] === "N/A" || !r["Kids\nMax"] ? null : r["Kids\nMax"],
    treatment: r.Treatment || null,
  });
  roomsByResort.set(r.Resort, list);
}

// --- Assemble hotels, bucketed by brand ---
const hotelsByBucket = new Map(BRAND_DEFS.map((b) => [b.bucket, []]));

for (const [resortName, rooms] of roomsByResort) {
  const meta = resolveResort(resortName);
  const bucket = brandBucketFor(meta.HotelDescription, meta.Brand);
  hotelsByBucket.get(bucket).push({
    id: slugify(meta.Code || resortName),
    name: meta.HotelDescription,
    country: meta.Country,
    type: meta.Type,
    rooms,
  });
}

// Reserve's Paraíso de la Bonita has a master record but no room-inventory
// rows yet — include it with an empty room list so the brand isn't empty.
const reserveMeta = [...resortByName.values()].find((r) => r.Brand === "Reserve");
if (reserveMeta && !roomsByResort.has(reserveMeta.HotelDescription)) {
  hotelsByBucket.get("reserve").push({
    id: slugify(reserveMeta.Code),
    name: reserveMeta.HotelDescription,
    country: reserveMeta.Country,
    type: reserveMeta.Type,
    rooms: [],
  });
}

// --- Real photo overrides (optional, hand-maintained) ---
// Keyed by `${hotelId}||${categoryId}||${roomCode}` (roomCode blank for
// non-Accommodations categories). Any row here fully replaces the synthetic
// placeholder photos for that exact resort+category(+room) combo.
const REAL_PHOTOS = {};
const mediaPhotosPath = path.join(SOURCE_DIR, "media_photos.csv");
if (existsSync(mediaPhotosPath)) {
  const mediaCsv = parseCsv(readFileSync(mediaPhotosPath, "utf-8"));
  const mediaHeader = mediaCsv[0];
  const mediaRows = mediaCsv
    .slice(1)
    .map((r) => Object.fromEntries(mediaHeader.map((h, i) => [h, (r[i] ?? "").trim()])));

  for (const [i, row] of mediaRows.entries()) {
    const rowNum = i + 2; // +1 for header, +1 for 1-indexing
    if (!row.Resort || !row.Category || !row["Image Path or URL"]) {
      console.warn(`media_photos.csv row ${rowNum}: missing Resort/Category/Image Path, skipping`);
      continue;
    }
    if (row["Image Path or URL"].startsWith("REPLACE_ME")) continue; // template example row

    const meta = tryResolveResort(row.Resort);
    if (!meta) {
      console.warn(`media_photos.csv row ${rowNum}: unknown Resort "${row.Resort}", skipping`);
      continue;
    }
    const categoryId = CATEGORY_NAME_TO_ID[row.Category];
    if (!categoryId) {
      console.warn(`media_photos.csv row ${rowNum}: unknown Category "${row.Category}", skipping`);
      continue;
    }

    let roomCode = "";
    if (categoryId === "accommodations") {
      const rooms = roomsByResort.get(row.Resort) ?? roomsByResort.get(meta.HotelDescription) ?? [];
      const wanted = row["Room Type"].trim().toLowerCase();
      const room = rooms.find(
        (r) => r.roomCode.toLowerCase() === wanted || r.name.toLowerCase() === wanted,
      );
      if (!room) {
        console.warn(
          `media_photos.csv row ${rowNum}: Room Type "${row["Room Type"]}" not found for "${row.Resort}", skipping`,
        );
        continue;
      }
      roomCode = room.roomCode;
    }

    const hotelId = slugify(meta.Code || row.Resort);
    const key = `${hotelId}||${categoryId}||${roomCode}`;
    const src = /^https?:\/\//.test(row["Image Path or URL"])
      ? row["Image Path or URL"]
      : `/media/${row["Image Path or URL"].replace(/^\/+/, "")}`;

    (REAL_PHOTOS[key] ??= []).push({
      src,
      caption: row.Caption || null,
      hq: row.HQ.trim().toLowerCase() === "yes",
      orientation: row.Orientation.trim().toLowerCase() === "portrait" ? "portrait" : "landscape",
      tags: row.Tags
        ? row.Tags.split(";")
            .map((t) => t.trim())
            .filter(Boolean)
        : [],
    });
  }
}

const brands = BRAND_DEFS.map((b) => ({
  id: b.id,
  name: b.name,
  brandId: b.brandId,
  hotels: hotelsByBucket.get(b.bucket).sort((a, c) => a.name.localeCompare(c.name)),
}));

const banner = `// GENERATED FILE — do not edit by hand.
// Regenerate with: npm run gen:data
// Source: src/data/source/resorts_principal.csv + room_inventory_2026.csv
//         + src/data/source/media_photos.csv (optional real-photo overrides)
`;

const body = `
export interface RealPhoto {
  src: string;
  caption: string | null;
  hq: boolean;
  orientation: "landscape" | "portrait";
  tags: string[];
}

export interface SourceRoomType {
  roomCode: string;
  name: string;
  tier: number;
  totalRooms: number | null;
  bedType: string;
  minOccupancy: number | null;
  maxOccupancy: number | null;
  maxAdults: number | null;
  kidsMax: string | null;
  treatment: string | null;
}

export interface SourceHotel {
  id: string;
  name: string;
  country: string;
  type: string;
  rooms: SourceRoomType[];
}

export interface SourceBrand {
  id: string;
  name: string;
  brandId: number;
  hotels: SourceHotel[];
}

export const SOURCE_BRANDS: SourceBrand[] = ${JSON.stringify(brands, null, 2)};

// Keyed by \`\${hotelId}||\${categoryId}||\${roomCode}\` (roomCode is "" for
// non-Accommodations categories). See src/data/source/media_photos.csv.
export const REAL_PHOTOS: Record<string, RealPhoto[]> = ${JSON.stringify(REAL_PHOTOS, null, 2)};
`;

writeFileSync(OUT_FILE, banner + body);
console.log(`Wrote ${OUT_FILE}`);
for (const b of brands) {
  console.log(`  ${b.name}: ${b.hotels.length} hotel(s)`);
}
const realPhotoCount = Object.values(REAL_PHOTOS).reduce((sum, arr) => sum + arr.length, 0);
console.log(`Real photo overrides: ${realPhotoCount} photo(s) across ${Object.keys(REAL_PHOTOS).length} key(s)`);
