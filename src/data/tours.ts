import type { TourPackage, SectionContent } from "@/types";

export const TOURS_CONTENT: SectionContent = {
  eyebrow: "Pawna Experience",
  heading: "Explore the Beauty of Lonavala",
  description:
    "Discover the magic of Pawna Lake and the surrounding Sahyadri mountains with our curated experiences. From historic forts to thrilling adventures, each experience is designed to give you an authentic and unforgettable taste of Lonavala. Let our knowledgeable local guides show you the best of the region while you enjoy the journey.",
};

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: "tour-lake-adventure",
    slug: "pawna-lake-adventure",
    name: "Pawna Lake Adventure",
    tagline: "Experience the best of Pawna Lake in a single day",
    description:
      "A comprehensive full-day experience that covers the most exciting activities around Pawna Lake, from boating and kayaking to lakeside camping. Perfect for adventure seekers who want to soak in the natural beauty of the Sahyadris.",
    longDescription:
      "The Pawna Lake Adventure is our most popular offering, designed to give you a complete taste of what makes this region so special. Over the course of a full day, you will experience four of Pawna Lake's most beloved activities, each offering a unique perspective on this stunning landscape. Your journey begins with a scenic drive from the villa to the lake, where you will board a traditional boat for a cruise through the calm waters. As you glide across the lake, you will spot the ancient Tikona Fort perched on a nearby hill and witness the stunning backdrop of the Sahyadri mountains. From there, you will try your hand at kayaking, paddling through the serene waters while enjoying panoramic views of the surrounding hills. Next, you will visit a local fishing village to learn about the unique way of life of the communities that call this area home. After a lakeside lunch featuring fresh fish and local delicacies, you will embark on a guided trek through the lush green trails that wind through the hills. The trek offers breathtaking views of the lake and the surrounding valleys, especially during the monsoon season when the landscape is at its most vibrant. The experience concludes with a relaxing evening by the campfire at your villa, where you can share stories of the day's adventures under a canopy of stars.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    duration: "Full Day",
    price: 2500,
    originalPrice: 3000,
    currency: "\u20B9",
    groupSize: "2-10",
    includes: [
      "AC transport for the entire tour",
      "Professional English-speaking guide",
      "Lakeside lunch at a local restaurant",
      "Boating and kayaking activities",
      "Guided trek through the hills",
      "Bottled water during the tour",
    ],
    itinerary: [
      {
        id: "pla-1",
        time: "8:00 AM",
        activity: "Pawna Lake Boating",
        description:
          "Begin your day with a scenic boat ride on Pawna Lake. Glide through the calm waters while enjoying stunning views of Tikona Fort and the Sahyadri mountains. Keep an eye out for local birds and the beautiful reflections on the water.",
      },
      {
        id: "pla-2",
        time: "10:00 AM",
        activity: "Kayaking Experience",
        description:
          "Try your hand at kayaking on the serene waters of Pawna Lake. Paddle at your own pace while enjoying panoramic views of the surrounding hills and the ancient forts that dot the landscape.",
      },
      {
        id: "pla-3",
        time: "12:00 PM",
        activity: "Village Visit",
        description:
          "Visit a local fishing village near Pawna Lake. Meet the local communities, learn about their unique culture and traditions, see how they coexist with nature, and enjoy a home-cooked lunch featuring fresh fish.",
      },
      {
        id: "pla-4",
        time: "2:00 PM",
        activity: "Guided Trek",
        description:
          "Embark on a guided trek through the lush green trails that wind through the Sahyadri hills. The trek offers breathtaking views of the lake and the surrounding valleys, with opportunities to spot local flora and fauna.",
      },
      {
        id: "pla-5",
        time: "5:00 PM",
        activity: "Evening by the Lake",
        description:
          "Conclude your day with a relaxing evening by the lake. Watch the sunset paint the sky in shades of orange and pink, and enjoy a warm cup of tea while reflecting on the day's adventures.",
      },
    ],
    highlights: [
      "Experience 4 exciting activities around Pawna Lake",
      "Boating with stunning fort views",
      "Kayaking on serene waters",
      "Guided trek through the Sahyadris",
      "Lakeside lunch at a local restaurant",
      "Small group size for a personalised experience",
    ],
    faqs: [
      {
        id: "pla-faq-1",
        question: "Is the tour suitable for elderly visitors?",
        answer:
          "Yes, the tour is designed to be comfortable for all ages. We use AC transport between locations, and while there is walking involved, the pace is relaxed with adequate rest breaks.",
      },
      {
        id: "pla-faq-2",
        question: "What should I wear for the tour?",
        answer:
          "We recommend comfortable, casual clothing and sturdy walking shoes. Carry a hat and sunscreen during summer months. During monsoon, rain jackets are recommended.",
      },
      {
        id: "pla-faq-3",
        question: "Can the itinerary be customised?",
        answer:
          "While the standard itinerary covers our curated selection of activities, we can adjust the experience for private bookings. Please contact us at least 48 hours in advance to discuss any modifications.",
      },
    ],
  },

  {
    id: "tour-fort-trek",
    slug: "fort-trekking",
    name: "Fort Trekking Experience",
    tagline: "Explore ancient forts in the Sahyadris",
    description:
      "A guided trekking experience through the historic forts of Lonavala, from the majestic Lohagad Fort to the scenic Tikona Fort, offering a deep dive into the rich history and natural beauty of the region.",
    longDescription:
      "The forts of Lonavala are among the most historically significant and visually stunning in all of Maharashtra. The Fort Trekking Experience is a carefully curated guided trek that takes you through two of the region's most beloved forts, each offering a unique perspective on the Maratha Empire and the natural beauty of the Sahyadri mountains. Your journey begins at Lohagad Fort, a majestic fortress that stands at an elevation of 1,033 metres above sea level. The trek to the top takes you through lush green trails, ancient stone steps, and massive gateways that once protected the fort from invaders. At the summit, you will be rewarded with breathtaking panoramic views of the Pawna Lake, the surrounding valleys, and the distant Western Ghats. From there, you will travel to Tikona Fort, a smaller but equally fascinating fort perched on a conical hill. The trek to Tikona offers stunning views of the Pawna Lake and the Lohagad Fort in the distance. The fort's well-preserved structures, including the Vinayak Temple and the ancient water cisterns, provide a fascinating glimpse into the region's past. Throughout the day, your knowledgeable guide will share stories of the Maratha warriors, the strategic importance of these forts, and the natural history of the Sahyadri mountains.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    duration: "Full Day",
    price: 2000,
    originalPrice: 2500,
    currency: "\u20B9",
    groupSize: "2-12",
    includes: [
      "Professional trekking guide",
      "AC transport between forts",
      "Entry fees to all forts",
      "Packed lunch and refreshments",
      "Trekking poles and basic first aid",
      "Bottled water",
    ],
    itinerary: [
      {
        id: "ft-1",
        time: "7:00 AM",
        activity: "Lohagad Fort Trek",
        description:
          "Begin your trekking adventure at the majestic Lohagad Fort. The trail takes you through lush green vegetation, ancient stone pathways, and massive gateways. The trek takes approximately 2 hours to reach the summit.",
      },
      {
        id: "ft-2",
        time: "10:00 AM",
        activity: "Fort Exploration",
        description:
          "Explore the well-preserved structures of Lohagad Fort, including the Visapur Gate, the Shivaji-era fortifications, and the ancient water cisterns. Enjoy breathtaking panoramic views of Pawna Lake from the summit.",
      },
      {
        id: "ft-3",
        time: "12:00 PM",
        activity: "Lunch Break",
        description:
          "Enjoy a packed lunch with stunning views of the Sahyadri mountains. Rest and recharge before heading to the next fort.",
      },
      {
        id: "ft-4",
        time: "1:30 PM",
        activity: "Tikona Fort Trek",
        description:
          "Drive to Tikona Fort and begin the scenic trek to the top. The trail offers stunning views of Pawna Lake and the surrounding valleys. The trek takes approximately 1.5 hours.",
      },
      {
        id: "ft-5",
        time: "4:00 PM",
        activity: "Tikona Fort Exploration",
        description:
          "Explore the ancient structures of Tikona Fort, including the Vinayak Temple and the historic fortifications. Enjoy the stunning sunset views from the summit before descending.",
      },
    ],
    highlights: [
      "Trek through two historic forts in the Sahyadris",
      "Explore Lohagad Fort at 1,033 metres elevation",
      "Discover the ancient Tikona Fort",
      "Breathtaking panoramic views of Pawna Lake",
      "Learn about Maratha history and heritage",
      "Expert trekking guide throughout",
    ],
    faqs: [
      {
        id: "ft-faq-1",
        question: "How difficult is the trek?",
        answer:
          "Both treks are of moderate difficulty. A basic level of fitness is required. The trails are well-maintained and our guides ensure a safe and enjoyable experience for all participants.",
      },
      {
        id: "ft-faq-2",
        question: "Is the trek suitable for beginners?",
        answer:
          "Yes, the treks are suitable for beginners with a reasonable level of fitness. Our guides provide support and encouragement throughout, and the pace is adjusted to suit the group.",
      },
      {
        id: "ft-faq-3",
        question: "What should I bring for the trek?",
        answer:
          "Bring comfortable trekking shoes, a hat, sunscreen, sunglasses, a small backpack, and a water bottle. We provide trekking poles and basic first aid.",
      },
    ],
  },

  {
    id: "tour-lakeside-camping",
    slug: "lakeside-camping",
    name: "Lakeside Camping",
    tagline: "Spend a night under the stars by Pawna Lake",
    description:
      "An overnight camping experience by the serene Pawna Lake, with bonfire, stargazing, and lakeside activities for a perfect escape from the city.",
    longDescription:
      "There is something magical about spending a night under the stars by a tranquil lake. The Lakeside Camping experience is an overnight adventure that takes you to a premium campsite on the shores of Pawna Lake, where you can disconnect from the chaos of city life and reconnect with nature. Your adventure begins in the afternoon with a welcome drink and a brief orientation about the campsite and its surroundings. As the sun begins to set, you will gather around a crackling bonfire for an evening of music, storytelling, and delicious barbecue. The campsite offers stunning views of the lake and the surrounding hills, which become even more magical as the stars come out. Our experienced guides will help you identify constellations and share stories about the night sky. The evening concludes with a hearty dinner featuring local Maharashtrian cuisine, served under the open sky. You will sleep in comfortable tents equipped with sleeping bags and mats, with the gentle sounds of the lake as your lullaby. The next morning, wake up to a spectacular sunrise over the lake, followed by a refreshing breakfast before heading back to your villa.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    duration: "1 Night",
    price: 3500,
    originalPrice: 4500,
    currency: "\u20B9",
    groupSize: "4-20",
    includes: [
      "Premium lakeside campsite",
      "Comfortable tents with sleeping bags",
      "Welcome drink and snacks",
      "Barbecue dinner under the stars",
      "Bonfire with music",
      "Stargazing session",
      "Breakfast the next morning",
    ],
    itinerary: [
      {
        id: "lc-1",
        time: "4:00 PM",
        activity: "Campsite Arrival",
        description:
          "Arrive at the premium lakeside campsite and receive a warm welcome with refreshing drinks. Settle into your comfortable tents and get oriented with the campsite facilities.",
      },
      {
        id: "lc-2",
        time: "6:00 PM",
        activity: "Bonfire & Barbecue",
        description:
          "Gather around a crackling bonfire as the sun sets over Pawna Lake. Enjoy a delicious barbecue with grilled vegetables, paneer, and non-vegetarian options, accompanied by music and storytelling.",
      },
      {
        id: "lc-3",
        time: "8:00 PM",
        activity: "Stargazing",
        description:
          "As darkness falls, our experienced guides will help you identify constellations and planets visible in the clear night sky. Learn about the stories behind the stars and enjoy the peaceful ambiance of the campsite.",
      },
      {
        id: "lc-4",
        time: "9:30 PM",
        activity: "Dinner",
        description:
          "Enjoy a hearty dinner featuring local Maharashtrian cuisine served under the open sky. Share stories with fellow campers while enjoying the serene lakeside atmosphere.",
      },
      {
        id: "lc-5",
        time: "7:00 AM",
        activity: "Sunrise & Breakfast",
        description:
          "Wake up to a spectacular sunrise over Pawna Lake. Enjoy a refreshing breakfast with fresh fruits, parathas, and hot beverages before checking out and heading back to your villa.",
      },
    ],
    highlights: [
      "Overnight camping by serene Pawna Lake",
      "Bonfire and barbecue under the stars",
      "Stargazing with expert guides",
      "Comfortable tents with sleeping bags",
      "Sunrise views over the lake",
      "Local Maharashtrian cuisine",
    ],
    faqs: [
      {
        id: "lc-faq-1",
        question: "Is the camping safe?",
        answer:
          "Yes, safety is our top priority. The campsite is well-lit, has 24-hour security, and our guides are trained in first aid. The tents are durable and weather-resistant.",
      },
      {
        id: "lc-faq-2",
        question: "What if it rains?",
        answer:
          "The campsite has covered areas where you can take shelter. Our tents are waterproof and we provide rain gear if needed. The monsoon camping experience is actually quite magical!",
      },
      {
        id: "lc-faq-3",
        question: "Is the camping suitable for children?",
        answer:
          "Yes, children above 8 years are welcome to join the camping experience. The bonfire, stargazing, and barbecue are always a hit with kids.",
      },
    ],
  },

  {
    id: "tour-adventure-activities",
    slug: "adventure-activities",
    name: "Adventure Activities",
    tagline: "Thrilling adventures in the Sahyadris",
    description:
      "An action-packed day of adventure activities around Lonavala, from rappelling and zip-lining to ATV rides and rock climbing.",
    longDescription:
      "For the adventure seeker, the Adventure Activities package offers an action-packed day of thrilling experiences in the stunning Sahyadri mountains. This full-day adventure takes you through a series of exciting activities designed to get your adrenaline pumping while showcasing the natural beauty of the Lonavala region. Your adventure begins with rappelling down a majestic cliff face, where you will descend while enjoying breathtaking views of the surrounding valleys. From there, you will experience the thrill of zip-lining across a gorge, soaring through the air with the wind in your hair and the lush green landscape below. The adventure continues with ATV rides through rugged terrain, where you will navigate rocky paths and muddy trails while taking in the scenic beauty of the Sahyadris. For those who enjoy a challenge, rock climbing on natural rock formations offers the perfect opportunity to test your strength and determination. The day concludes with a relaxing lakeside lunch, where you can share stories of your adventures while enjoying the serene beauty of Pawna Lake. Throughout the day, experienced instructors ensure your safety while encouraging you to push your limits.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    duration: "Full Day",
    price: 3000,
    originalPrice: 4000,
    currency: "\u20B9",
    groupSize: "4-15",
    includes: [
      "Professional adventure instructors",
      "All safety equipment and gear",
      "AC transport for the entire tour",
      "Lakeside lunch",
      "Bottled water and refreshments",
      "Photography of your adventures",
    ],
    itinerary: [
      {
        id: "aa-1",
        time: "8:00 AM",
        activity: "Rappelling",
        description:
          "Begin your adventure with rappelling down a majestic cliff face. Our professional instructors will guide you through the basics before you descend while enjoying breathtaking views of the surrounding valleys.",
      },
      {
        id: "aa-2",
        time: "10:00 AM",
        activity: "Zip-lining",
        description:
          "Experience the thrill of zip-lining across a gorge. Soar through the air with the wind in your hair while enjoying panoramic views of the lush green landscape below.",
      },
      {
        id: "aa-3",
        time: "12:00 PM",
        activity: "ATV Riding",
        description:
          "Navigate rugged terrain on powerful ATVs. Drive through rocky paths, muddy trails, and scenic routes while taking in the beauty of the Sahyadri mountains.",
      },
      {
        id: "aa-4",
        time: "2:00 PM",
        activity: "Lakeside Lunch",
        description:
          "Enjoy a well-deserved lunch by Pawna Lake. Share stories of your adventures while enjoying delicious food with stunning views of the lake and surrounding hills.",
      },
      {
        id: "aa-5",
        time: "3:30 PM",
        activity: "Rock Climbing",
        description:
          "Test your strength and determination with rock climbing on natural rock formations. Our instructors will guide you through various routes suitable for different skill levels.",
      },
    ],
    highlights: [
      "Rappelling down a majestic cliff face",
      "Zip-lining across a scenic gorge",
      "ATV riding through rugged terrain",
      "Rock climbing on natural formations",
      "Lakeside lunch with stunning views",
      "Professional instructors throughout",
    ],
    faqs: [
      {
        id: "aa-faq-1",
        question: "Is the adventure suitable for beginners?",
        answer:
          "Yes, all activities are designed to be safe and enjoyable for beginners. Our professional instructors provide thorough briefings and safety instructions before each activity.",
      },
      {
        id: "aa-faq-2",
        question: "What is the minimum age for adventure activities?",
        answer:
          "Participants must be at least 12 years old for most activities. Some activities like rock climbing have a minimum age of 14 years. Please check with us for specific requirements.",
      },
      {
        id: "aa-faq-3",
        question: "What should I wear for the activities?",
        answer:
          "Wear comfortable, athletic clothing and sturdy sports shoes. Avoid loose jewelry or accessories. We provide all necessary safety equipment including helmets, harnesses, and gloves.",
      },
    ],
  },

  {
    id: "tour-sunset-experience",
    slug: "sunset-experience",
    name: "Sunset Experience",
    tagline: "Witness magical sunsets over Pawna Lake",
    description:
      "A curated evening experience that takes you to the best sunset viewpoints around Pawna Lake, with refreshments and photography opportunities.",
    longDescription:
      "The sunsets at Pawna Lake are legendary, painting the sky in vibrant shades of orange, pink, and purple that reflect off the calm waters. The Sunset Experience is a curated evening that takes you to the best viewpoints around the lake, ensuring you witness nature's most spectacular show in the most beautiful settings. Your evening begins with a drive to a scenic hilltop viewpoint that offers panoramic views of Pawna Lake and the surrounding Sahyadri mountains. As the sun begins its descent, you will enjoy refreshing drinks and light snacks while watching the sky transform into a canvas of colours. Our guide will share stories about the region and help you capture the perfect photograph. From there, you will move to the lakeside, where you will witness the final moments of the sunset reflected on the water. The experience includes a short boat ride on the lake during the golden hour, offering unique perspectives of the landscape as the light changes. The evening concludes with a warm cup of chai at a local tea stall, where you can reflect on the beauty you have witnessed while enjoying the peaceful ambiance of the lakeside.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    duration: "Evening",
    price: 1500,
    originalPrice: 2000,
    currency: "\u20B9",
    groupSize: "2-8",
    includes: [
      "Professional guide",
      "AC transport to viewpoints",
      "Refreshments and snacks",
      "Short boat ride during golden hour",
      "Photography assistance",
      "Chai at local tea stall",
    ],
    itinerary: [
      {
        id: "se-1",
        time: "4:30 PM",
        activity: "Hilltop Viewpoint",
        description:
          "Drive to a scenic hilltop that offers panoramic views of Pawna Lake. Enjoy refreshments while watching the sky begin to change colours as the sun approaches the horizon.",
      },
      {
        id: "se-2",
        time: "5:30 PM",
        activity: "Sunset Photography",
        description:
          "Capture the stunning sunset with guidance from our experienced photographer. Learn tips and techniques for photographing the golden hour and the vibrant colours of the sky.",
      },
      {
        id: "se-3",
        time: "6:15 PM",
        activity: "Lakeside Sunset",
        description:
          "Move to the lakeside to witness the final moments of the sunset reflected on the calm waters of Pawna Lake. The reflection creates a mirror effect that doubles the beauty of the sky.",
      },
      {
        id: "se-4",
        time: "6:45 PM",
        activity: "Golden Hour Boat Ride",
        description:
          "Take a short boat ride on Pawna Lake during the golden hour. The changing light creates a magical atmosphere, with the hills and forts taking on warm golden hues.",
      },
      {
        id: "se-5",
        time: "7:30 PM",
        activity: "Chai by the Lake",
        description:
          "Conclude your evening with a warm cup of chai at a local lakeside tea stall. Reflect on the beauty you have witnessed while enjoying the peaceful ambiance of the lake at dusk.",
      },
    ],
    highlights: [
      "Witness stunning sunsets over Pawna Lake",
      "Panoramic views from hilltop viewpoints",
      "Golden hour boat ride on the lake",
      "Photography tips from an expert",
      "Refreshments and chai included",
      "Small group size for intimacy",
    ],
    faqs: [
      {
        id: "se-faq-1",
        question: "What if the weather is not good?",
        answer:
          "Overcast skies can actually create dramatic sunset colours. However, in case of heavy rain, we may reschedule or offer a full refund. The best sunsets often happen after a light shower.",
      },
      {
        id: "se-faq-2",
        question: "Is the experience suitable for couples?",
        answer:
          "Absolutely! The Sunset Experience is perfect for couples looking for a romantic evening by the lake. The intimate setting and stunning views create a magical atmosphere.",
      },
      {
        id: "se-faq-3",
        question: "Can I bring my own camera?",
        answer:
          "Of course! We encourage you to bring your own camera or smartphone. Our guide will help you capture the best shots and share photography tips.",
      },
    ],
  },
];

export function getTourBySlug(slug: string): TourPackage | undefined {
  return TOUR_PACKAGES.find((tour) => tour.slug === slug);
}
