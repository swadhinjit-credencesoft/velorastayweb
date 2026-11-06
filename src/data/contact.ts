import type { SectionContent, ContactInfo } from "@/types";
import { SITE_INFO } from "@/data/site";

export const CONTACT_CONTENT: SectionContent = {
  eyebrow: "Contact Y Hotels Signature",
  heading: "Speak with our hotel team",
  description: "Call either of our published hotel numbers or email us to check room availability, meal plans and rates.",
};

export const CONTACT_INFO: ContactInfo[] = [
  { label: "Official Phone", icon: "lucide:phone", value: SITE_INFO.phone, href: "tel:+919124674120", primary: true },
  { label: "Listing Phone", icon: "lucide:phone-call", value: SITE_INFO.listingPhone, href: "tel:+918455007740", primary: true },
  { label: "Email", icon: "lucide:mail", value: SITE_INFO.email, href: `mailto:${SITE_INFO.email}`, primary: true },
  { label: "Address", icon: "lucide:map-pin", value: SITE_INFO.address.full, href: "https://maps.app.goo.gl/DEUPd3JSVoRDQDLv6" },
  { label: "Check-in / Check-out", icon: "lucide:clock", value: `${SITE_INFO.checkIn} / ${SITE_INFO.checkOut}`, href: "#" },
];

export interface Department { id: string; name: string; email: string; phone: string; description: string; }
export const CONTACT_DEPARTMENT: Department[] = [
  { id: "dept-general", name: "General Enquiries", email: SITE_INFO.email, phone: SITE_INFO.phone, description: "For questions about the hotel, facilities or your stay." },
  { id: "dept-reservations", name: "Reservations", email: SITE_INFO.email, phone: SITE_INFO.phone, description: "Ask about dates, room categories, occupancy and meal plans." },
];
