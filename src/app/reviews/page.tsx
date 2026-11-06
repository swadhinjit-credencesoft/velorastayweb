import type { Metadata } from "next";
import PropertyInfoPage from "@/components/sections/PropertyInfoPage";
export const metadata: Metadata = { title: "Guest Feedback | Y Hotels Signature", description: "Guest feedback for Y Hotels Signature." };
export default function ReviewsPage() { return <PropertyInfoPage title="Guest feedback" description="We do not yet publish guest reviews on this website. Please see the hotel's public listing or contact the team for current information." />; }
