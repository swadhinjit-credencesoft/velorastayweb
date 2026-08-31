import type { SectionContent, Facility } from "@/types";

export const FACILITIES_CONTENT: SectionContent = {
  eyebrow: "Hotel Amenities",
  heading: "Hotel Amenities",
  description:
    "Enjoy a comfortable and convenient stay at Hotel Yogiraj with free & fast Wi-Fi, AC rooms, an in-house restaurant, car parking, CCTV cameras and 24-hour room service in the heart of Shirdi.",
};

export const FACILITIES: Facility[] = [
  {
    id: "fac-wifi",
    slug: "free-wifi",
    name: "Free & Fast Wi-Fi",
    description:
      "Stay connected throughout your visit with complimentary fast Wi-Fi across the hotel.",
    icon: "lucide:wifi",
    image: "/homehero1.png",
    features: ["Complimentary", "All rooms", "Fast connection"],
    category: "basic",
  },
  {
    id: "fac-ac",
    slug: "air-conditioning",
    name: "Air Conditioning",
    description:
      "AC rooms are available for a cool and comfortable stay.",
    icon: "lucide:snowflake",
    image: "/homehero2.png",
    features: ["AC rooms", "Comfort climate control"],
    category: "comfort",
  },
  {
    id: "fac-tv",
    slug: "flat-screen-tv",
    name: "Satellite & Cable TV",
    description:
      "Relax in your room with in-room television entertainment via satellite and cable.",
    icon: "lucide:tv",
    image: "/homehero1.png",
    features: ["In-room entertainment", "Satellite & cable channels"],
    category: "entertainment",
  },
  {
    id: "fac-restaurant",
    slug: "restaurant",
    name: "In-House Restaurant",
    description:
      "Enjoy delicious vegetarian meals at our in-house restaurant, including a complimentary breakfast buffet.",
    icon: "lucide:utensils",
    image: "/homehero3.png",
    features: ["Vegetarian cuisine", "Breakfast buffet", "Complimentary breakfast"],
    category: "services",
  },
  {
    id: "fac-roomservice",
    slug: "24-hour-room-service",
    name: "24-Hour Room Service",
    description:
      "Our room service is available 24 hours to assist guests with dining and requests.",
    icon: "lucide:bell",
    image: "/homehero1.png",
    features: ["Round-the-clock", "Dining in your room"],
    category: "service",
  },
  {
    id: "fac-parking",
    slug: "car-parking",
    name: "Car Parking",
    description:
      "Free car parking is available for guests travelling by their own vehicle.",
    icon: "lucide:car",
    image: "/deluxeroomimage/DeluxeDoubleRoom1.png",
    features: ["On-site parking", "Free for guests"],
    category: "transport",
  },
  {
    id: "fac-frontdesk",
    slug: "24-hour-front-desk",
    name: "24-Hour Front Desk",
    description:
      "Our front desk operates 24 hours to assist guests with their stay, bookings, temple guidance and local information.",
    icon: "lucide:headphones",
    image: "/homehero1.png",
    features: ["Always available", "Check-in & check-out assistance", "Temple guidance"],
    category: "service",
  },
  {
    id: "fac-geyser",
    slug: "geyser",
    name: "Geyser (Hot Water)",
    description:
      "Enjoy hot water in your bathroom thanks to in-room geysers.",
    icon: "lucide:droplets",
    image: "/homehero2.png",
    features: ["Hot water", "Private bathrooms"],
    category: "bathroom",
  },
  {
    id: "fac-coffee",
    slug: "coffee-machine",
    name: "Coffee Machine",
    description:
      "A convenient coffee machine is available for guests' refreshment.",
    icon: "lucide:coffee",
    image: "/homehero2.png",
    features: ["Coffee & refreshments", "Convenient location"],
    category: "services",
  },
  {
    id: "fac-card",
    slug: "card-payment",
    name: "Card Payment",
    description:
      "Convenient digital and card payment options are accepted at the hotel.",
    icon: "lucide:credit-card",
    image: "/homehero1.png",
    features: ["Card payments", "Digital payments"],
    category: "services",
  },
  {
    id: "fac-power",
    slug: "power-backup",
    name: "Power Backup",
    description:
      "Power backup ensures uninterrupted comfort during your stay.",
    icon: "lucide:zap",
    image: "/homehero2.png",
    features: ["Uninterrupted power", "Reliable supply"],
    category: "service",
  },
  {
    id: "fac-cctv",
    slug: "cctv-cameras",
    name: "CCTV Cameras",
    description:
      "CCTV cameras are installed for the safety and security of guests.",
    icon: "lucide:camera",
    image: "/homehero1.png",
    features: ["24-hour surveillance", "Guest safety"],
    category: "safety",
  },
  {
    id: "fac-fire",
    slug: "fire-extinguisher",
    name: "Fire Extinguisher",
    description:
      "Fire extinguishers are available across the property for guest safety.",
    icon: "lucide:flame",
    image: "/homehero2.png",
    features: ["Fire safety", "Guest protection"],
    category: "safety",
  },
  {
    id: "fac-housekeeping",
    slug: "daily-housekeeping",
    name: "Daily Housekeeping",
    description:
      "Regular housekeeping keeps your room fresh and comfortable throughout your stay.",
    icon: "lucide:sparkles",
    image: "/homehero1.png",
    features: ["Daily cleaning", "Fresh towels & linen"],
    category: "service",
  },
];

export function getFacilityBySlug(slug: string): Facility | undefined {
  return FACILITIES.find((facility) => facility.slug === slug);
}

export function getFacilitiesByCategory(category: string): Facility[] {
  return FACILITIES.filter((facility) => facility.category === category);
}
