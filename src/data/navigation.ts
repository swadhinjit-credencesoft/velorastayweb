import type {
  NavGroup,
  NavLink,
  FooterGroup,
  SocialLink,
} from "@/types";
import { BOOKING_ENGINE_URL } from "@/config";

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
        id: "nav-rooms-double-na",
        label: "Double Bed Non-AC Room",
        href: "/rooms/double-bed-non-ac-room",
        description: "Budget stay for couples",
        icon: "lucide:bed-double",
      },
      {
        id: "nav-rooms-double",
        label: "Double Bed Room",
        href: "/rooms/double-bed-room",
        description: "Comfortable stay for two",
        icon: "lucide:bed",
      },
      {
        id: "nav-rooms-triple",
        label: "Triple Bed AC Room",
        href: "/rooms/triple-bed-ac-room",
        description: "Cool comfort for families and groups",
        icon: "lucide:bed-double",
      },
      {
        id: "nav-rooms-four",
        label: "Four Bed AC Room",
        href: "/rooms/four-bed-ac-room",
        description: "Spacious family room",
        icon: "lucide:users",
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
        description: "Free Wi-Fi, restaurant, parking and more",
        icon: "lucide:star",
      },
      {
        id: "nav-restaurant",
        label: "Restaurant",
        href: "/restaurant",
        description: "Vegetarian dining & breakfast buffet",
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
        description: "Find us near Sai Baba Temple, Shirdi",
        icon: "lucide:map-pin",
      },
      {
        id: "nav-loc-temple",
        label: "Hotel Near Sai Baba Temple",
        href: "/hotel-near-sai-baba-temple",
        description: "Just minutes from the temple",
        icon: "lucide:landmark",
      },
      {
        id: "nav-loc-shirdi",
        label: "Hotel in Shirdi",
        href: "/hotel-in-shirdi",
        description: "Central Shirdi accommodation",
        icon: "lucide:building-2",
      },
      {
        id: "nav-loc-bus",
        label: "Near Shirdi Bus Station",
        href: "/hotel-near-shirdi-bus-station",
        description: "Convenient for bus travellers",
        icon: "lucide:bus",
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
        description: "Welcome to Hotel Yogiraj",
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
  href: `${BOOKING_ENGINE_URL}?bookingEngine=true`,
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
      { id: "footer-double-na", label: "Double Bed Non-AC Room", href: "/rooms/double-bed-non-ac-room" },
      { id: "footer-double", label: "Double Bed Room", href: "/rooms/double-bed-room" },
      { id: "footer-triple", label: "Triple Bed AC Room", href: "/rooms/triple-bed-ac-room" },
      { id: "footer-four", label: "Four Bed AC Room", href: "/rooms/four-bed-ac-room" },
      { id: "footer-book", label: "Book Your Stay", href: `${BOOKING_ENGINE_URL}?bookingEngine=true` },
    ],
  },
  {
    id: "footer-location",
    title: "Location & Nearby",
    links: [
      { id: "footer-location-page", label: "Location & Directions", href: "/location" },
      { id: "footer-temple", label: "Hotel Near Sai Baba Temple", href: "/hotel-near-sai-baba-temple" },
      { id: "footer-shirdi", label: "Hotel in Shirdi", href: "/hotel-in-shirdi" },
      { id: "footer-bus", label: "Near Shirdi Bus Station", href: "/hotel-near-shirdi-bus-station" },
      { id: "footer-family", label: "Family Hotel in Shirdi", href: "/family-hotel-shirdi" },
      { id: "footer-pilgrim", label: "Hotel for Sai Baba Pilgrims", href: "/hotel-for-sai-baba-pilgrims" },
    ],
  },
  {
    id: "footer-support",
    title: "Support",
    links: [
      { id: "footer-contact", label: "Contact Us", href: "/contact" },
      { id: "footer-faq", label: "FAQs", href: "/faq" },
      { id: "footer-book", label: "Book Now", href: `${BOOKING_ENGINE_URL}?bookingEngine=true` },
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
    href: "https://maps.google.com/?q=Hotel+Yogiraj+Shirdi+Maharashtra",
    label: "Google Maps",
  },
];

export const FOOTER_CONTACT = {
  address:
    "Pimpalwadi Rd, near Sai Baba Temple, Shiv Nagar, Shirdi, Maharashtra 423109, India",
  phone: "+91 95955 33535",
  email: "info@yogirajhotel.com",
  hours: "24-Hour Front Desk",
};

export const FOOTER_COPYRIGHT = `© ${new Date().getFullYear()} Hotel Yogiraj, Shirdi. All rights reserved.`;
