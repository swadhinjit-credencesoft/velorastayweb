import type { Metadata } from "next";
import PropertyInfoPage from "@/components/sections/PropertyInfoPage";
export const metadata: Metadata = { title: "Gallery | Y Hotels Signature", description: "Updated property photographs for Y Hotels Signature." };
export default function ExploreGalleryPage() { return <PropertyInfoPage title="Property photos" description="Updated photographs of Y Hotels Signature will be added here." />; }
