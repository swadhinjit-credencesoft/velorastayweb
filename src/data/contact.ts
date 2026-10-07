import type { SectionContent, ContactInfo } from "@/types";

export const CONTACT_CONTENT: SectionContent = {
  eyebrow: "Get In Touch",
  heading: "Questions About Rooms, Rates, or Availability?",
  description:
    "Most guests reach us with a simple question: is a room free, and how much. Call the reservations line, send a WhatsApp message, or email us and we will answer directly rather than through a form that takes two days to reply to. The front desk is staffed 24 hours, 24×7, so there is always someone to reach — whether you are booking, arriving late, or already staying with us.",
};

export const CONTACT_INFO: ContactInfo[] = [
  {
    label: "Direct Phone",
    icon: "lucide:phone",
    value: "+91 9078922710",
    href: "tel:+919078922710",
    primary: true,
  },
  {
    label: "Phone & WhatsApp",
    icon: "lucide:phone-call",
    value: "+91 9437093094",
    href: "tel:+919437093094",
    primary: true,
  },
  {
    label: "WhatsApp",
    icon: "lucide:message-circle",
    value: "+91 9437093094",
    href: "https://api.whatsapp.com/send?phone=919437093094&text=*This%20is%20an%20Enquiry%20from%20%3A*%20The%20HotelMate%20Website%0AHotel%20Name%3A%20Bishnu%20Bhaban%2C%0AProperty%20Id%3A%203637%2C%0AexternalSite%3A%20WebSite%2C%0AAddress%3A%20West%20Gate%20of%20Jagannath%20Temple%2C%20Grand%20Road%2C%20Puri%2C%20Odisha%2C%20India",
    primary: true,
  },
  {
    label: "Email",
    icon: "lucide:mail",
    value: "Bishnubhabanpuri@gmail.com",
    href: "mailto:Bishnubhabanpuri@gmail.com",
    primary: true,
  },
  {
    label: "Address",
    icon: "lucide:map-pin",
    value: "West Gate of Shri Jagannath Temple, Grand Road, Puri, Odisha 752001",
    href: "https://maps.google.com/?q=Bishnu+Bhaban+West+Gate+of+Jagannath+Temple+Puri",
  },
  {
    label: "Front Desk Hours",
    icon: "lucide:clock",
    value: " 24×7",
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
    email: "Bishnubhabanpuri@gmail.com",
    phone: "+91 9078922710",
    description:
      "For any general questions about Bishnu Bhaban, our room types, amenities, or policies, our team is happy to help.",
  },
  {
    id: "dept-reservations",
    name: "Reservations",
    email: "Bishnubhabanpuri@gmail.com",
    phone: "+91 9078922710",
    description:
      "Our reservations team handles all booking-related queries including room availability, rate inquiries, group bookings, and special requests.",
  },
  {
    id: "dept-groups",
    name: "Group Bookings",
    email: "Bishnubhabanpuri@gmail.com",
    phone: "+91 9078922710",
    description:
      "Travelling as a family or a group, or with male guests only? Contact us a few days in advance so we can allocate rooms together and confirm the total rate.",
  },
  {
    id: "dept-feedback",
    name: "Feedback & Support",
    email: "Bishnubhabanpuri@gmail.com",
    phone: "+91 9078922710",
    description:
      "Your feedback helps us improve. Whether you want to share a positive experience or flag something that needs fixing, we take every comment seriously.",
  },
];
