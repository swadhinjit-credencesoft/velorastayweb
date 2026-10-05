"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { unpinElement } from "@/utils/gsap";
import { jamindarData } from "@/data/jamindar";
import styles from "./JamindarHorizon.module.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function JamindarHorizon() {
  const { horizon } = jamindarData;
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const isMobile = window.innerWidth <= 1024;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isMobile || prefersReducedMotion) return;

    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      const totalScenes = horizon.scenes.length;
      if (!section) return;

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${totalScenes * 100}%`,
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const index = Math.min(
            totalScenes - 1,
            Math.floor(self.progress * totalScenes)
          );
          setActiveIdx(index);
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
  }, [horizon.scenes.length]);

  return (
    <section
      id="horizon"
      ref={sectionRef}
      className={styles.horizonSection}
      aria-label="Jamindar Nest Experience"
    >
      <div ref={containerRef} className={styles.stage}>
        {/* Layered Background Images with crossfade */}
        {horizon.scenes.map((scene, idx) => (
          <div
            key={idx}
            className={`${styles.imageSlide} ${activeIdx === idx ? styles.activeSlide : ""}`}
          >
            <Image
              src={scene.image}
              alt={scene.caption}
              fill
              sizes="100vw"
              className={styles.bgImage}
            />
            <div className={styles.overlay} />
          </div>
        ))}

        {/* Foreground Content */}
        <div className={styles.content}>
          <div className={styles.topInfo}>
            <span className={styles.eyebrow}>{horizon.eyebrow}</span>
            <h2 className={styles.mainTitle}>{horizon.heading}</h2>
          </div>

          <div className={styles.centerDrama}>
            <span className={styles.sceneIndex}>
              {horizon.scenes[activeIdx]?.scene}
            </span>
            <h3 className={styles.heroKeyword}>
              {horizon.scenes[activeIdx]?.word}
            </h3>
            <p className={styles.sceneCaption}>
              {horizon.scenes[activeIdx]?.caption}
            </p>
          </div>

          <div className={styles.pagination}>
            {horizon.scenes.map((s, idx) => (
              <button
                key={idx}
                type="button"
                className={`${styles.dot} ${activeIdx === idx ? styles.activeDot : ""}`}
                onClick={() => setActiveIdx(idx)}
                aria-label={`Go to ${s.scene}`}
              >
                <span className={styles.dotBar} />
                <span className={styles.dotLabel}>0{idx + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
