import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { TEAM_MEMBERS, AWARDS } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team | Vellora Stays",
  description: "Meet the dedicated team behind Vellora Stays — passionate hospitality professionals committed to your comfort.",
};

export default function TeamPage() {
  return (
    <>
      <JsonLd schema={generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "About", url: "/about" }, { name: "Team", url: "/about/team" }])} />
      <section className="relative bg-gradient-to-r from-[#1a1a2e] to-[#16213e] py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Team", href: "/about/team" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">Meet Our Team</h1>
          <p className="mt-3 text-gray-300">The people who make your stay special.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="bg-gray-50 rounded-xl overflow-hidden text-center">
                <div className="relative h-64">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-amber-600 text-sm font-medium">{member.role}</p>
                  <p className="mt-3 text-gray-600 text-sm line-clamp-4">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-8 text-center">Awards & Recognition</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AWARDS.map((award) => (
              <div key={award.id} className="bg-amber-50 rounded-xl p-6">
                <div className="text-amber-600 font-bold text-sm">{award.year}</div>
                <h3 className="text-lg font-bold text-gray-900 mt-1">{award.title}</h3>
                <p className="text-sm text-gray-500">{award.organization}</p>
                <p className="mt-2 text-gray-600 text-sm">{award.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/about" className="text-amber-600 font-semibold hover:underline">← Back to About</Link>
          </div>
        </div>
      </section>
    </>
  );
}
