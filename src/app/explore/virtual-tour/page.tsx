import type { Metadata } from "next";
import PropertyInfoPage from "@/components/sections/PropertyInfoPage";
export const metadata: Metadata = { title: "Property Tour | Y Hotels Signature", description: "Contact the hotel for details about room categories and availability." };
export default function VirtualTourPage() { return <PropertyInfoPage title="Explore our room categories" description="A virtual room tour is not available yet. Browse room categories or contact the hotel for details before you book." />; }
