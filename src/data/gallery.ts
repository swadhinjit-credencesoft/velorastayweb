import type { GalleryCategory, GalleryImage } from "@/types";

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  { id: "cat-exterior", slug: "exterior", name: "Hotel Exterior", count: 3 },
  { id: "cat-lobby", slug: "lobby", name: "Lobby & Reception", count: 3 },
  { id: "cat-rooms", slug: "rooms", name: "Rooms", count: 29 },
  { id: "cat-dining", slug: "dining", name: "Restaurant & Dining", count: 3 },
  { id: "cat-common", slug: "common", name: "Common Areas", count: 3 },
  { id: "cat-shirdi", slug: "shirdi", name: "Shirdi & Sai Baba Temple", count: 0 },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: "gal-ext-1", src: "/whychooseus.png", alt: "Hotel Yogiraj exterior near Sai Baba Temple in Shirdi", category: "exterior", caption: "Hotel exterior" },
  { id: "gal-ext-2", src: "/homehero1.png", alt: "Hotel Yogiraj front view in Shirdi", category: "exterior", caption: "Hotel front view" },
  { id: "gal-ext-3", src: "/homehero2.png", alt: "Hotel Yogiraj Pimpalwadi Road Shirdi", category: "exterior", caption: "Pimpalwadi Rd, Shirdi" },

  { id: "gal-lob-1", src: "/homehero1.png", alt: "Reception and lobby at Hotel Yogiraj Shirdi", category: "lobby", caption: "Reception" },
  { id: "gal-lob-2", src: "/homehero2.png", alt: "Hotel Yogiraj lobby seating area", category: "lobby", caption: "Lobby seating" },
  { id: "gal-lob-3", src: "/homehero3.png", alt: "Hotel Yogiraj common area", category: "lobby", caption: "Common area" },

  { id: "gal-room-1", src: "/deluxeroomimage/DeluxeDoubleRoom.jpg", alt: "Double Bed Non-AC Room at Hotel Yogiraj", category: "rooms", caption: "Double Bed Non-AC Room" },
  { id: "gal-room-2", src: "/deluxeroomimage/DeluxeDoubleRoom1.png", alt: "Hotel Yogiraj double room interior", category: "rooms", caption: "Double Bed Room" },
  { id: "gal-room-3", src: "/deluxeroomimage/DeluxeDoubleRoom2.png", alt: "Hotel Yogiraj room bedding", category: "rooms", caption: "Double Bed Room" },
  { id: "gal-room-4", src: "/deluxeroomimage/DeluxeDoubleRoom3.jpg", alt: "Hotel Yogiraj room bed", category: "rooms", caption: "Double Bed Room" },
  { id: "gal-room-5", src: "/deluxeroomimage/DeluxeDoubleRoom4.png", alt: "Hotel Yogiraj room seating and desk", category: "rooms", caption: "Double Bed Room" },
  { id: "gal-room-6", src: "/deluxeroomimage/DeluxeDoubleRoom5.png", alt: "Hotel Yogiraj private bathroom", category: "rooms", caption: "Private bathroom" },
  { id: "gal-room-7", src: "/deluxeroomimage/DeluxeDoubleRoom6.jpg", alt: "Hotel Yogiraj room amenities", category: "rooms", caption: "Room amenities" },
  { id: "gal-room-8", src: "/PremiumDoubleRoom/PremiumDoubleRoom1.png", alt: "Triple Bed AC Room at Hotel Yogiraj", category: "rooms", caption: "Triple Bed AC Room" },
  { id: "gal-room-9", src: "/PremiumDoubleRoom/PremiumDoubleRoom2.png", alt: "Hotel Yogiraj AC room interior", category: "rooms", caption: "Air-conditioned room" },
  { id: "gal-room-10", src: "/PremiumDoubleRoom/PremiumDoubleRoom3.png", alt: "Hotel Yogiraj AC room bedding", category: "rooms", caption: "AC room" },
  { id: "gal-room-11", src: "/PremiumDoubleRoom/PremiumDoubleRoom4.png", alt: "Hotel Yogiraj room seating and desk", category: "rooms", caption: "AC room" },
  { id: "gal-room-12", src: "/PremiumDoubleRoom/PremiumDoubleRoom5.png", alt: "Hotel Yogiraj bathroom", category: "rooms", caption: "Private bathroom" },
  { id: "gal-room-13", src: "/PremiumDoubleRoom/PremiumDoubleRoom6.png", alt: "Hotel Yogiraj room amenities", category: "rooms", caption: "Room amenities" },
  { id: "gal-room-14", src: "/PremiumDoubleRoom/PremiumDoubleRoom7.png", alt: "Hotel Yogiraj room bed", category: "rooms", caption: "AC room" },
  { id: "gal-room-15", src: "/PremiumDoubleRoomwithCityView/PremiumDoubleRoomwithCityView.png", alt: "Family room at Hotel Yogiraj Shirdi", category: "rooms", caption: "Family room" },
  { id: "gal-room-16", src: "/PremiumDoubleRoomwithCityView/PremiumDoubleRoomwithCityView1.png", alt: "Hotel Yogiraj family room interior", category: "rooms", caption: "Family room" },
  { id: "gal-room-17", src: "/PremiumDoubleRoomwithCityView/PremiumDoubleRoomwithCityView2.png", alt: "Hotel Yogiraj family room bedding", category: "rooms", caption: "Family room" },
  { id: "gal-room-18", src: "/PremiumDoubleRoomwithCityView/PremiumDoubleRoomwithCityView3.png", alt: "Hotel Yogiraj family room seating", category: "rooms", caption: "Family room" },
  { id: "gal-room-19", src: "/PremiumDoubleRoomwithCityView/PremiumDoubleRoomwithCityView4.png", alt: "Hotel Yogiraj family room bathroom", category: "rooms", caption: "Private bathroom" },
  { id: "gal-room-20", src: "/PremiumDoubleRoomwithCityView/PremiumDoubleRoomwithCityView5.png", alt: "Hotel Yogiraj family room amenities", category: "rooms", caption: "Room amenities" },
  { id: "gal-room-21", src: "/PremiumDoubleRoomwithCityView/PremiumDoubleRoomwithCityView6.png", alt: "Hotel Yogiraj family room bed", category: "rooms", caption: "Family room" },
  { id: "gal-room-22", src: "/TripleSuitewithJacuzzi/TripleSuitewithJacuzzi.png", alt: "Four Bed AC Room at Hotel Yogiraj Shirdi", category: "rooms", caption: "Four Bed AC Room" },
  { id: "gal-room-23", src: "/TripleSuitewithJacuzzi/TripleSuitewithJacuzzi1.png", alt: "Hotel Yogiraj group room interior", category: "rooms", caption: "Group room" },
  { id: "gal-room-24", src: "/TripleSuitewithJacuzzi/TripleSuitewithJacuzzi2.png", alt: "Hotel Yogiraj four bed room bedding", category: "rooms", caption: "Four Bed AC Room" },
  { id: "gal-room-25", src: "/TripleSuitewithJacuzzi/TripleSuitewithJacuzzi3.png", alt: "Hotel Yogiraj seating and desk", category: "rooms", caption: "Group room" },
  { id: "gal-room-26", src: "/TripleSuitewithJacuzzi/TripleSuitewithJacuzzi4.png", alt: "Hotel Yogiraj bathroom", category: "rooms", caption: "Private bathroom" },
  { id: "gal-room-27", src: "/TripleSuitewithJacuzzi/TripleSuitewithJacuzzi5.png", alt: "Hotel Yogiraj room amenities", category: "rooms", caption: "Room amenities" },
  { id: "gal-room-28", src: "/TripleSuitewithJacuzzi/TripleSuitewithJacuzzi6.png", alt: "Hotel Yogiraj room jacuzzi-style bath", category: "rooms", caption: "Group room" },
  { id: "gal-room-29", src: "/TripleSuitewithJacuzzi/TripleSuitewithJacuzzi7.png", alt: "Hotel Yogiraj bed", category: "rooms", caption: "Group room" },

  { id: "gal-din-1", src: "/homehero3.png", alt: "Vegetarian restaurant at Hotel Yogiraj Shirdi", category: "dining", caption: "In-house restaurant" },
  { id: "gal-din-2", src: "/homehero2.png", alt: "Dining hall at Hotel Yogiraj", category: "dining", caption: "Dining area" },
  { id: "gal-din-3", src: "/homehero1.png", alt: "Hotel Yogiraj restaurant breakfast buffet", category: "dining", caption: "Breakfast buffet" },

  { id: "gal-com-1", src: "/deluxeroomimage/DeluxeDoubleRoom2.png", alt: "Hotel Yogiraj common area Shirdi", category: "common", caption: "Common area" },
  { id: "gal-com-2", src: "/homehero1.png", alt: "Hotel Yogiraj corridors and common spaces", category: "common", caption: "Corridor" },
  { id: "gal-com-3", src: "/whychooseus.png", alt: "Hotel Yogiraj common spaces in Shirdi", category: "common", caption: "Common space" },
];
