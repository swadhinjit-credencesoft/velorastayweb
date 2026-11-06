import type { Facility, SectionContent } from "@/types";
import { SITE_INFO } from "@/data/site";

export const FACILITIES_CONTENT: SectionContent = {
  eyebrow: "Verified hotel information",
  heading: "Facilities and amenities",
  description: "A clear summary of the room, meal-plan and arrival details supplied for Y Hotels Signature. Contact the hotel to confirm any other service before booking.",
};

export const FACILITIES: Facility[] = [
  {
    id: "room-categories", slug: "room-categories", name: "34 guest rooms",
    description: "The published inventory is 12 Deluxe, 10 Super Deluxe and 12 Executive rooms.",
    icon: "lucide:bed-double", category: "basic",
    features: ["Deluxe: 12 rooms", "Super Deluxe: 10 rooms", "Executive: 12 rooms"],
  },
  {
    id: "guest-occupancy", slug: "guest-occupancy", name: "Occupancy by category",
    description: "Listed capacity is adults plus one child in each room category.",
    icon: "lucide:users", category: "family",
    features: ["Deluxe: 2 adults + 1 child", "Super Deluxe: 3 adults + 1 child", "Executive: 4 adults + 1 child"],
  },
  {
    id: "meal-plans", slug: "meal-plans", name: "Meal-plan options",
    description: "EP, CP, MAP and AP options are listed. Confirm exactly what each plan includes and its price for your dates.",
    icon: "lucide:utensils", category: "services",
    features: ["EP", "CP", "MAP", "AP", "Confirm plan inclusions and rates directly with the hotel"],
  },
  {
    id: "arrival-times", slug: "arrival-times", name: "Check-in and check-out",
    description: "Use the published arrival and departure times when planning your stay.",
    icon: "lucide:clock", category: "services",
    features: [`Check-in: ${SITE_INFO.checkIn}`, `Check-out: ${SITE_INFO.checkOut}`],
  },
  {
    id: "hotel-location", slug: "hotel-location", name: "Jharsuguda location",
    description: SITE_INFO.address.full,
    icon: "lucide:map-pin", category: "location",
    features: ["Mangalam Tower", "Sarbahal Road, Marwari Para", "Jharsuguda, Odisha 768201"],
  },
];

export function getFacilityBySlug(slug: string): Facility | undefined { return FACILITIES.find((facility) => facility.slug === slug); }
export function getFacilitiesByCategory(category: string): Facility[] { return FACILITIES.filter((facility) => facility.category === category); }
