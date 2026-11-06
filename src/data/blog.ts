import type { BlogPost, SectionContent } from "@/types";

export const BLOG_CONTENT: SectionContent = {
  eyebrow: "Y Hotels Signature",
  heading: "Stay information",
  description: "Useful details about our room categories, rates and location in Jharsuguda.",
};
export const BLOG_CATEGORIES = ["Hotel Information", "Rooms", "Rates"];
const AUTHOR = { name: "Y Hotels Signature", image: "/y-hotels-signature.svg", bio: "Hotel information from Y Hotels Signature, Jharsuguda." };

export const BLOG_POSTS: BlogPost[] = [
  { id: "hotel-info", slug: "plan-your-stay-at-y-hotels-signature", title: "Planning a stay at Y Hotels Signature", excerpt: "A quick guide to the hotel's location, room categories and check-in times.", content: "Y Hotels Signature is located at Mangalam Tower, Sarbahal Road, Marwari Para, Jharsuguda, Odisha 768201. You can open the hotel's map listing from the Contact page.\n\nThe hotel lists 34 rooms across Deluxe, Super Deluxe and Executive categories. Check-in is at 1:00 PM and check-out is at 11:00 AM. Contact the hotel directly to confirm room availability for your dates.", image: "/y-hotels-room.svg", category: "Hotel Information", tags: ["Y Hotels Signature", "Jharsuguda", "hotel"], author: AUTHOR, publishedAt: "2026-11-06", readTime: "2 min read", featured: true, metaTitle: "Plan Your Stay | Y Hotels Signature", metaDescription: "Location, room categories and check-in information for Y Hotels Signature in Jharsuguda.", keywords: ["Y Hotels Signature", "hotel Jharsuguda"] },
  { id: "room-categories", slug: "room-categories-and-occupancy", title: "Room categories and occupancy", excerpt: "Compare the listed Deluxe, Super Deluxe and Executive room categories.", content: "Deluxe rooms accommodate 2 adults and 1 child. Super Deluxe rooms accommodate 3 adults and 1 child. Executive rooms accommodate 4 adults and 1 child.\n\nThe listed inventory is 12 Deluxe rooms, 10 Super Deluxe rooms and 12 Executive rooms. Ask the hotel to confirm the room category and exact availability before you travel.", image: "/y-hotels-room.svg", category: "Rooms", tags: ["rooms", "occupancy", "Jharsuguda"], author: AUTHOR, publishedAt: "2026-11-06", readTime: "2 min read", metaTitle: "Room Categories | Y Hotels Signature", metaDescription: "Room count and occupancy by category at Y Hotels Signature.", keywords: ["Deluxe rooms Jharsuguda", "hotel room occupancy"] },
  { id: "meal-plans", slug: "meal-plans-and-room-rates", title: "Meal plans and room rates", excerpt: "Understand the published base rates and ask us to confirm meal plan pricing.", content: "EP, CP, MAP and AP meal plan options are available. The published base single occupancy rate starts at ₹3,500 for Deluxe, with a ₹500 increment per room category. Double occupancy adds ₹500.\n\nMeal plan pricing and the total rate for your dates should be confirmed directly with the hotel before booking.", image: "/y-hotels-room.svg", category: "Rates", tags: ["rates", "meal plans", "booking"], author: AUTHOR, publishedAt: "2026-11-06", readTime: "2 min read", metaTitle: "Rates and Meal Plans | Y Hotels Signature", metaDescription: "Published base room rates and meal plan options at Y Hotels Signature.", keywords: ["Y Hotels rates", "Jharsuguda meal plans"] },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined { return BLOG_POSTS.find((post) => post.slug === slug); }
export function getAllBlogPosts(): BlogPost[] { return BLOG_POSTS; }
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] { return BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(0, limit); }
