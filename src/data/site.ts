import type {
  SiteInfo,
  SocialLinks,
  HeroSlide,
  HeroStat,
  SocialLink,
  TrustBadge,
  NavLink,
} from "@/types";

export const SITE_INFO: SiteInfo = {
  name: "Velora Stays",
  tagline: "Luxury Villas Near Pawna Lake",
  description:
    "Velora Stays by The Explorer Stays offers premium luxury villas with private pools near Pawna Lake, Lonavala. Featuring 4 BHK, 5 BHK, and 7 BHK configurations with stunning mountain and lake views, perfect for family reunions, corporate retreats, and weekend getaways.",
  url: "https://velorastays.in",
  phone: "+91 9324248001",
  whatsapp: "+91 9324248001",
  email: "info@velorastays.in",
  address: {
    street: "Gevhande Apati",
    area: "Near Pawna Lake",
    city: "Lonavala",
    state: "Maharashtra",
    pincode: "410401",
    country: "India",
    full:
      "Gevhande Apati, Near Pawna Lake, Lonavala, Maharashtra 410401, India",
  },
  geo: {
    latitude: 18.7466,
    longitude: 73.4833,
  },
  checkIn: "2:00 PM",
  checkOut: "11:00 AM",
  rating: 5.0,
  reviewCount: 47,
};

export const SOCIAL_LINKS: SocialLinks = {
  facebook: "https://www.facebook.com/theexplorerstays",
  instagram: "https://www.instagram.com/the_explorerstays",
  twitter: "",
  youtube: "",
  tripadvisor: "",
  google: "https://maps.google.com/?q=Velora+Stays+Pawna+Lake",
};

export const SITE_ASSETS = {
  heroImages: [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
  ] as const,
  logo: "/images/logo.svg",
  logoLight: "/images/logo-light.svg",
  favicon: "/favicon.ico",
  aboutImage: "/whychooseus.jpeg",
  roomsPreviewImage:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
  diningImage:
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070",
  eventsImage:
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2070",
  contactMapImage:
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200",
  testimonialBackground:
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070",
  notFoundImage:
    "https://images.unsplash.com/photo-1586611292717-f828b167408c?q=80&w=1200",
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "hero-slide-1",
    image: "/heroimg1.jpeg",
    title: "Luxury Villa Staycation at Pawna Dam",
    subtitle:
      "Experience an exclusive private oasis featuring 4, 5, and 7 BHK configurations with stunning mountain views.",
    cta: { label: "Check Availability", href: "/contact" },
  },
  {
    id: "hero-slide-2",
    image: "/heroimg2.jpeg",
    title: "Your Private Gateway in Lonavala",
    subtitle:
      "Discover premium villas with private pools, breathtaking lake views, and world-class hospitality by The Explorer Stays.",
    cta: { label: "Explore Villas", href: "/villas" },
  },
  {
    id: "hero-slide-3",
    image: "/heroimg3.jpeg",
    title: "Experience Luxury by the Lake",
    subtitle:
      "From private swimming pools to bonfire evenings, every moment at Velora Stays is crafted for unforgettable memories.",
    cta: { label: "View Amenities", href: "/facilities" },
  },
];

export const HERO_STATS: HeroStat[] = [
  {
    id: "stat-reviews",
    value: "50+",
    label: "Verified Reviews",
    icon: "lucide:message-square",
  },
  {
    id: "stat-rating",
    value: "5.0",
    label: "Google Rating",
    icon: "lucide:star",
  },
  {
    id: "stat-guests",
    value: "500+",
    label: "Happy Guests",
    icon: "lucide:users",
  },
  {
    id: "stat-support",
    value: "24/7",
    label: "Guest Support",
    icon: "lucide:headphones",
  },
];

export const HERO_SOCIAL_LINKS: SocialLink[] = [
  {
    id: "social-instagram",
    icon: "lucide:instagram",
    href: SOCIAL_LINKS.instagram,
    label: "Instagram",
  },
  {
    id: "social-facebook",
    icon: "lucide:facebook",
    href: SOCIAL_LINKS.facebook,
    label: "Facebook",
  },
  {
    id: "social-google",
    icon: "lucide:map-pin",
    href: SOCIAL_LINKS.google,
    label: "Google",
  },
];

export const TRUST_BADGES: TrustBadge[] = [
  {
    id: "badge-pool",
    icon: "lucide:waves",
    label: "Private Pool",
    value: "Exclusive Access",
  },
  {
    id: "badge-view",
    icon: "lucide:mountain",
    label: "Lake & Mountain View",
    value: "Scenic Location",
  },
  {
    id: "badge-wifi",
    icon: "lucide:wifi",
    label: "Free WiFi",
    value: "High-Speed",
  },
  {
    id: "badge-parking",
    icon: "lucide:car",
    label: "Secure Parking",
    value: "Free On-site",
  },
  {
    id: "badge-support",
    icon: "lucide:headphones",
    label: "24/7 Support",
    value: "Always Available",
  },
  {
    id: "badge-managed",
    icon: "lucide:shield-check",
    label: "Managed By",
    value: "The Explorer Stays",
  },
];

const whatsappPhone = SITE_INFO.whatsapp.replace(/\s+/g, "").replace("+", "");
const whatsappMessage = [
  "This is an Enquiry from: Velora Stays Website",
  `Hotel Name: ${SITE_INFO.name}`,
  `Phone: ${SITE_INFO.phone}`,
  `Address: ${SITE_INFO.address.full}`,
].join("\n");
export const WHATSAPP_LINK = `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(whatsappMessage)}`;

export const GOOGLE_MAPS_URL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0!2d${SITE_INFO.geo.longitude}!3d${SITE_INFO.geo.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(SITE_INFO.address.full)}!5e0!3m2!1sen!2sin!4v1700000000000`;

export const NAV_LINKS: NavLink[] = [
  { id: "nav-home", label: "Home", href: "/" },
  { id: "nav-villas", label: "The Villa", href: "/villas" },
  { id: "nav-amenities", label: "Amenities", href: "/facilities" },
  { id: "nav-pawna", label: "Pawna Experience", href: "/nearby" },
  { id: "nav-gallery", label: "Gallery", href: "/gallery" },
  { id: "nav-contact", label: "Contact Us", href: "/contact" },
];

export const BOOKING_URL = "https://bookone.io/Velora-Stays?bookingEngine=true";

export const NAV_CTA = {
  label: "Check Availability",
  href: "https://bookone.io/Velora-Stays?bookingEngine=true",
  icon: "lucide:calendar-check",
};
