import Icon from "@/components/Icon/Icon";
import { SITE_INFO } from "@/data/site";
import styles from "./WhatsAppButton.module.scss";

export default function ContactButton() {
  return <a href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`} className={styles.wrapper} aria-label="Call Y Hotels Signature">
    <span className={styles.tooltip}>Call the hotel</span><span className={styles.pulseRing}/><span className={styles.button}><Icon icon="lucide:phone" width={24} height={24}/></span>
  </a>;
}
