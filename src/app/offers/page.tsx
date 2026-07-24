import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero/PageHero";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { OFFERS, OFFERS_CONTENT } from "@/data/offers";
import { SITE_INFO } from "@/data/site";
import styles from "./offers.module.scss";

export const metadata: Metadata = {
  title: "Special Offers & Deals | Velora Stays",
  description:
    "Save big with exclusive villa offers at Velora Stays. Weekend getaways, early bird discounts, long stay deals, couple packages, and more in Lonavala.",
  openGraph: {
    title: "Special Offers | Velora Stays",
    description: OFFERS_CONTENT.description,
    url: `${SITE_INFO.url}/offers`,
  },
};

export default function OffersPage() {
  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: SITE_INFO.url },
          { name: "Offers", url: `${SITE_INFO.url}/offers` },
        ])}
      />
      <PageHero
        eyebrow={OFFERS_CONTENT.eyebrow}
        heading={OFFERS_CONTENT.heading}
        description={OFFERS_CONTENT.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Offers", href: "/offers" }]}
        bgImage="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600"
      />

      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {OFFERS.map((offer) => (
            <Link
              key={offer.id}
              href={`/offers/${offer.slug}`}
              className={styles.card}
            >
              <div className={styles.cardImage}>
                <Image
                  src={offer.image}
                  alt={offer.name}
                  width={600}
                  height={300}
                  className={styles.image}
                />
                <span className={styles.discount}>{offer.discount}</span>
                {offer.popular && (
                  <span className={styles.popular}>Popular</span>
                )}
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.name}>{offer.name}</h3>
                <p className={styles.tagline}>{offer.tagline}</p>
                <p className={styles.desc}>{offer.description}</p>
                <div className={styles.features}>
                  {offer.features.map((f) => (
                    <span key={f} className={styles.feature}>{f}</span>
                  ))}
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.code}>
                    Code: <strong>{offer.code}</strong>
                  </span>
                  <span className={styles.viewLink}>View Details →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
