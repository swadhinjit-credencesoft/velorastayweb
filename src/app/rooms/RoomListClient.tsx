"use client";

import Link from "next/link";
import Image from "next/image";
import { useHotelData } from "@/hooks/useHotelData";
import { STOCK_IMAGES } from "@/data/images";
import type { VillaType } from "@/types";
import styles from "./rooms.module.scss";

interface RoomListClientProps {
  fallbackRooms: VillaType[];
}

const PLACEHOLDER_IMAGE = STOCK_IMAGES.deluxe;

export default function RoomListClient({ fallbackRooms }: RoomListClientProps) {
  const { rooms, error } = useHotelData();
  const items = !error && rooms.length > 0 ? rooms : fallbackRooms;

  return (
    <section className={styles.gridSection}>
      <div className={styles.grid}>
        {items.map((room) => {
          const image = room.images[0];

          return (
            <Link key={room.id} href={`/rooms/${room.slug}`} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={image?.src || PLACEHOLDER_IMAGE}
                  alt={image?.alt || room.name}
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
                  <span>Max {room.maxOccupancy} guests</span>
                </div>
                <div className={styles.priceRow}>
                  <span className={styles.price}>
                    {room.currency}
                    {room.price.toLocaleString("en-IN")}
                  </span>
                  {room.originalPrice && (
                    <span className={styles.originalPrice}>
                      {room.currency}
                      {room.originalPrice.toLocaleString("en-IN")}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <p className="mx-auto mt-5 max-w-4xl px-4 text-center text-xs text-gray-500">Room images are representative Unsplash stock photos, not photographs of Y Hotels Signature.</p>
    </section>
  );
}
