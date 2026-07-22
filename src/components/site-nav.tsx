import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Me" },
  { to: "/media", label: "Media" },
  { to: "/contact", label: "Contact Me" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-border/60 shadow-[0_6px_30px_-20px_rgba(30,64,175,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-brand text-white font-display font-black text-sm shadow-lg shadow-primary/30">
            BPC
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display font-black text-[15px] tracking-tight text-ink">
              BRANDON PRICE-CRUM
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground mt-1">
              Attorney at Law
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/80 hover:text-electric transition-colors"
              activeProps={{ className: "!text-electric" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-primary hidden md:inline-flex">
            <Phone className="h-3.5 w-3.5" /> Book Consult
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-11 w-11 place-items-center rounded-full border border-border bg-white"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-display font-bold uppercase tracking-wider text-ink"
                activeProps={{ className: "!text-electric" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-3">
              <Phone className="h-3.5 w-3.5" /> Book Consult
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white mt-24">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[80%] gradient-halo opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-10 py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl gradient-brand font-display font-black">
              BPC
            </span>
            <div className="leading-none">
              <div className="font-display font-black text-lg">BRANDON PRICE-CRUM</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/60 mt-1">
                Attorney · Advocate · Author
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm text-white/70 leading-relaxed">
            A trial attorney with Serious Injury Law Group building a legacy of relentless
            advocacy for everyday people going up against big insurance.
          </p>
        </div>
        <div>
          <div className="eyebrow !text-white/60">Explore</div>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-electric-soft">Home</Link></li>
            <li><Link to="/about" className="hover:text-electric-soft">About Me</Link></li>
            <li><Link to="/media" className="hover:text-electric-soft">Media</Link></li>
            <li><Link to="/contact" className="hover:text-electric-soft">Contact Me</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow !text-white/60">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>Serious Injury Law Group</li>
            <li>Birmingham, Alabama</li>
            <li>hello@brandonpricecrum.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Brandon Price-Crum, Esq. All rights reserved.</div>
          <div className="uppercase tracking-[0.28em]">Attorney Advertising</div>
        </div>
      </div>
    </footer>
  );
}
