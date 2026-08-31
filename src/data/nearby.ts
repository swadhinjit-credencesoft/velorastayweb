import type { SectionContent, NearbyAttraction } from "@/types";

export const NEARBY_CONTENT: SectionContent = {
  eyebrow: "Explore Shirdi",
  heading: "Places to Visit Near Hotel Yogiraj",
  description:
    "Stay just minutes from the Sai Baba Temple at Hotel Yogiraj. Explore Shirdi's most important temples, sacred sites and attractions, most within easy walking distance.",
};

export const NEARBY_ATTRACTIONS: NearbyAttraction[] = [
  {
    id: "att-sai-baba-temple",
    slug: "sai-baba-temple",
    name: "Shri Sai Baba Temple",
    description:
      "The sacred main temple of Shirdi housing the Samadhi of Shri Sai Baba — the heart of Shirdi and the primary destination for pilgrims.",
    image: "/homehero1.png",
    distance: "Very close",
    travelTime: "Approx. 2 min walk",
    category: "Religious & Spiritual",
    highlights: ["Main Sai Baba Samadhi", "Darshan throughout the day"],
    tips: "Arrive early or use the free darshan passes for a smoother visit.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Shri+Sai+Baba+Temple+Shirdi",
  },
  {
    id: "att-dwarkamai",
    slug: "dwarkamai",
    name: "Dwarkamai",
    description:
      "A sacred mosque where Sai Baba lived and preached — a key pilgrimage site filled with spiritual significance.",
    image: "/homehero2.png",
    distance: "Nearby",
    travelTime: "Short walk",
    category: "Religious & Spiritual",
    highlights: ["Sai Baba's residence", "Sacred pilgrimage site"],
    tips: "Photography is usually permitted; dress modestly.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Dwarkamai+Shirdi",
  },
  {
    id: "att-chavadi",
    slug: "chavadi",
    name: "Baba's Chavadi",
    description:
      "Where Sai Baba used to spend alternate nights — now a well-preserved shrine visited by devotees.",
    image: "/homehero3.png",
    distance: "Nearby",
    travelTime: "Short walk",
    category: "Religious & Spiritual",
    highlights: ["Heritage shrine", "Sai Baba's night resting place"],
    tips: "View the preserved room and photographs of Baba.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Chavadi+Shirdi",
  },
  {
    id: "att-khandoba-mandir",
    slug: "khandoba-mandir",
    name: "Shri Khandoba Mandir",
    description:
      "A temple dedicated to Lord Khandoba, located close to the Samadhi Mandir and visited as part of the Shirdi pilgrimage circuit.",
    image: "/homehero1.png",
    distance: "Nearby",
    travelTime: "Walk / short auto ride",
    category: "Religious & Spiritual",
    highlights: ["Lord Khandoba shrine", "Pilgrimage site"],
    tips: "Best combined with the other Sai sites in the morning.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Khandoba+Temple+Shirdi",
  },
  {
    id: "att-sai-teerth",
    slug: "sai-teerth",
    name: "Sai Teerth Spiritual Theme Park",
    description:
      "A spiritual theme park showcasing the life and teachings of Sai Baba through light, sound and 3D shows.",
    image: "/homehero2.png",
    distance: "Nearby",
    travelTime: "Short auto / car ride",
    category: "Theme Parks & Attractions",
    highlights: ["Sai Baba theme park", "Light & sound show"],
    tips: "Ideal for an evening visit; check show timings in advance.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Sai+Teerth+Theme+Park+Shirdi",
  },
  {
    id: "att-prasadalaya",
    slug: "prasadalaya",
    name: "Prasadalaya",
    description:
      "The Shri Sai Baba Sansthan's dining hall where free prasadam meals are served to thousands of devotees daily.",
    image: "/homehero3.png",
    distance: "Approx. 2 km",
    travelTime: "Short walk / auto ride",
    category: "Religious & Spiritual",
    highlights: ["Free prasadam meals", "Sansthan facility"],
    tips: "Meals are served at scheduled times — check locally for timings.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Prasadalaya+Shirdi",
  },
  {
    id: "att-hanuman-temple",
    slug: "dakshinmukhi-hanuman-temple",
    name: "DakshinMukhi Hanuman Temple",
    description:
      "A dedicated temple of Lord Hanuman, popular among devotees visiting Shirdi.",
    image: "/homehero1.png",
    distance: "Nearby",
    travelTime: "Short walk",
    category: "Religious & Spiritual",
    highlights: ["Hanuman shrine", "Peaceful surroundings"],
    tips: "A short stop that can be combined with other temples.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=DakshinMukhi+Hanuman+Temple+Shirdi",
  },
  {
    id: "att-sai-baba-statue",
    slug: "sai-baba-statue",
    name: "Sai Baba Statue & Heritage Village",
    description:
      "Large Sai Baba statues and the recreated heritage village offer a glimpse into Baba's era and teachings.",
    image: "/homehero2.png",
    distance: "Nearby",
    travelTime: "Short auto / car ride",
    category: "Attractions",
    highlights: ["Sai Baba statue", "Heritage village"],
    tips: "Great photo opportunity for families and devotees.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Sai+Baba+Statue+Shirdi",
  },
  {
    id: "att-shirdi-airport",
    slug: "shirdi-airport",
    name: "Shirdi Airport (SAG)",
    description:
      "Shirdi Airport connects the pilgrim town with several Indian cities, including flights from major metros.",
    image: "/homehero3.png",
    distance: "Approx. 15 km",
    travelTime: "Approx. 30–40 min drive",
    category: "Transport Hubs",
    highlights: ["Regional airport", "Airport transfers available"],
    tips: "Pre-book a taxi or ask the front desk for transfer assistance.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Shirdi+Airport",
  },
  {
    id: "att-shirdi-bus-station",
    slug: "shirdi-bus-station",
    name: "Shirdi Bus Station",
    description:
      "The main bus stand of Shirdi, approximately 200 m from the hotel, connecting the town with surrounding cities.",
    image: "/homehero1.png",
    distance: "Approx. 200 m",
    travelTime: "Approx. 3 min walk",
    category: "Transport Hubs",
    highlights: ["Major bus hub", "Very close to hotel"],
    tips: "Convenient arrival point for pilgrims travelling by bus.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Shirdi+Bus+Stand",
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
