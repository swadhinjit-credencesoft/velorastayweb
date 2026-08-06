import type { GalleryCategory, GalleryImage } from "@/types";

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    id: "gallery-exterior",
    slug: "exterior",
    name: "Exterior & Pool",
    count: 7,
  },
  {
    id: "gallery-bedrooms",
    slug: "bedrooms",
    name: "Bedrooms & Interiors",
    count: 5,
  },
  {
    id: "gallery-living",
    slug: "living",
    name: "Living & Dining",
    count: 10,
  },
  {
    id: "gallery-outdoor",
    slug: "outdoor",
    name: "Outdoor & Lawn",
    count: 7,
  },
  {
    id: "gallery-lake",
    slug: "lake",
    name: "Lake & Sunset",
    count: 6,
  },
  {
    id: "gallery-guests",
    slug: "guests",
    name: "Guest Moments",
    count: 5,
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  // ── Exterior & Pool ──
  { id: "gallery-ext-01", src: "/WhatsApp Image 2026-07-19 at 8.44.17 AM (1).jpeg", alt: "Villa exterior", category: "exterior", caption: "Villa Facade" },
  { id: "gallery-ext-02", src: "/WhatsApp Image 2026-07-19 at 8.44.16 AM.jpeg", alt: "Private pool", category: "exterior", caption: "Private Pool" },
  { id: "gallery-ext-03", src: "/WhatsApp Image 2026-07-19 at 8.44.15 AM (1).jpeg", alt: "Villa entrance", category: "exterior", caption: "Villa Entrance" },
  { id: "gallery-ext-04", src: "/WhatsApp Image 2026-07-19 at 8.44.11 AM (1).jpeg", alt: "Evening view", category: "exterior", caption: "Night View" },
  { id: "gallery-ext-05", src: "/outdoorpool.jpeg", alt: "Pool deck", category: "exterior", caption: "Pool Deck" },
  { id: "gallery-ext-06", src: "/images/swimmingpool.avif", alt: "Private swimming pool", category: "exterior", caption: "Private Swimming Pool" },
  { id: "gallery-ext-07", src: "/images/swimmingpool1.avif", alt: "Swimming pool view", category: "exterior", caption: "Pool View" },

  // ── Bedrooms & Interiors ──
  { id: "gallery-bed-01", src: "/WhatsApp Image 2026-07-19 at 8.44.10 AM.jpeg", alt: "Master bedroom", category: "bedrooms", caption: "Master Bedroom" },
  { id: "gallery-bed-02", src: "/WhatsApp Image 2026-07-19 at 8.44.10 AM.jpeg", alt: "Lake view bedroom", category: "bedrooms", caption: "Lake View Bedroom" },
  { id: "gallery-bed-03", src: "/WhatsApp Image 2026-07-19 at 8.44.08 AM.jpeg", alt: "Modern interior", category: "bedrooms", caption: "Modern Interior" },
  { id: "gallery-bed-04", src: "/WhatsApp Image 2026-07-19 at 8.42.21 AM.jpeg", alt: "Ensuite bathroom", category: "bedrooms", caption: "Ensuite Bathroom" },
  { id: "gallery-bed-05", src: "/WhatsApp Image 2026-07-19 at 8.42.20 AM.jpeg", alt: "Bedroom balcony", category: "bedrooms", caption: "Bedroom Balcony" },

  // ── Living & Dining ──
  { id: "gallery-liv-01", src: "/WhatsApp Image 2026-07-19 at 8.42.19 AM (1).jpeg", alt: "Living room", category: "living", caption: "Living Room" },
  { id: "gallery-liv-02", src: "/WhatsApp Image 2026-07-19 at 8.42.18 AM (1).jpeg", alt: "Dining area", category: "living", caption: "Dining Area" },
  { id: "gallery-liv-03", src: "/WhatsApp Image 2026-07-19 at 8.42.08 AM.jpeg", alt: "Kitchen", category: "living", caption: "Kitchen" },
  { id: "gallery-liv-04", src: "/WhatsApp Image 2026-07-19 at 8.42.08 AM.jpeg", alt: "Entertainment area", category: "living", caption: "Entertainment Area" },
  { id: "gallery-liv-05", src: "/ExpansiveLivingLawn.jpeg", alt: "Interior design", category: "living", caption: "Interior Design" },
  { id: "gallery-liv-06", src: "/images/groundkitchen.avif", alt: "Central kitchen", category: "living", caption: "Central Kitchen" },
  { id: "gallery-liv-07", src: "/images/diningarea.avif", alt: "Dining area", category: "living", caption: "Dining Area" },
  { id: "gallery-liv-08", src: "/images/diningarea1.avif", alt: "Dining space", category: "living", caption: "Private Dining Space" },
  { id: "gallery-liv-09", src: "/images/hallroom.avif", alt: "Hall room", category: "living", caption: "Hall Room" },
  { id: "gallery-liv-10", src: "/images/hallroom1.avif", alt: "Hall room seating", category: "living", caption: "Hall Room Seating" },

  // ── Outdoor & Lawn ──
  { id: "gallery-out-01", src: "/bornfire.webp", alt: "Bonfire area", category: "outdoor", caption: "Bonfire Area" },
  { id: "gallery-out-02", src: "/Pawnalake.jpg", alt: "Pawna Lake view", category: "outdoor", caption: "Pawna Lake View" },
  { id: "gallery-out-03", src: "/heroimg1.jpeg", alt: "Outdoor seating", category: "outdoor", caption: "Outdoor Seating" },
  { id: "gallery-out-04", src: "/heroimg2.jpeg", alt: "Garden view", category: "outdoor", caption: "Garden View" },
  { id: "gallery-out-05", src: "/heroimg3.jpeg", alt: "Evening gathering", category: "outdoor", caption: "Evening Gathering" },
  { id: "gallery-out-06", src: "/images/upperlevelbalcony.avif", alt: "Upper level balcony", category: "outdoor", caption: "Upper Level Balcony" },
  { id: "gallery-out-07", src: "/images/upperlevelbalcony1.avif", alt: "Balcony view", category: "outdoor", caption: "Balcony View" },

  // ── Lake & Sunset ──
  { id: "gallery-lake-01", src: "/lohagarh.jpg", alt: "Lohagad Fort", category: "lake", caption: "Lohagad Fort" },
  { id: "gallery-lake-02", src: "/Karlacaves.jpg", alt: "Karla Caves", category: "lake", caption: "Karla Caves" },
  { id: "gallery-lake-03", src: "/bhajacaves.jpg", alt: "Bhaja Caves", category: "lake", caption: "Bhaja Caves" },
  { id: "gallery-lake-04", src: "/lionpoint.jpg", alt: "Lion Point", category: "lake", caption: "Lion Point" },
  { id: "gallery-lake-05", src: "/tigerpoint.jpg", alt: "Tiger Point", category: "lake", caption: "Tiger Point" },
  { id: "gallery-lake-06", src: "/trikonafort.jpg", alt: "Trikona Fort", category: "lake", caption: "Trikona Fort" },

  // ── Guest Moments ──
  { id: "gallery-guest-01", src: "/WhatsApp Image 2026-07-19 at 8.44.17 AM (1).jpeg", alt: "Family pool time", category: "guests", caption: "Family Pool Time" },
  { id: "gallery-guest-02", src: "/WhatsApp Image 2026-07-19 at 8.44.16 AM.jpeg", alt: "Bonfire night", category: "guests", caption: "Bonfire Night" },
  { id: "gallery-guest-03", src: "/WhatsApp Image 2026-07-19 at 8.44.15 AM (1).jpeg", alt: "Sunset moments", category: "guests", caption: "Sunset Moments" },
  { id: "gallery-guest-04", src: "/WhatsApp Image 2026-07-19 at 8.44.11 AM (1).jpeg", alt: "Corporate retreat", category: "guests", caption: "Corporate Retreat" },
  { id: "gallery-guest-05", src: "/WhatsApp Image 2026-07-19 at 8.42.21 AM.jpeg", alt: "BBQ dinner", category: "guests", caption: "BBQ Dinner" },
];
