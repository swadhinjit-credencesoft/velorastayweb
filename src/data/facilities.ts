import type { Facility } from "@/types";
import type { SectionContent } from "@/types";

export const FACILITIES_CONTENT: SectionContent = {
  eyebrow: "At the Hotel",
  heading: "Facilities and services",
  description: "Contact Y Hotels Signature to confirm the facilities and services available for your dates and room category.",
};
export const FACILITIES: Facility[] = [];
export function getFacilityBySlug(slug: string): Facility | undefined { return FACILITIES.find((facility) => facility.slug === slug); }
export function getFacilitiesByCategory(category: string): Facility[] { return FACILITIES.filter((facility) => facility.category === category); }
