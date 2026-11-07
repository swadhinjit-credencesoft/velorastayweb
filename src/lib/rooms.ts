import type { RoomType, RoomImage, RoomPolicy, FaqItem } from "@/types";
import type { ApiRoom } from "@/types/api";

export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function stripHtml(html: string): string {
  return (html || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractSize(description: string, occupancy: number): { size: number; sizeUnit: string } {
  const match = description.match(/Room Size\s*(\d+)\s*m[²2]/i);
  if (match) {
    const sqm = parseInt(match[1], 10);
    const sqft = Math.round(sqm * 10.764);
    return {
      size: sqft,
      sizeUnit: `sq. ft. (${sqm} m²)`,
    };
  }
  const defaultSqft = occupancy >= 4 ? 215 : occupancy === 3 ? 160 : 120;
  const defaultSqm = Math.round(defaultSqft / 10.764);
  return {
    size: defaultSqft,
    sizeUnit: `sq. ft. (${defaultSqm} m²)`,
  };
}

function mapApiImages(images: ApiRoom["imageList"], roomName: string): RoomImage[] {
  const valid = (images || []).filter(
    (img) => img && typeof img.url === "string" && img.url.trim().length > 0
  );
  if (valid.length === 0) {
    return [
      {
        id: "hero-aerial",
        src: "/yogirajhero2.jpeg",
        alt: `${roomName} at Hotel Yogiraj`,
        caption: "Hotel Yogiraj",
      },
      {
        id: "hero-driveway",
        src: "/yogirajhero.jpeg",
        alt: `${roomName} building and entrance`,
        caption: "Hotel entrance",
      },
    ];
  }
  return valid.map((img, i) => ({
    id: String(img.id ?? i),
    src: img.url.trim(),
    alt: stripHtml(img.description || "") || `${roomName} - View ${i + 1}`,
    caption: img.mainImage ? "Main view" : undefined,
  }));
}

function getBedDetails(name: string, occupancy: number): { bedType: string; bedConfig: string } {
  const lower = name.toLowerCase();
  if (lower.includes("four") || occupancy >= 4) {
    return {
      bedType: "Four Bed / Family",
      bedConfig: "2 Large Double Beds (4 Guests)",
    };
  }
  if (lower.includes("triple") || occupancy === 3) {
    return {
      bedType: "Triple Bed",
      bedConfig: "1 Double Bed + 1 Single Bed",
    };
  }
  return {
    bedType: "Double Bed",
    bedConfig: "1 Comfortable Double Bed",
  };
}

function getRoomTag(name: string, price: number, occupancy: number): string {
  const lower = name.toLowerCase();
  if (lower.includes("non-ac") || lower.includes("non ac")) {
    return price <= 1200 ? "Budget Choice" : "Value Stay";
  }
  if (occupancy >= 4) {
    return "Family Choice";
  }
  if (occupancy === 3) {
    return "Spacious AC";
  }
  return "Most Popular";
}

export function apiRoomToRoomType(apiRoom: ApiRoom): RoomType {
  const cleanName = apiRoom.name.trim();
  const slug = generateSlug(cleanName);
  const price =
    apiRoom.roomOnlyPrice ||
    apiRoom.pricePerNight ||
    apiRoom.ratesAndAvailabilityDtos?.[0]?.price ||
    0;
  const occupancy = apiRoom.maximumOccupancy || 2;
  const isAc =
    !cleanName.toLowerCase().includes("non ac") &&
    !cleanName.toLowerCase().includes("non-ac");

  const { size, sizeUnit } = extractSize(apiRoom.description || "", occupancy);
  const { bedType, bedConfig } = getBedDetails(cleanName, occupancy);
  const tag = getRoomTag(cleanName, price, occupancy);

  // Dynamic facilities list extracted from API
  const facilitySlugs = (apiRoom.roomFacilities || []).map((f) =>
    f.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")
  );
  if (isAc && !facilitySlugs.includes("air-condition")) {
    facilitySlugs.push("air-condition");
  }
  if (!facilitySlugs.includes("wifi")) {
    facilitySlugs.push("wifi");
  }
  if (!facilitySlugs.includes("free-parking")) {
    facilitySlugs.push("free-parking");
  }

  const cleanDesc = stripHtml(apiRoom.description || "");
  const facilityNames = (apiRoom.roomFacilities || []).map((f) => f.name).join(", ");

  const longDescription =
    cleanDesc.length > 50
      ? cleanDesc
      : `${cleanName} at Hotel Yogiraj offers a clean, peaceful, and comfortable stay in Shirdi, located just a 2-minute walk from the holy Shri Sai Baba Temple. Configured for up to ${occupancy} guests, this room includes ${facilityNames || "free Wi-Fi and 24-hour room service"} for a rejuvenating pilgrimage experience.`;

  const highlights = [
    `Spacious accommodation for up to ${occupancy} guests`,
    isAc ? "Split air conditioning for complete comfort" : "Well-ventilated room with ceiling fan",
    "Attached private bathroom with hot water (geyser)",
    "Free high-speed Wi-Fi throughout the stay",
    "24-hour room service & front-desk assistance",
    "Just a 2-minute walk to Shri Sai Baba Temple",
  ];

  const features = [
    `Room Size: approx. ${size} ${sizeUnit}`,
    `Bedding: ${bedConfig}`,
    `Occupancy: Up to ${occupancy} Guests`,
    "Check-in: 12:00 PM | Check-out: 11:00 AM",
    "Daily housekeeping & sanitization",
    "In-house pure vegetarian restaurant on premises",
  ];

  const policies: RoomPolicy[] = [
    {
      id: `${slug}-checkin`,
      title: "Check-in & Check-out",
      description:
        "Check-in from 12:00 PM. Check-out by 11:00 AM. 24-hour front desk available for early morning darshan or late arrivals.",
    },
    {
      id: `${slug}-cancellation`,
      title: "Cancellation Policy",
      description:
        "Free cancellation if cancelled up to 24 hours prior to check-in. Non-refundable within 24 hours.",
    },
    {
      id: `${slug}-children`,
      title: "Children & Extra Beds",
      description:
        "Children up to 5 years stay complimentary with existing bedding. Extra mattress available on request.",
    },
  ];

  const faqs: FaqItem[] = [
    {
      id: `${slug}-faq-ac`,
      question: "Is this room air-conditioned?",
      answer: isAc
        ? "Yes, this room features split air conditioning for cool and pleasant comfort."
        : "No, this is a budget-friendly Non-AC room with high-speed ceiling fans and good ventilation.",
    },
    {
      id: `${slug}-faq-guests`,
      question: "How many guests can stay in this room?",
      answer: `This room comfortably accommodates up to ${occupancy} guests.`,
    },
    {
      id: `${slug}-faq-temple`,
      question: "How close is Hotel Yogiraj to the Sai Baba Temple?",
      answer:
        "The hotel is located on Pimpalwadi Road, just a 2-minute walk from the Sai Baba Temple entrance.",
    },
    {
      id: `${slug}-faq-parking`,
      question: "Is car parking available?",
      answer: "Yes, free secure car parking is available on-site for all staying guests.",
    },
  ];

  const nearby = [
    "Shri Sai Baba Temple (2 min walk)",
    "Shirdi Bus Station (5 min drive)",
    "Dwarkamai & Chavadi (3 min walk)",
    "Shri Sai Baba Sansthan Prasadalaya (4 min walk)",
    "Shirdi International Airport (25 min drive)",
  ];

  return {
    id: `room-${slug}`,
    slug,
    name: cleanName,
    tagline: `Comfortable stay for ${occupancy} guests near Sai Baba Temple`,
    description: cleanDesc,
    longDescription,
    price,
    currency: "\u20B9",
    priceUnit: "night",
    size,
    sizeUnit,
    maxOccupancy: occupancy,
    bedType,
    bedConfig,
    bathroomType: "Private Bathroom (Geyser Hot Water)",
    floor: "Multiple Floors",
    view: "Interior / City View",
    images: mapApiImages(apiRoom.imageList, cleanName),
    amenities: facilitySlugs,
    highlights,
    features,
    policies,
    faqs,
    nearby,
    popular:
      Boolean(apiRoom.ranking && apiRoom.ranking <= 3) ||
      occupancy === 2 ||
      cleanName.toLowerCase().includes("four bed ac"),
    available: (apiRoom.noOfRooms ?? 1) > 0,
    tag,
  };
}
