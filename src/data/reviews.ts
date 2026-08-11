import type { SectionContent, Review, ReviewPlatform } from "@/types";

export const REVIEWS_CONTENT: SectionContent = {
  eyebrow: "Guest Reviews",
  heading: "Guest Reviews",
  description:
    "Discover what guests have to say about their experience at The Queen's Head – Paharganj.",
};

export const REVIEW_PLATFORMS: ReviewPlatform[] = [
  {
    id: "platform-google",
    name: "Google",
    icon: "lucide:search",
    rating: 4.9,
    reviewCount: 0,
    url: "https://maps.google.com/?q=The+Queens+Head+Paharganj+New+Delhi",
  },
  {
    id: "platform-booking",
    name: "Booking.com",
    icon: "lucide:book-open",
    rating: 0,
    reviewCount: 0,
    url: "#",
  },
  {
    id: "platform-mmt",
    name: "MakeMyTrip",
    icon: "lucide:plane",
    rating: 0,
    reviewCount: 0,
    url: "#",
  },
  {
    id: "platform-goibibo",
    name: "Goibibo",
    icon: "lucide:gift",
    rating: 0,
    reviewCount: 0,
    url: "#",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "review-1",
    author: "Rahul Sharma",
    platform: "google",
    rating: 5,
    date: "2026-07-18",
    title: "Great location near the railway station",
    text: "Very convenient hotel in Paharganj. Walking distance from New Delhi Railway Station and close to Connaught Place. Rooms were clean and the staff was helpful. Good value for money.",
    verified: true,
  },
  {
    id: "review-2",
    author: "Priya Nair",
    platform: "google",
    rating: 4,
    date: "2026-07-02",
    title: "Comfortable and centrally located",
    text: "Comfortable rooms with air conditioning and Wi-Fi. The 24-hour front desk made check-in easy even late at night. The restaurant serves good Indian food.",
    verified: true,
  },
  {
    id: "review-3",
    author: "Ahmed Khan",
    platform: "booking",
    rating: 5,
    date: "2026-06-20",
    title: "Perfect for a short Delhi stay",
    text: "Booked for a business trip. Room had a work desk and Wi-Fi, which I needed. Location is excellent for exploring central Delhi.",
    verified: true,
  },
  {
    id: "review-4",
    author: "Sarah Williams",
    platform: "booking",
    rating: 5,
    date: "2026-06-11",
    title: "Great base for sightseeing",
    text: "Stayed with my family in the triple suite. The staff helped us arrange a taxi and suggested places to visit nearby. Very welcoming.",
    verified: true,
  },
  {
    id: "review-5",
    author: "Vikram Singh",
    platform: "google",
    rating: 4,
    date: "2026-05-28",
    title: "Good budget-friendly hotel",
    text: "Clean rooms, hot water and free Wi-Fi. The location is very convenient for the railway station. Would stay again.",
    verified: true,
  },
  {
    id: "review-6",
    author: "Meera Iyer",
    platform: "google",
    rating: 5,
    date: "2026-05-15",
    title: "Friendly staff, comfortable stay",
    text: "The staff was very friendly and helped with all our questions about Delhi. The room was comfortable and the restaurant food was tasty.",
    verified: true,
  },
];
