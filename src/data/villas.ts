/**
 * villas.ts — Static UI config only.
 *
 * ❌ NO hardcoded villa data (names, prices, images, min/max occupancy).
 * ✅ All villa data comes from the TheHotelMate API via getDynamicVillas().
 *
 * Only exports:
 *  - VILLAS_CONTENT  — static section heading/description text
 *  - VILLA_AMENITIES — icon + label config for amenity display
 *  - getDynamicVillas / getDynamicVillaBySlug — re-exported API functions
 */
import type { VillaAmenity, SectionContent } from "@/types";
export { getDynamicVillas, getDynamicVillaBySlug } from "@/lib/api/thehotelmate";

export const VILLAS_CONTENT: SectionContent = {
  eyebrow: "Our Luxury Villas",
  heading: "Flexible Luxury Accommodations for Every Group Size",
  description:
    "At Velora Stays, choose from our private villas near Pawna Lake — from a cozy 2 BHK villa for couples to an expansive 7 BHK grand villa for large celebrations and family reunions.",
};

export const VILLA_AMENITIES: VillaAmenity[] = [
  { id: "pool", icon: "lucide:waves", label: "Private Swimming Pool", category: "outdoor" },
  { id: "lake-view", icon: "lucide:mountain", label: "Lake & Mountain View", category: "outdoor" },
  { id: "lawn", icon: "lucide:trees", label: "Expansive Living Lawn", category: "outdoor" },
  { id: "bonfire", icon: "lucide:flame", label: "Bonfire Setup", category: "outdoor" },
  { id: "bbq", icon: "lucide:flame", label: "BBQ Equipment", category: "outdoor" },
  { id: "parking", icon: "lucide:car", label: "Free Secure Parking", category: "outdoor" },
  { id: "wifi", icon: "lucide:wifi", label: "High-Speed WiFi", category: "basic" },
  { id: "ac", icon: "lucide:wind", label: "Air Conditioning in all bedrooms", category: "basic" },
  { id: "smart-tv", icon: "lucide:tv", label: "Smart TV", category: "entertainment" },
  { id: "bluetooth-speaker", icon: "lucide:speaker", label: "Bluetooth Speaker", category: "entertainment" },
  { id: "board-games", icon: "lucide:gamepad-2", label: "Board Games", category: "entertainment" },
  { id: "kitchen", icon: "lucide:chef-hat", label: "Central Kitchen", category: "kitchen" },
  { id: "refrigerator", icon: "lucide:refrigerator", label: "Refrigerator", category: "kitchen" },
  { id: "microwave", icon: "lucide:microwave", label: "Microwave", category: "kitchen" },
  { id: "electric-kettle", icon: "lucide:flame", label: "Electric Kettle", category: "kitchen" },
  { id: "tea-coffee", icon: "lucide:coffee", label: "Tea/Coffee Setup", category: "kitchen" },
  { id: "power-backup", icon: "lucide:battery-charging", label: "Power Backup", category: "basic" },
  { id: "housekeeping", icon: "lucide:sparkles", label: "Daily Housekeeping", category: "service" },
  { id: "caretaker", icon: "lucide:user-check", label: "Dedicated Caretaker", category: "service" },
  { id: "hot-water", icon: "lucide:droplets", label: "Hot Water", category: "bathroom" },
  { id: "toiletries", icon: "lucide:bottle", label: "Premium Toiletries", category: "bathroom" },
  { id: "premium-bedding", icon: "lucide:bed", label: "King Size Beds", category: "comfort" },
  { id: "dining-area", icon: "lucide:utensils", label: "Dining Area", category: "basic" },
  { id: "balcony", icon: "lucide:landmark", label: "Private Balcony / Terrace", category: "outdoor" },
];
