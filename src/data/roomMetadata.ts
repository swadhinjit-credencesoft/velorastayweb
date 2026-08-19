import type { RoomPolicy, FaqItem } from "@/types";

export interface RoomSlugEntry {
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
      "Experience a comfortable stay in New Delhi with our signature Triple Suite with Jacuzzi. This spacious suite combines a comfortable sleeping area for up to three guests with a private jacuzzi, air conditioning, a flat-screen TV, a work desk and a private bathroom \u2014 perfect for families and guests looking for an extra touch of relaxation.",
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
      "EP (Room Only): \u20B95,200 per night",
      "CP (Room + Breakfast): \u20B96,200 per night",
      "Breakfast: \u20B9350 per person",
      "Extra bed: \u20B9750 per night",
      "Available in 1 room: 101",
    ],
    policies: [
      { id: "suite-checkin", title: "Check-in / Check-out", description: "Check-in from 12:00 PM. Check-out by 11:00 AM." },
      { id: "suite-cancel", title: "Cancellation", description: "Free cancellation if cancelled at least 24 hours prior to check-in." },
      { id: "suite-extra", title: "Extra Bed & Children", description: "Extra bed available at \u20B9750 per night. Children policy to be confirmed at the front desk." },
    ],
    faqs: [
      { id: "suite-faq-1", question: "Does the Triple Suite have a jacuzzi?", answer: "Yes, the Triple Suite features a private jacuzzi." },
      { id: "suite-faq-2", question: "How many guests can stay in the Triple Suite?", answer: "The suite comfortably accommodates up to 4 guests with the available bedding." },
    ],
    nearby: [
      "New Delhi Railway Station \u2014 walking distance",
      "Ramakrishna Mission \u2014 approx. 0.9 km",
      "Gurudwara Bangla Sahib \u2014 approx. 2.2 km",
      "Connaught Place \u2014 approx. 2.5 km",
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
    floor: "2nd \u2013 4th Floor",
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
      "EP (Room Only): \u20B94,200 per night",
      "CP (Room + Breakfast): \u20B94,800 per night",
      "Breakfast: \u20B9350 per person",
      "Extra bed: \u20B9750 per night",
      "Available in 6 rooms: 201, 202, 301, 302, 401, 402",
    ],
    policies: [
      { id: "city-checkin", title: "Check-in / Check-out", description: "Check-in from 12:00 PM. Check-out by 11:00 AM." },
      { id: "city-cancel", title: "Cancellation", description: "Free cancellation if cancelled at least 24 hours prior to check-in." },
      { id: "city-extra", title: "Extra Bed & Children", description: "Extra bed available at \u20B9750 per night. Children policy to be confirmed at the front desk." },
    ],
    faqs: [
      { id: "city-faq-1", question: "Do all City View rooms have a view?", answer: "Yes, these rooms are located on the upper floors and face the city." },
      { id: "city-faq-2", question: "How many guests can stay in the City View room?", answer: "The room comfortably accommodates 2 guests, with an extra bed available for a third guest." },
    ],
    nearby: [
      "New Delhi Railway Station \u2014 walking distance",
      "Ramakrishna Mission \u2014 approx. 0.9 km",
      "Gurudwara Bangla Sahib \u2014 approx. 2.2 km",
      "Connaught Place \u2014 approx. 2.5 km",
    ],
    popular: true,
  },
  8834: {
    slug: "deluxe-double-room",
    tagline: "Comfortable stay for couples and solo travellers",
    longDescription:
      "Experience a comfortable stay in New Delhi with our thoughtfully designed Deluxe Double Rooms. The room combines a comfortable sleeping area with modern conveniences including air conditioning, a flat-screen TV, a work desk and a private bathroom \u2014 everything you need to relax after exploring Delhi.",
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
      "Extra bed available (\u20B9750)",
    ],
    features: [
      "EP (Room Only): \u20B92,800 per night",
      "CP (Room + Breakfast): \u20B93,500 per night",
      "Breakfast: \u20B9350 per person",
      "Extra bed: \u20B9750 per night",
      "Available in 7 rooms: 104, 203, 206, 303, 306, 403, 406",
    ],
    policies: [
      { id: "deluxe-checkin", title: "Check-in / Check-out", description: "Check-in from 12:00 PM. Check-out by 11:00 AM." },
      { id: "deluxe-cancel", title: "Cancellation", description: "Free cancellation if cancelled at least 24 hours prior to check-in." },
      { id: "deluxe-extra", title: "Extra Bed & Children", description: "Extra bed available at \u20B9750 per night. Children policy to be confirmed at the front desk." },
    ],
    faqs: [
      { id: "deluxe-faq-1", question: "How many guests can stay in the Deluxe Double Room?", answer: "The room comfortably accommodates 2 guests, with an extra bed available for a third guest." },
      { id: "deluxe-faq-2", question: "Does the Deluxe Double Room have air conditioning?", answer: "Yes, all Deluxe Double Rooms are air-conditioned." },
    ],
    nearby: [
      "New Delhi Railway Station \u2014 walking distance",
      "Ramakrishna Mission \u2014 approx. 0.9 km",
      "Gurudwara Bangla Sahib \u2014 approx. 2.2 km",
      "Connaught Place \u2014 approx. 2.5 km",
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
      "EP (Room Only): \u20B93,500 per night",
      "CP (Room + Breakfast): \u20B94,200 per night",
      "Breakfast: \u20B9350 per person",
      "Extra bed: \u20B9750 per night",
      "Available in 8 rooms: 102, 103, 204, 205, 304, 305, 404, 405",
    ],
    policies: [
      { id: "premium-checkin", title: "Check-in / Check-out", description: "Check-in from 12:00 PM. Check-out by 11:00 AM." },
      { id: "premium-cancel", title: "Cancellation", description: "Free cancellation if cancelled at least 24 hours prior to check-in." },
      { id: "premium-extra", title: "Extra Bed & Children", description: "Extra bed available at \u20B9750 per night. Children policy to be confirmed at the front desk." },
    ],
    faqs: [
      { id: "premium-faq-1", question: "How many guests can stay in the Premium Double Room?", answer: "The room comfortably accommodates 2 guests, with an extra bed available for a third guest." },
      { id: "premium-faq-2", question: "Is Wi-Fi available in Premium Double Rooms?", answer: "Yes, complimentary Wi-Fi is available throughout the hotel." },
    ],
    nearby: [
      "New Delhi Railway Station \u2014 walking distance",
      "Ramakrishna Mission \u2014 approx. 0.9 km",
      "Gurudwara Bangla Sahib \u2014 approx. 2.2 km",
      "Connaught Place \u2014 approx. 2.5 km",
    ],
    popular: true,
  },
};

export function getSlugByRoomId(roomId: number): string | undefined {
  return ROOM_SLUG_MAP[roomId]?.slug;
}

export function getRoomIdBySlug(slug: string): number | undefined {
  return Number(Object.entries(ROOM_SLUG_MAP).find(([, v]) => v.slug === slug)?.[0]);
}
