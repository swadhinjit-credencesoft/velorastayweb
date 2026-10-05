"use client";

import { useMemo } from "react";
import { useBhabanRooms } from "@/providers/BhabanRoomsProvider";
import type { TmProperty } from "@/lib/api/thehotelmate";
import type { VillaType } from "@/types";

interface BhabanData {
  property: TmProperty | null;
  villas: VillaType[];
  loading: boolean;
  error: Error | null;
}

/**
 * Rooms come from the build-time API fetch in the root layout.
 *
 * This hook used to fetch in the browser, but thehotelmate rejects cross-origin
 * requests from the live domain (403 Invalid CORS request), so every caller
 * silently fell back to the hardcoded src/data/villas.ts list. Rooms are now
 * baked into the static export instead, which removes the hardcoded fallback.
 */
export function useBhabanData(): BhabanData {
  const villas = useBhabanRooms();
  const hasRooms = villas.length > 0;

  return useMemo(
    () => ({
      property: null,
      villas,
      loading: false,
      error: hasRooms
        ? null
        : new Error("Room data unavailable at build time"),
    }),
    [villas, hasRooms]
  );
}

export function useVillaBySlug(slug: string): {
  villa: VillaType | undefined;
  loading: boolean;
  error: Error | null;
} {
  const { villas, loading, error } = useBhabanData();
  const villa = villas.find((v) => v.slug === slug);
  return { villa, loading, error };
}
