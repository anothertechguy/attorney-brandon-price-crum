import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Photo } from "@/components/photo";
import { canonical } from "@/lib/urls";
import { Container, PullQuote, Section, SectionHead } from "@/components/primitives";
import {
  barAdmissions,
  bio,
  credentials,
  education,
  endorsement,
  legacy,
  memberships,
  quotes,
  site,
  values,
} from "@/content/site";

const title = `About ${site.formalName} — Trial Attorney`;
const description =
  "Alabama State University and FAMU College of Law. Trial attorney with Serious Injury Law Group, adjunct instructor, and community advocate licensed in Alabama and Georgia.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonical("/about") },
      { property: "og:image", content: canonical("/photos/gray-leaning-1080.jpg") },
    ],
    links: [{ rel: "canonical", href: canonical("/about") }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <AboutHero />
      <Biography />
      <ValueSet />
      <Legacy />
      <Endorsement />
      <CredentialTable />
      <AboutCta />
    </>
  );
}

function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-24">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[65%] bg-gradient-to-b from-slate-6/60 to-background"
      />
      <Container>
        <div className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="animate-rise">
            <p className="eyebrow">About</p>
            <h1 className="display mt-6 text-[clamp(2.25rem,5vw,3.75rem)] text-ink">
              The law as <em className="text-brand not-italic">a calling.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">{bio.lede}</p>

            <div className="mt-10 flex flex-wrap gap-2">
              {barAdmissions.map((state) => (
                <span
                  key={state}
                  className="label-xs rounded-full border border-slate-5 px-3.5 py-2 text-slate-1"
                >
                  Licensed in {state}
                </span>
              ))}
              <span className="label-xs rounded-full border border-slate-5 px-3.5 py-2 text-slate-1">
                Adjunct Instructor, ASU
              </span>
            </div>
          </div>

          <div className="photo-stage lg:ml-auto lg:max-w-sm">
            <div className="frame aspect-[3/4]">
              <Photo
                id="gray-leaning"
                priority
                sizes="(min-width: 1024px) 34vw, 100vw"
                position="50% 18%"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Biography() {
  return (
    <Section>
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHead
              eyebrow="Background"
              title={
                <>
                  From Butler County
                  <br /> to the courtroom.
                </>
              }
            />
            <div className="frame mt-10 hidden aspect-[4/5] max-w-xs lg:block">
              <Photo id="gray-seated" sizes="30vw" />
            </div>
          </div>

          <div>
            <div className="space-y-6 text-lg leading-relaxed text-muted">
              {bio.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>

            <PullQuote quote={quotes.calling} className="mt-14" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ValueSet() {
  return (
    <Section tone="tint" className="border-y border-line">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <div>
            <SectionHead
              eyebrow="What he stands on"
              title="Four commitments"
              lede="In his own words, from a 2026 interview with The Recap Report."
            />

            <div className="mt-14 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.n} className="bg-paper p-8">
                  <span className="display text-3xl text-brand">{v.n}</span>
                  <h3 className="display mt-4 text-2xl text-ink">{v.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{v.body}</p>
                </div>
              ))}
            </div>

            <PullQuote quote={quotes.leadership} className="mt-14" />
          </div>

          <div className="grid grid-cols-2 gap-5 lg:grid-cols-1">
            <div className="frame aspect-[3/4]">
              <Photo id="gray-chin" sizes="(min-width: 1024px) 30vw, 45vw" position="50% 15%" />
            </div>
            <div className="frame aspect-[3/4] lg:hidden">
              <Photo id="gray-seated" sizes="45vw" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/**
 * The mentorship thread. It belongs on a personal brand site more than a firm
 * one — it is the part of his story that is about the profession rather than
 * any single matter.
 */
function Legacy() {
  return (
    <Section>
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHead eyebrow={legacy.eyebrow} title={legacy.title} lede={legacy.lede} />

            <ul className="mt-12 space-y-5">
              {legacy.points.map((point) => (
                <li key={point} className="flex gap-4 border-t border-line pt-5">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span className="text-[0.9375rem] leading-relaxed text-muted">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pt-4">
            <PullQuote quote={quotes.nextGeneration} />
            <PullQuote quote={quotes.inTheRoom} className="mt-12" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Endorsement() {
  return (
    <Section tone="ink" className="py-24 lg:py-28">
      <Container>
        <figure className="mx-auto max-w-4xl text-center">
          <blockquote className="quote text-[clamp(1.375rem,2.6vw,2.125rem)] text-white">
            &ldquo;{endorsement.text}&rdquo;
          </blockquote>
          <figcaption className="mt-8">
            <span className="label-xs text-brand-bright">{endorsement.attribution}</span>
            <span className="label-xs mt-2 block text-white/40">{endorsement.title}</span>
          </figcaption>
        </figure>
      </Container>
    </Section>
  );
}

function CredentialTable() {
  const groups = [
    {
      heading: "Education",
      rows: education.map((e) => ({ k: e.school, v: `${e.degree} · ${e.detail}` })),
    },
    {
      heading: "Recognition",
      rows: credentials.map((c) => ({ k: c.title, v: `${c.issuer} · ${c.detail}` })),
    },
    {
      heading: "Memberships",
      rows: memberships.map((m) => ({ k: m, v: "" })),
    },
    {
      heading: "Bar admissions",
      rows: barAdmissions.map((b) => ({ k: b, v: "" })),
    },
  ];

  return (
    <Section>
      <Container>
        <SectionHead eyebrow="Credentials" title="On the record" />

        <div className="mt-14 space-y-14">
          {groups.map((group) => (
            <div
              key={group.heading}
              className="grid gap-6 border-t border-line pt-8 lg:grid-cols-[16rem_1fr]"
            >
              <h3 className="label-xs pt-1 text-brand-deep">{group.heading}</h3>
              <dl className="space-y-5">
                {group.rows.map((row) => (
                  <div key={row.k} className="border-b border-line pb-5 last:border-0 last:pb-0">
                    <dt className="display text-xl text-ink">{row.k}</dt>
                    {row.v && <dd className="mt-1.5 text-sm text-muted">{row.v}</dd>}
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-3xl text-xs leading-relaxed text-slate-3">
          Awards and recognitions are conferred by the organizations named. Selection criteria vary
          by organization and are available on request. No representation is made that the quality
          of legal services to be performed is greater than the quality of legal services performed
          by other lawyers.
        </p>
      </Container>
    </Section>
  );
}

function AboutCta() {
  return (
    <Section tone="paper" className="border-t border-line">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-10">
          <SectionHead
            eyebrow="Next"
            title="Have a case you want looked at?"
            lede="Consultations are free and confidential."
          />
          <Link to="/contact" className="btn btn-brand">
            Request a consultation
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
