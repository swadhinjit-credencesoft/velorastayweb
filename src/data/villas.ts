import type { VillaType, VillaAmenity, SectionContent } from "@/types";

export const VILLAS_CONTENT: SectionContent = {
  eyebrow: "Our Villas",
  heading: "Flexible Luxury Accommodations for Every Group Size",
  description:
    "At Velora Stays, we understand that no two getaways are the same. That is why our estate features highly flexible booking configurations. Depending on the specific subset of the estate you book, you can enjoy the property as an intimate 4 Villas, a spacious 5 Villas, or an expansive 7  grand villa. Our premium estate hosts 50 to 64+ guests comfortably, offering stunning master bedrooms and ensuite bathrooms.",
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
  { id: "kitchen", icon: "lucide:chef-hat", label: "Fully Equipped Kitchen", category: "kitchen" },
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
    id: "villa-4bhk",
    slug: "4-bhk-villa",
    name: "4 Villas",
    tagline: "Intimate luxury for smaller groups and families",
    description:
      "The 4  Villa at Velora Stays is the perfect choice for smaller families and groups looking for premium privacy and comfort. Featuring 4 beautifully appointed master bedrooms, each with attached ensuite bathrooms, the villa offers a cosy yet luxurious retreat nestled amidst the scenic hills near Pawna Lake. The open-plan living area flows seamlessly into the outdoor spaces, where you can enjoy panoramic views of the surrounding mountains and the tranquil lake below.",
    longDescription:
      "Designed for intimate gatherings of 10 to 12 guests, the 4  Villa combines modern luxury with the natural beauty of Lonavala's landscape. Each of the four bedrooms features a king-size bed with premium linens, individual air conditioning, and an ensuite bathroom equipped with hot water and complimentary toiletries. The spacious living room is furnished with comfortable seating and a large Smart TV, making it ideal for family movie nights or casual relaxation. The fully equipped kitchen includes a refrigerator, microwave, electric kettle, and all the utensils you need to prepare meals. Step outside onto the expansive lawn area, perfect for outdoor games and evening gatherings around the bonfire. The private swimming pool overlooks the sweeping hills, providing the perfect spot to unwind while taking in the breathtaking sunset views. Whether you are planning a quiet family weekend or a close-knit gathering with friends, the 4 BHK Villa offers an unmatched blend of privacy, comfort, and natural beauty.",
    price: 12000,
    originalPrice: 18000,
    currency: "₹",
    priceUnit: "per night",
    bedrooms: 4,
    bathrooms: 4,
    maxOccupancy: 12,
    bedConfig: "4 King Beds",
    view: "Mountain & Lake View",
    images: [
      {
        id: "villa4-1",
        src: "/4BHKVilla.jpeg",
        alt: "4 BHK Villa exterior at Velora Stays near Pawna Lake",
        caption: "Stunning 4  villa exterior",
      },
      {
        id: "villa4-2",
        src: "/4BHKVilla1.jpeg",
        alt: "4 BHK Villa interior at Velora Stays",
        caption: "Elegant 4 BHK villa interior",
      },
      {
        id: "villa4-3",
        src: "/4BHKVilla2.jpeg",
        alt: "4 BHK Villa living area at Velora Stays",
        caption: "Spacious 4 BHK living area",
      },
    ],
    amenities: [
      "pool", "lake-view", "lawn", "bonfire", "bbq", "parking",
      "wifi", "ac", "smart-tv", "kitchen", "refrigerator", "microwave",
      "electric-kettle", "tea-coffee", "power-backup", "housekeeping",
      "caretaker", "hot-water", "toiletries", "premium-bedding", "dining-area",
    ],
    highlights: [
      "4 master bedrooms with ensuite bathrooms",
      "Private swimming pool with hill views",
      "Expansive lawn for outdoor activities",
      "Fully equipped kitchen for self-catering",
    ],
    features: [
      "King-size beds with premium linens",
      "Individual AC in every bedroom",
      "Smart TV in living area",
      "Bonfire and BBQ setup included",
    ],
    policies: [
      {
        id: "villa4-checkin",
        title: "Check-in & Check-out",
        description:
          "Check-in time is 2:00 PM and check-out is 11:00 AM. Early check-in and late check-out are available upon request, subject to availability.",
      },
      {
        id: "villa4-cancel",
        title: "Cancellation Policy",
        description:
          "Free cancellation up to 15 days before check-in. Cancellations within 7 days will incur a charge of 50% of the booking amount.",
      },
      {
        id: "villa4-guests",
        title: "Guest Policy",
        description:
          "Maximum occupancy is 12 guests. Additional guests can be accommodated with prior arrangement at an extra charge.",
      },
    ],
    faqs: [
      {
        id: "villa4-faq-1",
        question: "Is the swimming pool private?",
        answer:
          "Yes, the swimming pool is exclusively for guests of the 4  Villa. You will have complete privacy during your stay.",
      },
      {
        id: "villa4-faq-2",
        question: "Can we bring our own food and cook?",
        answer:
          "Absolutely! The villa comes with a fully equipped kitchen. You can also opt for our in-house chef packages for a hassle-free dining experience.",
      },
    ],
    nearby: [
      "Pawna Lake — 5 min drive",
      "Tikona Fort — 15 min drive",
      "Lohagad Fort — 20 min drive",
      "Lonavala Market — 25 min drive",
    ],
    popular: true,
    available: true,
    tag: "Popular Choice",
  },
  {
    id: "villa-5bhk",
    slug: "5-bhk-villa",
    name: "5  Villas",
    tagline: "Perfect for families and groups of friends",
    description:
      "The 5  Villa is our most sought-after configuration, comfortably hosting 10 to 15 guests across five beautifully designed master bedrooms. Each room offers stunning views of the Pawna Lake landscape, with private balconies that invite you to soak in the serene surroundings. The villa features a grand living area, a fully equipped kitchen, and access to the expansive outdoor spaces including the private pool, lush lawn, and bonfire area.",
    longDescription:
      "The 5  Villa at Velora Stays represents the perfect balance of space, luxury, and value. Five fully furnished bedrooms, each with a king-size bed, premium linens, attached bathroom, and individual climate control, ensure every guest enjoys maximum comfort. The villa's open-plan design connects the indoor living spaces with the outdoors through large windows and sliding doors that frame the breathtaking Pawna Lake scenery. The living room features comfortable seating arrangements, a large Smart TV, and a Bluetooth speaker system for your entertainment. The kitchen is fully stocked with modern appliances including a refrigerator, microwave, gas stove, and all necessary cookware and utensils. Outside, the sprawling green lawn offers space for outdoor games, evening strolls, and gathering under the stars. The private swimming pool, perched on the hillside with panoramic views, is the crown jewel of the outdoor experience. As evening falls, gather around the bonfire pit for storytelling and BBQ under the open sky. The 5 BHK Villa is the ideal choice for family reunions, friend groups, and corporate team outings looking for a premium yet affordable retreat near Pawna Lake.",
    price: 15000,
    originalPrice: 25000,
    currency: "₹",
    priceUnit: "per night",
    bedrooms: 5,
    bathrooms: 6,
    maxOccupancy: 15,
    bedConfig: "5 King Beds",
    view: "Lake & Mountain View",
    images: [
      {
        id: "villa5-1",
        src: "/5BHKVilla.jpeg",
        alt: "5 Villa exterior at Velora Stays near Pawna Lake",
        caption: "Luxurious 5  villa exterior",
      },
      {
        id: "villa5-2",
        src: "/5BHKVilla1.jpeg",
        alt: "5  Villa interior at Velora Stays",
        caption: "Elegant 5 BHK villa interior",
      },
      {
        id: "villa5-3",
        src: "/5BHKGrandVilla4.jpeg",
        alt: "5  Villa living area at Velora Stays",
        caption: "Spacious 5  living area",
      },
    ],
    amenities: [
      "pool", "lake-view", "lawn", "bonfire", "bbq", "parking",
      "wifi", "ac", "smart-tv", "bluetooth-speaker", "board-games",
      "kitchen", "refrigerator", "microwave", "electric-kettle", "tea-coffee",
      "power-backup", "housekeeping", "caretaker", "hot-water", "toiletries",
      "premium-bedding", "dining-area", "balcony",
    ],
    highlights: [
      "5 master bedrooms with private balconies",
      "Private swimming pool overlooking the lake",
      "Grand living area with Smart TV",
      "Bonfire and BBQ area for evening gatherings",
    ],
    features: [
      "King-size beds with premium linens in all rooms",
      "Fully equipped modern kitchen",
      "Expansive green lawn for activities",
      "Dedicated caretaker for guest assistance",
    ],
    policies: [
      {
        id: "villa5-checkin",
        title: "Check-in & Check-out",
        description:
          "Check-in time is 2:00 PM and check-out is 11:00 AM. Early check-in and late check-out are available upon request.",
      },
      {
        id: "villa5-cancel",
        title: "Cancellation Policy",
        description:
          "Free cancellation up to 15 days before check-in. Cancellations within 7 days will incur a 50% charge.",
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
        question: "Is breakfast included?",
        answer:
          "Breakfast is not included in the standard rate but can be arranged through our in-house chef packages. Contact us for details.",
      },
      {
        id: "villa5-faq-2",
        question: "Can we host events at the villa?",
        answer:
          "Yes, the villa is perfect for birthday celebrations, anniversaries, and corporate offsites. Contact us for event packages.",
      },
    ],
    nearby: [
      "Pawna Lake — 5 min drive",
      "Tikona Fort — 15 min drive",
      "Lohagad Fort — 20 min drive",
      "Bhushi Dam — 30 min drive",
    ],
    popular: true,
    available: true,
    tag: "Most Popular",
  },
  {
    id: "villa-7bhk",
    slug: "7-bhk-villa",
    name: "7  Grand Villa",
    tagline: "The ultimate choice for large groups and celebrations",
    description:
      "The 7  Grand Villa is the crown jewel of Velora Stays — an expansive estate designed for large groups, corporate retreats, and grand celebrations. With seven luxurious bedrooms, multiple viewing decks, a massive living area, and complete privacy, this villa accommodates 14 to 20 guests in absolute comfort and style.",
    longDescription:
      "The 7  Grand Villa at Velora Stays redefines luxury group accommodation near Pawna Lake. Seven beautifully appointed bedrooms — each with king-size beds, premium linens, attached bathrooms, and individual climate control — ensure every guest enjoys a restful night's sleep. The grand living area features multiple seating zones, a large Smart TV, and floor-to-ceiling windows that offer panoramic views of the Pawna Lake landscape. The fully equipped kitchen is designed for large groups, with ample storage, multiple cooking stations, and all the appliances needed to prepare feasts for 20 guests. The outdoor spaces are equally impressive: a massive green lawn perfect for team-building activities, a private swimming pool with a dedicated deck area, multiple viewing points for sunrise and sunset, and a grand bonfire and BBQ area designed for large gatherings. The 7 BHK Grand Villa is the ultimate destination for milestone celebrations, corporate offsites, multi-family reunions, and anyone seeking the finest luxury villa experience near Pawna Lake. With complete estate buyout, maximum guest capacity, and unmatched privacy, this is where unforgettable memories are made.",
    price: 21000,
    originalPrice: 42000,
    currency: "₹",
    priceUnit: "per night",
    bedrooms: 7,
    bathrooms: 7,
    maxOccupancy: 20,
    bedConfig: "7 King Beds",
    view: "Panoramic Lake & Mountain View",
    images: [
      {
        id: "villa7-1",
        src: "/7BHKGrandVilla.jpeg",
        alt: "7  Grand Villa exterior at Velora Stays near Pawna Lake",
        caption: "Grand 7 BHK villa exterior",
      },
      {
        id: "villa7-2",
        src: "/7BHKGrandVilla1.jpeg",
        alt: "7  Grand Villa interior at Velora Stays",
        caption: "Luxurious 7 BHK villa interior",
      },
      {
        id: "villa7-3",
        src: "/7BHKGrandVilla3.jpeg",
        alt: "7  Grand Villa living area at Velora Stays",
        caption: "Expansive 7 BHK living area",
      },
    ],
    amenities: [
      "pool", "lake-view", "lawn", "bonfire", "bbq", "parking",
      "wifi", "ac", "smart-tv", "bluetooth-speaker", "board-games",
      "kitchen", "refrigerator", "microwave", "electric-kettle", "tea-coffee",
      "power-backup", "housekeeping", "caretaker", "hot-water", "toiletries",
      "premium-bedding", "dining-area", "balcony",
    ],
    highlights: [
      "7 luxurious bedrooms with ensuite bathrooms",
      "Multiple viewing decks for sunrise and sunset",
      "Grand living area with multiple seating zones",
      "Full estate buyout for complete privacy",
    ],
    features: [
      "King-size beds with premium linens in all rooms",
      "Massive kitchen for large group cooking",
      "Grand bonfire and BBQ area",
      "Multiple viewing points across the estate",
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
          "Free cancellation up to 15 days before check-in. Cancellations within 14 days may forfeit the deposit.",
      },
      {
        id: "villa7-guests",
        title: "Guest Policy",
        description:
          "Maximum occupancy is 20 guests. Full estate buyout ensures complete privacy for your group.",
      },
    ],
    faqs: [
      {
        id: "villa7-faq-1",
        question: "Can we host a corporate retreat at the 7 BHK villa?",
        answer:
          "Absolutely. The 7 Grand Villa is ideal for corporate team outings with high-speed WiFi, large meeting spaces, and outdoor areas for team-building activities.",
      },
      {
        id: "villa7-faq-2",
        question: "Is the full estate available for exclusive booking?",
        answer:
          "Yes, the 7 Grand Villa offers full estate buyout, giving your group complete privacy and exclusive access to all amenities.",
      },
    ],
    nearby: [
      "Pawna Lake — 5 min drive",
      "Tikona Fort — 15 min drive",
      "Lohagad Fort — 20 min drive",
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
