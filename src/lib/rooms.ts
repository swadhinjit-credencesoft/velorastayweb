import type { RoomType, RoomImage, FaqItem, RoomPolicy } from "@/types";
import type { ApiRoom } from "@/types/api";

interface RoomSlugEntry {
  slug: string;
  tag?: string;
  tagline: string;
  longDescription: string;
  bedType: string;
  bedConfig: string;
  bathroomType: string;
  floor: string;
  view: string;
  size: number;
  sizeUnit: string;
  highlights: string[];
  features: string[];
  policies: RoomPolicy[];
  faqs: FaqItem[];
  nearby: string[];
  popular: boolean;
}

export const ROOM_SLUG_MAP: Record<number, RoomSlugEntry> = {
  8832: {
    slug: "triple-suite-with-jacuzzi",
    tag: "Signature",
    tagline: "Our signature suite for a relaxing stay",
    longDescription:
      "Experience a comfortable stay in New Delhi with our signature Triple Suite with Jacuzzi. This spacious suite combines a comfortable sleeping area for up to three guests with a private jacuzzi, air conditioning, a flat-screen TV, a work desk and a private bathroom — perfect for families and guests looking for an extra touch of relaxation.",
    bedType: "Double + Single Beds",
    bedConfig: "1 Double Bed + 1 Single Bed",
    bathroomType: "Private Bathroom with Jacuzzi",
    floor: "1st Floor",
    view: "Interior / Street View",
    size: 400,
    sizeUnit: "sq. ft.",
    highlights: [
      "Private jacuzzi in the room",
      "Spacious layout for families",
      "Free Wi-Fi",
      "Air conditioning",
      "Flat-screen TV",
      "Work desk & seating area",
    ],
    features: [
      "EP (Room Only): ₹5,200 per night",
      "CP (Room + Breakfast): ₹6,200 per night",
      "Breakfast: ₹350 per person",
      "Extra bed: ₹750 per night",
      "Available in 1 room: 101",
    ],
    policies: [
      { id: "suite-checkin", title: "Check-in / Check-out", description: "Check-in from 12:00 PM. Check-out by 11:00 AM." },
      { id: "suite-cancel", title: "Cancellation", description: "Free cancellation if cancelled at least 24 hours prior to check-in." },
      { id: "suite-extra", title: "Extra Bed & Children", description: "Extra bed available at ₹750 per night. Children policy to be confirmed at the front desk." },
    ],
    faqs: [
      { id: "suite-faq-1", question: "Does the Triple Suite have a jacuzzi?", answer: "Yes, the Triple Suite features a private jacuzzi." },
      { id: "suite-faq-2", question: "How many guests can stay in the Triple Suite?", answer: "The suite comfortably accommodates up to 4 guests with the available bedding." },
    ],
    nearby: [
      "New Delhi Railway Station — walking distance",
      "Ramakrishna Mission — approx. 0.9 km",
      "Gurudwara Bangla Sahib — approx. 2.2 km",
      "Connaught Place — approx. 2.5 km",
    ],
    popular: true,
  },
  8833: {
    slug: "premium-double-room-with-city-view",
    tagline: "Enjoy views of the city from your room",
    longDescription:
      "Experience a comfortable stay in New Delhi with our thoughtfully designed Premium Double Rooms with City View. Enjoy a comfortable sleeping area, air conditioning, a flat-screen TV, a work desk and a private bathroom, all while taking in views of the city from your window.",
    bedType: "Double Bed",
    bedConfig: "1 Double Bed",
    bathroomType: "Private Bathroom",
    floor: "2nd – 4th Floor",
    view: "City View",
    size: 250,
    sizeUnit: "sq. ft.",
    highlights: [
      "City-facing windows",
      "Free Wi-Fi",
      "Air conditioning",
      "Flat-screen TV",
      "Work desk & seating area",
      "Private bathroom",
    ],
    features: [
      "EP (Room Only): ₹4,200 per night",
      "CP (Room + Breakfast): ₹4,800 per night",
      "Breakfast: ₹350 per person",
      "Extra bed: ₹750 per night",
      "Available in 6 rooms: 201, 202, 301, 302, 401, 402",
    ],
    policies: [
      { id: "city-checkin", title: "Check-in / Check-out", description: "Check-in from 12:00 PM. Check-out by 11:00 AM." },
      { id: "city-cancel", title: "Cancellation", description: "Free cancellation if cancelled at least 24 hours prior to check-in." },
      { id: "city-extra", title: "Extra Bed & Children", description: "Extra bed available at ₹750 per night. Children policy to be confirmed at the front desk." },
    ],
    faqs: [
      { id: "city-faq-1", question: "Do all City View rooms have a view?", answer: "Yes, these rooms are located on the upper floors and face the city." },
      { id: "city-faq-2", question: "How many guests can stay in the City View room?", answer: "The room comfortably accommodates 2 guests, with an extra bed available for a third guest." },
    ],
    nearby: [
      "New Delhi Railway Station — walking distance",
      "Ramakrishna Mission — approx. 0.9 km",
      "Gurudwara Bangla Sahib — approx. 2.2 km",
      "Connaught Place — approx. 2.5 km",
    ],
    popular: true,
  },
  8834: {
    slug: "deluxe-double-room",
    tagline: "Comfortable stay for couples and solo travellers",
    longDescription:
      "Experience a comfortable stay in New Delhi with our thoughtfully designed Deluxe Double Rooms. The room combines a comfortable sleeping area with modern conveniences including air conditioning, a flat-screen TV, a work desk and a private bathroom — everything you need to relax after exploring Delhi.",
    bedType: "Double Bed",
    bedConfig: "1 Double Bed",
    bathroomType: "Private Bathroom",
    floor: "Multiple Floors",
    view: "Interior / Street View",
    size: 200,
    sizeUnit: "sq. ft.",
    highlights: [
      "Air-conditioned comfort",
      "Free Wi-Fi",
      "Flat-screen TV",
      "Work desk",
      "Private bathroom",
      "Extra bed available (₹750)",
    ],
    features: [
      "EP (Room Only): ₹2,800 per night",
      "CP (Room + Breakfast): ₹3,500 per night",
      "Breakfast: ₹350 per person",
      "Extra bed: ₹750 per night",
      "Available in 7 rooms: 104, 203, 206, 303, 306, 403, 406",
    ],
    policies: [
      { id: "deluxe-checkin", title: "Check-in / Check-out", description: "Check-in from 12:00 PM. Check-out by 11:00 AM." },
      { id: "deluxe-cancel", title: "Cancellation", description: "Free cancellation if cancelled at least 24 hours prior to check-in." },
      { id: "deluxe-extra", title: "Extra Bed & Children", description: "Extra bed available at ₹750 per night. Children policy to be confirmed at the front desk." },
    ],
    faqs: [
      { id: "deluxe-faq-1", question: "How many guests can stay in the Deluxe Double Room?", answer: "The room comfortably accommodates 2 guests, with an extra bed available for a third guest." },
      { id: "deluxe-faq-2", question: "Does the Deluxe Double Room have air conditioning?", answer: "Yes, all Deluxe Double Rooms are air-conditioned." },
    ],
    nearby: [
      "New Delhi Railway Station — walking distance",
      "Ramakrishna Mission — approx. 0.9 km",
      "Gurudwara Bangla Sahib — approx. 2.2 km",
      "Connaught Place — approx. 2.5 km",
    ],
    popular: true,
  },
  8835: {
    slug: "premium-double-room",
    tagline: "More space and added comfort",
    longDescription:
      "Experience a comfortable stay in New Delhi with our thoughtfully designed Premium Double Rooms. Featuring a comfortable sleeping area, air conditioning, a flat-screen TV, a work desk and a private bathroom, these rooms offer added space for travellers who want a little more room to relax.",
    bedType: "Double Bed",
    bedConfig: "1 Double Bed",
    bathroomType: "Private Bathroom",
    floor: "Multiple Floors",
    view: "Interior / Street View",
    size: 250,
    sizeUnit: "sq. ft.",
    highlights: [
      "Extra space for a relaxing stay",
      "Free Wi-Fi",
      "Air conditioning",
      "Flat-screen TV",
      "Work desk & seating area",
      "Private bathroom",
    ],
    features: [
      "EP (Room Only): ₹3,500 per night",
      "CP (Room + Breakfast): ₹4,200 per night",
      "Breakfast: ₹350 per person",
      "Extra bed: ₹750 per night",
      "Available in 8 rooms: 102, 103, 204, 205, 304, 305, 404, 405",
    ],
    policies: [
      { id: "premium-checkin", title: "Check-in / Check-out", description: "Check-in from 12:00 PM. Check-out by 11:00 AM." },
      { id: "premium-cancel", title: "Cancellation", description: "Free cancellation if cancelled at least 24 hours prior to check-in." },
      { id: "premium-extra", title: "Extra Bed & Children", description: "Extra bed available at ₹750 per night. Children policy to be confirmed at the front desk." },
    ],
    faqs: [
      { id: "premium-faq-1", question: "How many guests can stay in the Premium Double Room?", answer: "The room comfortably accommodates 2 guests, with an extra bed available for a third guest." },
      { id: "premium-faq-2", question: "Is Wi-Fi available in Premium Double Rooms?", answer: "Yes, complimentary Wi-Fi is available throughout the hotel." },
    ],
    nearby: [
      "New Delhi Railway Station — walking distance",
      "Ramakrishna Mission — approx. 0.9 km",
      "Gurudwara Bangla Sahib — approx. 2.2 km",
      "Connaught Place — approx. 2.5 km",
    ],
    popular: true,
  },
};

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function mapApiImages(images: ApiRoom["imageList"]): RoomImage[] {
  return images
    .filter((img) => img.url)
    .map((img, i) => ({
      id: String(img.id ?? i),
      src: img.url,
      alt: img.description?.replace(/<[^>]*>/g, "").substring(0, 120) || "Hotel room image",
      caption: img.mainImage ? "Main view" : undefined,
    }));
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

export function apiRoomToRoomType(apiRoom: ApiRoom): RoomType {
  const meta = ROOM_SLUG_MAP[apiRoom.id];
  const slug = meta?.slug ?? generateSlug(apiRoom.name);
  const price = apiRoom.roomOnlyPrice || apiRoom.ratesAndAvailabilityDtos?.[0]?.price || 0;

  return {
    id: `room-${slug}`,
    slug,
    name: apiRoom.name,
    tagline: meta?.tagline ?? stripHtml(apiRoom.description).substring(0, 80),
    description: stripHtml(apiRoom.description),
    longDescription: meta?.longDescription ?? stripHtml(apiRoom.description),
    price,
    currency: "₹",
    priceUnit: "night",
    size: meta?.size ?? 200,
    sizeUnit: meta?.sizeUnit ?? "sq. ft.",
    maxOccupancy: apiRoom.maximumOccupancy || 2,
    bedType: meta?.bedType ?? "Double Bed",
    bedConfig: meta?.bedConfig ?? "1 Double Bed",
    bathroomType: meta?.bathroomType ?? "Private Bathroom",
    floor: meta?.floor ?? "Multiple Floors",
    view: meta?.view ?? "Interior / Street View",
    images: mapApiImages(apiRoom.imageList),
    amenities: apiRoom.roomFacilities?.map((f) => f.name.toLowerCase().replace(/\s+/g, "-")) ?? ["wifi", "ac"],
    highlights: meta?.highlights ?? [],
    features: meta?.features ?? [],
    policies: meta?.policies ?? [],
    faqs: meta?.faqs ?? [],
    nearby: meta?.nearby ?? [],
    popular: meta?.popular ?? false,
    available: (apiRoom.ratesAndAvailabilityDtos?.[0]?.noOfAvailable ?? 0) > 0,
    tag: meta?.tag,
  };
}

export function getSlugByRoomId(roomId: number): string | undefined {
  return ROOM_SLUG_MAP[roomId]?.slug;
}

export function getRoomIdBySlug(slug: string): number | undefined {
  return Number(Object.entries(ROOM_SLUG_MAP).find(([, v]) => v.slug === slug)?.[0]);
}
