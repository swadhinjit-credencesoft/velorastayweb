import type { VillaType, VillaAmenity, SectionContent } from "@/types";
export { getDynamicVillas, getDynamicVillaBySlug } from "@/lib/api/thehotelmate";

export const VILLAS_CONTENT: SectionContent = {
  eyebrow: "Our Luxury Villas",
  heading: "Flexible Luxury Accommodations for Every Group Size",
  description:
    "At Velora Stays, choose from our private villas near Pawna Lake — from a cozy 2 BHK villa for couples to an expansive 7 BHK grand villa for large celebrations and family reunions.",
};

export const VILLA_AMENITIES: VillaAmenity[] = [
  { id: "pool", icon: "lucide:waves", label: "Private Swimming Pool", category: "outdoor" },
  { id: "lake-view", icon: "lucide:mountain", label: "Lake & Mountain View", category: "outdoor" },
  { id: "lawn", icon: "lucide:trees", label: "Expansive Living Lawn", category: "outdoor" },
  { id: "bonfire", icon: "lucide:flame", label: "Bonfire Setup", category: "outdoor" },
  { id: "bbq", icon: "lucide:flame", label: "BBQ Equipment", category: "outdoor" },
  { id: "parking", icon: "lucide:car", label: "Free Secure Parking", category: "outdoor" },
  { id: "wifi", icon: "lucide:wifi", label: "High-Speed WiFi", category: "basic" },
  { id: "ac", icon: "lucide:wind", label: "Air Conditioning in all bedrooms", category: "basic" },
  { id: "smart-tv", icon: "lucide:tv", label: "Smart TV", category: "entertainment" },
  { id: "bluetooth-speaker", icon: "lucide:speaker", label: "Bluetooth Speaker", category: "entertainment" },
  { id: "board-games", icon: "lucide:gamepad-2", label: "Board Games", category: "entertainment" },
  { id: "kitchen", icon: "lucide:chef-hat", label: "Central Kitchen", category: "kitchen" },
  { id: "refrigerator", icon: "lucide:refrigerator", label: "Refrigerator", category: "kitchen" },
  { id: "microwave", icon: "lucide:microwave", label: "Microwave", category: "kitchen" },
  { id: "electric-kettle", icon: "lucide:flame", label: "Electric Kettle", category: "kitchen" },
  { id: "tea-coffee", icon: "lucide:coffee", label: "Tea/Coffee Setup", category: "kitchen" },
  { id: "power-backup", icon: "lucide:battery-charging", label: "Power Backup", category: "basic" },
  { id: "housekeeping", icon: "lucide:sparkles", label: "Daily Housekeeping", category: "service" },
  { id: "caretaker", icon: "lucide:user-check", label: "Dedicated Caretaker", category: "service" },
  { id: "hot-water", icon: "lucide:droplets", label: "Hot Water", category: "bathroom" },
  { id: "toiletries", icon: "lucide:bottle", label: "Premium Toiletries", category: "bathroom" },
  { id: "premium-bedding", icon: "lucide:bed", label: "King Size Beds", category: "comfort" },
  { id: "dining-area", icon: "lucide:utensils", label: "Dining Area", category: "basic" },
  { id: "balcony", icon: "lucide:landmark", label: "Private Balcony / Terrace", category: "outdoor" },
];

