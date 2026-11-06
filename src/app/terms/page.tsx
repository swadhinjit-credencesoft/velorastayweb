import type { Metadata } from "next";
import LegalContent from "@/components/sections/LegalContent";

export const metadata: Metadata = { title: "Terms and Conditions | Y Hotels Signature", description: "Terms for room information and enquiries at Y Hotels Signature.", alternates: { canonical: "/terms" } };
export default function TermsPage() { return <LegalContent slug="terms-and-conditions" path="/terms" />; }
