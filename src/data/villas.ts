import type { VillaType, VillaAmenity, SectionContent } from "@/types";

export const VILLAS_CONTENT: SectionContent = {
  eyebrow: "Our Rooms",
  heading: "Clean, Comfortable Rooms Steps from Jagannath Temple",
  description:
    "At Bishnu Bhaban, we keep things simple and dependable. Choose from standard, deluxe, and multi-bed rooms at the West Gate of the Shree Jagannath Temple in Puri. Every room is air-conditioned, has an attached western-style bathroom with hot water, and is serviced daily.",
};

export const VILLA_AMENITIES: VillaAmenity[] = [
  { id: "ac", icon: "lucide:wind", label: "Air Conditioning", category: "basic" },
  { id: "hot-water", icon: "lucide:droplets", label: "24/7 Hot Water", category: "bathroom" },
  { id: "attached-bathroom", icon: "lucide:shower-head", label: "Attached Western Bathroom", category: "bathroom" },
  { id: "toiletries", icon: "lucide:bottle", label: "Toiletries on Request", category: "bathroom" },
  { id: "wifi", icon: "lucide:wifi", label: "Free WiFi", category: "basic" },
  { id: "smart-tv", icon: "lucide:tv", label: "Television", category: "entertainment" },
  { id: "daily-housekeeping", icon: "lucide:sparkles", label: "Daily Housekeeping", category: "service" },
  { id: "room-service", icon: "lucide:concierge-bell", label: "Room Service", category: "service" },
  { id: "front-desk", icon: "lucide:headphones", label: "Front Desk 7 AM – 11 PM", category: "service" },
  { id: "cctv", icon: "lucide:shield-check", label: "CCTV Security", category: "service" },
  { id: "parking", icon: "lucide:car", label: "Parking Facility", category: "outdoor" },
  { id: "restaurant", icon: "lucide:utensils", label: "In-House Restaurant", category: "basic" },
  { id: "laundry", icon: "lucide:shirt", label: "Laundry Service", category: "service" },
  { id: "power-backup", icon: "lucide:battery-charging", label: "Power Backup", category: "basic" },
  { id: "bed-linen", icon: "lucide:bed", label: "Fresh Linen Daily", category: "comfort" },
  { id: "luggage-storage", icon: "lucide:luggage", label: "Luggage Storage", category: "service" },
];

const ROOM_NEARBY = [
  "Shree Jagannath Temple — 50 m walk",
  "Vimala Temple — 400 m",
  "Puri Beach — 1.5 km",
];

const ROOM_POLICIES = [
  {
    id: "checkin",
    title: "Check-in & Check-out",
    description:
      "Check-in time is 2:00 PM and check-out is 11:00 AM. Early check-in and late check-out are available on request, subject to availability.",
  },
  {
    id: "cancel",
    title: "Cancellation Policy",
    description:
      "Free cancellation up to 7 days before check-in. Cancellations within 2 days may incur a charge of one night's stay.",
  },
  {
    id: "guests",
    title: "Guest Policy",
    description:
      "Aadhaar, any government photo ID and passport are accepted as ID proof. Additional guests can be accommodated at an extra charge, subject to room capacity.",
  },
  {
    id: "groups",
    title: "Groups & Male Only Bookings",
    description:
      "Group bookings and bookings with only male guests are accepted. Please mention the requirement at the time of booking so we can allocate suitable rooms.",
  },
];

