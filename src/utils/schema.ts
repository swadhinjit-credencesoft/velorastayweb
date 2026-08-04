import { SITE_INFO } from "@/data/site";

interface SchemaOrgProps {
  type: string;
  data?: Record<string, unknown>;
}

export function generateHotelSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    url: SITE_INFO.url,
    telephone: SITE_INFO.phone,
    email: SITE_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_INFO.address.street,
      addressLocality: SITE_INFO.address.city,
      addressRegion: SITE_INFO.address.state,
      postalCode: SITE_INFO.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_INFO.geo.latitude,
      longitude: SITE_INFO.geo.longitude,
    },
    starRating: {
      "@type": "Rating",
      ratingValue: 5,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE_INFO.rating,
      reviewCount: SITE_INFO.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    priceRange: "₹8000 - ₹35000",
    checkinTime: SITE_INFO.checkIn,
    checkoutTime: SITE_INFO.checkOut,
    image: "/schemaimage.jpeg",
    sameAs: [
      "https://www.instagram.com/the_explorerstays",
    ],
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_INFO.url}#business`,
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    url: SITE_INFO.url,
    telephone: SITE_INFO.phone,
    email: SITE_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_INFO.address.street,
      addressLocality: SITE_INFO.address.city,
      addressRegion: SITE_INFO.address.state,
      postalCode: SITE_INFO.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_INFO.geo.latitude,
      longitude: SITE_INFO.geo.longitude,
    },
    image: "/schemaimage.jpeg",
    priceRange: "₹8000-₹35000",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE_INFO.rating,
      reviewCount: SITE_INFO.reviewCount,
      bestRating: 5,
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_INFO.name,
    url: SITE_INFO.url,
    logo: "/veloralogo.png",
    description: SITE_INFO.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_INFO.address.street,
      addressLocality: SITE_INFO.address.city,
      addressRegion: SITE_INFO.address.state,
      postalCode: SITE_INFO.address.pincode,
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_INFO.phone,
      contactType: "customer service",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_INFO.name,
    url: SITE_INFO.url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_INFO.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateVillaSchema(villa: {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  capacity: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${villa.name} - ${SITE_INFO.name}`,
    description: villa.description,
    image: villa.image,
    offers: {
      "@type": "Offer",
      price: villa.price,
      priceCurrency: villa.currency,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: SITE_INFO.name,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE_INFO.rating,
      reviewCount: SITE_INFO.reviewCount,
      bestRating: 5,
    },
  };
}

export function generateRoomSchema(room: {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  capacity: number;
}) {
  return generateVillaSchema(room);
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateReviewSchema(reviews: {
  author: string;
  rating: number;
  text: string;
  date: string;
}[]) {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: SITE_INFO.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE_INFO.rating,
      reviewCount: SITE_INFO.reviewCount,
      bestRating: 5,
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
      },
      reviewBody: review.text,
      datePublished: review.date,
    })),
  };
}

export function generateOfferSchema(offer: {
  name: string;
  description: string;
  discount: string;
  validUntil: string;
  code: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: offer.name,
    description: offer.description,
    discount: offer.discount,
    validThrough: offer.validUntil,
    promoCode: offer.code,
    seller: {
      "@type": "Organization",
      name: SITE_INFO.name,
    },
    availability: "https://schema.org/InStock",
    priceCurrency: "INR",
  };
}

export function generateEventSchema(event: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: {
      "@type": "Place",
      name: event.location,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE_INFO.address.street,
        addressLocality: SITE_INFO.address.city,
        addressRegion: SITE_INFO.address.state,
        postalCode: SITE_INFO.address.pincode,
      },
    },
    organizer: {
      "@type": "Organization",
      name: SITE_INFO.name,
      url: SITE_INFO.url,
    },
  };
}

export function generateBlogSchema(post: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_INFO.name,
      url: SITE_INFO.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_INFO.url}${post.url}`,
    },
  };
}
