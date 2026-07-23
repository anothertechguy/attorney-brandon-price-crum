import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Award } from "lucide-react";

import { Photo } from "@/components/photo";
import { canonical } from "@/lib/urls";
import { Container, PullQuote, Section, SectionHead } from "@/components/primitives";
import {
  contact,
  credentials,
  factStrip,
  mediaFeatures,
  practiceAreas,
  pressOutlets,
  quotes,
  site,
} from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.formalName} — Trial Attorney | Alabama & Georgia` },
      { name: "description", content: site.description },
      { property: "og:title", content: `${site.formalName} — Trial Attorney` },
      { property: "og:description", content: site.description },
      { property: "og:url", content: canonical("/") },
    ],
    links: [{ rel: "canonical", href: canonical("/") }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <CredentialMarquee />
      <Introduction />
      <Thesis />
      <PracticeGrid />
      <PressBar />
      <FeaturedMedia />
      <ClosingCta />
    </>
  );
}

/**
 * The portrait is displayed in its native 2:3 crop rather than being forced
 * into a square, and the Top 40 Under 40 credential sits in its own card
 * beneath the frame — the previous build floated it over the photo, which
 * covered both his face and the awards on the desk behind him.
 */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[70%] bg-gradient-to-b from-tint-2 via-tint-1 to-background"
      />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div className="animate-rise">
            <p className="eyebrow">
              {site.firmShort} <span className="mx-2 text-slate-4">/</span> Alabama &amp; Georgia
            </p>

            <h1 className="display mt-6 max-w-[15ch] text-[clamp(2.25rem,5vw,3.75rem)] text-ink">
              Standing in the gap between a wrong and{" "}
              <em className="text-brand not-italic">a remedy.</em>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              Brandon Price-Crum is a trial attorney representing people and families in personal
              injury, wrongful death, and civil rights matters — the cases where someone is up
              against an institution with far more resources than they have.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn btn-primary">
                Request a consultation
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link to="/about" className="btn btn-outline">
                About Brandon
              </Link>
            </div>

            <dl className="mt-14 grid max-w-xl grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-4">
              {factStrip.map((f) => (
                <div key={f.v} className="border-t border-slate-5 pt-4">
                  <dt className="display text-2xl text-ink">{f.k}</dt>
                  <dd className="label-xs mt-2 text-slate-2">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Portrait column — image at native ratio, credential card below it. */}
          <div className="lg:pl-6">
            <div className="frame aspect-[2/3] w-full">
              <Photo
                id="blue-standing"
                priority
                sizes="(min-width: 1024px) 44vw, 100vw"
                position="50% 20%"
              />
            </div>

            <div className="card mt-4 flex items-center gap-4 p-5">
              <span
                aria-hidden
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand text-white"
              >
                <Award className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="display text-xl leading-none text-ink">Top 40 Under 40</p>
                <p className="label-xs mt-2 text-slate-2">The National Black Lawyers</p>
              </div>
              <span className="label-xs ml-auto hidden shrink-0 text-slate-3 sm:block">
                Rising Stars
                <br />
                2022&ndash;2026
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CredentialMarquee() {
  const items = [...credentials, ...credentials];

  return (
    <div className="overflow-hidden border-y border-line bg-paper py-5">
      <div className="flex w-max animate-marquee">
        {items.map((c, i) => (
          <div key={i} className="flex items-center gap-6 px-8">
            <span className="label-xs whitespace-nowrap text-slate-1">
              {c.title}
              <span className="mx-2 text-slate-4">/</span>
              <span className="text-slate-3">{c.issuer}</span>
            </span>
            <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-brand" />
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Uses the landscape office photograph in a landscape slot. The old build
 * squeezed this same frame into a 4:5 portrait box, which cropped the awards
 * on the desk clean out of shot.
 */
function Introduction() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="frame aspect-[3/2]">
            <Photo id="desk-standing" sizes="(min-width: 1024px) 46vw, 100vw" />
          </div>

          <div>
            <SectionHead
              eyebrow="The approach"
              title={
                <>
                  Prepared early.
                  <br />
                  Explained plainly.
                </>
              }
              lede="Most people meet a personal injury lawyer once, on the worst week of their life. That is the standard the work is held to — a case built carefully from the start, and a client who always knows exactly where it stands."
            />

            <PullQuote quote={quotes.heard} className="mt-12" />

            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand"
            >
              Read his story
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/**
 * The line the site's headline is drawn from, shown in full and attributed.
 * Quiet on purpose — it is the one place the page simply states what he does.
 */
function Thesis() {
  return (
    <Section tone="paper" className="border-y border-line py-20 lg:py-28">
      <Container>
        <figure className="mx-auto max-w-4xl text-center">
          <blockquote className="quote text-[clamp(1.25rem,2.4vw,1.9rem)] text-ink">
            &ldquo;{quotes.gap.text}&rdquo;
          </blockquote>
          <figcaption className="label-xs mt-8 text-slate-2">
            Brandon Price-Crum
            <span className="mx-2 opacity-40">/</span>
            {quotes.gap.source}, {quotes.gap.year}
          </figcaption>
        </figure>
      </Container>
    </Section>
  );
}

function PracticeGrid() {
  return (
    <Section tone="tint" className="border-y border-line">
      <Container>
        <SectionHead
          eyebrow="Practice"
          title="Where he can help"
          lede="Matters handled through Serious Injury Law Group across Alabama and Georgia."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <div key={area.id} className="group bg-paper p-8 transition-colors hover:bg-tint-1">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="display text-2xl text-ink">{area.title}</h3>
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-5 transition-colors group-hover:bg-brand"
                />
              </div>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">{area.blurb}</p>
            </div>
          ))}
        </div>

        <Link
          to="/practice"
          className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand"
        >
          More on how a case works
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </Container>
    </Section>
  );
}

/**
 * Outlets are set as wordmarks rather than logos: no broadcaster artwork was
 * supplied, and reproducing a station's mark without a licence is its own
 * problem. Swap in real SVGs here once permission is on file.
 */
function PressBar() {
  return (
    <Section className="py-20 lg:py-24">
      <Container>
        <p className="eyebrow text-center">As featured in</p>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {pressOutlets.map((outlet) => (
            <li key={outlet.name} className="text-center">
              <span className="display text-base text-slate-1 lg:text-lg">{outlet.name}</span>
              <span className="label-xs mt-1 block text-slate-4">{outlet.note}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

function FeaturedMedia() {
  return (
    <Section tone="ink">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            eyebrow="In the press"
            tone="light"
            title="On the record"
            lede="Selected coverage and interviews."
          />
          <Link to="/media" className="btn btn-on-dark">
            All media
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {mediaFeatures.map((item) => (
            <article key={item.title} className="group">
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="block overflow-hidden rounded-card"
              >
                <div className="aspect-[16/10] overflow-hidden bg-white/5">
                  <Photo
                    id={item.photo}
                    alt=""
                    sizes="(min-width: 768px) 45vw, 100vw"
                    imgClassName="transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                </div>
                <div className="pt-6">
                  <p className="label-xs text-brand-bright">
                    {item.outlet}
                    <span className="mx-2 text-white/25">/</span>
                    <span className="text-white/45">{item.date}</span>
                  </p>
                  <h3 className="display mt-3 text-2xl leading-tight text-white transition-colors group-hover:text-brand-bright">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{item.dek}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ClosingCta() {
  return (
    <Section tone="paper" className="border-t border-line">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <div>
            <SectionHead
              eyebrow="Talk to Brandon"
              title="Tell him what happened."
              lede="Consultations are free and confidential. If it isn't a matter he can take, he'll say so directly and point you somewhere that can help."
            />
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn btn-brand">
                Request a consultation
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a href={contact.phoneHref} className="btn btn-outline">
                {contact.phone}
              </a>
            </div>
          </div>

          <div className="frame aspect-[4/5] lg:ml-auto lg:max-w-md">
            <Photo id="desk-seated" sizes="(min-width: 1024px) 38vw, 100vw" position="50% 35%" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
