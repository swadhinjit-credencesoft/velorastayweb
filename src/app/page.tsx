import Hero from "@/components/sections/Hero/Hero";
import SearchBar from "@/components/sections/SearchBar/SearchBar";
import FeaturedVillas from "@/components/sections/FeaturedVillas/FeaturedVillas";
import JamindarPromo from "@/components/jamindar/JamindarPromo/JamindarPromo";
import WhyChooseUs from "@/components/sections/WhyChooseUs/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import Gallery from "@/components/sections/Gallery/Gallery";
import NearbyAttractions from "@/components/sections/NearbyAttractions/NearbyAttractions";
import FAQ from "@/components/sections/FAQ/FAQ";
import CTA from "@/components/sections/CTA/CTA";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import {
  generateHotelSchema,
  generateWebsiteSchema,
  priceRangeLabel,
} from "@/utils/schema";
import { getApiRooms } from "@/lib/api/thehotelmate";
import { SITE_INFO } from "@/data/site";

export default async function HomePage() {
  const rooms = await getApiRooms();
  const priceRange = priceRangeLabel(rooms.map((room) => room.price));

  return (
    <>
      <JsonLd schema={generateHotelSchema(priceRange)} />
      <JsonLd schema={generateWebsiteSchema()} />
      <Hero>
        <SearchBar />
      </Hero>
      <FeaturedVillas />
      <JamindarPromo />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <NearbyAttractions />
      <FAQ />
      <CTA
        eyebrow="Ready to Stay in Puri?"
        heading="Book Your Room Today"
        description="A comfortable stay just 50 metres from the West Gate of Shri Jagannath Temple, Puri. Clean air-conditioned rooms, attached bathrooms, 24-hour hot water, and a front desk open 24 hours."
        buttons={[
          { label: "Book Now", href: "https://bookone.io/bishnu-bhaban?bookingEngine=true", variant: "primary" },
          { label: "View Rooms", href: "/rooms", variant: "outline" },
        ]}
      />
    </>
  );
}
