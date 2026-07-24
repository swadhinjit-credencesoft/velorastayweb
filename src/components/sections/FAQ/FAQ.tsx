"use client";

import { useState } from "react";
import Icon from "@/components/Icon/Icon";
import Accordion from "@/components/ui/Accordion/Accordion";
import { FAQ_CATEGORIES } from "@/data/faq";
import styles from "./FAQ.module.scss";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(FAQ_CATEGORIES[0]?.id ?? "");

  const currentCategory = FAQ_CATEGORIES.find((cat) => cat.id === activeCategory);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>FAQ</span>
          <h2 className={`${styles.heading} font-oswald`}>Frequently Asked Questions</h2>
          <p className={styles.description}>
            Find answers to the most common questions about booking, villas, dining, and more.
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.sidebar}>
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.categoryBtn} ${activeCategory === cat.id ? styles.active : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <Icon icon={cat.icon} width={18} height={18} />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          <div className={styles.content}>
            {currentCategory && (
              <Accordion
                items={currentCategory.items.map((item) => ({
                  id: item.id,
                  title: item.question,
                  content: <p>{item.answer}</p>,
                }))}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
