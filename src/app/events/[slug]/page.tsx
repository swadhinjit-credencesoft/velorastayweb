// import type { Metadata } from "next";
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
// import JsonLd from "@/components/seo/JsonLd/JsonLd";
// import { generateBreadcrumbSchema, generateEventSchema } from "@/utils/schema";
import type { Metadata } from "next";
import { EVENT_TYPES } from "@/data/events";

// type Props = { params: { slug: string } };

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return EVENT_TYPES.map((event) => ({ slug: event.slug }));
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const event = getEventBySlug(params.slug);
//   if (!event) return { title: "Event Not Found" };
//   return {
//     title: `${event.name} | Velora Stays Events`,
//     description: event.description,
//     alternates: { canonical: `/events/${event.slug}` },
//     openGraph: {
//       title: `${event.name} | Velora Stays`,
//       description: event.tagline,
//       images: [{ url: event.image, width: 1200, height: 630, alt: event.name }],
//     },
//   };
// }

export default function EventDetailPage() {
  return null; // Events detail page disabled — kept (commented out) for later use
  /* ORIGINAL PAGE CONTENT (disabled):
  const event = getEventBySlug(params.slug);
  if (!event) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: event.name, href: `/events/${event.slug}` },
  ];

  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Events", url: "/events" },
          { name: event.name, url: `/events/${event.slug}` },
        ])}
      />
      <JsonLd
        schema={generateEventSchema({
          name: event.name,
          description: event.description,
          startDate: "2026-01-01",
          endDate: "2026-12-31",
          location: "Velora Stays, Lonavala, Maharashtra",
        })}
      />

      <section className="relative h-[50vh] min-h-[400px]">
        <Image src={event.image} alt={event.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb items={breadcrumbs} />
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">{event.name}</h1>
            <p className="text-amber-300 text-xl mt-2">{event.tagline}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {event.longDescription}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
                <div className="flex flex-wrap gap-3">
                  {event.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-4 py-2 bg-amber-50 text-amber-700 rounded-lg font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {event.gallery.map((img) => (
                    <div key={img.id} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <Image src={img.src} alt={img.alt} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {event.faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {event.faqs.map((faq) => (
                      <div key={faq.id} className="border rounded-lg p-5">
                        <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                        <p className="mt-2 text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Event Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Capacity</span>
                    <span className="font-medium">Up to {event.capacity} guests</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Hall Size</span>
                    <span className="font-medium">{event.hallSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Price Range</span>
                    <span className="font-medium">{event.priceRange}</span>
                  </div>
                </div>
                <hr />
                <h4 className="font-semibold text-gray-900">Packages</h4>
                <div className="space-y-3">
                  {event.packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`p-4 rounded-lg border ${
                        pkg.popular ? "border-amber-400 bg-amber-50" : "border-gray-200"
                      }`}
                    >
                      {pkg.popular && (
                        <span className="text-xs font-bold text-amber-600 uppercase">
                          Most Popular
                        </span>
                      )}
                      <div className="flex justify-between items-baseline mt-1">
                        <span className="font-semibold">{pkg.name}</span>
                        <span className="text-amber-600 font-bold">{pkg.price}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{pkg.description}</p>
                      <ul className="mt-2 space-y-1">
                        {pkg.includes.map((item) => (
                          <li key={item} className="text-xs text-gray-600 flex items-start gap-1">
                            <span className="text-green-500 mt-0.5">✓</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Enquire Now
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
  */
}
