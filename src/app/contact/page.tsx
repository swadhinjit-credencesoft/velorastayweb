import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Vellora Stays",
  description:
    "Get in touch with Vellora Stays. Contact us for bookings, inquiries, or assistance with your luxury villa stay near Pawna Lake, Lonavala.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Vellora Stays",
    description: "Get in touch with Vellora Stays for bookings and inquiries.",
    url: "https://vellorastays.in/contact",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
