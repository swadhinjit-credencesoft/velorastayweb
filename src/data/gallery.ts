import type { GalleryCategory, GalleryImage } from "@/types";

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    id: "gallery-location",
    slug: "location",
    name: "Location & Temple Gate",
    count: 2,
  },
  {
    id: "gallery-rooms",
    slug: "rooms",
    name: "Rooms",
    count: 4,
  },
  {
    id: "gallery-interiors",
    slug: "interiors",
    name: "Interiors & Common Areas",
    count: 3,
  },
];

const BB_EXTERIOR = "/bishnyhomeimage/homehero1.png";

export const GALLERY_IMAGES: GalleryImage[] = [
  // ── Location & Temple Gate ──
  { id: "gallery-loc-01", src: BB_EXTERIOR, alt: "Bishnu Bhaban at the West Gate of the Shri Jagannath Temple", category: "location", caption: "Bishnu Bhaban, West Gate" },

  // ── Rooms ──
  { id: "gallery-room-01", src: "/bishnyhomeimage/homehero22.webp", alt: "Guest room at Bishnu Bhaban", category: "rooms", caption: "Guest Room" },
  { id: "gallery-room-02", src: "/bishnyhomeimage/homehero22.webp", alt: "Guest room interior at Bishnu Bhaban", category: "rooms", caption: "Room Interior" },
  { id: "gallery-room-03", src: "/bishnyhomeimage/homehero22.webp", alt: "Bedding and linen in a guest room", category: "rooms", caption: "Bedding & Linen" },
  { id: "gallery-room-04", src: "/bishnyhomeimage/homehero22.webp", alt: "Attached bathroom at Bishnu Bhaban", category: "rooms", caption: "Attached Bathroom" },

  // ── Interiors & Common Areas ──
  { id: "gallery-int-01", src: "/WhatsApp Image 2026-07-19 at 8.42.19 AM (1).jpeg", alt: "Common seating area at Bishnu Bhaban", category: "interiors", caption: "Common Seating Area" },
  { id: "gallery-int-04", src: "/bishnyhomeimage/homehero1.png", alt: "Corridor at Bishnu Bhaban", category: "interiors", caption: "Corridor" },
  { id: "gallery-int-05", src: "/bishnyhomeimage/homehero22.webp", alt: "Front desk and reception at Bishnu Bhaban", category: "interiors", caption: "Front Desk" },
];
