import type { VillaType, VillaAmenity, SectionContent } from "@/types";

export const VILLAS_CONTENT: SectionContent = {
  eyebrow: "Our Villas",
  heading: "Flexible Luxury Accommodations for Every Group Size",
  description:
    "At Velora Stays, we understand that no two getaways are the same. Choose from our range of private villas — from a cozy 2 BHK for couples to an expansive 7 BHK for large families and grand celebrations. Every villa features modern amenities, a  central kitchen, and easy access to Pawna Lake.",
};

export const VILLA_AMENITIES: VillaAmenity[] = [
  { id: "pool", icon: "lucide:waves", label: "Private Swimming Pool", category: "outdoor" },
  { id: "lake-view", icon: "lucide:mountain", label: "Lake & Mountain View", category: "outdoor" },
  { id: "lawn", icon: "lucide:trees", label: "Expansive Living Lawn", category: "outdoor" },
  { id: "bonfire", icon: "flame:flame", label: "Bonfire Setup", category: "outdoor" },
  { id: "bbq", icon: "lucide:flame", label: "BBQ Equipment", category: "outdoor" },
  { id: "parking", icon: "lucide:car", label: "Secure Parking", category: "outdoor" },
  { id: "wifi", icon: "lucide:wifi", label: "High-Speed WiFi", category: "basic" },
  { id: "ac", icon: "lucide:wind", label: "Air Conditioning", category: "basic" },
  { id: "smart-tv", icon: "lucide:tv", label: "Smart TV", category: "entertainment" },
  { id: "bluetooth-speaker", icon: "lucide:speaker", label: "Bluetooth Speaker", category: "entertainment" },
  { id: "board-games", icon: "lucide:gamepad-2", label: "Board Games", category: "entertainment" },
  { id: "kitchen", icon: "lucide:chef-hat", label: " central kitchen", category: "kitchen" },
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
  { id: "balcony", icon: "lucide:landmark", label: "Private Balcony", category: "outdoor" },
];