export const VILLAS: VillaType[] = [
  {
    id: "room-standard",
    slug: "standard-room",
    name: "Standard Room",
    tagline: "Clean air-conditioned room with attached bathroom and hot water",
    description:
      "Our Standard Room is the straightforward, well-maintained choice for couples, solo travellers, and friends travelling to Puri. It comes with air conditioning, an attached western-style bathroom with 24-hour hot water, and complimentary WiFi.",
    longDescription:
      "The Standard Room at Bishnu Bhaban is located at the West Gate of the Shree Jagannath Temple, roughly 50 metres from the main gate, which means you can walk to darshan in a few minutes rather than queueing for a taxi. The room is air-conditioned and cleaned daily, with fresh linen, hot water available around the clock, and free WiFi. It suits couples, solo travellers, and friends who want a straightforward, well-kept room close to the temple without paying for anything they will not use.",
    price: 1210,
    originalPrice: 1555,
    currency: "₹",
    priceUnit: "per night",
    bedrooms: 1,
    bathrooms: 1,
    maxOccupancy: 3,
    images: [
      {
        id: "standard-1",
        src: "https://bookonelocal.in/cdn/2026-07-24-115513437-e2.jpg",
        alt: "Standard Room at Bishnu Bhaban, Puri",
        caption: "Standard Room",
      },
      {
        id: "standard-2",
        src: "https://bookonelocal.in/cdn/2026-07-24-115527521-c2.jpg",
        alt: "Standard Room interior at Bishnu Bhaban",
        caption: "Attached bathroom",
      },
      {
        id: "standard-3",
        src: "https://bookonelocal.in/cdn/2026-07-24-115550734-g2.jpg",
        alt: "Standard Room bedroom at Bishnu Bhaban",
        caption: "Bedding and linen",
      },
    ],
    amenities: [
      "ac",
      "hot-water",
      "attached-bathroom",
      "wifi",
      "smart-tv",
      "daily-housekeeping",
      "front-desk",
      "cctv",
    ],
    highlights: [
      "50 m from the Jagannath Temple gate",
      "Air-conditioned with attached bathroom",
      "24-hour hot water and front desk",
    ],
    features: [
      "Air conditioning",
      "Attached western-style bathroom",
      "24-hour hot water supply",
      "Free WiFi access",
    ],
    policies: ROOM_POLICIES,
    faqs: [
      {
        id: "standard-faq-1",
        question: "How far is the Standard Room from Jagannath Temple?",
        answer:
          "Bishnu Bhaban sits at the West Gate of the temple complex, so the distance on foot is roughly 50 to 280 metres depending on the entry point you use.",
      },
      {
        id: "standard-faq-2",
        question: "Is hot water available at all hours?",
        answer:
          "Yes. Hot water is available 24 hours a day in all rooms, which matters in Puri where early morning temple visits start before sunrise.",
      },
    ],
    nearby: ROOM_NEARBY,
    popular: true,
    available: true,
    tag: "Best Value",
  },
  {
    id: "room-deluxe",
    slug: "deluxe-room",
    name: "Deluxe Room",
    tagline: "Spacious deluxe room with extra comfort for longer Puri stays",
    description:
      "The Deluxe Room gives you more floor space and a calmer sleeping arrangement than the Standard Room, along with the same air conditioning, hot water, and daily housekeeping. It is our most popular choice for guests staying three nights or more.",
    longDescription:
      "The Deluxe Room is a step up from the Standard Room in exactly the way that matters on a longer trip: more space, better ventilation, and a quieter corner of the property. It is fully air-conditioned, has an attached western-style bathroom with 24-hour hot water, and is cleaned every day with fresh linen. Guests who stay a week or more often work out that the extra space pays for itself, especially during the busy Rath Yatra season when rooms near the temple are in demand. The front desk operates 24 hours, so early morning departures and late night arrivals are both straightforward.",
    price: 1820,
    originalPrice: 2200,
    currency: "₹",
    priceUnit: "per night",
    bedrooms: 1,
    bathrooms: 1,
    maxOccupancy: 4,
    images: [
      {
        id: "deluxe-1",
        src: "https://bookonelocal.in/cdn/2026-07-24-114505800-b7.jpg",
        alt: "Deluxe Room at Bishnu Bhaban, Puri",
        caption: "Deluxe Room",
      },
      {
        id: "deluxe-2",
        src: "https://bookonelocal.in/cdn/2026-07-24-114518458-a7.jpg",
        alt: "Deluxe Room interior at Bishnu Bhaban",
        caption: "Room interior",
      },
      {
        id: "deluxe-3",
        src: "https://bookonelocal.in/cdn/2026-07-24-114527781-c7.jpg",
        alt: "Deluxe Room bedroom at Bishnu Bhaban",
        caption: "Bedroom",
      },
    ],
    amenities: [
      "ac",
      "hot-water",
      "attached-bathroom",
      "wifi",
      "smart-tv",
      "daily-housekeeping",
      "room-service",
      "front-desk",
      "cctv",
      "power-backup",
    ],
    highlights: [
      "More space than the Standard Room",
      "Best value for stays of 3 nights or more",
      "24-hour room service and front desk",
    ],
    features: [
      "Air conditioning",
      "Attached western-style bathroom",
      "24-hour hot water supply",
      "Free WiFi access",
    ],
    policies: ROOM_POLICIES,
    faqs: [
      {
        id: "deluxe-faq-1",
        question: "Is the Deluxe Room worth the extra cost?",
        answer:
          "If you are staying three nights or more, or travelling with a child, the extra space usually pays for itself. For a single night in a Standard Room is usually enough.",
      },
      {
        id: "deluxe-faq-2",
        question: "Is breakfast included?",
        answer:
          "Breakfast is available at our in-house restaurant. Meal plans can be added at the time of booking.",
      },
    ],
    nearby: ROOM_NEARBY,
    popular: true,
    available: true,
    tag: "Most Popular",
  },
  {
    id: "room-multi-bed",
    slug: "multi-bed-room",
    name: "Multi-Bed Room",
    tagline: "Multi-bed setup for families and groups travelling together",
    description:
      "The Multi-Bed Room is set up for families and groups who want to stay under one roof. Multiple beds share a single attached bathroom, which makes it the most economical option for four to six people travelling together for temple darshan.",
    longDescription:
      "The Multi-Bed Room is the practical choice for families and groups. Rather than booking and paying for two separate rooms, everyone shares one room with multiple beds and a single attached western-style bathroom with 24-hour hot water. It is the configuration most groups visiting Puri for darshan actually want: everyone is together, the location at the West Gate is the same, and the total cost per person is lower. The room is air-conditioned and serviced daily, and our front desk can arrange extra beds, luggage storage, and early breakfast for departure days.",
    price: 2400,
    currency: "₹",
    priceUnit: "per night",
    bedrooms: 3,
    bathrooms: 1,
    maxOccupancy: 6,
    images: [
      {
        id: "multibed-1",
        src: "https://bookonelocal.in/cdn/2026-07-24-115222181-a4.jpg",
        alt: "Multi-Bed Room at Bishnu Bhaban, Puri",
        caption: "Multi-Bed Room",
      },
      {
        id: "multibed-2",
        src: "https://bookonelocal.in/cdn/2026-07-24-115239530-b4.jpg",
        alt: "Multi-Bed Room interior at Bishnu Bhaban",
        caption: "Shared sleeping space",
      },
      {
        id: "multibed-3",
        src: "https://bookonelocal.in/cdn/2026-07-24-115310249-c4.jpg",
        alt: "Multi-Bed Room bathroom at Bishnu Bhaban",
        caption: "Attached bathroom",
      },
    ],
    amenities: [
      "ac",
      "hot-water",
      "attached-bathroom",
      "wifi",
      "daily-housekeeping",
      "room-service",
      "front-desk",
      "cctv",
      "luggage-storage",
    ],
    highlights: [
      "Sleeps up to 6 guests",
      "One room, one bathroom, one rate",
      "Groups and male-only bookings welcome",
    ],
    features: [
      "Multiple beds in a single room",
      "Attached western-style bathroom",
      "24-hour hot water supply",
      "Free WiFi access",
    ],
    policies: ROOM_POLICIES,
    faqs: [
      {
        id: "multibed-faq-1",
        question: "How many people can stay in the Multi-Bed Room?",
        answer:
          "The room is configured to sleep up to 6 guests. Additional guests can be accommodated at an extra charge, subject to capacity.",
      },
      {
        id: "multibed-faq-2",
        question: "Do you allow groups with only male guests?",
        answer:
          "Yes, group bookings and bookings with only male guests are accepted. Please mention this when making your reservation.",
      },
    ],
    nearby: ROOM_NEARBY,
    popular: true,
    available: true,
    tag: "Group Friendly",
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
