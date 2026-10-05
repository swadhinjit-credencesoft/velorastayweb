"use client";

import { createContext, useContext } from "react";
import type { JamindarRoom } from "@/data/jamindar";

const JamindarRoomsContext = createContext<JamindarRoom[]>([]);

export function JamindarRoomsProvider({
  rooms,
  children,
}: {
  rooms: JamindarRoom[];
  children: React.ReactNode;
}) {
  return (
    <JamindarRoomsContext.Provider value={rooms}>
      {children}
    </JamindarRoomsContext.Provider>
  );
}

/**
 * Jamindar Nest rooms fetched from thehotelmate (property 3638) at build time.
 *
 * The browser fetch is blocked by CORS on the live domain, so this is the only
 * reliable room source at runtime. Nothing should fall back to the hardcoded
 * src/data/jamindar.ts rooms.
 */
export function useJamindarRooms(): JamindarRoom[] {
  return useContext(JamindarRoomsContext);
}
