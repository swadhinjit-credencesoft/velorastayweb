import type { Metadata } from "next";
import LegalContent from "@/components/sections/LegalContent";

export const metadata: Metadata = { title: "Refund Policy | Y Hotels Signature", description: "Refund information for reservations at Y Hotels Signature.", alternates: { canonical: "/refund" } };
export default function RefundPage() { return <LegalContent slug="refund-policy" path="/refund" />; }
