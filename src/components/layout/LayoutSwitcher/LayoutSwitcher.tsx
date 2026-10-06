"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header/Header";
import MobileNav from "@/components/layout/MobileNav/MobileNav";
import Footer from "@/components/layout/Footer/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton/WhatsAppButton";

/**
 * LayoutSwitcher — forces React to cleanly remount layout shells when the
 * active brand changes between Jamindar Nest and Bishnu Bhaban.
 *
 * Without this, navigating FROM /jamindar-nest BACK TO any Bishnu Bhaban
 * page triggers:
 *   "NotFoundError: Failed to execute 'removeChild' on 'Node':
 *    The node to be removed is not a child of this node."
 *
 * Root cause: Header / Footer / WhatsAppButton each do an early `return` of
 * a completely different component tree depending on the pathname.  React
 * reconciles them as the *same* component instance and tries to patch the
 * live DOM in-place, which orphans nodes.
 *
 * Fix: pass a `key` prop that changes with the brand.  React will fully
 * unmount the old component tree and mount a fresh one — no DOM orphans.
 */
export default function LayoutSwitcher({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isJamindar =
    pathname === "/jamindar-nest" ||
    (pathname?.startsWith("/jamindar-nest/") ?? false);

  const k = isJamindar ? "jamindar" : "bhaban";

  return (
    <>
      <Header key={`${k}-header`} />
      <MobileNav key={`${k}-mobilenav`} />
      {children}
      <Footer key={`${k}-footer`} />
      <WhatsAppButton key={`${k}-whatsapp`} />
    </>
  );
}
