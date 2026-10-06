import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero/PageHero";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { EVENT_TYPES, EVENTS_CONTENT } from "@/data/events";
import { SITE_INFO } from "@/data/site";
import Icon from "@/components/Icon/Icon";
import styles from "./events.module.scss";

export const metadata: Metadata = {
  title: "Events & Banquet Hall | Bishnu Bhaban Puri",
  description:
    "Host religious ceremonies, family gatherings, yatra groups, and social functions at Bishnu Bhaban. Convenient hall arrangements and multi-room group stays located right at the West Gate of Shri Jagannath Temple, Puri.",
  alternates: { canonical: "/events" },
  openGraph: {
    title: "Events & Banquet Hall | Bishnu Bhaban Puri",
    description:
      "Host sacred ceremonies, thread ceremonies, family gatherings, and group events right at the West Gate of Shri Jagannath Temple.",
    url: `${SITE_INFO.url}/events`,
    images: [{ url: `${SITE_INFO.url}/bishnyhomeimage/homehero1.png`, width: 1200, height: 630, alt: "Bishnu Bhaban Events" }],
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Events & Banquet", href: "/events" },
];

export default function EventsPage() {
  return (
    <div className={styles.page}>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: SITE_INFO.url },
          { name: "Events & Banquet", url: `${SITE_INFO.url}/events` },
        ])}
      />

      {/* Hero Banner */}
      <PageHero
        eyebrow={EVENTS_CONTENT.eyebrow}
        heading={EVENTS_CONTENT.heading}
        description={EVENTS_CONTENT.description}
        breadcrumbs={breadcrumbs}
        bgImage="/bishnyhomeimage/homehero1.png"
      />

      {/* Events Grid */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {EVENT_TYPES.map((event) => (
              <div key={event.id} className={styles.card}>
                <div className={styles.cardMedia}>
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className={styles.cardImage}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={styles.cardOverlay} />
                  <div className={styles.badgeTop}>
                    <span className={styles.hallBadge}>
                      <Icon icon="lucide:sparkles" width={12} height={12} />
                      {event.hallSize}
                    </span>
                  </div>
                  <div className={styles.cardMediaContent}>
                    <h2 className={styles.cardTitle}>{event.name}</h2>
                    <p className={styles.cardTagline}>{event.tagline}</p>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <div>
                    <p className={styles.cardDesc}>{event.description}</p>

                    <div className={styles.featuresList}>
                      {event.features.map((feature) => (
                        <span key={feature} className={styles.featureTag}>
                          <Icon icon="lucide:check" width={12} height={12} />
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className={styles.metaGrid}>
                      <div className={styles.metaItem}>
                        <Icon icon="lucide:users" width={16} height={16} className={styles.metaIcon} />
                        <span>Capacity: <strong>{event.capacity} Guests</strong></span>
                      </div>
                      <div className={styles.metaItem}>
                        <Icon icon="lucide:map-pin" width={16} height={16} className={styles.metaIcon} />
                        <span>Location: <strong>West Gate</strong></span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.cardActions}>
                    <Link href={`/events/${event.slug}`} className={styles.primaryBtn}>
                      <span>Explore Details</span>
                      <Icon icon="lucide:arrow-right" width={14} height={14} />
                    </Link>
                    <a
                      href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`}
                      className={styles.secondaryBtn}
                    >
                      <Icon icon="lucide:phone" width={14} height={14} />
                      <span>Contact Us</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <span className={styles.ctaEyebrow}>Personalised Group Arrangements</span>
          <h2 className={styles.ctaHeading}>Plan Your Event or Group Stay</h2>
          <p className={styles.ctaDescription}>
            Contact our desk to discuss function hall availability, multi-room group stays, and special arrangements for your pilgrimage or family event.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaPrimaryBtn}>
              <Icon icon="lucide:mail" width={16} height={16} />
              <span>Enquire for Booking</span>
            </Link>
            <a
              href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`}
              className={styles.ctaSecondaryBtn}
            >
              <Icon icon="lucide:phone" width={16} height={16} />
              <span>Call {SITE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
