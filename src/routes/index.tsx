import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Award, Gavel, Mic, Scale, Sparkles, Star } from "lucide-react";
import { photos } from "@/lib/photos";
import { SiteFooter, SiteNav } from "@/components/site-nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brandon Price-Crum — Trial Attorney, Advocate & Author" },
      {
        name: "description",
        content:
          "Attorney Brandon Price-Crum represents everyday people against insurance companies. Powerhouse trial lawyer, media voice, and rising author based in Alabama.",
      },
      { property: "og:title", content: "Brandon Price-Crum — Trial Attorney & Advocate" },
      {
        property: "og:description",
        content:
          "Powerhouse trial attorney fighting for everyday people. Serious Injury Law Group.",
      },
    ],
  }),
  component: HomePage,
});

const marquee = [
  "TOP 40 UNDER 40",
  "RISING STARS 2024",
  "NATIONAL BLACK LAWYERS",
  "MARTIN LUTHER KING LEADERSHIP AWARD",
  "SERIOUS INJURY LAW GROUP",
  "FAMU COLLEGE OF LAW",
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-tint via-background to-background" />
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-electric/20 blur-[120px] -z-10" />
        <div className="absolute top-40 -right-40 h-[420px] w-[420px] rounded-full bg-electric-soft/60 blur-[120px] -z-10" />

        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid gap-16 lg:grid-cols-[1.05fr_1fr] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-electric animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.24em] font-bold text-ink">
                Now Accepting New Cases
              </span>
            </div>

            <h1 className="mt-6 text-mega text-ink text-[clamp(3rem,8vw,6.5rem)]">
              I fight for the{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-br from-electric via-primary to-[oklch(0.45_0.22_265)] bg-clip-text text-transparent">
                  people
                </span>
                <span className="absolute inset-x-0 bottom-2 h-3 bg-electric-soft/70 -z-0 rounded-sm" />
              </span>{" "}
              insurance forgot.
            </h1>

            <p className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Brandon Price-Crum is a trial attorney with Serious Injury Law Group,
              standing shoulder-to-shoulder with everyday people going up against big
              insurance — and winning.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn-primary">
                Book a Free Consult <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="btn-ghost">
                Meet Brandon
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "10+", v: "Years in Practice" },
                { k: "$MM", v: "Recovered for Clients" },
                { k: "40u40", v: "Top Attorneys" },
              ].map((s) => (
                <div key={s.v} className="border-l-2 border-electric pl-4">
                  <div className="font-display font-black text-2xl text-ink">{s.k}</div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-1">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero photo — desk portrait with 3D pop + glow */}
          <div className="relative">
            <div className="absolute -inset-10 gradient-halo blur-2xl opacity-80 -z-10" />
            <div className="absolute -inset-6 rounded-[2.5rem] gradient-brand opacity-20 blur-3xl -z-10" />

            <div className="relative photo-pop animate-floaty aspect-[4/5] bg-ink">
              <img
                src={photos.desk}
                alt="Brandon Price-Crum, attorney at law, at his office desk"
                className="h-full w-full object-cover object-top"
                loading="eager"
              />
              {/* Shine */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 mix-blend-overlay" />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl px-5 py-4 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl gradient-brand text-white">
                  <Award className="h-5 w-5" />
                </div>
                <div className="leading-tight">
                  <div className="font-display font-black text-ink text-sm">
                    Top 40 Under 40
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    National Black Lawyers
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 glass-card rounded-2xl px-5 py-4">
                <div className="flex items-center gap-1 text-electric">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Client Rated
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border bg-white py-6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...marquee, ...marquee].map((m, i) => (
            <div
              key={i}
              className="mx-8 flex items-center gap-8 font-display font-black text-lg text-ink/70"
            >
              {m}
              <span className="h-1.5 w-1.5 rounded-full bg-electric" />
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICE */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] items-end">
          <div>
            <div className="eyebrow">What I Do</div>
            <h2 className="mt-4 text-mega text-ink text-[clamp(2.4rem,5vw,4rem)]">
              Powerful advocacy.<br />
              <span className="text-electric">No shortcuts.</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            When you are hurt, ignored, or bulldozed by an insurance company, you need a
            lawyer who prepares every case like it's going to trial — because sometimes
            it does. That's how I work.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Gavel,
              title: "Serious Injury",
              body:
                "Car wrecks, trucking collisions, and catastrophic injuries where the stakes — and the medical bills — are life-changing.",
            },
            {
              icon: Scale,
              title: "Insurance Disputes",
              body:
                "When your carrier plays games, denies coverage, or lowballs your claim, I go on offense and hold them accountable.",
            },
            {
              icon: Sparkles,
              title: "Wrongful Death",
              body:
                "Compassionate, meticulous representation for families navigating the unthinkable — and demanding real justice.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative rounded-3xl border border-border bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(30,64,175,0.4)]"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-brand text-white shadow-lg shadow-primary/30">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display font-black text-2xl text-ink">{title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-electric uppercase tracking-widest">
                Learn more <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SPLIT — ABOUT PREVIEW */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-tint via-white to-sky-tint" />
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid gap-14 lg:grid-cols-2 items-center">
          <div className="relative">
            <div className="absolute -inset-8 gradient-halo opacity-70 blur-2xl -z-10" />
            <div className="photo-pop aspect-[4/5] max-w-md">
              <img
                src={photos.blueStanding}
                alt="Brandon Price-Crum in blue suit portrait"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-white/20" />
            </div>
            <div className="absolute bottom-6 right-0 translate-x-6 glass-card rounded-2xl px-5 py-4 max-w-[220px]">
              <div className="text-xs uppercase tracking-[0.2em] text-electric font-bold">Signature</div>
              <div className="mt-1 font-display italic text-ink text-lg">"Prepare like it's trial. Every time."</div>
            </div>
          </div>

          <div>
            <div className="eyebrow">The Attorney</div>
            <h2 className="mt-4 text-mega text-ink text-[clamp(2.4rem,5vw,4rem)]">
              Small-town roots. Big-city fight.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Brandon grew up understanding what it means to work twice as hard for half
              the recognition. Today, he channels that same discipline into every client
              file — from a fender-bender that changed a life to a courtroom that
              changed a family.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Juris Doctor · Florida A&M College of Law",
                "B.A. · Alabama State University",
                "Featured in national legal media & podcasts",
                "Speaker on advocacy, leadership & Black excellence",
              ].map((li) => (
                <li key={li} className="flex items-start gap-3 text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-electric shrink-0" />
                  <span>{li}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-primary mt-10">
              Read My Story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MEDIA STRIP */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="eyebrow">On the Record</div>
            <h2 className="mt-4 text-mega text-ink text-[clamp(2.4rem,5vw,4rem)]">
              Featured & <span className="text-electric">Heard.</span>
            </h2>
          </div>
          <Link to="/media" className="btn-ghost">
            All Media <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              img: photos.officeBlue,
              tag: "Interview",
              title: "The next generation of trial lawyers",
              outlet: "Legal Leaders Podcast",
            },
            {
              img: photos.navyHead,
              tag: "Panel",
              title: "Access, equity & the courtroom",
              outlet: "ASU Alumni Speaker Series",
            },
            {
              img: photos.grayLaugh,
              tag: "Feature",
              title: "Top 40 Under 40 — Rising Stars",
              outlet: "National Black Lawyers",
            },
          ].map((m) => (
            <article
              key={m.title}
              className="group relative overflow-hidden rounded-3xl bg-white border border-border shadow-[0_20px_50px_-30px_rgba(30,64,175,0.35)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={m.img}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-electric">
                  <Mic className="h-3 w-3" /> {m.tag}
                </div>
                <div className="absolute inset-x-6 bottom-6 text-white">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-white/70">{m.outlet}</div>
                  <div className="mt-2 font-display font-black text-xl leading-tight">{m.title}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BOOK TEASER */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 gradient-brand" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid gap-12 lg:grid-cols-[1.4fr_1fr] items-center text-white">
          <div>
            <div className="eyebrow !text-white/80">Coming Soon</div>
            <h2 className="mt-4 text-mega text-[clamp(2.6rem,6vw,5rem)]">
              The book.<br />
              For the fighters.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/85 leading-relaxed">
              Part memoir, part playbook. Brandon's forthcoming book distills the
              mindset, discipline, and grit that has carried him from Alabama classrooms
              to national courtrooms.
            </p>
            <Link to="/contact" className="btn-ghost mt-8 !bg-white !text-ink hover:!text-electric">
              Get on the launch list <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative mx-auto">
            <div className="relative photo-pop aspect-[3/4] w-64 rotate-3">
              <img src={photos.navySit1} alt="" className="h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/40 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
