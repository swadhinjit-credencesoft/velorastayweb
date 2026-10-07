import type { NearbyAttraction, SectionContent } from "@/types";

export const NEARBY_CONTENT: SectionContent = {
  eyebrow: "Explore Puri",
  heading: "Temples, Beaches and Everything Around Puri",
  description:
    "Most guests come to Puri for the Shri Jagannath Temple, and Bishnu Bhaban puts you at the West Gate so the walk is measured in minutes, not kilometres. Once you have done darshan, the beach, the other temples, and the markets are all within easy reach on foot or by a short auto ride.",
};

export const NEARBY_ATTRACTIONS: NearbyAttraction[] = [
  {
    id: "jagannath-temple",
    slug: "jagannath-temple",
    name: "Shri Jagannath Temple",
    description:
      "The reason most people are in Puri at all. One of the four Char Dham pilgrimage sites, the temple complex is where Bishnu Bhaban sits, right at the West Gate. The main darshan, the Swarna Vartika purification of the deities, and the evening aarti are all within a few minutes walk of the hotel, which is why our guests can be at the temple gate before the queue forms.",
    image: "/bishnyhomeimage/homehero3.png",
    distance: "50 m",
    travelTime: "1 min walk",
    category: "Temple",
    highlights: [
      "Char Dham pilgrimage site",
      "Main darshan and aarti",
      "Swarna Vartika purification",
      "West Gate entrance",
    ],
    tips:
      "Carry a cotton towel and be ready to remove footwear before entering. For early morning darshan, leave the hotel by 5:00 AM to be near the gate when it opens.",
    mapUrl: "https://maps.google.com/?q=Shri +Jagannath+Temple+Puri",
  },
  {
    id: "vimala-temple",
    slug: "vimala-temple",
    name: "Vimala Temple",
    description:
      "A small, beautifully maintained stone temple dedicated to Goddess Vimala, and by general belief the temple where Lord Jagannath's sister Lakshmi is said to have taken her final meal before leaving for Mathura. It is a short walk from the main complex and is often quieter than the main temple, which guests appreciate.",
    image: "/vimalatemple.png",
    distance: "400 m",
    travelTime: "5 min walk",
    category: "Temple",
    highlights: [
      "Ancient stone temple",
      "Quieter than the main complex",
      "Dedicated to Goddess Vimala",
      "Short walk from the hotel",
    ],
    tips:
      "Best visited in the morning when the stone is cool and the courtyard is still uncrowwed. Photography is restricted inside the sanctum.",
    mapUrl: "https://maps.google.com/?q=Vimala+Temple+Puri",
  },
  {
    id: "puri-beach",
    slug: "puri-beach",
    name: "Puri Beach",
    description:
      "A long crescent of sand on the Bay of Bengal, and one of the reasons to come to Puri beyond the temple. Sunrise here is the main event, with the fishing boats going out and the first light coming up over the water. Swimming is possible but the currents are strong, so most visitors use it for walking.",
    image: "/puriseabeach.png",
    distance: "1.5 km",
    travelTime: "6 min drive",
    category: "Beach",
    highlights: [
      "Bay of Bengal shoreline",
      "Sunrise and sunset views",
      "Wide sandy beach",
      "Street food nearby",
    ],
    tips:
      "Go at sunrise. Swim only in the patrolled areas and check the lifeguard flags, since the currents in Puri are stronger than they look.",
    mapUrl: "https://maps.google.com/?q=Puri+Beach",
  },
  {
    id: "nilachala",
    slug: "nilachala",
    name: "Nilachala",
    description:
      "The sacred spot where Lord Jagannath is believed to have rested for eight months before setting out for Mathura, and where the Rath Yatra chariots begin their journey. The sacred grove is close to the temple complex and is a quiet place to reflect if you want a break from the crowds.",
    image: "/nilachala.png",
    distance: "700 m",
    travelTime: "9 min walk",
    category: "Pilgrimage",
    highlights: [
      "Rath Yatra starting point",
      "Sacred grove",
      "Quiet atmosphere",
      "Walkable from the hotel",
    ],
    tips:
      "Rath Yatra season brings very heavy crowds. Outside the festival, it is a calm, shaded place to sit for a while.",
    mapUrl: "https://maps.google.com/?q=Nilachala+Puri",
  },
  {
    id: "rath-yatra",
    slug: "rath-yatra",
    name: "Rath Yatra",
    description:
      "Puri's most famous festival, when three enormous chariots carrying Jagannath, Balabhadra, and Subhadra are pulled through the streets by hand. It draws enormous crowds from across India and is worth planning a trip around if you can time your visit to the season.",
    image: "/rathayatrapuri.png",
    distance: "1 km",
    travelTime: "12 min walk",
    category: "Festival",
    highlights: [
      "Hand-pulled chariots",
      "UNESCO-listed festival",
      "Thousands of devotees",
      "Multi-day celebration",
    ],
    tips:
      "Book well in advance for the season. Stay near the temple if you want to see the chariots up close without fighting through the crowd.",
    mapUrl: "https://maps.google.com/?q=Rath+Yatra+Puri",
  },
  {
    id: "konark-sun-temple",
    slug: "konark-sun-temple",
    name: "Konark Sun Temple",
    description:
      "The 13th-century Sun Temple at Konark, a UNESCO World Heritage Site about an hour and a half from Puri. A stone chariot with twelve pairs of carved wheels, it is one of the most ambitious structures ever built in India and the standard day trip for anyone staying in Puri for more than two nights.",
    image: "/konarksuntemple.png",
    distance: "65 km",
    travelTime: "1 hr 40 min drive",
    category: "Heritage",
    highlights: [
      "UNESCO World Heritage Site",
      "Stone chariot with carved wheels",
      "13th-century architecture",
      "Classic day trip from Puri",
    ],
    tips:
      "Start early to beat both the heat and the coach tours. The ASI museum on site is worth the extra thirty minutes.",
    mapUrl: "https://maps.google.com/?q=Konark+Sun+Temple",
  },
  {
    id: "dhauli-shanti-stupa",
    slug: "dhauli-shanti-stupa",
    name: "Dhauli Shanti Stupa",
    description:
      "The white peace pagoda on the Dhauli hill, on the road between Puri and Konark. Ashoka's edicts are carved into the rock face at the base, and the view over the coast and the palm-lined road is the best available from the stretch.",
    image: "/dhaulishantistupa.png",
    distance: "16 km",
    travelTime: "35 min drive",
    category: "Heritage",
    highlights: [
      "White peace pagoda",
      "Ashokan edicts in rock",
      "Coastal hilltop view",
      "On the Konark road",
    ],
    tips:
      "You can combine this with Konark in a single day trip since it is directly on the road between the two.",
    mapUrl: "https://maps.google.com/?q=Dhauli+Shanti+Stupa",
  },
  {
    id: "grand-road",
    slug: "grand-road",
    name: "Grand Road & Market",
    description:
      "The main shopping street in Puri, running along the temple complex, and effectively the front door of the hotel. Rice, sweets, flowers, and puja samagri are sold here, alongside sandalwood and shell souvenirs, all within a few minutes walk.",
    image: "/grandroadmarketpuri.png",
    distance: "100 m",
    travelTime: "2 min walk",
    category: "Shopping",
    highlights: [
      "Puri's main market street",
      "Sandalwood and shell work",
      "Local sweets and prasad",
      "Immediately outside the hotel",
    ],
    tips:
      "Best time is evening when the temple aarti is on and the street is busy. Bargaining is expected but keep it friendly.",
    mapUrl: "https://maps.google.com/?q=Grand+Road+Puri+Market",
  },
  {
    id: "chandrabhaga",
    slug: "chandrabhaga",
    name: "Chandrabhaga Beach",
    description:
      "The quieter northern end of Puri beach, where the Chilika lake meets the sea. Fewer people than the main beach, cleaner sand, and the spot where the fishing boats come in. A better choice if the main stretch is too crowded.",
    image: "/chandrabhagabeach.png",
    distance: "3 km",
    travelTime: "10 min drive",
    category: "Beach",
    highlights: [
      "Quieter than main Puri beach",
      "Fishing boats arrive here",
      "Cleaner shoreline",
      "Good for sunrise walks",
    ],
    tips:
      "Take an auto rather than walking all the way. The stretch past the main beach is not lit well after dark.",
    mapUrl: "https://maps.google.com/?q=Chandrabhaga+Beach+Puri",
  },
  {
    id: "sudhasagar",
    slug: "sudhasagar",
    name: "Swaraj Dweep & Chilika Lake",
    description:
      "Dhauli, Brahmapur, and a small island where the Chilika lake meets the sea, all on the road south of Puri. Birdlife here is genuinely exceptional, with migratory species arriving in their thousands each winter, and it is a popular day trip from the temple town.",
    image: "/chilikalake.png",
    distance: "12 km",
    travelTime: "30 min drive",
    category: "Nature",
    highlights: [
      "Migratory bird sanctuary",
      "Largest brackish water lagoon in India",
      "Boat safari to the island",
      "Best in winter months",
    ],
    tips:
      "November to February is the birdwatching season. Book the boat through a registered operator rather than on the roadside.",
    mapUrl: "https://maps.google.com/?q=Chilika+Lake+Puri",
  },
  {
    id: "pipili-market",
    slug: "pipili-market",
    name: "Pipili Craft Village",
    description:
      "A town about 17 km north of Puri known for its appliqué work, which uses small pieces of coloured cloth stitched together into large patterns. The cloth itself is called patta, and the designs are the reason most people make the trip.",
    image: "/pipilicraftvillage.png",
    distance: "17 km",
    travelTime: "35 min drive",
    category: "Shopping",
    highlights: [
      "Traditional appliqué craft",
      "Handmade textiles",
      "Traditional market",
      "Good for gifts",
    ],
    tips:
      "November to February has a large local market. Outside that period the shops operate on request, so call ahead.",
    mapUrl: "https://maps.google.com/?q=Pipili+Odisha",
  },
];

export function getAttractionBySlug(slug: string): NearbyAttraction | undefined {
  return NEARBY_ATTRACTIONS.find((attraction) => attraction.slug === slug);
}

export function getAttractionsByCategory(category: string): NearbyAttraction[] {
  return NEARBY_ATTRACTIONS.filter(
    (attraction) => attraction.category.toLowerCase() === category.toLowerCase(),
  );
}

export function getAllCategories(): string[] {
  const categories = new Set(NEARBY_ATTRACTIONS.map((attraction) => attraction.category));
  return Array.from(categories).sort();
}
