"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Icon from "@/components/Icon";
import Rating from "@/components/ui/Rating/Rating";
import { REVIEWS_CONTENT, REVIEWS, REVIEW_PLATFORMS } from "@/data/reviews";
import type { Review } from "@/types";
import styles from "./Testimonials.module.scss";

interface TestimonialsProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  reviews?: Review[];
}

export default function Testimonials({
  eyebrow = REVIEWS_CONTENT.eyebrow,
  heading = REVIEWS_CONTENT.heading,
  description = REVIEWS_CONTENT.description,
  reviews = REVIEWS,
}: TestimonialsProps = {}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.children[currentIndex] as HTMLElement;
      if (card) {
        const scrollTarget =
          card.offsetLeft - container.offsetLeft - (container.clientWidth - card.clientWidth) / 2;
        container.scrollTo({ left: Math.max(0, scrollTarget), behavior: "smooth" });
      }
    }
  }, [currentIndex]);

  const getPlatformIcon = (platform: string) => {
    const p = REVIEW_PLATFORMS.find((rp) => rp.name.toLowerCase() === platform);
    return p?.icon ?? "lucide:message-square";
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 className={`${styles.heading} font-oswald`}>{heading}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.carouselWrap}>
          <div className={styles.carousel} ref={scrollRef}>
            {reviews.map((review) => (
              <div key={review.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.authorInfo}>
                    <div className={styles.avatar}>
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className={styles.authorName}>{review.author}</h4>
                      <div className={styles.platform}>
                        <Icon icon={getPlatformIcon(review.platform)} width={14} height={14} />
                        <span>{review.platform}</span>
                      </div>
                    </div>
                  </div>
                  {review.verified && (
                    <span className={styles.verified}>
                      <Icon icon="lucide:badge-check" width={14} height={14} />
                      Verified
                    </span>
                  )}
                </div>
                <Rating rating={review.rating} size="sm" />
                <p className={styles.reviewText}>{review.text}</p>
                <span className={styles.date}>
                  {new Date(review.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                  })}
                </span>
              </div>
            ))}
          </div>

          <div className={styles.dots}>
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ""}`}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
