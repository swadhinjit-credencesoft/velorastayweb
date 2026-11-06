import { redirect } from "next/navigation";

export const metadata = {
  robots: { index: false, follow: true },
};

export default function LegacyDeluxeRoomPage() {
  redirect("/rooms/super-deluxe");
}
