"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./Tabs.module.scss";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
}

export default function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const activeIndex = tabs.findIndex((t) => t.id === activeTab);
    const el = tabsRef.current[activeIndex];
    if (el) {
      setIndicatorStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [activeTab, tabs]);

  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.tabList} role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            ref={(el) => { tabsRef.current[i] = el; }}
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ""}`}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
        <span
          className={styles.indicator}
          style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
        />
      </div>
      <div className={styles.tabPanels}>
        {tabs.map(
          (tab) =>
            tab.id === activeTab && (
              <div
                key={tab.id}
                role="tabpanel"
                className={styles.panel}
              >
                {tab.content}
              </div>
            ),
        )}
      </div>
    </div>
  );
}
