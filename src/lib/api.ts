import type { ApiPropertyResponse, ApiCheckAvailabilityParams } from "@/types/api";
import { API_BASE_URL, PROPERTY_ID, NX_PROPERTY_ID } from "@/config";
import fallbackProperty from "@/data/fallbackProperty.json";
import nxFallbackProperty from "@/data/nx/fallbackProperty.json";

function getDefaultDates() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  return {
    fromDate: today.toISOString().split("T")[0],
    toDate: tomorrow.toISOString().split("T")[0],
  };
}

export async function checkAvailability(
  params?: Partial<ApiCheckAvailabilityParams>,
  propertyId: number = PROPERTY_ID
): Promise<ApiPropertyResponse> {
  const defaults = getDefaultDates();
  const fallback = (propertyId === NX_PROPERTY_ID
    ? nxFallbackProperty
    : fallbackProperty) as unknown as ApiPropertyResponse;

  const query = new URLSearchParams({
    fromDate: params?.fromDate ?? defaults.fromDate,
    toDate: params?.toDate ?? defaults.toDate,
    noOfRooms: String(params?.noOfRooms ?? 1),
    noOfPersons: String(params?.noOfPersons ?? 2),
  });

  try {
    const res = await fetch(
      `${API_BASE_URL}/checkAvailability/${propertyId}?${query}`,
      { next: { revalidate: 3600 }, signal: AbortSignal.timeout(6000) }
    );
    if (!res.ok) {
      return fallback;
    }
    const data = await res.json();
    if (data && Array.isArray(data.roomList) && data.roomList.length > 0) {
      return data;
    }
    return fallback;
  } catch {
    return fallback;
  }
}

export async function checkNxAvailability(
  params?: Partial<ApiCheckAvailabilityParams>
): Promise<ApiPropertyResponse> {
  return checkAvailability(params, NX_PROPERTY_ID);
}
