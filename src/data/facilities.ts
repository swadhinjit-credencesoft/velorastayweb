import type { SectionContent, Facility } from "@/types";

export const FACILITIES_CONTENT: SectionContent = {
  eyebrow: "Hotel Amenities",
  heading: "Hotel Amenities",
  description:
    "Stay connected and comfortable throughout your visit with complimentary Wi-Fi, air conditioning, a 24-hour front desk, an on-site restaurant and more at The Queen's Head â€“ Paharganj.",
};

export const FACILITIES: Facility[] = [
  {
    id: "fac-wifi",
    slug: "free-wifi",
    name: "Free Wi-Fi",
    description:
      "Stay connected throughout your visit with complimentary Wi-Fi across the hotel.",
    icon: "lucide:wifi",
    image: "/homehero1.png",
    features: ["Complimentary", "All rooms", "Workspaces"],
    category: "basic",
  },
  {
    id: "fac-ac",
    slug: "air-conditioning",
    name: "Air Conditioning",
    description:
      "All listed accommodation is air-conditioned for a comfortable stay.",
    icon: "lucide:snowflake",
    image: "/homehero2.png",
    features: ["All rooms", "Comfort climate control"],
    category: "comfort",
  },
  {
    id: "fac-tv",
    slug: "flat-screen-tv",
    name: "Flat-Screen TV",
    description:
      "Relax in your room with in-room television entertainment.",
    icon: "lucide:tv",
    image: "/homehero1.png",
    features: ["In-room entertainment", "Multiple channels"],
    category: "entertainment",
  },
  {
    id: "fac-workdesk",
    slug: "work-desk",
    name: "Work Desk",
    description:
      "Selected room facilities include work desks for guests travelling on business.",
    icon: "lucide:desk",
    image: "/homehero2.png",
    features: ["Business travellers", "Comfortable workspace"],
    category: "basic",
  },
  {
    id: "fac-frontdesk",
    slug: "24-hour-front-desk",
    name: "24-Hour Front Desk",
    description:
      "Our front desk operates 24 hours to assist guests with their stay, bookings and local information.",
    icon: "lucide:headphones",
    image: "/homehero1.png",
    features: ["Always available", "Check-in & check-out assistance", "Guest support"],
    category: "service",
  },
  {
    id: "fac-restaurant",
    slug: "restaurant",
    name: "Restaurant",
    description:
      "Enjoy Indian and Chinese cuisine at the hotel's on-site restaurant.",
    icon: "lucide:utensils",
    image: "/homehero3.png",
    features: ["Indian cuisine", "Chinese cuisine", "On-site dining"],
    category: "services",
  },
  {
    id: "fac-coffee",
    slug: "coffee-shop",
    name: "Coffee Shop",
    description:
      "A convenient coffee option is available on the property.",
    icon: "lucide:coffee",
    image: "/homehero2.png",
    features: ["Coffee & refreshments", "Convenient location"],
    category: "services",
  },
  {
    id: "fac-concierge",
    slug: "concierge",
    name: "Concierge",
    description:
      "Guests can receive assistance with local information and hotel services.",
    icon: "lucide:bell",
    image: "/homehero1.png",
    features: ["Local information", "Hotel services"],
    category: "service",
  },
  {
    id: "fac-tourdesk",
    slug: "tour-desk",
    name: "Tour Desk",
    description:
      "Plan sightseeing and explore Delhi with assistance from the hotel's tour services.",
    icon: "lucide:compass",
    image: "/homehero2.png",
    features: ["Sightseeing assistance", "Delhi attractions"],
    category: "services",
  },
  {
    id: "fac-family-rooms",
    slug: "family-rooms",
    name: "Family Rooms",
    description:
      "Family accommodation options are available for a comfortable stay together.",
    icon: "lucide:users",
    image: "/whychooseus.jpeg",
    features: ["Family-friendly", "Comfortable bedding", "Extra bed available"],
    category: "family",
  },
  {
    id: "fac-parking",
    slug: "private-parking",
    name: "Private Parking",
    description:
      "Free private parking is listed among the hotel facilities. Please confirm operational policy with the front desk before arrival.",
    icon: "lucide:car",
    image: "/deluxeroomimage/DeluxeDoubleRoom1.png",
    features: ["On-site parking", "Guest parking"],
    category: "transport",
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
  {
    id: "fac-luggage",
    slug: "luggage-storage",
    name: "Luggage Storage",
    description:
      "Convenient luggage storage is available for guests arriving early or departing late.",
    icon: "lucide:archive",
    image: "/homehero2.png",
    features: ["Early arrival", "Late departure"],
    category: "service",
  },
  {
    id: "fac-laundry",
    slug: "laundry-service",
    name: "Laundry Service",
    description:
      "Laundry services are available to keep your clothes fresh during longer stays.",
    icon: "lucide:washing-machine",
    image: "/homehero1.png",
    features: ["Washing & ironing", "Convenient turnaround"],
    category: "services",
  },
];

export function getFacilityBySlug(slug: string): Facility | undefined {
  return FACILITIES.find((facility) => facility.slug === slug);
}

export function getFacilitiesByCategory(category: string): Facility[] {
  return FACILITIES.filter((facility) => facility.category === category);
}
