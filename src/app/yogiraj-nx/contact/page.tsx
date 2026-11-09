import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero/PageHero";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { CONTACT_CONTENT } from "@/data/nx/contact";
import { SITE_ASSETS as NX_ASSETS, SITE_INFO as NX_SITE } from "@/data/nx/site";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { generateCanonicalUrl } from "@/utils/seo";
import NxContactForm from "./NxContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Hotel Yogiraj NX, Shirdi",
  description:
    "Get in touch with Hotel Yogiraj NX, Shirdi. Contact us for bookings, inquiries, or assistance with your stay near the Sai Baba Temple in Shirdi. Direct desk: +91 99030 33535.",
  alternates: { canonical: "/yogiraj-nx/contact" },
  openGraph: {
    title: "Contact Us | Hotel Yogiraj NX, Shirdi",
    description: "Get in touch with Hotel Yogiraj NX, Shirdi for bookings and inquiries.",
    url: generateCanonicalUrl("/yogiraj-nx/contact"),
  },
};

export default function NxContactPage() {
  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "https://yogirajhotel.com/yogiraj-nx" },
          { name: "Contact", url: "https://yogirajhotel.com/yogiraj-nx/contact" },
        ])}
      />
      <PageHero
        eyebrow={CONTACT_CONTENT.eyebrow}
        heading={CONTACT_CONTENT.heading}
        description={CONTACT_CONTENT.description}
        breadcrumbs={[
          { label: "Home", href: "/yogiraj-nx" },
          { label: "Contact", href: "/yogiraj-nx/contact" },
        ]}
        bgImage="/yogirajimg/4.avif"
      />
      <NxContactForm />
    </>
  );
}
