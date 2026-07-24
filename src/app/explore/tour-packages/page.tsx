import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import Icon from "@/components/Icon/Icon";
import { SITE_INFO } from "@/data/site";
import { TOUR_PACKAGES, TOURS_CONTENT } from "@/data/tours";
import styles from "./Tours.module.scss";

export const metadata: Metadata = {
  title: "Tour Packages in Lonavala | Vellora Stays",
  description:
    "Explore Lonavala with our expertly guided tour packages — fort treks, heritage walks, food trails, temple visits, photography tours, and lakeside adventures. Book at Vellora Stays.",
  alternates: { canonical: "/explore/tour-packages" },
  openGraph: {
    title: "Tour Packages | Vellora Stays Lonavala",
    description: "Expertly guided tours to experience the best of Pawna Lake and Lonavala.",
    url: `${SITE_INFO.url}/explore/tour-packages`,
  },
};

export default function TourPackagesPage() {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Breadcrumb
            items={[
              { label: "Explore", href: "/explore" },
              { label: "Tour Packages", href: "/explore/tour-packages" },
            ]}
          />
          <p className={styles.eyebrow}>{TOURS_CONTENT.eyebrow}</p>
          <h1 className={styles.title}>{TOURS_CONTENT.heading}</h1>
          <p className={styles.subtitle}>{TOURS_CONTENT.description}</p>
        </div>
      </section>

      <div className={styles.grid}>
        {TOUR_PACKAGES.map((tour) => (
          <div key={tour.id} className={styles.card}>
            <div className={styles.cardImage}>
              <Image src={tour.image} alt={tour.name} width={400} height={250} />
              <span className={styles.cardTag}>{tour.duration}</span>
            </div>
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>{tour.name}</h2>
              <p className={styles.cardTagline}>{tour.tagline}</p>
              <p className={styles.cardDesc}>{tour.description}</p>
              <div className={styles.cardFooter}>
                <div className={styles.price}>
                  <span className={styles.priceValue}>
                    {tour.currency}{tour.price.toLocaleString("en-IN")}
                  </span>
                  {tour.originalPrice && (
                    <span className={styles.priceOriginal}>
                      {tour.currency}{tour.originalPrice.toLocaleString("en-IN")}
                    </span>
                  )}
                </div>
                <span className={styles.groupSize}>
                  <Icon icon="lucide:users" width={14} height={14} />
                  {tour.groupSize}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
