import type {
  NavGroup,
  NavLink,
  FooterGroup,
  SocialLink,
} from "@/types";
import { NX_BOOKING_URL } from "@/config";

export const NX_NAV_GROUPS: NavGroup[] = [
  {
    id: "nav-rooms",
    label: "Rooms",
    href: "/yogiraj-nx/rooms",
    children: [
      {
        id: "nav-rooms-all",
        label: "All Rooms",
        href: "/yogiraj-nx/rooms",
        description: "Browse our complete room collection",
        icon: "lucide:layout-grid",
      },
      {
        id: "nav-rooms-double-ac",
        label: "Double Bed AC",
        href: "/yogiraj-nx/rooms/double-bed-ac",
        description: "Comfortable AC room with double bed",
        icon: "lucide:bed",
      },
      {
        id: "nav-rooms-triple-ac",
        label: "Triple Bed AC",
        href: "/yogiraj-nx/rooms/triple-bed-ac",
        description: "Spacious AC room for 3 guests",
        icon: "lucide:bed-double",
      },
      {
        id: "nav-rooms-suite",
        label: "Suite Room With Bathtub",
        href: "/yogiraj-nx/rooms/suite-room-with-bathtub",
        description: "Luxury suite featuring a private bathtub",
        icon: "lucide:bath",
      },
      {
        id: "nav-rooms-six-bed",
        label: "Six-Bedroom With 2 Washrooms",
        href: "/yogiraj-nx/rooms/six-bedroom-with-2-washrooms",
        description: "Large group & family suite with 2 washrooms",
        icon: "lucide:users",
      },
    ],
  },
  {
    id: "nav-stay",
    label: "Stay",
    href: "/yogiraj-nx/amenities",
    children: [
      {
        id: "nav-amenities",
        label: "Hotel Amenities",
        href: "/yogiraj-nx/amenities",
        description: "Free Wi-Fi, restaurant, parking and more",
        icon: "lucide:star",
      },
      {
        id: "nav-restaurant",
        label: "Restaurant",
        href: "/yogiraj-nx/restaurant",
        description: "Vegetarian dining & breakfast buffet",
        icon: "lucide:utensils",
      },
      {
        id: "nav-gallery",
        label: "Gallery",
        href: "/yogiraj-nx/gallery",
        description: "A visual tour of our hotel",
        icon: "lucide:camera",
      },
    ],
  },
  {
    id: "nav-location",
    label: "Location",
    href: "/yogiraj-nx/location",
    children: [
      {
        id: "nav-loc-overview",
        label: "Location & Directions",
        href: "/yogiraj-nx/location",
        description: "Find us in Shirdi, near the temple",
        icon: "lucide:map-pin",
      },
      {
        id: "nav-loc-temple",
        label: "Sai Baba Temple",
        href: "/yogiraj-nx/hotel-near-sai-baba-temple",
        description: "Just a short walk from the hotel",
        icon: "lucide:landmark",
      },
      {
        id: "nav-loc-bus",
        label: "Shirdi Bus Station",
        href: "/yogiraj-nx/hotel-near-shirdi-bus-station",
        description: "Approx. 200 m from the hotel",
        icon: "lucide:bus",
      },
      {
        id: "nav-loc-airport",
        label: "Shirdi Airport",
        href: "/yogiraj-nx/hotel-near-shirdi-airport",
        description: "Approx. 14 km (25-30 min drive)",
        icon: "lucide:plane",
      },
    ],
  },
  {
    id: "nav-info",
    label: "About",
    href: "/yogiraj-nx/about",
    children: [
      {
        id: "nav-about",
        label: "About Hotel Yogiraj NX",
        href: "/yogiraj-nx/about",
        description: "Our story, mission & hospitality",
        icon: "lucide:info",
      },
      {
        id: "nav-reviews",
        label: "Guest Reviews",
        href: "/yogiraj-nx/reviews",
        description: "See ratings & what our guests say",
        icon: "lucide:message-square",
      },
      {
        id: "nav-faq",
        label: "FAQ",
        href: "/yogiraj-nx/faq",
        description: "Common questions about staying with us",
        icon: "lucide:help-circle",
      },
      {
        id: "nav-contact",
        label: "Contact Us",
        href: "/yogiraj-nx/contact",
        description: "Get in touch or enquire",
        icon: "lucide:phone",
      },
    ],
  },
];

export const NAV_CTA: NavLink = {
  id: "nav-cta-book",
  label: "Book Now",
  href: NX_BOOKING_URL,
  icon: "lucide:calendar-check",
};

export const FOOTER_GROUPS: FooterGroup[] = [
  {
    id: "footer-hotel",
    title: "Hotel Yogiraj NX",
    links: [
      { id: "f-about", label: "About Us", href: "/yogiraj-nx/about" },
      { id: "f-amenities", label: "Amenities", href: "/yogiraj-nx/amenities" },
      { id: "f-restaurant", label: "Restaurant", href: "/yogiraj-nx/restaurant" },
      { id: "f-gallery", label: "Photo Gallery", href: "/yogiraj-nx/gallery" },
      { id: "f-reviews", label: "Guest Reviews", href: "/yogiraj-nx/reviews" },
    ],
  },
  {
    id: "footer-rooms",
    title: "Rooms & Rates",
    links: [
      { id: "f-all-rooms", label: "All Rooms", href: "/yogiraj-nx/rooms" },
      { id: "f-double-ac", label: "Double Bed AC", href: "/yogiraj-nx/rooms/double-bed-ac" },
      { id: "f-triple-ac", label: "Triple Bed AC", href: "/yogiraj-nx/rooms/triple-bed-ac" },
      { id: "f-suite-bath", label: "Suite Room With Bathtub", href: "/yogiraj-nx/rooms/suite-room-with-bathtub" },
      { id: "f-six-bed", label: "Six-Bedroom With 2 Washrooms", href: "/yogiraj-nx/rooms/six-bedroom-with-2-washrooms" },
    ],
  },
  {
    id: "footer-location",
    title: "Location & Nearby",
    links: [
      { id: "f-loc", label: "Location & Directions", href: "/yogiraj-nx/location" },
      { id: "f-temple", label: "Near Sai Baba Temple", href: "/yogiraj-nx/hotel-near-sai-baba-temple" },
      { id: "f-bus", label: "Near Bus Station", href: "/yogiraj-nx/hotel-near-shirdi-bus-station" },
      { id: "f-airport", label: "Near Airport", href: "/yogiraj-nx/hotel-near-shirdi-airport" },
      { id: "f-faq", label: "FAQ", href: "/yogiraj-nx/faq" },
    ],
  },
  {
    id: "footer-support",
    title: "Support",
    links: [
      { id: "f-contact", label: "Contact Us", href: "/yogiraj-nx/contact" },
      { id: "f-switch-main", label: "Switch to Hotel Yogiraj (Main)", href: "/" },
      { id: "f-booking", label: "Online Booking", href: NX_BOOKING_URL },
      { id: "f-sitemap", label: "Sitemap", href: "/sitemap.xml" },
    ],
  },
];
