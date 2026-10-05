import type { VillaType } from "@/types";
import type { JamindarRoom } from "@/data/jamindar";

export const PROPERTY_ID = 3637;
export const JAMINDAR_PROPERTY_ID = 3638;
export const API_BASE = "https://api.thehotelmate.co/api/thm";

export const BOOKING_ENGINE_URL = "https://bookone.io/bishnu-bhaban?bookingEngine=true";
export const JAMINDAR_BOOKING_URL = "https://bookone.io/Jamindar-Nest?bookingEngine=true";

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

export interface TmFacility {
  id: number;
  name: string;
  description?: string | null;
  logoUrl?: string;
  imageUrl?: string;
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
  roomFacilities?: TmFacility[] | null;
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

export function jamindarAvailabilityUrl(fromDate?: string, toDate?: string): string {
  const today = new Date();
  const from = fromDate ?? formatApiDate(today);
  const to = toDate ?? formatApiDate(addDays(today, 1));
  return `${API_BASE}/checkAvailability/${JAMINDAR_PROPERTY_ID}?fromDate=${from}&toDate=${to}&noOfRooms=1&noOfPersons=1`;
}

let cachedProperty: TmProperty | null = null;
let inflightPromise: Promise<TmProperty> | null = null;

export async function getProperty(options?: { refresh?: boolean }): Promise<TmProperty> {
  if (!options?.refresh && cachedProperty) return cachedProperty;
  if (inflightPromise) return inflightPromise;

  inflightPromise = (async () => {
    let data: TmProperty;
    try {
      const res = await fetch(propertyAvailabilityUrl(), {
        cache: "force-cache",
      });
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

let cachedJamindarProperty: TmProperty | null = null;
let inflightJamindarPromise: Promise<TmProperty> | null = null;

export async function getJamindarProperty(options?: { refresh?: boolean }): Promise<TmProperty> {
  if (!options?.refresh && cachedJamindarProperty) return cachedJamindarProperty;
  if (inflightJamindarPromise) return inflightJamindarPromise;

  inflightJamindarPromise = (async () => {
    let data: TmProperty;
    try {
      const res = await fetch(jamindarAvailabilityUrl());
      if (!res.ok) {
        throw new Error(`Jamindar Nest API error: ${res.status} ${res.statusText}`);
      }
      data = (await res.json()) as TmProperty;
    } catch (error) {
      throw error instanceof Error
        ? error
        : new Error("Jamindar Nest API request failed");
    }
    if (!Array.isArray(data.roomList)) {
      data = { ...data, roomList: [] };
    }
    cachedJamindarProperty = data;
    return data;
  })().finally(() => {
    inflightJamindarPromise = null;
  });

  return inflightJamindarPromise;
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

const SERVICE_AMENITY_MAP: Record<string, string> = {
  "Free WiFi": "wifi",
  "Wifi": "wifi",
  "Flat screen TV (features)": "smart-tv",
  "Flat TV": "smart-tv",
  "LED Tv": "smart-tv",
  "Free Hotel Parking": "parking",
  "Housekeeping": "daily-housekeeping",
  "Room Service": "room-service",
  "CCTV Security": "cctv",
  "CCTV In Public Areas": "cctv",
  "Hot Water": "hot-water",
  "Hot Water Geyser": "hot-water",
  "Air Conditioning": "ac",
  "Air-Condition": "ac",
  "Attached Bathroom": "attached-bathroom",
  "Power Backup": "power-backup",
  "Restaurant": "restaurant",
  "Laundry Service": "laundry",
  "Luggage Storage": "luggage-storage",
};

function buildAmenityIds(room: TmRoom, services: TmService[]): string[] {
  const ids = new Set<string>();
  const isNonAc = /\bnon\s*-?\s*ac\b/i.test(room.name || "");

  // Standard hotel inclusions
  ids.add("attached-bathroom");
  ids.add("wifi");
  ids.add("daily-housekeeping");
  ids.add("cctv");
  ids.add("front-desk");

  // Check specific facilities on the room first
  (room.roomFacilities ?? []).forEach((f) => {
    const mapped = SERVICE_AMENITY_MAP[f.name];
    if (mapped) ids.add(mapped);
  });

  // Check property-level services
  (services ?? []).forEach((service) => {
    const mapped = SERVICE_AMENITY_MAP[service.name];
    if (mapped) ids.add(mapped);
  });

  if (isNonAc) {
    ids.delete("ac");
  } else if (/\bac\b/i.test(room.name || "")) {
    ids.add("ac");
    ids.add("hot-water");
  }

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
      "Cancellation charges apply as per policy. Eligible cancelled amount can be adjusted against a future stay within one year from cancellation.",
  },
  {
    id: "guests",
    title: "Guest Policy",
    description:
      "Aadhaar, any government photo ID and passport are accepted as ID proof. Additional guests can be accommodated at an extra charge, subject to room capacity.",
  },
  {
    id: "pets",
    title: "No Pets",
    description: "Pets are not allowed anywhere on the hotel premises.",
  },
  {
    id: "smoking",
    title: "No Smoking",
    description: "Smoking is strictly prohibited inside all rooms and indoor areas.",
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

function extractNearby(services: TmService[]): string[] {
  const extracted = (services ?? [])
    .map((s) => s.name.trim())
    .filter((name) => /-\s*\d+(\.\d+)?\s*(m|km)\b/i.test(name));
  return extracted.length > 0 ? extracted : ROOM_NEARBY;
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

  // Guard against invalid raw occupancy values (e.g. 24)
  const rawMax = room.maximumOccupancy;
  const maxOccupancy =
    typeof rawMax === "number" && rawMax > 0 && rawMax <= 12 ? rawMax : Math.max(beds, 3);

  const isNonAc = /\bnon\s*-?\s*ac\b/i.test(roomName);
  const isTempleFacing = /temple\s*facing/i.test(roomName);
  const isSuite = /suite/i.test(roomName);

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
    amenities: buildAmenityIds(room, services),
    highlights: [
      isTempleFacing
        ? "Temple-facing view"
        : isSuite
        ? "Spacious suite layout"
        : `${beds} bed${beds === 1 ? "" : "s"} with attached bathroom`,
      isNonAc
        ? "Budget-friendly non-AC room"
        : `${beds} bed${beds === 1 ? "" : "s"} with air conditioning`,
      "50 m from the Jagannath Temple gate",
    ],
    features: [
      isNonAc
        ? "Non air-conditioned room"
        : isSuite
        ? "Air-conditioned suite"
        : "Air-conditioned room",
      isTempleFacing ? "Temple-facing window" : "Attached western-style bathroom",
      "Free WiFi access",
    ],
    policies: ROOM_POLICIES,
    faqs: [],
    nearby: extractNearby(services),
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

/**
 * Build-time (static export) room list for Bishnu Bhaban.
 *
 * The browser fetch in useBhabanData is blocked by CORS on the live domain, so
 * every server-rendered room surface must read rooms from here instead of the
 * hardcoded data in src/data/villas.ts. Returns [] if the API is unreachable
 * so callers can fall back to VILLAS.
 */
export async function getApiRooms(): Promise<VillaType[]> {
  try {
    const property = await getProperty();
    return mapPropertyVillas(property);
  } catch (error) {
    console.error("[rooms] build-time API fetch failed:", error);
    return [];
  }
}

/**
 * Build-time (static export) room list for Jamindar Nest (property 3638).
 *
 * Same reason as getApiRooms: the browser fetch is blocked by CORS on the live
 * domain, so useJamindarData used to always fall back to the hardcoded
 * src/data/jamindar.ts rooms. Returns [] if the API is unreachable.
 */
export async function getApiJamindarRooms(): Promise<JamindarRoom[]> {
  try {
    const property = await getJamindarProperty();
    return mapJamindarRooms(property);
  } catch (error) {
    console.error("[jamindar] build-time API fetch failed:", error);
    return [];
  }
}

export function mapJamindarRooms(property: TmProperty): JamindarRoom[] {
  const defaultImages = [
    "/images/jamindar/room-01.webp",
    "/images/jamindar/room-02.webp",
    "/images/jamindar/interior-01.webp",
  ];

  if (!property.roomList || property.roomList.length === 0) {
    return [];
  }

  return property.roomList.map((room, index) => {
    const roomName = room.name || `Room ${index + 1}`;
    const rawImages =
      room.imageList && room.imageList.length > 0
        ? room.imageList.map((img) => img.url)
        : defaultImages;

    const planAmount = pickPlanAmount(room);
    const roomOnlyPrice =
      typeof room.roomOnlyPrice === "number" && room.roomOnlyPrice > 0
        ? room.roomOnlyPrice
        : planAmount || 4000;

    const maxOccupancy =
      typeof room.maximumOccupancy === "number" && room.maximumOccupancy > 0
        ? room.maximumOccupancy
        : 3;

    const rawFacilities =
      room.roomFacilities && room.roomFacilities.length > 0
        ? room.roomFacilities.map((f) => f.name)
        : [
            "Air Conditioning",
            "24-Hour Front Desk",
            "Hot Water Geyser",
            "Free High-Speed WiFi",
            "LED Television",
            "Attached Bathroom",
            "Daily Housekeeping",
          ];

    return {
      id: `jamindar-room-${room.id ?? index}`,
      name: roomName,
      tagline: "Refined comfort with traditional hospitality",
      description:
        stripHtml(room.description || "") ||
        "Our premiere room at Jamindar Nest offers a peaceful haven equipped with air conditioning, 24-hour hot water, high-speed WiFi, LED TV, and an attached modern bathroom.",
      price: roomOnlyPrice,
      currency: "₹",
      priceUnit: "per night",
      maxOccupancy,
      bed: `${extractBedCount(roomName)} King / Twin Bedding`,
      size: "Spacious Room",
      image: rawImages[0],
      images: rawImages,
      amenities: rawFacilities,
      cta: {
        label: `BOOK ${roomName.toUpperCase()}`,
        href: JAMINDAR_BOOKING_URL,
      },
    };
  });
}
