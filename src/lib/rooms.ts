import type { RoomType, RoomImage } from "@/types";
import type { ApiRoom } from "@/types/api";
import { SITE_INFO } from "@/data/site";

export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

function mapApiImages(images: ApiRoom["imageList"], roomName: string): RoomImage[] {
  const valid = (images || [])
    .filter((img) => img && img.url)
    .map((img, i) => {
      const desc = img.description ? stripHtml(img.description) : "";
      return {
        id: String(img.id ?? i),
        src: img.url,
        alt: desc || `${roomName} - ${SITE_INFO.name}, Shirdi`,
        caption: img.mainImage ? "Main view" : desc || undefined,
      };
    });

  if (valid.length > 0) return valid;

  return [
    {
      id: "default-room-img",
      src: "/yogirajimg/AKS08604.avif",
      alt: `${roomName} - ${SITE_INFO.name}, Shirdi`,
      caption: "Room Interior",
    },
  ];
}

export function apiRoomToRoomType(apiRoom: ApiRoom, index = 0): RoomType {
  const cleanName = apiRoom.name.trim();
  const slug = generateSlug(cleanName);
  const price = apiRoom.roomOnlyPrice || apiRoom.ratesAndAvailabilityDtos?.[0]?.price || 0;
  const isNonAc = cleanName.toLowerCase().includes("non-ac") || cleanName.toLowerCase().includes("non ac");
  const rawDesc = stripHtml(apiRoom.description || "");

  // Extract size from API description (e.g. "Room Size 11m²", "Room Size 20m²")
  const sizeMatch = apiRoom.description ? apiRoom.description.match(/Room Size\s*(\d+)\s*m²/i) : null;
  const sizeNum = sizeMatch ? parseInt(sizeMatch[1], 10) : (apiRoom.size || (apiRoom.maximumOccupancy * 40 + 40));
  const sizeUnit = sizeMatch ? `m² (approx. ${Math.round(sizeNum * 10.764)} sq. ft.)` : "sq. ft.";

  // Dynamic Bed Configuration based on name & occupancy
  let bedType = "Double Bed";
  let bedConfig = "1 Double Bed";
  if (cleanName.toLowerCase().includes("four bed") || (apiRoom.maximumOccupancy && apiRoom.maximumOccupancy >= 4)) {
    bedType = "Family Bedding";
    bedConfig = "4 Beds (Spacious Family Room)";
  } else if (cleanName.toLowerCase().includes("triple bed") || apiRoom.maximumOccupancy === 3) {
    bedType = "Triple Bedding";
    bedConfig = "3 Beds (Triple Room)";
  } else if (cleanName.toLowerCase().includes("double bed")) {
    bedType = "Double Bed";
    bedConfig = "1 Double Bed";
  } else {
    bedType = "Comfort Bedding";
    bedConfig = `${apiRoom.maximumOccupancy || 2} Person Bedding`;
  }

  // Dynamic tag
  let tag: string;
  if (cleanName.toLowerCase().includes("four bed")) {
    tag = "Family Choice";
  } else if (isNonAc) {
    tag = "Budget Friendly";
  } else if (cleanName.toLowerCase().includes("triple bed")) {
    tag = "Group Stay";
  } else if (index === 0 || price <= 1200) {
    tag = "Best Value";
  } else {
    tag = "Popular";
  }

  // Dynamic tagline from description
  const descWithoutSize = rawDesc.replace(/^Room Size\s*\d+m²\s*/i, "").trim();
  const firstSentence = descWithoutSize.split(/[.!?]\s+/)[0];
  const tagline = firstSentence ? `${firstSentence}.` : `${cleanName} for a comfortable stay in Shirdi.`;
  const longDescription = descWithoutSize || `${cleanName} at ${SITE_INFO.name}. A clean, comfortable room near the Sai Baba Temple with 24-hour room service, free Wi-Fi, and modern amenities.`;

  // Amenities from API roomFacilities
  const facilities = apiRoom.roomFacilities || [];
  const facilityNames = facilities.map((f) => f.name);
  const amenities = facilities.map((f) => f.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"));

  // Dynamic Highlights
  const highlights = [
    `${bedConfig} for up to ${apiRoom.maximumOccupancy || 2} guests`,
    isNonAc ? "Economical Non-AC room with fan cooling" : "Air-conditioned climate control",
    ...facilityNames.filter((name) => !name.toLowerCase().includes("room service")).map((name) => `${name} included`),
    "24-Hour room service and front-desk assistance",
    "Short walking distance to Shri Sai Baba Temple",
  ];

  // Dynamic Features
  const features = [
    `Room size: approx. ${sizeNum} ${sizeUnit}`,
    `Maximum occupancy: ${apiRoom.maximumOccupancy || 2} guests`,
    `Bedding: ${bedConfig}`,
    facilities.length > 0 ? `Amenities: ${facilityNames.join(", ")}` : "Complimentary high-speed Wi-Fi",
    "Free car parking for guests",
    "In-house vegetarian restaurant available",
  ];

  // Dynamic Policies
  const policies = [
    {
      id: `${slug}-checkin`,
      title: "Check-in / Check-out",
      description: `Check-in from ${SITE_INFO.checkIn}. Check-out by ${SITE_INFO.checkOut}. 24-hour front desk available for late arrivals.`,
    },
    {
      id: `${slug}-cancellation`,
      title: "Cancellation Policy",
      description: "Free cancellation if cancelled at least 24 hours prior to check-in date.",
    },
    {
      id: `${slug}-id`,
      title: "Guest ID Requirement",
      description: `Accommodates up to ${apiRoom.maximumOccupancy || 2} guests. Valid government-issued photo ID required for all adult guests at check-in.`,
    },
  ];

  // Dynamic FAQs
  const faqs = [
    {
      id: `${slug}-faq-1`,
      question: `How many guests can stay in the ${cleanName}?`,
      answer: `This room accommodates up to ${apiRoom.maximumOccupancy || 2} guests comfortably.`,
    },
    {
      id: `${slug}-faq-2`,
      question: "Is this room air-conditioned?",
      answer: isNonAc
        ? "No, this is a budget-friendly Non-AC room with good ventilation and fans."
        : "Yes, this room is equipped with full air conditioning.",
    },
    {
      id: `${slug}-faq-3`,
      question: "Does the room have a private bathroom with hot water?",
      answer: "Yes, all our rooms feature private attached bathrooms with geysers for hot water.",
    },
    {
      id: `${slug}-faq-4`,
      question: "Is Wi-Fi available in the room?",
      answer: "Yes, free high-speed Wi-Fi is provided throughout the hotel and in all guest rooms.",
    },
  ];

  return {
    id: `room-${apiRoom.id}`,
    slug,
    name: cleanName,
    tagline,
    description: descWithoutSize || longDescription,
    longDescription,
    price,
    currency: "₹",
    priceUnit: "night",
    size: sizeNum,
    sizeUnit,
    maxOccupancy: apiRoom.maximumOccupancy || 2,
    bedType,
    bedConfig,
    bathroomType: "Private Bathroom (Geyser Hot Water)",
    floor: "Multiple Floors (Elevator Access)",
    view: "City / Interior View",
    images: mapApiImages(apiRoom.imageList, cleanName),
    amenities: amenities.length > 0 ? amenities : ["wifi", "free-parking", "24-hours-room-service"],
    highlights,
    features,
    policies,
    faqs,
    nearby: [
      "Shri Sai Baba Temple — approx. 2 to 4 min walk",
      "Shirdi Bus Station — approx. 200 m",
      "Dwarkamai & Chavadi — short walk",
    ],
    popular: index < 3 || cleanName.toLowerCase().includes("double bed room"),
    available: (apiRoom.ratesAndAvailabilityDtos?.[0]?.noOfAvailable ?? 1) > 0,
    tag,
  };
}
