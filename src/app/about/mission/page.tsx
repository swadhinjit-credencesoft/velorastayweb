import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { ABOUT_MISSION } from "@/data/about";

export const metadata: Metadata = {
  title: "Our Mission | Velora Stays",
  description: "Discover the mission behind Velora Stays — redefining luxury hospitality with quality, cleanliness, and genuine care.",
};

export default function MissionPage() {
  return (
    <>
      <JsonLd schema={generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "About", url: "/about" }, { name: "Mission", url: "/about/mission" }])} />
      <section className="relative bg-gradient-to-r from-[#1a1a2e] to-[#16213e] py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Mission", href: "/about/mission" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">{ABOUT_MISSION.title}</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 rounded-xl p-8 mb-10">
            <p className="text-xl text-gray-800 leading-relaxed">{ABOUT_MISSION.description}</p>
          </div>
          <div className="text-center">
            <Link href="/about" className="text-amber-600 font-semibold hover:underline">← Back to About</Link>
          </div>
        </div>
      </section>
    </>
  );
}
