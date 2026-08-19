import type { RoomType, RoomImage } from "@/types";
import type { ApiRoom } from "@/types/api";
import { ROOM_SLUG_MAP } from "@/data/roomMetadata";

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function mapApiImages(images: ApiRoom["imageList"]): RoomImage[] {
  return images
    .filter((img) => img.url)
    .map((img, i) => ({
      id: String(img.id ?? i),
      src: img.url,
      alt: img.description?.replace(/<[^>]*>/g, "").substring(0, 120) || "Hotel room image",
      caption: img.mainImage ? "Main view" : undefined,
    }));
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

export function apiRoomToRoomType(apiRoom: ApiRoom): RoomType {
  const meta = ROOM_SLUG_MAP[apiRoom.id];
  const slug = meta?.slug ?? generateSlug(apiRoom.name);
  const price = apiRoom.roomOnlyPrice || apiRoom.ratesAndAvailabilityDtos?.[0]?.price || 0;

  return {
    id: `room-${slug}`,
    slug,
    name: apiRoom.name,
    tagline: meta?.tagline ?? stripHtml(apiRoom.description).substring(0, 80),
    description: stripHtml(apiRoom.description),
    longDescription: meta?.longDescription ?? stripHtml(apiRoom.description),
    price,
    currency: "\u20B9",
    priceUnit: "night",
    size: meta?.size ?? 200,
    sizeUnit: meta?.sizeUnit ?? "sq. ft.",
    maxOccupancy: apiRoom.maximumOccupancy || 2,
    bedType: meta?.bedType ?? "Double Bed",
    bedConfig: meta?.bedConfig ?? "1 Double Bed",
    bathroomType: meta?.bathroomType ?? "Private Bathroom",
    floor: meta?.floor ?? "Multiple Floors",
    view: meta?.view ?? "Interior / Street View",
    images: mapApiImages(apiRoom.imageList),
    amenities: apiRoom.roomFacilities?.map((f) => f.name.toLowerCase().replace(/\s+/g, "-")) ?? ["wifi", "ac"],
    highlights: meta?.highlights ?? [],
    features: meta?.features ?? [],
    policies: meta?.policies ?? [],
    faqs: meta?.faqs ?? [],
    nearby: meta?.nearby ?? [],
    popular: meta?.popular ?? false,
    available: (apiRoom.ratesAndAvailabilityDtos?.[0]?.noOfAvailable ?? 0) > 0,
    tag: meta?.tag,
  };
}
