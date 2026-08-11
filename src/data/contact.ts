import type { SectionContent, ContactInfo } from "@/types";

export const CONTACT_CONTENT: SectionContent = {
  eyebrow: "Contact Us",
  heading: "Contact The Queen's Head – Paharganj",
  description:
    "Call, WhatsApp or email us for bookings, enquiries or assistance. Our 24-hour front desk is always happy to help.",
};

export const CONTACT_INFO: ContactInfo[] = [
  {
    label: "Address",
    icon: "lucide:map-pin",
    value: "2282–2285, Rajguru Marg, Chuna Mandi, Paharganj, New Delhi, Delhi 110055",
    href: "https://maps.google.com/?q=The+Queens+Head+Paharganj+New+Delhi",
    primary: true,
  },
  {
    label: "Reservations",
    icon: "lucide:phone",
    value: "+91 9899739777",
    href: "tel:+919899739777",
    primary: true,
  },
  {
    label: "WhatsApp",
    icon: "lucide:message-circle",
    value: "+91 9899739777",
    href: "https://api.whatsapp.com/send?phone=919899739777&text=Hello%20The%20Queen's%20Head%20%E2%80%93%20Paharganj%2C%20I%20would%20like%20to%20enquire%20about%20a%20booking.",
  },
  {
    label: "Email",
    icon: "lucide:mail",
    value: "shivharehotelsandtravel@gmail.com",
    href: "mailto:shivharehotelsandtravel@gmail.com",
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
    email: "shivharehotelsandtravel@gmail.com",
    phone: "+91 9899739777",
  },
  {
    id: "dept-frontdesk",
    name: "Front Desk",
    description: "Check-in, check-out and stay assistance (24 hours)",
    email: "shivharehotelsandtravel@gmail.com",
    phone: "+91 9899739777",
  },
  {
    id: "dept-restaurant",
    name: "Restaurant",
    description: "Dining, meal plans and special requests",
    email: "shivharehotelsandtravel@gmail.com",
    phone: "+91 9899739777",
  },
  {
    id: "dept-travel",
    name: "Tours & Travel",
    description: "Sightseeing, taxis and airport transfers",
    email: "shivharehotelsandtravel@gmail.com",
    phone: "+91 9899739777",
  },
];
