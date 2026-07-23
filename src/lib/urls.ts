/** Absolute origin for canonical and OG tags. Injected at build time. */
declare const __SITE_URL__: string;

export const SITE_URL = __SITE_URL__;

/**
 * Prefixes a root-relative asset path with Vite's base.
 *
 * Needed because GitHub Pages serves project repos from `/<repo>/`. Paths that
 * Vite sees as imports get rewritten automatically; plain strings — the photo
 * manifest, the favicon — do not, so they route through here.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}

/** Absolute URL for a route, used for canonical links and og:url. */
export function canonical(path = "/"): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const suffix = path === "/" ? "" : path;
  return `${SITE_URL}${base}${suffix}`;
}
