import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { SITE_INFO, WHATSAPP_LINK } from "@/data/site";
import type { LocalSeoPage } from "@/data/seoPages";

export default function LocalSeoPageView({ page }: { page: LocalSeoPage }) {
  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: SITE_INFO.url },
          { name: page.h1, url: `${SITE_INFO.url}/${page.slug}` },
        ])}
      />

      <section className="relative py-20 pt-32">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${page.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/80 to-[#16213e]/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: page.h1, href: `/${page.slug}` }]} />
          <p className="text-amber-400 font-medium tracking-wide uppercase text-sm mt-4">{page.eyebrow}</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-2">{page.h1}</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {page.intro.map((para, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-4">{para}</p>
          ))}

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{page.pointsLabel}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {page.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {page.highlights && page.highlights.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Highlights</h2>
              <ul className="space-y-2">
                {page.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10 bg-gray-50 rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Book Your Room at {SITE_INFO.name}</h2>
            <p className="text-gray-600 mb-6">
              Call {SITE_INFO.phone} or send a WhatsApp request — our team confirms availability with the best rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/rooms"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Rooms
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Book on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
