import type { NearbyAttraction, SectionContent } from "@/types";
import { STOCK_IMAGES } from "@/data/images";

export const NEARBY_CONTENT: SectionContent = {
  eyebrow: "Western Odisha",
  heading: "Places to explore from Jharsuguda",
  description: "A selection of regional nature, heritage and cultural destinations. These are not all within walking distance; check routes, access and travel time before setting out.",
};

const landscape = STOCK_IMAGES.landscape;
const place = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const NEARBY_ATTRACTIONS: NearbyAttraction[] = [
  { id: "hirakud-dam", slug: "hirakud-dam", name: "Hirakud Dam", description: "A major dam and reservoir on the Mahanadi, recognised as a regional landmark and visitor destination.", image: landscape, distance: "Route details to confirm", travelTime: "Check current route", category: "Nature and heritage", highlights: ["Dam and reservoir landscape", "Check access and visitor information before travel"], tips: "Follow current visitor guidance and check local conditions before your visit.", mapUrl: place("Hirakud Dam Odisha") },
  { id: "debrigarh", slug: "debrigarh-wildlife-sanctuary", name: "Debrigarh Wildlife Sanctuary", description: "A protected forest and wildlife area associated with the Hirakud reservoir region.", image: landscape, distance: "Route details to confirm", travelTime: "Check current route", category: "Nature and wildlife", highlights: ["Wildlife and birding area", "Safari or entry arrangements may apply"], tips: "Check current forest-department access, timings and booking requirements.", mapUrl: place("Debrigarh Wildlife Sanctuary Odisha") },
  { id: "huma-temple", slug: "leaning-temple-of-huma", name: "Leaning Temple of Huma", description: "A distinctive Shiva temple on the Mahanadi, known for its leaning structure and religious significance.", image: landscape, distance: "Route details to confirm", travelTime: "Check current route", category: "Heritage and culture", highlights: ["Historic riverside temple", "Observe local worship and visitor etiquette"], tips: "Confirm opening and festival arrangements locally.", mapUrl: place("Leaning Temple of Huma Odisha") },
  { id: "koilighughar", slug: "koilighughar-waterfall", name: "Koilighughar Waterfall", description: "A waterfall destination in Jharsuguda district highlighted by Odisha's official visitor information.", image: landscape, distance: "Route details to confirm", travelTime: "Check current route", category: "Nature", highlights: ["Waterfall and wooded surroundings", "Seasonal water and access conditions can vary"], tips: "Check local access and weather conditions before travel.", mapUrl: place("Koilighughar Waterfall Odisha") },
  { id: "bikramkhol", slug: "bikramkhol-caves", name: "Bikramkhol rock shelters", description: "A site known for rock paintings and lithographic inscriptions in Jharsuguda district.", image: landscape, distance: "Route details to confirm", travelTime: "Check current route", category: "Heritage", highlights: ["Rock art and inscriptions", "Plan transport in advance"], tips: "Confirm site access and local guidance before visiting.", mapUrl: place("Bikramkhol Caves Jharsuguda Odisha") },
  { id: "jhadeswar", slug: "jhadeswar-temple", name: "Jhadeswar Temple", description: "A Shiva temple and local religious destination listed in Jharsuguda district visitor information.", image: landscape, distance: "Route details to confirm", travelTime: "Check current route", category: "Culture and worship", highlights: ["Local temple visit", "Respect worship practices and visitor etiquette"], tips: "Ask locally about current access and festival timings.", mapUrl: place("Jhadeswar Temple Jharsuguda Odisha") },
];

export function getAttractionBySlug(slug: string): NearbyAttraction | undefined { return NEARBY_ATTRACTIONS.find((item) => item.slug === slug); }
export function getAttractionsByCategory(category: string): NearbyAttraction[] { return NEARBY_ATTRACTIONS.filter((item) => item.category === category); }
export function getAllCategories(): string[] { return [...new Set(NEARBY_ATTRACTIONS.map((item) => item.category))]; }
