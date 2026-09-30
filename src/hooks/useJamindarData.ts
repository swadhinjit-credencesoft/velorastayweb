"use client";

import { useEffect, useState } from "react";
import { getJamindarProperty, mapJamindarRooms, type TmProperty } from "@/lib/api/thehotelmate";
import { jamindarData, type JamindarRoom } from "@/data/jamindar";

interface JamindarDataState {
  property: TmProperty | null;
  rooms: JamindarRoom[];
  loading: boolean;
  error: Error | null;
}

export function useJamindarData(): JamindarDataState {
  const [property, setProperty] = useState<TmProperty | null>(null);
  const [rooms, setRooms] = useState<JamindarRoom[]>(jamindarData.rooms);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    getJamindarProperty()
      .then((data) => {
        if (cancelled) return;
        setProperty(data);
        try {
          const apiRooms = mapJamindarRooms(data);
          if (apiRooms.length > 0) {
            setRooms(apiRooms);
          } else {
            setRooms(jamindarData.rooms);
          }
          setError(null);
        } catch (err) {
          setRooms(jamindarData.rooms);
          setError(err instanceof Error ? err : new Error(String(err)));
        }
      })
      .catch((err) => {
        if (cancelled) return;
        setRooms(jamindarData.rooms);
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
    rooms,
    loading,
    error,
  };
}
