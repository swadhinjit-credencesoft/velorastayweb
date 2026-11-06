"use client";

import { createContext, useContext } from "react";
import type { VillaType } from "@/types";

const HotelRoomsContext = createContext<VillaType[]>([]);
export function HotelRoomsProvider({ rooms, children }: { rooms: VillaType[]; children: React.ReactNode }) {
  return <HotelRoomsContext.Provider value={rooms}>{children}</HotelRoomsContext.Provider>;
}
export function useHotelRooms(): VillaType[] { return useContext(HotelRoomsContext); }
