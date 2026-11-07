import Icon from "@/components/Icon/Icon";
import { SITE_INFO } from "@/data/site";
import styles from "./WhatsAppButton.module.scss";

export default function WhatsAppButton() {
  const cleanPhone = SITE_INFO.phone.replace(/[^0-9]/g, "").slice(-10);
  const waUrl = `https://wa.me/91${cleanPhone}?text=${encodeURIComponent(
    "Hello Y Hotels Signature, I would like to inquire about room availability and reservations."
  )}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.wrapper}
      aria-label="Chat with Y Hotels Signature on WhatsApp"
    >
      <span className={styles.tooltip}>Chat on WhatsApp</span>
      <span className={styles.pulseRing} />
      <span className={styles.button}>
        <Icon icon="lucide:message-circle" width={26} height={26} />
      </span>
    </a>
  );
}
