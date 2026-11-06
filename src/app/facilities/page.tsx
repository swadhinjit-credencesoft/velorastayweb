import type { Metadata } from "next";
import PropertyInfoPage from "@/components/sections/PropertyInfoPage";
export const metadata: Metadata = { title: "Facilities | Y Hotels Signature", description: "Ask Y Hotels Signature about facilities and services available for your stay." };
export default function FacilitiesPage() { return <PropertyInfoPage title="Facilities and services" description="Contact the hotel to confirm which facilities and services are currently available for your dates and room category." />; }
