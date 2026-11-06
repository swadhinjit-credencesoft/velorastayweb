import type { Metadata } from "next";
import PropertyInfoPage from "@/components/sections/PropertyInfoPage";
export const metadata: Metadata = { title: "Your Stay | Y Hotels Signature", description: "Contact Y Hotels Signature for information about your stay in Jharsuguda." };
export default function ExperiencesPage() { return <PropertyInfoPage title="Your stay in Jharsuguda" description="For local recommendations, transport and other stay questions, please contact the Y Hotels Signature team." />; }
