import type { SectionContent, ContactInfo } from "@/types";

export const CONTACT_CONTENT: SectionContent = {
  eyebrow: "Get In Touch",
  heading: "Plan Your Next Getaway With Us",
  description:
    "Have questions about our pricing, flexible villa configurations, or want to host a private event? Our team is here to assist you. Reach out to us through any of the channels below and we will get back to you as quickly as possible.",
};

export const CONTACT_INFO: ContactInfo[] = [
  {
    label: "Direct Phone",
    icon: "lucide:phone",
    value: "+91 9324248001",
    href: "tel:+919324248001",
    primary: true,
  },
  {
    label: "WhatsApp",
    icon: "lucide:message-circle",
    value: "+91 9324248001",
    href: "https://api.whatsapp.com/send?phone=919324248001&text=This%20is%20an%20Enquiry%20from%3A%20Velora%20Stays%20Website",
    primary: true,
  },
  {
    label: "Email",
    icon: "lucide:mail",
    value: "reservation@thehotelmate.co",
    href: "mailto:reservation@thehotelmate.co",
    primary: true,
  },
  {
    label: "Address",
    icon: "lucide:map-pin",
    value: "Gevhande Apati, Near Pawna Lake, Lonavala, Maharashtra 410401",
    href: "https://maps.google.com/?q=Velora+Stays+Pawna+Lake+Lonavala",
  },
  {
    label: "Working Hours",
    icon: "lucide:clock",
    value: "24/7 Guest Support",
    href: "#",
  },
];

export interface Department {
  id: string;
  name: string;
  email: string;
  phone: string;
  description: string;
}

export const CONTACT_DEPARTMENT: Department[] = [
  {
    id: "dept-general",
    name: "General Enquiries",
    email: "reservation@thehotelmate.co",
    phone: "+91 9324248001",
    description:
      "For any general questions about Velora Stays, our villa configurations, amenities, or policies, our team is happy to help.",
  },
  {
    id: "dept-reservations",
    name: "Reservations",
    email: "reservation@thehotelmate.co",
    phone: "+91 9324248001",
    description:
      "Our dedicated reservations team handles all booking-related queries including villa availability, rate inquiries, and special requests.",
  },
  {
    id: "dept-events",
    name: "Events & Celebrations",
    email: "reservation@thehotelmate.co",
    phone: "+91 9324248001",
    description:
      "From birthday celebrations to corporate retreats, our team will help you plan and execute a memorable occasion at our villa.",
  },
  {
    id: "dept-feedback",
    name: "Feedback & Support",
    email: "reservation@thehotelmate.co",
    phone: "+91 9324248001",
    description:
      "Your feedback helps us improve. Whether you want to share a positive experience or suggest improvements, we take every comment seriously.",
  },
];
