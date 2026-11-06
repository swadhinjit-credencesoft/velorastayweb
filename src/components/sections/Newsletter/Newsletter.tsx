import Link from "next/link";
import { SITE_INFO } from "@/data/site";
import styles from "./Newsletter.module.scss";

export default function ReservationsContact() {
  return <section className={styles.section}><div className={styles.container}><div className={styles.content}><h2 className={`${styles.heading} font-oswald`}>Questions about your stay?</h2><p className={styles.description}>Contact Y Hotels Signature to confirm room availability, meal plan pricing and reservation terms.</p><div className={styles.form}><a className={styles.input} href={`mailto:${SITE_INFO.email}`}>{SITE_INFO.email}</a><Link href="/contact" className={styles.input}>Contact the hotel</Link></div></div></div></section>;
}
