import { HOTEL_ROOMS } from "@/data/villas";
import type { VillaType } from "@/types";

/** Local Y Hotels room catalogue until a booking integration is configured. */
export async function getApiRooms(): Promise<VillaType[]> {
  return HOTEL_ROOMS;
}
