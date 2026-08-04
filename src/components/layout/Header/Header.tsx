"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon/Icon";
import { NAV_GROUPS, NAV_CTA } from "@/data/navigation";
import { SITE_ASSETS, SITE_INFO } from "@/data/site";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setMegaMenuOpen,
  setMobileNavOpen,
} from "@/store/slices/uiSlice";
import type { NavGroup } from "@/types";
import styles from "./Header.module.scss";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { isScrolled, scrollY } = useScrollPosition();
  const dispatch = useAppDispatch();
  const megaMenuOpen = useAppSelector((s) => s.ui.isMegaMenuOpen);
  const isMobileNavOpen = useAppSelector((s) => s.ui.isMobileNavOpen);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMegaEnter = useCallback(
    (group: NavGroup) => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
      dispatch(setMegaMenuOpen(group.id));
    },
    [dispatch]
  );

  const handleMegaLeave = useCallback(() => {
    hoverTimeout.current = setTimeout(() => {
      dispatch(setMegaMenuOpen(null));
    }, 120);
  }, [dispatch]);

  const closeMega = useCallback(() => {
    dispatch(setMegaMenuOpen(null));
  }, [dispatch]);

  const headerClass = [
    styles.header,
    isHome && !isScrolled ? styles.home : "",
    isScrolled ? styles.scrolled : "",
  ].filter(Boolean).join(" ");

  return (
    <header
      className={headerClass}
      role="banner"
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label={SITE_INFO.name}>
          <Image
            src={SITE_ASSETS.logo}
            alt={SITE_INFO.name}
            width={1024}
            height={1024}
            className={styles.logoImage}
            priority
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {NAV_GROUPS.map((group) => (
              <li
                key={group.id}
                className={styles.navItem}
                onMouseEnter={() => handleMegaEnter(group)}
                onMouseLeave={handleMegaLeave}
              >
                <Link
                  href={group.href ?? "#"}
                  className={`${styles.navLink} ${megaMenuOpen === group.id ? styles.navLinkActive : ""}`}
                >
                  {group.label}
                  {group.children.length > 0 && (
                    <Icon
                      icon="lucide:chevron-down"
                      width={14}
                      height={14}
                      className={styles.chevron}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link
            href={NAV_CTA.href}
            className={styles.ctaButton}
          >
            <Icon icon={NAV_CTA.icon} width={16} height={16} className={styles.ctaIcon} />
            <span className={styles.ctaLabel}>{NAV_CTA.label}</span>
          </Link>

          <button
            type="button"
            className={`${styles.hamburger} ${isMobileNavOpen ? styles.hamburgerOpen : ""}`}
            aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileNavOpen}
            onClick={() => dispatch(setMobileNavOpen(!isMobileNavOpen))}
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>
      </div>

      {megaMenuOpen && (
        <div
          className={styles.megaOverlay}
          onMouseEnter={() => {
            if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
          }}
          onMouseLeave={handleMegaLeave}
          onClick={closeMega}
        >
          {NAV_GROUPS.map((group) =>
            megaMenuOpen === group.id ? (
              <div key={group.id} className={styles.megaContent}>
                <div className={styles.megaInner}>
                  <div className={styles.megaHeader}>
                    <Link
                      href={group.href ?? "#"}
                      className={styles.megaTitle}
                      onClick={closeMega}
                    >
                      {group.label}
                    </Link>
                    <span className={styles.megaSubtitle}>
                      Explore all {group.label.toLowerCase()} options
                    </span>
                  </div>
                  <div className={styles.megaGrid}>
                    {group.children.map((child) => (
                      <Link
                        key={child.id}
                        href={child.href}
                        className={styles.megaCard}
                        onClick={closeMega}
                      >
                        <div className={styles.megaCardIcon}>
                          <Icon icon={child.icon ?? "lucide:link"} width={20} height={20} />
                        </div>
                        <div className={styles.megaCardBody}>
                          <span className={styles.megaCardLabel}>
                            {child.label}
                          </span>
                          {child.description && (
                            <span className={styles.megaCardDesc}>
                              {child.description}
                            </span>
                          )}
                        </div>
                        <Icon
                          icon="lucide:arrow-right"
                          width={14}
                          height={14}
                          className={styles.megaCardArrow}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      )}
    </header>
  );
}
