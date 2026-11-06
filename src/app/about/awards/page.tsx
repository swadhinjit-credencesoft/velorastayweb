import type { Metadata } from "next";
import PropertyInfoPage from "@/components/sections/PropertyInfoPage";
export const metadata: Metadata = { title: "Guest Feedback | Y Hotels Signature", description: "Guest feedback for Y Hotels Signature." };
export default function AwardsPage() { return <PropertyInfoPage title="Awards and recognition" description="No awards or recognition details were provided for publication. Contact the hotel for current information." />; }
