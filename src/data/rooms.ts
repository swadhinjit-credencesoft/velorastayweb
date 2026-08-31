import type {
  SectionContent,
  RoomAmenity,
} from "@/types";

export const ROOMS_CONTENT: SectionContent = {
  eyebrow: "Rooms & Suites",
  heading: "Rooms at Hotel Yogiraj",
  description:
    "Choose from comfortable AC and Non-AC rooms in Shirdi, from budget double rooms to spacious family-friendly four-bed rooms — all within easy reach of the Sai Baba Temple.",
};

export const ROOM_AMENITIES: RoomAmenity[] = [
  { id: "wifi", icon: "lucide:wifi", label: "Free Wi-Fi", category: "basic" },
  { id: "air-condition", icon: "lucide:snowflake", label: "Air Conditioning", category: "comfort" },
  { id: "free-parking", icon: "lucide:car", label: "Free Parking", category: "accessibility" },
  { id: "24-hours-room-service", icon: "lucide:bell", label: "24-Hour Room Service", category: "comfort" },
  { id: "non-smoking-room", icon: "lucide:ban", label: "Non-Smoking Room", category: "basic" },
  { id: "restaurant", icon: "lucide:utensils", label: "Restaurant", category: "food" },
  { id: "geyser", icon: "lucide:droplets", label: "Geyser (Hot Water)", category: "bathroom" },
  { id: "ac", icon: "lucide:snowflake", label: "Air Conditioning", category: "comfort" },
  { id: "tv", icon: "lucide:tv", label: "Satellite & Cable TV", category: "entertainment" },
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
