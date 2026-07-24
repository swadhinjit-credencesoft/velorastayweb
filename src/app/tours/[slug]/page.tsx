import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { TOUR_PACKAGES, getTourBySlug } from "@/data/tours";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return TOUR_PACKAGES.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tour = getTourBySlug(params.slug);
  if (!tour) return { title: "Tour Not Found" };
  return {
    title: `${tour.name} | Velora Stays Tours`,
    description: tour.description,
    openGraph: {
      title: `${tour.name} | Velora Stays`,
      description: tour.tagline,
      images: [{ url: tour.image, width: 1200, height: 630, alt: tour.name }],
    },
  };
}

export default function TourDetailPage({ params }: Props) {
  const tour = getTourBySlug(params.slug);
  if (!tour) notFound();

  const related = TOUR_PACKAGES.filter((t) => t.slug !== tour.slug).slice(0, 3);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tours", href: "/tours" },
    { label: tour.name, href: `/tours/${tour.slug}` },
  ];

  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Tours", url: "/tours" },
          { name: tour.name, url: `/tours/${tour.slug}` },
        ])}
      />

      <section className="relative h-[50vh] min-h-[400px]">
        <Image src={tour.image} alt={tour.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb items={breadcrumbs} />
            <div className="flex items-center gap-3 mt-4">
              <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {tour.duration}
              </span>
              <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                {tour.groupSize} guests
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">{tour.name}</h1>
            <p className="text-amber-300 text-xl mt-2">{tour.tagline}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Tour</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {tour.longDescription}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Itinerary</h2>
                <div className="space-y-6">
                  {tour.itinerary.map((step: { id: string; time: string; activity: string; description: string }, idx: number) => (
                    <div key={step.id} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {idx + 1}
                        </div>
                        {idx < tour.itinerary.length - 1 && (
                          <div className="w-0.5 flex-1 bg-amber-200 mt-2" />
                        )}
                      </div>
                      <div className="pb-6">
                        <span className="text-sm text-amber-600 font-semibold">{step.time}</span>
                        <h3 className="text-lg font-bold text-gray-900">{step.activity}</h3>
                        <p className="text-gray-600 mt-1">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tour.highlights.map((h: string) => (
                    <div key={h} className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-500 mt-0.5 font-bold">✓</span> {h}
                    </div>
                  ))}
                </div>
              </div>

              {tour.faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">FAQs</h2>
                  <div className="space-y-4">
                    {tour.faqs.map((faq: { id: string; question: string; answer: string }) => (
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
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">
                    {tour.currency}{tour.price}
                  </div>
                  {tour.originalPrice && (
                    <div className="text-gray-400 line-through">
                      {tour.currency}{tour.originalPrice}
                    </div>
                  )}
                  <div className="text-sm text-gray-500 mt-1">per person</div>
                </div>
                <hr />
                <h4 className="font-semibold text-gray-900">What&apos;s Included</h4>
                <ul className="space-y-2">
                  {tour.includes.map((item: string) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-500 mt-0.5">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Book This Tour
                </Link>
              </div>

              {related.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">More Tours</h4>
                  {related.map((t) => (
                    <Link
                      key={t.id}
                      href={`/tours/${t.slug}`}
                      className="flex gap-3 bg-white border rounded-lg p-3 hover:shadow transition-shadow"
                    >
                      <div className="relative w-20 h-16 rounded overflow-hidden flex-shrink-0">
                        <Image src={t.image} alt={t.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm text-gray-900">{t.name}</h5>
                        <span className="text-amber-600 font-bold text-sm">
                          {t.currency}{t.price}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
