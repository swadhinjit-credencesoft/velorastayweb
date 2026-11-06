import type { Metadata } from "next";
import PropertyInfoPage from "@/components/sections/PropertyInfoPage";
export const metadata: Metadata = { title: "Local Information | Y Hotels Signature", description: "Contact Y Hotels Signature for local information and directions in Jharsuguda." };
export default function ToursPage() { return <PropertyInfoPage title="Local information" description="Ask the hotel team for directions and current local travel information during your stay in Jharsuguda." />; }
