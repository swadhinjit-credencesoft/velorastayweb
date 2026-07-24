import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { AWARDS } from "@/data/team";

export const metadata: Metadata = {
  title: "Awards & Recognition | Vellora Stays",
  description: "See the awards and recognition Vellora Stays has received for excellence in hospitality and guest satisfaction.",
};

export default function AwardsPage() {
  return (
    <>
      <JsonLd schema={generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "About", url: "/about" }, { name: "Awards", url: "/about/awards" }])} />
      <section className="relative bg-gradient-to-r from-[#1a1a2e] to-[#16213e] py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Awards", href: "/about/awards" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">Awards & Recognition</h1>
          <p className="mt-3 text-gray-300">Recognition for our commitment to excellence.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {AWARDS.map((award) => (
            <div key={award.id} className="bg-amber-50 rounded-xl p-8">
              <div className="text-amber-600 font-bold text-sm">{award.organization} • {award.year}</div>
              <h2 className="text-2xl font-bold text-gray-900 mt-2">{award.title}</h2>
              <p className="mt-3 text-gray-600">{award.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/about" className="text-amber-600 font-semibold hover:underline">← Back to About</Link>
        </div>
      </section>
    </>
  );
}
