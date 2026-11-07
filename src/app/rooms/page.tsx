import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero/PageHero";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { ROOMS_CONTENT } from "@/data/rooms";
import { SITE_INFO } from "@/data/site";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { generateCanonicalUrl } from "@/utils/seo";
import { checkAvailability } from "@/lib/api";
import { apiRoomToRoomType } from "@/lib/rooms";
import styles from "./rooms.module.scss";

export const metadata: Metadata = {
  title: "Rooms & Rates | Hotel Yogiraj NX, Shirdi",
  description:
    "Explore rooms at Hotel Yogiraj NX, Shirdi: Double Bed Non-AC, Double Bed, Triple Bed AC/Non-AC and Four Bed AC/Non-AC rooms with free Wi-Fi, near the Sai Baba Temple.",
  alternates: { canonical: "/rooms" },
  openGraph: {
    title: "Rooms & Rates | Hotel Yogiraj NX, Shirdi",
    description: "Comfortable rooms in Shirdi, near the Sai Baba Temple.",
    url: generateCanonicalUrl("/rooms"),
  },
};

export default async function RoomsPage() {
  const property = await checkAvailability();
  const rooms = (property?.roomList ?? []).map((r, i) => apiRoomToRoomType(r, i));

  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: SITE_INFO.url },
          { name: "Rooms & Rates", url: `${SITE_INFO.url}/rooms` },
        ])}
      />
      <PageHero
        eyebrow={ROOMS_CONTENT.eyebrow}
        heading={ROOMS_CONTENT.heading}
        description={ROOMS_CONTENT.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Rooms & Rates", href: "/rooms" }]}
        bgImage="/yogirajimg/AKS08604.avif"
      />

      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {rooms.map((room) => (
            <Link key={room.id} href={`/rooms/${room.slug}`} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={room.images[0]?.src || "/yogirajimg/AKS08604.avif"}
                  alt={room.images[0]?.alt || room.name}
                  width={400}
                  height={250}
                  className={styles.image}
                />
                {room.tag && <span className={styles.tag}>{room.tag}</span>}
              </div>
              <div className={styles.cardBody}>
                <div className={styles.metaRow}>
                  <span>{room.size} {room.sizeUnit}</span>
                  <span>•</span>
                  <span>Up to {room.maxOccupancy} Guests</span>
                </div>
                <h3 className={styles.name}>{room.name}</h3>
                <p className={styles.desc}>{room.tagline}</p>
                <div className={styles.priceRow}>
                  <div>
                    <span className={styles.price}>
                      {room.currency}{room.price.toLocaleString("en-IN")}
                    </span>
                    <span className={styles.perNight}> / {room.priceUnit}</span>
                  </div>
                  <span className={styles.cta}>View Details →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
