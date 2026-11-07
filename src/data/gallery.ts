import type { GalleryCategory, GalleryImage } from "@/types";

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  { id: "cat-exterior", slug: "exterior", name: "Hotel Exterior", count: 3 },
  { id: "cat-lobby", slug: "lobby", name: "Lobby & Reception", count: 3 },
  { id: "cat-rooms", slug: "rooms", name: "Rooms", count: 4 },
  { id: "cat-dining", slug: "dining", name: "Restaurant & Dining", count: 2 },
  { id: "cat-common", slug: "common", name: "Common Areas", count: 2 },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: "gal-ext-1", src: "/yogirajimg/AKS08545.avif", alt: "Hotel Yogiraj NX exterior in Shirdi", category: "exterior", caption: "Hotel exterior" },
  { id: "gal-ext-2", src: "/yogirajimg/AKS08567.avif", alt: "Hotel Yogiraj NX building front view", category: "exterior", caption: "Hotel front view" },
  { id: "gal-ext-3", src: "/yogirajimg/AKS08625.avif", alt: "Hotel Yogiraj NX entrance and facade", category: "exterior", caption: "Hotel entrance" },

  { id: "gal-lob-1", src: "/yogirajimg/AKS08582.avif", alt: "Hotel Yogiraj NX reception and lobby", category: "lobby", caption: "Reception" },
  { id: "gal-lob-2", src: "/yogirajimg/AKS08584.avif", alt: "Hotel Yogiraj NX lobby seating area", category: "lobby", caption: "Lobby area" },
  { id: "gal-lob-3", src: "/yogirajimg/AKS08587.avif", alt: "Hotel Yogiraj NX lobby lounge", category: "lobby", caption: "Lounge" },

  { id: "gal-room-1", src: "/yogirajimg/AKS08604.avif", alt: "Hotel Yogiraj NX double bed room", category: "rooms", caption: "Double Bed Room" },
  { id: "gal-room-2", src: "/yogirajimg/AKS08605.avif", alt: "Hotel Yogiraj NX AC room interior", category: "rooms", caption: "AC Room" },
  { id: "gal-room-3", src: "/yogirajimg/AKS08614.avif", alt: "Hotel Yogiraj NX family room", category: "rooms", caption: "Family Room" },
  { id: "gal-room-4", src: "/yogirajimg/AKS08635.avif", alt: "Hotel Yogiraj NX room bedding", category: "rooms", caption: "Room" },

  { id: "gal-din-1", src: "/yogirajimg/AKS08641.avif", alt: "Vegetarian restaurant at Hotel Yogiraj NX", category: "dining", caption: "Restaurant" },
  { id: "gal-din-2", src: "/yogirajimg/3.avif", alt: "Dining area at Hotel Yogiraj NX Shirdi", category: "dining", caption: "Dining area" },

  { id: "gal-com-1", src: "/yogirajimg/01.avif", alt: "Hotel Yogiraj NX common area", category: "common", caption: "Common area" },
  { id: "gal-com-2", src: "/yogirajimg/4.avif", alt: "Hotel Yogiraj NX corridor and common spaces", category: "common", caption: "Corridor" },
];
