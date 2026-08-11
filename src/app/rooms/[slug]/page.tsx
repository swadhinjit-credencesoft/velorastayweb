import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { ROOMS, ROOM_AMENITIES, getRoomBySlug } from "@/data/rooms";
import { SITE_INFO, WHATSAPP_LINK } from "@/data/site";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { generateCanonicalUrl } from "@/utils/seo";
import styles from "./room-detail.module.scss";

interface RoomPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return ROOMS.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: RoomPageProps): Promise<Metadata> {
  const room = getRoomBySlug(params.slug);
  if (!room) return { title: "Room Not Found" };
  return {
    title: `${room.name} | Book at ${SITE_INFO.name}`,
    description: `${room.name} at ${SITE_INFO.name} starting from ₹${room.price}/night (Room Only). ${room.description.substring(0, 150)}. Book by phone or WhatsApp for the best rates.`,
    alternates: { canonical: `/rooms/${room.slug}` },
    openGraph: {
      title: `${room.name} | ${SITE_INFO.name}`,
      description: room.description.substring(0, 200),
      url: generateCanonicalUrl(`/rooms/${room.slug}`),
      images: [{ url: room.images[0]?.src, width: 800, height: 600, alt: room.name }],
    },
  };
}

export default function RoomDetailPage({ params }: RoomPageProps) {
  const room = getRoomBySlug(params.slug);
  if (!room) notFound();

  const amenities = room.amenities
    .map((id) => ROOM_AMENITIES.find((a) => a.id === id))
    .filter(Boolean);

  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: SITE_INFO.url },
          { name: "Rooms & Suites", url: `${SITE_INFO.url}/rooms` },
          { name: room.name, url: `${SITE_INFO.url}/rooms/${room.slug}` },
        ])}
      />
      <Breadcrumb
        items={[
          { label: "Rooms & Suites", href: "/rooms" },
          { label: room.name, href: `/rooms/${room.slug}` },
        ]}
      />

      <section className={styles.page}>
        <div>
          {room.images.length > 0 && (
            <div className={styles.gallery}>
              <Image
                src={room.images[0].src}
                alt={room.images[0].alt}
                width={1200}
                height={600}
                className={styles.galleryMain}
                priority
              />
              {room.images.length > 1 && (
                <div className={styles.galleryGrid}>
                  {room.images.slice(1).map((img) => (
                    <Image
                      key={img.id}
                      src={img.src}
                      alt={img.alt}
                      width={600}
                      height={400}
                      className={styles.galleryGridImg}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          <div className={styles.contentGrid}>
            <div className={styles.main}>
              <div>{room.tag && <span className={styles.tag}>{room.tag}</span>}</div>
              <h1 className={styles.title}>{room.name}</h1>
              <p className={styles.tagline}>{room.tagline}</p>

              <div className={styles.quickStats}>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>Bed</span>
                  <strong>{room.bedConfig}</strong>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>Guests</span>
                  <strong>Up to {room.maxOccupancy}</strong>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>Size</span>
                  <strong>{room.size} {room.sizeUnit}</strong>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>View</span>
                  <strong>{room.view}</strong>
                </div>
              </div>

              <h2 className={styles.sectionTitle}>About This Room</h2>
              <p className={styles.bodyText}>{room.longDescription || room.description}</p>

              {room.highlights && room.highlights.length > 0 && (
                <>
                  <h3 className={styles.sectionTitleSm}>Highlights</h3>
                  <ul className={styles.highlightsList}>
                    {room.highlights.map((h, i) => <li key={i}>{h}</li>)}
                  </ul>
                </>
              )}

              {room.features && room.features.length > 0 && (
                <>
                  <h2 className={styles.sectionTitle}>Rates & Details</h2>
                  <ul className={styles.highlightsList}>
                    {room.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </>
              )}

              <h2 className={styles.sectionTitle}>Amenities</h2>
              <div className={styles.amenitiesGrid}>
                {amenities.map((amenity) => (
                  <div key={amenity!.id} className={styles.amenityItem}>
                    <span>{amenity!.label}</span>
                  </div>
                ))}
              </div>

              {room.policies && room.policies.length > 0 && (
                <>
                  <h2 className={styles.sectionTitle}>Policies</h2>
                  {room.policies.map((policy) => (
                    <div key={policy.id} className={styles.policyItem}>
                      <h4 className={styles.policyTitle}>{policy.title}</h4>
                      <p className={styles.policyText}>{policy.description}</p>
                    </div>
                  ))}
                </>
              )}

              {room.faqs && room.faqs.length > 0 && (
                <>
                  <h2 className={styles.sectionTitle}>FAQs</h2>
                  {room.faqs.map((faq) => (
                    <div key={faq.id} className={styles.policyItem}>
                      <h4 className={styles.policyTitle}>{faq.question}</h4>
                      <p className={styles.policyText}>{faq.answer}</p>
                    </div>
                  ))}
                </>
              )}

              {room.nearby && room.nearby.length > 0 && (
                <>
                  <h2 className={styles.sectionTitle}>Nearby</h2>
                  <ul className={styles.nearbyList}>
                    {room.nearby.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </>
              )}
            </div>

            <div className={styles.sidebar}>
              <div className={styles.bookingCard}>
                <div className={styles.priceRow}>
                  <span className={styles.price}>
                    {room.currency}{room.price.toLocaleString("en-IN")}
                  </span>
                </div>
                <p className={styles.priceUnit}>per {room.priceUnit} — Room Only</p>
                <a href={WHATSAPP_LINK} className={styles.bookBtn}>Book on WhatsApp</a>
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
                    <strong>24 hours prior</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
