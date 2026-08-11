import Hero from "@/components/sections/Hero/Hero";
import SearchBar from "@/components/sections/SearchBar/SearchBar";
import FeaturedRooms from "@/components/sections/FeaturedRooms/FeaturedRooms";
import WhyChooseUs from "@/components/sections/WhyChooseUs/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import Gallery from "@/components/sections/Gallery/Gallery";
import NearbyAttractions from "@/components/sections/NearbyAttractions/NearbyAttractions";
import FAQ from "@/components/sections/FAQ/FAQ";
import CTA from "@/components/sections/CTA/CTA";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateHotelSchema, generateWebsiteSchema } from "@/utils/schema";
import { SITE_INFO, WHATSAPP_LINK } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <JsonLd schema={generateHotelSchema()} />
      <JsonLd schema={generateWebsiteSchema()} />
      <Hero>
        <SearchBar />
      </Hero>
      <FeaturedRooms />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <NearbyAttractions />
      <FAQ />
      <CTA
        eyebrow="Ready to Stay in Paharganj?"
        heading="Book Your Room at The Queen's Head"
        description="Comfortable air-conditioned rooms, free Wi-Fi and a 24-hour front desk in the heart of Paharganj — close to New Delhi Railway Station and Central Delhi attractions."
        buttons={[
          { label: "Book Now", href: "/book-now", variant: "primary" },
          { label: "View Rooms", href: "/rooms", variant: "outline" },
          { label: "WhatsApp Us", href: WHATSAPP_LINK, variant: "ghost" },
        ]}
      />
    </>
  );
}
