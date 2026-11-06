import type { GalleryCategory, GalleryImage } from "@/types";
import { STOCK_GALLERY } from "@/data/images";

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  { id: "rooms", slug: "rooms", name: "Rooms", count: 3 },
  { id: "property", slug: "property", name: "Property inspiration", count: 1 },
];

export const GALLERY_IMAGES: GalleryImage[] = STOCK_GALLERY;
