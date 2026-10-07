import type { VillaAmenity, SectionContent } from "@/types";

/**
 * Section copy and the amenity lookup table (id -> icon/label) only.
 *
 * Room data itself — names, prices, descriptions, images, occupancy — is not
 * stored anywhere in this project. It is fetched from thehotelmate at build
 * time (see getApiRooms in src/lib/api/thehotelmate.ts), because the browser
 * fetch is blocked by CORS on the live domain.
 */
export const VILLAS_CONTENT: SectionContent = {
  eyebrow: "Our Rooms",
  heading: "Comfortable Rooms at the West Gate of the Shri Jagannath Temple",
  description:
    "At Bishnu Bhaban, we keep things simple and dependable. Choose from air-conditioned and non-AC rooms, four-bed family options, and suites at the West Gate of the Shri Jagannath Temple in Puri.",
};

export const VILLA_AMENITIES: VillaAmenity[] = [
  { id: "ac", icon: "lucide:wind", label: "Air Conditioning", category: "basic" },
  { id: "hot-water", icon: "lucide:droplets", label: "Hot Water", category: "bathroom" },
  { id: "attached-bathroom", icon: "lucide:shower-head", label: "Attached Western Bathroom", category: "bathroom" },
  { id: "toiletries", icon: "lucide:bottle", label: "Toiletries on Request", category: "bathroom" },
  { id: "wifi", icon: "lucide:wifi", label: "Free WiFi", category: "basic" },
  { id: "smart-tv", icon: "lucide:tv", label: "Television", category: "entertainment" },
  { id: "daily-housekeeping", icon: "lucide:sparkles", label: "Daily Housekeeping", category: "service" },
  { id: "front-desk", icon: "lucide:headphones", label: "Front Desk 24×7", category: "service" },
  { id: "cctv", icon: "lucide:shield-check", label: "CCTV Security", category: "service" },
  { id: "parking", icon: "lucide:car", label: "Parking Facility", category: "outdoor" },
  { id: "laundry", icon: "lucide:shirt", label: "Laundry Service", category: "service" },
  { id: "power-backup", icon: "lucide:battery-charging", label: "Power Backup", category: "basic" },
  { id: "bed-linen", icon: "lucide:bed", label: "Fresh Linen Daily", category: "comfort" },
  { id: "luggage-storage", icon: "lucide:luggage", label: "Luggage Storage", category: "service" },
];
