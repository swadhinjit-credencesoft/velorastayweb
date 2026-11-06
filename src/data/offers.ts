import type { Offer, SectionContent } from "@/types";
export const OFFERS_CONTENT: SectionContent = { eyebrow: "Rates", heading: "Room rates", description: "Published base rates are for single occupancy. Double occupancy adds ₹500, and each higher room category adds ₹500. Meal plan rates should be confirmed with the hotel." };
export const OFFERS: Offer[] = [];
export function getOfferBySlug(slug: string): Offer | undefined { return OFFERS.find((offer) => offer.slug === slug); }
