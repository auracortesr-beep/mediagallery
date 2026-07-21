// GENERATED FILE — do not edit by hand.
// Regenerate with: npm run gen:data
// Source: src/data/source/resorts_principal.csv + room_inventory_2026.csv
//         + src/data/source/media_photos.csv (optional real-photo overrides)

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

export const SOURCE_BRANDS: SourceBrand[] = [
  {
    "id": "royalton-luxury",
    "name": "Royalton Luxury Resorts",
    "brandId": 1,
    "hotels": [
      {
        "id": "ran",
        "name": "Royalton Antigua",
        "country": "Antigua",
        "type": "Family",
        "rooms": [
          {
            "roomCode": "LXUUJ",
            "name": "Luxury Junior Suite",
            "tier": 1,
            "totalRooms": 76,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": null
          },
          {
            "roomCode": "LXOUJ",
            "name": "Luxury Junior Suite Bay View (2 Handicap)",
            "tier": 2,
            "totalRooms": 124,
            "bedType": "1 King / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": null
          },
          {
            "roomCode": "LXUUJD",
            "name": "Luxury Junior Suite DC",
            "tier": 3,
            "totalRooms": 20,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXOUJD",
            "name": "Luxury Junior Suite Bay View DC",
            "tier": 4,
            "totalRooms": 44,
            "bedType": "1 King / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXUWJD",
            "name": "Luxury Junior Suite Swim Out DC",
            "tier": 5,
            "totalRooms": 22,
            "bedType": "1 King / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMUOB",
            "name": "Chairmans Overwater Bungalows DC",
            "tier": 6,
            "totalRooms": 6,
            "bedType": "1 King",
            "minOccupancy": 1,
            "maxOccupancy": 2,
            "maxAdults": 2,
            "kidsMax": null,
            "treatment": "Diamond Club"
          }
        ]
      },
      {
        "id": "rba",
        "name": "Royalton Bavaro",
        "country": "Dominican Republic",
        "type": "Family",
        "rooms": [
          {
            "roomCode": "LXUUJ",
            "name": "Luxury Junior Suite (2 Handicap)",
            "tier": 1,
            "totalRooms": 299,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": null
          },
          {
            "roomCode": "LXUUJD",
            "name": "Luxury Junior Suite DC",
            "tier": 2,
            "totalRooms": 14,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXOUJ",
            "name": "Luxury Junior Suite Ocean View",
            "tier": 3,
            "totalRooms": 32,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": null
          },
          {
            "roomCode": "LXOUJD",
            "name": "Luxury Junior Suite Ocean View DC",
            "tier": 4,
            "totalRooms": 26,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXUWJ",
            "name": "Luxury Junior Suite Swim Out (3 Handicap)",
            "tier": 5,
            "totalRooms": 148,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": null
          },
          {
            "roomCode": "LXUWJD",
            "name": "Luxury Junior Suite Swim Out DC",
            "tier": 6,
            "totalRooms": 44,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LFUUS",
            "name": "Luxury Family Suite",
            "tier": 7,
            "totalRooms": 71,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LFOUSD",
            "name": "Luxury Family Suite Ocean View DC",
            "tier": 8,
            "totalRooms": 28,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPUU1",
            "name": "Luxury Presidential One Bedroom Suite",
            "tier": 9,
            "totalRooms": 47,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LPUU2",
            "name": "Luxury Presidential Two Bedroom Suite",
            "tier": 10,
            "totalRooms": null,
            "bedType": "1 King + 2 Queen + 3 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": null
          },
          {
            "roomCode": "LPUU1D",
            "name": "Luxury Presidential One Bedroom Suite DC",
            "tier": 11,
            "totalRooms": 16,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPUU2D",
            "name": "Luxury Presidential Two Bedroom Suite DC",
            "tier": 12,
            "totalRooms": null,
            "bedType": "1 King + 2 Queen + 2 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMFU2D",
            "name": "Luxury Chairman's Two Bedroom Suite Ocean Front DC",
            "tier": 13,
            "totalRooms": 3,
            "bedType": "1 King + 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 6,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMFU3D",
            "name": "Luxury Chairman's Three Bedroom Suite Ocean Front DC",
            "tier": 14,
            "totalRooms": null,
            "bedType": "2 King + 2 Queen + 1 Sofa / 1 King + 4 Queen + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 10,
            "maxAdults": 8,
            "kidsMax": "6",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMFU4D",
            "name": "Luxury Chairman's Four Bedroom Suite Ocean Front DC",
            "tier": 15,
            "totalRooms": null,
            "bedType": "",
            "minOccupancy": 1,
            "maxOccupancy": 12,
            "maxAdults": 12,
            "kidsMax": "8",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMUW2D",
            "name": "Luxury Chairman's Two Bedroom Suite Swim Out DC",
            "tier": 16,
            "totalRooms": 1,
            "bedType": "1 King + 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 6,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMUW3D",
            "name": "Luxury Chairman's Three Bedroom Swim Out Front DC",
            "tier": 17,
            "totalRooms": null,
            "bedType": "1 King",
            "minOccupancy": 1,
            "maxOccupancy": 10,
            "maxAdults": 8,
            "kidsMax": "6",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMUW4D",
            "name": "Luxury Chairman's Four Bedroom Swim Out Front DC",
            "tier": 18,
            "totalRooms": null,
            "bedType": "",
            "minOccupancy": 1,
            "maxOccupancy": 12,
            "maxAdults": 12,
            "kidsMax": "8",
            "treatment": "Diamond Club"
          }
        ]
      },
      {
        "id": "rbw",
        "name": "Royalton Blue Waters Montego Bay",
        "country": "Jamaica",
        "type": "Family",
        "rooms": [
          {
            "roomCode": "LXUUJ",
            "name": "Luxury Junior Suite (2 Handicap)",
            "tier": 1,
            "totalRooms": 24,
            "bedType": "1 King + Sofa Bed / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LXOUJ",
            "name": "Luxury Junior Suite Ocean View",
            "tier": 2,
            "totalRooms": 120,
            "bedType": "1 King + Sofa Bed / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LXOUJD",
            "name": "Luxury Junior Suite Ocean View DC",
            "tier": 3,
            "totalRooms": 50,
            "bedType": "1 King + Sofa Bed / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXUWJ",
            "name": "Luxury Junior Suite Swim Out",
            "tier": 4,
            "totalRooms": 12,
            "bedType": "1 King + Sofa Bed / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LXUWJD",
            "name": "Luxury Junior Suite Swim Out DC",
            "tier": 5,
            "totalRooms": 12,
            "bedType": "1 King + Sofa Bed / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPOU1D",
            "name": "Luxury Presidential Ocean View One Bedroom Suite DC",
            "tier": 6,
            "totalRooms": 6,
            "bedType": "1 King + 1 Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPOU2D",
            "name": "Luxury Presidential Ocean View Two Bedroom Suite DC",
            "tier": 7,
            "totalRooms": null,
            "bedType": "1 King + 2 Queen + 1 Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMOU2D",
            "name": "Luxury Chairman's Ocean View Two Bedroom Suite DC",
            "tier": 8,
            "totalRooms": 1,
            "bedType": "1 King + 2 Queen + 1 Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 6,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMOU3D",
            "name": "Luxury Chairman's Ocean View Three Bedroom Suite DC",
            "tier": 9,
            "totalRooms": null,
            "bedType": "1 King + 4 Queen + 1 Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 10,
            "maxAdults": 8,
            "kidsMax": "6",
            "treatment": "Diamond Club"
          }
        ]
      },
      {
        "id": "rgren",
        "name": "Royalton Grenada",
        "country": "Grenada",
        "type": "Family",
        "rooms": [
          {
            "roomCode": "LXUUR",
            "name": "Luxury Room (2 Handicap)",
            "tier": 1,
            "totalRooms": 78,
            "bedType": "1 King / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": null
          },
          {
            "roomCode": "LXUUJ",
            "name": "Luxury Junior Suite",
            "tier": 2,
            "totalRooms": 20,
            "bedType": "1 King + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 2,
            "kidsMax": "2",
            "treatment": null
          },
          {
            "roomCode": "LXOUR",
            "name": "Luxury Ocean View Room",
            "tier": 3,
            "totalRooms": 48,
            "bedType": "1 King / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": null
          },
          {
            "roomCode": "LXFUR",
            "name": "Luxury Room Ocean Front",
            "tier": 4,
            "totalRooms": 38,
            "bedType": "1 King / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": null
          },
          {
            "roomCode": "LXFKRD",
            "name": "Luxury Room Beach Walkout Diamond Club",
            "tier": 5,
            "totalRooms": 17,
            "bedType": "1 King / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 2,
            "kidsMax": "1 (0-2)",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXFUJD",
            "name": "Luxury Junior Suite Ocean Front DC",
            "tier": 6,
            "totalRooms": 39,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXFWJD",
            "name": "Luxury Junior Suite Ocean Front Swim Out DC",
            "tier": 7,
            "totalRooms": 13,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPOU1D",
            "name": "Luxury Presidential Ocean View One Bedroom Suite DC",
            "tier": 8,
            "totalRooms": 10,
            "bedType": "1 King + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPOU2D",
            "name": "Luxury Presidential Ocean View Two Bedroom Suite DC",
            "tier": 9,
            "totalRooms": null,
            "bedType": "1 King + 2 Queen + 2 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPFU1D",
            "name": "Luxury Presidential Ocean Front One Bedroom Suite DC",
            "tier": 10,
            "totalRooms": 4,
            "bedType": "1 King + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPFU2D",
            "name": "Luxury Presidential Ocean Front Two Bedrooms Suite DC",
            "tier": 11,
            "totalRooms": null,
            "bedType": "1 King + 2 Queen + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMFU2D",
            "name": "Luxury Chairmans Two Bedrooms Suite Ocean Front DC",
            "tier": 12,
            "totalRooms": 1,
            "bedType": "1 King + 2 Queen + 2 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMFU3D",
            "name": "Luxury Chairmans Three Bedrooms Ocean Front Suite DC",
            "tier": 13,
            "totalRooms": null,
            "bedType": "1 King + 4 Queen + 2 Sofa / 2 King + 2 Queen + 2 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 10,
            "maxAdults": 8,
            "kidsMax": "6",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMFU4D",
            "name": "Luxury Chairmans Four Bedrooms Ocean Front Suite DC",
            "tier": 14,
            "totalRooms": null,
            "bedType": "2 King + 4 Queen + 2 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 16,
            "maxAdults": 12,
            "kidsMax": "8",
            "treatment": "Diamond Club"
          }
        ]
      },
      {
        "id": "rng",
        "name": "Royalton Negril",
        "country": "Jamaica",
        "type": "Family",
        "rooms": [
          {
            "roomCode": "LXUUJ",
            "name": "Luxury Junior Suite",
            "tier": 1,
            "totalRooms": 45,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LXOUJ",
            "name": "Luxury Junior Suite Ocean View",
            "tier": 2,
            "totalRooms": 121,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LXOUJD",
            "name": "Luxury Junior Suite Ocean View DC (2 Handicap)",
            "tier": 3,
            "totalRooms": 48,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXUWJ",
            "name": "Luxury Junior Suite Swim Out (1 Handicap)",
            "tier": 4,
            "totalRooms": 68,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LXUWJD",
            "name": "Luxury Junior Suite Swim Out DC",
            "tier": 5,
            "totalRooms": 28,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LFOUS",
            "name": "Luxury Family Suite Ocean View",
            "tier": 6,
            "totalRooms": 28,
            "bedType": "1 King + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LFOUSD",
            "name": "Luxury Family Suite Ocean View DC",
            "tier": 7,
            "totalRooms": 20,
            "bedType": "1 King + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPOU1",
            "name": "Luxury Presidential One Bedroom Ocean View",
            "tier": 8,
            "totalRooms": 24,
            "bedType": "1 King + 2 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 5,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LPOU2",
            "name": "Luxury Presidential Two Bedroom Ocean View",
            "tier": 9,
            "totalRooms": null,
            "bedType": "1 King + 2 Queen + 3 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 9,
            "maxAdults": 7,
            "kidsMax": "4",
            "treatment": null
          },
          {
            "roomCode": "LPOU1D",
            "name": "Luxury Presidential One Bedroom Ocean View DC",
            "tier": 10,
            "totalRooms": 10,
            "bedType": "1 King + 2 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 5,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPOU2D",
            "name": "Luxury Presidential Two Bedroom Ocean View DC",
            "tier": 11,
            "totalRooms": null,
            "bedType": "1 King + 2 Queen + 3 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 9,
            "maxAdults": 7,
            "kidsMax": "4",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPOW1D",
            "name": "Luxury Presidential One Bedroom Swim Out DC",
            "tier": 12,
            "totalRooms": 4,
            "bedType": "1 King + 2 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 5,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "PHOJ1D",
            "name": "Luxury Penthouse One Bedroom Suite Ocean View Terrace Jacuzi DC",
            "tier": 13,
            "totalRooms": 6,
            "bedType": "1 King + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMFU2D",
            "name": "Luxury Chairman Two Bedroom Ocean Front Suite DC",
            "tier": 14,
            "totalRooms": 4,
            "bedType": "1 King + 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 6,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMFU3D",
            "name": "Luxury Chairman Three Bedroom Ocean Front Suite DC",
            "tier": 15,
            "totalRooms": null,
            "bedType": "1 King + 4 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 10,
            "maxAdults": 8,
            "kidsMax": "6",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMFU4D",
            "name": "Luxury Chairman Four Bedroom Ocean Front Suite DC",
            "tier": 16,
            "totalRooms": null,
            "bedType": "2 King + 4 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 14,
            "maxAdults": 12,
            "kidsMax": "8",
            "treatment": "Diamond Club"
          }
        ]
      },
      {
        "id": "rpc",
        "name": "Royalton Punta Cana",
        "country": "Dominican Republic",
        "type": "Family",
        "rooms": [
          {
            "roomCode": "LXUUR",
            "name": "Luxury Room (2 Handicap)",
            "tier": 1,
            "totalRooms": 166,
            "bedType": "1 King + 1 Sofa / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": null
          },
          {
            "roomCode": "LXUURD",
            "name": "Luxury Room DC",
            "tier": 2,
            "totalRooms": 95,
            "bedType": "1 King + 1 Sofa / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXOURD",
            "name": "Luxury Ocean View Room DC",
            "tier": 3,
            "totalRooms": 12,
            "bedType": "1 King + 1 Sofa / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXUWRD",
            "name": "Luxury Swim Out Room DC",
            "tier": 4,
            "totalRooms": 25,
            "bedType": "1 King + 1 Sofa / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "HMFZSD",
            "name": "Honeymoon Jacuzzi Suite DC",
            "tier": 5,
            "totalRooms": 2,
            "bedType": "1 King",
            "minOccupancy": 1,
            "maxOccupancy": 2,
            "maxAdults": 2,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPUZ1D",
            "name": "Luxury Presidential Jacuzzi One Bedroom Suite DC",
            "tier": 6,
            "totalRooms": 10,
            "bedType": "1 King + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPUZ2D",
            "name": "Luxury Presidential Jacuzzi Two Bedroom Suite DC",
            "tier": 7,
            "totalRooms": null,
            "bedType": "1 King + 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPUY1D",
            "name": "Luxury Presidential Jacuzzi Swim Out One Bedroom Suite DC",
            "tier": 8,
            "totalRooms": 3,
            "bedType": "1 King + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPUY2D",
            "name": "Luxury Presidential Jacuzzi Swim Out Two Bedroom Suite DC",
            "tier": 9,
            "totalRooms": null,
            "bedType": "1 King + 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMFU2D",
            "name": "Luxury Chairman Two Bedroom Suite Ocean Front Suite DC",
            "tier": 10,
            "totalRooms": 2,
            "bedType": "1 King + 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": "Diamond Club"
          }
        ]
      },
      {
        "id": "rrc",
        "name": "Royalton Riviera Cancun",
        "country": "Mexico",
        "type": "Family",
        "rooms": [
          {
            "roomCode": "LXUUJ",
            "name": "Luxury Junior Suite (5 Handicap)",
            "tier": 1,
            "totalRooms": 294,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LXUZS",
            "name": "Luxury Suite With Terrace Jacuzzi",
            "tier": 2,
            "totalRooms": 61,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LXOUJ",
            "name": "Luxury Junior Suite Ocean View",
            "tier": 3,
            "totalRooms": 75,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LXOUJD",
            "name": "Luxury Junior Suite Ocean View DC",
            "tier": 4,
            "totalRooms": 40,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXOZS",
            "name": "Luxury Suite Ocean View With Terrace Jacuzzi",
            "tier": 5,
            "totalRooms": 60,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LXOZSD",
            "name": "Luxury Suite Ocean View With Terrace Jacuzzi DC",
            "tier": 6,
            "totalRooms": 64,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXUWJ",
            "name": "Luxury Junior Suite Swim Out",
            "tier": 7,
            "totalRooms": 69,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LXUWJD",
            "name": "Luxury Junior Suite Swim Out DC",
            "tier": 8,
            "totalRooms": 40,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LFOUS",
            "name": "Luxury Family Suite Ocean View",
            "tier": 9,
            "totalRooms": 31,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LFOUSD",
            "name": "Luxury Family Suite Ocean View DC",
            "tier": 10,
            "totalRooms": 17,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPUU1D",
            "name": "Luxury Presidential One Bedroom Suite DC",
            "tier": 11,
            "totalRooms": 15,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPOU1",
            "name": "Luxury Presidential One Bedroom Suite Ocean View",
            "tier": 12,
            "totalRooms": 21,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LPOU2",
            "name": "Luxury Presidential Two Bedroom Suite Ocean View",
            "tier": 13,
            "totalRooms": null,
            "bedType": "1 King + 2 Queen + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": null
          },
          {
            "roomCode": "LPOZ1D",
            "name": "Luxury Presidential One Bedroom Suite Ocean View DC",
            "tier": 14,
            "totalRooms": 23,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPOZ2D",
            "name": "Luxury Presidential Two Bedroom Suite Ocean View DC",
            "tier": 15,
            "totalRooms": null,
            "bedType": "1 King + 2 Queen + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPUW1",
            "name": "Luxury Presidential One Bedroom Suite Swim Out",
            "tier": 16,
            "totalRooms": 7,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LPUW2",
            "name": "Luxury Presidential Two Bedroom Suite Swim Out",
            "tier": 17,
            "totalRooms": null,
            "bedType": "1 King + 2 Queen + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": null
          },
          {
            "roomCode": "LPUW1D",
            "name": "Luxury Presidential One Bedroom Suite Swim Out DC",
            "tier": 18,
            "totalRooms": 9,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPUW2D",
            "name": "Luxury Presidential Two Bedroom Suite Swim Out DC",
            "tier": 19,
            "totalRooms": null,
            "bedType": "1 King + 2 Queen + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPOR1",
            "name": "Luxury Presidential One Bedroom Suite Ocean View Rooftop Pool",
            "tier": 20,
            "totalRooms": 4,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "CMFU2D",
            "name": "Luxury Chairman's Two Bedroom Suite Ocean Front DC",
            "tier": 21,
            "totalRooms": 3,
            "bedType": "1 King + 2 Queen + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMFU3D",
            "name": "Luxury Chairman's Three Bedroom Suite Ocean Front DC",
            "tier": 22,
            "totalRooms": null,
            "bedType": "1 King + 4 Queen + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 12,
            "maxAdults": 10,
            "kidsMax": "6",
            "treatment": "Diamond Club"
          }
        ]
      },
      {
        "id": "rsl",
        "name": "Royalton Saint Lucia",
        "country": "Saint Lucia",
        "type": "Family",
        "rooms": [
          {
            "roomCode": "LXUUJ",
            "name": "Luxury Junior Suite",
            "tier": 1,
            "totalRooms": 28,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LXOUJ",
            "name": "Luxury Junior Suite Ocean View (1 Handicap)",
            "tier": 2,
            "totalRooms": 102,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LXOUJD",
            "name": "Luxury Junior Suite Ocean View DC (1 Handicap)",
            "tier": 3,
            "totalRooms": 36,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXUWJ",
            "name": "Luxury Junior Suite Swim Out",
            "tier": 4,
            "totalRooms": 40,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LXUWJD",
            "name": "Luxury Junior Suite Swim Out DC",
            "tier": 5,
            "totalRooms": 10,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LFUUS",
            "name": "Luxury Family Suite Ocean View",
            "tier": 6,
            "totalRooms": 40,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LFOUSD",
            "name": "Luxury Family Suite Ocean View DC",
            "tier": 7,
            "totalRooms": 8,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPOU1",
            "name": "Luxury Presidential One Bedroom Ocean View",
            "tier": 8,
            "totalRooms": 3,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LPOU1D",
            "name": "Luxury Presidential One Bedroom Ocean View DC",
            "tier": 9,
            "totalRooms": 8,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPUW1D",
            "name": "Luxury Presidential One Bedroom Swim Out DC",
            "tier": 10,
            "totalRooms": 2,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "PHOJ1D",
            "name": "Luxury Penthouse One Bedroom Suite Ocean View Terrace Jacuzzi DC",
            "tier": 11,
            "totalRooms": 8,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMFU2D",
            "name": "Luxury Chairman Two Bedroom Ocean Front Suite DC",
            "tier": 12,
            "totalRooms": 4,
            "bedType": "1 King + 2 Queen + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMFW2D",
            "name": "Luxury Chairman Two Bedroom Ocean Front Swim Out Suite DC",
            "tier": 13,
            "totalRooms": 1,
            "bedType": "1 King + 2 Queen + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": "Diamond Club"
          }
        ]
      },
      {
        "id": "rspc",
        "name": "Royalton Splash Punta Cana",
        "country": "Dominican Republic",
        "type": "Family",
        "rooms": [
          {
            "roomCode": "PRUUR",
            "name": "Luxury Room",
            "tier": 1,
            "totalRooms": 360,
            "bedType": "1 King / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": null
          },
          {
            "roomCode": "DFUUS",
            "name": "Luxury Family Room",
            "tier": 2,
            "totalRooms": 32,
            "bedType": "1 King + 1 Bunk Bed",
            "minOccupancy": 1,
            "maxOccupancy": 5,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "PRUURD",
            "name": "Luxury Room DC (4 Handicap)",
            "tier": 3,
            "totalRooms": 79,
            "bedType": "1 King / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "DFUUSD",
            "name": "Luxury Family Room Diamond Club",
            "tier": 4,
            "totalRooms": 16,
            "bedType": "1 King + 1 Bunk Bed",
            "minOccupancy": 1,
            "maxOccupancy": 5,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "PRUZJD",
            "name": "Luxury Jacuzzi Junior Suite Diamond Club",
            "tier": 5,
            "totalRooms": 26,
            "bedType": "1 King / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "PSUZ1D",
            "name": "Luxury Presidential Jacuzzi One Bedroom Suite Diamond Club",
            "tier": 6,
            "totalRooms": 12,
            "bedType": "1 King + Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "2",
            "treatment": "Diamond Club"
          }
        ]
      },
      {
        "id": "rsc",
        "name": "Royalton Splash Riviera Cancun",
        "country": "Mexico",
        "type": "Family",
        "rooms": [
          {
            "roomCode": "LXUUJ",
            "name": "Luxury Junior Suite (6 Handicap)",
            "tier": 1,
            "totalRooms": 371,
            "bedType": "1 King / 2 Queen + Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LXOUJ",
            "name": "Luxury Junior Suite Ocean View",
            "tier": 2,
            "totalRooms": 117,
            "bedType": "1 King / 2 Queen + Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LXFUJ",
            "name": "Luxury Junior Suite Ocean Front",
            "tier": 3,
            "totalRooms": 106,
            "bedType": "1 King / 2 Queen + Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LXFZJ",
            "name": "Luxury Junior Suite Ocean Front Terrace Jacuzzi",
            "tier": 4,
            "totalRooms": 56,
            "bedType": "1 King / 2 Queen + Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LXUWJ",
            "name": "Luxury Junior Suite Swim Out",
            "tier": 5,
            "totalRooms": 59,
            "bedType": "1 King / 2 Queen + Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LXUU2",
            "name": "Two Bedroom Luxury Junior Suite",
            "tier": 6,
            "totalRooms": 14,
            "bedType": "1 King + 2 Queen + 2 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 8,
            "kidsMax": "6",
            "treatment": null
          },
          {
            "roomCode": "LXOUJD",
            "name": "Luxury Junior Suite Ocean View Diamond Club",
            "tier": 7,
            "totalRooms": 80,
            "bedType": "2 Queen + Sofa Bed / 1 King",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXFUJD",
            "name": "Luxury Junior Suite Ocean Front Diamond Club",
            "tier": 8,
            "totalRooms": 62,
            "bedType": "2 Queen + Sofa Bed / 1 King",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXFZJD",
            "name": "Luxury Junior Suite Ocean Front Terrace Jacuzzi Diamond Club",
            "tier": 9,
            "totalRooms": 33,
            "bedType": "1 King / 2 Queen + Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXUWJD",
            "name": "Luxury Junior Suite Swim Out Diamond Club",
            "tier": 10,
            "totalRooms": 33,
            "bedType": "2 Queen + Sofa Bed / 1 King",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXFWJD",
            "name": "Luxury Junior Suite Ocean Front Swim Out Diamond Club",
            "tier": 11,
            "totalRooms": 23,
            "bedType": "1 King / 2 Queen + Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXOU2D",
            "name": "Two Bedroom Luxury Junior Suite Ocean View Diamond Club",
            "tier": 12,
            "totalRooms": 8,
            "bedType": "1 King + 2 Queen + 2 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 8,
            "kidsMax": "6",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXFU2D",
            "name": "Two Bedroom Luxury Junior Suite Ocean Front Diamond Club",
            "tier": 13,
            "totalRooms": 22,
            "bedType": "1 King + 2 Queen + 2 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 8,
            "kidsMax": "6",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPFU1D",
            "name": "Luxury Presidential Ocean Front One Bedroom Suite Diamond Club",
            "tier": 14,
            "totalRooms": 15,
            "bedType": "1 King + 1 Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "SCFU2D",
            "name": "Luxury Sky Chairman Suite Two Bedroom Ocean Front Diamond Club",
            "tier": 15,
            "totalRooms": 4,
            "bedType": "1 King + 2 Queen + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 7,
            "kidsMax": "6",
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMFU2D",
            "name": "Luxury Chairman Two Bedroom Suite Ocean Front Diamond Club",
            "tier": 16,
            "totalRooms": 1,
            "bedType": "1 King + 2 Queen + 2 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 10,
            "maxAdults": 8,
            "kidsMax": "8",
            "treatment": "Diamond Club"
          }
        ]
      }
    ]
  },
  {
    "id": "royalton-hideaway",
    "name": "Royalton Hideaway Resorts",
    "brandId": 3,
    "hotels": [
      {
        "id": "hbw",
        "name": "Royalton Hideaway Blue Waters",
        "country": "Jamaica",
        "type": "Adults Only",
        "rooms": [
          {
            "roomCode": "LXUUR",
            "name": "Luxury Room",
            "tier": 1,
            "totalRooms": 162,
            "bedType": "1 King / 2 Twin",
            "minOccupancy": 1,
            "maxOccupancy": 2,
            "maxAdults": 2,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LXOUR",
            "name": "Luxury Ocean View Room",
            "tier": 2,
            "totalRooms": 105,
            "bedType": "1 King / 2 Twin",
            "minOccupancy": 1,
            "maxOccupancy": 2,
            "maxAdults": 2,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LXOURD",
            "name": "Luxury Ocean View Room Diamond Club",
            "tier": 3,
            "totalRooms": 28,
            "bedType": "1 King / 2 Twin",
            "minOccupancy": 1,
            "maxOccupancy": 2,
            "maxAdults": 2,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXOUJD",
            "name": "Luxury Junior Suite Ocean View Diamond Club",
            "tier": 4,
            "totalRooms": 15,
            "bedType": "1 King / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXOCJD",
            "name": "Luxury Junior Suite Ocean Corner View Diamond Club",
            "tier": 5,
            "totalRooms": 8,
            "bedType": "1 King",
            "minOccupancy": 1,
            "maxOccupancy": 2,
            "maxAdults": 2,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXOZJD",
            "name": "Luxury Junior Suite Ocean View Terrace Jacuzzi Diamond Club",
            "tier": 6,
            "totalRooms": 6,
            "bedType": "1 King",
            "minOccupancy": 1,
            "maxOccupancy": 2,
            "maxAdults": 2,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXUWJD",
            "name": "Luxury Junior Suite Swim Out Diamond Club",
            "tier": 7,
            "totalRooms": 11,
            "bedType": "1 King / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPOZ1D",
            "name": "Luxury Presidential Jacuzzi Ocean View One Bedroom Suite Diamond Club",
            "tier": 8,
            "totalRooms": 12,
            "bedType": "1 King + 1 Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPOZD2",
            "name": "Luxury Presidential Jacuzzi Ocean View Two Bedroom Suite Diamond Club",
            "tier": 9,
            "totalRooms": null,
            "bedType": "1 King + 2 Queen + 1 Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 7,
            "maxAdults": 7,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPUY1D",
            "name": "Luxury Presidential Jacuzzi Swim Out Pool View One Bedroom Suite Diamond Club",
            "tier": 10,
            "totalRooms": 4,
            "bedType": "1 King + 1 Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPUY2D",
            "name": "Luxury Presidential Jacuzzi Swim Out Pool View Two Bedroom Suite Diamond Club",
            "tier": 11,
            "totalRooms": null,
            "bedType": "1 King + 2 Queen + 1 Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 5,
            "maxAdults": 5,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMFW1D",
            "name": "Chairman Beach Walkout Swim Out Suite Diamond Club",
            "tier": 12,
            "totalRooms": 1,
            "bedType": "1 King",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          }
        ]
      },
      {
        "id": "hng",
        "name": "Royalton Hideaway Negril",
        "country": "Jamaica",
        "type": "Adults Only",
        "rooms": [
          {
            "roomCode": "LXOUJ",
            "name": "Luxury Junior Suite Ocean View (2 Handicap)",
            "tier": 1,
            "totalRooms": 73,
            "bedType": "1 King / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LXOUJD",
            "name": "Luxury Junior Suite Ocean View DC",
            "tier": 2,
            "totalRooms": 20,
            "bedType": "1 King / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXUWJ",
            "name": "Luxury Junior Suite Swim Out",
            "tier": 3,
            "totalRooms": 26,
            "bedType": "1 King / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LXUWJD",
            "name": "Luxury Junior Suite Swim Out DC",
            "tier": 4,
            "totalRooms": 8,
            "bedType": "1 King / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPOU1",
            "name": "Luxury Presidential One Bedroom Suite Ocean View",
            "tier": 5,
            "totalRooms": 5,
            "bedType": "1 King + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LPOU1D",
            "name": "Luxury Presidential One Bedroom Suite Ocean View DC",
            "tier": 6,
            "totalRooms": 2,
            "bedType": "1 King + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "PHOJ1D",
            "name": "Luxury Penthouse One Bedroom Suite Ocean View Terrace Jacuzzi DC",
            "tier": 7,
            "totalRooms": 4,
            "bedType": "1 King + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          }
        ]
      },
      {
        "id": "hpc",
        "name": "Royalton Hideaway Punta Cana",
        "country": "Dominican Republic",
        "type": "Adults Only",
        "rooms": [
          {
            "roomCode": "LXUUR",
            "name": "Luxury Room",
            "tier": 1,
            "totalRooms": 95,
            "bedType": "1 King + 1 Sofa / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LXUURD",
            "name": "Luxury Room DC",
            "tier": 2,
            "totalRooms": 27,
            "bedType": "1 King + 1 Sofa / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXOURD",
            "name": "Luxury Ocean View Room DC",
            "tier": 3,
            "totalRooms": 22,
            "bedType": "1 King + 1 Sofa / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXUWRD",
            "name": "Luxury Swim Out Room DC",
            "tier": 4,
            "totalRooms": 20,
            "bedType": "1 King + 1 Sofa / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "HMUZSD",
            "name": "Honeymoon Jacuzzi Suite DC",
            "tier": 5,
            "totalRooms": 4,
            "bedType": "1 King",
            "minOccupancy": 1,
            "maxOccupancy": 2,
            "maxAdults": 2,
            "kidsMax": null,
            "treatment": "Diamond Club"
          }
        ]
      },
      {
        "id": "hrc",
        "name": "Royalton Hideaway Riviera Cancun",
        "country": "Mexico",
        "type": "Adults Only",
        "rooms": [
          {
            "roomCode": "LXUUJ",
            "name": "Luxury Junior Suite",
            "tier": 1,
            "totalRooms": 132,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LXUUJD",
            "name": "Luxury Junior Suite DC",
            "tier": 2,
            "totalRooms": 32,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXUZS",
            "name": "Luxury Suite With Terrace Jacuzzi",
            "tier": 3,
            "totalRooms": 44,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LXOUJ",
            "name": "Luxury Junior Suite Ocean View",
            "tier": 4,
            "totalRooms": 15,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LXOUJD",
            "name": "Luxury Junior Suite Ocean View DC",
            "tier": 5,
            "totalRooms": 12,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXOZS",
            "name": "Luxury Suite Ocean View With Terrace Jacuzzi",
            "tier": 6,
            "totalRooms": 21,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LXOZSD",
            "name": "Luxury Suite Ocean View With Terrace Jacuzzi DC",
            "tier": 7,
            "totalRooms": 28,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXUWJ",
            "name": "Luxury Junior Suite Swim Out",
            "tier": 8,
            "totalRooms": 18,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LXUWS",
            "name": "Luxury Suite Swim Out",
            "tier": 9,
            "totalRooms": 18,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LXOWSD",
            "name": "Luxury Suite Swim Out DC",
            "tier": 10,
            "totalRooms": 6,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "HMOUSD",
            "name": "Honeymoon Suite Ocean View DC",
            "tier": 11,
            "totalRooms": 7,
            "bedType": "1 King",
            "minOccupancy": 1,
            "maxOccupancy": 2,
            "maxAdults": 2,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPOU1D",
            "name": "Luxury Presidential One Bedroom Suite Ocean View DC",
            "tier": 12,
            "totalRooms": 10,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          }
        ]
      },
      {
        "id": "hsl",
        "name": "Royalton Hideaway Saint Lucia",
        "country": "Saint Lucia",
        "type": "Adults Only",
        "rooms": [
          {
            "roomCode": "LXUUJ",
            "name": "Luxury Junior Suite (1 Handicap)",
            "tier": 1,
            "totalRooms": 36,
            "bedType": "1 King / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LXUUJD",
            "name": "Luxury Junior Suite DC (1 Handicap)",
            "tier": 2,
            "totalRooms": 10,
            "bedType": "1 King / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXOUJ",
            "name": "Luxury Junior Suite Ocean View (1 Handicap)",
            "tier": 3,
            "totalRooms": 48,
            "bedType": "1 King / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LXOUJD",
            "name": "Luxury Junior Suite Ocean View DC",
            "tier": 4,
            "totalRooms": 26,
            "bedType": "1 King / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXUWJ",
            "name": "Luxury Junior Suite Swim Out",
            "tier": 5,
            "totalRooms": 24,
            "bedType": "1 King / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LXUWJD",
            "name": "Luxury Junior Suite Swim Out DC",
            "tier": 6,
            "totalRooms": 10,
            "bedType": "1 King / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPOU1",
            "name": "Luxury Presidential One Bedroom Ocean View",
            "tier": 7,
            "totalRooms": 8,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LPOU1D",
            "name": "Luxury Presidential One Bedroom Ocean View DC",
            "tier": 8,
            "totalRooms": 2,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "PHOJ1D",
            "name": "Luxury Penthouse One Bedroom Suite Ocean View Terrace Jacuzzi DC",
            "tier": 9,
            "totalRooms": 2,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          }
        ]
      }
    ]
  },
  {
    "id": "royalton-chic",
    "name": "Royalton CHIC Resorts",
    "brandId": 32,
    "hotels": [
      {
        "id": "rchant",
        "name": "Royalton Chic Antigua",
        "country": "Antigua",
        "type": "Adults Only",
        "rooms": [
          {
            "roomCode": "LQGUR",
            "name": "Luxury Garden View Room",
            "tier": 1,
            "totalRooms": 57,
            "bedType": "2 Queen / 1 King",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LQUUR",
            "name": "Luxury Pool View Room",
            "tier": 3,
            "totalRooms": 67,
            "bedType": "2 Queen / 1 King",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LQOUR",
            "name": "Luxury Ocean View Room",
            "tier": 4,
            "totalRooms": 8,
            "bedType": "2 Queen / 1 King",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LQOURD",
            "name": "Luxury Garden View Room Diamond Club",
            "tier": 5,
            "totalRooms": 32,
            "bedType": "2 Queen / 1 King",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LQFURD",
            "name": "Luxury Beach Front Room Diamond Club",
            "tier": 6,
            "totalRooms": 50,
            "bedType": "2 Queen / 1 King",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LQOWJD",
            "name": "Luxury Junior Suite Beach Front Swim Out Diamond Club",
            "tier": 7,
            "totalRooms": 10,
            "bedType": "2 Queen / 1 King",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPOU1D",
            "name": "Luxury Presidential Beach Front One Bedroom Suite Diamond Club",
            "tier": 8,
            "totalRooms": 5,
            "bedType": "1 King + 1 Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPFU1D",
            "name": "Luxury Presidential Ocean Front One Bedroom Suite Diamond Club",
            "tier": 9,
            "totalRooms": 2,
            "bedType": "1 King + 1 Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPFK1D",
            "name": "Luxury Presidential Beach Front Walkout One Bedroom Suite Diamond Club",
            "tier": 10,
            "totalRooms": 2,
            "bedType": "1 King + 1 Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPOW1D",
            "name": "Luxury Presidential Beach Front Swim Out One Bedroom Suite Diamond Club",
            "tier": 11,
            "totalRooms": 1,
            "bedType": "1 King + 1 Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LKUOBD",
            "name": "Luxury Junior Sunset Overwater Suite Diamond Club",
            "tier": 12,
            "totalRooms": 4,
            "bedType": "1 King",
            "minOccupancy": 1,
            "maxOccupancy": 2,
            "maxAdults": 2,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPUOBD",
            "name": "Luxury Presidential Sunset Overwater Suite Diamond Club",
            "tier": 13,
            "totalRooms": 4,
            "bedType": "1 King",
            "minOccupancy": 1,
            "maxOccupancy": 2,
            "maxAdults": 2,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMUOBD",
            "name": "Chairman Sunset Overwater Bungalow Two Bedroom Suite Diamond Club",
            "tier": 14,
            "totalRooms": null,
            "bedType": "2 King",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": "Diamond Club"
          }
        ]
      },
      {
        "id": "rca",
        "name": "Royalton CHIC Cancun",
        "country": "Mexico",
        "type": "Adults Only",
        "rooms": [
          {
            "roomCode": "LXUUJ",
            "name": "Luxury Junior Suite Sunset View (4 Handicap)",
            "tier": 1,
            "totalRooms": 128,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LXUUJD",
            "name": "Luxury Junior Suite Sunset View DC (1 Handicap)",
            "tier": 2,
            "totalRooms": 71,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXOUJ",
            "name": "Luxury Junior Suite Ocean Front",
            "tier": 3,
            "totalRooms": 155,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LXOUJD",
            "name": "Luxury Junior Suite Ocean Front Diamond Club",
            "tier": 4,
            "totalRooms": 68,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LFUUS",
            "name": "Luxury Suite Sunset View",
            "tier": 5,
            "totalRooms": 5,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LFOUS",
            "name": "Luxury Suite Ocean Front",
            "tier": 6,
            "totalRooms": 5,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LPOU1D",
            "name": "Luxury Presidential Ocean Front One Bedroom Suite DC",
            "tier": 7,
            "totalRooms": 9,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPOU2D",
            "name": "Luxury Presidential Ocean Front Two Bedroom Suite DC",
            "tier": 8,
            "totalRooms": null,
            "bedType": "1 King + 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 7,
            "maxAdults": 7,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPUU1D",
            "name": "Luxury Presidential One Bedroom Suite Sunset View DC",
            "tier": 9,
            "totalRooms": 12,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPUU2D",
            "name": "Luxury Presidential Two Bedroom Suite Sunset View DC",
            "tier": 10,
            "totalRooms": null,
            "bedType": "1 King + 2 Queen + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 7,
            "maxAdults": 7,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMFU2D",
            "name": "Luxury Chairmans Two Bedroom Suite Ocean Front DC",
            "tier": 11,
            "totalRooms": 4,
            "bedType": "1 King + 2 Queen + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 7,
            "maxAdults": 7,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMFU3D",
            "name": "Luxury Chairmans Three Bedroom Suite Ocean Front DC",
            "tier": 12,
            "totalRooms": null,
            "bedType": "1 King + 4 Queen + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 11,
            "maxAdults": 11,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMFU4D",
            "name": "Luxury Chairmans Four Bedroom Suite Ocean Front DC",
            "tier": 13,
            "totalRooms": null,
            "bedType": "2 King + 4 Queen + Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 13,
            "maxAdults": 13,
            "kidsMax": null,
            "treatment": "Diamond Club"
          }
        ]
      },
      {
        "id": "cpc",
        "name": "Royalton CHIC Punta Cana",
        "country": "Dominican Republic",
        "type": "Adults Only",
        "rooms": [
          {
            "roomCode": "LXUUR",
            "name": "Luxury Room",
            "tier": 1,
            "totalRooms": 192,
            "bedType": "1 King",
            "minOccupancy": 1,
            "maxOccupancy": 2,
            "maxAdults": 2,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LXUUJ",
            "name": "Luxury Junior Suite (1 Handicap)",
            "tier": 2,
            "totalRooms": 28,
            "bedType": "2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LXOUJD",
            "name": "Luxury Junior Suite Ocean View DC",
            "tier": 3,
            "totalRooms": 47,
            "bedType": "2 Queen / 1 King",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXUWJD",
            "name": "Luxury Junior Suite Swim Out DC",
            "tier": 4,
            "totalRooms": 26,
            "bedType": "1 King / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 2,
            "maxAdults": 2,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPUU1D",
            "name": "Luxury Presidential One Bedroom Suite DC",
            "tier": 5,
            "totalRooms": 23,
            "bedType": "1 King",
            "minOccupancy": 1,
            "maxOccupancy": 2,
            "maxAdults": 2,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPFT1D",
            "name": "Luxury Presidential Ocean Front Terrace One Bedroom Suite DC",
            "tier": 6,
            "totalRooms": 1,
            "bedType": "1 King",
            "minOccupancy": 1,
            "maxOccupancy": 2,
            "maxAdults": 2,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPFW1D",
            "name": "Luxury Presidential Ocean Front Swim Out One Bedroom Suite DC",
            "tier": 7,
            "totalRooms": 1,
            "bedType": "1 King",
            "minOccupancy": 1,
            "maxOccupancy": 2,
            "maxAdults": 2,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "MNUU6D",
            "name": "The Mansion",
            "tier": 8,
            "totalRooms": 1,
            "bedType": "5 King + 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 12,
            "maxAdults": 12,
            "kidsMax": null,
            "treatment": "The Mansion"
          }
        ]
      }
    ]
  },
  {
    "id": "royalton-vessence",
    "name": "Royalton Vessence",
    "brandId": 2036,
    "hotels": [
      {
        "id": "cbr",
        "name": "Royalton Vessence Barbados",
        "country": "Barbados",
        "type": "Family",
        "rooms": [
          {
            "roomCode": "LXUUJ",
            "name": "Luxury Junior Suite (Handicapped)",
            "tier": 1,
            "totalRooms": 121,
            "bedType": "2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LXOUJ",
            "name": "Luxury Junior Suite Ocean View",
            "tier": 2,
            "totalRooms": 0,
            "bedType": "2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LXUUJD",
            "name": "Luxury Junior Suite Diamond Club",
            "tier": 3,
            "totalRooms": 58,
            "bedType": "2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXOUJD",
            "name": "Luxury Junior Suite Ocean View Diamond Club",
            "tier": 4,
            "totalRooms": 0,
            "bedType": "2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LXUWJ",
            "name": "Luxury Junior Suite Swim Out",
            "tier": 5,
            "totalRooms": 18,
            "bedType": "2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LXUWJD",
            "name": "Luxury Junior Suite Swim Out Diamond Club",
            "tier": 6,
            "totalRooms": 8,
            "bedType": "2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPUU1D",
            "name": "Luxury Presidential One Bedroom Suite Diamond Club",
            "tier": 7,
            "totalRooms": 13,
            "bedType": "1 King + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPOU1D",
            "name": "Luxury Presidential Ocean View One Bedroom Suite Diamond Club",
            "tier": 8,
            "totalRooms": 0,
            "bedType": "1 King + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "LPFU1D",
            "name": "Luxury Presidential Ocean Front One Bedroom Suite Diamond Club",
            "tier": 9,
            "totalRooms": 0,
            "bedType": "1 King + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "CMFU2D",
            "name": "Luxury Chairman Ocean Front Two Bedroom Suite Diamond Club",
            "tier": 10,
            "totalRooms": 2,
            "bedType": "1 King + 2 Queen + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": "Diamond Club"
          }
        ]
      }
    ]
  },
  {
    "id": "royalton-reserve",
    "name": "Royalton Reserve",
    "brandId": 2037,
    "hotels": [
      {
        "id": "plb",
        "name": "Royalton Reserve Para�so de la Bonita",
        "country": "Mexico",
        "type": "Adults Only",
        "rooms": []
      }
    ]
  },
  {
    "id": "planet-hollywood",
    "name": "Planet Hollywood by Royalton",
    "brandId": 18,
    "hotels": [
      {
        "id": "pca",
        "name": "Planet Hollywood Cancun by Royalton",
        "country": "Mexico",
        "type": "Family",
        "rooms": [
          {
            "roomCode": "LXUUJ",
            "name": "Junior Suite (3 Handicap - Connecting)",
            "tier": 1,
            "totalRooms": 298,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LXUUJD",
            "name": "Star Class Junior Suite (1 Handicap - Connecting)",
            "tier": 2,
            "totalRooms": 72,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": "Star Class"
          },
          {
            "roomCode": "LXOUJ",
            "name": "Junior Suite Ocean View",
            "tier": 3,
            "totalRooms": 36,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LXOUJD",
            "name": "Star Class Junior Suite Ocean View",
            "tier": 4,
            "totalRooms": 12,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": "Star Class"
          },
          {
            "roomCode": "LXUWJ",
            "name": "Junior Suite Swim Out",
            "tier": 5,
            "totalRooms": 45,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LXUWJD",
            "name": "Star Class Junior Suite Swim Out",
            "tier": 6,
            "totalRooms": 24,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "3",
            "treatment": "Star Class"
          },
          {
            "roomCode": "LFUUS",
            "name": "Entourage Suite",
            "tier": 7,
            "totalRooms": 60,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LFUUSD",
            "name": "Star Class Entourage Suite",
            "tier": 8,
            "totalRooms": 24,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": "Star Class"
          },
          {
            "roomCode": "LPUU1",
            "name": "Directors Suite One Bedroom",
            "tier": 9,
            "totalRooms": 52,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": null
          },
          {
            "roomCode": "LPUU2",
            "name": "Directors Suite Two Bedroom",
            "tier": 10,
            "totalRooms": null,
            "bedType": "1 King + 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": null
          },
          {
            "roomCode": "LPUU1D",
            "name": "Star Class Directors Suite One Bedroom",
            "tier": 11,
            "totalRooms": 14,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": "Star Class"
          },
          {
            "roomCode": "LPUU2D",
            "name": "Star Class Directors Suite Two Bedroom",
            "tier": 12,
            "totalRooms": null,
            "bedType": "1 King + 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": "Star Class"
          },
          {
            "roomCode": "LPUW1D",
            "name": "Star Class Directors Suite One Bedroom Swim Out",
            "tier": 13,
            "totalRooms": 6,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "3",
            "treatment": "Star Class"
          },
          {
            "roomCode": "CMUU2D",
            "name": "Star Class Producers Two Bedroom Suite",
            "tier": 14,
            "totalRooms": 3,
            "bedType": "1 King + 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": "Star Class"
          },
          {
            "roomCode": "CMUU3D",
            "name": "Star Class Producers Three Bedroom Suite",
            "tier": 15,
            "totalRooms": null,
            "bedType": "2 King + 2 Queen + 1 Sofa\n1 King + 4 Queen + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 12,
            "maxAdults": 10,
            "kidsMax": "6",
            "treatment": "Star Class"
          },
          {
            "roomCode": "CMUW2D",
            "name": "Star Class Producers Two Bedroom Suite Swim Out",
            "tier": 16,
            "totalRooms": 1,
            "bedType": "1 King + 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": "Star Class"
          }
        ]
      },
      {
        "id": "pcr",
        "name": "Planet Hollywood Costa Rica by Royalton",
        "country": "Costa Rica",
        "type": "Family",
        "rooms": [
          {
            "roomCode": "LXUUJ",
            "name": "Junior Suite (1 Handicap)",
            "tier": 1,
            "totalRooms": 98,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": null
          },
          {
            "roomCode": "LXUUJD",
            "name": "Star Class Junior Suite",
            "tier": 2,
            "totalRooms": 30,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": "Star Class"
          },
          {
            "roomCode": "LXOUJ",
            "name": "Junior Suite Ocean View (3 Handicap)",
            "tier": 3,
            "totalRooms": 77,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": null
          },
          {
            "roomCode": "LXOUJD",
            "name": "Star Class Junior Suite Ocean View",
            "tier": 4,
            "totalRooms": 62,
            "bedType": "1 King + Sofa / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": "2",
            "treatment": "Star Class"
          },
          {
            "roomCode": "LPUU1D",
            "name": "Star Class",
            "tier": 5,
            "totalRooms": 23,
            "bedType": "1 King + Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "2",
            "treatment": "Star Class"
          },
          {
            "roomCode": "LPUU2D",
            "name": "Star Class",
            "tier": 6,
            "totalRooms": null,
            "bedType": "1 King + 2 Queen + Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": "Star Class"
          },
          {
            "roomCode": "CMUUSD",
            "name": "Star Class Producer's Suite",
            "tier": 7,
            "totalRooms": 2,
            "bedType": "1 King + 2 Queen + Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 8,
            "maxAdults": 6,
            "kidsMax": "4",
            "treatment": "Star Class"
          }
        ]
      }
    ]
  },
  {
    "id": "planet-hollywood-adult-scene",
    "name": "Planet Hollywood Adult Scene by Royalton",
    "brandId": 21,
    "hotels": [
      {
        "id": "pac",
        "name": "Planet Hollywood Adult Scene Cancun by Royalton",
        "country": "Mexico",
        "type": "Adults Only",
        "rooms": [
          {
            "roomCode": "LXUUJ",
            "name": "Junior Suite (1 Handicap-Connecting)",
            "tier": 1,
            "totalRooms": 224,
            "bedType": "1 King / 2 Queen + Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LXUUJD",
            "name": "Star Class Junior Suite",
            "tier": 2,
            "totalRooms": 28,
            "bedType": "1 King / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": "Star Class"
          },
          {
            "roomCode": "LXOUJD",
            "name": "Star Class Junior Suite Ocean View",
            "tier": 3,
            "totalRooms": 16,
            "bedType": "1 King + Sofa Bed",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": "Star Class"
          },
          {
            "roomCode": "LXUWJ",
            "name": "Junior Suite Swim Out",
            "tier": 4,
            "totalRooms": 68,
            "bedType": "1 King / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LXUWJD",
            "name": "Star Class Junior Suite Swim Out",
            "tier": 5,
            "totalRooms": 14,
            "bedType": "1 King / 2 Queen + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 4,
            "kidsMax": null,
            "treatment": "Star Class"
          },
          {
            "roomCode": "LPUU1",
            "name": "Directors Suite One Bedroom",
            "tier": 6,
            "totalRooms": 24,
            "bedType": "1 King + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": null
          },
          {
            "roomCode": "LPUU1D",
            "name": "Star Class Directors Suite One Bedroom",
            "tier": 7,
            "totalRooms": 6,
            "bedType": "1 King + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Star Class"
          }
        ]
      }
    ]
  },
  {
    "id": "mystique",
    "name": "Mystique by Royalton",
    "brandId": 19,
    "hotels": [
      {
        "id": "bho",
        "name": "Mystique Holbox by Royalton",
        "country": "Mexico",
        "type": "Family",
        "rooms": [
          {
            "roomCode": "DXUUJ",
            "name": "Deluxe Junior Suite",
            "tier": 1,
            "totalRooms": 16,
            "bedType": "1 King + Sofa / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "2",
            "treatment": null
          },
          {
            "roomCode": "DXOUJ",
            "name": "Deluxe Junior Suite Pool View",
            "tier": 2,
            "totalRooms": 8,
            "bedType": "1 King + Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "2",
            "treatment": null
          },
          {
            "roomCode": "DXORJ",
            "name": "Deluxe Junior Suite Loft Ocean View",
            "tier": 3,
            "totalRooms": 6,
            "bedType": "1 King + Sofa / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "2",
            "treatment": null
          },
          {
            "roomCode": "DXFUJ",
            "name": "Deluxe Junior Suite Partial Ocean View",
            "tier": 4,
            "totalRooms": 2,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "2",
            "treatment": null
          },
          {
            "roomCode": "DXFWJ",
            "name": "Deluxe Junior Suite Swim Out",
            "tier": 5,
            "totalRooms": 2,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "2",
            "treatment": null
          },
          {
            "roomCode": "PRFUJ",
            "name": "Premium Junior Suite Ocean Front",
            "tier": 6,
            "totalRooms": 2,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "2",
            "treatment": null
          },
          {
            "roomCode": "LPOU1",
            "name": "Presidential Ocean Front One Bedroom Suite",
            "tier": 7,
            "totalRooms": 1,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 4,
            "maxAdults": 3,
            "kidsMax": "2",
            "treatment": null
          }
        ]
      }
    ]
  },
  {
    "id": "grand-lido",
    "name": "Grand Lido",
    "brandId": 10,
    "hotels": [
      {
        "id": "gln",
        "name": "Grand Lido Negril Au-Naturel",
        "country": "Jamaica",
        "type": "Adults Only",
        "rooms": [
          {
            "roomCode": "SNOUS",
            "name": "Sunset Ocean View Suite",
            "tier": 1,
            "totalRooms": 16,
            "bedType": "1 King / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "SNUWS",
            "name": "Sunset Swim Out Suite",
            "tier": 2,
            "totalRooms": 8,
            "bedType": "1 King / 2 Queen",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          },
          {
            "roomCode": "PHOJ1",
            "name": "Luxury Penthouse One Bedroom Suite Ocean View Terrace Jacuzzi",
            "tier": 3,
            "totalRooms": 2,
            "bedType": "1 King + 1 Sofa",
            "minOccupancy": 1,
            "maxOccupancy": 3,
            "maxAdults": 3,
            "kidsMax": null,
            "treatment": "Diamond Club"
          }
        ]
      }
    ]
  },
  {
    "id": "westin-cancun",
    "name": "The Westin Cancun",
    "brandId": 2039,
    "hotels": []
  }
];

// Keyed by `${hotelId}||${categoryId}||${roomCode}` (roomCode is "" for
// non-Accommodations categories). See src/data/source/media_photos.csv.
export const REAL_PHOTOS: Record<string, RealPhoto[]> = {};
