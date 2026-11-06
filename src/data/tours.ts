import type { TourPackage, SectionContent } from "@/types";
import { NEARBY_ATTRACTIONS } from "@/data/nearby";

export const TOURS_CONTENT: SectionContent = {
  eyebrow: "Plan your own outing",
  heading: "Regional route ideas",
  description: "Use these destination groupings as a starting point. Y Hotels Signature has not confirmed guided tours, transport, package prices or itineraries.",
};

export const LOCAL_ITINERARY_IDEAS = [
  { id: "nature", title: "Nature and reservoir", places: ["Hirakud Dam", "Debrigarh Wildlife Sanctuary"], note: "Check access, transport, forest permissions and current visitor arrangements." },
  { id: "heritage", title: "Heritage and rock art", places: ["Bikramkhol rock shelters", "Jhadeswar Temple"], note: "Confirm site access and local guidance before travelling." },
  { id: "temples", title: "Temples and local culture", places: ["Leaning Temple of Huma", "Jhadeswar Temple"], note: "Check routes and worship or festival schedules locally." },
];

// No hotel-operated tour or priced package has been confirmed.
export const TOUR_PACKAGES: TourPackage[] = [];
export function getTourBySlug(slug: string): TourPackage | undefined { return TOUR_PACKAGES.find((item) => item.slug === slug); }
export function getAllTours(): TourPackage[] { return TOUR_PACKAGES; }
export const getExplorePlaces = () => NEARBY_ATTRACTIONS;
