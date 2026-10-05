"use client";

import { useState } from "react";
import Image from "next/image";
import { useVillaBySlug } from "@/hooks/useVeloraData";
import { VILLA_AMENITIES } from "@/data/villas";
import { SITE_INFO } from "@/data/site";
import { BOOKING_ENGINE_URL } from "@/lib/api/thehotelmate";
import Modal from "@/components/ui/Modal/Modal";
import Icon from "@/components/Icon/Icon";
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
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const amenities = villa.amenities.map(getAmenityById).filter(Boolean) as VillaAmenity[];

  return (
    <section className={styles.page}>
      <div>
        {villa.images.length > 0 && (
          <div className={styles.gallery}>
            <div
              className={styles.mainImgWrap}
              onClick={() => setLightboxImage(villa.images[0].src)}
              style={{ cursor: "pointer", position: "relative" }}
            >
              <Image
                src={villa.images[0].src}
                alt={villa.images[0].alt}
                width={1200}
                height={600}
                className={styles.galleryMain}
                priority
              />
              <span className={styles.zoomHint}>
                <Icon icon="lucide:maximize-2" width={16} height={16} /> View Photo
              </span>
            </div>
            {villa.images.length > 1 && (
              <div className={styles.galleryGrid}>
                {villa.images.slice(1, 7).map((img, idx) => (
                  <div
                    key={img.id || idx}
                    className={styles.thumbWrap}
                    onClick={() => setLightboxImage(img.src)}
                    style={{ cursor: "pointer", position: "relative" }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={600}
                      height={400}
                      className={styles.galleryGridImg}
                    />
                    {idx === 5 && villa.images.length > 7 && (
                      <div className={styles.moreOverlay}>
                        +{villa.images.length - 7} Photos
                      </div>
                    )}
                  </div>
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
                <strong>{villa.bedrooms} BHK</strong>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Bathrooms</span>
                <strong>{villa.bathrooms} Baths</strong>
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

            <h2 className={styles.sectionTitle}>Amenities & Inclusions</h2>
            <div className={styles.amenitiesGrid}>
              {amenities.map((amenity) => (
                <div key={amenity.id} className={styles.amenityItem}>
                  <Icon icon={amenity.icon} width={18} height={18} />
                  <span>{amenity.label}</span>
                </div>
              ))}
            </div>

            {villa.features && villa.features.length > 0 && (
              <>
                <h3 className={styles.sectionTitleSm}>Villa Features</h3>
                <ul className={styles.highlightsList}>
                  {villa.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </>
            )}

            {villa.policies && villa.policies.length > 0 && (
              <>
                <h2 className={styles.sectionTitle}>Policies & House Rules</h2>
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
                <h2 className={styles.sectionTitle}>Nearby Locations & Distances</h2>
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
              
              <a
                href={BOOKING_ENGINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.bookBtn}
              >
                Book Now Online
              </a>
              
              <a
                href={`https://api.whatsapp.com/send?phone=${SITE_INFO.whatsapp.replace(/[^0-9]/g, "")}&text=${encodeURIComponent(`Hi, I'd like to check availability and book ${villa.name} at Velora Stays.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.callBtn}
                style={{ backgroundColor: "#25D366", color: "#fff", borderColor: "#25D366", marginBottom: "0.5rem" }}
              >
                Book via WhatsApp
              </a>

              <a href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`} className={styles.callBtn}>
                Call to Inquire
              </a>

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
                  <strong>Up to 15 days</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={!!lightboxImage} onClose={() => setLightboxImage(null)}>
        {lightboxImage && (
          <div style={{ padding: "1rem", textAlign: "center" }}>
            <Image
              src={lightboxImage}
              alt=""
              width={1000}
              height={700}
              style={{ maxWidth: "100%", maxHeight: "80vh", objectFit: "contain", borderRadius: "8px" }}
            />
          </div>
        )}
      </Modal>
    </section>
  );
}
