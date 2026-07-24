import type { Metadata } from "next";
import BookingForm from "./BookingForm";

export const metadata: Metadata = {
  title: "Book Your Stay | Vellora Stays",
  description:
    "Book your luxury villa near Pawna Lake, Lonavala. Choose from 4 BHK, 5 BHK, and 7 BHK villas with stunning lake views.",
  alternates: { canonical: "/booking" },
  openGraph: {
    title: "Book Your Stay | Vellora Stays",
    description: "Book your luxury villa near Pawna Lake, Lonavala.",
    url: "https://vellorastays.in/booking",
  },
};

export default function BookingPage() {
  return <BookingForm />;
}
