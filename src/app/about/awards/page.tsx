import type { Metadata } from "next";
import PropertyInfoPage from "@/components/sections/PropertyInfoPage";
export const metadata: Metadata = { title: "Guest Feedback | Y Hotels Signature", description: "Guest feedback for Y Hotels Signature." };
export default function AwardsPage() { return <PropertyInfoPage title="Guest feedback" description="No awards or review statistics have been provided for publication. Contact the hotel for current information." />; }
