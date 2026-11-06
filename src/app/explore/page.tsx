import type { Metadata } from "next";
import PropertyInfoPage from "@/components/sections/PropertyInfoPage";
export const metadata: Metadata = { title: "Explore Jharsuguda | Y Hotels Signature", description: "Hotel and stay information for Y Hotels Signature in Jharsuguda." };
export default function ExplorePage() { return <PropertyInfoPage title="Explore your stay" description="Browse our room categories and contact the hotel team for local directions and stay information." />; }
