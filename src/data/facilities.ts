import type { Facility, SectionContent } from "@/types";

export const FACILITIES_CONTENT: SectionContent = {
  eyebrow: "Amenities",
  heading: "Curated Experiences, Unmatched Amenities",
  description:
    "At Vellora Stays, we pride ourselves on offering a premium lifestyle experience near Pawna Lake. From a private swimming pool and open lawns to a fully equipped kitchen and indoor entertainment, every amenity is designed for complete comfort and unforgettable memories.",
};

export const FACILITIES: Facility[] = [
  {
    id: "facility-pool",
    slug: "private-pool",
    name: "Private Swimming Pool",
    description:
      "Take a refreshing dip in your dedicated private swimming pool while soaking in panoramic views of the Lonavala hills and the surrounding lake area. The pool is exclusively for villa guests, ensuring complete privacy during your stay.",
    icon: "lucide:waves",
    image: "/outdoorpool.jpeg",
    features: ["Exclusive access", "Hill view", "Clean & maintained daily"],
    category: "outdoor",
  },
  {
    id: "facility-lawn",
    slug: "living-lawn",
    name: "Expansive Living Lawn",
    description:
      "A massive green living lawn ideal for outdoor games, evening strolls, and gathering under the stars. The sprawling lawn provides ample space for children to play, team-building activities, and simply enjoying the fresh mountain air.",
    icon: "lucide:trees",
    image: "/ExpansiveLivingLawn.jpeg",
    features: ["Outdoor games", "Evening gatherings", "Mountain air"],
    category: "outdoor",
  },
  {
    id: "facility-bonfire",
    slug: "bonfire-area",
    name: "Bonfire Setup",
    description:
      "As dusk falls, gather your loved ones on our sprawling green lawn for an evening outdoor bonfire setup, perfect for sharing stories and creating lasting memories under the open sky.",
    icon: "lucide:flame",
    image: "/bornfire.webp",
    features: ["Evening setup", "BBQ compatible", "Open sky"],
    category: "outdoor",
  },
  {
    id: "facility-bbq",
    slug: "bbq-equipment",
    name: "BBQ Equipment",
    description:
      "Make use of our live Barbecue (BBQ) equipment for a fun, interactive evening meal on the lawn. Grill your favourite meats and vegetables while enjoying the cool mountain breeze.",
    icon: "lucide:flame",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80",
    features: ["Live grill setup", "Equipment provided", "Outdoor cooking"],
    category: "outdoor",
  },
  {
    id: "facility-wifi",
    slug: "free-wifi",
    name: "High-Speed WiFi",
    description:
      "Stay connected throughout your stay with our high-speed WiFi network available in all rooms and common areas. Whether you are streaming, video-calling, or working remotely, our reliable internet ensures you never miss a beat.",
    icon: "lucide:wifi",
    image: "/WhatsApp Image 2026-07-19 at 8.44.17 AM (1).jpeg",
    features: ["High-speed internet", "All areas covered", "Streaming ready"],
    category: "basic",
  },
  {
    id: "facility-ac",
    slug: "air-conditioning",
    name: "Air Conditioning",
    description:
      "Escape the heat with individually controlled air conditioning in every bedroom. Our energy-efficient units keep your space cool and comfortable, allowing you to relax after a day of exploring.",
    icon: "lucide:wind",
    image: "/WhatsApp Image 2026-07-19 at 8.44.15 AM (1).jpeg",
    features: ["Individual controls", "24/7 cooling", "Energy efficient"],
    category: "basic",
  },
  {
    id: "facility-smart-tv",
    slug: "smart-tv",
    name: "Smart TV",
    description:
      "Wind down with a large LED Smart TV featuring Netflix, YouTube, and a range of cable channels. Enjoy your favourite shows or catch up on the news from the comfort of the villa.",
    icon: "lucide:tv",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
    features: ["Netflix & YouTube", "Cable channels", "Large screen"],
    category: "entertainment",
  },
  {
    id: "facility-kitchen",
    slug: "fully-equipped-kitchen",
    name: "Fully Equipped Kitchen",
    description:
      "A great vacation requires exceptional food. Our fully functional, premium kitchen setup allows you to prepare meals at your convenience. Includes refrigerator, microwave, gas stove, and all necessary cookware.",
    icon: "lucide:chef-hat",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    features: ["Gas stove", "Refrigerator", "Microwave", "Cookware"],
    category: "kitchen",
  },
  {
    id: "facility-parking",
    slug: "secure-parking",
    name: "Secure Parking",
    description:
      "Hassle-free, dedicated parking spaces right on the estate for your entire group. Your vehicles will be safe and easily accessible throughout your stay.",
    icon: "lucide:car",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&q=80",
    features: ["Dedicated spaces", "On-site parking", "Secure premises"],
    category: "outdoor",
  },
  {
    id: "facility-power-backup",
    slug: "power-backup",
    name: "Power Backup",
    description:
      "Rest easy knowing that our full-building power backup keeps the lights on and appliances running during any outage. A dedicated generator ensures your stay is never interrupted.",
    icon: "lucide:battery-charging",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    features: ["Full backup", "Zero downtime", "Generator on standby"],
    category: "basic",
  },
  {
    id: "facility-housekeeping",
    slug: "daily-housekeeping",
    name: "Daily Housekeeping",
    description:
      "Our dedicated housekeeping team ensures your villa stays fresh and tidy every day. From fresh towels to thorough cleaning, we take care of the details so you can focus on enjoying your stay.",
    icon: "lucide:sparkles",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80",
    features: ["Daily cleaning", "Fresh towels", "Tidy spaces"],
    category: "service",
  },
  {
    id: "facility-caretaker",
    slug: "dedicated-caretaker",
    name: "Dedicated Caretaker",
    description:
      "A dedicated caretaker is available on-site to assist with any needs during your stay. From arranging the bonfire to helping with local recommendations, our caretaker ensures a seamless experience.",
    icon: "lucide:user-check",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=800&q=80",
    features: ["On-site support", "Local knowledge", "Guest assistance"],
    category: "service",
  },
  {
    id: "facility-games",
    slug: "indoor-games",
    name: "Indoor Games",
    description:
      "Enjoy a wide selection of indoor board games and a classic Carrom board setup. Even on a rainy afternoon in Lonavala, the entertainment never stops.",
    icon: "lucide:gamepad-2",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    features: ["Board games", "Carrom", "Family entertainment"],
    category: "entertainment",
  },
  {
    id: "facility-music",
    slug: "music-system",
    name: "Bluetooth Music System",
    description:
      "Sync up your devices to our premium Bluetooth sound systems to set the mood for any occasion — from morning relaxation to evening pool parties.",
    icon: "lucide:speaker",
    image: "/WhatsApp Image 2026-07-19 at 8.44.16 AM.jpeg",
    features: ["Bluetooth enabled", "Premium sound", "Pool & living area"],
    category: "entertainment",
  },
  {
    id: "facility-hot-water",
    slug: "hot-water",
    name: "Hot Water",
    description:
      "Enjoy uninterrupted hot water supply with individual geysers installed in every bathroom. Our instant heating system ensures you never have to wait for a warm shower.",
    icon: "lucide:droplets",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    features: ["24/7 supply", "Instant heating", "Every bathroom"],
    category: "bathroom",
  },
  {
    id: "facility-dining",
    slug: "dining-area",
    name: "Dining Area",
    description:
      "A spacious indoor dining area perfect for group meals, whether you are enjoying a home-cooked feast or meals prepared by our in-house chef.",
    icon: "lucide:utensils",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    features: ["Spacious seating", "Indoor dining", "Group-friendly"],
    category: "basic",
  },
];

export function getFacilityBySlug(slug: string): Facility | undefined {
  return FACILITIES.find((facility) => facility.slug === slug);
}

export function getFacilitiesByCategory(category: string): Facility[] {
  return FACILITIES.filter((facility) => facility.category === category);
}
