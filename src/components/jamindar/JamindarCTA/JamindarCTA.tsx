import Image from "next/image";
import Icon from "@/components/Icon/Icon";
import { jamindarData, jamindarBooking } from "@/data/jamindar";
import styles from "./JamindarCTA.module.scss";

export default function JamindarCTA() {
  const { cta, location } = jamindarData;

  return (
    <section className={styles.section} aria-label="Book Your Stay at Jamindar Nest">
      <div className={styles.bgWrapper}>
        <Image
          src={cta.bgImage}
          alt="Jamindar Nest Twilight Atmosphere"
          fill
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>{cta.eyebrow}</span>
          <h2 className={styles.heading}>{cta.heading}</h2>
          <p className={styles.description}>{cta.description}</p>

          <div className={styles.buttonRow}>
            <a
              href={cta.primaryButton.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              <Icon icon="lucide:calendar-check" width={18} height={18} />
              <span>{cta.primaryButton.label}</span>
            </a>

            <a
              href={`https://api.whatsapp.com/send?phone=91${jamindarBooking.whatsapp.replace(/\D/g, "")}&text=Hello%20Jamindar%20Nest,%20I%20would%20like%20to%20inquire%20about%20a%20stay.`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              <Icon icon="lucide:message-circle" width={18} height={18} />
              <span>WHATSAPP INQUIRY</span>
            </a>
          </div>

          <div className={styles.contactFooter}>
            <div className={styles.contactItem}>
              <Icon icon="lucide:map-pin" width={16} height={16} />
              <span>{location}</span>
            </div>
            <div className={styles.contactDivider}>•</div>
            <div className={styles.contactItem}>
              <Icon icon="lucide:phone" width={16} height={16} />
              <span>{jamindarBooking.phone}</span>
            </div>
            <div className={styles.contactDivider}>•</div>
            <div className={styles.contactItem}>
              <Icon icon="lucide:mail" width={16} height={16} />
              <span>{jamindarBooking.email}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
