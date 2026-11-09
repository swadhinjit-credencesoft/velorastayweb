"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";
import { NAV_GROUPS, NAV_CTA } from "@/data/navigation";
import { NX_NAV_GROUPS, NAV_CTA as NX_NAV_CTA } from "@/data/nx/navigation";
import { SITE_INFO } from "@/data/site";
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
  const isNx = pathname?.startsWith("/yogiraj-nx") || pathname?.startsWith("/hotel-yogiraj-nx");
  const isHome = pathname === "/" || pathname === "/yogiraj-nx" || pathname === "/hotel-yogiraj-nx";
  const navGroups = isNx ? NX_NAV_GROUPS : NAV_GROUPS;
  const navCta = isNx ? NX_NAV_CTA : NAV_CTA;
  const currentPhone = isNx ? "+91 99030 33535" : SITE_INFO.phone;
  const currentPhoneRaw = isNx ? "+919903033535" : SITE_INFO.phone.replace(/\s+/g, "");
  const currentName = isNx ? "Hotel Yogiraj NX" : SITE_INFO.name;
  const homeHref = isNx ? "/yogiraj-nx" : "/";
  const switchHref = isNx ? "/" : "/yogiraj-nx";
  const switchTitle = isNx
    ? "Switch to Hotel Yogiraj (Main Building)"
    : "Switch to Hotel Yogiraj NX (Building 2)";

  const { isScrolled } = useScrollPosition();
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
        <Link href={homeHref} className={styles.logo} aria-label={currentName}>
          <Image
            src="/yogirajlogo.png"
            alt={currentName}
            width={2000}
            height={3548}
            priority
            className={styles.logoImg}
          />
          {isNx && <span className={styles.nxTag}>NX</span>}
        </Link>

        <nav className={styles.desktopNav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {navGroups.map((group) => (
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
            href={switchHref}
            className={styles.switchPropertyBtn}
            title={switchTitle}
            aria-label={switchTitle}
          >
            <Icon icon="lucide:arrow-left-right" width={14} height={14} className={styles.switchIcon} />
            <span className={styles.switchLabelLong}>
              {isNx ? "Hotel Yogiraj" : "Hotel Yogiraj NX"}
            </span>
            <span className={styles.switchLabelShort}>
              {isNx ? "Main Hotel" : "Yogiraj NX"}
            </span>
            <span className={styles.switchBadge}>
              {isNx ? "Main" : "NX"}
            </span>
          </Link>

          <a
            href={`tel:${currentPhoneRaw}`}
            className={styles.phoneBtn}
            aria-label={`Call ${currentName} at ${currentPhone}`}
          >
            <Icon icon="lucide:phone-call" width={16} height={16} className={styles.phoneIcon} />
            <span className={styles.phoneNumber}>{currentPhone}</span>
          </a>

          <Link
            href={navCta.href ?? "#"}
            className={styles.ctaButton}
          >
            <Icon icon={navCta.icon ?? "lucide:calendar-check"} width={16} height={16} className={styles.ctaIcon} />
            <span className={styles.ctaLabel}>{navCta.label}</span>
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
        >
          {navGroups
            .filter((g) => g.id === megaMenuOpen)
            .map((group) => (
              <div
                key={group.id}
                className={styles.megaContent}
                onMouseEnter={() => {
                  if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
                }}
                onMouseLeave={handleMegaLeave}
              >
                <div className={styles.megaInner}>
                  <div className={styles.megaHeader}>
                    <h3 className={styles.megaTitle}>{group.label}</h3>
                    <Link
                      href={group.href ?? "#"}
                      className={styles.megaViewAll}
                      onClick={closeMega}
                    >
                      View All
                      <Icon icon="lucide:arrow-right" width={14} height={14} />
                    </Link>
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
                          <Icon
                            icon={child.icon ?? "lucide:arrow-right"}
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className={styles.megaCardText}>
                          <span className={styles.megaCardTitle}>
                            {child.label}
                          </span>
                          {child.description && (
                            <span className={styles.megaCardDesc}>
                              {child.description}
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </header>
  );
}
