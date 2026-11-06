import type { FaqCategory } from "@/types";

export const FAQ_CATEGORIES: FaqCategory[] = [{
  id: "stay", name: "Rooms and reservations", icon: "lucide:bed-double", items: [
    { id: "room-types", question: "What room categories are available?", answer: "Y Hotels Signature lists Deluxe, Super Deluxe and Executive rooms, with 12, 10 and 12 rooms respectively." },
    { id: "occupancy", question: "What is the room occupancy?", answer: "Deluxe accommodates 2 adults and 1 child; Super Deluxe accommodates 3 adults and 1 child; Executive accommodates 4 adults and 1 child." },
    { id: "meal-plans", question: "Which meal plans are available?", answer: "EP, CP, MAP and AP meal plans are available. Contact the hotel to confirm the current rate for your chosen plan." },
    { id: "rates", question: "What are the room rates?", answer: "Listed single occupancy starts at ₹3,500 for Deluxe. The rate increases by ₹500 per category and double occupancy adds ₹500. Contact the hotel to confirm your final rate and meal plan." },
    { id: "timing", question: "What are check-in and check-out times?", answer: "Check-in is at 1:00 PM and check-out is at 11:00 AM." },
    { id: "location", question: "Where is Y Hotels Signature?", answer: "At Mangalam Tower, Sarbahal Road, Marwari Para, Jharsuguda, Odisha 768201." },
  ],
}];
