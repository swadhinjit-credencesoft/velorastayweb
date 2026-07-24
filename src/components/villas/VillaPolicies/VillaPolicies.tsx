"use client";

import { useState } from "react";
import Icon from "@/components/Icon/Icon";
import type { RoomPolicy } from "@/types";
import styles from "./VillaPolicies.module.scss";

interface VillaPoliciesProps {
  policies: RoomPolicy[];
}

const POLICY_ICONS: Record<string, string> = {
  "check-in": "lucide:log-in",
  "cancel": "lucide:x-circle",
  "child": "lucide:baby",
  "smoking": "lucide:cigarette-off",
  "pet": "lucide:paw-print",
  "payment": "lucide:credit-card",
  "noise": "lucide:volume-x",
  "visit": "lucide:users",
};

function getPolicyIcon(title: string): string {
  const lower = title.toLowerCase();
  for (const [key, icon] of Object.entries(POLICY_ICONS)) {
    if (lower.includes(key)) return icon;
  }
  return "lucide:info";
}

export default function VillaPolicies({ policies }: VillaPoliciesProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={styles.policies}>
      {policies.map((policy) => {
        const isOpen = openId === policy.id;
        const icon = getPolicyIcon(policy.title);

        return (
          <div
            key={policy.id}
            className={`${styles.item} ${isOpen ? styles.open : ""}`}
          >
            <button
              className={styles.trigger}
              onClick={() => toggle(policy.id)}
              aria-expanded={isOpen}
            >
              <span className={styles.iconWrap}>
                <Icon icon={icon} width={18} height={18} />
              </span>
              <span className={styles.title}>{policy.title}</span>
              <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}>
                <Icon icon="lucide:chevron-down" width={16} height={16} />
              </span>
            </button>
            <div className={styles.contentWrap}>
              <div className={styles.content}>
                <p>{policy.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
