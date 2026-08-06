import type {
  NavGroup,
  NavLink,
  FooterGroup,
  SocialLink,
} from "@/types";

export const NAV_GROUPS: NavGroup[] = [
  {
    id: "nav-villas",
    label: "The Villa",
    href: "/villas",
    children: [
      {
        id: "nav-villas-all",
        label: "All Villas",
        href: "/villas",
        description: "Browse our complete villa collection",
        icon: "lucide:layout-grid",
      },
      {
        id: "nav-villas-2bhk",
        label: "2 Villa",
        href: "/villas/2-bhk-villa",
        description: "Cozy choice for couples and small families",
        icon: "lucide:home",
      },
      {
        id: "nav-villas-4bhk",
        label: "4  Villa",
        href: "/villas/4-bhk-villa",
        description: "Intimate luxury for smaller groups",
        icon: "lucide:home",
      },
      {
        id: "nav-villas-5bhk",
        label: "5 Villa",
        href: "/villas/5-bhk-villa",
        description: "Perfect for families and friends",
        icon: "lucide:castle",
      },
      {
        id: "nav-villas-7bhk",
        label: "7 Grand Villa",
        href: "/villas/7-bhk-villa",
        description: "The ultimate group getaway",
        icon: "lucide:sparkles",
      },
    ],
  },
  {
    id: "nav-amenities",
    label: "Amenities",
    href: "/facilities",
    children: [
      {
        id: "nav-amenities-outdoor",
        label: "Outdoor & Pool",
        href: "/facilities#outdoor",
        description: "Private pool, lawn, and bonfire",
        icon: "lucide:sun",
      },
      {
        id: "nav-amenities-kitchen",
        label: " central kitchen",
        href: "/facilities#kitchen",
        description: " central kitchen and BBQ setup on requested",
        icon: "lucide:chef-hat",
      },
      {
        id: "nav-amenities-indoor",
        label: "Indoor Entertainment",
        href: "/facilities#indoor",
        description: "Smart TV, games, and music system",
        icon: "lucide:tv",
      },
    ],
  },
  {
    id: "nav-pawna",
    label: "Pawna Experience",
    href: "/nearby",
    children: [
      {
        id: "nav-pawna-lake",
        label: "Pawna Lake",
        href: "/nearby#pawna-lake",
        description: "Boating and lakeside activities",
        icon: "lucide:sailboat",
      },
      {
        id: "nav-pawna-forts",
        label: "Nearby Forts",
        href: "/nearby#forts",
        description: "Tikona, Lohagad, and Visapur forts",
        icon: "lucide:landmark",
      },
      {
        id: "nav-pawna-adventure",
        label: "Adventure Activities",
        href: "/nearby#adventure",
        description: "Trekking, paragliding, and more",
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
        description: "Visual tour of our villas and surroundings",
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
  { id: "nav-villas", label: "The Villa", href: "/villas" },
  { id: "nav-amenities", label: "Amenities", href: "/facilities" },
  { id: "nav-pawna", label: "Pawna Experience", href: "/nearby" },
  { id: "nav-gallery", label: "Gallery", href: "/gallery" },
  { id: "nav-contact", label: "Contact Us", href: "/contact" },
];

export const NAV_CTA = {
  label: "Book a Stay",
  href: "https://bookone.io/Velora-Stays?bookingEngine=true",
  icon: "lucide:calendar-check",
};

export const FOOTER_GROUPS: FooterGroup[] = [
  {
    id: "footer-villa",
    title: "Villas",
    links: [
      { id: "footer-about", label: "About Us", href: "/about" },
      { id: "footer-villas", label: "Our Villas", href: "/villas" },
      { id: "footer-amenities", label: "Amenities", href: "/facilities" },
      { id: "footer-gallery", label: "Gallery", href: "/gallery" },
      { id: "footer-reviews", label: "Guest Reviews", href: "/reviews" },
    ],
  },
  {
    id: "footer-villa-config",
    title: "Villa Configurations",
    links: [
      { id: "footer-2bhk", label: "2 Villa", href: "/villas/2-bhk-villa" },
      { id: "footer-4bhk", label: "4 Villa", href: "/villas/4-bhk-villa" },
      { id: "footer-5bhk", label: "5  Villa", href: "/villas/5-bhk-villa" },
      { id: "footer-7bhk", label: "7 Grand Villa", href: "/villas/7-bhk-villa" },
    ],
  },
  {
    id: "footer-experience",
    title: "Experience",
    links: [
      { id: "footer-pawna", label: "Pawna Lake", href: "/nearby" },
      { id: "footer-nearby", label: "Nearby Attractions", href: "/nearby#forts" },
      { id: "footer-adventure", label: "Adventure Activities", href: "/nearby#adventure" },
      { id: "footer-blog", label: "Travel Blog", href: "/blog" },
    ],
  },
  {
    id: "footer-support",
    title: "Support",
    links: [
      { id: "footer-contact", label: "Contact Us", href: "/contact" },
      { id: "footer-faq", label: "FAQs", href: "/faq" },
      { id: "footer-booking", label: "Book Now", href: "https://bookone.io/Velora-Stays?bookingEngine=true" },
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
    href: "https://www.instagram.com/the_explorerstays",
    label: "Instagram",
  },
  {
    id: "footer-social-facebook",
    icon: "lucide:facebook",
    href: "https://www.facebook.com/theexplorerstays",
    label: "Facebook",
  },
  {
    id: "footer-social-google",
    icon: "lucide:map-pin",
    href: "https://maps.google.com/?q=Velora+Stays+Pawna+Lake",
    label: "Google Business",
  },
];

export const FOOTER_CONTACT = {
  address:
    "Gevhande Apati, Near Pawna Lake, Lonavala, Maharashtra 410401, India",
  phone: "+91 7326079861",
  email: "reservation@thehotelmate.co",
  hours: "24/7 Guest Support",
};

export const FOOTER_COPYRIGHT = `© ${new Date().getFullYear()} Velora Stays by D c developers. All rights reserved.`;
