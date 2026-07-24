import type { NearbyAttraction, SectionContent } from "@/types";

export const NEARBY_CONTENT: SectionContent = {
  eyebrow: "Explore Pawna & Lonavala",
  heading: "Discover the Beauty of Lonavala & Pawna Lake",
  description:
    "People don't just book a villa stay; they book an unforgettable getaway experience. Tucked away near the majestic waters of Pawna Dam, Vellora Stays places you right in the heart of one of Maharashtra's most scenic landscapes. Enjoy refreshing lakeside breezes, striking mountain sunrises, and easy access to local adventure points.",
};

export const NEARBY_ATTRACTIONS: NearbyAttraction[] = [
  {
    id: "pawna-lake",
    slug: "pawna-lake",
    name: "Pawna Lake",
    description:
      "Located just minutes away from Vellora Stays, Pawna Lake offers peaceful daytime boating excursions and unparalleled sunset photography spots. The lake is surrounded by lush green hills and ancient forts, making it one of the most picturesque destinations near Mumbai and Pune.",
    image: "/Pawnalake.jpg",
    distance: "5 min drive",
    travelTime: "5 min drive",
    category: "Nature",
    highlights: ["Boating", "Sunset views", "Photography", "Peaceful retreat"],
    tips: "Visit during sunset for the most breathtaking views. Carry a camera for amazing photography opportunities.",
    mapUrl: "https://maps.google.com/?q=Pawna+Lake+Lonavala",
  },
  {
    id: "tikona-fort",
    slug: "tikona-fort",
    name: "Tikona Fort",
    description:
      "A popular destination for trekking enthusiasts looking for panoramic views of the entire valley from its historic peak. Tikona Fort, also known as Vitandgad, is a hill fort near Pawna Lake that offers a moderately challenging trek with stunning reward views.",
    image: "/trikonafort.jpg",
    distance: "15 min drive",
    travelTime: "15 min drive",
    category: "Trekking",
    highlights: ["Panoramic valley views", "Historic fort", "Moderate trek", "Scenic beauty"],
    tips: "Start the trek early morning to avoid the heat. Carry water and wear comfortable trekking shoes.",
    mapUrl: "https://maps.google.com/?q=Tikona+Fort+Lonavala",
  },
  {
    id: "lohagad-fort",
    slug: "lohagad-fort",
    name: "Lohagad Fort",
    description:
      "A magnificent historic fort ideal for family day trips, sightseeing, and exploring rich regional history. Lohagad Fort stands at an elevation of 1,033 metres and offers well-preserved fortifications, ancient gates, and breathtaking views of the Sahyadri mountains.",
    image: "/lohagarh.jpg",
    distance: "20 min drive",
    travelTime: "20 min drive",
    category: "Heritage",
    highlights: ["Historic architecture", "Mountain views", "Family friendly", "Rich history"],
    tips: "The fort is accessible by a short trek or vehicle. Visit during monsoon for lush green surroundings.",
    mapUrl: "https://maps.google.com/?q=Lohagad+Fort+Lonavala",
  },
  {
    id: "visapur-fort",
    slug: "visapur-fort",
    name: "Visapur Fort",
    description:
      "An impressive hill fort that stands adjacent to Lohagad Fort, offering a more challenging trek and spectacular views of the surrounding valley. The fort ruins include ancient water cisterns, a large stone arch, and remnants of fortification walls.",
    image: "/visapurfort.jpg",
    distance: "25 min drive",
    travelTime: "25 min drive",
    category: "Trekking",
    highlights: ["Challenging trek", "Fort ruins", "Spectacular views", "Adventure"],
    tips: "This trek is more difficult than Tikona. Best suited for experienced trekkers. Start early.",
    mapUrl: "https://maps.google.com/?q=Visapur+Fort+Lonavala",
  },
  {
    id: "lion-point",
    slug: "lion-point",
    name: "Lion's Point",
    description:
      "One of the most popular viewpoints near Lonavala, Lion's Point offers stunning panoramic views of the Sahyadri mountain range, the deep valley below, and the winding roads that lead to the hill station. A perfect stop for photography and enjoying the cool mountain breeze.",
    image: "/lionpoint.jpg",
    distance: "30 min drive",
    travelTime: "30 min drive",
    category: "Viewpoint",
    highlights: ["Panoramic views", "Photography spot", "Mountain breeze", "Scenic drive"],
    tips: "Visit during sunrise or sunset for the most dramatic views. Carry a light jacket as it can get windy.",
    mapUrl: "https://maps.google.com/?q=Lion's+Point+Lonavala",
  },
  {
    id: "bhushi-dam",
    slug: "bhushi-dam",
    name: "Bhushi Dam",
    description:
      "A popular monsoon destination near Lonavala, Bhushi Dam offers a refreshing experience with water flowing over the dam steps. The surrounding area features lush greenery, walking paths, and small eateries serving local snacks.",
    image: "/BhushiDam.webp",
    distance: "35 min drive",
    travelTime: "35 min drive",
    category: "Nature",
    highlights: ["Waterfall effect", "Walking paths", "Monsoon beauty", "Local snacks"],
    tips: "Best visited during monsoon when water flows over the steps. Carry waterproof footwear.",
    mapUrl: "https://maps.google.com/?q=Bhushi+Dam+Lonavala",
  },
  {
    id: "rajmachi-fort",
    slug: "rajmachi-fort",
    name: "Rajmachi Fort",
    description:
      "A historic fort accessible via a scenic trek through the Sahyadri mountains. Rajmachi Fort offers stunning views of the Konkan coast and is a favourite among trekkers and history enthusiasts. The fort has two fortified peaks — Shrivardhan and Manaranjan.",
    image: "/rajmachifort.jpg",
    distance: "45 min drive",
    travelTime: "45 min drive",
    category: "Trekking",
    highlights: ["Scenic trek", "Coastal views", "Historic significance", "Adventure"],
    tips: "The trek takes about 2-3 hours. Start early and carry sufficient water and snacks.",
    mapUrl: "https://maps.google.com/?q=Rajmachi+Fort+Lonavala",
  },
  {
    id: "lonavala-market",
    slug: "lonavala-market",
    name: "Lonavala Market",
    description:
      "Explore the bustling local market of Lonavala, famous for its chikki (local sweet), fudge, and locally grown produce. The market offers a vibrant shopping experience with a variety of local handicrafts, spices, and souvenirs.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    distance: "25 min drive",
    travelTime: "25 min drive",
    category: "Shopping",
    highlights: ["Local chikki", "Handicrafts", "Fresh produce", "Souvenirs"],
    tips: "Try the famous Lonavala chikki and fudge. Bargaining is expected at local shops.",
    mapUrl: "https://maps.google.com/?q=Lonavala+Market",
  },
  {
    id: "tiger-point",
    slug: "tiger-point",
    name: "Tiger Point",
    description:
      "A scenic viewpoint that offers breathtaking views of the Sahyadri mountains and the deep valley below. Named after the tiger-shaped rock formation nearby, this spot is perfect for photography and enjoying the cool mountain climate.",
    image: "/tigerpoint.jpg",
    distance: "30 min drive",
    travelTime: "30 min drive",
    category: "Viewpoint",
    highlights: ["Mountain views", "Tiger rock formation", "Cool climate", "Photography"],
    tips: "Visit during clear weather for the best views. Carry a light jacket.",
    mapUrl: "https://maps.google.com/?q=Tiger+Point+Lonavala",
  },
  {
    id: "karla-caves",
    slug: "karla-caves",
    name: "Karla Caves",
    description:
      "An ancient Buddhist rock-cut cave complex dating back to the 2nd century BC, Karla Caves feature stunning architecture, intricate carvings, and a magnificent prayer hall. One of the oldest and best-preserved cave temples in India.",
    image: "/Karlacaves.jpg",
    distance: "40 min drive",
    travelTime: "40 min drive",
    category: "Heritage",
    highlights: ["Ancient Buddhist caves", "Intricate carvings", "Historic architecture", "Cultural significance"],
    tips: "Wear comfortable shoes for climbing steps. Hire a local guide for a more informative visit.",
    mapUrl: "https://maps.google.com/?q=Karla+Caves+Lonavala",
  },
  {
    id: "bhaja-caves",
    slug: "bhaja-caves",
    name: "Bhaja Caves",
    description:
      "A group of 22 rock-cut caves dating back to the 2nd century BC, Bhaja Caves are known for their remarkable architecture, wooden beams, and ancient Buddhist inscriptions. The caves offer a fascinating glimpse into early Buddhist monastic life.",
    image: "/bhajacaves.jpg",
    distance: "35 min drive",
    travelTime: "35 min drive",
    category: "Heritage",
    highlights: ["22 rock-cut caves", "Ancient inscriptions", "Wooden architecture", "Buddhist heritage"],
    tips: "Visit early morning to avoid crowds. The caves are closed during monsoon season.",
    mapUrl: "https://maps.google.com/?q=Bhaja+Caves+Lonavala",
  },
  {
    id: "imagica",
    slug: "imagica",
    name: "Imagicaa World",
    description:
      "One of India's largest theme parks, Imagicaa offers thrilling rides, water park attractions, and a snow park for entertainment all year round. Perfect for families and adventure seekers looking for a fun day out.",
    image: "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?w=800&q=80",
    distance: "40 min drive",
    travelTime: "40 min drive",
    category: "Entertainment",
    highlights: ["Theme park", "Water park", "Snow park", "Family entertainment"],
    tips: "Book tickets online for discounts. Plan a full day to experience all attractions.",
    mapUrl: "https://maps.google.com/?q=Imagicaa+World+Lonavala",
  },
];

export function getAttractionBySlug(slug: string): NearbyAttraction | undefined {
  return NEARBY_ATTRACTIONS.find((attraction) => attraction.slug === slug);
}

export function getAttractionsByCategory(category: string): NearbyAttraction[] {
  return NEARBY_ATTRACTIONS.filter(
    (attraction) => attraction.category.toLowerCase() === category.toLowerCase(),
  );
}

export function getAllCategories(): string[] {
  const categories = new Set(NEARBY_ATTRACTIONS.map((attraction) => attraction.category));
  return Array.from(categories).sort();
}
