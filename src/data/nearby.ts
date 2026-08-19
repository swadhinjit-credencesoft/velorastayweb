import type { SectionContent, NearbyAttraction } from "@/types";

export const NEARBY_CONTENT: SectionContent = {
  eyebrow: "Explore Delhi from Paharganj",
  heading: "Places to Visit Near The Queen's Head",
  description:
    "The Queen's Head – Paharganj places you in a convenient part of New Delhi, close to major transport links, shopping areas and some of the city's most popular landmarks.",
};

export const NEARBY_ATTRACTIONS: NearbyAttraction[] = [
  {
    id: "att-ramakrishna-mission",
    slug: "ramakrishna-mission",
    name: "Ramakrishna Mission",
    description:
      "Ramakrishna Mission is one of the nearby landmarks listed for the property.",
    image: "/nearby/ramakrishna-mission.jpg",
    distance: "0.9 km",
    travelTime: "Approx. 12 min walk",
    category: "Religious & Spiritual",
    highlights: ["Spiritual landmark", "Heritage building"],
    tips: "A quiet place to visit in the heart of the city.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ramakrishna+Mission+New+Delhi",
  },
  {
    id: "att-gurudwara-bangla-sahib",
    slug: "gurudwara-bangla-sahib",
    name: "Gurudwara Bangla Sahib",
    description:
      "Gurudwara Bangla Sahib is one of Delhi's prominent landmarks and a popular destination for visitors.",
    image: "/nearby/gurudwara-bangla-sahib.jpg",
    distance: "2.2 km",
    travelTime: "Approx. 10 min drive",
    category: "Religious & Spiritual",
    highlights: ["Prominent Sikh shrine", "Community kitchen"],
    tips: "The langar (community kitchen) is open to all visitors.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Gurudwara+Bangla+Sahib+New+Delhi",
  },
  {
    id: "att-jantar-mantar",
    slug: "jantar-mantar",
    name: "Jantar Mantar",
    description:
      "A major historical and astronomical landmark in Central Delhi built in the 18th century.",
    image: "/nearby/jantar-mantar.jpg",
    distance: "2.3 km",
    travelTime: "Approx. 12 min drive",
    category: "Monuments & Landmarks",
    highlights: ["Historic observatory", "Central Delhi landmark"],
    tips: "Best visited in the morning before it gets crowded.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Jantar+Mantar+New+Delhi",
  },
  {
    id: "att-connaught-place",
    slug: "connaught-place",
    name: "Connaught Place",
    description:
      "Central Delhi's iconic shopping and dining hub, known for its Georgian-style architecture and lively atmosphere.",
    image: "/nearby/connaught-place.jpg",
    distance: "2.5 km",
    travelTime: "Approx. 15 min drive",
    category: "Markets & Shopping",
    highlights: ["Shopping", "Restaurants", "Cafes"],
    tips: "Great for an evening stroll and dining out.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Connaught+Place+New+Delhi",
  },
  {
    id: "att-new-delhi-railway-station",
    slug: "new-delhi-railway-station",
    name: "New Delhi Railway Station",
    description:
      "One of India's busiest railway stations, conveniently close to the hotel for train travellers.",
    image: "/nearby/new-delhi-railway-station.jpg",
    distance: "Walking distance",
    travelTime: "Approx. 5–10 min walk",
    category: "Transport Hubs",
    highlights: ["Major railway hub", "Convenient access"],
    tips: "Allow extra time during peak hours and festivals.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=New+Delhi+Railway+Station",
  },
  {
    id: "att-delhi-airport",
    slug: "delhi-international-airport",
    name: "Delhi International Airport",
    description:
      "Indira Gandhi International Airport connects Delhi with destinations across India and the world.",
    image: "/nearby/delhi-airport.jpg",
    distance: "Approx. 15 km",
    travelTime: "Approx. 45–60 min drive (traffic dependent)",
    category: "Transport Hubs",
    highlights: ["International airport", "Airport transfers"],
    tips: "Delhi traffic can significantly change travel time — plan ahead.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Indira+Gandhi+International+Airport",
  },
  {
    id: "att-red-fort",
    slug: "red-fort",
    name: "Red Fort",
    description:
      "The iconic 17th-century Mughal fort and a UNESCO World Heritage Site in Old Delhi.",
    image: "/nearby/red-fort.jpg",
    distance: "Approx. 4.5 km",
    travelTime: "Approx. 25 min drive",
    category: "Monuments & Landmarks",
    highlights: ["UNESCO World Heritage Site", "Mughal architecture"],
    tips: "Closed on Mondays. Allow half a day to explore the complex.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Red+Fort+Delhi",
  },
  {
    id: "att-india-gate",
    slug: "india-gate",
    name: "India Gate",
    description:
      "A war memorial and one of Delhi's most recognisable landmarks, surrounded by manicured lawns.",
    image: "/nearby/india-gate.jpg",
    distance: "Approx. 6 km",
    travelTime: "Approx. 30 min drive",
    category: "Monuments & Landmarks",
    highlights: ["War memorial", "Evening lights"],
    tips: "Beautifully lit in the evening — a favourite spot for a night walk.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=India+Gate+New+Delhi",
  },
  {
    id: "att-chandni-chowk",
    slug: "chandni-chowk",
    name: "Chandni Chowk",
    description:
      "Old Delhi's famous bustling market street, known for street food, bazaars and historic havelis.",
    image: "/nearby/chandni-chowk.jpg",
    distance: "Approx. 5 km",
    travelTime: "Approx. 30 min drive",
    category: "Markets & Shopping",
    highlights: ["Street food", "Historic bazaars"],
    tips: "Best explored on foot or by cycle rickshaw.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Chandni+Chowk+Delhi",
  },
];

export function getAttractionBySlug(slug: string): NearbyAttraction | undefined {
  return NEARBY_ATTRACTIONS.find((attraction) => attraction.slug === slug);
}

export function getAttractionsByCategory(category: string): NearbyAttraction[] {
  return NEARBY_ATTRACTIONS.filter((attraction) => attraction.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(NEARBY_ATTRACTIONS.map((attraction) => attraction.category)));
}
