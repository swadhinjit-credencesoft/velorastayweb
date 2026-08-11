import type { FaqCategory } from "@/types";

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "faq-booking",
    name: "Booking & Reservations",
    icon: "lucide:calendar-check",
    items: [
      {
        id: "faq-booking-01",
        question: "How can I book a room at The Queen's Head – Paharganj?",
        answer:
          "You can book directly through our website by filling in the booking form with your check-in and check-out dates, room type and guest details. Alternatively, you can call or WhatsApp our reservations team at +91 9899739777 or email us at shivharehotelsandtravel@gmail.com.",
      },
      {
        id: "faq-booking-02",
        question: "What is the cancellation policy?",
        answer:
          "Cancellation is free if you cancel at least 24 hours prior to your check-in date.",
      },
      {
        id: "faq-booking-03",
        question: "Do you accept group or corporate bookings?",
        answer:
          "Yes. We accept group, family and corporate bookings. Please contact our front desk or reservations team directly to arrange group rates and availability.",
      },
      {
        id: "faq-booking-04",
        question: "Will I receive a booking confirmation?",
        answer:
          "Yes. Once your reservation is confirmed by our team, you will receive confirmation with your stay details over WhatsApp, email or by phone.",
      },
    ],
  },
  {
    id: "faq-stay",
    name: "Rooms & Stay",
    icon: "lucide:bed-double",
    items: [
      {
        id: "faq-stay-01",
        question: "What room types are available?",
        answer:
          "We offer Deluxe Double Rooms, Premium Double Rooms, Premium Double Rooms with City View and our signature Triple Suite with Jacuzzi.",
      },
      {
        id: "faq-stay-02",
        question: "Does the hotel offer Wi-Fi?",
        answer:
          "Yes. Complimentary Wi-Fi is available for guests.",
      },
      {
        id: "faq-stay-03",
        question: "Does the hotel have air conditioning?",
        answer:
          "Yes. Air-conditioned accommodation is available.",
      },
      {
        id: "faq-stay-04",
        question: "Are extra beds available?",
        answer:
          "Yes. An extra bed is available at ₹750 per night, subject to availability.",
      },
      {
        id: "faq-stay-05",
        question: "What are the check-in and check-out timings?",
        answer:
          "Check-in is from 12:00 PM and check-out is by 11:00 AM.",
      },
      {
        id: "faq-stay-06",
        question: "Is the hotel suitable for families?",
        answer:
          "Yes. Family rooms are available and extra beds can be arranged, making the hotel suitable for family stays.",
      },
    ],
  },
  {
    id: "faq-dining",
    name: "Dining",
    icon: "lucide:utensils",
    items: [
      {
        id: "faq-dining-01",
        question: "Does the hotel have a restaurant?",
        answer:
          "Yes. The property has an on-site restaurant serving Indian and Chinese cuisine.",
      },
      {
        id: "faq-dining-02",
        question: "Is breakfast available?",
        answer:
          "Breakfast is available at ₹350 per person and is included in the CP (room + breakfast) tariff.",
      },
    ],
  },
  {
    id: "faq-facilities",
    name: "Hotel Facilities",
    icon: "lucide:star",
    items: [
      {
        id: "faq-facilities-01",
        question: "Is there a 24-hour reception?",
        answer:
          "Yes. A 24-hour front desk operates to assist guests at all times.",
      },
      {
        id: "faq-facilities-02",
        question: "Does the hotel have parking?",
        answer:
          "Current listings indicate free private parking, but this should be reconfirmed with hotel management before you arrive.",
      },
      {
        id: "faq-facilities-03",
        question: "Does the hotel offer airport transfers?",
        answer:
          "Please contact the front desk for airport transfer and taxi information. Delhi International Airport is approximately 15 km away.",
      },
    ],
  },
  {
    id: "faq-location",
    name: "Location & Nearby",
    icon: "lucide:map-pin",
    items: [
      {
        id: "faq-location-01",
        question: "Where is The Queen's Head located?",
        answer:
          "The Queen's Head is located at 2282–2285, Rajguru Marg, Chuna Mandi, Paharganj, New Delhi, Delhi 110055.",
      },
      {
        id: "faq-location-02",
        question: "Is the hotel near New Delhi Railway Station?",
        answer:
          "Yes. The hotel is located in Paharganj, within walking distance of New Delhi Railway Station.",
      },
      {
        id: "faq-location-03",
        question: "Is the hotel near Ramakrishna Mission?",
        answer:
          "Ramakrishna Mission is approximately 0.9 km from the hotel.",
      },
      {
        id: "faq-location-04",
        question: "How far is Gurudwara Bangla Sahib?",
        answer:
          "Gurudwara Bangla Sahib is approximately 2.2 km from the hotel.",
      },
      {
        id: "faq-location-05",
        question: "How far is Delhi Airport?",
        answer:
          "Delhi International Airport is approximately 15 km from the property.",
      },
    ],
  },
];
