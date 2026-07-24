"use client";

import { useState, useEffect, useCallback, type ReactNode } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button/Button";
import { HERO_SLIDES, SITE_INFO } from "@/data/site";
import styles from "./Hero.module.scss";

interface HeroProps {
  children?: ReactNode;
}

export default function Hero({ children }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className={styles.hero}>
      <div className={styles.slider}>
        {HERO_SLIDES.map((s, i) => (
          <div
            key={s.id}
            className={`${styles.slide} ${i === currentSlide ? styles.active : ""}`}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              sizes="100vw"
              className={styles.slideImage}
              priority={i === 0}
            />
          </div>
        ))}
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.textBlock}>
          <span className={styles.eyebrow}>Welcome to {SITE_INFO.name}</span>
          <h1 className={`${styles.heading} font-oswald`}>{slide.title}</h1>
          <p className={styles.subtitle}>{slide.subtitle}</p>
          <div className={styles.actions}>
            <Button variant="primary" size="lg" href={slide.cta.href} icon="lucide:arrow-right" iconPosition="right">
              {slide.cta.label}
            </Button>
            <Button variant="ghost" size="lg" href="/villas" className={styles.ghostBtn}>
              View All Villas
            </Button>
          </div>
        </div>

        <div className={styles.searchSection}>
          {children}
        </div>
      </div>

      <div className={styles.dots}>
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === currentSlide ? styles.dotActive : ""}`}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
