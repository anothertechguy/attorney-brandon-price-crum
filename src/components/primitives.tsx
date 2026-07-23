import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Page-width container. Every section on the site uses this gutter. */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-[88rem] px-6 lg:px-12", className)}>{children}</div>
  );
}

export function Section({
  children,
  className,
  tone = "default",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "paper" | "tint" | "ink";
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn(
        // Two adjacent sections each contribute their own padding, so this is
        // half the visible gap, not all of it. Kept deliberately tighter than
        // it looks in isolation.
        "py-14 lg:py-20",
        tone === "paper" && "bg-paper",
        tone === "tint" && "bg-tint-1",
        tone === "ink" && "bg-ink text-white",
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
}

/**
 * Highlights a word or phrase inside a heading in the brand colour.
 *
 * Carries a data attribute rather than a colour class so the surrounding
 * heading can retarget it — brand blue is too dark to sit on the navy sections,
 * where it needs the brighter step instead.
 */
export function Accent({ children }: { children: ReactNode }) {
  return <span data-accent>{children}</span>;
}

/**
 * Oversized wordmark parked behind a section as texture. Absolutely positioned
 * and always aria-hidden — it is atmosphere, not content.
 *
 * The host section needs `relative overflow-clip` so a long nowrap word cannot
 * widen the page. Use clip, not hidden: `overflow: hidden` establishes a scroll
 * container and silently kills `position: sticky` on any descendant, which is
 * exactly what the two-column sections rely on.
 */
export function GhostWord({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  /** "light" for navy sections, where the brand blue disappears. */
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(tone === "light" ? "ghost-word-light" : "ghost-word", className)}
    >
      {children}
    </span>
  );
}

/** Eyebrow + display heading + optional supporting paragraph. */
export function SectionHead({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      data-reveal
      className={cn(align === "center" && "mx-auto max-w-3xl text-center", "max-w-3xl", className)}
    >
      {eyebrow && (
        <p className={cn("eyebrow", tone === "light" && "!text-brand-bright")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "display mt-4 text-[clamp(1.875rem,3.4vw,2.75rem)]",
          tone === "light"
            ? "text-white [&_[data-accent]]:text-brand-bright"
            : "text-ink [&_[data-accent]]:text-brand",
        )}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            "mt-6 text-lg leading-relaxed",
            tone === "light" ? "text-white/70" : "text-muted",
          )}
        >
          {lede}
        </p>
      )}
    </div>
  );
}

/** Small capsule used for credentials and metadata. */
export function Pill({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark" | "brand";
}) {
  return (
    <span
      className={cn(
        "label-xs inline-flex items-center rounded-full px-3 py-1.5",
        tone === "light" && "bg-tint-2 text-brand-ink",
        tone === "dark" && "bg-white/10 text-white/70",
        tone === "brand" && "bg-brand text-white",
      )}
    >
      {children}
    </span>
  );
}

/**
 * Pull quote. Always renders its source — nothing on this site is quoted
 * without attribution.
 */
export function PullQuote({
  quote,
  tone = "dark",
  className,
}: {
  quote: { text: string; source: string; year: string };
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <figure data-reveal className={cn("rule-accent", className)}>
      <blockquote
        className={cn(
          "quote text-[clamp(1.25rem,2.1vw,1.75rem)]",
          tone === "light" ? "text-white" : "text-ink",
        )}
      >
        &ldquo;{quote.text}&rdquo;
      </blockquote>
      <figcaption
        className={cn("label-xs mt-6", tone === "light" ? "text-white/45" : "text-slate-2")}
      >
        Brandon Price-Crum
        <span className="mx-2 opacity-40">/</span>
        {quote.source}, {quote.year}
      </figcaption>
    </figure>
  );
}
