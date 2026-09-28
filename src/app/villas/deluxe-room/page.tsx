import { redirect } from "next/navigation";

export const metadata = {
  robots: { index: false, follow: true },
};

export default function LegacyDeluxeRoomPage() {
  redirect("/rooms/deluxe-double-bedded-temple-facing-room");
}
