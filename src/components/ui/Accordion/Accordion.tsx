"use client";

import { useState } from "react";
import Icon from "@/components/Icon/Icon";
import styles from "./Accordion.module.scss";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.accordion}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`${styles.item} ${isOpen ? styles.open : ""}`}
          >
            <button
              className={styles.trigger}
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
            >
              <span className={styles.title}>{item.title}</span>
              <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}>
                <Icon icon="lucide:chevron-down" width={18} height={18} />
              </span>
            </button>
            <div className={styles.contentWrap}>
              <div className={styles.content}>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
