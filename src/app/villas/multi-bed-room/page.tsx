import { redirect } from "next/navigation";

export const metadata = {
  robots: { index: false, follow: true },
};

export default function LegacyMultiBedRoomPage() {
  redirect("/rooms/four-bed-ac-room");
}
