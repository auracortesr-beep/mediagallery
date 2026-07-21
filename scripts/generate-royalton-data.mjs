// Regenerates src/data/royaltonResorts.generated.ts from the source CSVs in
// src/data/source/. Run with: npm run gen:data
import { readFileSync, writeFileSync } from "node:fs";
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

function brandBucketFor(hotelDescription, masterBrand) {
  const n = hotelDescription.toLowerCase();
  if (n.includes("hideaway")) return "hideaway";
  if (n.includes("chic")) return "chic";
  if (n.includes("mystique")) return "mystique";
  if (n.includes("vessence")) return "vessence";
  if (n.includes("reserve")) return "reserve";
  if (n.includes("planet hollywood adult scene")) return "ph-adult-scene";
  if (n.includes("planet hollywood")) return "planet-hollywood";
  if (n.includes("grand lido")) return "grand-lido";
  if (masterBrand === "Royalton" || n.includes("royalton")) return "royalton-luxury";
  return "royalton-luxury";
}

// The 10 top-level brands as given (name, external brand_id, bucket key).
const BRAND_DEFS = [
  { bucket: "royalton-luxury", id: "royalton-luxury", name: "Royalton Luxury Resorts", brandId: 1 },
  { bucket: "hideaway", id: "royalton-hideaway", name: "Royalton Hideaway Resorts", brandId: 3 },
  { bucket: "chic", id: "royalton-chic", name: "Royalton CHIC Resorts", brandId: 32 },
  { bucket: "vessence", id: "royalton-vessence", name: "Royalton Vessence", brandId: 2036 },
  { bucket: "reserve", id: "royalton-reserve", name: "Royalton Reserve", brandId: 2037 },
  { bucket: "planet-hollywood", id: "planet-hollywood", name: "Planet Hollywood by Royalton", brandId: 18 },
  {
    bucket: "ph-adult-scene",
    id: "planet-hollywood-adult-scene",
    name: "Planet Hollywood Adult Scene by Royalton",
    brandId: 21,
  },
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

const brands = BRAND_DEFS.map((b) => ({
  id: b.id,
  name: b.name,
  brandId: b.brandId,
  hotels: hotelsByBucket.get(b.bucket).sort((a, c) => a.name.localeCompare(c.name)),
}));

const banner = `// GENERATED FILE — do not edit by hand.
// Regenerate with: npm run gen:data
// Source: src/data/source/resorts_principal.csv + room_inventory_2026.csv
`;

const body = `
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
`;

writeFileSync(OUT_FILE, banner + body);
console.log(`Wrote ${OUT_FILE}`);
for (const b of brands) {
  console.log(`  ${b.name}: ${b.hotels.length} hotel(s)`);
}
