import type { VillaAmenity, SectionContent, VillaType } from "@/types";
import { STOCK_IMAGES } from "@/data/images";

export const VILLAS_CONTENT: SectionContent = {
  eyebrow: "Y Hotels Signature",
  heading: "Rooms for your stay in Jharsuguda",
  description: "Explore 34 rooms across Deluxe, Super Deluxe and Executive categories. EP, CP, MAP and AP meal plans are available; contact the hotel to confirm plan rates and availability.",
};

// Room amenities were not supplied. Keep this empty instead of publishing unverified features.
export const VILLA_AMENITIES: VillaAmenity[] = [];

const rooms: { name: string; slug: string; price: number; count: number; occupancy: number; roomNumbers: number[]; floor: string; image: string }[] = [
  { name: "Deluxe", slug: "deluxe", price: 3500, count: 12, occupancy: 3, roomNumbers: [310, 311, 312, 314, 315, 316, 410, 411, 412, 414, 415, 416], floor: "3rd and 4th floors", image: STOCK_IMAGES.deluxe },
  { name: "Super Deluxe", slug: "super-deluxe", price: 4000, count: 10, occupancy: 4, roomNumbers: [302, 303, 304, 306, 307, 402, 403, 404, 406, 407], floor: "3rd and 4th floors", image: STOCK_IMAGES.superDeluxe },
  { name: "Executive", slug: "executive", price: 4500, count: 12, occupancy: 5, roomNumbers: [301, 305, 308, 309, 317, 318, 401, 405, 408, 409, 417, 418], floor: "3rd and 4th floors", image: STOCK_IMAGES.executive },
];

export const HOTEL_ROOMS: VillaType[] = rooms.map((room) => ({
  id: `yhotels-${room.slug}`,
  slug: room.slug,
  name: `${room.name} Room`,
  tagline: `${room.count} rooms | ${room.floor}`,
  description: `${room.name} accommodation at Y Hotels Signature, Jharsuguda. ${room.count} rooms are listed in this category.`,
  longDescription: `${room.name} rooms at Y Hotels Signature are located on the ${room.floor}. The listed category capacity is ${room.occupancy - 1} adults plus 1 child. Room numbers: ${room.roomNumbers.join(", ")}. EP, CP, MAP and AP meal plans are available; contact the hotel for current plan rates and availability.`,
  price: room.price,
  currency: "₹",
  priceUnit: "per room, single occupancy",
  roomCount: room.count,
  roomNumbers: room.roomNumbers,
  adultOccupancy: room.occupancy - 1,
  childOccupancy: 1,
  maxOccupancy: room.occupancy,
  bedConfig: "Confirm bed configuration with the hotel",
  sizeUnit: "sq ft",
  floor: room.floor,
  view: "",
  images: [{ id: `${room.slug}-stock`, src: room.image, alt: `Representative ${room.name.toLowerCase()} hotel room stock photo; not a photo of Y Hotels Signature` }],
  amenities: [],
  highlights: [`${room.count} rooms in this category`, `Room numbers: ${room.roomNumbers.join(", ")}`, `${room.occupancy - 1} adults + 1 child`, "EP, CP, MAP and AP meal plans available"],
  features: [`Single occupancy from ₹${room.price.toLocaleString("en-IN")}`, "Double occupancy add-on: ₹500", "Contact the hotel for meal plan pricing"],
  policies: [
    { id: "check-in", title: "Check-in", description: "1:00 PM" },
    { id: "check-out", title: "Check-out", description: "11:00 AM" },
  ],
  faqs: [],
  nearby: [],
  popular: true,
  available: true,
  tag: `${room.count} rooms`,
}));

export const getHotelRoomBySlug = (slug: string) => HOTEL_ROOMS.find((room) => room.slug === slug);
