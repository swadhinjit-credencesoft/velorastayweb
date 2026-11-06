import type { Metadata } from "next";
import PropertyInfoPage from "@/components/sections/PropertyInfoPage";
export const metadata: Metadata = { title: "Local Information | Y Hotels Signature", description: "Contact the Y Hotels Signature team for local travel information." };
export default function TourPackagesPage() { return <PropertyInfoPage title="Local travel information" description="Contact the hotel team for directions and current local travel information during your stay." />; }
