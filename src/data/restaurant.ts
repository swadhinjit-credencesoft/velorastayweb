import type { SectionContent } from "@/types";

export const RESTAURANT_CONTENT: SectionContent = {
  eyebrow: "In-House Restaurant",
  heading: "Dining at Hotel Yogiraj",
  description:
    "Enjoy delicious vegetarian meals at our in-house restaurant in Shirdi, including a complimentary breakfast buffet — a convenient dining option for guests after temple darshan.",
};

export const RESTAURANT_HIGHLIGHTS: string[] = [
  "Pure vegetarian cuisine",
  "Complimentary breakfast buffet",
  "Comfortable dining hall",
  "Convenient in-house location",
  "24-hour room service",
  "Friendly service",
];

export const RESTAURANT_DETAILS: { label: string; value: string }[] = [
  { label: "Cuisine", value: "Vegetarian" },
  { label: "Breakfast", value: "Complimentary buffet included" },
  { label: "Lunch & Dinner", value: "Available on request" },
  { label: "Timings", value: "Please confirm current timings with the front desk" },
  { label: "Room Service", value: "Available 24 hours" },
];
