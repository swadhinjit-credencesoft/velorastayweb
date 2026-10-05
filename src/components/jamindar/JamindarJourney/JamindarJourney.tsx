"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { unpinElement } from "@/utils/gsap";
import { jamindarData } from "@/data/jamindar";
import styles from "./JamindarJourney.module.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function JamindarJourney() {
  const { journey } = jamindarData;
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 1024;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isMobile || prefersReducedMotion) {
      return;
    }

    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      const track = trackRef.current;

      if (!track || !section) return;

      const totalScrollWidth = track.scrollWidth - window.innerWidth + 120;

      gsap.to(track, {
        x: -totalScrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${totalScrollWidth * 1.2}`,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => {
      // Only revert this component's own tweens and ScrollTriggers.
      // Never sweep ScrollTrigger.getAll(): that would also kill triggers owned
      // by the page we navigate to next and throw a client-side exception.
      ctx.revert();
      // This section is pinned; make sure no pin-spacer is left holding the node
      // when React unmounts it, which would throw a removeChild NotFoundError.
      unpinElement(section);
    };
  }, []);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className={styles.journeySection}
      aria-label="The Jamindar Journey"
    >
      <div className={styles.stickyHeader}>
        <div className={styles.headerInner}>
          <span className={styles.eyebrow}>SLOW TRAVEL</span>
          <h2 className={styles.heading}>THE JOURNEY</h2>
          <p className={styles.subheading}>
            A curated cadence from arrival to the soul of coastal Odisha.
          </p>
        </div>
      </div>

      <div ref={containerRef} className={styles.trackContainer}>
        <div ref={trackRef} className={styles.track}>
          {journey.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src={item.image}
                  alt={`${item.title} - Step ${item.step}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className={styles.cardImage}
                />
                <div className={styles.stepBadge}>{item.step}</div>
              </div>

              <div className={styles.cardInfo}>
                <span className={styles.cardStepLabel}>STAGE {item.step}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
