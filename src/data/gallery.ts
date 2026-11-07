import type { GalleryCategory, GalleryImage } from "@/types";
import fallbackProperty from "@/data/fallbackProperty.json";

function getApiRoomGalleryImages(): GalleryImage[] {
  const images: GalleryImage[] = [];
  const property = fallbackProperty;
  (property.roomList || []).forEach((r) => {
    const cleanName = r.name.trim();
    (r.imageList || []).forEach((img, i) => {
      if (img && img.url && typeof img.url === "string") {
        images.push({
          id: `gal-room-${r.id}-${i}`,
          src: img.url.trim(),
          alt: `${cleanName} - Hotel Yogiraj Shirdi`,
          category: "rooms",
          caption: i === 0 ? cleanName : `${cleanName} (View ${i + 1})`,
        });
      }
    });
  });
  return images;
}

export const ROOM_GALLERY_IMAGES: GalleryImage[] = getApiRoomGalleryImages();

export const HOTEL_GALLERY_IMAGES: GalleryImage[] = [
  // Exterior
  {
    id: "gal-ext-1",
    src: "/yogirajhero2.jpeg",
    alt: "Hotel Yogiraj building exterior aerial view in Shirdi",
    category: "exterior",
    caption: "Hotel Aerial View",
  },
  {
    id: "gal-ext-2",
    src: "/yogirajhero1.jpeg",
    alt: "Hotel Yogiraj facade and covered parking",
    category: "exterior",
    caption: "Facade & Parking",
  },
  {
    id: "gal-ext-3",
    src: "/yogirajhero.jpeg",
    alt: "Hotel Yogiraj entrance and driveway in Shirdi",
    category: "exterior",
    caption: "Entrance & Driveway",
  },

  // Lobby & Reception
  {
    id: "gal-lob-1",
    src: "/reception.jpeg",
    alt: "Hotel Yogiraj 24-hour reception counter",
    category: "lobby",
    caption: "24-Hour Reception Desk",
  },
  {
    id: "gal-lob-2",
    src: "/reception.jpeg",
    alt: "Hotel Yogiraj lobby seating and waiting lounge",
    category: "lobby",
    caption: "Lobby Seating & Lounge",
  },

  // Dining
  {
    id: "gal-din-1",
    src: "/yogirajhero1.jpeg",
    alt: "Pure vegetarian restaurant and dining at Hotel Yogiraj",
    category: "dining",
    caption: "In-House Vegetarian Restaurant",
  },

  // Common Areas
  {
    id: "gal-com-1",
    src: "/reception.jpeg",
    alt: "Hotel Yogiraj reception and guest lounge",
    category: "common",
    caption: "Reception Lounge",
  },
  {
    id: "gal-com-2",
    src: "/yogirajhero.jpeg",
    alt: "Hotel Yogiraj entrance driveway and surroundings",
    category: "common",
    caption: "Driveway & Entrance",
  },
  {
    id: "gal-com-3",
    src: "/yogirajhero1.jpeg",
    alt: "Hotel Yogiraj covered parking area",
    category: "common",
    caption: "Covered Parking",
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  ...HOTEL_GALLERY_IMAGES.filter((img) => img.category === "exterior"),
  ...HOTEL_GALLERY_IMAGES.filter((img) => img.category === "lobby"),
  ...ROOM_GALLERY_IMAGES,
  ...HOTEL_GALLERY_IMAGES.filter((img) => img.category === "dining"),
  ...HOTEL_GALLERY_IMAGES.filter((img) => img.category === "common"),
];

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    id: "cat-exterior",
    slug: "exterior",
    name: "Hotel Exterior",
    count: GALLERY_IMAGES.filter((i) => i.category === "exterior").length,
  },
  {
    id: "cat-lobby",
    slug: "lobby",
    name: "Lobby & Reception",
    count: GALLERY_IMAGES.filter((i) => i.category === "lobby").length,
  },
  {
    id: "cat-rooms",
    slug: "rooms",
    name: "Rooms & Suites",
    count: GALLERY_IMAGES.filter((i) => i.category === "rooms").length,
  },
  {
    id: "cat-dining",
    slug: "dining",
    name: "Restaurant & Dining",
    count: GALLERY_IMAGES.filter((i) => i.category === "dining").length,
  },
  {
    id: "cat-common",
    slug: "common",
    name: "Common Areas",
    count: GALLERY_IMAGES.filter((i) => i.category === "common").length,
  },
];
