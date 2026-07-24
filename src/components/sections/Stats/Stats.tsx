"use client";

import { useState, useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Icon from "@/components/Icon/Icon";
import { HERO_STATS } from "@/data/site";
import styles from "./Stats.module.scss";

function useCountUp(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!start) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    };

    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [start, end, duration]);

  return count;
}

function parseStatValue(value: string): { numeric: number; suffix: string } {
  const match = value.match(/^([\d,]+)(.*)$/);
  if (match) {
    return {
      numeric: parseInt(match[1].replace(/,/g, ""), 10),
      suffix: match[2],
    };
  }
  return { numeric: 0, suffix: value };
}

function StatCounter({ value, label, icon, isVisible }: {
  value: string;
  label: string;
  icon: string;
  isVisible: boolean;
}) {
  const { numeric, suffix } = parseStatValue(value);
  const count = useCountUp(numeric, 2000, isVisible);

  return (
    <div className={styles.stat}>
      <div className={styles.iconWrap}>
        <Icon icon={icon} width={24} height={24} />
      </div>
      <span className={styles.value}>
        {numeric > 0 ? count.toLocaleString() : ""}{suffix}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default function Stats() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {HERO_STATS.map((stat) => (
            <StatCounter
              key={stat.id}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
