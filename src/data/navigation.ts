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
    href: "/rooms",
    children: [
      {
        id: "nav-villas-all",
        label: "All Rooms",
        href: "/rooms",
        description: "Browse our complete room collection",
        icon: "lucide:layout-grid",
      },
      {
        id: "nav-room-double-bed-non-ac",
        label: "Double Bed Non AC Room",
        href: "/rooms/double-bed-non-ac-room",
        description: "Our lowest rate, sleeps up to three",
        icon: "lucide:bed",
      },
      {
        id: "nav-room-double-bed-ac",
        label: "Double Bed AC Room",
        href: "/rooms/double-bed-ac-room",
        description: "Air-conditioned double bed, sleeps three",
        icon: "lucide:bed",
      },
      {
        id: "nav-room-four-bed-non-ac",
        label: "Four Bed Non AC Room",
        href: "/rooms/four-bed-non-ac-room",
        description: "Four beds in one room, sleeps five",
        icon: "lucide:users",
      },
      {
        id: "nav-room-four-bed-ac",
        label: "Four Bed AC Room",
        href: "/rooms/four-bed-ac-room",
        description: "Air-conditioned, four beds, sleeps five",
        icon: "lucide:users",
      },
      {
        id: "nav-room-deluxe-temple",
        label: "Deluxe Temple Facing",
        href: "/rooms/deluxe-double-bedded-temple-facing-room",
        description: "Deluxe double bed with a temple view",
        icon: "lucide:bed-double",
      },
      {
        id: "nav-room-super-deluxe",
        label: "Super Deluxe AC Room",
        href: "/rooms/super-deluxe-ac-room",
        description: "Well-appointed deluxe room, sleeps four",
        icon: "lucide:bed-double",
      },
      {
        id: "nav-room-six-bedded",
        label: "Standard Six Bedded Room",
        href: "/rooms/standard-six-bedded-room",
        description: "Six beds, sleeps up to seven",
        icon: "lucide:users",
      },
      {
        id: "nav-room-family-suite",
        label: "Family Suite Room",
        href: "/rooms/family-suite-room",
        description: "Spacious suite for families",
        icon: "lucide:users",
      },
      {
        id: "nav-room-standard-suite",
        label: "Standard Suite Room",
        href: "/rooms/standard-suite-room",
        description: "Suite layout with extra space",
        icon: "lucide:bed-double",
      },
      {
        id: "nav-room-deluxe-four",
        label: "Deluxe Four Bedded Room",
        href: "/rooms/deluxe-four-bedded-room",
        description: "Extra space, four beds, sleeps five",
        icon: "lucide:users",
      },
      {
        id: "nav-room-maharaja",
        label: "Maharaja Suite Room",
        href: "/rooms/maharaja-suite-room",
        description: "Our premium suite, sleeps five",
        icon: "lucide:crown",
      },
    ],
  },
  {
    id: "nav-jamindar",
    label: "Jamindar Nest",
    href: "/jamindar-nest",
    children: [
      {
        id: "nav-jn-explore",
        label: "Explore Jamindar Nest",
        href: "/jamindar-nest",
        description: "A new chapter of boutique heritage hospitality",
        icon: "lucide:sparkles",
      },
      {
        id: "nav-jn-rooms",
        label: "Signature Nest Room",
        href: "/jamindar-nest#rooms",
        description: "Refined heritage comfort with contemporary hospitality",
        icon: "lucide:bed-double",
      },
      {
        id: "nav-jn-journey",
        label: "The Jamindar Journey",
        href: "/jamindar-nest#journey",
        description: "Slow, authentic heritage rhythm in Puri",
        icon: "lucide:compass",
      },
      {
        id: "nav-jn-horizon",
        label: "Jamindar Nest",
        href: "/jamindar-nest#horizon",
        description: "Cinematic visual journey beyond the stay",
        icon: "lucide:film",
      },
      {
        id: "nav-jn-book",
        label: "Book Jamindar Nest",
        href: "https://bookone.io/Jamindar-Nest?bookingEngine=true",
        description: "Direct reservation engine for best rates",
        icon: "lucide:calendar-check",
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
        id: "nav-more-events",
        label: "Events & Banquet",
        href: "/events",
        description: "Banquet space and group celebrations in Puri",
        icon: "lucide:party-popper",
      },
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
  { id: "nav-villas", label: "Our Rooms", href: "/rooms" },
  { id: "nav-jamindar", label: "Jamindar Nest", href: "/jamindar-nest" },
  { id: "nav-amenities", label: "Amenities", href: "/facilities" },
  { id: "nav-events", label: "Events & Banquet", href: "/events" },
  { id: "nav-puri", label: "Puri Experience", href: "/nearby" },
  { id: "nav-gallery", label: "Gallery", href: "/gallery" },
  { id: "nav-contact", label: "Contact Us", href: "/contact" },
];

export const NAV_CTA = {
  label: "Book a Stay",
  href: "https://bookone.io/bishnu-bhaban?bookingEngine=true",
  icon: "lucide:calendar-check",
};

export const FOOTER_GROUPS: FooterGroup[] = [
  {
    id: "footer-villa",
    title: "Rooms & Stays",
    links: [
      { id: "footer-about", label: "About Us", href: "/about" },
      { id: "footer-villas", label: "Our Rooms", href: "/rooms" },
      { id: "footer-jamindar", label: "Jamindar Nest", href: "/jamindar-nest" },
      { id: "footer-events", label: "Events & Banquet", href: "/events" },
      { id: "footer-amenities", label: "Amenities", href: "/facilities" },
      { id: "footer-gallery", label: "Gallery", href: "/gallery" },
      { id: "footer-reviews", label: "Guest Reviews", href: "/reviews" },
    ],
  },
  {
    id: "footer-villa-config",
    title: "All Rooms",
    links: [
      { id: "footer-double-bed-non-ac", label: "Double Bed Non AC Room", href: "/rooms/double-bed-non-ac-room" },
      { id: "footer-double-bed-ac", label: "Double Bed AC Room", href: "/rooms/double-bed-ac-room" },
      { id: "footer-four-bed-non-ac", label: "Four Bed Non AC Room", href: "/rooms/four-bed-non-ac-room" },
      { id: "footer-four-bed-ac", label: "Four Bed AC Room", href: "/rooms/four-bed-ac-room" },
      { id: "footer-deluxe-temple", label: "Deluxe Temple Facing", href: "/rooms/deluxe-double-bedded-temple-facing-room" },
      { id: "footer-super-deluxe", label: "Super Deluxe AC Room", href: "/rooms/super-deluxe-ac-room" },
      { id: "footer-six-bedded", label: "Standard Six Bedded Room", href: "/rooms/standard-six-bedded-room" },
      { id: "footer-family-suite", label: "Family Suite Room", href: "/rooms/family-suite-room" },
      { id: "footer-standard-suite", label: "Standard Suite Room", href: "/rooms/standard-suite-room" },
      { id: "footer-deluxe-four", label: "Deluxe Four Bedded Room", href: "/rooms/deluxe-four-bedded-room" },
      { id: "footer-maharaja", label: "Maharaja Suite Room", href: "/rooms/maharaja-suite-room" },
    ],
  },
  {
    id: "footer-experience",
    title: "Puri Experience",
    links: [
      { id: "footer-temple", label: "Shri Jagannath Temple", href: "/nearby" },
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
      { id: "footer-booking", label: "Book Now", href: "https://bookone.io/bishnu-bhaban?bookingEngine=true" },
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
    "West Gate of Shri Jagannath Temple, Grand Road, Puri, Odisha 752001, India",
  phone: "+91 9078922710",
  email: "Bishnubhabanpuri@gmail.com",
  hours: "Reception 7:00 AM – 11:00 PM",
};

