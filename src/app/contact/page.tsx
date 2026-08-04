import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero/PageHero";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { CONTACT_CONTENT } from "@/data/contact";
import { SITE_ASSETS, SITE_INFO } from "@/data/site";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { generateCanonicalUrl } from "@/utils/seo";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Velora Stays",
  description:
    "Get in touch with Velora Stays. Contact us for bookings, inquiries, or assistance with your luxury villa stay near Pawna Lake, Lonavala.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Velora Stays",
    description: "Get in touch with Velora Stays for bookings and inquiries.",
    url: generateCanonicalUrl("/contact"),
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: SITE_INFO.url },
          { name: "Contact", url: `${SITE_INFO.url}/contact` },
        ])}
      />
      <PageHero
        eyebrow={CONTACT_CONTENT.eyebrow}
        heading={CONTACT_CONTENT.heading}
        description={CONTACT_CONTENT.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]}
        bgImage={SITE_ASSETS.contactMapImage}
      />
      <ContactForm />
    </>
  );
}
