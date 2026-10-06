import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero/PageHero";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema, generateEventSchema } from "@/utils/schema";
import { EVENT_TYPES, getEventBySlug } from "@/data/events";
import { SITE_INFO } from "@/data/site";
import Icon from "@/components/Icon/Icon";
import styles from "./event-detail.module.scss";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return EVENT_TYPES.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const event = getEventBySlug(params.slug);
  if (!event) return { title: "Event Not Found" };
  return {
    title: `${event.name} | Bishnu Bhaban Puri`,
    description: event.description,
    alternates: { canonical: `/events/${event.slug}` },
    openGraph: {
      title: `${event.name} | Bishnu Bhaban Puri`,
      description: event.tagline,
      images: [{ url: `${SITE_INFO.url}${event.image}`, width: 1200, height: 630, alt: event.name }],
    },
  };
}

export default function EventDetailPage({ params }: Props) {
  const event = getEventBySlug(params.slug);
  if (!event) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Events & Banquet", href: "/events" },
    { label: event.name, href: `/events/${event.slug}` },
  ];

  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: SITE_INFO.url },
          { name: "Events & Banquet", url: `${SITE_INFO.url}/events` },
          { name: event.name, url: `${SITE_INFO.url}/events/${event.slug}` },
        ])}
      />
      <JsonLd
        schema={generateEventSchema({
          name: event.name,
          description: event.description,
          startDate: "2026-01-01",
          endDate: "2026-12-31",
          location: "Bishnu Bhaban, West Gate of Shri Jagannath Temple, Grand Road, Puri, Odisha 752001",
        })}
      />

      <PageHero
        eyebrow="Bishnu Bhaban Puri"
        heading={event.name}
        description={event.tagline}
        breadcrumbs={breadcrumbs}
        bgImage={event.image}
      />

      <section className={styles.detailSection}>
        <div className={styles.container}>
          <div className={styles.layoutGrid}>
            <div className={styles.mainContent}>
              <div className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>About This Arrangement</h2>
                <p className={styles.descriptionText}>
                  {event.longDescription}
                </p>
              </div>

              <div className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>Key Features</h2>
                <div className={styles.featuresGrid}>
                  {event.features.map((feature) => (
                    <span key={feature} className={styles.featureBadge}>
                      <Icon icon="lucide:check" width={14} height={14} />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {event.packages && event.packages.length > 0 && (
                <div className={styles.sectionBlock}>
                  <h2 className={styles.sectionTitle}>Available Packages</h2>
                  <div className={styles.packageGrid}>
                    {event.packages.map((pkg) => (
                      <div
                        key={pkg.id}
                        className={`${styles.packageCard} ${pkg.popular ? styles.popular : ""}`}
                      >
                        {pkg.popular && (
                          <span className={styles.popularBadge}>
                            Most Popular
                          </span>
                        )}
                        <h3 className={styles.packageName}>{pkg.name}</h3>
                        <p className={styles.packageDesc}>{pkg.description}</p>
                        <p className={styles.packagePrice}>{pkg.price}</p>
                        <ul className={styles.packageIncludes}>
                          {pkg.includes.map((item, idx) => (
                            <li key={idx} className={styles.includeItem}>
                              <Icon icon="lucide:check" width={14} height={14} className="text-amber-600" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {event.faqs && event.faqs.length > 0 && (
                <div className={styles.sectionBlock}>
                  <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                  <div className={styles.faqList}>
                    {event.faqs.map((faq) => (
                      <div key={faq.id} className={styles.faqItem}>
                        <h4 className={styles.faqQuestion}>{faq.question}</h4>
                        <p className={styles.faqAnswer}>{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className={styles.sidebar}>
              <div className={styles.overviewCard}>
                <h3 className={styles.overviewTitle}>Event Overview</h3>
                <dl className={styles.overviewList}>
                  <div className={styles.overviewRow}>
                    <dt>Capacity</dt>
                    <dd>Up to {event.capacity} guests</dd>
                  </div>
                  <div className={styles.overviewRow}>
                    <dt>Hall / Space</dt>
                    <dd>{event.hallSize}</dd>
                  </div>
                  <div className={styles.overviewRow}>
                    <dt>Pricing</dt>
                    <dd>{event.priceRange}</dd>
                  </div>
                  <div className={styles.overviewRow}>
                    <dt>Location</dt>
                    <dd>West Gate, Puri</dd>
                  </div>
                </dl>

                <div className={styles.sidebarActions}>
                  <Link href="/contact" className={styles.sidebarPrimaryBtn}>
                    <Icon icon="lucide:mail" width={15} height={15} />
                    <span>Enquire for Booking</span>
                  </Link>
                  <a
                    href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`}
                    className={styles.sidebarSecondaryBtn}
                  >
                    <Icon icon="lucide:phone" width={15} height={15} />
                    <span>Call {SITE_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
