"use client";

import Image from "next/image";
import { useVillaBySlug } from "@/hooks/useVeloraData";
import { VILLA_AMENITIES } from "@/data/villas";
import { SITE_INFO } from "@/data/site";
import { BOOKING_ENGINE_URL } from "@/lib/api/thehotelmate";
import type { VillaAmenity, VillaType } from "@/types";
import styles from "./villa-detail.module.scss";

interface VillaDetailClientProps {
  slug: string;
  fallbackVilla: VillaType;
}

function getAmenityById(id: string): VillaAmenity | undefined {
  return VILLA_AMENITIES.find((a) => a.id === id);
}

export default function VillaDetailClient({ slug, fallbackVilla }: VillaDetailClientProps) {
  const { villa: liveVilla, error } = useVillaBySlug(slug);
  const villa = !error && liveVilla ? liveVilla : fallbackVilla;

  const amenities = villa.amenities.map(getAmenityById).filter(Boolean) as VillaAmenity[];

  return (
    <section className={styles.page}>
      <div>
        {villa.images.length > 0 && (
          <div className={styles.gallery}>
            <Image
              src={villa.images[0].src}
              alt={villa.images[0].alt}
              width={800}
              height={400}
              className={styles.galleryMain}
            />
            {villa.images.length > 1 && (
              <div className={styles.gallerySide}>
                {villa.images.slice(1, 3).map((img) => (
                  <Image
                    key={img.id}
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={200}
                    className={styles.gallerySideImg}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        <div className={styles.contentGrid}>
          <div className={styles.main}>
            <div>{villa.tag && <span className={styles.tag}>{villa.tag}</span>}</div>
            <h1 className={styles.title}>{villa.name}</h1>
            <p className={styles.tagline}>{villa.tagline}</p>

            <div className={styles.quickStats}>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Bedrooms</span>
                <strong>{villa.bedrooms}</strong>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Bathrooms</span>
                <strong>{villa.bathrooms}</strong>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Guests</span>
                <strong>Up to {villa.maxOccupancy}</strong>
              </div>
            </div>

            <h2 className={styles.sectionTitle}>About This Villa</h2>
            <p className={styles.bodyText}>{villa.longDescription || villa.description}</p>

            {villa.highlights && villa.highlights.length > 0 && (
              <>
                <h3 className={styles.sectionTitleSm}>Highlights</h3>
                <ul className={styles.highlightsList}>
                  {villa.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </>
            )}

            <h2 className={styles.sectionTitle}>Amenities</h2>
            <div className={styles.amenitiesGrid}>
              {amenities.map((amenity) => (
                <div key={amenity.id} className={styles.amenityItem}>
                  <span>{amenity.label}</span>
                </div>
              ))}
            </div>

            {villa.policies && villa.policies.length > 0 && (
              <>
                <h2 className={styles.sectionTitle}>Policies</h2>
                {villa.policies.map((policy) => (
                  <div key={policy.id} className={styles.policyItem}>
                    <h4 className={styles.policyTitle}>{policy.title}</h4>
                    <p className={styles.policyText}>{policy.description}</p>
                  </div>
                ))}
              </>
            )}

            {villa.nearby && villa.nearby.length > 0 && (
              <>
                <h2 className={styles.sectionTitle}>Nearby</h2>
                <ul className={styles.nearbyList}>
                  {villa.nearby.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </>
            )}
          </div>

          <div className={styles.sidebar}>
            <div className={styles.bookingCard}>
              <div className={styles.priceRow}>
                <span className={styles.price}>
                  {villa.currency}{villa.price.toLocaleString("en-IN")}
                </span>
                {villa.originalPrice && (
                  <span className={styles.originalPrice}>
                    {villa.currency}{villa.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
              </div>
              <p className={styles.priceUnit}>per {villa.priceUnit}</p>
              <a href={BOOKING_ENGINE_URL} className={styles.bookBtn}>Book Now</a>
              <a href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`} className={styles.callBtn}>Call to Book</a>
              <div className={styles.bookingDetails}>
                <div className={styles.bookingDetailRow}>
                  <span>Check-in</span>
                  <strong>{SITE_INFO.checkIn}</strong>
                </div>
                <div className={styles.bookingDetailRow}>
                  <span>Check-out</span>
                  <strong>{SITE_INFO.checkOut}</strong>
                </div>
                <div className={styles.bookingDetailRow}>
                  <span>Free Cancellation</span>
                  <strong>Up to 7 days</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
