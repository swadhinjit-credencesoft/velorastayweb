"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import styles from "./StickyBookButton.module.scss";

interface StickyBookButtonProps {
  price: number;
  roomName: string;
  slug: string;
  currency?: string;
}

export default function StickyBookButton({
  price,
  roomName,
  slug,
  currency = "₹",
}: StickyBookButtonProps) {
  const { scrollY } = useScrollPosition();
  const [headerOffset, setHeaderOffset] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      setHeaderOffset(header.offsetHeight);
    }
  }, []);

  useEffect(() => {
    setVisible(scrollY > headerOffset + 200);
  }, [scrollY, headerOffset]);

  return (
    <div className={`${styles.stickyBar} ${visible ? styles.visible : ""}`}>
      <div className={styles.inner}>
        <div className={styles.roomInfo}>
          <span className={styles.roomName}>{roomName}</span>
          <span className={styles.price}>
            <span className={styles.currency}>{currency}</span>
            {price}
            <span className={styles.unit}>/ night</span>
          </span>
        </div>
        <Link href={`/villas/${slug}`} className={styles.bookBtn}>
          <Icon icon="lucide:calendar-check" width={16} height={16} />
          Book Now
        </Link>
      </div>
    </div>
  );
}
