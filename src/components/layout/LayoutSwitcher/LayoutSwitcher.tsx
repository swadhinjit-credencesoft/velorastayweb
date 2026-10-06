"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header/Header";
import MobileNav from "@/components/layout/MobileNav/MobileNav";
import Footer from "@/components/layout/Footer/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton/WhatsAppButton";

/**
 * LayoutSwitcher — wraps all layout shells with a stable React `key`.
 *
 * When navigating between /jamindar-nest* and Bishnu Bhaban pages, the
 * Header / Footer / WhatsAppButton each do an early return of a completely
 * different component root.  React reconciles them as the *same* component
 * instance and tries to mutate the live DOM, which causes:
 *   "NotFoundError: Failed to execute 'removeChild' on 'Node':
 *    The node to be removed is not a child of this node."
 *
 * The fix: give the entire layout shell a different `key` depending on which
 * brand we're displaying.  React will fully unmount the old tree and mount a
 * fresh one, preventing any DOM orphan errors.
 */
export default function LayoutSwitcher() {
  const pathname = usePathname();
  const isJamindar =
    pathname === "/jamindar-nest" ||
    (pathname?.startsWith("/jamindar-nest/") ?? false);

  const layoutKey = isJamindar ? "jamindar" : "bhaban";

  return (
    <div key={layoutKey}>
      <Header />
      <MobileNav />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
