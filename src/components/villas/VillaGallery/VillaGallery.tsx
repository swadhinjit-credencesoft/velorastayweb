"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Icon from "@/components/Icon/Icon";
import type { RoomImage } from "@/types";
import styles from "./VillaGallery.module.scss";

interface VillaGalleryProps {
  images: RoomImage[];
  villaName: string;
}

export default function VillaGallery({ images, villaName }: VillaGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      const next = ((index % images.length) + images.length) % images.length;
      setActiveIndex(next);
    },
    [images.length],
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  const openLightbox = useCallback(() => setLightboxOpen(true), []);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, closeLightbox, goNext, goPrev]);

  if (images.length === 0) return null;

  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.mainImage} onClick={openLightbox} role="button" tabIndex={0} aria-label="Open full-size image">
          <Image
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className={styles.mainImg}
            key={images[activeIndex].id}
          />
          <span className={styles.counter}>
            {activeIndex + 1} / {images.length}
          </span>
          <span className={styles.zoomHint}>
            <Icon icon="lucide:maximize-2" width={20} height={20} />
          </span>
        </div>

        <div className={styles.thumbnails}>
          {images.map((img, i) => (
            <button
              key={img.id}
              className={`${styles.thumb} ${i === activeIndex ? styles.thumbActive : ""}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`View image ${i + 1}: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="80px"
                className={styles.thumbImg}
              />
            </button>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Image lightbox">
          <button className={styles.lightboxClose} onClick={closeLightbox} aria-label="Close lightbox">
            <Icon icon="lucide:x" width={24} height={24} />
          </button>

          <button className={styles.lightboxPrev} onClick={(e) => { e.stopPropagation(); goPrev(); }} aria-label="Previous image">
            <Icon icon="lucide:chevron-left" width={28} height={28} />
          </button>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              sizes="90vw"
              className={styles.lightboxImg}
              key={`lb-${images[activeIndex].id}`}
            />
            {images[activeIndex].caption && (
              <p className={styles.lightboxCaption}>{images[activeIndex].caption}</p>
            )}
            <span className={styles.lightboxCounter}>
              {activeIndex + 1} / {images.length}
            </span>
          </div>

          <button className={styles.lightboxNext} onClick={(e) => { e.stopPropagation(); goNext(); }} aria-label="Next image">
            <Icon icon="lucide:chevron-right" width={28} height={28} />
          </button>
        </div>
      )}
    </>
  );
}
