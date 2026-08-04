"use client";

import { useEffect, useState } from "react";
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
  const [villas, setVillas] = useState<VillaType[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getProperty()
      .then((data) => {
        if (cancelled) return;
        setProperty(data);
        try {
          setVillas(mapPropertyVillas(data));
          setError(null);
        } catch (err) {
          setVillas([]);
          setError(err instanceof Error ? err : new Error(String(err)));
        }
      })
      .catch((err) => {
        if (cancelled) return;
        setVillas([]);
        setError(err instanceof Error ? err : new Error(String(err)));
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return {
    property,
    villas,
    loading,
    error,
  };
}

export function useVillaBySlug(slug: string): {
  villa: VillaType | undefined;
  loading: boolean;
  error: Error | null;
} {
  const { villas, loading, error } = useVeloraData();
  const villa = villas.find((v) => v.slug === slug);
  return { villa, loading, error };
}
