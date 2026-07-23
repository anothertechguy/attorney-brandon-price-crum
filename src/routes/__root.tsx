import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts,
  useRouter,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { barAdmissions, contact, credentials, site, socials } from "@/content/site";
import { asset, canonical } from "@/lib/urls";
import { useReveal } from "@/lib/use-reveal";
import appCss from "@/styles.css?url";

const ogImage = canonical("/photos/navy-headshot-1080.jpg");

/**
 * Structured data so search engines and AI summarizers describe him accurately
 * rather than guessing. Mirrors src/content/site.ts — update both together.
 */
const attorneyJsonLd = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: site.formalName,
  alternateName: site.moniker,
  description: site.description,
  url: canonical("/"),
  telephone: contact.phone,
  email: contact.email,
  image: ogImage,
  jobTitle: "Trial Attorney",
  worksFor: { "@type": "LegalService", name: site.firm, url: "https://www.seriouslawyers.com/" },
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.office.street,
    addressLocality: contact.office.city,
    addressRegion: contact.office.state,
    postalCode: contact.office.zip,
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "State", name: "Alabama" },
    { "@type": "State", name: "Georgia" },
  ],
  knowsAbout: [
    "Personal injury law",
    "Wrongful death",
    "Medical malpractice",
    "Premises liability",
    "Products liability",
    "Civil rights law",
  ],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Florida A&M University College of Law" },
    { "@type": "CollegeOrUniversity", name: "Alabama State University" },
  ],
  award: credentials.map((c) => `${c.title} — ${c.issuer}`),
  hasCredential: barAdmissions.map((state) => ({
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Bar admission",
    recognizedBy: { "@type": "Organization", name: `State Bar of ${state}` },
  })),
  sameAs: socials.map((s) => s.href),
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: site.formalName },
      { name: "theme-color", content: "#1a5fe5" },
      { property: "og:site_name", content: site.formalName },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: ogImage },
      { property: "og:image:alt", content: `Portrait of ${site.formalName}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@attorneybpc" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: asset("/favicon.ico"), type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap",
      },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(attorneyJsonLd) }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: ErrorScreen,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  useReveal();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}

/** Shared shell for the 404 and error states so both stay on-brand. */
function MessageScreen({
  eyebrow,
  title,
  body,
  children,
}: {
  eyebrow: string;
  title: string;
  body: string;
  children?: ReactNode;
}) {
  return (
    <div className="grid min-h-[70vh] place-items-center px-6 py-32">
      <div className="max-w-lg text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display mt-4 text-5xl text-ink sm:text-6xl">{title}</h1>
        <p className="mt-5 leading-relaxed text-muted">{body}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">{children}</div>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <MessageScreen
      eyebrow="404"
      title="This page moved on."
      body="The page you're looking for doesn't exist, or it has been renamed. Everything else is still where you left it."
    >
      <Link to="/" className="btn btn-primary">
        Back home
      </Link>
      <Link to="/contact" className="btn btn-outline">
        Contact Brandon
      </Link>
    </MessageScreen>
  );
}

function ErrorScreen({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  console.error(error);

  return (
    <MessageScreen
      eyebrow="Something went wrong"
      title="This page didn't load."
      body="That's on us, not you. Try again — and if it keeps happening, a phone call still works."
    >
      <button
        type="button"
        onClick={() => {
          router.invalidate();
          reset();
        }}
        className="btn btn-primary"
      >
        Try again
      </button>
      <a href={contact.phoneHref} className="btn btn-outline">
        Call {contact.phone}
      </a>
    </MessageScreen>
  );
}
