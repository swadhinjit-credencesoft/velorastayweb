import type {
  NavGroup,
  NavLink,
  FooterGroup,
  SocialLink,
} from "@/types";

export const NAV_GROUPS: NavGroup[] = [
  {
    id: "nav-villas",
    label: "Our Rooms",
    href: "/villas",
    children: [
      {
        id: "nav-villas-all",
        label: "All Rooms",
        href: "/villas",
        description: "Browse our complete room collection",
        icon: "lucide:layout-grid",
      },
      {
        id: "nav-villas-standard",
        label: "Standard Room",
        href: "/villas/standard-room",
        description: "Best value for couples and solo travellers",
        icon: "lucide:bed",
      },
      {
        id: "nav-villas-deluxe",
        label: "Deluxe Room",
        href: "/villas/deluxe-room",
        description: "More space for longer stays",
        icon: "lucide:bed-double",
      },
      {
        id: "nav-villas-multibed",
        label: "Multi-Bed Room",
        href: "/villas/multi-bed-room",
        description: "Sleeps up to six, best for groups",
        icon: "lucide:users",
      },
    ],
  },
  {
    id: "nav-amenities",
    label: "Amenities",
    href: "/facilities",
    children: [
      {
        id: "nav-amenities-basics",
        label: "Room Basics",
        href: "/facilities#basic",
        description: "AC, hot water, WiFi, and attached bath",
        icon: "lucide:wind",
      },
      {
        id: "nav-amenities-service",
        label: "Services",
        href: "/facilities#service",
        description: "24-hour desk, housekeeping, luggage storage",
        icon: "lucide:concierge-bell",
      },
      {
        id: "nav-amenities-dining",
        label: "In-House Restaurant",
        href: "/facilities#kitchen",
        description: "Odia home cooking and meal plans",
        icon: "lucide:utensils",
      },
      {
        id: "nav-amenities-menu",
        label: "Food Menu & Packages",
        href: "/food-menu",
        description: "Meal packages and à la carte",
        icon: "lucide:book-open",
      },
    ],
  },
  {
    id: "nav-puri",
    label: "Puri Experience",
    href: "/nearby",
    children: [
      {
        id: "nav-puri-temple",
        label: "Temples",
        href: "/nearby#temple",
        description: "Jagannath and Vimala temple darshan",
        icon: "lucide:landmark",
      },
      {
        id: "nav-puri-beach",
        label: "Beaches",
        href: "/nearby#beach",
        description: "Puri Beach and quieter Chandrabhaga",
        icon: "lucide:waves",
      },
      {
        id: "nav-puri-daytrips",
        label: "Day Trips",
        href: "/nearby#heritage",
        description: "Konark, Dhauli, and Chilika Lake",
        icon: "lucide:compass",
      },
    ],
  },
  {
    id: "nav-more",
    label: "More",
    href: "/gallery",
    children: [
      {
        id: "nav-more-gallery",
        label: "Gallery",
        href: "/gallery",
        description: "Visual tour of our rooms and surroundings",
        icon: "lucide:camera",
      },
      {
        id: "nav-more-reviews",
        label: "Reviews",
        href: "/reviews",
        description: "What our guests are saying",
        icon: "lucide:star",
      },
      {
        id: "nav-more-faq",
        label: "FAQ",
        href: "/faq",
        description: "Frequently asked questions",
        icon: "lucide:help-circle",
      },
      {
        id: "nav-more-contact",
        label: "Contact",
        href: "/contact",
        description: "Get in touch with us",
        icon: "lucide:mail",
      },
    ],
  },
];

export const NAV_LINKS: NavLink[] = [
  { id: "nav-home", label: "Home", href: "/" },
  { id: "nav-villas", label: "Our Rooms", href: "/villas" },
  { id: "nav-amenities", label: "Amenities", href: "/facilities" },
  { id: "nav-puri", label: "Puri Experience", href: "/nearby" },
  { id: "nav-gallery", label: "Gallery", href: "/gallery" },
  { id: "nav-contact", label: "Contact Us", href: "/contact" },
];

export const NAV_CTA = {
  label: "Book a Stay",
  href: "https://bookone.io/Bishnu-Bhavan?bookingEngine=true",
  icon: "lucide:calendar-check",
};

export const FOOTER_GROUPS: FooterGroup[] = [
  {
    id: "footer-villa",
    title: "Rooms",
    links: [
      { id: "footer-about", label: "About Us", href: "/about" },
      { id: "footer-villas", label: "Our Rooms", href: "/villas" },
      { id: "footer-amenities", label: "Amenities", href: "/facilities" },
      { id: "footer-dining", label: "Food Menu & Packages", href: "/food-menu" },
      { id: "footer-gallery", label: "Gallery", href: "/gallery" },
      { id: "footer-reviews", label: "Guest Reviews", href: "/reviews" },
    ],
  },
  {
    id: "footer-villa-config",
    title: "Room Types",
    links: [
      { id: "footer-standard", label: "Standard Room", href: "/villas/standard-room" },
      { id: "footer-deluxe", label: "Deluxe Room", href: "/villas/deluxe-room" },
      { id: "footer-multibed", label: "Multi-Bed Room", href: "/villas/multi-bed-room" },
    ],
  },
  {
    id: "footer-experience",
    title: "Puri Experience",
    links: [
      { id: "footer-temple", label: "Jagannath Temple", href: "/nearby" },
      { id: "footer-nearby", label: "Nearby Attractions", href: "/nearby#beach" },
      { id: "footer-adventure", label: "Day Trips", href: "/nearby#heritage" },
      { id: "footer-blog", label: "Travel Blog", href: "/blog" },
    ],
  },
  {
    id: "footer-support",
    title: "Support",
    links: [
      { id: "footer-contact", label: "Contact Us", href: "/contact" },
      { id: "footer-faq", label: "FAQs", href: "/faq" },
      { id: "footer-booking", label: "Book Now", href: "https://bookone.io/Bishnu-Bhavan?bookingEngine=true" },
      { id: "footer-cancellation", label: "Cancellation Policy", href: "/faq#cancellation" },
    ],
  },
  {
    id: "footer-legal",
    title: "Legal",
    links: [
      { id: "footer-privacy", label: "Privacy Policy", href: "/privacy" },
      { id: "footer-terms", label: "Terms & Conditions", href: "/terms" },
      { id: "footer-refund", label: "Refund Policy", href: "/refund" },
      { id: "footer-sitemap", label: "Sitemap", href: "/sitemap.xml" },
    ],
  },
];

export const FOOTER_SOCIAL: SocialLink[] = [
  {
    id: "footer-social-instagram",
    icon: "lucide:instagram",
    href: "https://www.instagram.com/bishnubhaban",
    label: "Instagram",
  },
  {
    id: "footer-social-facebook",
    icon: "lucide:facebook",
    href: "https://www.facebook.com/bishnubhaban",
    label: "Facebook",
  },
  {
    id: "footer-social-google",
    icon: "lucide:map-pin",
    href: "https://maps.google.com/?q=Bishnu+Bhaban+West+Gate+of+Jagannath+Temple+Puri",
    label: "Google Business",
  },
];

export const FOOTER_CONTACT = {
  address:
    "West Gate of Jagannath Temple, Grand Road, Puri, Odisha 752001, India",
  phone: "+91 9078922710",
  email: "reservation@thehotelmate.co",
  hours: "Reception 7:00 AM – 11:00 PM",
};

export const FOOTER_COPYRIGHT = `© ${new Date().getFullYear()} Bishnu Bhaban by D c developers. All rights reserved.`;
