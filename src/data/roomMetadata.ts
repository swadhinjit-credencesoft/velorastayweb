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
  1755: {
    slug: "double-bed-non-ac-room",
    tag: "Budget",
    tagline: "Clean & comfortable stay for two",
    longDescription:
      "A clean and comfortable Double Bed Non-AC Room in Shirdi, perfect for two guests. The room features a cosy double bed, basic amenities and a peaceful ambiance for a relaxing stay near the Sai Baba Temple.",
    bedType: "Double Bed",
    bedConfig: "1 Double Bed",
    bathroomType: "Private Bathroom",
    floor: "Multiple Floors",
    view: "Street / Interior View",
    size: 118,
    sizeUnit: "sq. ft. (11 m²)",
    highlights: [
      "Cosy double bed for two guests",
      "Free Wi-Fi",
      "Clean private bathroom",
      "Hot water (geyser)",
      "24-hour room service",
      "Close to Sai Baba Temple",
    ],
    features: [
      "Room size: approx. 11 m²",
      "Free Wi-Fi",
      "Private bathroom with geyser",
      "24-hour room service",
      "Free parking",
    ],
    policies: [
      { id: "dbna-checkin", title: "Check-in / Check-out", description: "Check-in from 12:00 PM. Check-out by 11:00 AM." },
      { id: "dbna-cancel", title: "Cancellation", description: "Free cancellation if cancelled at least 24 hours prior to check-in." },
      { id: "dbna-extra", title: "Extra Bed & Children", description: "Extra bed available at a nominal charge, subject to availability. Children policy to be confirmed at the front desk." },
    ],
    faqs: [
      { id: "dbna-faq-1", question: "Is this room air-conditioned?", answer: "No, this is a budget Non-AC room." },
      { id: "dbna-faq-2", question: "How many guests can stay?", answer: "This room comfortably accommodates 2 guests." },
    ],
    nearby: [
      "Sai Baba Temple — very close (walk)",
      "Dwarkamai — nearby",
      "Baba's Chavadi — nearby",
      "Shirdi Bus Station — approx. 200 m",
      "Shirdi Airport — approx. 15 km",
    ],
    popular: true,
  },
  1756: {
    slug: "double-bed-room",
    tag: "Popular",
    tagline: "Comfortable double room with added convenience",
    longDescription:
      "A comfortable Double Bed Room in Shirdi with a spacious double bed, perfect for two guests. It features clean interiors, a private bathroom with geyser, essential amenities and a relaxing ambiance for a pleasant stay.",
    bedType: "Double Bed",
    bedConfig: "1 Double Bed",
    bathroomType: "Private Bathroom",
    floor: "Multiple Floors",
    view: "Street / Interior View",
    size: 118,
    sizeUnit: "sq. ft. (11 m²)",
    highlights: [
      "Spacious double bed",
      "Clean private bathroom",
      "Free Wi-Fi",
      "Hot water (geyser)",
      "24-hour room service",
      "Free parking",
    ],
    features: [
      "Room size: approx. 11 m²",
      "Free Wi-Fi",
      "Private bathroom with geyser",
      "24-hour room service",
      "Free parking",
    ],
    policies: [
      { id: "dbr-checkin", title: "Check-in / Check-out", description: "Check-in from 12:00 PM. Check-out by 11:00 AM." },
      { id: "dbr-cancel", title: "Cancellation", description: "Free cancellation if cancelled at least 24 hours prior to check-in." },
      { id: "dbr-extra", title: "Extra Bed & Children", description: "Extra bed available at a nominal charge, subject to availability. Children policy to be confirmed at the front desk." },
    ],
    faqs: [
      { id: "dbr-faq-1", question: "How many guests can stay?", answer: "This room comfortably accommodates 2 guests." },
      { id: "dbr-faq-2", question: "Is the bathroom private?", answer: "Yes, this room has a private bathroom with a geyser for hot water." },
    ],
    nearby: [
      "Sai Baba Temple — very close (walk)",
      "Dwarkamai — nearby",
      "Baba's Chavadi — nearby",
      "Shirdi Bus Station — approx. 200 m",
      "Shirdi Airport — approx. 15 km",
    ],
    popular: true,
  },
  1757: {
    slug: "triple-bed-ac-room",
    tag: "AC",
    tagline: "Cool comfort for families and groups",
    longDescription:
      "A spacious Triple Bed AC Room in Shirdi, perfect for families or groups of three. It features three cosy beds, air conditioning for a cool and relaxing stay, and all essential amenities.",
    bedType: "Triple Beds",
    bedConfig: "3 Single Beds",
    bathroomType: "Private Bathroom",
    floor: "Multiple Floors",
    view: "Street / Interior View",
    size: 161,
    sizeUnit: "sq. ft. (15 m²)",
    highlights: [
      "Air-conditioned comfort",
      "Three cosy beds for groups",
      "Private bathroom with geyser",
      "Free Wi-Fi",
      "24-hour room service",
      "Free parking",
    ],
    features: [
      "Room size: approx. 15 m²",
      "Air conditioning",
      "Free Wi-Fi",
      "Private bathroom with geyser",
      "24-hour room service",
      "Free parking",
    ],
    policies: [
      { id: "tbac-checkin", title: "Check-in / Check-out", description: "Check-in from 12:00 PM. Check-out by 11:00 AM." },
      { id: "tbac-cancel", title: "Cancellation", description: "Free cancellation if cancelled at least 24 hours prior to check-in." },
      { id: "tbac-extra", title: "Extra Bed & Children", description: "Extra bed available at a nominal charge, subject to availability. Children policy to be confirmed at the front desk." },
    ],
    faqs: [
      { id: "tbac-faq-1", question: "How many guests can stay?", answer: "This room comfortably accommodates up to 3 guests." },
      { id: "tbac-faq-2", question: "Is this room air-conditioned?", answer: "Yes, this Triple Bed room is air-conditioned." },
    ],
    nearby: [
      "Sai Baba Temple — very close (walk)",
      "Dwarkamai — nearby",
      "Baba's Chavadi — nearby",
      "Shirdi Bus Station — approx. 200 m",
      "Shirdi Airport — approx. 15 km",
    ],
    popular: true,
  },
  1758: {
    slug: "four-bed-ac-room",
    tag: "Family",
    tagline: "Spacious AC room for families",
    longDescription:
      "A spacious Four Bed AC Room in Shirdi, ideal for families or larger groups. It comes with air conditioning, comfortable beds for four guests and all essential amenities for a relaxing stay.",
    bedType: "Four Beds",
    bedConfig: "4 Single Beds",
    bathroomType: "Private Bathroom",
    floor: "Multiple Floors",
    view: "Street / Interior View",
    size: 215,
    sizeUnit: "sq. ft. (20 m²)",
    highlights: [
      "Air-conditioned comfort",
      "Spacious layout for four guests",
      "Private bathroom with geyser",
      "Free Wi-Fi",
      "24-hour room service",
      "Free parking",
    ],
    features: [
      "Room size: approx. 20 m²",
      "Air conditioning",
      "Free Wi-Fi",
      "Private bathroom with geyser",
      "24-hour room service",
      "Free parking",
    ],
    policies: [
      { id: "fbac-checkin", title: "Check-in / Check-out", description: "Check-in from 12:00 PM. Check-out by 11:00 AM." },
      { id: "fbac-cancel", title: "Cancellation", description: "Free cancellation if cancelled at least 24 hours prior to check-in." },
      { id: "fbac-extra", title: "Extra Bed & Children", description: "Extra bed available at a nominal charge, subject to availability. Children policy to be confirmed at the front desk." },
    ],
    faqs: [
      { id: "fbac-faq-1", question: "How many guests can stay?", answer: "This room comfortably accommodates up to 4 guests." },
      { id: "fbac-faq-2", question: "Is this room air-conditioned?", answer: "Yes, this Four Bed room is air-conditioned." },
    ],
    nearby: [
      "Sai Baba Temple — very close (walk)",
      "Dwarkamai — nearby",
      "Baba's Chavadi — nearby",
      "Shirdi Bus Station — approx. 200 m",
      "Shirdi Airport — approx. 15 km",
    ],
    popular: true,
  },
  1760: {
    slug: "triple-bed-non-ac-room",
    tag: "Value",
    tagline: "Spacious room for families and groups",
    longDescription:
      "A spacious Triple Bed Non-AC Room in Shirdi, ideal for families or groups of three. It includes three comfortable beds, basic amenities and a clean private bathroom for a pleasant stay.",
    bedType: "Triple Beds",
    bedConfig: "3 Single Beds",
    bathroomType: "Private Bathroom",
    floor: "Multiple Floors",
    view: "Street / Interior View",
    size: 129,
    sizeUnit: "sq. ft. (12 m²)",
    highlights: [
      "Three comfortable beds",
      "Clean private bathroom",
      "Free Wi-Fi",
      "24-hour room service",
      "Free parking",
      "Close to Sai Baba Temple",
    ],
    features: [
      "Room size: approx. 12 m²",
      "Free Wi-Fi",
      "Private bathroom with geyser",
      "24-hour room service",
      "Free parking",
    ],
    policies: [
      { id: "tbna-checkin", title: "Check-in / Check-out", description: "Check-in from 12:00 PM. Check-out by 11:00 AM." },
      { id: "tbna-cancel", title: "Cancellation", description: "Free cancellation if cancelled at least 24 hours prior to check-in." },
      { id: "tbna-extra", title: "Extra Bed & Children", description: "Extra bed available at a nominal charge, subject to availability. Children policy to be confirmed at the front desk." },
    ],
    faqs: [
      { id: "tbna-faq-1", question: "How many guests can stay?", answer: "This room comfortably accommodates up to 3 guests." },
      { id: "tbna-faq-2", question: "Is this room air-conditioned?", answer: "No, this is a Non-AC room." },
    ],
    nearby: [
      "Sai Baba Temple — very close (walk)",
      "Dwarkamai — nearby",
      "Baba's Chavadi — nearby",
      "Shirdi Bus Station — approx. 200 m",
      "Shirdi Airport — approx. 15 km",
    ],
    popular: false,
  },
  2003: {
    slug: "four-bed-non-ac-room",
    tag: "Family",
    tagline: "Spacious value room for families and groups",
    longDescription:
      "A spacious Four Bed Non-AC Room in Shirdi, ideal for families or groups of four. It comes with comfortable bedding, a clean private bathroom and all basic amenities for a pleasant stay.",
    bedType: "Four Beds",
    bedConfig: "4 Single Beds",
    bathroomType: "Private Bathroom",
    floor: "Multiple Floors",
    view: "Street / Interior View",
    size: 215,
    sizeUnit: "sq. ft. (20 m²)",
    highlights: [
      "Spacious layout for four guests",
      "Comfortable bedding",
      "Private bathroom with geyser",
      "Free Wi-Fi",
      "24-hour room service",
      "Free parking",
    ],
    features: [
      "Room size: approx. 20 m²",
      "Free Wi-Fi",
      "Private bathroom with geyser",
      "24-hour room service",
      "Free parking",
      "In-house restaurant",
    ],
    policies: [
      { id: "fbna-checkin", title: "Check-in / Check-out", description: "Check-in from 12:00 PM. Check-out by 11:00 AM." },
      { id: "fbna-cancel", title: "Cancellation", description: "Free cancellation if cancelled at least 24 hours prior to check-in." },
      { id: "fbna-extra", title: "Extra Bed & Children", description: "Extra bed available at a nominal charge, subject to availability. Children policy to be confirmed at the front desk." },
    ],
    faqs: [
      { id: "fbna-faq-1", question: "How many guests can stay?", answer: "This room comfortably accommodates up to 4 guests." },
      { id: "fbna-faq-2", question: "Is this room air-conditioned?", answer: "No, this is a Non-AC room." },
    ],
    nearby: [
      "Sai Baba Temple — very close (walk)",
      "Dwarkamai — nearby",
      "Baba's Chavadi — nearby",
      "Shirdi Bus Station — approx. 200 m",
      "Shirdi Airport — approx. 15 km",
    ],
    popular: false,
  },
};

export function getSlugByRoomId(roomId: number): string | undefined {
  return ROOM_SLUG_MAP[roomId]?.slug;
}

export function getRoomIdBySlug(slug: string): number | undefined {
  return Number(Object.entries(ROOM_SLUG_MAP).find(([, v]) => v.slug === slug)?.[0]);
}
