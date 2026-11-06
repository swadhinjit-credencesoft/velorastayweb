import type { NearbyAttraction, SectionContent } from "@/types";

export const NEARBY_CONTENT: SectionContent = {
  eyebrow: "Jharsuguda",
  heading: "Getting around the area",
  description: "Y Hotels Signature is located at Mangalam Tower on Sarbahal Road. Ask the hotel team for local directions and transport information.",
};
export const NEARBY_ATTRACTIONS: NearbyAttraction[] = [];
export function getAttractionBySlug(slug: string): NearbyAttraction | undefined { return NEARBY_ATTRACTIONS.find((item) => item.slug === slug); }
export function getAttractionsByCategory(category: string): NearbyAttraction[] { return NEARBY_ATTRACTIONS.filter((item) => item.category === category); }
export function getAllCategories(): string[] { return [...new Set(NEARBY_ATTRACTIONS.map((item) => item.category))]; }
