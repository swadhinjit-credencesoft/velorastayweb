import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { SITE_INFO } from "@/data/site";
import { ABOUT_STORY, ABOUT_MISSION, ABOUT_VISION } from "@/data/about";
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: "About Us | Velora Stays",
  description:
    "Discover the story behind Velora Stays — a premium luxury villa in Pawna Lake, Lonavala. Learn about our mission and commitment to exceptional hospitality.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Velora Stays",
    description: "Learn about Velora Stays, our story, and mission.",
    url: `${SITE_INFO.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={generateOrganizationSchema()} />
      <JsonLd schema={generateBreadcrumbSchema([{ name: "About", url: `${SITE_INFO.url}/about` }])} />

      <section className="relative py-20 pt-32">
        <div className="absolute inset-0 z-0">
          <Image src="/heroimg3.jpeg" alt="About Velora Stays" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 to-[#16213e]/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />
          <p className="text-amber-400 font-medium tracking-wide uppercase text-sm mt-4">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">{ABOUT_STORY.title}</h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">Discover the story behind Velora Stays.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            {ABOUT_STORY.description.split("\n\n").map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4">{para}</p>
            ))}
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
            <Image src={ABOUT_STORY.image} alt={ABOUT_STORY.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{ABOUT_MISSION.title}</h2>
              {ABOUT_MISSION.description.split("\n\n").map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-3">{para}</p>
              ))}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{ABOUT_VISION.title}</h2>
              {ABOUT_VISION.description.split("\n\n").map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-3">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-500 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Experience the Velora Stays Difference</h2>
          <p className="mb-6 opacity-90">Book your stay and discover why guests keep coming back.</p>
          <a href="https://bookone.io/Velora-Stays?bookingEngine=true" className="inline-block bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Book Your Stay
          </a>
        </div>
      </section>
    </>
  );
}
