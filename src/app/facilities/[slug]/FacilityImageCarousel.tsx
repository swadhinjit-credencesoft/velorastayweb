"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./FacilityImageCarousel.module.scss";

interface FacilityImageCarouselProps {
  images: string[];
  alt: string;
  controls?: boolean;
  overlayClassName?: string;
}

const AUTOPLAY_MS = 4000;

export default function FacilityImageCarousel({
  images,
  alt,
  controls = true,
  overlayClassName = "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent",
}: FacilityImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const count = images.length;

  const goTo = (index: number) => {
    setCurrent(((index % count) + count) % count);
  };

  useEffect(() => {
    if (count <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % count);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [count, current]);

  return (
    <div className={styles.slideshow}>
      {images.map((src, i) => (
        <div
          key={src}
          className={`${styles.slide} ${i === current ? styles.slideActive : ""}`}
          aria-hidden={i !== current}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={i === 0}
            className={styles.image}
            sizes="100vw"
          />
        </div>
      ))}
      <div className={overlayClassName} />
      {controls && count > 1 && (
        <>
          <button
            type="button"
            className={styles.arrowLeft}
            onClick={() => goTo(current - 1)}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            className={styles.arrowRight}
            onClick={() => goTo(current + 1)}
            aria-label="Next image"
          >
            ›
          </button>
          <div className={styles.dots}>
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Show image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
