"use client";

import { useEffect, useMemo, useState } from "react";
import { getProperty, mapPropertyVillas, type TmProperty } from "@/lib/api/thehotelmate";
import type { VillaType } from "@/types";

interface VeloraData {
  property: TmProperty | null;
  villas: VillaType[];
  loading: boolean;
  error: Error | null;
}

export function useVeloraData(): VeloraData {
  const [property, setProperty] = useState<TmProperty | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    getProperty()
      .then((data) => {
        if (!cancelled) setProperty(data);
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err : new Error(String(err)));
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const villas = useMemo(() => {
    if (!property) return [];
    return mapPropertyVillas(property);
  }, [property]);

  return {
    property,
    villas,
    loading: !property && !error,
    error,
  };
}

export function useVillaBySlug(slug: string): {
  villa: VillaType | undefined;
  loading: boolean;
  error: Error | null;
} {
  const { villas, loading, error } = useVeloraData();
  const villa = useMemo(
    () => villas.find((v) => v.slug === slug),
    [villas, slug],
  );
  return { villa, loading, error };
}
