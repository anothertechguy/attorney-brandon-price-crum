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
        "py-24 lg:py-32",
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
      className={cn(align === "center" && "mx-auto max-w-3xl text-center", "max-w-3xl", className)}
    >
      {eyebrow && (
        <p className={cn("eyebrow", tone === "light" && "!text-brand-bright")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "display mt-4 text-[clamp(2.25rem,4.6vw,3.75rem)]",
          tone === "light" ? "text-white" : "text-ink",
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
    <figure className={cn("rule-accent", className)}>
      <blockquote
        className={cn(
          "display text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.15]",
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
