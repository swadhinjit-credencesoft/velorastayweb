import type { RoomType, RoomImage } from "@/types";
import type { ApiRoom } from "@/types/api";

export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function stripHtml(html: string): string {
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
  const defaultSqft =
    occupancy >= 6 ? 320 : occupancy >= 4 ? 215 : occupancy === 3 ? 160 : 120;
  const defaultSqm = Math.round(defaultSqft / 10.764);
  return {
    size: defaultSqft,
    sizeUnit: `sq. ft. (${defaultSqm} m²)`,
  };
}

function mapApiImages(
  images: ApiRoom["imageList"],
  roomName: string,
  propertyId?: number
): RoomImage[] {
  const valid = (images || []).filter(
    (img) => img && typeof img.url === "string" && img.url.trim().length > 0
  );
  if (valid.length === 0) {
    const isNx = propertyId === 3653;
    const defaultHero = isNx ? "/yogirajimg/01.avif" : "/yogirajhero2.jpeg";
    const defaultSec = isNx ? "/yogirajimg/4.avif" : "/yogirajhero.jpeg";
    const brandName = isNx ? "Hotel Yogiraj NX" : "Hotel Yogiraj";
    return [
      {
        id: "hero-aerial",
        src: defaultHero,
        alt: `${roomName} at ${brandName}`,
        caption: brandName,
      },
      {
        id: "hero-driveway",
        src: defaultSec,
        alt: `${roomName} building and entrance`,
        caption: `${brandName} entrance`,
      },
    ];
  }
  return valid.map((img, i) => ({
    id: String(img.id ?? i),
    src: img.url.trim(),
    alt: stripHtml(img.description || "") || `${roomName} - View ${i + 1}`,
    caption: img.mainImage ? "Main view" : `View ${i + 1}`,
  }));
}

function getBedDetails(name: string, occupancy: number): { bedType: string; bedConfig: string } {
  const lower = name.toLowerCase();
  if (lower.includes("six") || occupancy >= 6) {
    return {
      bedType: "Six Bed / Family Suite",
      bedConfig: "Multiple Beds & 2 Washrooms (Up to 6 Guests)",
    };
  }
  if (lower.includes("suite") || lower.includes("bathtub")) {
    return {
      bedType: "Suite Room with Bathtub",
      bedConfig: "1 King Bed + Private Bathtub (Up to 3 Guests)",
    };
  }
  if (lower.includes("four") || occupancy >= 4) {
    return {
      bedType: "Four Bed / Family",
      bedConfig: "2 Large Double Beds (4 Guests)",
    };
  }
  if (lower.includes("triple") || occupancy === 3) {
    return {
      bedType: "Triple Bed",
      bedConfig: "1 Double Bed + 1 Single Bed (3 Guests)",
    };
  }
  return {
    bedType: "Double Bed",
    bedConfig: "1 Large Double Bed (2 Guests)",
  };
}

function getRoomTag(name: string, price: number, occupancy: number): string {
  const lower = name.toLowerCase();
  if (lower.includes("bathtub") || lower.includes("suite")) {
    return "Luxury Suite";
  }
  if (lower.includes("six") || occupancy >= 6) {
    return "Large Family Group";
  }
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
  const minOccupancy = apiRoom.minimumOccupancy || 1;
  const noOfRooms = apiRoom.noOfRooms || 1;
  const minStay = apiRoom.minimumLengthOfStay || 1;
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
  if (cleanName.toLowerCase().includes("bathtub") && !facilitySlugs.includes("jacuzzi")) {
    facilitySlugs.push("jacuzzi");
  }

  const cleanDesc = stripHtml(apiRoom.description || "");
  const hasBathtub = cleanName.toLowerCase().includes("bathtub");

  return {
    id: `room-${slug}`,
    slug,
    name: cleanName,
    tagline: `${bedConfig} • Up to ${occupancy} Guests • ₹${price.toLocaleString("en-IN")}/night`,
    description: cleanDesc,
    longDescription: cleanDesc,
    price,
    currency: "\u20B9",
    priceUnit: "night",
    size,
    sizeUnit,
    maxOccupancy: occupancy,
    minOccupancy,
    minimumOccupancy: minOccupancy,
    minimumLengthOfStay: minStay,
    noOfRooms,
    minStay,
    bedType,
    bedConfig,
    bathroomType: hasBathtub
      ? "Private Bathroom with Luxury Bathtub"
      : "Private Bathroom (Geyser Hot Water)",
    floor: "Multiple Floors",
    view: "Interior / City View",
    images: mapApiImages(apiRoom.imageList, cleanName, apiRoom.propertyId),
    amenities: facilitySlugs,
    facilitiesList: apiRoom.roomFacilities || [],
    rawRoom: apiRoom,
    highlights: [],
    features: [],
    policies: [],
    faqs: [],
    nearby: [],
    popular:
      Boolean(apiRoom.ranking && apiRoom.ranking <= 3) ||
      occupancy === 2 ||
      cleanName.toLowerCase().includes("suite"),
    available: noOfRooms > 0,
    tag,
  };
}
