import type { AboutStory, Milestone } from "@/types";

export interface AboutMission {
  title: string;
  description: string;
}

export interface AboutVision {
  title: string;
  description: string;
}

export interface AboutValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Sustainability {
  title: string;
  description: string;
}

export const ABOUT_STORY: AboutStory = {
  title: "Our Story",
  description:
    "Velora Stays was born from a deep love for the Sahyadri mountains and the tranquil beauty of Pawna Lake. Founded in 2022 by The Explorer Stays, a team passionate about creating unforgettable escape experiences, Velora Stays opened its doors in the serene village of Gevhande Apati, just minutes from the shimmering waters of Pawna Lake. The location was chosen with great care, nestled among the rolling hills of Lonavala, offering guests a perfect blend of luxury, privacy, and nature.\n\n" +
    "The founding of Velora Stays came at a time when travellers were seeking meaningful escapes from the chaos of city life. Rather than building another hotel, the founders envisioned something entirely different: luxury private villas where families, friends, and couples could immerse themselves in the beauty of the Western Ghats while enjoying world-class amenities. Every villa was thoughtfully designed with spacious 4 villas, 5 villas, and 7  grand villas layouts, each featuring a private swimming pool, lush garden, modern kitchen, and dedicated BBQ area. The goal was clear: create a sanctuary where guests could reconnect with nature without sacrificing comfort.\n\n" +
    "From its earliest days, Velora Stays distinguished itself through an unwavering focus on privacy and exclusivity. Unlike crowded resorts, each villa at Velora Stays is a self-contained retreat, ensuring that guests enjoy their own private pool, garden, and dedicated caretaker. The property adopted eco-conscious practices, blending seamlessly with the natural landscape while maintaining the highest standards of luxury and cleanliness. Word spread among discerning travellers and weekend warriors from Mumbai and Pune who were looking for a peaceful, upscale getaway near the Sahyadris.\n\n" +
    "The response from guests was overwhelming. Within the first year, Velora Stays had earned a reputation for delivering an unmatched villa experience, with guests consistently praising the stunning lake views, the quality of the amenities, and the warmth of the staff. The property's growth was organic and driven entirely by word-of-mouth recommendations and glowing online reviews. The team remained focused on the core mission: providing every guest with a stay that exceeded their expectations while preserving the natural beauty that makes Pawna Lake so special. Today, Velora Stays continues to build on this foundation, welcoming guests from Mumbai, Pune, and across India who are seeking a genuine luxury escape in the heart of the Western Ghats.",
  image: "/whychooseus.jpeg",
};

export const ABOUT_MISSION: AboutMission = {
  title: "Our Mission",
  description:
    "At Velora Stays, our mission is to redefine the luxury villa experience by creating private retreats where guests can fully immerse themselves in the beauty and tranquility of Pawna Lake. We are dedicated to providing every guest with an exceptional escape, combining modern luxury with the raw beauty of the Western Ghats. We believe that true luxury lies in privacy, space, and the freedom to create unforgettable moments with loved ones.\n\n" +
    "We achieve this mission by investing in our properties first. Each villa is designed with spacious layouts, premium furnishings, and thoughtful amenities that cater to families, friends, and corporate groups. Our dedicated caretakers ensure every detail is taken care of, from the moment a guest arrives to the farewell at checkout. We maintain the highest standards of cleanliness and hygiene, understanding that a pristine villa is the foundation of a great retreat. We continuously upgrade our facilities and add new experiences to ensure that every aspect of the guest experience reflects our commitment to excellence. From the crystal-clear waters of our private pools to the warmth of a bonfire under the stars, every moment at Velora Stays is curated with care. Our mission extends beyond our villas; we strive to be a positive force in the Pawna Lake community, supporting local businesses and creating meaningful employment opportunities for the people of Lonavala.",
};

