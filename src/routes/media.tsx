import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Mic } from "lucide-react";

import { Photo } from "@/components/photo";
import { canonical } from "@/lib/urls";
import { Container, PullQuote, Section, SectionHead } from "@/components/primitives";
import { contact, mediaFeatures, pressOutlets, quotes, site, socials } from "@/content/site";

const title = `Media & Press — ${site.formalName}`;
const description =
  "Interviews, television coverage, and press featuring trial attorney Brandon Price-Crum, including WSFA 12 News and The Recap Report.";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonical("/media") },
      { property: "og:image", content: canonical("/photos/navy-seated-smiling-1080.jpg") },
    ],
    links: [{ rel: "canonical", href: canonical("/media") }],
  }),
  component: MediaPage,
});

function MediaPage() {
  return (
    <>
      <MediaHero />
      <OutletWall />
      <Coverage />
      <PressKit />
    </>
  );
}

function MediaHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-24">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[65%] bg-gradient-to-b from-tint-2 to-background"
      />
      <Container>
        <div className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="animate-rise">
            <p className="eyebrow">Media &amp; press</p>
            <h1 className="display mt-6 text-[clamp(2.75rem,7vw,5.25rem)] text-ink">
              On the <em className="italic text-brand">record.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
              Brandon speaks with press on personal injury and civil rights matters, trial practice,
              and access to the courts. For interview requests, reach him directly.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href={contact.emailHref} className="btn btn-primary">
                <Mic className="h-4 w-4" aria-hidden />
                Interview requests
              </a>
              <a href={contact.phoneHref} className="btn btn-outline">
                {contact.phone}
              </a>
            </div>
          </div>

          <div className="frame aspect-[3/4] lg:ml-auto lg:max-w-sm">
            <Photo id="navy-headshot" priority sizes="(min-width: 1024px) 34vw, 100vw" />
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * Wordmarks, not logos. No station or publication artwork was provided, and a
 * broadcaster's mark shouldn't be reproduced without permission — drop licensed
 * SVGs in here when they're cleared.
 */
function OutletWall() {
  return (
    <Section className="border-y border-line py-20 lg:py-24" tone="paper">
      <Container>
        <p className="eyebrow text-center">Featured by</p>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {pressOutlets.map((outlet) => (
            <li
              key={outlet.name}
              className="flex min-h-[7.5rem] flex-col items-center justify-center bg-paper px-5 py-8 text-center"
            >
              <span className="display text-xl leading-tight text-ink">{outlet.name}</span>
              <span className="label-xs mt-2 text-slate-3">{outlet.note}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

function Coverage() {
  return (
    <Section>
      <Container>
        <SectionHead
          eyebrow="Selected coverage"
          title="Interviews &amp; appearances"
          lede="Every item below links to the original publication."
        />

        <div className="mt-16 space-y-16">
          {mediaFeatures.map((item, i) => (
            <article
              key={item.title}
              className={`group grid gap-8 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>a]:order-2" : ""
              }`}
            >
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${item.title} — ${item.outlet}`}
                className="frame block aspect-[4/3]"
              >
                <Photo
                  id={item.photo}
                  alt=""
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  imgClassName="transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
              </a>

              <div className="flex flex-col justify-center">
                <p className="label-xs text-brand-deep">
                  {item.kind}
                  <span className="mx-2 text-slate-4">/</span>
                  <span className="text-slate-2">{item.date}</span>
                </p>
                <h3 className="display mt-4 text-[clamp(1.75rem,3vw,2.5rem)] leading-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-5 text-lg leading-relaxed text-muted">{item.dek}</p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand"
                >
                  Read at {item.outlet}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>

        <PullQuote quote={quotes.worstDay} className="mt-24 max-w-4xl" />
      </Container>
    </Section>
  );
}

function PressKit() {
  return (
    <Section tone="ink">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <div>
            <SectionHead
              eyebrow="For producers &amp; editors"
              tone="light"
              title="Booking &amp; press kit"
              lede="Available for commentary on personal injury and civil rights litigation, trial practice, and access to the legal system."
            />

            <dl className="mt-12 grid gap-px overflow-hidden rounded-card sm:grid-cols-2">
              <div className="bg-white/[0.04] p-7">
                <dt className="label-xs text-white/40">Direct email</dt>
                <dd className="mt-3">
                  <a
                    href={contact.emailHref}
                    className="break-all text-lg text-white transition-colors hover:text-brand-bright"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div className="bg-white/[0.04] p-7">
                <dt className="label-xs text-white/40">Direct line</dt>
                <dd className="mt-3">
                  <a
                    href={contact.phoneHref}
                    className="text-lg text-white transition-colors hover:text-brand-bright"
                  >
                    {contact.phone}
                  </a>
                </dd>
              </div>
              <div className="bg-white/[0.04] p-7">
                <dt className="label-xs text-white/40">Title</dt>
                <dd className="mt-3 text-lg text-white">Trial Attorney, {site.firm}</dd>
              </div>
              <div className="bg-white/[0.04] p-7">
                <dt className="label-xs text-white/40">Based in</dt>
                <dd className="mt-3 text-lg text-white">Alabama &amp; Georgia</dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="label-xs text-white/45 transition-colors hover:text-brand-bright"
                >
                  {s.label} <span className="text-white/25">{s.handle}</span>
                </a>
              ))}
            </div>

            <Link to="/contact" className="btn btn-on-dark mt-12">
              Send a request
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="frame aspect-[3/4] lg:ml-auto lg:max-w-sm">
            <Photo id="navy-seated-serious" sizes="(min-width: 1024px) 32vw, 100vw" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
