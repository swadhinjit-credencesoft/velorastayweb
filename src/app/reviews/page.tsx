import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { REVIEWS, REVIEWS_CONTENT, REVIEW_PLATFORMS } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Guest Reviews | Velora Stays",
  description:
    "Read verified guest reviews for Velora Stays. See ratings from Google, Booking.com, MakeMyTrip, and more.",
  alternates: { canonical: "/reviews" },
  openGraph: { title: "Guest Reviews | Velora Stays", description: REVIEWS_CONTENT.description },
};

export default function ReviewsPage() {
  return (
    <>
      <JsonLd schema={generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Reviews", url: "/reviews" }])} />
      <JsonLd schema={{ "@context": "https://schema.org", "@type": "LodgingBusiness", name: "Velora Stays", aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "47" } }} />

      <section className="relative bg-gradient-to-r from-[#1a1a2e] to-[#16213e] py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Reviews", href: "/reviews" }]} />
          <p className="text-amber-400 font-medium tracking-wide uppercase text-sm mt-4">{REVIEWS_CONTENT.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">{REVIEWS_CONTENT.heading}</h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">{REVIEWS_CONTENT.description}</p>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Ratings Across Platforms</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {REVIEW_PLATFORMS.map((p) => (
              <a key={p.id} href={p.url} target="_blank" rel="noopener noreferrer" className="bg-gray-50 rounded-xl p-4 text-center hover:shadow transition-shadow">
                <div className="text-2xl font-bold text-amber-600">{p.rating}</div>
                <div className="text-xs text-gray-500 mt-1">{p.name}</div>
                <div className="text-xs text-gray-400">{p.reviewCount} reviews</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{review.author}</h3>
                  <p className="text-xs text-gray-500">{review.platform} • {new Date(review.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < review.rating ? "text-amber-400" : "text-gray-300"}>★</span>
                  ))}
                </div>
              </div>
              <p className="mt-3 text-gray-600">{review.text}</p>
              {review.verified && <span className="mt-2 inline-block text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded">✓ Verified Guest</span>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
