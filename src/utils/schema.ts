import { SITE_INFO } from "@/data/site";

export function generateHotelSchema() {
  const hotel: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Hotel",
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
    priceRange: "₹2800 - ₹6200",
    checkinTime: SITE_INFO.checkIn,
    checkoutTime: SITE_INFO.checkOut,
    image: `${SITE_INFO.url}/schemaimg.png`,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "24-Hour Front Desk", value: true },
      { "@type": "LocationFeatureSpecification", name: "On-Site Restaurant", value: true },
    ],
  };

  if (SITE_INFO.reviewCount > 0) {
    hotel.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: SITE_INFO.rating,
      reviewCount: SITE_INFO.reviewCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  return hotel;
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_INFO.name,
    url: SITE_INFO.url,
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
      availableLanguage: ["English", "Hindi"],
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_INFO.name,
    url: SITE_INFO.url,
  };
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
