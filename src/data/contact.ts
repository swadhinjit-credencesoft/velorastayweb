import type { SectionContent, ContactInfo } from "@/types";

export const CONTACT_CONTENT: SectionContent = {
  eyebrow: "Contact Us",
  heading: "Contact Hotel Yogiraj – Shirdi",
  description:
    "Call, WhatsApp or email us for bookings, enquiries or assistance. Our 24-hour front desk is always happy to help pilgrims and travellers.",
};

export const CONTACT_INFO: ContactInfo[] = [
  {
    label: "Address",
    icon: "lucide:map-pin",
    value: "Pimpalwadi Rd, near Sai Baba Temple, Shiv Nagar, Shirdi, Maharashtra 423109",
    href: "https://maps.google.com/?q=Hotel+Yogiraj+Shirdi+Maharashtra",
    primary: true,
  },
  {
    label: "Reservations",
    icon: "lucide:phone",
    value: "+91 95955 33535",
    href: "tel:+919595533535",
    primary: true,
  },
  {
    label: "WhatsApp",
    icon: "lucide:message-circle",
    value: "+91 95955 33535",
    href: "https://api.whatsapp.com/send?phone=919595533535&text=Hello%20Hotel%20Yogiraj%20Shirdi%2C%20I%20would%20like%20to%20enquire%20about%20a%20booking.",
  },
  {
    label: "Email",
    icon: "lucide:mail",
    value: "info@yogirajhotel.com",
    href: "mailto:info@yogirajhotel.com",
  },
  {
    label: "Front Desk",
    icon: "lucide:clock",
    value: "Open 24 hours",
    href: "",
  },
];

export interface Department {
  id: string;
  name: string;
  description: string;
  email: string;
  phone: string;
}

export const CONTACT_DEPARTMENT: Department[] = [
  {
    id: "dept-reservations",
    name: "Reservations",
    description: "Bookings, availability and room rates",
    email: "info@yogirajhotel.com",
    phone: "+91 95955 33535",
  },
  {
    id: "dept-frontdesk",
    name: "Front Desk",
    description: "Check-in, check-out and stay assistance (24 hours)",
    email: "info@yogirajhotel.com",
    phone: "+91 95955 33535",
  },
  {
    id: "dept-restaurant",
    name: "Restaurant",
    description: "Dining, meal plans and special requests",
    email: "info@yogirajhotel.com",
    phone: "+91 95955 33535",
  },
  {
    id: "dept-travel",
    name: "Temple & Travel",
    description: "Sai Baba Temple guidance, sightseeing, taxis and airport transfers",
    email: "info@yogirajhotel.com",
    phone: "+91 95955 33535",
  },
];
