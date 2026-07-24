import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero/PageHero";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { OFFERS, getOfferBySlug } from "@/data/offers";
import styles from "./offer-detail.module.scss";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return OFFERS.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const offer = getOfferBySlug(params.slug);
  if (!offer) return { title: "Offer Not Found" };
  return {
    title: `${offer.name} | Velora Stays Offers`,
    description: offer.description,
    openGraph: {
      title: `${offer.name} | Velora Stays`,
      description: offer.tagline,
      images: [{ url: offer.image, width: 1200, height: 630, alt: offer.name }],
    },
  };
}

export default function OfferDetailPage({ params }: Props) {
  const offer = getOfferBySlug(params.slug);
  if (!offer) notFound();

  const related = OFFERS.filter((o) => o.slug !== offer.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Offers", url: "/offers" },
          { name: offer.name, url: `/offers/${offer.slug}` },
        ])}
      />

      <section className={styles.hero}>
        <Image
          src={offer.image}
          alt={offer.name}
          width={1600}
          height={600}
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.badges}>
            <span className={styles.discountBadge}>{offer.discount}</span>
            {offer.popular && <span className={styles.popularBadge}>Popular</span>}
          </div>
          <h1 className={styles.heroTitle}>{offer.name}</h1>
          <p className={styles.heroTagline}>{offer.tagline}</p>
        </div>
      </section>

      <section className={styles.detailSection}>
        <div className={styles.detailGrid}>
          <div className={styles.main}>
            <div className={styles.block}>
              <h2 className={styles.blockTitle}>About This Offer</h2>
              <p className={styles.blockText}>{offer.description}</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.blockTitle}>What You Get</h2>
              <ul className={styles.featureList}>
                {offer.features.map((f: string) => (
                  <li key={f} className={styles.featureItem}>
                    <span className={styles.check}>&#10003;</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.block}>
              <h2 className={styles.blockTitle}>Terms &amp; Conditions</h2>
              <ul className={styles.termList}>
                {offer.terms.map((term: string, idx: number) => (
                  <li key={idx} className={styles.termItem}>{term}</li>
                ))}
              </ul>
            </div>

            <div className={styles.validity}>
              <p className={styles.validityLabel}>Valid from</p>
              <p className={styles.validityDates}>
                {offer.validFrom} to {offer.validUntil}
              </p>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <div className={styles.sidebarDiscount}>{offer.discount}</div>
              <p className={styles.sidebarSubtext}>on your booking</p>
              <hr className={styles.sidebarDivider} />
              <p className={styles.sidebarLabel}>Use promo code</p>
              <p className={styles.sidebarCode}>{offer.code}</p>
              <Link href="/booking" className={styles.bookBtn}>Book Now</Link>
              <Link href="/contact" className={styles.askBtn}>Ask a Question</Link>
            </div>

            {related.length > 0 && (
              <div className={styles.relatedSection}>
                <h4 className={styles.relatedTitle}>Other Offers</h4>
                {related.map((o) => (
                  <Link
                    key={o.id}
                    href={`/offers/${o.slug}`}
                    className={styles.relatedCard}
                  >
                    <div className={styles.relatedImage}>
                      <Image src={o.image} alt={o.name} width={80} height={64} className={styles.relatedImg} />
                    </div>
                    <div>
                      <h5 className={styles.relatedName}>{o.name}</h5>
                      <span className={styles.relatedDiscount}>{o.discount}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
