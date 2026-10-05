import Hero from "@/components/sections/Hero/Hero";
import SearchBar from "@/components/sections/SearchBar/SearchBar";
import FeaturedVillas from "@/components/sections/FeaturedVillas/FeaturedVillas";
import WhyChooseUs from "@/components/sections/WhyChooseUs/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import Gallery from "@/components/sections/Gallery/Gallery";
import NearbyAttractions from "@/components/sections/NearbyAttractions/NearbyAttractions";
import FAQ from "@/components/sections/FAQ/FAQ";
import CTA from "@/components/sections/CTA/CTA";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateHotelSchema, generateWebsiteSchema } from "@/utils/schema";
import { getDynamicVillas } from "@/lib/api/thehotelmate";

export const revalidate = 60;

export default async function HomePage() {
  const villas = await getDynamicVillas();

  return (
    <>
      <JsonLd schema={generateHotelSchema()} />
      <JsonLd schema={generateWebsiteSchema()} />
      <Hero>
        <SearchBar serverVillas={villas} />
      </Hero>
      <FeaturedVillas serverVillas={villas} />
      <WhyChooseUs />
      <Testimonials />
      <Gallery serverVillas={villas} />
      {/* <Dining /> */}
      <NearbyAttractions />
      <FAQ />
      <CTA
        eyebrow="Ready to Experience Velora Stays?"
        heading="Book Your Perfect Villa Today"
        description="Join hundreds of happy guests who have chosen Velora Stays for their Pawna Lake getaway. Private pool, bonfire, BBQ, and stunning lake views await."
        buttons={[
          { label: "Book Now", href: "https://bookone.io/Velora-Stays?bookingEngine=true", variant: "primary" },
          { label: "View Villas", href: "/villas", variant: "outline" },
        ]}
      />
    </>
  );
}
