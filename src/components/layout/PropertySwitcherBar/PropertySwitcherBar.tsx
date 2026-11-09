"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";
import styles from "./PropertySwitcherBar.module.scss";

export default function PropertySwitcherBar() {
  const pathname = usePathname();
  const isNx = pathname?.startsWith("/yogiraj-nx") || pathname?.startsWith("/hotel-yogiraj-nx");

  if (isNx) {
    return (
      <div className={styles.bar}>
        <div className={styles.inner}>
          <div className={styles.label}>
            <span style={{ color: "#c9a96e", display: "inline-flex" }}>
              <Icon icon="lucide:building-2" width={14} height={14} />
            </span>
            <span>
              Viewing <strong>Hotel Yogiraj NX (Building 2)</strong> • Direct Desk:{" "}
              <a href="tel:+919903033535" style={{ color: "#fff", textDecoration: "underline" }}>
                +91 99030 33535
              </a>
            </span>
          </div>
          <Link href="/" className={styles.switchLink}>
            <span>Switch to Hotel Yogiraj (Main Building)</span>
            <Icon icon="lucide:arrow-right" width={13} height={13} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <div className={styles.label}>
          <span style={{ color: "#c9a96e", display: "inline-flex" }}>
            <Icon icon="lucide:sparkles" width={14} height={14} />
          </span>
          <span>
            We manage two hotels in Shirdi! Check out our modern second building:{" "}
            <strong>Hotel Yogiraj NX</strong>
          </span>
        </div>
        <Link href="/yogiraj-nx" className={styles.switchLink}>
          <span>Explore Hotel Yogiraj NX</span>
          <Icon icon="lucide:arrow-right" width={13} height={13} />
        </Link>
      </div>
    </div>
  );
}
