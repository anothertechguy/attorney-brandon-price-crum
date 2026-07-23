# Brandon Price-Crum — personal brand site

Marketing site for Brandon Price-Crum, Esq., trial attorney with Serious Injury
Law Group.

Built with TanStack Start (React 19), Tailwind CSS v4, and TypeScript. Every
page is prerendered to static HTML at build time; only the contact form needs a
running server.

## Getting started

```bash
npm install
npm run dev
```

| Script              | What it does                                                  |
| ------------------- | ------------------------------------------------------------- |
| `npm run dev`       | Dev server on <http://localhost:5173>                         |
| `npm run build`     | Production build, prerenders all routes, writes `sitemap.xml` |
| `npm run start`     | Serves the production build                                   |
| `npm run photos`    | Regenerates optimized images + the photo manifest             |
| `npm run typecheck` | `tsc --noEmit`                                                |
| `npm run lint`      | ESLint                                                        |
| `npm run format`    | Prettier                                                      |

## How the site is organized

```
assets/photos/        Source photography (originals — never served directly)
public/photos/        Generated AVIF/WebP/JPEG derivatives (git-ignored, built)
scripts/build-photos  Image pipeline + manifest generator
src/content/site.ts   Every word on the site, with sourcing rules
src/components/       Chrome, primitives, and the Photo component
src/routes/           One file per page (TanStack file-based routing)
src/styles.css        Design tokens and utilities
```

### Content

**All copy lives in `src/content/site.ts`.** Routes import from it; they don't
hardcode prose. Before adding a claim, read [CONTENT-SOURCES.md](CONTENT-SOURCES.md)
— it records where each fact came from, what was removed from the previous build
as unverifiable, and what still needs the client's confirmation.

This matters more than usual here: the site is legal advertising, and claims
about results, experience, or credentials are regulated.

### Photography

Source images live in `assets/photos/` and are never served. `npm run photos`
resizes each one to a 480/768/1080/1440 ladder in AVIF, WebP, and JPEG, extracts
a blurred inline placeholder, and writes `src/lib/photos.ts` with dimensions and
a face-safe `object-position` for every frame.

To add or replace a photo: drop the JPEG in `assets/photos/`, add a matching
entry to `META` in `scripts/build-photos.mjs` (alt text + object position), then
run `npm run photos`.

The `<Photo>` component handles format negotiation, lazy loading, and reserving
layout space. Pass `priority` for anything above the fold.

### Design system

Tokens are defined in `src/styles.css` under `@theme`. The palette is derived
from Serious Injury Law Group's own brand blue (`#0096D6`) plus a slate-navy
ramp, so this site and the firm's read as one family. Type is Instrument Serif
for display, Inter for everything else.

Each page leans on a different suit color from the shoot — royal blue on the
home page, gray on About, navy on Media and Contact.

## Contact form

The form posts to a server function in `src/lib/contact.ts`. It validates on
both sides, has a honeypot field, and **requires `CONTACT_WEBHOOK_URL` to
actually deliver anything**:

```bash
CONTACT_WEBHOOK_URL="https://formspree.io/f/xxxxxxx"
```

Any endpoint accepting a JSON POST works — Formspree, a Zapier catch hook, a CRM
webhook, or a small Resend/Postmark function.

Until that variable is set, submissions are logged server-side and the visitor
is shown the phone number and email instead. That is deliberate: the previous
build displayed a success message and silently discarded every lead.

## Deployment

`npm run build` emits static HTML for all five routes into `dist/client/`, plus
a server bundle in `dist/server/` for the contact endpoint. Host it anywhere
that runs Node, or on a CDN with the server function deployed alongside.

Remember to set `CONTACT_WEBHOOK_URL` in the production environment.
