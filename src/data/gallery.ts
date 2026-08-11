import type { GalleryCategory, GalleryImage } from "@/types";

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  { id: "cat-exterior", slug: "exterior", name: "Hotel Exterior", count: 3 },
  { id: "cat-lobby", slug: "lobby", name: "Lobby & Reception", count: 3 },
  { id: "cat-rooms", slug: "rooms", name: "Rooms", count: 6 },
  { id: "cat-dining", slug: "dining", name: "Restaurant & Dining", count: 3 },
  { id: "cat-common", slug: "common", name: "Common Areas", count: 3 },
  { id: "cat-paharganj", slug: "paharganj", name: "Paharganj & Delhi", count: 3 },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: "gal-ext-1", src: "/whychooseus.jpeg", alt: "The Queen's Head hotel exterior in Paharganj Delhi", category: "exterior", caption: "Hotel exterior" },
  { id: "gal-ext-2", src: "/heroimg1.jpeg", alt: "The Queen's Head hotel front view", category: "exterior", caption: "Hotel front view" },
  { id: "gal-ext-3", src: "/heroimg2.jpeg", alt: "The Queen's Head hotel Paharganj New Delhi", category: "exterior", caption: "Rajguru Marg, Paharganj" },

  { id: "gal-lob-1", src: "/images/hallroom.avif", alt: "Reception and common area at The Queen's Head", category: "lobby", caption: "Reception" },
  { id: "gal-lob-2", src: "/images/hallroom1.avif", alt: "Hotel lobby seating area", category: "lobby", caption: "Lobby seating" },
  { id: "gal-lob-3", src: "/images/groundkitchen.avif", alt: "Hotel common area", category: "lobby", caption: "Common area" },

  { id: "gal-room-1", src: "/images/upperlevelbalcony.avif", alt: "Deluxe Double Room at The Queen's Head", category: "rooms", caption: "Deluxe Double Room" },
  { id: "gal-room-2", src: "/images/upperlevelbalcony1.avif", alt: "Premium Double Room in New Delhi", category: "rooms", caption: "Premium Double Room" },
  { id: "gal-room-3", src: "/images/hallroom.avif", alt: "Premium Double Room with City View", category: "rooms", caption: "City View Room" },
  { id: "gal-room-4", src: "/images/hallroom1.avif", alt: "Triple Suite with Jacuzzi", category: "rooms", caption: "Triple Suite with Jacuzzi" },
  { id: "gal-room-5", src: "/images/swimmingpool.avif", alt: "Room interior at The Queen's Head", category: "rooms", caption: "Room interior" },
  { id: "gal-room-6", src: "/whychooseus.jpeg", alt: "Comfortable hotel room in Paharganj", category: "rooms", caption: "Comfortable bedding" },

  { id: "gal-din-1", src: "/images/diningarea.avif", alt: "Restaurant at The Queen's Head Paharganj", category: "dining", caption: "Restaurant" },
  { id: "gal-din-2", src: "/images/diningarea1.avif", alt: "Indian and Chinese dining at the hotel restaurant", category: "dining", caption: "Dining area" },
  { id: "gal-din-3", src: "/images/groundkitchen.avif", alt: "Hotel restaurant kitchen", category: "dining", caption: "Restaurant" },

  { id: "gal-com-1", src: "/images/swimmingpool1.avif", alt: "Hotel common area Paharganj", category: "common", caption: "Common area" },
  { id: "gal-com-2", src: "/images/diningarea.avif", alt: "Hotel corridors and common spaces", category: "common", caption: "Corridor" },
  { id: "gal-com-3", src: "/images/whychooseus.avif", alt: "The Queen's Head hotel common spaces", category: "common", caption: "Common space" },

  { id: "gal-pah-1", src: "/Pawnalake.jpg", alt: "Paharganj New Delhi street", category: "paharganj", caption: "Paharganj market" },
  { id: "gal-pah-2", src: "/BhushiDam.webp", alt: "Connaught Place New Delhi", category: "paharganj", caption: "Connaught Place" },
  { id: "gal-pah-3", src: "/Karlacaves.jpg", alt: "Delhi landmarks near the hotel", category: "paharganj", caption: "Delhi landmarks" },
];