export const ABOUT_VISION: AboutVision = {
  title: "Our Vision",
  description:
    "Our vision is to become Maharashtra's most trusted and beloved luxury villa brand, known not just for stunning properties but for creating transformative experiences that bring guests back season after season. We envision a future where Velora Stays is the first name that comes to mind for any traveller seeking a private, luxurious, and nature-connected escape near Pawna Lake. We aim to set the standard for what a villa retreat can achieve, inspiring the entire industry to raise the bar on privacy, quality, and guest care.\n\n" +
    "Looking ahead, we plan to expand strategically across Maharashtra, bringing the Velora Stays experience to more stunning locations in the Western Ghats. Each new property will maintain the same unwavering commitment to privacy, luxury, and personalised service that defines our flagship Pawna Lake location. Beyond Maharashtra, we aspire to establish Velora Stays properties in other scenic destinations across India, creating a network of trusted luxury retreats that travellers can rely on wherever their journey takes them. We are also committed to sustainable hospitality practices, reducing our environmental footprint while enhancing the guest experience. Our vision is ultimately about people: creating a brand that guests trust, employees are proud of, and communities welcome.",
};

export const ABOUT_VALUES: AboutValue[] = [
  {
    id: "value-hospitality",
    title: "Hospitality First",
    description:
      "Hospitality is not just what we do; it is who we are. Every team member at Velora Stays is empowered to go above and beyond for our guests, whether it is remembering a returning guest's preference, arranging a special surprise for a celebration, or simply offering a warm and genuine smile. We believe that true hospitality lies in anticipating needs, not just responding to requests. From the caretaker to the housekeeping team, from the kitchen to management, every person on our team shares a deep commitment to making each guest feel valued, respected, and genuinely cared for throughout their entire stay with us.",
    icon: "lucide:heart",
  },
  {
    id: "value-cleanliness",
    title: "Cleanliness Always",
    description:
      "Cleanliness is the non-negotiable foundation of everything we do at Velora Stays. We maintain hospital-grade sanitisation standards, use premium cleaning products, and follow rigorous cleaning checklists for every villa and common area. Our housekeeping team undergoes regular training on the latest hygiene protocols, and every villa is inspected before guest arrival to ensure it meets our exacting standards. We invest in modern cleaning equipment, regularly deep-clean all fabrics and furnishings, and maintain impeccable cleanliness in our pools, gardens, and common spaces. For us, cleanliness is not just about appearance; it is about the health, safety, and peace of mind of every guest who walks through our doors.",
    icon: "lucide:sparkles",
  },
  {
    id: "value-guest-centric",
    title: "Guest-Centric",
    description:
      "Every decision we make at Velora Stays starts with a simple question: how will this benefit our guests? From the selection of mattresses and linens to the design of our BBQ areas and the training of our staff, guest comfort and satisfaction are our primary drivers. We actively seek and welcome guest feedback through multiple channels, and we use this input to continuously refine and improve our services. Our guest relations team is available around the clock to address concerns, and we take pride in resolving issues quickly and generously. We view every interaction as an opportunity to create a positive lasting impression and turn first-time visitors into lifelong advocates.",
    icon: "lucide:user-check",
  },
  {
    id: "value-luxury",
    title: "Private Luxury",
    description:
      "We believe that true luxury means having your own private space to unwind, connect, and create memories. At Velora Stays, every villa comes with its own private swimming pool, lush garden, modern kitchen, and BBQ area, ensuring complete exclusivity for our guests. We have mastered the art of delivering premium touches in a private villa setting, from designer interiors and high-speed WiFi to gourmet kitchen setups and bonfire arrangements. Our pricing is transparent with no hidden charges, and we continuously work to ensure that every rupee our guests spend delivers maximum comfort, privacy, and satisfaction.",
    icon: "lucide:crown",
  },
  {
    id: "value-improvement",
    title: "Continuous Improvement",
    description:
      "The hospitality industry is always evolving, and so are we. At Velora Stays, we foster a culture of continuous learning and improvement at every level of the organisation. We invest in regular staff training programs, stay current with industry best practices, and actively seek innovative solutions to enhance the guest experience. Our management team conducts monthly reviews of guest feedback, operational metrics, and industry trends to identify opportunities for enhancement. We embrace technology that simplifies processes and improves convenience for our guests, from our streamlined online booking system to our WhatsApp-based guest support. Complacency has no place at Velora Stays; we are always striving to be better today than we were yesterday.",
    icon: "lucide:trending-up",
  },
];

