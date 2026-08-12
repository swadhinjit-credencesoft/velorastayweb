import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { SITE_INFO } from "@/data/site";
import BookingForm from "./BookingForm";

export const metadata: Metadata = {
  title: "Book Your Stay | The Queen's Head â€“ Paharganj",
  description:
    `Book your room at ${SITE_INFO.name} in Paharganj, New Delhi. Rooms from â‚¹2,800/night. Call ${SITE_INFO.phone} or send a WhatsApp booking request â€” our team confirms availability with the best rates.`,
  alternates: { canonical: "/book-now" },
  openGraph: {
    title: "Book Your Stay | The Queen's Head â€“ Paharganj",
    description: "Reserve your room in Paharganj, New Delhi by phone or WhatsApp.",
    url: "https://shivharehotelsandtravel.com/book-now",
  },
};

export default function BookNowPage() {
  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: SITE_INFO.url },
          { name: "Book Now", url: `${SITE_INFO.url}/book-now` },
        ])}
      />

      <section className="relative py-20 pt-32">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/homehero1.png)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/80 to-[#16213e]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Book Now", href: "/book-now" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">Book Your Stay</h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
            Reserve your room at The Queen&apos;s Head â€“ Paharganj. Simple, direct
            booking â€” call or WhatsApp our reservations team.
          </p>
        </div>
      </section>

      <BookingForm />
    </>
  );
}
