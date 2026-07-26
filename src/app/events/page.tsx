import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { EVENT_TYPES, EVENTS_CONTENT } from "@/data/events";

export const metadata: Metadata = {
  title: "Events & Celebrations | Velora Stays",
  description:
    "Host weddings, conferences, birthday parties, and social gatherings at Velora Stays. Versatile event spaces with dedicated planning team in Lonavala.",
  keywords: [
    "villa events Lonavala",
    "wedding venue Lonavala",
    "conference hall Lonavala",
    "birthday party venue",
    "social gatherings villa",
    "event spaces Pawna Lake",
  ],
  alternates: { canonical: "/events" },
  openGraph: {
    title: "Events & Celebrations | Velora Stays",
    description:
      "From grand weddings to intimate gatherings, Velora Stays offers versatile event spaces and expert planning for every occasion.",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
];

export default function EventsPage() {
  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Events", url: "/events" },
        ])}
      />
      <JsonLd
        schema={{
          "@context": "https://schema.org",
          "@type": "EventVenue",
          name: "Velora Stays Events",
          description: EVENTS_CONTENT.description,
          url: "/events",
        }}
      />

      <section className="relative bg-gradient-to-r from-[#1a1a2e] to-[#16213e] py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={breadcrumbs} />
          <p className="text-amber-400 font-medium tracking-wide uppercase text-sm mt-4">
            {EVENTS_CONTENT.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
            {EVENTS_CONTENT.heading}
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
            {EVENTS_CONTENT.description}
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENT_TYPES.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.slug}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="relative h-56">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{event.name}</h3>
                    <p className="text-amber-300 text-sm">{event.tagline}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm line-clamp-2">{event.description}</p>
                  <div className="flex items-center gap-4 mt-4 text-xs text-gray-500">
                    <span>Up to {event.capacity} guests</span>
                    <span>{event.hallSize}</span>
                    <span>{event.priceRange}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {event.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-amber-50 text-amber-700 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Plan Your Perfect Event</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Contact our events team to discuss your requirements and receive a customised proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Events Team
            </Link>
            <Link
              href="tel:+919324248001"
              className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
