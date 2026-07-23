import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Photo } from "@/components/photo";
import { canonical } from "@/lib/urls";
import { Container, PullQuote, Section, SectionHead } from "@/components/primitives";
import { accessPoints, contact, practiceAreas, quotes, site } from "@/content/site";

const title = `Practice Areas — ${site.formalName}`;
const description =
  "Personal injury, wrongful death, medical malpractice, premises liability, products liability, and civil rights matters handled through Serious Injury Law Group in Alabama and Georgia.";

export const Route = createFileRoute("/practice")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonical("/practice") },
      { property: "og:image", content: canonical("/photos/desk-seated-1080.jpg") },
    ],
    links: [{ rel: "canonical", href: canonical("/practice") }],
  }),
  component: PracticePage,
});

/**
 * Describes process, not outcomes. Nothing here promises a result, a timeline,
 * or a figure — those are the claims most likely to run afoul of state bar
 * advertising rules, and none of them are documented anywhere anyway.
 */
const steps = [
  {
    n: "01",
    title: "The first conversation",
    body: "A free, confidential call about what happened. You'll get a straight read on whether there's a claim worth pursuing — including when the honest answer is no.",
  },
  {
    n: "02",
    title: "Investigation",
    body: "Records, scene evidence, witnesses, and the experts a case needs. Most of what determines a result is gathered long before anyone talks about settlement.",
  },
  {
    n: "03",
    title: "Building the file",
    body: "Every case is assembled as though it will be tried. The other side negotiates differently with a file that is finished than with one still being written.",
  },
  {
    n: "04",
    title: "Resolution",
    body: "Settlement or trial, decided on the facts and on what you want — with the tradeoffs explained in plain language before you choose.",
  },
];

function PracticePage() {
  return (
    <>
      <PracticeHero />
      <AreaList />
      <Process />
      <FeeNote />
      <PracticeCta />
    </>
  );
}

function PracticeHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-24">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[65%] bg-gradient-to-b from-tint-2 to-background"
      />
      <Container>
        <div className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="animate-rise">
            <p className="eyebrow">Practice</p>
            <h1 className="display mt-6 text-[clamp(2.25rem,5vw,3.75rem)] text-ink">
              The cases he <em className="text-brand not-italic">takes on.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
              Matters handled through {site.firm}, which maintains offices in Montgomery and
              Birmingham, Alabama, and in Atlanta and Thomasville, Georgia.
            </p>
          </div>

          <div className="frame aspect-[3/2] lg:ml-auto">
            <Photo id="desk-seated" priority sizes="(min-width: 1024px) 38vw, 100vw" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function AreaList() {
  return (
    <Section>
      <Container>
        <div className="space-y-0 border-t border-line">
          {practiceAreas.map((area, i) => (
            <div
              key={area.id}
              className="group grid gap-4 border-b border-line py-10 lg:grid-cols-[5rem_1fr_1.1fr] lg:gap-10"
            >
              <span className="label-xs pt-2 text-slate-4">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="display text-[clamp(1.5rem,2.6vw,2.125rem)] text-ink transition-colors group-hover:text-brand">
                {area.title}
              </h2>
              <p className="text-lg leading-relaxed text-muted lg:pt-2">{area.blurb}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Process() {
  return (
    <Section tone="ink">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHead
              eyebrow="How a case moves"
              tone="light"
              title="What to expect"
              lede="No two matters are alike, but the shape of the work is consistent."
            />
            <PullQuote quote={quotes.commitment} tone="light" className="mt-12" />
          </div>

          <ol className="space-y-px overflow-hidden rounded-card">
            {steps.map((step) => (
              <li key={step.n} className="bg-white/[0.04] p-8 lg:p-10">
                <span className="label-xs text-brand-bright">{step.n}</span>
                <h3 className="display mt-4 text-2xl text-white">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-white/60">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}

function FeeNote() {
  return (
    <Section tone="tint" className="border-y border-line">
      <Container>
        <SectionHead
          eyebrow="Fees & access"
          title="What it costs to be heard."
          lede="The practical barriers matter as much as the legal ones. These are the things that decide whether someone can bring a claim at all."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-card border border-line bg-line lg:grid-cols-3">
          {accessPoints.map((point) => (
            <div key={point.title} className="bg-paper p-8">
              <h3 className="display text-2xl leading-tight text-ink">{point.title}</h3>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">{point.body}</p>
            </div>
          ))}
        </div>

        <PullQuote quote={quotes.notChasing} className="mt-16 max-w-3xl" />

        <p className="mt-12 max-w-3xl text-xs leading-relaxed text-slate-3">
          Contingency arrangements are set out in a written fee agreement. A client may still be
          responsible for case expenses and court costs; those terms are explained in writing before
          any representation begins.
        </p>
      </Container>
    </Section>
  );
}

function PracticeCta() {
  return (
    <Section tone="paper">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-10">
          <SectionHead
            eyebrow="Talk it through"
            title="Not sure whether you have a case?"
            lede="That is exactly what the first conversation is for."
          />
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn btn-brand">
              Request a consultation
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a href={contact.phoneHref} className="btn btn-outline">
              {contact.phone}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
