"use client";

import { useState, useEffect } from "react";
import Icon from "@/components/Icon/Icon";
import styles from "./ScrollToTop.module.scss";

const SCROLL_THRESHOLD = 400;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`${styles.button} ${visible ? styles.visible : ""}`}
      aria-label="Scroll to top"
      onClick={scrollToTop}
      tabIndex={visible ? 0 : -1}
    >
      <Icon icon="lucide:arrow-up" width={20} height={20} />
    </button>
  );
}
