"use client";

import { createContext, useContext } from "react";
import type { VillaType } from "@/types";

const BhabanRoomsContext = createContext<VillaType[]>([]);

export function BhabanRoomsProvider({
  rooms,
  children,
}: {
  rooms: VillaType[];
  children: React.ReactNode;
}) {
  return (
    <BhabanRoomsContext.Provider value={rooms}>
      {children}
    </BhabanRoomsContext.Provider>
  );
}

/**
 * Rooms fetched from thehotelmate at build time by the root layout.
 *
 * The browser fetch is blocked by CORS on the live domain, so this is the only
 * reliable room source at runtime. Nothing should fall back to the hardcoded
 * src/data/villas.ts list.
 */
export function useBhabanRooms(): VillaType[] {
  return useContext(BhabanRoomsContext);
}
