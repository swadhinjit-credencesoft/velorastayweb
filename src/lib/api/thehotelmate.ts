import { HOTEL_ROOMS } from "@/data/villas";
import type { VillaType } from "@/types";

/** Static property catalogue. Room rates and inventory are maintained locally until a Y Hotels booking integration is supplied. */
export async function getApiRooms(): Promise<VillaType[]> {
  return HOTEL_ROOMS;
}
