export type Orientation = "landscape" | "portrait";

export interface Photo {
  id: string;
  hq: boolean;
  orientation: Orientation;
  tags: string[];
  hue: number;
}

export interface RoomType {
  id: string;
  name: string;
  tier: number; // 1 = lowest tier, higher = better
  photos: Photo[];
}

export interface Category {
  id: string;
  name: string;
  rooms?: RoomType[];
  photos?: Photo[];
}

export interface Hotel {
  id: string;
  name: string;
  categories: Category[];
}

export interface Brand {
  id: string;
  name: string;
  hotels: Hotel[];
}

let photoSeq = 0;
function makePhoto(hue: number, i: number): Photo {
  photoSeq++;
  return {
    id: `ph-${photoSeq}`,
    hq: i % 3 !== 0,
    orientation: i % 4 === 0 ? "portrait" : "landscape",
    tags: [],
    hue,
  };
}

function photos(hue: number, count: number): Photo[] {
  return Array.from({ length: count }, (_, i) => makePhoto(hue, i));
}

const ACCOMMODATION_TIERS: { name: string; tier: number }[] = [
  { name: "Luxury Junior Suite", tier: 1 },
  { name: "Deluxe Junior Suite", tier: 2 },
  { name: "One Bedroom Suite", tier: 3 },
  { name: "Presidential Suite", tier: 4 },
];

function makeHotel(id: string, name: string, hueBase: number): Hotel {
  return {
    id,
    name,
    categories: [
      {
        id: "accommodations",
        name: "Accommodations",
        rooms: ACCOMMODATION_TIERS.map((t, i) => ({
          id: `${id}-room-${i}`,
          name: t.name,
          tier: t.tier,
          photos: photos(hueBase + i * 12, 6 + i * 2),
        })),
      },
      { id: "around-resort", name: "Around Resort", photos: photos(hueBase + 40, 14) },
      { id: "restaurants", name: "Restaurants", photos: photos(hueBase + 80, 10) },
      { id: "weddings", name: "Weddings", photos: photos(hueBase + 120, 8) },
      { id: "spa-activities", name: "Spa & Activities", photos: photos(hueBase + 160, 9) },
    ],
  };
}

export const BRANDS: Brand[] = [
  {
    id: "royalton-luxury",
    name: "Royalton Luxury Resorts",
    hotels: [
      makeHotel("bavaro", "Bavaro", 200),
      makeHotel("punta-cana", "Punta Cana", 210),
      makeHotel("negril", "Negril", 20),
      makeHotel("blue-waters", "Blue Waters", 30),
    ],
  },
  {
    id: "chic-resorts",
    name: "CHIC Resorts",
    hotels: [makeHotel("chic-punta-cana", "Punta Cana", 320), makeHotel("chic-montego-bay", "Montego Bay", 330)],
  },
  {
    id: "hideaway",
    name: "Hideaway at Royalton",
    hotels: [makeHotel("riviera-cancun", "Riviera Cancun", 260), makeHotel("riviera-maya", "Riviera Maya", 265)],
  },
  {
    id: "royalton-splash",
    name: "Royalton Splash Resorts",
    hotels: [makeHotel("antigua", "Antigua", 140)],
  },
  {
    id: "grand-lido",
    name: "Grand Lido",
    hotels: [makeHotel("negril-lido", "Negril", 45)],
  },
  {
    id: "royalton-blue-waters",
    name: "Royalton Blue Waters",
    hotels: [makeHotel("montego-bay-bw", "Montego Bay", 50)],
  },
  {
    id: "faranda",
    name: "Faranda Hotels",
    hotels: [makeHotel("bogota", "Bogota", 5)],
  },
  {
    id: "royalton-cayo",
    name: "Royalton Cayo Santa Maria",
    hotels: [makeHotel("cayo-santa-maria", "Cayo Santa Maria", 175)],
  },
  {
    id: "memories",
    name: "Memories Resorts",
    hotels: [makeHotel("varadero", "Varadero", 95)],
  },
];

export function allRoomTypeNames(): string[] {
  const names = new Set<string>();
  for (const b of BRANDS) {
    for (const h of b.hotels) {
      for (const c of h.categories) {
        for (const r of c.rooms ?? []) names.add(r.name);
      }
    }
  }
  return Array.from(names);
}
