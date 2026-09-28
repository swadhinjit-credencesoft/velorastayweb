import type { VillaType, VillaAmenity, SectionContent } from "@/types";

export const VILLAS_CONTENT: SectionContent = {
  eyebrow: "Our Rooms",
  heading: "Clean, Comfortable Rooms Steps from Jagannath Temple",
  description:
    "At Bishnu Bhaban, we keep things simple and dependable. Choose from air-conditioned and non-AC rooms, four-bed family options, and suites at the West Gate of the Shree Jagannath Temple in Puri.",
};

export const VILLA_AMENITIES: VillaAmenity[] = [
  { id: "ac", icon: "lucide:wind", label: "Air Conditioning", category: "basic" },
  { id: "hot-water", icon: "lucide:droplets", label: "Hot Water", category: "bathroom" },
  { id: "attached-bathroom", icon: "lucide:shower-head", label: "Attached Western Bathroom", category: "bathroom" },
  { id: "toiletries", icon: "lucide:bottle", label: "Toiletries on Request", category: "bathroom" },
  { id: "wifi", icon: "lucide:wifi", label: "Free WiFi", category: "basic" },
  { id: "smart-tv", icon: "lucide:tv", label: "Television", category: "entertainment" },
  { id: "daily-housekeeping", icon: "lucide:sparkles", label: "Daily Housekeeping", category: "service" },
  { id: "front-desk", icon: "lucide:headphones", label: "Front Desk 7 AM – 11 PM", category: "service" },
  { id: "cctv", icon: "lucide:shield-check", label: "CCTV Security", category: "service" },
  { id: "parking", icon: "lucide:car", label: "Parking Facility", category: "outdoor" },
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

interface RoomSeed {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  beds: number;
  maxOccupancy: number;
  images: string[];
  tag?: string;
  amenities: string[];
  highlights: string[];
  features: string[];
  popular?: boolean;
  faqs?: { id: string; question: string; answer: string }[];
}

const PROPERTY_FALLBACK_IMAGE =
  "https://bookonelocal.in/cdn/2026-09-25-115951629-p4.jpg";

const ROOM_SEEDS: RoomSeed[] = [
  {
    id: "room-8886",
    slug: "double-bed-non-ac-room",
    name: "Double Bed Non AC Room",
    tagline: "A well-kept double-bed room at our lowest rate",
    description:
      "A simple and comfortable room with a double bed, ideal for guests looking for an affordable stay with essential facilities.",
    price: 1200,
    beds: 2,
    maxOccupancy: 3,
    tag: "Best Value",
    amenities: [
      "attached-bathroom",
      "wifi",
      "smart-tv",
      "daily-housekeeping",
      "front-desk",
      "cctv",
      "luggage-storage",
    ],
    highlights: [
      "Lowest rate at Bishnu Bhaban",
      "Double bed, sleeps up to 3 guests",
      "50 m from the Jagannath Temple gate",
    ],
    features: [
      "Non air-conditioned room",
      "Attached western-style bathroom",
      "Free WiFi access",
    ],
    popular: true,
    faqs: [
      {
        id: "dbnac-faq-1",
        question: "Is this room air-conditioned?",
        answer:
          "No, the Double Bed Non AC Room is our non air-conditioned option. It is the most affordable room we offer and works well in the Puri season.",
      },
    ],
    images: [
      "https://bookonelocal.in/cdn/2026-09-25-114201693-file_00000000b1908207a4f002d4e6f95d39.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-114207606-file_00000000d8dc81fa9bb800ab599f1f1a.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-114213372-file_00000000cf188207825380466e416db5.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-114218874-file_00000000f2248211a8b38cad40869d78.jpg",
    ],
  },
  {
    id: "room-8885",
    slug: "double-bed-ac-room",
    name: "Double Bed AC Room",
    tagline: "Air-conditioned double-bed room for couples or small families",
    description:
      "Enjoy a comfortable stay in this air-conditioned room with a double bed, suitable for couples or small families seeking a relaxing stay.",
    price: 1700,
    beds: 2,
    maxOccupancy: 3,
    tag: "Most Popular",
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
      "Double bed with air conditioning",
      "Sleeps up to 3 guests",
      "50 m from the Jagannath Temple gate",
    ],
    features: [
      "Air-conditioned room",
      "Attached western-style bathroom",
      "Free WiFi access",
    ],
    popular: true,
    faqs: [
      {
        id: "dbac-faq-1",
        question: "How many guests fit in this room?",
        answer:
          "The Double Bed AC Room is configured for up to 3 guests. Additional guests can be accommodated at an extra charge, subject to availability.",
      },
    ],
    images: [
      "https://bookonelocal.in/cdn/2026-09-25-112902598-file_0000000071dc820796c9ada71cb81a1b.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-112911393-file_00000000b4c4820d8468050020729829.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-112921508-file_0000000090ac821190d065e8afc4f107.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-114047881-file_00000000f2248211a8b38cad40869d78.jpg",
    ],
  },
  {
    id: "room-8888",
    slug: "four-bed-non-ac-room",
    name: "Four Bed Non AC Room",
    tagline: "Four beds in one room, a practical pick for families and groups",
    description:
      "Designed for families and groups, this room provides four beds, enough space, and basic comforts for a pleasant stay.",
    price: 1700,
    beds: 4,
    maxOccupancy: 5,
    tag: "Group Friendly",
    amenities: [
      "attached-bathroom",
      "wifi",
      "daily-housekeeping",
      "front-desk",
      "cctv",
      "luggage-storage",
    ],
    highlights: [
      "Four beds in a single room",
      "Sleeps up to 5 guests",
      "One rate for the whole group",
    ],
    features: [
      "Non air-conditioned room",
      "Four separate beds",
      "Attached western-style bathroom",
    ],
    popular: true,
    faqs: [
      {
        id: "fbnac-faq-1",
        question: "Can a group book this room?",
        answer:
          "Yes. Group bookings and bookings with only male guests are accepted. Mention it when reserving and we will allocate suitable rooms.",
      },
    ],
    images: [
      "https://bookonelocal.in/cdn/2026-09-25-112843429-file_000000000ccc8211809d3d5c2c63b42b.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-112849162-file_0000000038108211a5d3aaf1454a080f.jpg",
    ],
  },
  {
    id: "room-8887",
    slug: "four-bed-ac-room",
    name: "Four Bed AC Room",
    tagline: "Spacious air-conditioned room with four beds for families and groups",
    description:
      "Spacious air-conditioned room with four beds, offering a comfortable stay for families or groups travelling together.",
    price: 2500,
    beds: 4,
    maxOccupancy: 5,
    tag: "Group Friendly",
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
      "luggage-storage",
    ],
    highlights: [
      "Four beds with air conditioning",
      "Sleeps up to 5 guests",
      "Room for everyone to stay together",
    ],
    features: [
      "Air-conditioned room",
      "Four separate beds",
      "Attached western-style bathroom",
    ],
    popular: true,
    images: [
      "https://bookonelocal.in/cdn/2026-09-25-112707792-file_000000007cac8211a54a99fa23574d26.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-112713076-file_0000000051ac82119b2643c7d4c2e9e7.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-112719173-file_00000000f2248211a8b38cad40869d78.jpg",
    ],
  },
  {
    id: "room-8891",
    slug: "deluxe-double-bedded-temple-facing-room",
    name: "Deluxe Double Bedded Temple Facing Room",
    tagline: "Deluxe room with a double bed and a temple-facing view",
    description:
      "Wake up to a temple-facing view in this deluxe room, featuring a double bed and comfortable surroundings for a memorable stay.",
    price: 2500,
    beds: 2,
    maxOccupancy: 3,
    tag: "Temple View",
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
      "Temple-facing view",
      "Double bed with air conditioning",
      "Closest rooms to the West Gate",
    ],
    features: [
      "Air-conditioned deluxe room",
      "Temple-facing window",
      "Attached western-style bathroom",
    ],
    popular: true,
    faqs: [
      {
        id: "ddtf-faq-1",
        question: "What can we see from this room?",
        answer:
          "This is our temple-facing configuration. The property sits at the West Gate of the Shree Jagannath Temple complex, so the view faces the temple side of the building.",
      },
    ],
    images: [
      "https://bookonelocal.in/cdn/2026-09-25-101752981-file_00000000834482119bdf7987250ce7f6.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-101758805-file_00000000f30082119ee2f8183da63d18.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-103725842-file_0000000078a882098a21283c6ca2ece4.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-103735336-file_00000000ca908207941b56e729393436.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-103745199-file_00000000872481f88da6b59ad574965e.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-103754747-file_00000000e0e08211b9b789293c17bdc4.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-103801617-file_0000000055f882079ad27f84878e64f4.jpg",
    ],
  },
  {
    id: "room-8894",
    slug: "super-deluxe-ac-room",
    name: "Super Deluxe AC Room",
    tagline: "Well-appointed air-conditioned room for guests wanting extra comfort",
    description:
      "Relax in this well-appointed air-conditioned room with comfortable furnishings, suitable for guests looking for extra comfort during their stay.",
    price: 3000,
    beds: 2,
    maxOccupancy: 4,
    tag: "Most Popular",
    amenities: [
      "ac",
      "hot-water",
      "attached-bathroom",
      "toiletries",
      "wifi",
      "smart-tv",
      "daily-housekeeping",
      "room-service",
      "front-desk",
      "cctv",
      "power-backup",
    ],
    highlights: [
      "Super deluxe furnishing",
      "Sleeps up to 4 guests",
      "Best value in the deluxe range",
    ],
    features: [
      "Air-conditioned deluxe room",
      "Well-appointed furnishings",
      "Attached western-style bathroom",
    ],
    popular: true,
    images: [
      "https://bookonelocal.in/cdn/2026-09-25-114445396-file_000000004bac8211a7295c6bb82e622a.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-114453908-file_0000000009b0820794f14377f082e07c.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-114501241-Screenshot_20260923_171921_WhatsApp.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-114507750-Screenshot_20260923_171925_WhatsApp.jpg",
    ],
  },
  {
    id: "room-8889",
    slug: "standard-six-bedded-room",
    name: "Standard Six Bedded Room",
    tagline: "Six-bed room for larger families and groups staying together",
    description:
      "Perfect for larger families or groups, this spacious room has six beds and provides a convenient and comfortable stay.",
    price: 3500,
    beds: 6,
    maxOccupancy: 7,
    tag: "Group Friendly",
    amenities: [
      "attached-bathroom",
      "wifi",
      "smart-tv",
      "daily-housekeeping",
      "room-service",
      "front-desk",
      "cctv",
      "power-backup",
      "luggage-storage",
    ],
    highlights: [
      "Six beds in a single room",
      "Sleeps up to 7 guests",
      "One rate for the whole group",
    ],
    features: [
      "Six separate beds",
      "Spacious layout for groups",
      "Attached western-style bathroom",
    ],
    popular: true,
    faqs: [
      {
        id: "ssb-faq-1",
        question: "How many people can stay in this room?",
        answer:
          "The room is configured with six beds and takes up to 7 guests. Additional guests can be accommodated at an extra charge, subject to capacity.",
      },
    ],
    images: [
      "https://bookonelocal.in/cdn/2026-09-25-114936144-file_00000000d5ec8208a47f1ecb081dc4d8.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-114946286-file_000000009564821192610616c8ceb43c.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-114952425-file_000000001454820894d6e2155336d13e.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-114958886-file_00000000b43c821190f788a155db0ccd.jpg",
    ],
  },
  {
    id: "room-8890",
    slug: "family-suite-room",
    name: "Family Suite Room",
    tagline: "Spacious suite set up for families, with a calm and private atmosphere",
    description:
      "Ideal for families, this suite offers a spacious setting with comfortable sleeping arrangements and a peaceful atmosphere for a relaxing stay.",
    price: 3599,
    beds: 2,
    maxOccupancy: 7,
    tag: "Family Friendly",
    amenities: [
      "ac",
      "hot-water",
      "attached-bathroom",
      "toiletries",
      "wifi",
      "smart-tv",
      "daily-housekeeping",
      "room-service",
      "front-desk",
      "cctv",
      "power-backup",
    ],
    highlights: [
      "Suite layout for families",
      "Sleeps up to 7 guests",
      "Quieter than the standard rooms",
    ],
    features: [
      "Air-conditioned suite",
      "Separate sleeping space",
      "Attached western-style bathroom",
    ],
    popular: true,
    images: [
      "https://bookonelocal.in/cdn/2026-09-25-114732467-file_00000000d5ec8208a47f1ecb081dc4d8.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-114742915-file_000000009564821192610616c8ceb43c.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-114749151-file_000000001ba48208a1bf0323dfcdeeb3.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-114755167-file_000000008d2082118d8a61410b0502b2.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-114803258-file_00000000b43c821190f788a155db0ccd.jpg",
    ],
  },
  {
    id: "room-8893",
    slug: "standard-suite-room",
    name: "Standard Suite Room",
    tagline: "Spacious suite with separate sleeping space for families",
    description:
      "A spacious suite offering comfortable sleeping arrangements and essential amenities, making it suitable for families seeking a convenient stay.",
    price: 4000,
    beds: 2,
    maxOccupancy: 4,
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
      "Suite layout with extra space",
      "Sleeps up to 4 guests",
      "Steps from the temple gate",
    ],
    features: [
      "Air-conditioned suite",
      "Separate sleeping space",
      "Attached western-style bathroom",
    ],
    popular: true,
    images: [PROPERTY_FALLBACK_IMAGE],
  },
  {
    id: "room-8892",
    slug: "deluxe-four-bedded-room",
    name: "Deluxe Four Bedded Room",
    tagline: "Extra space and four beds, our largest deluxe configuration",
    description:
      "Offering extra space and four comfortable beds, this deluxe room is well suited for families and groups visiting Puri.",
    price: 4500,
    beds: 4,
    maxOccupancy: 5,
    tag: "Most Popular",
    amenities: [
      "ac",
      "hot-water",
      "attached-bathroom",
      "toiletries",
      "wifi",
      "smart-tv",
      "daily-housekeeping",
      "room-service",
      "front-desk",
      "cctv",
      "power-backup",
      "luggage-storage",
    ],
    highlights: [
      "Four beds in a deluxe room",
      "Sleeps up to 5 guests",
      "Largest deluxe configuration",
    ],
    features: [
      "Air-conditioned deluxe room",
      "Four separate beds",
      "Extra floor space",
    ],
    popular: true,
    images: [
      "https://bookonelocal.in/cdn/2026-09-25-114252722-file_00000000719481f7a6fad0d69d220925.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-114259698-file_00000000a51481f7943657d0869f2ca1.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-114307037-file_000000006ebc820d91f7b32ca6f3d296.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-114316229-file_000000000b88822f848218bd9b365afa.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-114322965-file_000000009b9881f78caf2b8a8304d6fd.jpg",
    ],
  },
  {
    id: "room-8895",
    slug: "maharaja-suite-room",
    name: "Maharaja Suite Room",
    tagline: "Our premium suite, the most spacious option at Bishnu Bhaban",
    description:
      "Experience a spacious and comfortable stay in this premium suite, offering a relaxing setting and suitable sleeping arrangements for families or groups.",
    price: 5000,
    beds: 2,
    maxOccupancy: 5,
    tag: "Premium",
    amenities: [
      "ac",
      "hot-water",
      "attached-bathroom",
      "toiletries",
      "wifi",
      "smart-tv",
      "daily-housekeeping",
      "room-service",
      "front-desk",
      "cctv",
      "power-backup",
      "laundry",
    ],
    highlights: [
      "Our largest and most premium suite",
      "Sleeps up to 5 guests",
      "Ideal for families and small groups",
    ],
    features: [
      "Air-conditioned premium suite",
      "Spacious separate sleeping space",
      "Laundry service available",
    ],
    popular: true,
    images: [
      "https://bookonelocal.in/cdn/2026-09-25-114524375-file_00000000cf1c820795cd278e19fee305.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-114531116-file_000000001d308211aec65be11ae6f120.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-114540394-file_0000000026588211b8141ea7e874f221.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-114548737-file_00000000b0808211982a427b7d966135.jpg",
      "https://bookonelocal.in/cdn/2026-09-25-114556608-file_000000001f148211b5cd0286268b3381.jpg",
    ],
  },
];

export const VILLAS: VillaType[] = ROOM_SEEDS.map((seed) => ({
  id: seed.id,
  slug: seed.slug,
  name: seed.name,
  tagline: seed.tagline,
  description: seed.description,
  longDescription: seed.description,
  price: seed.price,
  currency: "₹",
  priceUnit: "per night",
  bedrooms: 1,
  bathrooms: 1,
  beds: seed.beds,
  maxOccupancy: seed.maxOccupancy,
  images: seed.images.map((src, i) => ({
    id: `${seed.slug}-${i}`,
    src,
    alt: `${seed.name} at Bishnu Bhaban, Puri`,
    caption: seed.name,
  })),
  amenities: seed.amenities,
  highlights: seed.highlights,
  features: seed.features,
  policies: ROOM_POLICIES,
  faqs: seed.faqs ?? [],
  nearby: ROOM_NEARBY,
  popular: seed.popular ?? false,
  available: true,
  tag: seed.tag,
}));

export function getVillaBySlug(slug: string): VillaType | undefined {
  return VILLAS.find((villa) => villa.slug === slug);
}

export function getAllVillas(): VillaType[] {
  return VILLAS;
}

export function getPopularVillas(): VillaType[] {
  return VILLAS.filter((villa) => villa.popular);
}
