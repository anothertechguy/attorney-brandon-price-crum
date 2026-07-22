import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { photos } from "@/lib/photos";
import { SiteFooter, SiteNav } from "@/components/site-nav";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Brandon Price-Crum — Book a Free Consult" },
      {
        name: "description",
        content:
          "Schedule a free, confidential consultation with attorney Brandon Price-Crum of Serious Injury Law Group.",
      },
      { property: "og:title", content: "Contact Brandon Price-Crum" },
      {
        property: "og:description",
        content: "Book a free, confidential consult with trial attorney Brandon Price-Crum.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="relative pt-32 lg:pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-tint to-background" />
        <div className="absolute -top-20 -left-32 h-[500px] w-[500px] rounded-full bg-electric/20 blur-[130px] -z-10" />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-electric-soft/50 blur-[110px] -z-10" />

        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid gap-14 lg:grid-cols-[1fr_1.15fr] items-start">
          {/* Left — pitch + info + portrait */}
          <div>
            <div className="eyebrow">Contact Me</div>
            <h1 className="mt-4 text-mega text-ink text-[clamp(3rem,7vw,5.5rem)]">
              Let's win<br />
              <span className="text-electric">this thing.</span>
            </h1>
            <p className="mt-7 max-w-lg text-lg text-muted-foreground leading-relaxed">
              Tell me what happened. Consults are free, honest, and confidential — and
              you'll hear back from a real human on my team within one business day.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { icon: Phone, label: "Phone", value: "Call Serious Injury Law Group" },
                { icon: Mail, label: "Email", value: "hello@brandonpricecrum.com" },
                { icon: MapPin, label: "Office", value: "Birmingham, Alabama" },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-white p-4"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                      {label}
                    </div>
                    <div className="mt-1 font-display font-black text-ink">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 relative max-w-xs">
              <div className="absolute -inset-6 gradient-halo blur-2xl opacity-70 -z-10" />
              <div className="photo-pop aspect-[3/4]">
                <img
                  src={photos.grayLean}
                  alt="Brandon Price-Crum portrait"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 mix-blend-overlay" />
              </div>
            </div>
          </div>

          {/* Right — form card */}
          <div className="relative">
            <div className="absolute -inset-4 gradient-brand opacity-15 blur-3xl rounded-[2.5rem] -z-10" />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="relative rounded-[2rem] bg-white border border-border p-8 lg:p-10 shadow-[0_40px_100px_-40px_rgba(30,64,175,0.45)]"
            >
              <div className="eyebrow">Book a Consult</div>
              <h2 className="mt-3 font-display font-black text-3xl lg:text-4xl text-ink leading-tight">
                Tell me what happened.
              </h2>

              {sent ? (
                <div className="mt-10 rounded-2xl bg-sky-tint border border-electric/30 p-8 text-center">
                  <div className="font-display font-black text-2xl text-ink">
                    Thank you — I've got it.
                  </div>
                  <p className="mt-3 text-muted-foreground">
                    Someone from my team will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <div className="mt-8 grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="First Name" name="first" required />
                    <Field label="Last Name" name="last" required />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone" name="phone" type="tel" />
                  </div>
                  <Field label="Case Type" name="case" placeholder="Car accident, injury, insurance..." />
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.22em] font-bold text-ink">
                      What happened?
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-base text-ink placeholder:text-muted-foreground/60 focus:border-electric focus:ring-4 focus:ring-electric/15 outline-none transition"
                      placeholder="Share as much or as little as you like."
                    />
                  </div>
                  <button type="submit" className="btn-primary justify-center mt-2">
                    Send it <ArrowUpRight className="h-4 w-4" />
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    Submitting this form does not create an attorney-client relationship.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.22em] font-bold text-ink">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-base text-ink placeholder:text-muted-foreground/60 focus:border-electric focus:ring-4 focus:ring-electric/15 outline-none transition"
      />
    </div>
  );
}
