import type { VillaType } from "@/types";

export const PROPERTY_ID = 3607;
export const API_BASE = "https://api.thehotelmate.co/api/thm";

export const BOOKING_ENGINE_URL = "https://bookone.io/Velora-Stays?bookingEngine=true";

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
        throw new Error(`Velora API error: ${res.status} ${res.statusText}`);
      }
      data = (await res.json()) as TmProperty;
    } catch (error) {
      throw error instanceof Error
        ? error
        : new Error("Velora API request failed");
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
  "Swimming Pool": "pool",
  "Free WiFi": "wifi",
  "Flat screen TV (features)": "smart-tv",
  "Free Hotel Parking": "parking",
  "Housekeeping": "housekeeping",
  "Terrace": "balcony",
};

const BASE_VILLA_AMENITIES = [
  "ac",
  "kitchen",
  "refrigerator",
  "hot-water",
  "premium-bedding",
  "dining-area",
];

function buildAmenityIds(services: TmService[]): string[] {
  const ids = new Set<string>(BASE_VILLA_AMENITIES);
  services.forEach((service) => {
    const id = SERVICE_AMENITY_MAP[service.name];
    if (id) ids.add(id);
  });
  return Array.from(ids);
}

const VILLA_TAGLINES: Record<number, string> = {
  2: "Cozy 2-bedroom villa perfect for couples and small families",
  4: "Comfortable 4-bedroom villa for families and small groups",
  5: "Spacious 5-bedroom villa ideal for family getaways and friend groups",
  7: "The ultimate choice for large groups and grand celebrations",
};

const VILLA_TAGS: Record<number, string> = {
  2: "Best Value",
  4: "Popular Choice",
  5: "Most Popular",
  7: "Premium Choice",
};

const VILLA_NEARBY = [
  "Pawna Lake — 5 min drive",
  "Lonavala Market - 10min drive",
]

const VILLA_POLICIES = [
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
      "Free cancellation up to 7 days before check-in. Cancellations within 7 days incur a charge of 50% of the booking amount.",
  },
  {
    id: "guests",
    title: "Guest Policy",
    description:
      "Extra adults can be accommodated at an additional charge. Contact our team for group bookings and customised arrangements.",
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

export function mapRoomToVilla(room: TmRoom, services: TmService[], index: number): VillaType {
  const roomName = room.name ?? `Villa ${index + 1}`;
  const bedrooms = extractBhk(roomName) || 0;
  const description = stripHtml(room.description || `${roomName} at Velora Stays`);
  const planAmount = pickPlanAmount(room);
  const roomOnlyPrice = typeof room.roomOnlyPrice === "number" ? room.roomOnlyPrice : 0;
  const originalPrice =
    planAmount && planAmount > roomOnlyPrice ? planAmount : undefined;

  return {
    id: `room-${room.id ?? index}`,
    slug: roomName.toLowerCase().replace(/\s+/g, "-"),
    name: roomName,
    tagline: VILLA_TAGLINES[bedrooms] ?? `${roomName} at Velora Stays`,
    description,
    longDescription: description,
    price: roomOnlyPrice,
    originalPrice,
    currency: "₹",
    priceUnit: "per night",
    bedrooms,
    bathrooms: Math.max(1, bedrooms),
    maxOccupancy: room.maximumOccupancy ?? bedrooms * 2,
    images: (room.imageList ?? []).map((img, i) => ({
      id: `${room.id ?? index}-${i}`,
      src: img.url,
      alt: `${roomName} at Velora Stays`,
      caption: roomName,
    })),
    amenities: buildAmenityIds(services),
    highlights: [
      `${bedrooms} BHK private villa`,
      `Hosts up to ${room.maximumOccupancy ?? bedrooms * 2} guests`,
      "Private pool and lawn access",
      " central kitchen",
    ],
    features: [
      "King-size beds with premium linens",
      "Individual AC in every bedroom",
      "High-speed WiFi",
      "Dedicated caretaker on site",
    ],
    policies: VILLA_POLICIES,
    faqs: [],
    nearby: VILLA_NEARBY,
    popular: true,
    available: isAvailable(room),
    tag: VILLA_TAGS[bedrooms],
  };
}

export function mapPropertyVillas(property: TmProperty): VillaType[] {
  return (property.roomList ?? [])
    .map((room, index) => mapRoomToVilla(room, property.propertyServicesList ?? [], index))
    .sort((a, b) => a.price - b.price);
}
