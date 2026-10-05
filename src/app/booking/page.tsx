import { redirect } from "next/navigation";

const BOOKING_ENGINE_URL = "https://bookone.io/bishnu-bhaban?bookingEngine=true";

export default function BookingPage() {
  redirect(BOOKING_ENGINE_URL);
}