export const VILLAS: VillaType[] = [
  {
    id: "room-8802",
    slug: "2-bhk-villa",
    name: "2 BHK Villa",
    tagline: "Cozy 2-bedroom villa perfect for couples and small families",
    description:
      "Cozy 2 BHK villa featuring comfortable bedrooms, a bright living area, a  central kitchen, essential modern amenities, and a relaxing stay for couples or small families.",
    longDescription:
      "The 2 BHK Villa at Velora Stays is an intimate retreat designed for couples and small families. Enjoy comfortable bedrooms, a bright and airy living area, and a  central kitchen for self-catering. Just a short drive from Pawna Lake, it is the perfect base for a peaceful weekend getaway with modern comfort and privacy.",
    price: 6000,
    originalPrice: 8000,
    currency: "₹",
    priceUnit: "per night",
    bedrooms: 2,
    bathrooms: 2,
    maxOccupancy: 8,
    images: [
      {
        id: "villa2-1",
        src: "https://bookonelocal.in/cdn/2026-07-24-115513437-e2.jpg",
        alt: "2 BHK Villa at Velora Stays near Pawna Lake",
        caption: "Cozy 2 BHK villa",
      },
      {
        id: "villa2-2",
        src: "https://bookonelocal.in/cdn/2026-07-24-115527521-c2.jpg",
        alt: "2 BHK Villa interior at Velora Stays",
        caption: "Comfortable living area",
      },
      {
        id: "villa2-3",
        src: "https://bookonelocal.in/cdn/2026-07-24-115550734-g2.jpg",
        alt: "2 BHK Villa bedroom at Velora Stays",
        caption: "Well-appointed bedroom",
      },
    ],
    amenities: [
      "pool", "wifi", "ac", "smart-tv", "parking", "refrigerator", "hot-water", "premium-bedding", "dining-area",
    ],
    highlights: [
      "2 comfortable bedrooms",
      "High-speed WiFi",
      "Free on-site parking",
    ],
    features: [
      "King-size beds with premium linens",
      "Individual AC in every bedroom",
      "Smart TV in living area",
      "Housekeeping on request",
    ],
    policies: [
      {
        id: "villa2-checkin",
        title: "Check-in & Check-out",
        description:
          "Check-in time is 2:00 PM and check-out is 11:00 AM. Early check-in and late check-out are available on request, subject to availability.",
      },
      {
        id: "villa2-cancel",
        title: "Cancellation Policy",
        description:
          "Free cancellation up to 7 days before check-in. Cancellations within 7 days incur a charge of 50% of the booking amount.",
      },
      {
        id: "villa2-guests",
        title: "Guest Policy",
        description:
          "Maximum occupancy is 8 guests. Extra adults can be accommodated at an additional charge.",
      },
    ],
    faqs: [
      {
        id: "villa2-faq-1",
        question: "Is the 2 BHK Villa suitable for families with children?",
        answer:
          "Absolutely. The 2 BHK Villa is ideal for couples and small families, offering comfortable bedrooms and a  central kitchen.",
      },
    ],
    nearby: [
      "Pawna Lake — 5 min drive",
      "Lonavala  - Market",
    ],
    popular: true,
    available: true,
    tag: "Best Value",
  },
  {
    id: "room-8801",
    slug: "4-bhk-villa",
    name: "4 BHK Villa",
    tagline: "Comfortable 4-bedroom villa for families and small groups",
    description:
      "Comfortable 4 BHK villa offering well-appointed bedrooms, a cozy living space, a functional kitchen, modern amenities, and an ideal retreat for families or small groups.",
    longDescription:
      "The 4 BHK Villa at Velora Stays is the perfect choice for families and small groups looking for premium privacy and comfort. It features well-appointed bedrooms, a cozy living space, a functional kitchen, and modern amenities — all nestled near Pawna Lake with easy access to the surrounding hills and scenic viewpoints.",
    price: 12000,
    originalPrice: 16000,
    currency: "₹",
    priceUnit: "per night",
    bedrooms: 4,
    bathrooms: 4,
    maxOccupancy: 10,
    images: [
      {
        id: "villa4-1",
        src: "https://bookonelocal.in/cdn/2026-07-24-115222181-a4.jpg",
        alt: "4 BHK Villa at Velora Stays near Pawna Lake",
        caption: "Comfortable 4 BHK villa",
      },
      {
        id: "villa4-2",
        src: "https://bookonelocal.in/cdn/2026-07-24-115239530-b4.jpg",
        alt: "4 BHK Villa interior at Velora Stays",
        caption: "Elegant living space",
      },
      {
        id: "villa4-3",
        src: "https://bookonelocal.in/cdn/2026-07-24-115310249-c4.jpg",
        alt: "4 BHK Villa bedroom at Velora Stays",
        caption: "Well-appointed bedroom",
      },
    ],
    amenities: [
      "pool", "lake-view", "lawn", "bonfire", "bbq", "parking",
      "wifi", "ac", "smart-tv", "refrigerator", "microwave",
      "hot-water", "premium-bedding", "dining-area",
    ],
    highlights: [
      "4 well-appointed bedrooms",
      "Private pool and lawn",
      "High-speed WiFi",
    ],
    features: [
      "King-size beds with premium linens",
      "Individual AC in every bedroom",
      "Smart TV in living area",
      "Bonfire and BBQ setup",
    ],
    policies: [
      {
        id: "villa4-checkin",
        title: "Check-in & Check-out",
        description:
          "Check-in time is 2:00 PM and check-out is 11:00 AM. Early check-in and late check-out are available on request, subject to availability.",
      },
      {
        id: "villa4-cancel",
        title: "Cancellation Policy",
        description:
          "Free cancellation up to 7 days before check-in. Cancellations within 7 days incur a charge of 50% of the booking amount.",
      },
      {
        id: "villa4-guests",
        title: "Guest Policy",
        description:
          "Maximum occupancy is 10 guests. Extra adults can be accommodated at an additional charge.",
      },
    ],
    faqs: [
      {
        id: "villa4-faq-1",
        question: "Can we bring our own food and cook?",
        answer:
          "Absolutely! The villa comes with a  central kitchen. You can also opt for our in-house chef packages for a hassle-free dining experience.",
      },
    ],
    nearby: [
      "Pawna Lake — 5 min drive",
      "Lonavala  - Market — 25 min drive"
    ],
    popular: true,
    available: true,
    tag: "Popular Choice",
  },
  {
    id: "room-8800",
    slug: "5-bhk-villa",
    name: "5 BHK Villa",
    tagline: "Spacious 5-bedroom villa ideal for family getaways and friend groups",
    description:
      "Luxury 5 BHK villa with stylish bedrooms, spacious living and dining areas, a  central kitchen, modern comforts, and the perfect setting for family gatherings or group stays.",
    longDescription:
      "The 5 BHK Villa at Velora Stays is a luxurious retreat offering stylish bedrooms, spacious living and dining areas, and a  central kitchen. Perfect for family gatherings or group stays, it combines modern comforts with the natural beauty of Pawna Lake and the surrounding hills.",
    price: 15000,
    originalPrice: 20000,
    currency: "₹",
    priceUnit: "per night",
    bedrooms: 5,
    bathrooms: 5,
    maxOccupancy: 15,
    images: [
      {
        id: "villa5-1",
        src: "https://bookonelocal.in/cdn/2026-07-24-114924143-d5.jpg",
        alt: "5 BHK Villa at Velora Stays near Pawna Lake",
        caption: "Luxury 5 BHK villa",
      },
      {
        id: "villa5-2",
        src: "https://bookonelocal.in/cdn/2026-07-24-115014854-c5.jpg",
        alt: "5 BHK Villa interior at Velora Stays",
        caption: "Spacious living area",
      },
      {
        id: "villa5-3",
        src: "https://bookonelocal.in/cdn/2026-07-24-115045162-e5.jpg",
        alt: "5 BHK Villa bedroom at Velora Stays",
        caption: "Stylish bedroom",
      },
    ],
    amenities: [
      "pool", "lake-view", "lawn", "bonfire", "bbq", "parking",
      "wifi", "ac", "smart-tv", "bluetooth-speaker", "board-games",
       "refrigerator", "microwave", "hot-water", "premium-bedding", "dining-area",
    ],
    highlights: [
      "5 stylish bedrooms",
      "Spacious living and dining areas",
      " central kitchen",
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
        description:
          "Check-in time is 2:00 PM and check-out is 11:00 AM. Early check-in and late check-out are available on request.",
      },
      {
        id: "villa5-cancel",
        title: "Cancellation Policy",
        description:
          "Free cancellation up to 7 days before check-in. Cancellations within 7 days incur a charge of 50% of the booking amount.",
      },
      {
        id: "villa5-guests",
        title: "Guest Policy",
        description:
          "Maximum occupancy is 15 guests. Extra mattresses available on request.",
      },
    ],
    faqs: [
      {
        id: "villa5-faq-1",
        question: "Can we host events at the villa?",
        answer:
          "Yes, the villa is perfect for birthdays, anniversaries, and corporate offsites. Contact us for event packages.",
      },
    ],
    nearby: [
      "Pawna Lake — 5 min drive",
      "lonavala - market - 25 min drive"
    ],
    popular: true,
    available: true,
    tag: "Most Popular",
  },
  {
    id: "room-8799",
    slug: "7-bhk-villa",
    name: "7 BHK Villa",
    tagline: "The ultimate choice for large groups and grand celebrations",
    description:
      "Spacious 7 BHK villa featuring elegant bedrooms, a  central kitchen, comfortable living areas, modern amenities, and ample space for large families, reunions, or group vacations.",
    longDescription:
      "The 7 BHK Villa is the crown jewel of Velora Stays — an expansive villa designed for large families, reunions, and group vacations. With elegant bedrooms, comfortable living areas and ample outdoor space, it comfortably hosts up to 28 guests near Pawna Lake.",
    price: 21000,
    originalPrice: 28000,
    currency: "₹",
    priceUnit: "per night",
    bedrooms: 7,
    bathrooms: 7,
    maxOccupancy: 28,
    images: [
      {
        id: "villa7-1",
        src: "https://bookonelocal.in/cdn/2026-07-24-114505800-b7.jpg",
        alt: "7 BHK Villa at Velora Stays near Pawna Lake",
        caption: "Spacious 7 BHK villa",
      },
      {
        id: "villa7-2",
        src: "https://bookonelocal.in/cdn/2026-07-24-114518458-a7.jpg",
        alt: "7 BHK Villa interior at Velora Stays",
        caption: "Elegant living area",
      },
      {
        id: "villa7-3",
        src: "https://bookonelocal.in/cdn/2026-07-24-114527781-c7.jpg",
        alt: "7 BHK Villa bedroom at Velora Stays",
        caption: "Well-appointed bedroom",
      },
    ],
    amenities: [
      "pool", "lake-view", "lawn", "bonfire", "bbq", "parking",
      "wifi", "ac", "smart-tv", "bluetooth-speaker", "board-games",
     "refrigerator", "microwave", "hot-water", "premium-bedding", "dining-area",
    ],
    highlights: [
      "7 elegant bedrooms",
      "Ample space for large groups",
      "Private pool and lawn",
    ],
    features: [
      "King-size beds with premium linens",
      "Individual AC in every bedroom",
      "Multiple living areas",
      "Grand bonfire and BBQ area",
    ],
    policies: [
      {
        id: "villa7-checkin",
        title: "Check-in & Check-out",
        description:
          "Check-in time is 2:00 PM and check-out is 11:00 AM. Priority early check-in for large group bookings.",
      },
      {
        id: "villa7-cancel",
        title: "Cancellation Policy",
        description:
          "Free cancellation up to 7 days before check-in. Cancellations within 14 days may forfeit the deposit.",
      },
      {
        id: "villa7-guests",
        title: "Guest Policy",
        description:
          "Maximum occupancy is 28 guests. Contact us for full-property arrangements.",
      },
    ],
    faqs: [
      {
        id: "villa7-faq-1",
        question: "Can we host a large family reunion or group vacation?",
        answer:
          "Absolutely. The 7 BHK Villa is ideal for large families, reunions, and group vacations with ample space and modern amenities.",
      },
    ],
    nearby: [
      "Pawna Lake — 5 min drive",
      "lonavala - market - 25 min drive"
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
