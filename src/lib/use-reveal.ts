import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Reveals `[data-reveal]` elements as they enter the viewport.
 *
 * Progressive enhancement: the hidden state is scoped to `[data-js]` on the
 * root element, which is only set by an inline script when IntersectionObserver
 * exists. Without JS the markup renders exactly as prerendered — important
 * here, because every page is static HTML that search engines read directly.
 *
 * Elements are unobserved once shown, so content never animates twice or
 * disappears on scroll-back.
 */
export function useReveal() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    // Reduced motion: reveal everything immediately and skip the observer.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        el.dataset.revealed = "";
      });
      return;
    }

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])");
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealed = "";
          observer.unobserve(entry.target);
        }
      },
      // Fire slightly before the element is fully in view so the motion has
      // finished by the time it reaches comfortable reading position.
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
}
