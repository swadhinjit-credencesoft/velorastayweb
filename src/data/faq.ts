import type { FaqCategory } from "@/types";

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "faq-booking",
    name: "Booking & Reservations",
    icon: "lucide:calendar-check",
    items: [
      {
        id: "faq-booking-01",
        question: "How can I book a room at Hotel Yogiraj, Shirdi?",
        answer:
          "You can book directly through our website by filling in the booking form with your check-in and check-out dates, room type and guest details. Alternatively, you can call or WhatsApp our reservations team at +91 95955 33535 or email us at info@yogirajhotel.com.",
      },
      {
        id: "faq-booking-02",
        question: "What is the cancellation policy?",
        answer:
          "Cancellation is free if you cancel at least 24 hours prior to your check-in date.",
      },
      {
        id: "faq-booking-03",
        question: "Do you accept group or pilgrim bookings?",
        answer:
          "Yes. We accept group, family, pilgrim and corporate bookings. Please contact our front desk or reservations team directly to arrange group rates and availability.",
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
          "We offer Double Bed Non-AC, Double Bed, Triple Bed AC, Triple Bed Non-AC, Four Bed AC and Four Bed Non-AC rooms — ideal for couples, pilgrims, families and groups.",
      },
      {
        id: "faq-stay-02",
        question: "Does the hotel offer Wi-Fi?",
        answer:
          "Yes. Complimentary free and fast Wi-Fi is available for guests.",
      },
      {
        id: "faq-stay-03",
        question: "Does the hotel have air conditioning?",
        answer:
          "Yes. Both AC and Non-AC room options are available.",
      },
      {
        id: "faq-stay-04",
        question: "Are extra beds available?",
        answer:
          "Yes. An extra bed is available at a nominal charge per night, subject to availability.",
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
          "Yes. Family-friendly four-bed rooms are available and extra beds can be arranged, making the hotel suitable for family stays.",
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
          "Yes. The hotel has an in-house restaurant serving delicious vegetarian meals, including a complimentary breakfast buffet.",
      },
      {
        id: "faq-dining-02",
        question: "Is breakfast available?",
        answer:
          "Yes. A complimentary breakfast buffet is available, along with lunch and dinner on request.",
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
          "Yes. Free car parking is available for guests.",
      },
      {
        id: "faq-facilities-03",
        question: "Does the hotel offer airport or railway transfers?",
        answer:
          "Please contact the front desk for airport, bus and railway transfer assistance. Shirdi Airport is approximately 15 km away and Shirdi Bus Station is about 200 m from the hotel.",
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
        question: "Where is Hotel Yogiraj located?",
        answer:
          "Hotel Yogiraj is located at Pimpalwadi Rd, near Sai Baba Temple, Shiv Nagar, Shirdi, Maharashtra 423109.",
      },
      {
        id: "faq-location-02",
        question: "Is the hotel near the Sai Baba Temple?",
        answer:
          "Yes. The hotel is within easy walking distance of the Shri Sai Baba Temple — one of the best locations in Shirdi.",
      },
      {
        id: "faq-location-03",
        question: "Is the hotel near Shirdi Bus Station?",
        answer:
          "Yes. Shirdi Bus Station is approximately 200 m from the hotel.",
      },
      {
        id: "faq-location-04",
        question: "How far is Shirdi Airport?",
        answer:
          "Shirdi Airport (SAG) is approximately 15 km from the hotel.",
      },
      {
        id: "faq-location-05",
        question: "What is near the hotel?",
        answer:
          "Sai Baba Temple, Dwarkamai, Baba's Chavadi, Khandoba Temple and several restaurants are all close by.",
      },
    ],
  },
];
