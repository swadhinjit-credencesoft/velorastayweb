"use client";

import Icon from "@/components/Icon/Icon";
import styles from "./food-menu.module.scss";

export default function MenuPrintButton() {
  return (
    <button type="button" className={styles.printBtn} onClick={() => window.print()}>
      <Icon icon="lucide:printer" width={18} height={18} />
      Print / Save as PDF
    </button>
  );
}
