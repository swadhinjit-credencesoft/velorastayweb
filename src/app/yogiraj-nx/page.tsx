import type { Metadata } from "next";
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
import { SITE_INFO as NX_SITE, HERO_SLIDES as NX_SLIDES } from "@/data/nx/site";
import { GALLERY_IMAGES as NX_GALLERY } from "@/data/nx/gallery";
import { REVIEWS as NX_REVIEWS_LIST } from "@/data/nx/reviews";
import { NX_BOOKING_URL } from "@/config";

export const metadata: Metadata = {
  title: "Hotel Yogiraj NX | Hotel Near Sai Baba Temple, Shirdi",
  description:
    "Stay at Hotel Yogiraj NX, Shirdi — a comfortable, budget-friendly hotel right near the Sai Baba Temple with AC & non-AC rooms, free Wi-Fi and warm hospitality. Direct desk: +91 99030 33535.",
  alternates: {
    canonical: "/yogiraj-nx",
  },
  openGraph: {
    title: "Hotel Yogiraj NX | Hotel Near Sai Baba Temple, Shirdi",
    description:
      "Modern second building of Hotel Yogiraj on Pimpalwadi Road, Shirdi. Comfortable AC & non-AC rooms, in-house restaurant, elevator, only 300m from Sai Baba Temple. Call +91 99030 33535.",
    url: "https://yogirajhotel.com/yogiraj-nx",
    images: [
      {
        url: "https://yogirajhotel.com/yogirajimg/AKS08545.avif",
        width: 1200,
        height: 630,
        alt: "Hotel Yogiraj NX Building in Shirdi",
      },
    ],
  },
};

const NX_ROOM_IMAGES: Record<string, string> = {
  "double-bed-room": "/yogirajimg/AKS08605.avif",
  "double-bed-non-ac-room": "/yogirajimg/AKS08604.avif",
  "triple-bed-ac-room": "/yogirajimg/AKS08614.avif",
  "triple-bed-non-ac-room": "/yogirajimg/AKS08614.avif",
  "four-bed-ac-room": "/yogirajimg/AKS08614.avif",
  "four-bed-non-ac-room": "/yogirajimg/AKS08614.avif",
};

export default function HotelYogirajNxHomePage() {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=919903033535&text=${encodeURIComponent(
    "Hello Hotel Yogiraj NX, Shirdi,\nI would like to enquire about a booking."
  )}`;

  return (
    <>
      <JsonLd schema={generateHotelSchema()} />
      <JsonLd schema={generateWebsiteSchema()} />
      <Hero
        slides={NX_SLIDES}
        siteName={NX_SITE.name}
        roomsHref="/yogiraj-nx/rooms"
      >
        <SearchBar />
      </Hero>
      <FeaturedRooms
        eyebrow="Rooms & Suites"
        heading="Rooms at Hotel Yogiraj NX"
        description="Choose from comfortable AC and Non-AC rooms in Shirdi, from budget double rooms to spacious family-friendly four-bed rooms — all within easy reach of the Sai Baba Temple."
        roomsHref="/yogiraj-nx/rooms"
        roomBaseHref="/yogiraj-nx/rooms"
        roomImagesMap={NX_ROOM_IMAGES}
      />
      <WhyChooseUs
        image="/yogirajimg/01.avif"
        heading="Hotel Yogiraj Difference"
        description="From our location near the Sai Baba Temple to comfortable rooms and dependable 24-hour service, every detail is designed to make your Shirdi stay simple and comfortable. We combine modern conveniences with warm Indian hospitality to create a welcoming home away from home for every pilgrim and traveller."
        siteName={NX_SITE.name}
      />
      <Testimonials
        eyebrow="Guest Reviews"
        heading="Guest Reviews"
        description="Discover what guests say about their stay at Hotel Yogiraj NX — close to Sai Baba Temple, with clean rooms, helpful staff and a comfortable, family-friendly experience."
        reviews={NX_REVIEWS_LIST}
      />
      <Gallery
        images={NX_GALLERY}
        viewAllHref="/yogiraj-nx/gallery"
        eyebrow="Gallery"
        heading="A Glimpse Inside"
        hotelName={NX_SITE.name}
      />
      <NearbyAttractions
        heading="Places to Visit Near Hotel Yogiraj NX"
        description="Stay just minutes from the Sai Baba Temple at Hotel Yogiraj NX. Explore Shirdi's most important temples, sacred sites and attractions, most within easy walking distance."
        viewAllHref="/yogiraj-nx/location"
      />
      <FAQ />
      <CTA
        eyebrow="Ready to Stay in Shirdi?"
        heading="Book Your Room at Hotel Yogiraj NX"
        description="Comfortable rooms, free Wi-Fi and a 24-hour front desk near the Sai Baba Temple in Shirdi — a short walk from the temple and close to the bus stand."
        buttons={[
          {
            label: "Book Now",
            href: NX_BOOKING_URL,
            variant: "primary",
          },
          {
            label: "View Rooms",
            href: "/yogiraj-nx/rooms",
            variant: "outline",
          },
          {
            label: "WhatsApp Us",
            href: whatsappUrl,
            variant: "ghost",
          },
        ]}
      />
    </>
  );
}
