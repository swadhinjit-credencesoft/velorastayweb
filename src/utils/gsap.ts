import { useEffect, useLayoutEffect } from "react";

/**
 * GSAP ScrollTrigger `pin: true` wraps the pinned element in a
 * `<div class="pin-spacer">` that React's virtual DOM knows nothing about.
 *
 * If that wrapper is still in place when React unmounts the section, React calls
 * `parent.removeChild(section)` on the original parent, the section is actually
 * inside the pin-spacer, and the browser throws:
 *
 *   NotFoundError: Failed to execute 'removeChild' on 'Node':
 *   The node to be removed is not a child of this node.
 *
 * `ctx.revert()` normally removes the spacer, but it can leave it behind when the
 * section unmounts while pinned. This restores the DOM shape React expects:
 * moves the pinned element back to where React rendered it and drops the spacer.
 */
export function unpinElement(el: HTMLElement | null): void {
  if (!el) return;

  const spacer = el.parentElement;
  if (!spacer || !spacer.classList.contains("pin-spacer")) return;

  const parent = spacer.parentElement;
  if (!parent) return;

  while (spacer.firstChild) {
    parent.insertBefore(spacer.firstChild, spacer);
  }
  parent.removeChild(spacer);
}

/**
 * React runs `useEffect` destroy functions in a passive phase AFTER the whole
 * commit (mutation) phase. By then React has already tried to `removeChild()` a
 * still-pinned section, which throws NotFoundError.
 *
 * `useLayoutEffect` destroy runs synchronously during deletion, BEFORE the host
 * node is detached, so GSAP can unwrap its pin-spacer in time. Resolve to
 * `useEffect` on the server because layout effects do not run during SSR.
 */
export const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;
