import type { TourPackage, SectionContent } from "@/types";
export const TOURS_CONTENT: SectionContent = { eyebrow: "Around Jharsuguda", heading: "Local information", description: "For recommendations and directions around Jharsuguda, ask the Y Hotels Signature team." };
export const TOUR_PACKAGES: TourPackage[] = [];
export function getTourBySlug(slug: string): TourPackage | undefined { return TOUR_PACKAGES.find((item) => item.slug === slug); }
export function getAllTours(): TourPackage[] { return TOUR_PACKAGES; }
