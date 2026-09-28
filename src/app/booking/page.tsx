import { redirect } from "next/navigation";

const BOOKING_ENGINE_URL = "https://bookone.io/Bishnu-Bhavan?bookingEngine=true";

export default function BookingPage() {
  redirect(BOOKING_ENGINE_URL);
}
