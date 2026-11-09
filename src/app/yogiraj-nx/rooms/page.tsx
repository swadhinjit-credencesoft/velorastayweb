import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero/PageHero";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { SITE_INFO as NX_SITE } from "@/data/nx/site";
import { ROOMS_CONTENT as NX_ROOMS_CONTENT } from "@/data/nx/rooms";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { generateCanonicalUrl } from "@/utils/seo";
import { checkAvailability } from "@/lib/api";
import { apiRoomToRoomType } from "@/lib/rooms";
import styles from "@/app/rooms/rooms.module.scss";

export const metadata: Metadata = {
  title: "Rooms & Rates | Hotel Yogiraj NX, Shirdi",
  description:
    "Explore rooms at Hotel Yogiraj NX, Shirdi: Double Bed Non-AC, Double Bed, Triple Bed AC/Non-AC and Four Bed AC/Non-AC rooms with free Wi-Fi, near the Sai Baba Temple.",
  alternates: { canonical: "/yogiraj-nx/rooms" },
  openGraph: {
    title: "Rooms & Rates | Hotel Yogiraj NX, Shirdi",
    description: "Comfortable rooms in Shirdi, near the Sai Baba Temple at Hotel Yogiraj NX.",
    url: generateCanonicalUrl("/yogiraj-nx/rooms"),
  },
};

const NX_ROOM_IMAGES: Record<string, string> = {
  "double-bed-room": "/yogirajimg/AKS08605.avif",
  "double-bed-non-ac-room": "/yogirajimg/AKS08604.avif",
  "triple-bed-ac-room": "/yogirajimg/AKS08614.avif",
  "triple-bed-non-ac-room": "/yogirajimg/AKS08614.avif",
  "four-bed-ac-room": "/yogirajimg/AKS08614.avif",
  "four-bed-non-ac-room": "/yogirajimg/AKS08614.avif",
};

export default async function NxRoomsPage() {
  const property = await checkAvailability();
  const rooms = (property?.roomList ?? []).map(apiRoomToRoomType);

  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "https://yogirajhotel.com/yogiraj-nx" },
          { name: "Rooms & Rates", url: "https://yogirajhotel.com/yogiraj-nx/rooms" },
        ])}
      />
      <PageHero
        eyebrow={NX_ROOMS_CONTENT.eyebrow}
        heading={NX_ROOMS_CONTENT.heading}
        description={NX_ROOMS_CONTENT.description}
        breadcrumbs={[
          { label: "Home", href: "/yogiraj-nx" },
          { label: "Rooms & Rates", href: "/yogiraj-nx/rooms" },
        ]}
        bgImage="/yogirajimg/4.avif"
      />

      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {rooms.map((room) => {
            const displayImage =
              NX_ROOM_IMAGES[room.slug] || room.images[0]?.src || "/yogirajimg/AKS08605.avif";

            return (
              <Link
                key={room.id}
                href={`/yogiraj-nx/rooms/${room.slug}`}
                className={styles.card}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={displayImage}
                    alt={room.images[0]?.alt || room.name}
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
                      {room.currency}
                      {room.price.toLocaleString("en-IN")}
                    </span>
                    <span className={styles.unit}>/ {room.priceUnit} (EP)</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
