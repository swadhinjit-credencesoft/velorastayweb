import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero/PageHero";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { VILLAS, VILLAS_CONTENT } from "@/data/villas";
import { SITE_INFO } from "@/data/site";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { generateCanonicalUrl } from "@/utils/seo";
import styles from "./villas.module.scss";

export const metadata: Metadata = {
  title: "Our Villas | Luxury Villa Stays Near Pawna Lake, Lonavala",
  description:
    "Choose from our range of luxury villas at Velora Stays near Pawna Lake, Lonavala. From cozy 4 BHK to expansive 7 BHK, each features private pool, BBQ, and stunning lake views.",
  alternates: { canonical: "/villas" },
  openGraph: {
    title: "Our Villas | Velora Stays Pawna Lake",
    description: "Browse our luxury villas near Pawna Lake with private pool, BBQ, and stunning views.",
    url: generateCanonicalUrl("/villas"),
  },
};

export default function VillasPage() {
  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: SITE_INFO.url },
          { name: "The Villa", url: `${SITE_INFO.url}/villas` },
        ])}
      />
      <PageHero
        eyebrow={VILLAS_CONTENT.eyebrow}
        heading={VILLAS_CONTENT.heading}
        description={VILLAS_CONTENT.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "The Villa", href: "/villas" }]}
        bgImage="/villaheroimg.jpeg"
      />
      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {VILLAS.map((villa) => (
            <Link
              key={villa.id}
              href={`/villas/${villa.slug}`}
              className={styles.card}
            >
              <div className={styles.imageWrap}>
                <Image src={villa.images[0]?.src} alt={villa.images[0]?.alt} width={400} height={250} className={styles.image} />
                {villa.tag && <span className={styles.tag}>{villa.tag}</span>}
              </div>
              <div className={styles.cardBody}>
                <h2 className={styles.name}>{villa.name}</h2>
                <p className={styles.tagline}>{villa.tagline}</p>
                <div className={styles.meta}>
                  <span>{villa.bedrooms} BHK</span>
                  <span>{villa.size} {villa.sizeUnit}</span>
                  <span>Max {villa.maxOccupancy} guests</span>
                </div>
                <div className={styles.priceRow}>
                  <span className={styles.price}>{villa.currency}{villa.price.toLocaleString("en-IN")}</span>
                  {villa.originalPrice && <span className={styles.originalPrice}>{villa.currency}{villa.originalPrice.toLocaleString("en-IN")}</span>}
                  <span className={styles.unit}>/ {villa.priceUnit}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
