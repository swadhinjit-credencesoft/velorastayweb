export interface JamindarRoom {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  currency: string;
  priceUnit: string;
  maxOccupancy: number;
  bed: string;
  size: string;
  image: string;
  images: string[];
  amenities: string[];
  cta: {
    label: string;
    href: string;
  };
}

export interface JamindarScene {
  title: string;
  subtitle: string;
  image: string;
}

export interface JamindarJourneyStep {
  step: string;
  title: string;
  desc: string;
  image: string;
}

export interface JamindarExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
}

export interface JamindarHorizonScene {
  scene: string;
  word: string;
  caption: string;
  image: string;
}

export interface JamindarGalleryItem {
  src: string;
  alt: string;
  caption: string;
  span?: "large" | "tall" | "wide" | "normal";
}

export const jamindarBooking = {
  enabled: true,
  url: "https://bookone.io/Jamindar-Nest?bookingEngine=true",
  propertyId: "3638",
  phone: "+91 8337985913",
  whatsapp: "+91 8337985913",
  email: "hkhuntia88@gmail.com",
};

export const jamindarData = {
  name: "Jamindar Nest",
  tagline: "A New Chapter of Heritage",
  slogan: "Stay Where Heritage Breathes",
  logo: "/images/jamindar/logo.png",
  location: "Chakra Tirtha Road, Puri, Odisha 752002",
  geo: {
    latitude: 19.803225,
    longitude: 85.850055,
  },
  hero: {
    eyebrow: "JAMINDAR NEST",
    chapter: "A NEW CHAPTER OF HERITAGE",
    title: "STAY WHERE HERITAGE BREATHES",
    description:
      "A refined stay experience shaped by warmth, character and the spirit of Odisha.",
    image: "/images/jamindar/homeherojamidar.avif",
    ctaPrimary: {
      label: "BOOK YOUR STAY",
      href: jamindarBooking.url,
    },
    ctaSecondary: {
      label: "EXPLORE THE NEST",
      href: "#intro",
    },
    scrollLabel: "SCROLL TO DISCOVER",
  },
  intro: {
    number: "01 — THE NEST",
    heading: "A QUIET PLACE TO ARRIVE",
    quote:
      "Jamindar Nest is imagined as a more intimate expression of hospitality — a place to slow down, settle in and experience the character of Odisha.",
    description:
      "Located on Chakratirtha Road in Puri, Jamindar Nest provides a peaceful sanctuary for families, couples, and travelers seeking rest and thoughtful hospitality. Situated close to the golden beach, sacred shrines, and vibrant local markets, it blends calm surroundings with effortless access to the wonders of Puri.",
    image: "/images/jamindar/homeherojamidar.avif",
    badge: "Boutique Heritage Stay",
  },
  cinematicStory: [
    {
      title: "THE HOUSE",
      subtitle: "Welcoming spaces defined by quiet elegance",
      image: "/images/jamindar/exterior.webp",
    },
    {
      title: "THE DETAILS",
      subtitle: "Authentic character, natural textures, and traditional warmth",
      image: "/images/jamindar/architecture-01.webp",
    },
    {
      title: "THE LIGHT",
      subtitle: "Sunlit terraces and soothing coastal breezes",
      image: "/images/jamindar/interior-01.webp",
    },
    {
      title: "THE EXPERIENCE",
      subtitle: "A peaceful retreat just moments from the holy sea",
      image: "/images/jamindar/dining-01.webp",
    },
  ] as JamindarScene[],
  journey: [
    {
      step: "01",
      title: "ARRIVAL",
      desc: "Step off Chakra Tirtha Road into a calming sanctuary sheltered from the city's lively pulse.",
      image: "/images/jamindar/homeherojamidar.avif",
    },
    {
      step: "02",
      title: "THE HOUSE",
      desc: "Experience the timeless balance of traditional warmth and contemporary comfort.",
      image: "/images/jamindar/exterior.webp",
    },
    {
      step: "03",
      title: "THE NEST",
      desc: "Clean, air-conditioned rooms thoughtfully prepared for deep rest and peaceful mornings.",
      image: "/images/jamindar/room-01.webp",
    },
    {
      step: "04",
      title: "THE TABLE",
      desc: "Wholesome home-style hospitality and flavours rooted in Odisha's culinary heritage.",
      image: "/images/jamindar/dining-01.webp",
    },
    {
      step: "05",
      title: "THE EXPERIENCE",
      desc: "Quiet moments on the open-air terrace as evening coastal breezes roll in.",
      image: "/images/jamindar/experience-01.webp",
    },
    {
      step: "06",
      title: "ODISHA",
      desc: "Take morning walks along Puri beach or seek blessings at the sacred Shri Jagannath Temple.",
      image: "/images/jamindar/odisha-01.webp",
    },
  ] as JamindarJourneyStep[],
  // NOTE: rooms are intentionally NOT defined here. Jamindar Nest rooms come
  // from thehotelmate property 3638 at build time via getApiJamindarRooms().
  experiences: [
    {
      id: "heritage",
      title: "HERITAGE",
      subtitle: "Chakratirtha & Sacred Shrines",
      desc: "Immerse yourself in the revered spiritual geography of Chakra Tirtha and the eternal presence of Jagannath Puri.",
      image: "/images/jamindar/experience-01.webp",
    },
    {
      id: "relaxation",
      title: "RELAXATION",
      subtitle: "Open-Air Terrace & Sea Breeze",
      desc: "Unwind under open skies on the terrace, catching the gentle coastal wind after a day of spiritual exploration.",
      image: "/images/jamindar/architecture-01.webp",
    },
    {
      id: "culinary",
      title: "CULINARY",
      subtitle: "Wholesome Comfort Food",
      desc: "Savor honest, nourishing regional flavours served with the unhurried warmth of genuine Odia hospitality.",
      image: "/images/jamindar/dining-01.webp",
    },
    {
      id: "culture",
      title: "CULTURE",
      subtitle: "Living Odia Traditions",
      desc: "Connect with the vibrant local crafts, temple arts, and timeless rhythms that make Puri truly unique.",
      image: "/images/jamindar/odisha-01.webp",
    },
  ] as JamindarExperienceItem[],
  odisha: {
    eyebrow: "THE SPIRIT OF ODISHA",
    heading: "SACRED SHORES & LIVING HERITAGE",
    description:
      "Puri is a city where every dawn brings devotional hymns and the rhythm of temple bells mingling with the sea. Jamindar Nest was conceived to honor this living spirit — offering travelers an authentic connection to the culture, shoreline, and peaceful soul of Odisha.",
    image: "/images/jamindar/odisha-01.webp",
  },
  horizon: {
    eyebrow: "JAMINDAR NEST",
    heading: "BEYOND THE STAY",
    description:
      "A cinematic visual journey through moments of stillness, light, and heritage.",
    scenes: [
      {
        scene: "Scene 01",
        word: "ARRIVE.",
        caption: "A calm sanctuary sheltered from the noise.",
        image: "/images/jamindar/horizon-01.webp",
      },
      {
        scene: "Scene 02",
        word: "PAUSE.",
        caption: "Soft morning light filtering through traditional archways.",
        image: "/images/jamindar/horizon-02.webp",
      },
      {
        scene: "Scene 03",
        word: "DISCOVER.",
        caption: "Thoughtful comforts nestled in genuine warmth.",
        image: "/images/jamindar/horizon-03.webp",
      },
      {
        scene: "Scene 04",
        word: "BELONG.",
        caption: "Spaces created for deep rest and peaceful reflection.",
        image: "/images/jamindar/horizon-04.webp",
      },
      {
        scene: "Scene 05",
        word: "REMEMBER.",
        caption: "Golden hours turning into serene coastal twilights.",
        image: "/images/jamindar/horizon-05.webp",
      },
    ] as JamindarHorizonScene[],
  },
  gallery: [
    {
      src: "/images/jamindar/exterior.webp",
      alt: "Jamindar Nest Exterior Façade",
      caption: "The welcoming façade on Chakra Tirtha Road",
      span: "large",
    },
    {
      src: "/images/jamindar/room-01.webp",
      alt: "Signature Nest Room",
      caption: "Restful sanctuary with clean bedding",
      span: "tall",
    },
    {
      src: "/images/jamindar/homeherojamidar.avif",
      alt: "Entrance Portal",
      caption: "Quiet entrance courtyard",
      span: "wide",
    },
    {
      src: "/images/jamindar/architecture-01.webp",
      alt: "Architectural Details",
      caption: "Clean lines and traditional craft",
      span: "normal",
    },
    {
      src: "/images/jamindar/room-02.webp",
      alt: "Interiors & Light",
      caption: "Comfortable layout with natural light",
      span: "normal",
    },
    {
      src: "/images/jamindar/dining-01.webp",
      alt: "Terrace & Dining",
      caption: "Shared space for wholesome moments",
      span: "wide",
    },
  ] as JamindarGalleryItem[],
  cta: {
    eyebrow: "AN INVITATION",
    heading: "YOUR NEXT STORY BEGINS HERE.",
    description:
      "Experience the tranquility and heritage warmth of Jamindar Nest in Puri. Reserve directly for the best guaranteed rate and attentive service.",
    bgImage: "/images/jamindar/sunset.webp",
    primaryButton: {
      label: "BOOK YOUR STAY",
      href: jamindarBooking.url,
    },
    secondaryButton: {
      label: "EXPLORE THE NEST",
      href: "#intro",
    },
  },
};
