import Hero from "@/components/sections/Hero/Hero";
import SearchBar from "@/components/sections/SearchBar/SearchBar";
import FeaturedVillas from "@/components/sections/FeaturedVillas/FeaturedVillas";
import WhyChooseUs from "@/components/sections/WhyChooseUs/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import Gallery from "@/components/sections/Gallery/Gallery";
import Dining from "@/components/sections/Dining/Dining";
import NearbyAttractions from "@/components/sections/NearbyAttractions/NearbyAttractions";
import FAQ from "@/components/sections/FAQ/FAQ";
import CTA from "@/components/sections/CTA/CTA";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateHotelSchema, generateWebsiteSchema } from "@/utils/schema";
import { SITE_INFO } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <JsonLd schema={generateHotelSchema()} />
      <JsonLd schema={generateWebsiteSchema()} />
      <Hero>
        <SearchBar />
      </Hero>
      <FeaturedVillas />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      {/* <Dining /> */}
      <NearbyAttractions />
      <FAQ />
      <CTA
        eyebrow="Ready to Stay in Puri?"
        heading="Book Your Room Today"
        description="A budget hotel fifty metres from the West Gate of the Jagannath Temple in Puri. Clean air-conditioned rooms, attached bathrooms, 24-hour hot water, and a front desk open from 7 AM to 11 PM."
        buttons={[
          { label: "Book Now", href: "https://bookone.io/Bishnu-Bhavan?bookingEngine=true", variant: "primary" },
          { label: "View Rooms", href: "/rooms", variant: "outline" },
        ]}
      />
    </>
  );
}
