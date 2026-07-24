import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { VILLAS, VILLA_AMENITIES, getVillaBySlug } from "@/data/villas";
import { SITE_INFO } from "@/data/site";
import { generateVillaSchema, generateBreadcrumbSchema } from "@/utils/schema";
import { generateCanonicalUrl } from "@/utils/seo";
import type { VillaAmenity } from "@/types";
import styles from "./villa-detail.module.scss";

interface VillaPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return VILLAS.map((villa) => ({ slug: villa.slug }));
}

export async function generateMetadata({ params }: VillaPageProps): Promise<Metadata> {
  const villa = getVillaBySlug(params.slug);
  if (!villa) return { title: "Villa Not Found" };
  return {
    title: `${villa.name} | Book at ${SITE_INFO.name}`,
    description: `${villa.name} starting from ₹${villa.price}/night. ${villa.description.substring(0, 150)}. Book now for the best rates.`,
    alternates: { canonical: `/villas/${villa.slug}` },
    openGraph: {
      title: `${villa.name} | ${SITE_INFO.name}`,
      description: villa.description.substring(0, 200),
      url: generateCanonicalUrl(`/villas/${villa.slug}`),
      images: [{ url: villa.images[0]?.src, width: 800, height: 600, alt: villa.name }],
    },
  };
}

function getAmenityById(id: string): VillaAmenity | undefined {
  return VILLA_AMENITIES.find((a) => a.id === id);
}

export default function VillaDetailPage({ params }: VillaPageProps) {
  const villa = getVillaBySlug(params.slug);
  if (!villa) notFound();

  const amenities = villa.amenities.map(getAmenityById).filter(Boolean) as VillaAmenity[];

  return (
    <>
      <JsonLd
        schema={generateVillaSchema({
          name: villa.name,
          description: villa.description,
          price: villa.price,
          currency: villa.currency === "₹" ? "INR" : villa.currency,
          image: villa.images[0]?.src || "",
          capacity: villa.maxOccupancy,
        })}
      />
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: SITE_INFO.url },
          { name: "The Villa", url: `${SITE_INFO.url}/villas` },
          { name: villa.name, url: `${SITE_INFO.url}/villas/${villa.slug}` },
        ])}
      />
      <Breadcrumb
        items={[
          { label: "The Villa", href: "/villas" },
          { label: villa.name, href: `/villas/${villa.slug}` },
        ]}
      />

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
              <div>
                {villa.tag && <span className={styles.tag}>{villa.tag}</span>}
              </div>
              <h1 className={styles.title}>{villa.name}</h1>
              <p className={styles.tagline}>{villa.tagline}</p>

              <div className={styles.quickStats}>
                <div className={styles.stat}><span className={styles.statLabel}>Bedrooms</span><strong>{villa.bedrooms}</strong></div>
                <div className={styles.stat}><span className={styles.statLabel}>Bathrooms</span><strong>{villa.bathrooms}</strong></div>
                <div className={styles.stat}><span className={styles.statLabel}>Guests</span><strong>Up to {villa.maxOccupancy}</strong></div>
                <div className={styles.stat}><span className={styles.statLabel}>Size</span><strong>{villa.size} {villa.sizeUnit}</strong></div>
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
                  <span className={styles.price}>{villa.currency}{villa.price.toLocaleString("en-IN")}</span>
                  {villa.originalPrice && <span className={styles.originalPrice}>{villa.currency}{villa.originalPrice.toLocaleString("en-IN")}</span>}
                </div>
                <p className={styles.priceUnit}>per {villa.priceUnit}</p>
                <Link href="/booking" className={styles.bookBtn}>Book Now</Link>
                <a href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`} className={styles.callBtn}>Call to Book</a>
                <div className={styles.bookingDetails}>
                  <div className={styles.bookingDetailRow}><span>Check-in</span><strong>{SITE_INFO.checkIn}</strong></div>
                  <div className={styles.bookingDetailRow}><span>Check-out</span><strong>{SITE_INFO.checkOut}</strong></div>
                  <div className={styles.bookingDetailRow}><span>Free Cancellation</span><strong>Up to 7 days</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
