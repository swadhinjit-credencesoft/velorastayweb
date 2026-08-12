import type { GalleryCategory, GalleryImage } from "@/types";

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  { id: "cat-exterior", slug: "exterior", name: "Hotel Exterior", count: 3 },
  { id: "cat-lobby", slug: "lobby", name: "Lobby & Reception", count: 3 },
  { id: "cat-rooms", slug: "rooms", name: "Rooms", count: 29 },
  { id: "cat-dining", slug: "dining", name: "Restaurant & Dining", count: 3 },
  { id: "cat-common", slug: "common", name: "Common Areas", count: 3 },
  { id: "cat-paharganj", slug: "paharganj", name: "Paharganj & Delhi", count: 3 },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: "gal-ext-1", src: "/whychooseus.jpeg", alt: "The Queen's Head hotel exterior in Paharganj Delhi", category: "exterior", caption: "Hotel exterior" },
  { id: "gal-ext-2", src: "/heroimg1.jpeg", alt: "The Queen's Head hotel front view", category: "exterior", caption: "Hotel front view" },
  { id: "gal-ext-3", src: "/heroimg2.jpeg", alt: "The Queen's Head hotel Paharganj New Delhi", category: "exterior", caption: "Rajguru Marg, Paharganj" },

  { id: "gal-lob-1", src: "/homehero1.png", alt: "Reception and common area at The Queen's Head", category: "lobby", caption: "Reception" },
  { id: "gal-lob-2", src: "/homehero2.png", alt: "Hotel lobby seating area", category: "lobby", caption: "Lobby seating" },
  { id: "gal-lob-3", src: "/homehero3.png", alt: "Hotel common area", category: "lobby", caption: "Common area" },

  { id: "gal-room-1", src: "/deluxeroomimage/DeluxeDoubleRoom.jpg", alt: "Deluxe Double Room at The Queen's Head", category: "rooms", caption: "Deluxe Double Room" },
  { id: "gal-room-2", src: "/deluxeroomimage/DeluxeDoubleRoom1.png", alt: "Deluxe Double Room interior", category: "rooms", caption: "Deluxe Double Room" },
  { id: "gal-room-3", src: "/deluxeroomimage/DeluxeDoubleRoom2.png", alt: "Deluxe Double Room bedding", category: "rooms", caption: "Deluxe Double Room" },
  { id: "gal-room-4", src: "/deluxeroomimage/DeluxeDoubleRoom3.jpg", alt: "Deluxe Double Room bed", category: "rooms", caption: "Deluxe Double Room" },
  { id: "gal-room-5", src: "/deluxeroomimage/DeluxeDoubleRoom4.png", alt: "Deluxe Double Room seating and desk", category: "rooms", caption: "Deluxe Double Room" },
  { id: "gal-room-6", src: "/deluxeroomimage/DeluxeDoubleRoom5.png", alt: "Deluxe Double Room bathroom", category: "rooms", caption: "Deluxe Double Room" },
  { id: "gal-room-7", src: "/deluxeroomimage/DeluxeDoubleRoom6.jpg", alt: "Deluxe Double Room amenities", category: "rooms", caption: "Deluxe Double Room" },
  { id: "gal-room-8", src: "/PremiumDoubleRoom/PremiumDoubleRoom1.png", alt: "Premium Double Room at The Queen's Head", category: "rooms", caption: "Premium Double Room" },
  { id: "gal-room-9", src: "/PremiumDoubleRoom/PremiumDoubleRoom2.png", alt: "Premium Double Room interior", category: "rooms", caption: "Premium Double Room" },
  { id: "gal-room-10", src: "/PremiumDoubleRoom/PremiumDoubleRoom3.png", alt: "Premium Double Room bedding", category: "rooms", caption: "Premium Double Room" },
  { id: "gal-room-11", src: "/PremiumDoubleRoom/PremiumDoubleRoom4.png", alt: "Premium Double Room seating and desk", category: "rooms", caption: "Premium Double Room" },
  { id: "gal-room-12", src: "/PremiumDoubleRoom/PremiumDoubleRoom5.png", alt: "Premium Double Room bathroom", category: "rooms", caption: "Premium Double Room" },
  { id: "gal-room-13", src: "/PremiumDoubleRoom/PremiumDoubleRoom6.png", alt: "Premium Double Room amenities", category: "rooms", caption: "Premium Double Room" },
  { id: "gal-room-14", src: "/PremiumDoubleRoom/PremiumDoubleRoom7.png", alt: "Premium Double Room bed", category: "rooms", caption: "Premium Double Room" },
  { id: "gal-room-15", src: "/PremiumDoubleRoomwithCityView/PremiumDoubleRoomwithCityView.png", alt: "Premium Double Room with City View", category: "rooms", caption: "Premium Double Room with City View" },
  { id: "gal-room-16", src: "/PremiumDoubleRoomwithCityView/PremiumDoubleRoomwithCityView1.png", alt: "City View room interior", category: "rooms", caption: "Premium Double Room with City View" },
  { id: "gal-room-17", src: "/PremiumDoubleRoomwithCityView/PremiumDoubleRoomwithCityView2.png", alt: "City View room bedding", category: "rooms", caption: "Premium Double Room with City View" },
  { id: "gal-room-18", src: "/PremiumDoubleRoomwithCityView/PremiumDoubleRoomwithCityView3.png", alt: "City View room seating and desk", category: "rooms", caption: "Premium Double Room with City View" },
  { id: "gal-room-19", src: "/PremiumDoubleRoomwithCityView/PremiumDoubleRoomwithCityView4.png", alt: "City View room bathroom", category: "rooms", caption: "Premium Double Room with City View" },
  { id: "gal-room-20", src: "/PremiumDoubleRoomwithCityView/PremiumDoubleRoomwithCityView5.png", alt: "City View room amenities", category: "rooms", caption: "Premium Double Room with City View" },
  { id: "gal-room-21", src: "/PremiumDoubleRoomwithCityView/PremiumDoubleRoomwithCityView6.png", alt: "City View room bed", category: "rooms", caption: "Premium Double Room with City View" },
  { id: "gal-room-22", src: "/TripleSuitewithJacuzzi/TripleSuitewithJacuzzi.png", alt: "Triple Suite with Jacuzzi", category: "rooms", caption: "Triple Suite with Jacuzzi" },
  { id: "gal-room-23", src: "/TripleSuitewithJacuzzi/TripleSuitewithJacuzzi1.png", alt: "Triple Suite interior", category: "rooms", caption: "Triple Suite with Jacuzzi" },
  { id: "gal-room-24", src: "/TripleSuitewithJacuzzi/TripleSuitewithJacuzzi2.png", alt: "Triple Suite bedding", category: "rooms", caption: "Triple Suite with Jacuzzi" },
  { id: "gal-room-25", src: "/TripleSuitewithJacuzzi/TripleSuitewithJacuzzi3.png", alt: "Triple Suite seating and desk", category: "rooms", caption: "Triple Suite with Jacuzzi" },
  { id: "gal-room-26", src: "/TripleSuitewithJacuzzi/TripleSuitewithJacuzzi4.png", alt: "Triple Suite bathroom", category: "rooms", caption: "Triple Suite with Jacuzzi" },
  { id: "gal-room-27", src: "/TripleSuitewithJacuzzi/TripleSuitewithJacuzzi5.png", alt: "Triple Suite jacuzzi", category: "rooms", caption: "Triple Suite with Jacuzzi" },
  { id: "gal-room-28", src: "/TripleSuitewithJacuzzi/TripleSuitewithJacuzzi6.png", alt: "Triple Suite amenities", category: "rooms", caption: "Triple Suite with Jacuzzi" },
  { id: "gal-room-29", src: "/TripleSuitewithJacuzzi/TripleSuitewithJacuzzi7.png", alt: "Triple Suite bed", category: "rooms", caption: "Triple Suite with Jacuzzi" },

  { id: "gal-din-1", src: "/homehero3.png", alt: "Restaurant at The Queen's Head Paharganj", category: "dining", caption: "Restaurant" },
  { id: "gal-din-2", src: "/homehero2.png", alt: "Indian and Chinese dining at the hotel restaurant", category: "dining", caption: "Dining area" },
  { id: "gal-din-3", src: "/homehero1.png", alt: "Hotel restaurant kitchen", category: "dining", caption: "Restaurant" },

  { id: "gal-com-1", src: "/deluxeroomimage/DeluxeDoubleRoom2.png", alt: "Hotel common area Paharganj", category: "common", caption: "Common area" },
  { id: "gal-com-2", src: "/homehero1.png", alt: "Hotel corridors and common spaces", category: "common", caption: "Corridor" },
  { id: "gal-com-3", src: "/whychooseus.jpeg", alt: "The Queen's Head hotel common spaces", category: "common", caption: "Common space" },

  { id: "gal-pah-1", src: "/Pawnalake.jpg", alt: "Paharganj New Delhi street", category: "paharganj", caption: "Paharganj market" },
  { id: "gal-pah-2", src: "/BhushiDam.webp", alt: "Connaught Place New Delhi", category: "paharganj", caption: "Connaught Place" },
  { id: "gal-pah-3", src: "/Karlacaves.jpg", alt: "Delhi landmarks near the hotel", category: "paharganj", caption: "Delhi landmarks" },
];
