import type { NavGroup, NavLink, FooterGroup, SocialLink } from "@/types";

export const NAV_GROUPS: NavGroup[] = [
  { id: "nav-rooms", label: "Rooms", href: "/rooms", children: [
    { id: "all-rooms", label: "All rooms", href: "/rooms", description: "Browse all three room categories", icon: "lucide:layout-grid" },
    { id: "deluxe", label: "Deluxe", href: "/rooms/deluxe", description: "12 rooms · up to 2 adults + 1 child", icon: "lucide:bed-double" },
    { id: "super-deluxe", label: "Super Deluxe", href: "/rooms/super-deluxe", description: "10 rooms · up to 3 adults + 1 child", icon: "lucide:bed-double" },
    { id: "executive", label: "Executive", href: "/rooms/executive", description: "12 rooms · up to 4 adults + 1 child", icon: "lucide:bed-double" },
  ] },
  { id: "nav-property", label: "Hotel", href: "/about", children: [
    { id: "about", label: "About Y Hotels Signature", href: "/about", icon: "lucide:building-2" },
    { id: "gallery", label: "Room gallery", href: "/gallery", icon: "lucide:images" },
    { id: "dining", label: "Dining and food guide", href: "/dining", icon: "lucide:utensils" },
    { id: "events", label: "Groups and local events", href: "/events", icon: "lucide:calendar-days" },
    { id: "explore", label: "Explore Jharsuguda", href: "/explore", icon: "lucide:map" },
    { id: "rates", label: "Rates and meal plans", href: "/offers", icon: "lucide:indian-rupee" },
    { id: "blog", label: "Stay information", href: "/blog", icon: "lucide:notebook-text" },
    { id: "facilities", label: "Facilities", href: "/facilities", icon: "lucide:concierge-bell" },
    { id: "faq", label: "FAQs", href: "/faq", icon: "lucide:help-circle" },
    { id: "contact", label: "Contact", href: "/contact", icon: "lucide:phone" },
  ] },
];

export const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "rooms", label: "Rooms", href: "/rooms" },
  { id: "dining", label: "Dining", href: "/dining" },
  { id: "explore", label: "Explore", href: "/explore" },
  { id: "events", label: "Events", href: "/events" },
  { id: "facilities", label: "Facilities", href: "/facilities" },
  { id: "contact", label: "Contact", href: "/contact" },
];
export const BOOKING_URL = "tel:+919124674120";
export const NAV_CTA = { label: "Call to Book", href: "tel:+919124674120", icon: "lucide:phone" };

export const FOOTER_GROUPS: FooterGroup[] = [
  { id: "hotel", title: "Y Hotels Signature", links: [
    { id: "about", label: "About", href: "/about" },
    { id: "facilities", label: "Facilities", href: "/facilities" },
    { id: "faq", label: "FAQs", href: "/faq" },
    { id: "gallery", label: "Room gallery", href: "/gallery" },
    { id: "dining", label: "Dining and food guide", href: "/dining" },
    { id: "events", label: "Groups and local events", href: "/events" },
    { id: "explore", label: "Explore Jharsuguda", href: "/explore" },
    { id: "rates", label: "Rates and meal plans", href: "/offers" },
    { id: "blog", label: "Stay information", href: "/blog" },
    { id: "contact", label: "Contact", href: "/contact" },
  ] },
  { id: "rooms", title: "Rooms", links: [
    { id: "all", label: "All rooms", href: "/rooms" },
    { id: "deluxe", label: "Deluxe", href: "/rooms/deluxe" },
    { id: "super", label: "Super Deluxe", href: "/rooms/super-deluxe" },
    { id: "executive", label: "Executive", href: "/rooms/executive" },
  ] },
  { id: "policies", title: "Information", links: [
    { id: "privacy", label: "Privacy Policy", href: "/privacy" },
    { id: "terms", label: "Terms & Conditions", href: "/terms" },
    { id: "refund", label: "Refund Policy", href: "/refund" },
    { id: "sitemap", label: "Sitemap", href: "/sitemap.xml" },
  ] },
];
export const FOOTER_SOCIAL: SocialLink[] = [];
export const FOOTER_CONTACT = { address: "Mangalam Tower, Sarbahal Road, Marwari Para, Jharsuguda, Odisha 768201", phone: "+91 9124674120", email: "connect@yhotels.in", hours: "Contact the hotel for assistance" };
