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
import { BOOKING_ENGINE_URL } from "@/config";

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
        eyebrow="Ready to Stay in Shirdi?"
        heading="Book Your Room at Hotel Yogiraj"
        description="Comfortable rooms, free Wi-Fi and a 24-hour front desk near the Sai Baba Temple in Shirdi — a short walk from the temple and close to the bus stand."
        buttons={[
          { label: "Book Now", href: `${BOOKING_ENGINE_URL}?bookingEngine=true`, variant: "primary" },
          { label: "View Rooms", href: "/rooms", variant: "outline" },
          { label: "WhatsApp Us", href: WHATSAPP_LINK, variant: "ghost" },
        ]}
      />
    </>
  );
}
