import { SITE_INFO } from "@/data/site";
import { SITE_INFO as NX_SITE_INFO } from "@/data/nx/site";
import type { RoomType } from "@/types";

export function generateHotelSchema(isNx = false) {
  const info = isNx ? NX_SITE_INFO : SITE_INFO;
  const url = isNx ? `${SITE_INFO.url}/yogiraj-nx` : SITE_INFO.url;
  const image = isNx
    ? `${SITE_INFO.url}/yogirajimg/01.avif`
    : `${SITE_INFO.url}/yogirajhero1.png`;

  const hotel: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": `${url}#hotel`,
    name: info.name,
    description: info.description,
    url,
    telephone: info.phone,
    email: info.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: info.address.street,
      addressLocality: info.address.city,
      addressRegion: info.address.state,
      postalCode: info.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: info.geo.latitude,
      longitude: info.geo.longitude,
    },
    priceRange: isNx ? "₹1400 - ₹4500" : "₹1000 - ₹2999",
    checkinTime: info.checkIn,
    checkoutTime: info.checkOut,
    image,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "24-Hour Front Desk", value: true },
      { "@type": "LocationFeatureSpecification", name: "In-House Restaurant", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
      ...(isNx
        ? [
            { "@type": "LocationFeatureSpecification", name: "Elevator", value: true },
            { "@type": "LocationFeatureSpecification", name: "Bathtub Suites", value: true },
          ]
        : []),
    ],
  };

  if (info.reviewCount > 0) {
    hotel.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: info.rating,
      reviewCount: info.reviewCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  return hotel;
}

export function generateRoomSchema(room: RoomType, isNx = false) {
  const hotelUrl = isNx ? `${SITE_INFO.url}/yogiraj-nx` : SITE_INFO.url;
  const roomUrl = `${hotelUrl}/rooms/${room.slug}`;
  const hotelName = isNx ? "Hotel Yogiraj NX" : "Hotel Yogiraj";
  const defaultImage = isNx
    ? `${SITE_INFO.url}/yogirajimg/01.avif`
    : `${SITE_INFO.url}/yogirajhero1.png`;

  const images = (room.images && room.images.length > 0)
    ? room.images.map((img) => (img.src.startsWith("http") ? img.src : `${SITE_INFO.url}${img.src}`))
    : [defaultImage];

  return {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    "@id": `${roomUrl}#room`,
    name: `${room.name} - ${hotelName}`,
    description: room.description || room.tagline,
    url: roomUrl,
    image: images,
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: room.maxOccupancy,
      unitCode: "C62",
    },
    bed: {
      "@type": "BedDetails",
      description: room.bedConfig || room.bedType || "Double Bed",
    },
    offers: {
      "@type": "Offer",
      price: room.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString().split("T")[0],
      url: isNx
        ? `https://bookone.io/Hotel-Yogiraj-Nx?bookingEngine=true`
        : `https://bookone.io/Hotel-Yogiraj?bookingEngine=true`,
    },
    isPartOf: {
      "@type": "Hotel",
      name: hotelName,
      url: hotelUrl,
    },
  };
}

export function generateOrganizationSchema(isNx = false) {
  const info = isNx ? NX_SITE_INFO : SITE_INFO;
  const url = isNx ? `${SITE_INFO.url}/yogiraj-nx` : SITE_INFO.url;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}#organization`,
    name: info.name,
    url,
    description: info.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: info.address.street,
      addressLocality: info.address.city,
      addressRegion: info.address.state,
      postalCode: info.address.pincode,
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: info.phone,
      contactType: "customer service",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_INFO.url}#website`,
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
