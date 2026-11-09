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
    image: "/yogirajhero2.jpeg",
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
    image: "/yogirajhero1.jpeg",
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
    image: "/yogirajhero.jpeg",
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
    image: "/yogirajhero2.jpeg",
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
    image: "/yogirajhero1.jpeg",
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
    image: "/yogirajhero.jpeg",
    features: ["On-site parking", "Free for guests"],
    category: "transport",
  },
  {
    id: "fac-transport",
    slug: "travel-transport-service",
    name: "Travel & Transport Service (Special Discount)",
    description:
      "Comfortable airport transfers (SAG), Shirdi railway station pickup/drop, local taxi services, and Shani Shingnapur darshan tours with exclusive special discounts for hotel guests. Contact Mr. Sachin at +91 76767 73535.",
    icon: "lucide:car",
    image: "/yogirajhero1.png",
    features: [
      "Special Discount for Hotel Guests",
      "Travel Manager: Mr. Sachin (+91 76767 73535)",
      "Shirdi Airport (SAG) & Railway Station Transfers",
      "Shani Shingnapur & Outstation Sightseeing Cabs",
    ],
    category: "transport",
  },
  {
    id: "fac-frontdesk",
    slug: "24-hour-front-desk",
    name: "24-Hour Front Desk",
    description:
      "Our front desk operates 24 hours to assist guests with their stay, bookings, temple guidance and local information.",
    icon: "lucide:headphones",
    image: "/reception.jpeg",
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
    image: "/yogirajhero1.jpeg",
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
    image: "/yogirajhero.jpeg",
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
    image: "/yogirajhero2.jpeg",
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
    image: "/yogirajhero1.jpeg",
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
    image: "/yogirajhero1.jpeg",
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
    image: "/yogirajhero.jpeg",
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
    image: "/yogirajhero2.jpeg",
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
