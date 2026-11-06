import type { BlogPost, SectionContent } from "@/types";
import { STOCK_IMAGES } from "@/data/images";

export const BLOG_CONTENT: SectionContent = {
  eyebrow: "Y Hotels Signature",
  heading: "Stay information",
  description: "Useful details about our room categories, rates and location in Jharsuguda, Odisha.",
};
export const BLOG_CATEGORIES = ["Hotel Information", "Rooms", "Rates", "Local Food", "Explore Jharsuguda", "Group Stays"];
const AUTHOR = { name: "Y Hotels Signature", image: "/y-hotels-signature.svg", bio: "Hotel information from Y Hotels Signature, Jharsuguda." };

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "hotel-info", slug: "plan-your-stay-at-y-hotels-signature", title: "Planning a stay at Y Hotels Signature",
    excerpt: "A quick guide to the hotel's location, room categories and check-in times.",
    content: "Y Hotels Signature is located at Mangalam Tower, Sarbahal Road, Marwari Para, Jharsuguda, Odisha 768201. You can open the hotel's map listing from the Contact page.\n\nThe hotel lists 34 rooms across Deluxe, Super Deluxe and Executive categories. Check-in is at 1:00 PM and check-out is at 11:00 AM. Contact the hotel directly to confirm room availability for your dates.",
    image: STOCK_IMAGES.lobby, category: "Hotel Information", tags: ["Y Hotels Signature", "Jharsuguda", "hotel"], author: AUTHOR,
    publishedAt: "2026-11-06", readTime: "2 min read", featured: true, metaTitle: "Plan Your Stay | Y Hotels Signature",
    metaDescription: "Location, room categories and check-in information for Y Hotels Signature in Jharsuguda.", keywords: ["Y Hotels Signature", "hotel Jharsuguda"],
  },
  {
    id: "room-categories", slug: "room-categories-and-occupancy", title: "Room categories and occupancy",
    excerpt: "Compare the listed Deluxe, Super Deluxe and Executive room categories.",
    content: "Deluxe rooms accommodate 2 adults and 1 child. Super Deluxe rooms accommodate 3 adults and 1 child. Executive rooms accommodate 4 adults and 1 child.\n\nThe listed inventory is 12 Deluxe rooms, 10 Super Deluxe rooms and 12 Executive rooms. Ask the hotel to confirm the room category and exact availability before you travel.",
    image: STOCK_IMAGES.superDeluxe, category: "Rooms", tags: ["rooms", "occupancy", "Jharsuguda"], author: AUTHOR,
    publishedAt: "2026-11-06", readTime: "2 min read", metaTitle: "Room Categories | Y Hotels Signature",
    metaDescription: "Room count and occupancy by category at Y Hotels Signature.", keywords: ["Deluxe rooms Jharsuguda", "hotel room occupancy"],
  },
  {
    id: "meal-plans", slug: "meal-plans-and-room-rates", title: "Meal plans and room rates",
    excerpt: "Understand the published base rates and ask us to confirm meal plan pricing.",
    content: "EP, CP, MAP and AP meal plan options are available. The published base single occupancy rate starts at INR 3,500 for Deluxe, with an INR 500 increment per room category. Double occupancy adds INR 500. The listed additional person charge is INR 700.\n\nMeal plan pricing and the total rate for your dates should be confirmed directly with the hotel before booking.",
    image: STOCK_IMAGES.executive, category: "Rates", tags: ["rates", "meal plans", "booking"], author: AUTHOR,
    publishedAt: "2026-11-06", readTime: "2 min read", metaTitle: "Rates and Meal Plans | Y Hotels Signature",
    metaDescription: "Published base room rates and meal plan options at Y Hotels Signature.", keywords: ["Y Hotels rates", "Jharsuguda meal plans"],
  },
  {
    id: "western-odisha-cuisine", slug: "western-odisha-cuisine-guide", title: "A guide to Western Odisha cuisine",
    excerpt: "Discover several regional foods visitors may come across in Western Odisha.",
    content: "Odisha Tourism highlights foods such as pakhala, dalma and mandia; mudi mansa and country chicken; santula and seasonal produce; and regional sweets including dahi jalebi and chhena poda.\n\nThis is a regional food guide, not Y Hotels Signature's confirmed restaurant menu. The hotel has not supplied its dish list, ingredients or prices. Contact the team to ask what is currently available and whether meal-plan dining is offered on your dates.",
    image: STOCK_IMAGES.meal, category: "Local Food", tags: ["Odisha food", "Jharsuguda", "regional cuisine"], author: AUTHOR,
    publishedAt: "2026-11-06", readTime: "3 min read", metaTitle: "Western Odisha Cuisine Guide | Y Hotels Signature",
    metaDescription: "A short introduction to regional food traditions around Jharsuguda; not a hotel menu.", keywords: ["Western Odisha food", "Jharsuguda cuisine"],
    references: [{ label: "Odisha Tourism: Jharsuguda destination and local cuisine", url: "https://odishatourism.gov.in/en/destinations/jharsuguda" }],
  },
  {
    id: "jharsuguda-explore", slug: "places-to-explore-from-jharsuguda", title: "Places to explore in Western Odisha",
    excerpt: "Nature, heritage and cultural destinations highlighted by Odisha tourism sources.",
    content: "Official Odisha tourism information highlights Hirakud Dam, Debrigarh Wildlife Sanctuary and the Leaning Temple of Huma among regional attractions. Jharsuguda district visitor information also lists Koilighughar Waterfall, Jhadeswar Temple and the Bikramkhol rock shelters.\n\nThese places are not all close to the hotel. Confirm the route, travel time, access, opening details and any entry or booking requirements before setting out.",
    image: STOCK_IMAGES.landscape, category: "Explore Jharsuguda", tags: ["Jharsuguda", "Western Odisha", "places to visit"], author: AUTHOR,
    publishedAt: "2026-11-06", readTime: "3 min read", metaTitle: "Explore Western Odisha | Y Hotels Signature",
    metaDescription: "Regional places to explore from Jharsuguda with official tourism references.", keywords: ["places to visit Jharsuguda", "Western Odisha tourism"],
    references: [
      { label: "Odisha Tourism: Jharsuguda", url: "https://odishatourism.gov.in/en/destinations/jharsuguda" },
      { label: "Jharsuguda District: How to Reach and Tourist Places", url: "https://jharsuguda.odisha.gov.in/en/tourism/how-to-reach" },
    ],
  },
  {
    id: "group-stay", slug: "planning-a-group-stay", title: "Planning a group stay in Jharsuguda",
    excerpt: "Room counts and occupancy details to share when enquiring about group accommodation.",
    content: "Y Hotels Signature lists 34 rooms: 12 Deluxe, 10 Super Deluxe and 12 Executive. Listed occupancy is 2 adults plus 1 child in Deluxe, 3 adults plus 1 child in Super Deluxe, and 4 adults plus 1 child in Executive.\n\nFor a group enquiry, tell the hotel your dates, room-category preferences and guest counts. Availability changes and should be confirmed directly. The property has not confirmed a meeting hall, banquet venue or event catering service.",
    image: STOCK_IMAGES.lobby, category: "Group Stays", tags: ["group stay", "rooms", "Jharsuguda"], author: AUTHOR,
    publishedAt: "2026-11-06", readTime: "2 min read", metaTitle: "Group Stay Planning | Y Hotels Signature",
    metaDescription: "Room inventory and occupancy information for group-stay enquiries at Y Hotels Signature.", keywords: ["group accommodation Jharsuguda", "hotel room blocks"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined { return BLOG_POSTS.find((post) => post.slug === slug); }
export function getAllBlogPosts(): BlogPost[] { return BLOG_POSTS; }
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] { return BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(0, limit); }
