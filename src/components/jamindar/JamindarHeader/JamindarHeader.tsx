"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import { jamindarData, jamindarBooking } from "@/data/jamindar";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import styles from "./JamindarHeader.module.scss";

export default function JamindarHeader() {
  const { isScrolled } = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navItems = [
    { label: "THE NEST", href: "#intro" },
    { label: "JOURNEY", href: "#journey" },
    { label: "ROOMS", href: "#rooms" },
    { label: "EXPERIENCES", href: "#experiences" },
    { label: "NEST", href: "#horizon" },
    { label: "GALLERY", href: "#gallery" },
  ];

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
        role="banner"
      >
        <div className={styles.inner}>
          {/* Jamindar Brand Logo — left side only */}
          <Link href="/jamindar-nest" className={styles.brand} aria-label={jamindarData.name}>
            <Image
              src={jamindarData.logo}
              alt={jamindarData.name}
              width={160}
              height={56}
              className={styles.brandLogo}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav} aria-label="Jamindar Navigation">
            <ul className={styles.navList}>
              {navItems.map((item, idx) => (
                <li key={idx} className={styles.navItem}>
                  <a href={item.href} className={styles.navLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Actions */}
          <div className={styles.actions}>
            {/* Back to Bishnu Bhaban */}
            <a href="/" className={styles.backLink} aria-label="Go to Bishnu Bhaban">
              <Icon icon="lucide:arrow-left" width={13} height={13} />
              <span>BISHNU BHABAN</span>
            </a>

            <a
              href={jamindarBooking.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              <Icon icon="lucide:calendar-check" width={16} height={16} />
              <span>BOOK YOUR STAY</span>
            </a>

            <button
              type="button"
              className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className={styles.line} />
              <span className={styles.line} />
              <span className={styles.line} />
            </button>
          </div>
        </div>
      </header>

      {/* Dedicated Jamindar Mobile Navigation Drawer */}
      <div
        className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileOpen : ""}`}
        aria-hidden={!mobileOpen}
      >
        <div className={styles.drawerHeader}>
          <Link href="/jamindar-nest" className={styles.brand} onClick={() => setMobileOpen(false)} aria-label={jamindarData.name}>
            <Image
              src={jamindarData.logo}
              alt={jamindarData.name}
              width={140}
              height={50}
              className={styles.brandLogo}
            />
          </Link>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <Icon icon="lucide:x" width={24} height={24} />
          </button>
        </div>

        <nav className={styles.drawerNav}>
          <ul className={styles.drawerList}>
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className={styles.drawerLink}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.drawerFooter}>
          <div className={styles.drawerContact}>
            <p className={styles.contactItem}>
              <Icon icon="lucide:map-pin" width={16} height={16} />
              <span>{jamindarData.location}</span>
            </p>
            <a href={`tel:${jamindarBooking.phone}`} className={styles.contactItem}>
              <Icon icon="lucide:phone" width={16} height={16} />
              <span>{jamindarBooking.phone}</span>
            </a>
          </div>

          <a
            href={jamindarBooking.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.drawerCta}
            onClick={() => setMobileOpen(false)}
          >
            <Icon icon="lucide:calendar-check" width={18} height={18} />
            <span>BOOK YOUR STAY</span>
          </a>
        </div>
      </div>
      {mobileOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
