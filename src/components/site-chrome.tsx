import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import { contact, credentials, site, socials } from "@/content/site";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/practice", label: "Practice" },
  { to: "/media", label: "Media" },
  { to: "/contact", label: "Contact" },
] as const;

function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="flex items-baseline gap-2.5 leading-none">
      <span
        className={cn(
          "display text-[1.35rem] tracking-tight",
          tone === "light" ? "text-white" : "text-ink",
        )}
      >
        Brandon Price-Crum
      </span>
      <span
        aria-hidden
        className={cn("h-1 w-1 rounded-full", tone === "light" ? "bg-brand-bright" : "bg-brand")}
      />
      <span
        className={cn(
          "label-xs hidden sm:inline",
          tone === "light" ? "text-white/55" : "text-slate-2",
        )}
      >
        Esq.
      </span>
    </span>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile sheet on navigation, and lock scroll while it is open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-line bg-paper/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-6 px-6 py-4 lg:px-12">
        <Link to="/" aria-label={`${site.name} — home`} className="shrink-0">
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="group relative py-1 text-[0.8125rem] font-medium tracking-wide text-slate-1 transition-colors hover:text-ink"
              activeProps={{ className: "!text-ink" }}
            >
              {item.label}
              <span
                aria-hidden
                className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand transition-all duration-300 group-hover:w-full"
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={contact.phoneHref} className="btn btn-primary hidden md:inline-flex">
            <Phone className="h-3.5 w-3.5" aria-hidden />
            {contact.phone}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-5 text-ink lg:hidden"
          >
            {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-line bg-paper lg:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-[88rem] flex-col px-6 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="display border-b border-line py-4 text-3xl text-ink last:border-0"
                activeProps={{ className: "!text-brand" }}
              >
                {item.label}
              </Link>
            ))}
            <a href={contact.phoneHref} className="btn btn-brand mt-5">
              <Phone className="h-3.5 w-3.5" aria-hidden />
              {contact.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[88rem] px-6 py-20 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <Wordmark tone="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Trial attorney with {site.firm}, representing people and families across Alabama and
              Georgia.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="label-xs text-white/45 transition-colors hover:text-brand-bright"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="label-xs text-white/40">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-brand-bright">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="label-xs text-white/40">Offices</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {contact.cities.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="label-xs text-white/40">Contact</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>
                <a href={contact.phoneHref} className="transition-colors hover:text-brand-bright">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contact.emailHref}
                  className="break-all transition-colors hover:text-brand-bright"
                >
                  {contact.email}
                </a>
              </li>
              <li className="pt-2 text-white/55">
                {contact.office.street}
                <br />
                {contact.office.city}, {contact.office.state} {contact.office.zip}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-8">
          {credentials.map((c) => (
            <span key={c.title} className="label-xs text-white/35">
              {c.title}
              <span className="mx-2 text-white/15">/</span>
              {c.issuer}
            </span>
          ))}
        </div>

        {/* Required advertising disclosures — keep these; they are not decorative. */}
        <div className="mt-10 space-y-3 border-t border-white/10 pt-8 text-xs leading-relaxed text-white/40">
          <p>
            <strong className="font-semibold text-white/60">Attorney advertising.</strong> This
            website is for general information only and is not legal advice. Viewing this site,
            contacting {site.name}, or submitting the form does not create an attorney-client
            relationship. Do not send confidential information until a representation agreement is
            in place.
          </p>
          <p>
            Prior results do not guarantee a similar outcome. Every case turns on its own facts. No
            representation is made that the quality of legal services to be performed is greater
            than the quality of legal services performed by other lawyers.
          </p>
          <p>
            {site.name} is licensed in Alabama and Georgia. Awards and recognitions are conferred by
            the organizations named; selection criteria are available from those organizations.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-white/35">
          <p>
            © {year} {site.formalName}. All rights reserved.
          </p>
          <a
            href={site.firmUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-brand-bright"
          >
            {site.firm}
          </a>
        </div>
      </div>
    </footer>
  );
}
