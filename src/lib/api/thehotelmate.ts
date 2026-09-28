import type { VillaType } from "@/types";

export const PROPERTY_ID = 3637;
export const API_BASE = "https://api.thehotelmate.co/api/thm";

export const BOOKING_ENGINE_URL = "https://bookone.io/Bishnu-Bhavan?bookingEngine=true";

interface TmImage {
  id: number | null;
  url: string;
  description?: string | null;
  mainImage?: boolean | null;
}

interface TmRatePlan {
  code: string;
  name: string;
  effectiveDate: string;
  expiryDate: string;
  amount: number;
  currencyCode: string;
  minimumOccupancy: number;
  maximumOccupancy: number;
  extraChargePerPerson: number;
  extraChargePerChild: number;
}

interface TmAvailability {
  id: number;
  date: string;
  price: number;
  totalNoRooms: number;
  noOfBooked: number;
  noOfAvailable: number;
  status: string;
  roomRatePlans: TmRatePlan[] | null;
}

export interface TmRoom {
  id: number;
  name: string;
  description?: string | null;
  roomOnlyPrice: number;
  minimumOccupancy: number;
  maximumOccupancy: number;
  noOfRooms: number;
  imageList: TmImage[] | null;
  ratesAndAvailabilityDtos: TmAvailability[] | null;
}

export interface TmService {
  id: number;
  name: string;
  description?: string | null;
  serviceType?: string | null;
}

export interface TmProperty {
  id: number;
  name: string;
  shortName: string;
  email: string;
  slogan: string;
  landphone: string;
  mobile: string;
  whatsApp: string;
  website: string;
  localCurrency: string;
  latitude: string;
  longitude: string;
  gstNumber: string;
  businessDescription?: string | null;
  minimumRoooPrice: number;
  imageList: TmImage[];
  roomList: TmRoom[];
  propertyServicesList: TmService[];
}

function pad(num: number): string {
  return num < 10 ? `0${num}` : String(num);
}

