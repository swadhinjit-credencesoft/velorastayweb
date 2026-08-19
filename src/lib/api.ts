import type { ApiPropertyResponse, ApiCheckAvailabilityParams } from "@/types/api";
import { API_BASE_URL, PROPERTY_ID } from "@/config";

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
  params?: Partial<ApiCheckAvailabilityParams>
): Promise<ApiPropertyResponse | null> {
  const defaults = getDefaultDates();
  const query = new URLSearchParams({
    fromDate: params?.fromDate ?? defaults.fromDate,
    toDate: params?.toDate ?? defaults.toDate,
    noOfRooms: String(params?.noOfRooms ?? 1),
    noOfPersons: String(params?.noOfPersons ?? 1),
  });

  try {
    const res = await fetch(
      `${API_BASE_URL}/checkAvailability/${PROPERTY_ID}?${query}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}
