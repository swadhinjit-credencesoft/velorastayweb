import type {
  NavGroup,
  NavLink,
  FooterGroup,
  SocialLink,
} from "@/types";

export const NAV_GROUPS: NavGroup[] = [
  {
    id: "nav-rooms",
    label: "Rooms",
    href: "/rooms",
    children: [
      {
        id: "nav-rooms-all",
        label: "All Rooms",
        href: "/rooms",
        description: "Browse our complete room collection",
        icon: "lucide:layout-grid",
      },
      {
        id: "nav-rooms-deluxe",
        label: "Deluxe Double Room",
        href: "/rooms/deluxe-double-room",
        description: "Comfortable stay for couples and solo travellers",
        icon: "lucide:bed-double",
      },
      {
        id: "nav-rooms-premium",
        label: "Premium Double Room",
        href: "/rooms/premium-double-room",
        description: "More space and added comfort",
        icon: "lucide:bed",
      },
      {
        id: "nav-rooms-city-view",
        label: "Premium Double with City View",
        href: "/rooms/premium-double-room-with-city-view",
        description: "Enjoy views of the city from your room",
        icon: "lucide:building-2",
      },
      {
        id: "nav-rooms-suite",
        label: "Triple Suite with Jacuzzi",
        href: "/rooms/triple-suite-with-jacuzzi",
        description: "Our signature suite for a relaxing stay",
        icon: "lucide:sparkles",
      },
    ],
  },
  {
    id: "nav-stay",
    label: "Stay",
    href: "/amenities",
    children: [
      {
        id: "nav-amenities",
        label: "Hotel Amenities",
        href: "/amenities",
        description: "Wi-Fi, air conditioning, 24-hour front desk and more",
        icon: "lucide:star",
      },
      {
        id: "nav-restaurant",
        label: "Restaurant",
        href: "/restaurant",
        description: "Indian & Chinese cuisine on-site",
        icon: "lucide:utensils",
      },
      {
        id: "nav-gallery",
        label: "Gallery",
        href: "/gallery",
        description: "A visual tour of our hotel",
        icon: "lucide:camera",
      },
    ],
  },
  {
    id: "nav-location",
    label: "Location",
    href: "/location",
    children: [
      {
        id: "nav-loc-overview",
        label: "Location & Directions",
        href: "/location",
        description: "Find us in Chuna Mandi, Paharganj",
        icon: "lucide:map-pin",
      },
      {
        id: "nav-loc-railway",
        label: "Near New Delhi Railway Station",
        href: "/hotel-near-new-delhi-railway-station",
        description: "Convenient for train travellers",
        icon: "lucide:train-front",
      },
      {
        id: "nav-loc-cp",
        label: "Near Connaught Place",
        href: "/hotel-near-connaught-place",
        description: "Central Delhi shopping and dining",
        icon: "lucide:building-2",
      },
      {
        id: "nav-loc-airport",
        label: "Near Delhi Airport",
        href: "/hotel-near-delhi-airport",
        description: "Ideal for airport travellers",
        icon: "lucide:plane",
      },
    ],
  },
  {
    id: "nav-more",
    label: "More",
    href: "/about",
    children: [
      {
        id: "nav-more-about",
        label: "About Us",
        href: "/about",
        description: "Welcome to The Queen's Head – Paharganj",
        icon: "lucide:info",
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
  { id: "nav-rooms", label: "Rooms", href: "/rooms" },
  { id: "nav-amenities", label: "Amenities", href: "/amenities" },
  { id: "nav-dining", label: "Restaurant", href: "/restaurant" },
  { id: "nav-location", label: "Location", href: "/location" },
  { id: "nav-contact", label: "Contact Us", href: "/contact" },
];

export const NAV_CTA = {
  label: "Book Now",
  href: "https://bookone.io/Hotel-The-Queen-S-Head-Delhi?bookingEngine=true",
  icon: "lucide:calendar-check",
};

export const FOOTER_GROUPS: FooterGroup[] = [
  {
    id: "footer-hotel",
    title: "Hotel",
    links: [
      { id: "footer-about", label: "About Us", href: "/about" },
      { id: "footer-rooms", label: "Our Rooms", href: "/rooms" },
      { id: "footer-amenities", label: "Amenities", href: "/amenities" },
      { id: "footer-restaurant", label: "Restaurant", href: "/restaurant" },
      { id: "footer-gallery", label: "Gallery", href: "/gallery" },
      { id: "footer-reviews", label: "Guest Reviews", href: "/reviews" },
    ],
  },
  {
    id: "footer-rooms",
    title: "Rooms & Rates",
    links: [
      { id: "footer-deluxe", label: "Deluxe Double Room", href: "/rooms/deluxe-double-room" },
      { id: "footer-premium", label: "Premium Double Room", href: "/rooms/premium-double-room" },
      { id: "footer-city", label: "Premium Double City View", href: "/rooms/premium-double-room-with-city-view" },
      { id: "footer-suite", label: "Triple Suite with Jacuzzi", href: "/rooms/triple-suite-with-jacuzzi" },
      { id: "footer-book", label: "Book Your Stay", href: "https://bookone.io/Hotel-The-Queen-S-Head-Delhi?bookingEngine=true" },
    ],
  },
  {
    id: "footer-location",
    title: "Location & Nearby",
    links: [
      { id: "footer-location-page", label: "Location & Directions", href: "/location" },
      { id: "footer-railway", label: "Near New Delhi Railway Station", href: "/hotel-near-new-delhi-railway-station" },
      { id: "footer-cp", label: "Near Connaught Place", href: "/hotel-near-connaught-place" },
      { id: "footer-airport", label: "Near Delhi Airport", href: "/hotel-near-delhi-airport" },
      { id: "footer-family", label: "Family Hotel in Paharganj", href: "/family-hotel-paharganj" },
      { id: "footer-business", label: "Business Hotel in Paharganj", href: "/business-hotel-paharganj" },
    ],
  },
  {
    id: "footer-support",
    title: "Support",
    links: [
      { id: "footer-contact", label: "Contact Us", href: "/contact" },
      { id: "footer-faq", label: "FAQs", href: "/faq" },
      { id: "footer-book", label: "Book Now", href: "https://bookone.io/Hotel-The-Queen-S-Head-Delhi?bookingEngine=true" },
    ],
  },
  {
    id: "footer-legal",
    title: "Legal",
    links: [
      { id: "footer-privacy", label: "Privacy Policy", href: "/legal/privacy-policy" },
      { id: "footer-terms", label: "Terms & Conditions", href: "/legal/terms-and-conditions" },
      { id: "footer-cancellation", label: "Cancellation Policy", href: "/legal/cancellation-policy" },
      { id: "footer-sitemap", label: "Sitemap", href: "/sitemap.xml" },
    ],
  },
];

export const FOOTER_SOCIAL: SocialLink[] = [
  {
    id: "footer-social-google",
    icon: "lucide:map-pin",
    href: "https://maps.google.com/?q=The+Queens+Head+Paharganj+New+Delhi",
    label: "Google Maps",
  },
];

export const FOOTER_CONTACT = {
  address:
    "2282–2285, Rajguru Marg, Chuna Mandi, Paharganj, New Delhi, Delhi 110055, India",
  phone: "+91 9899739777",
  email: "shivharehotelsandtravel@gmail.com",
  hours: "24-Hour Front Desk",
};

export const FOOTER_COPYRIGHT = `© ${new Date().getFullYear()} The Queen's Head – Paharganj. All rights reserved.`;
