import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero/PageHero";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { ROOMS_CONTENT } from "@/data/rooms";
import { SITE_INFO } from "@/data/site";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { generateCanonicalUrl } from "@/utils/seo";
import { checkAvailability } from "@/lib/api";
import { apiRoomToRoomType } from "@/lib/rooms";
import styles from "./rooms.module.scss";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Rooms & Suites | The Queen's Head – Paharganj",
  description:
    "Explore rooms at The Queen's Head – Paharganj: Deluxe Double, Premium Double, Premium Double with City View and Triple Suite with Jacuzzi. Air-conditioned rooms with free Wi-Fi in the heart of Paharganj.",
  alternates: { canonical: "/rooms" },
  openGraph: {
    title: "Rooms & Suites | The Queen's Head – Paharganj",
    description: "Comfortable air-conditioned rooms in Paharganj, New Delhi.",
    url: generateCanonicalUrl("/rooms"),
  },
};

export default async function RoomsPage() {
  const property = await checkAvailability();
  const rooms = (property?.roomList ?? []).map(apiRoomToRoomType);

  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: SITE_INFO.url },
          { name: "Rooms & Suites", url: `${SITE_INFO.url}/rooms` },
        ])}
      />
      <PageHero
        eyebrow={ROOMS_CONTENT.eyebrow}
        heading={ROOMS_CONTENT.heading}
        description={ROOMS_CONTENT.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Rooms & Suites", href: "/rooms" }]}
        bgImage="/homehero1.png"
      />

      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {rooms.map((room) => (
            <Link key={room.id} href={`/rooms/${room.slug}`} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={room.images[0]?.src}
                  alt={room.images[0]?.alt}
                  width={400}
                  height={250}
                  className={styles.image}
                />
                {room.tag && <span className={styles.tag}>{room.tag}</span>}
              </div>
              <div className={styles.cardBody}>
                <h2 className={styles.name}>{room.name}</h2>
                <p className={styles.tagline}>{room.tagline}</p>
                <div className={styles.meta}>
                  <span>{room.bedConfig}</span>
                  <span>Max {room.maxOccupancy} guests</span>
                </div>
                <div className={styles.priceRow}>
                  <span className={styles.price}>
                    {room.currency}{room.price.toLocaleString("en-IN")}
                  </span>
                  <span className={styles.unit}>/ {room.priceUnit} (EP)</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
