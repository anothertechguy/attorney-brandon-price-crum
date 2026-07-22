import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Quote } from "lucide-react";
import { photos } from "@/lib/photos";
import { SiteFooter, SiteNav } from "@/components/site-nav";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Brandon Price-Crum — Trial Attorney & Advocate" },
      {
        name: "description",
        content:
          "The story of Brandon Price-Crum: FAMU-trained trial attorney, national speaker, and rising author fighting for everyday people.",
      },
      { property: "og:title", content: "About Brandon Price-Crum" },
      { property: "og:description", content: "Trial attorney. Advocate. Speaker. Rising author." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* HERO — gray suite */}
      <section className="relative pt-32 lg:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[oklch(0.97_0.005_250)] to-background" />
        <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-electric-soft/40 blur-[110px] -z-10" />

        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid gap-14 lg:grid-cols-[1.1fr_1fr] items-center">
          <div>
            <div className="eyebrow">The Story</div>
            <h1 className="mt-4 text-mega text-ink text-[clamp(3rem,7vw,6rem)]">
              Grit, grace,<br />
              <span className="text-electric">and a legal pad.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed">
              I'm Brandon Price-Crum — attorney, advocate, and unapologetic believer in
              the power of showing up prepared. My work is built on one simple idea:
              regular people deserve extraordinary representation.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 gradient-halo blur-2xl opacity-60 -z-10" />
            <div className="photo-pop aspect-[3/4]">
              <img
                src={photos.graySit}
                alt="Brandon Price-Crum in a gray suit"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* BIO */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-20 grid gap-16 lg:grid-cols-[1fr_1.6fr]">
        <div className="lg:sticky lg:top-32 self-start">
          <div className="eyebrow">The Bio</div>
          <h2 className="mt-4 font-display font-black text-4xl text-ink leading-tight">
            From Alabama classrooms to national courtrooms.
          </h2>
        </div>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Brandon Price-Crum earned his bachelor's degree from Alabama State University
            before heading to Florida A&M University College of Law, where he graduated
            with the tools — and the fire — to represent clients who too often get
            overlooked.
          </p>
          <p>
            Today he practices with the Serious Injury Law Group, taking on car wreck,
            trucking, and wrongful-death cases across the region. He has been recognized
            as one of the National Black Lawyers <span className="text-ink font-semibold">Top 40 Under 40</span> and
            named a Mid-South <span className="text-ink font-semibold">Rising Star</span>{" "}
            among top attorneys.
          </p>
          <p>
            Outside the courtroom, Brandon is a speaker, mentor, and forthcoming author,
            using his platform to talk candidly about leadership, resilience, and what
            it takes to build a life you're proud of.
          </p>
        </div>
      </section>

      {/* VALUES / GALLERY */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-sky-tint" />
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="eyebrow">What I Stand For</div>
          <h2 className="mt-3 text-mega text-ink text-[clamp(2.4rem,5vw,4rem)]">
            Four principles.<br />
            <span className="text-electric">Zero excuses.</span>
          </h2>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { n: "01", t: "Preparation", d: "Every case gets built like a trial from day one." },
                { n: "02", t: "Respect", d: "Every client deserves plain answers and full attention." },
                { n: "03", t: "Relentlessness", d: "I don't stop when the other side stalls — I press harder." },
                { n: "04", t: "Legacy", d: "The work has to matter beyond the verdict." },
              ].map((v) => (
                <div
                  key={v.n}
                  className="rounded-3xl border border-border bg-white p-7 shadow-[0_20px_50px_-30px_rgba(30,64,175,0.3)]"
                >
                  <div className="font-display font-black text-3xl text-electric">{v.n}</div>
                  <div className="mt-3 font-display font-black text-xl text-ink">{v.t}</div>
                  <p className="mt-2 text-muted-foreground">{v.d}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="photo-pop aspect-[3/4] translate-y-6">
                <img src={photos.grayLean} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="photo-pop aspect-[3/4]">
                <img src={photos.grayLaugh} alt="" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="mx-auto max-w-5xl px-5 lg:px-10 py-24 text-center">
        <Quote className="h-12 w-12 mx-auto text-electric" />
        <blockquote className="mt-6 font-display font-black text-ink text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] tracking-tight">
          "The people who need a great lawyer the most usually think they can't afford
          one. My whole career is about proving them wrong."
        </blockquote>
        <div className="mt-6 text-sm uppercase tracking-[0.28em] text-muted-foreground">
          — Brandon Price-Crum, Esq.
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 pb-12">
        <div className="relative overflow-hidden rounded-[2rem] gradient-brand p-10 lg:p-16 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.3),transparent_50%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] items-center">
            <div>
              <div className="eyebrow !text-white/80">Ready?</div>
              <h3 className="mt-3 font-display font-black text-4xl lg:text-5xl">
                Let's talk about your case.
              </h3>
              <p className="mt-4 max-w-xl text-white/85">
                Consults are free, honest, and confidential. If I can't help, I'll point you to
                someone who can.
              </p>
            </div>
            <Link to="/contact" className="btn-ghost !bg-white !text-ink hover:!text-electric justify-self-start lg:justify-self-end">
              Book Consult <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
