import { SOURCE_BRANDS } from "./royaltonResorts.generated";

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
  roomCode: string;
  totalRooms: number | null;
  bedType: string;
  maxOccupancy: number | null;
  treatment: string | null;
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
  country: string;
  categories: Category[];
}

export interface Brand {
  id: string;
  name: string;
  brandId: number;
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

function hueForHotel(hotelId: string): number {
  let h = 0;
  for (const c of hotelId) h = (h * 31 + c.charCodeAt(0)) % 360;
  return h;
}

const PLACEHOLDER_CATEGORIES: { id: string; name: string; count: number; hueOffset: number }[] = [
  { id: "around-resort", name: "Around Resort", count: 14, hueOffset: 40 },
  { id: "restaurants-bars", name: "Restaurants & Bars", count: 10, hueOffset: 70 },
  { id: "pools-beach", name: "Pools & Beach", count: 12, hueOffset: 100 },
  { id: "weddings", name: "Weddings", count: 8, hueOffset: 130 },
  { id: "groups-meetings", name: "Groups & Meetings", count: 6, hueOffset: 160 },
  { id: "spa-activities", name: "Spa & Activities", count: 9, hueOffset: 190 },
  { id: "kids-family", name: "Kids & Family", count: 7, hueOffset: 220 },
  { id: "entertainment", name: "Entertainment", count: 6, hueOffset: 250 },
  { id: "resort-map", name: "Resort Map", count: 2, hueOffset: 280 },
  { id: "travel-partner-info", name: "Travel Partner Info", count: 6, hueOffset: 300 },
  { id: "logos-brand-assets", name: "Logos & Brand Assets", count: 5, hueOffset: 320 },
  { id: "videos", name: "Videos", count: 4, hueOffset: 340 },
];

export const BRANDS: Brand[] = SOURCE_BRANDS.map((brand) => ({
  id: brand.id,
  name: brand.name,
  brandId: brand.brandId,
  hotels: brand.hotels.map((hotel) => {
    const hueBase = hueForHotel(hotel.id);
    const categories: Category[] = [];

    if (hotel.rooms.length > 0) {
      categories.push({
        id: "accommodations",
        name: "Accommodations",
        rooms: hotel.rooms.map((room, i) => ({
          id: `${hotel.id}-${room.roomCode}`,
          name: room.name,
          tier: room.tier,
          roomCode: room.roomCode,
          totalRooms: room.totalRooms,
          bedType: room.bedType,
          maxOccupancy: room.maxOccupancy,
          treatment: room.treatment,
          photos: photos(hueBase + i * 11, 5 + (i % 4)),
        })),
      });
    }

    for (const c of PLACEHOLDER_CATEGORIES) {
      categories.push({ id: c.id, name: c.name, photos: photos(hueBase + c.hueOffset, c.count) });
    }

    return {
      id: hotel.id,
      name: hotel.name,
      country: hotel.country,
      categories,
    };
  }),
}));
