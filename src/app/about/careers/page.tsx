import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: "Careers at Velora Stays | Join Our Team",
  description: "Explore career opportunities at Velora Stays. Join our growing team of hospitality professionals in Lonavala.",
  alternates: { canonical: "/about/careers" },
  openGraph: {
    title: "Careers at Velora Stays",
    description: "Explore career opportunities at Velora Stays. Join our growing team of hospitality professionals in Lonavala.",
  },
};

export default function CareersPage() {
  return (
    <>
      <JsonLd schema={generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "About", url: "/about" }, { name: "Careers", url: "/about/careers" }])} />
      <section className="relative bg-gradient-to-r from-[#1a1a2e] to-[#16213e] py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Careers", href: "/about/careers" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">Careers at Velora Stays</h1>
          <p className="mt-3 text-gray-300">Join our growing team and build your career in hospitality.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-gray-600 leading-relaxed">
              At Velora Stays, our team is our greatest asset. We foster a supportive, inclusive, and growth-oriented work environment where every team member has the opportunity to learn, develop, and advance their career in hospitality. We offer competitive compensation, ongoing training programs, and a culture that values innovation and teamwork.
            </p>
          </div>
          <div className="bg-amber-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-gray-600 mb-4">We are always looking for talented individuals to join our team. Currently, we have openings for:</p>
            <ul className="space-y-3">
              {["Front Desk Associate", "Housekeeping Staff", "Kitchen Assistant", "Guest Relations Executive"].map((role) => (
                <li key={role} className="flex items-center gap-3 text-gray-700">
                  <span className="text-green-500 font-bold">✓</span> {role}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
            <p className="text-gray-600">Send your resume and a brief cover letter to <a href="mailto:reservation@thehotelmate.co" className="text-amber-600 font-semibold hover:underline">reservation@thehotelmate.co</a> with the subject line &quot;Application - [Position]&quot;. Our HR team will review your application and get back to you within 5 business days.</p>
          </div>
          <div className="text-center">
            <Link href="/about" className="text-amber-600 font-semibold hover:underline">← Back to About</Link>
          </div>
        </div>
      </section>
    </>
  );
}
