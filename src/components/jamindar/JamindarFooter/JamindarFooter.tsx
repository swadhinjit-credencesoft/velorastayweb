import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import { jamindarData, jamindarBooking } from "@/data/jamindar";
import styles from "./JamindarFooter.module.scss";

export default function JamindarFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.top}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Brand Column */}
            <div className={styles.brandCol}>
              <Link href="/jamindar-nest" className={styles.brand}>
                <span className={styles.brandTitle}>JAMINDAR NEST</span>
                <span className={styles.brandSubtitle}>PURI • BOUTIQUE HERITAGE</span>
              </Link>
              <p className={styles.tagline}>
                A refined stay experience shaped by warmth, character and the spirit of Odisha.
              </p>

              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <Icon icon="lucide:map-pin" width={16} height={16} />
                  <span>{jamindarData.location}</span>
                </div>
                <a href={`tel:${jamindarBooking.phone}`} className={styles.contactItem}>
                  <Icon icon="lucide:phone" width={16} height={16} />
                  <span>{jamindarBooking.phone}</span>
                </a>
                <a href={`mailto:${jamindarBooking.email}`} className={styles.contactItem}>
                  <Icon icon="lucide:mail" width={16} height={16} />
                  <span>{jamindarBooking.email}</span>
                </a>
                <div className={styles.contactItem}>
                  <Icon icon="lucide:clock" width={16} height={16} />
                  <span>24-Hour Front Desk</span>
                </div>
              </div>
            </div>

            {/* Navigation Column */}
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>EXPLORE</h3>
              <ul className={styles.links}>
                <li><a href="#intro">The Nest</a></li>
                <li><a href="#journey">The Journey</a></li>
                <li><a href="#rooms">Signature Nest Room</a></li>
                <li><a href="#experiences">Experiences</a></li>
                <li><a href="#horizon">Jamindar Nest</a></li>
                <li><a href="#gallery">Editorial Gallery</a></li>
              </ul>
            </div>

            {/* Reservations Column */}
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>RESERVATIONS</h3>
              <ul className={styles.links}>
                <li>
                  <a
                    href={jamindarBooking.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Online (BookOne)
                  </a>
                </li>
                <li>
                  <a
                    href={`https://api.whatsapp.com/send?phone=91${jamindarBooking.whatsapp.replace(/\D/g, "")}&text=Hello%20Jamindar%20Nest,%20I%20would%20like%20to%20inquire%20about%20a%20stay.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Concierge
                  </a>
                </li>
                <li>
                  <span className={styles.policyText}>
                    Free cancellation up to 7 days before check-in.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.container}>
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © {currentYear} Jamindar Nest. All rights reserved.
            </p>
            <Link href="/" className={styles.backToMain}>
              <Icon icon="lucide:arrow-left" width={13} height={13} />
              <span>Visit Bishnu Bhaban</span>
            </Link>
            <p className={styles.credits}>
              Powered by{" "}
              <a href="https://bookone.io/" target="_blank" rel="noopener noreferrer">
                BookOne
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
