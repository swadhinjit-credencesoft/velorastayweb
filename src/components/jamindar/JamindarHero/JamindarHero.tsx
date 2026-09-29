"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import Icon from "@/components/Icon/Icon";
import { jamindarData } from "@/data/jamindar";
import styles from "./JamindarHero.module.scss";

export default function JamindarHero() {
  const { hero } = jamindarData;
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(imageRef.current, { scale: 1.08 });
      gsap.set(
        [
          eyebrowRef.current,
          titleRef.current,
          descRef.current,
          buttonsRef.current,
          scrollRef.current,
        ],
        { opacity: 0, y: 40 }
      );

      // Animation
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.to(imageRef.current, {
        scale: 1,
        duration: 1.8,
        ease: "power2.out",
      }).to(
        [
          eyebrowRef.current,
          titleRef.current,
          descRef.current,
          buttonsRef.current,
          scrollRef.current,
        ],
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.18,
        },
        "-=1.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.hero} aria-label="Jamindar Nest Hero">
      <div ref={imageRef} className={styles.bgWrapper}>
        <Image
          src={hero.image}
          alt="Jamindar Nest Heritage Stay"
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>

      <div ref={contentRef} className={styles.content}>
        <div className={styles.inner}>
          <span ref={eyebrowRef} className={styles.eyebrow}>
            <span className={styles.brandName}>{hero.eyebrow}</span>
            <span className={styles.divider}>•</span>
            <span className={styles.chapter}>{hero.chapter}</span>
          </span>

          <h1 ref={titleRef} className={styles.title}>
            <span>STAY WHERE</span>
            <br />
            <span className={styles.italicWord}>HERITAGE</span>
            <br />
            <span>BREATHES</span>
          </h1>

          <p ref={descRef} className={styles.description}>
            {hero.description}
          </p>

          <div ref={buttonsRef} className={styles.buttonGroup}>
            <a
              href={hero.ctaPrimary.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              <Icon icon="lucide:calendar-check" width={18} height={18} />
              <span>{hero.ctaPrimary.label}</span>
            </a>
            <a href={hero.ctaSecondary.href} className={styles.secondaryBtn}>
              <span>{hero.ctaSecondary.label}</span>
              <Icon icon="lucide:arrow-down" width={16} height={16} />
            </a>
          </div>
        </div>

        <a ref={scrollRef} href="#intro" className={styles.scrollIndicator}>
          <span className={styles.scrollText}>{hero.scrollLabel}</span>
          <span className={styles.scrollLine} />
        </a>
      </div>
    </section>
  );
}
