import type { Metadata } from "next";
import PropertyInfoPage from "@/components/sections/PropertyInfoPage";
export const metadata: Metadata = { title: "Gallery | Y Hotels Signature", description: "Room and property photos for Y Hotels Signature in Jharsuguda." };
export default function GalleryPage() { return <PropertyInfoPage title="Property photos" description="Updated photographs of Y Hotels Signature will be added here. Contact the hotel if you would like room information before photos are available." />; }