export const VILLAS: VillaType[] = [
  {
    id: "room-8846",
    slug: "2-bhk-villa",
    name: "Velora 2 (2 BHK)",
    tagline: "Cozy 2-bedroom villa perfect for couples and small families",
    description:
      "Spacious 2 BHK accommodation featuring comfortable bedrooms, modern amenities, a cozy living area, and a relaxing stay experience near Pawna Lake.",
    longDescription:
      "The Velora 2 (2 BHK) at Velora Stays is an intimate retreat designed for couples and small families. Enjoy comfortable bedrooms, a bright and airy living area, private swimming pool, and modern comfort near Pawna Lake.",
    price: 8000,
    originalPrice: undefined,
    currency: "₹",
    priceUnit: "per night",
    bedrooms: 2,
    bathrooms: 2,
    maxOccupancy: 8,
    images: [
      {
        id: "villa2-1",
        src: "https://bookonelocal.in/cdn/2026-07-24-115513437-e2.jpg",
        alt: "Velora 2 (2 BHK) at Velora Stays near Pawna Lake",
        caption: "Velora 2 (2 BHK) - Living & Pool",
      },
      {
        id: "villa2-2",
        src: "https://bookonelocal.in/cdn/2026-07-24-115527521-c2.jpg",
        alt: "Velora 2 (2 BHK) interior",
        caption: "Comfortable living area",
      },
      {
        id: "villa2-3",
        src: "https://bookonelocal.in/cdn/2026-07-24-115550734-g2.jpg",
        alt: "Velora 2 (2 BHK) bedroom",
        caption: "Well-appointed bedroom",
      },
    ],
    amenities: [
      "pool",
      "wifi",
      "ac",
      "smart-tv",
      "parking",
      "refrigerator",
      "hot-water",
      "premium-bedding",
      "dining-area",
      "lake-view",
      "lawn",
    ],
    highlights: [
      "2 BHK luxury private villa",
      "Accommodates up to 8 guests",
      "Private swimming pool & living lawn",
      "Scenic Lake & Mountain views",
    ],
    features: [
      "King-size beds with premium luxury linens",
      "Individual AC in all bedrooms",
      "Smart TV & high-speed WiFi",
      "Dedicated on-site caretaker & daily housekeeping",
    ],
    policies: [
      {
        id: "villa2-checkin",
        title: "Check-in & Check-out",
        description: "Check-in time is 2:00 PM and check-out is 11:00 AM.",
      },
      {
        id: "villa2-cancel",
        title: "Cancellation Policy",
        description: "Free cancellation up to 15 days before check-in.",
      },
      {
        id: "villa2-guests",
        title: "Guest Policy",
        description: "Accommodates up to 8 guests. Extra adults on request.",
      },
    ],
    faqs: [
      {
        id: "villa2-faq-1",
        question: "Is the 2 BHK Villa suitable for families with children?",
        answer: "Absolutely. The 2 BHK Villa is ideal for couples and small families.",
      },
    ],
    nearby: [
      "Pawna Lake — 5 min drive",
      "Lohagad Fort — 14.4 km",
      "Dinosaur's Park — 12.2 km",
      "Lonavala Market — 25 min drive",
    ],
    popular: true,
    available: true,
    tag: "Best Value",
  },
  {
    id: "room-8801",
    slug: "4-bhk-villa",
    name: "Velora 4 (4 BHK)",
    tagline: "Comfortable 4-bedroom villa for families and small groups",
    description:
      "Comfortable 4 BHK villa offering well-appointed bedrooms, a cozy living space, modern amenities, and an ideal retreat for families or small groups.",
    longDescription:
      "The Velora 4 (4 BHK) at Velora Stays is the perfect choice for families and groups looking for premium privacy and comfort. It features well-appointed bedrooms, a cozy living space, functional kitchen, and private swimming pool.",
    price: 12000,
    originalPrice: undefined,

    currency: "₹",
    priceUnit: "per night",
    bedrooms: 4,
    bathrooms: 4,
    maxOccupancy: 12,
    images: [
      {
        id: "villa4-1",
        src: "https://bookonelocal.in/cdn/2026-07-24-115222181-a4.jpg",
        alt: "Velora 4 (4 BHK) at Velora Stays",
        caption: "Velora 4 (4 BHK) Villa Exterior",
      },
      {
        id: "villa4-2",
        src: "https://bookonelocal.in/cdn/2026-07-24-115239530-b4.jpg",
        alt: "Velora 4 (4 BHK) interior",
        caption: "Elegant living area",
      },
      {
        id: "villa4-3",
        src: "https://bookonelocal.in/cdn/2026-07-24-115310249-c4.jpg",
        alt: "Velora 4 (4 BHK) bedroom",
        caption: "Master bedroom suite",
      },
    ],
    amenities: [
      "pool",
      "lake-view",
      "lawn",
      "bonfire",
      "bbq",
      "parking",
      "wifi",
      "ac",
      "smart-tv",
      "refrigerator",
      "microwave",
      "hot-water",
      "premium-bedding",
      "dining-area",
    ],
    highlights: [
      "4 BHK luxury private villa",
      "Accommodates up to 12 guests",
      "Private pool and spacious lawn",
      "High-speed WiFi & AC in all rooms",
    ],
    features: [
      "King-size beds with premium luxury linens",
      "Individual AC in every bedroom",
      "Smart TV in living area",
      "Bonfire and BBQ setup available",
    ],
    policies: [
      {
        id: "villa4-checkin",
        title: "Check-in & Check-out",
        description: "Check-in time is 2:00 PM and check-out is 11:00 AM.",
      },
      {
        id: "villa4-cancel",
        title: "Cancellation Policy",
        description: "Free cancellation up to 15 days before check-in.",
      },
    ],
    faqs: [
      {
        id: "villa4-faq-1",
        question: "Can we bring our own food and cook?",
        answer: "The villa comes with a Central Kitchen. In-house chef packages are also available.",
      },
    ],
    nearby: [
      "Pawna Lake — 5 min drive",
      "Lohagad Fort — 14.4 km",
      "Dinosaur's Park — 12.2 km",
      "Lonavala Market — 25 min drive",
    ],
    popular: true,
    available: true,
    tag: "Popular Choice",
  },
  {
    id: "room-8800",
    slug: "5-bhk-villa",
    name: "Velora 5 (5 BHK)",
    tagline: "Spacious 5-bedroom villa ideal for family getaways and friend groups",
    description:
      "Luxury 5 BHK villa with stylish bedrooms, spacious living and dining areas, modern comforts, and the perfect setting for family gatherings or group stays.",
    longDescription:
      "The Velora 5 (5 BHK) at Velora Stays is a luxurious retreat offering stylish bedrooms, spacious living and dining areas, and a private pool. Perfect for family gatherings or group stays near Pawna Lake.",
    price: 15000,
    originalPrice: undefined,

    currency: "₹",
    priceUnit: "per night",
    bedrooms: 5,
    bathrooms: 5,
    maxOccupancy: 15,
    images: [
      {
        id: "villa5-1",
        src: "https://bookonelocal.in/cdn/2026-07-24-114924143-d5.jpg",
        alt: "Velora 5 (5 BHK) at Velora Stays",
        caption: "Luxury 5 BHK Villa",
      },
      {
        id: "villa5-2",
        src: "https://bookonelocal.in/cdn/2026-07-24-115014854-c5.jpg",
        alt: "Velora 5 (5 BHK) living area",
        caption: "Spacious living area",
      },
      {
        id: "villa5-3",
        src: "https://bookonelocal.in/cdn/2026-07-24-115045162-e5.jpg",
        alt: "Velora 5 (5 BHK) bedroom",
        caption: "Stylish bedroom",
      },
    ],
    amenities: [
      "pool",
      "lake-view",
      "lawn",
      "bonfire",
      "bbq",
      "parking",
      "wifi",
      "ac",
      "smart-tv",
      "bluetooth-speaker",
      "board-games",
      "refrigerator",
      "microwave",
      "hot-water",
      "premium-bedding",
      "dining-area",
    ],
    highlights: [
      "5 BHK luxury private villa",
      "Accommodates up to 15 guests",
      "Spacious living and dining areas",
      "Private pool and lawn",
    ],
    features: [
      "King-size beds with premium linens",
      "Individual AC in every bedroom",
      "Smart TV in living area",
      "Dedicated caretaker on site",
    ],
    policies: [
      {
        id: "villa5-checkin",
        title: "Check-in & Check-out",
        description: "Check-in time is 2:00 PM and check-out is 11:00 AM.",
      },
      {
        id: "villa5-cancel",
        title: "Cancellation Policy",
        description: "Free cancellation up to 15 days before check-in.",
      },
    ],
    faqs: [
      {
        id: "villa5-faq-1",
        question: "Can we host events at the villa?",
        answer: "Yes, the villa is perfect for birthdays, anniversaries, and corporate offsites.",
      },
    ],
    nearby: [
      "Pawna Lake — 5 min drive",
      "Lohagad Fort — 14.4 km",
      "Dinosaur's Park — 12.2 km",
      "Lonavala Market — 25 min drive",
    ],
    popular: true,
    available: true,
    tag: "Most Popular",
  },
  {
    id: "room-8799",
    slug: "7-bhk-villa",
    name: "Velora 7 (7 BHK)",
    tagline: "The ultimate choice for large groups and grand celebrations",
    description:
      "Spacious 7 BHK villa featuring elegant bedrooms, comfortable living areas, modern amenities, and ample space for large families, reunions, or group vacations.",
    longDescription:
      "The Velora 7 (7 BHK) is the crown jewel of Velora Stays — an expansive villa designed for large families, reunions, and group vacations. With elegant bedrooms, comfortable living areas, and ample outdoor space near Pawna Lake.",
    price: 21000,
    originalPrice: 38500,
    currency: "₹",
    priceUnit: "per night",
    bedrooms: 7,
    bathrooms: 7,
    maxOccupancy: 28,
    images: [
      {
        id: "villa7-1",
        src: "https://bookonelocal.in/cdn/2026-07-24-114505800-b7.jpg",
        alt: "Velora 7 (7 BHK) at Velora Stays",
        caption: "Spacious 7 BHK Villa",
      },
      {
        id: "villa7-2",
        src: "https://bookonelocal.in/cdn/2026-07-24-114518458-a7.jpg",
        alt: "Velora 7 (7 BHK) living area",
        caption: "Grand living lounge",
      },
      {
        id: "villa7-3",
        src: "https://bookonelocal.in/cdn/2026-07-24-114527781-c7.jpg",
        alt: "Velora 7 (7 BHK) bedroom",
        caption: "King bedroom suite",
      },
    ],
    amenities: [
      "pool",
      "lake-view",
      "lawn",
      "bonfire",
      "bbq",
      "parking",
      "wifi",
      "ac",
      "smart-tv",
      "bluetooth-speaker",
      "board-games",
      "refrigerator",
      "microwave",
      "hot-water",
      "premium-bedding",
      "dining-area",
    ],
    highlights: [
      "7 BHK grand private villa",
      "Accommodates up to 28 guests",
      "Private swimming pool and grand lawn",
      "Panoramic Lake & Mountain view",
    ],
    features: [
      "King-size beds with premium luxury linens",
      "Individual AC in every bedroom",
      "Multiple living areas and large dining hall",
      "Grand bonfire and BBQ area",
    ],
    policies: [
      {
        id: "villa7-checkin",
        title: "Check-in & Check-out",
        description: "Check-in time is 2:00 PM and check-out is 11:00 AM.",
      },
      {
        id: "villa7-cancel",
        title: "Cancellation Policy",
        description: "Free cancellation up to 15 days before check-in.",
      },
    ],
    faqs: [
      {
        id: "villa7-faq-1",
        question: "Can we host a large family reunion or group vacation?",
        answer: "Absolutely. The 7 BHK Villa is ideal for large families and reunions.",
      },
    ],
    nearby: [
      "Pawna Lake — 5 min drive",
      "Lohagad Fort — 14.4 km",
      "Dinosaur's Park — 12.2 km",
      "Lonavala Market — 25 min drive",
    ],
    popular: true,
    available: true,
    tag: "Premium Choice",
  },
];

export function getVillaBySlug(slug: string): VillaType | undefined {
  return VILLAS.find((villa) => villa.slug === slug);
}

export function getAllVillas(): VillaType[] {
  return VILLAS;
}

export function getPopularVillas(): VillaType[] {
  return VILLAS.filter((villa) => villa.popular);
}
