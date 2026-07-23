import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

const ARMED = "data-reveal-armed";
const SHOWN = "data-reveal-shown";

/**
 * Fades `[data-reveal]` elements up as they scroll into view.
 *
 * The risk is inverted on purpose. Content is fully visible by default — the
 * CSS only hides an element once *this hook* adds `data-reveal-armed` to it,
 * and it only arms elements that are currently below the fold. JS being alive
 * is therefore a precondition for anything ever being hidden. If the hook never
 * runs, throws, or the browser lacks the APIs, every element just stays visible
 * and un-animated. The failure mode is "no animation", never the "blank section
 * until you refresh" that hiding-by-default caused.
 *
 * Three independent reveal paths, because a stranded section is the worst
 * outcome on a marketing site and this is worth over-engineering:
 *   1. IntersectionObserver — the normal, efficient path.
 *   2. A throttled scroll/resize check — catches anything the observer misses.
 *   3. A one-shot safety timer — reveals whatever is left after 2.5s, no matter
 *      what, so nothing can stay hidden indefinitely.
 *
 * A MutationObserver re-arms elements that mount after this runs, which is the
 * normal case on a client-side navigation: route chunks load async, so the new
 * page's DOM usually is not present yet when the effect first fires.
 */
export function useReveal() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const hasIO = typeof IntersectionObserver !== "undefined";
    const hasMO = typeof MutationObserver !== "undefined";
    if (!hasMO) return; // Without it, late-mounting content could strand — don't hide anything.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const show = (el: Element) => el.setAttribute(SHOWN, "");
    const inView = (el: Element) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.92 && r.bottom > 0;
    };

    let io: IntersectionObserver | null = null;
    if (hasIO) {
      try {
        io = new IntersectionObserver(
          (entries) => {
            for (const e of entries) {
              if (e.isIntersecting) {
                show(e.target);
                io?.unobserve(e.target);
              }
            }
          },
          { rootMargin: "0px 0px -8% 0px", threshold: 0 },
        );
      } catch {
        io = null;
      }
    }

    /** Arm below-fold elements; reveal in-view ones immediately (no load flash). */
    const arm = () => {
      document.querySelectorAll<HTMLElement>(`[data-reveal]:not([${ARMED}])`).forEach((el) => {
        el.setAttribute(ARMED, "");
        if (inView(el)) show(el);
        else io?.observe(el);
      });
    };

    // Fallback sweep: reveal any armed-but-hidden element now in view. Covers
    // the case where the observer does not fire (some embedded webviews).
    const sweep = () => {
      document
        .querySelectorAll<HTMLElement>(`[${ARMED}]:not([${SHOWN}])`)
        .forEach((el) => inView(el) && show(el));
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        sweep();
        ticking = false;
      });
    };

    arm();
    const mutations = new MutationObserver(arm);
    mutations.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Last-resort safety net: nothing stays hidden past this, ever.
    const failsafe = window.setTimeout(() => {
      document.querySelectorAll(`[${ARMED}]:not([${SHOWN}])`).forEach(show);
    }, 2500);

    return () => {
      io?.disconnect();
      mutations.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(failsafe);
    };
  }, [pathname]);
}
