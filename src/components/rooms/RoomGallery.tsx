"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./RoomGallery.module.scss";

interface RoomGalleryImage {
  src: string;
  alt?: string;
  caption?: string;
}

interface RoomGalleryProps {
  images: RoomGalleryImage[];
  roomName: string;
  tag?: string;
}

export default function RoomGallery({ images, roomName, tag }: RoomGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const validImages = (images || []).filter(
    (img) => img && typeof img.src === "string" && img.src.trim().length > 0
  );

  const displayImages = validImages.length > 0 ? validImages : [
    { src: "/yogirajimg/AKS08605.avif", alt: roomName, caption: "Room view" }
  ];

  const currentImage = displayImages[selectedIndex] || displayImages[0];

  return (
    <div className={styles.galleryWrapper}>
      {/* Main Feature Image */}
      <div className={styles.mainImageContainer}>
        <Image
          src={currentImage.src}
          alt={currentImage.alt || `${roomName} - View ${selectedIndex + 1}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
          className={styles.mainImage}
        />
        {tag && <span className={styles.roomTag}>{tag}</span>}
        {displayImages.length > 1 && (
          <span className={styles.imageCounter}>
            {selectedIndex + 1} / {displayImages.length}
          </span>
        )}
      </div>

      {/* Thumbnails Row */}
      {displayImages.length > 1 && (
        <div className={styles.thumbnailTrack} role="tablist" aria-label="Room photos">
          {displayImages.map((img, idx) => {
            const isActive = idx === selectedIndex;
            return (
              <button
                key={`${img.src}-${idx}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`View photo ${idx + 1} of ${displayImages.length}`}
                className={`${styles.thumbBtn} ${isActive ? styles.thumbBtnActive : ""}`}
                onClick={() => setSelectedIndex(idx)}
              >
                <Image
                  src={img.src}
                  alt={img.alt || `${roomName} thumbnail ${idx + 1}`}
                  fill
                  sizes="120px"
                  className={styles.thumbImg}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