export const ABOUT_MILESTONES: Milestone[] = [
  {
    id: "milestone-2022",
    year: "2022",
    title: "Founded",
    description:
      "Velora Stays opened its doors in Gevhande Apati, near Pawna Lake, Lonavala. Founded by Theveloras  stayswith a vision to provide luxury private villa experiences, the property launched with 3 carefully designed villas. Despite being a new entrant, the property quickly earned a reputation for exceptional privacy, stunning views, and warm service.",
  },
  {
    id: "milestone-2023",
    year: "2023",
    title: "500th Guest",
    description:
      "Within its first year of operation, Velora Stays welcomed its 500th guest, a milestone that validated the growing demand for luxury villa experiences near Mumbai and Pune. The property achieved an average guest rating of 5.0 on Google and received its first batch of glowing reviews on MakeMyTrip and Airbnb, establishing a strong foundation for organic growth through word-of-mouth recommendations.",
  },
  {
    id: "milestone-2024",
    year: "2024",
    title: "Expanded to 5 Villas",
    description:
      "Responding to growing demand, Velora Stays expanded its capacity from 3 to 5 luxury villas, adding new villa categories including the Premium 5 villas and the Grand 7 villas . The expansion included a renovation of the common areas, the addition of new outdoor activities, and the introduction of enhanced guest experience packages. The property also launched its direct booking platform for a seamless reservation experience.",
  },
  {
    id: "milestone-2025",
    year: "2025",
    title: "100+ Reviews",
    description:
      "Velora Stays crossed the milestone of 100+ cumulative verified reviews across Google, MakeMyTrip, and Airbnb, with an overall rating of 5.0 stars. The property was recognised as one of the top luxury villa stays near Pawna Lake and received the Guest Satisfaction Award from Airbnb. The team continued to innovate with new villa amenities, curated experiences, and enhanced guest services.",
  },
];

export const SUSTAINABILITY: Sustainability = {
  title: "Our Sustainability Promise",
  description:
    "At Velora Stays, we believe that providing exceptional luxury and protecting our planet are not competing goals but complementary commitments. Since our founding, we have worked to integrate sustainable practices into every aspect of our operations, recognising that our responsibility extends beyond our guests to the pristine environment of Pawna Lake and the Sahyadri mountains. Our sustainability journey is ongoing, and we continuously seek new ways to reduce our environmental footprint while maintaining the high standards our guests expect.\n\n" +
    "Energy conservation is a cornerstone of our sustainability efforts. We have transitioned our villas to energy-efficient LED lighting and solar-powered water heating systems, significantly reducing our electricity consumption. Our air conditioning systems are equipped with inverter technology that adjusts cooling output based on room occupancy and ambient temperature, reducing energy waste. We have installed motion sensors in common areas that automatically adjust lighting based on movement, and our outdoor lighting is designed to minimise light pollution while maintaining safety.\n\n" +
    "Water conservation is equally important to us, especially given our location near Pawna Lake. We have installed water-efficient fixtures throughout our villas, including low-flow showerheads, dual-flush toilets, and sensor-operated taps in common areas. Our swimming pools use advanced filtration systems that reduce water waste, and we encourage guests to participate in our towel and linen reuse programme. Rainwater harvesting systems supplement our water supply during the monsoon season.\n\n" +
    "We are committed to minimising our environmental impact. Our villas are stocked with refillable glass bottles of filtered water instead of disposable plastic bottles. Bathroom amenities are provided in eco-friendly dispensers rather than individual plastic packets. We use biodegradable cleaning products and partner with local waste management services to ensure proper segregation and recycling of waste. Our kitchen operations prioritise composting organic waste and minimising food waste.\n\n" +
    "We prioritise sourcing food and supplies locally whenever possible. Our kitchen features ingredients sourced from local farms and markets in the Lonavala region, supporting the regional economy while reducing transportation emissions. Our housekeeping products are selected from Indian brands that use biodegradable and eco-friendly formulations. We partner with local artisans and businesses for villa furnishings and decorations, contributing to the livelihoods of small-scale entrepreneurs in the Pawna Lake community.\n\n" +
    "Waste management at Velora Stays follows a structured segregation and reduction programme. We separate waste into organic, recyclable, and non-recyclable streams, ensuring maximum diversion from landfills. Organic waste from our kitchen is composted and used in our gardens. Recyclable materials including paper, cardboard, glass, and metal are collected and sent to certified recycling facilities. We are continually working to reduce overall waste generation by reviewing procurement practices, minimising food waste in our kitchen, and encouraging guests to participate in our sustainability initiatives.",
};
