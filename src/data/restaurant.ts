import type { SectionContent } from "@/types";

export const RESTAURANT_CONTENT: SectionContent = {
  eyebrow: "On-Site Restaurant",
  heading: "Dining at The Queen's Head",
  description:
    "Enjoy a selection of Indian and Chinese dishes at our on-site restaurant, designed for hotel guests and visitors looking for a convenient dining option during their Delhi stay.",
};

export const RESTAURANT_HIGHLIGHTS: string[] = [
  "Indian cuisine",
  "Chinese cuisine",
  "Comfortable dining",
  "Convenient on-site location",
  "Guest-friendly service",
];

export const RESTAURANT_DETAILS: { label: string; value: string }[] = [
  { label: "Cuisine", value: "Indian & Chinese" },
  { label: "Breakfast", value: "Available on request (₹350 per person)" },
  { label: "Timings", value: "Please confirm current timings with the front desk" },
  { label: "Room Service", value: "Available — please ask at the front desk" },
];