export function formatApiDate(date: Date): string {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

export function propertyAvailabilityUrl(fromDate?: string, toDate?: string): string {
  const today = new Date();
  const from = fromDate ?? formatApiDate(today);
  const to = toDate ?? formatApiDate(addDays(today, 1));
  return `${API_BASE}/checkAvailability/${PROPERTY_ID}?fromDate=${from}&toDate=${to}&noOfRooms=1&noOfPersons=1`;
}

let cachedProperty: TmProperty | null = null;
let inflightPromise: Promise<TmProperty> | null = null;

export async function getProperty(options?: { refresh?: boolean }): Promise<TmProperty> {
  if (!options?.refresh && cachedProperty) return cachedProperty;
  if (inflightPromise) return inflightPromise;

  inflightPromise = (async () => {
    let data: TmProperty;
    try {
      const res = await fetch(propertyAvailabilityUrl());
      if (!res.ok) {
        throw new Error(`Bishnu Bhaban API error: ${res.status} ${res.statusText}`);
      }
      data = (await res.json()) as TmProperty;
    } catch (error) {
      throw error instanceof Error
        ? error
        : new Error("Bishnu Bhaban API request failed");
    }
    if (!Array.isArray(data.roomList)) {
      data = { ...data, roomList: [] };
    }
    cachedProperty = data;
    return data;
  })().finally(() => {
    inflightPromise = null;
  });

  return inflightPromise;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function extractBhk(roomName: string): number {
  const match = roomName.match(/(\d+)\s*BHK/i);
  return match ? parseInt(match[1], 10) : 0;
}

const SERVICE_AMENITY_MAP: Record<string, string> = {
  "Free WiFi": "wifi",
  "Flat screen TV (features)": "smart-tv",
  "Free Hotel Parking": "parking",
  "Housekeeping": "housekeeping",
  "Room Service": "room-service",
  "CCTV Security": "cctv",
  "Hot Water": "hot-water",
  "Air Conditioning": "ac",
  "Restaurant": "restaurant",
  "Laundry Service": "laundry",
};

const BASE_ROOM_AMENITIES = [
  "ac",
  "hot-water",
  "wifi",
  "cctv",
  "daily-housekeeping",
];

function buildAmenityIds(services: TmService[]): string[] {
  const ids = new Set<string>(BASE_ROOM_AMENITIES);
  services.forEach((service) => {
    const id = SERVICE_AMENITY_MAP[service.name];
    if (id) ids.add(id);
  });
  return Array.from(ids);
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const SPELLED_BED_COUNTS: Record<string, number> = {
  one: 1,
  single: 1,
  two: 2,
  double: 2,
  three: 3,
  triple: 3,
  four: 4,
  quad: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
};

function extractBedCount(roomName: string): number {
  const numeric = roomName.match(/(\d+)\s*-?\s*bed/i);
  if (numeric) {
    const parsed = parseInt(numeric[1], 10);
    if (parsed > 0) return parsed;
  }
  const spelled = roomName.match(/\b(one|single|two|double|three|triple|four|quad|five|six|seven|eight)\b/i);
  if (spelled) return SPELLED_BED_COUNTS[spelled[1].toLowerCase()];
  return 2;
}

const ROOM_TAGLINES: Record<string, string> = {
  standard:
    "Clean air-conditioned standard room with attached bathroom and hot water",
  deluxe:
    "Spacious deluxe room with extra comfort, ideal for longer Puri stays",
  "multi-bed":
    "Multi-bed room set up for families and groups travelling together",
};

const ROOM_TAGS: Record<string, string> = {
  standard: "Best Value",
  deluxe: "Most Popular",
  "multi-bed": "Group Friendly",
};

function tagForRoomName(roomName: string): string {
  const normalized = roomName.toLowerCase();
  if (normalized.includes("deluxe")) return ROOM_TAGS.deluxe;
  if (normalized.includes("multi") || normalized.includes("family"))
    return ROOM_TAGS["multi-bed"];
  return ROOM_TAGS.standard;
}

function taglineForRoomName(roomName: string): string {
  const normalized = roomName.toLowerCase();
  if (normalized.includes("deluxe")) return ROOM_TAGLINES.deluxe;
  if (normalized.includes("multi") || normalized.includes("family"))
    return ROOM_TAGLINES["multi-bed"];
  return ROOM_TAGLINES.standard;
}

const ROOM_NEARBY = [
  "Shree Jagannath Temple - 50 m walk",
  "Puri Beach - 1.5 km",
  "Vimala Temple - 400 m",
];

const ROOM_POLICIES = [
  {
    id: "checkin",
    title: "Check-in & Check-out",
    description:
      "Check-in time is 2:00 PM and check-out is 11:00 AM. Early check-in and late check-out are available on request, subject to availability.",
  },
  {
    id: "cancel",
    title: "Cancellation Policy",
    description:
      "Free cancellation up to 7 days before check-in. Cancellations within 2 days may incur a charge of one night's stay.",
  },
  {
    id: "guests",
    title: "Guest Policy",
    description:
      "Aadhaar, any government photo ID and passport are accepted as ID proof. Additional guests can be accommodated at an extra charge, subject to room capacity.",
  },
  {
    id: "pets",
    title: "Pets",
    description: "Pets are not permitted on the property.",
  },
];

function pickPlanAmount(room: TmRoom): number | undefined {
  const plans = (room.ratesAndAvailabilityDtos ?? []).flatMap(
    (dto) => dto.roomRatePlans ?? []
  );
  if (plans.length === 0) return undefined;
  return plans[0].amount;
}

function isAvailable(room: TmRoom): boolean {
  const dtos = room.ratesAndAvailabilityDtos ?? [];
  if (dtos.length === 0) return true;
  return dtos.some(
    (dto) => (dto?.noOfAvailable ?? 0) > 0 && dto?.status === "Open"
  );
}

function canonicalRoomSlug(roomName: string, index: number): string {
  return slugify(roomName) || `room-${index + 1}`;
}

export function mapRoomToVilla(
  room: TmRoom,
  services: TmService[],
  index: number,
  fallbackImages: TmImage[] = []
): VillaType {
  const roomName = room.name ?? `Room ${index + 1}`;
  const slug = canonicalRoomSlug(roomName, index);
  const beds = extractBedCount(roomName);
  const description = stripHtml(room.description || `${roomName} at Bishnu Bhaban`);
  const planAmount = pickPlanAmount(room);
  const roomOnlyPrice = typeof room.roomOnlyPrice === "number" ? room.roomOnlyPrice : 0;
  const originalPrice =
    planAmount && planAmount > roomOnlyPrice ? planAmount : undefined;
  const maxOccupancy = room.maximumOccupancy ?? beds;

  const sourceImages = room.imageList?.length ? room.imageList : fallbackImages;

  return {
    id: `room-${room.id ?? index}`,
    slug,
    name: roomName,
    tagline: taglineForRoomName(roomName),
    description,
    longDescription: description,
    price: roomOnlyPrice,
    originalPrice,
    currency: "₹",
    priceUnit: "per night",
    bedrooms: Math.max(beds, 1),
    bathrooms: 1,
    beds: Math.max(beds, 1),
    maxOccupancy,
    images: sourceImages.map((img, i) => ({
      id: `${room.id ?? index}-${i}`,
      src: img.url,
      alt: img.description?.trim() || `${roomName} at Bishnu Bhaban`,
      caption: img.description?.trim() || roomName,
    })),
    amenities: buildAmenityIds(services),
    highlights: [
      `${beds} bed${beds === 1 ? "" : "s"} with attached bathroom`,
      "Free WiFi in room",
      "Daily housekeeping",
    ],
    features: [
      "Air-conditioned room",
      "Attached western-style bathroom",
      "Free WiFi access",
    ],
    policies: ROOM_POLICIES,
    faqs: [],
    nearby: ROOM_NEARBY,
    popular: true,
    available: isAvailable(room),
    tag: tagForRoomName(roomName),
  };
}

export function mapPropertyVillas(property: TmProperty): VillaType[] {
  const fallbackImages = property.imageList ?? [];
  const mapped = (property.roomList ?? []).map((room, index) =>
    mapRoomToVilla(room, property.propertyServicesList ?? [], index, fallbackImages),
  );

  const used = new Set<string>();
  for (const villa of mapped) {
    if (!used.has(villa.slug)) {
      used.add(villa.slug);
      continue;
    }
    let suffix = 2;
    while (used.has(`${villa.slug}-${suffix}`)) suffix += 1;
    villa.slug = `${villa.slug}-${suffix}`;
    used.add(villa.slug);
  }

  return mapped.sort((a, b) => a.price - b.price);
}
