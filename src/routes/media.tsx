import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar, Mic, PlayCircle } from "lucide-react";
import { photos } from "@/lib/photos";
import { SiteFooter, SiteNav } from "@/components/site-nav";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media & Press — Brandon Price-Crum" },
      {
        name: "description",
        content:
          "Recent podcasts, panels, features, and speaking appearances by attorney Brandon Price-Crum.",
      },
      { property: "og:title", content: "Brandon Price-Crum — Media & Press" },
      {
        property: "og:description",
        content: "Podcasts, panels, and features with trial attorney Brandon Price-Crum.",
      },
    ],
  }),
  component: MediaPage,
});

const features = [
  {
    tag: "Podcast",
    outlet: "The Legal Leaders Podcast",
    title: "Building a trial practice with grit and grace",
    date: "March 2025",
    img: photos.navySit2,
  },
  {
    tag: "Panel",
    outlet: "Alabama State University",
    title: "Access, equity, and the modern courtroom",
    date: "February 2025",
    img: photos.navyHead,
  },
  {
    tag: "Feature",
    outlet: "National Black Lawyers",
    title: "Top 40 Under 40 — Rising Stars edition",
    date: "December 2024",
    img: photos.navySit1,
  },
  {
    tag: "Interview",
    outlet: "Mid-South Attorneys Journal",
    title: "Rising Star series: preparation as a superpower",
    date: "October 2024",
    img: photos.officeBlue,
  },
  {
    tag: "Keynote",
    outlet: "FAMU Law Alumni Weekend",
    title: "What no one tells you about your first ten years",
    date: "August 2024",
    img: photos.desk,
  },
  {
    tag: "Article",
    outlet: "Coming Soon",
    title: "Brandon's forthcoming book on leadership & legacy",
    date: "2026",
    img: photos.blueStanding,
  },
];

function MediaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* HERO — navy vibe */}
      <section className="relative pt-32 lg:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[oklch(0.94_0.03_255)] to-background" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-electric/20 blur-[120px] -z-10" />

        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid gap-14 lg:grid-cols-[1.2fr_1fr] items-end">
          <div>
            <div className="eyebrow">Media & Press</div>
            <h1 className="mt-4 text-mega text-ink text-[clamp(3rem,8vw,7rem)]">
              On mic.<br />
              <span className="text-electric">On the record.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Podcasts, panels, and features spotlighting Brandon's perspective on
              advocacy, leadership, and the future of trial law.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 gradient-halo blur-2xl opacity-70 -z-10" />
            <div className="photo-pop aspect-[4/5] max-w-sm ml-auto">
              <img src={photos.navyHead} alt="" className="h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 mix-blend-overlay" />
              <div className="absolute bottom-4 left-4 right-4 glass-card rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl gradient-brand text-white">
                  <Mic className="h-4 w-4" />
                </div>
                <div className="leading-tight">
                  <div className="font-display font-black text-ink text-sm">Available for interviews</div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Press · Podcasts · Panels
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="group relative overflow-hidden rounded-3xl bg-white border border-border shadow-[0_20px_50px_-30px_rgba(30,64,175,0.35)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={f.img}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-electric">
                  {f.tag}
                </div>
                <div className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-electric group-hover:scale-110 transition-transform">
                  <PlayCircle className="h-5 w-5" />
                </div>
                <div className="absolute inset-x-6 bottom-6 text-white">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-white/80">
                    <Calendar className="h-3 w-3" /> {f.date}
                  </div>
                  <div className="mt-2 font-display font-black text-xl leading-tight">{f.title}</div>
                  <div className="mt-1 text-sm text-white/70">{f.outlet}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 pb-24">
        <div className="rounded-[2rem] border border-border bg-white p-10 lg:p-14 shadow-[0_30px_80px_-40px_rgba(30,64,175,0.4)]">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
            <div>
              <div className="eyebrow">Coming Soon</div>
              <h2 className="mt-3 font-display font-black text-4xl lg:text-5xl text-ink leading-tight">
                The blog is on its way.
              </h2>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                Short-form essays on cases, leadership, and the moments that shape a
                career. Drop your email and be the first to read.
              </p>
              <Link to="/contact" className="btn-primary mt-8">
                Notify Me <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 gradient-halo blur-2xl opacity-70 -z-10" />
              <div className="photo-pop aspect-[4/5] max-w-xs ml-auto">
                <img src={photos.grayLaugh} alt="" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
