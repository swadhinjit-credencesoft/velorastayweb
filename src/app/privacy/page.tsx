import type { Metadata } from "next";
import LegalContent from "@/components/sections/LegalContent";

export const metadata: Metadata = { title: "Privacy Policy | Y Hotels Signature", description: "Privacy information for the Y Hotels Signature website.", alternates: { canonical: "/privacy" } };
export default function PrivacyPage() { return <LegalContent slug="privacy-policy" path="/privacy" />; }
