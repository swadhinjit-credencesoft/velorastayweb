"use client";

import { useMemo } from "react";
import { useHotelRooms } from "@/providers/HotelRoomsProvider";
import type { VillaType } from "@/types";

interface HotelData { rooms: VillaType[]; loading: boolean; error: Error | null; }
export function useHotelData(): HotelData {
  const rooms = useHotelRooms();
  return useMemo(() => ({ rooms, loading: false, error: rooms.length ? null : new Error("Room catalogue is empty") }), [rooms]);
}
export function useRoomBySlug(slug: string): { room: VillaType | undefined; loading: boolean; error: Error | null } {
  const { rooms, loading, error } = useHotelData();
  return { room: rooms.find((room) => room.slug === slug), loading, error };
}
