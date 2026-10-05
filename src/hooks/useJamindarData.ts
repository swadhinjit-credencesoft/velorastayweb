"use client";

import { useMemo } from "react";
import { useJamindarRooms } from "@/providers/JamindarRoomsProvider";
import type { TmProperty } from "@/lib/api/thehotelmate";
import type { JamindarRoom } from "@/data/jamindar";

interface JamindarDataState {
  property: TmProperty | null;
  rooms: JamindarRoom[];
  loading: boolean;
  error: Error | null;
}

/**
 * Jamindar Nest rooms come from the build-time API fetch in the page.
 *
 * This hook used to fetch in the browser, but thehotelmate rejects cross-origin
 * requests from the live domain (403 Invalid CORS request), so the caller always
 * fell back to the hardcoded src/data/jamindar.ts rooms. Rooms are now baked into
 * the static export instead, which removes the hardcoded fallback.
 */
export function useJamindarData(): JamindarDataState {
  const rooms = useJamindarRooms();
  const hasRooms = rooms.length > 0;

  return useMemo(
    () => ({
      property: null,
      rooms,
      loading: false,
      error: hasRooms
        ? null
        : new Error("Jamindar room data unavailable at build time"),
    }),
    [rooms, hasRooms]
  );
}
