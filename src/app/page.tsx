import Hero from "@/components/sections/Hero/Hero";
import FeaturedVillas from "@/components/sections/FeaturedVillas/FeaturedVillas";
import WhyChooseUs from "@/components/sections/WhyChooseUs/WhyChooseUs";
import CTA from "@/components/sections/CTA/CTA";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateHotelSchema, generateWebsiteSchema } from "@/utils/schema";
import { SITE_INFO } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <JsonLd schema={generateHotelSchema("₹3,500–₹4,500 per night, single occupancy; meal plans may affect rates")}/>
      <JsonLd schema={generateWebsiteSchema()} />
      <Hero />
      <FeaturedVillas />
      <WhyChooseUs />
      <CTA
        eyebrow="Y Hotels Signature · Jharsuguda"
        heading="Plan your stay"
        description={`${SITE_INFO.address.full}. Call the hotel to check availability and confirm rates for your dates and meal plan.`}
        buttons={[
          { label: "Call the Hotel", href: `tel:${SITE_INFO.phone.replace(/\s+/g, "")}`, variant: "primary" },
          { label: "Email Reservations", href: `mailto:${SITE_INFO.email}`, variant: "outline" },
        ]}
      />
    </>
  );
}
