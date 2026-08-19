import type {
  SectionContent,
  RoomAmenity,
} from "@/types";

export const ROOMS_CONTENT: SectionContent = {
  eyebrow: "Rooms & Suites",
  heading: "Rooms at The Queen's Head",
  description:
    "Relax in comfortable, air-conditioned accommodation in the heart of Paharganj. Each room is designed to provide the essential comforts travellers need during a Delhi stay.",
};

export const ROOM_AMENITIES: RoomAmenity[] = [
  { id: "wifi", icon: "lucide:wifi", label: "Free Wi-Fi", category: "basic" },
  { id: "ac", icon: "lucide:snowflake", label: "Air Conditioning", category: "comfort" },
  { id: "tv", icon: "lucide:tv", label: "Flat-Screen TV", category: "entertainment" },
  { id: "workdesk", icon: "lucide:desk", label: "Work Desk", category: "basic" },
  { id: "bathroom", icon: "lucide:shower-head", label: "Private Bathroom", category: "bathroom" },
  { id: "towels", icon: "lucide:droplets", label: "Towels", category: "bathroom" },
  { id: "toiletries", icon: "lucide:sparkles", label: "Toiletries", category: "bathroom" },
  { id: "wardrobe", icon: "lucide:archive", label: "Wardrobe / Storage", category: "basic" },
  { id: "seating", icon: "lucide:armchair", label: "Seating Area", category: "comfort" },
  { id: "jacuzzi", icon: "lucide:bath", label: "Jacuzzi", category: "bathroom" },
  { id: "cityview", icon: "lucide:building-2", label: "City View", category: "comfort" },
  { id: "roomservice", icon: "lucide:bell", label: "Room Service", category: "comfort" },
];
