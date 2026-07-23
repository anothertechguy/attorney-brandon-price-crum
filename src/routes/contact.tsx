import { createFileRoute } from "@tanstack/react-router";
import { useId, useState } from "react";
import { AlertCircle, ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";

import { Photo } from "@/components/photo";
import { canonical } from "@/lib/urls";
import { Container, Section, SectionHead } from "@/components/primitives";
import { FIELD_ORDER, submitInquiry, validateInquiry, type InquiryErrors } from "@/lib/contact";
import { contact, site, socials } from "@/content/site";
import { cn } from "@/lib/utils";

const title = `Contact ${site.formalName} — Free Consultation`;
const description =
  "Request a free, confidential consultation with trial attorney Brandon Price-Crum of Serious Injury Law Group, serving Alabama and Georgia.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonical("/contact") },
      { property: "og:image", content: canonical("/photos/navy-seated-smiling-1080.jpg") },
    ],
    links: [{ rel: "canonical", href: canonical("/contact") }],
  }),
  component: ContactPage,
});

type Status =
  { kind: "idle" } | { kind: "submitting" } | { kind: "sent" } | { kind: "error"; message: string };

function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-28">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 -z-10 h-[60%] bg-gradient-to-b from-tint-2 to-background"
        />
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="animate-rise">
              <p className="eyebrow">Contact</p>
              <h1 className="display mt-6 text-[clamp(2.75rem,6.5vw,4.5rem)] text-ink">
                Tell him what <em className="italic text-brand">happened.</em>
              </h1>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted">
                Consultations are free and confidential. Share as much or as little as you like —
                someone will follow up to arrange a proper conversation.
              </p>

              <ul className="mt-12 space-y-3">
                <ContactRow
                  icon={Phone}
                  label="Direct"
                  value={contact.phone}
                  href={contact.phoneHref}
                />
                <ContactRow
                  icon={Mail}
                  label="Email"
                  value={contact.email}
                  href={contact.emailHref}
                />
                <ContactRow
                  icon={MapPin}
                  label="Office"
                  value={`${contact.office.street}, ${contact.office.city}, ${contact.office.state} ${contact.office.zip}`}
                />
              </ul>

              <p className="label-xs mt-10 text-slate-3">Also serving</p>
              <p className="mt-3 text-sm text-muted">{contact.cities.join(" · ")}</p>

              <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="label-xs text-slate-2 transition-colors hover:text-brand"
                  >
                    {s.label}
                  </a>
                ))}
              </div>

              <div className="frame mt-14 hidden aspect-[4/5] max-w-xs lg:block">
                <Photo id="navy-seated-smiling" sizes="30vw" />
              </div>
            </div>

            <InquiryForm />
          </div>
        </Container>
      </section>

      <Section tone="tint" className="border-t border-line py-16 lg:py-20">
        <Container>
          <p className="mx-auto max-w-4xl text-center text-sm leading-relaxed text-slate-2">
            Submitting this form does not create an attorney-client relationship, and no such
            relationship exists until a written representation agreement is signed. Please do not
            send confidential or time-sensitive information through this form. If you are facing a
            filing deadline, call {contact.phone} directly.
          </p>
        </Container>
      </Section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span
        aria-hidden
        className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-tint-2 text-brand-deep"
      >
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="label-xs block text-slate-3">{label}</span>
        <span className="mt-1 block text-[0.9375rem] text-ink">{value}</span>
      </span>
    </>
  );

  return (
    <li>
      {href ? (
        <a
          href={href}
          className="card flex items-center gap-4 p-4 transition-colors hover:border-brand"
        >
          {content}
        </a>
      ) : (
        <div className="card flex items-center gap-4 p-4">{content}</div>
      )}
    </li>
  );
}

function InquiryForm() {
  const formId = useId();
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errors, setErrors] = useState<InquiryErrors>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const { data, errors: found } = validateInquiry(
      Object.fromEntries(new FormData(form)) as Record<string, unknown>,
    );

    if (Object.keys(found).length > 0) {
      setErrors(found);
      setStatus({ kind: "idle" });
      // Move focus to the first field that needs attention, in visual order.
      const firstInvalid = FIELD_ORDER.find((name) => found[name]);
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setErrors({});
    setStatus({ kind: "submitting" });

    try {
      const result = await submitInquiry({ data });
      if (result.ok) {
        setStatus({ kind: "sent" });
        form.reset();
      } else {
        setStatus({ kind: "error", message: result.message });
      }
    } catch {
      // Also the path on a static host (GitHub Pages demo), where the server
      // function does not exist — so word it as a routing gap, not a crash.
      setStatus({
        kind: "error",
        message: `This form isn't connected to an inbox on this build. Please call ${contact.phone} or email ${contact.email} and you'll get a reply.`,
      });
    }
  }

  if (status.kind === "sent") {
    return (
      <div className="card flex min-h-[26rem] flex-col items-center justify-center self-start p-10 text-center lg:p-14">
        <span
          aria-hidden
          className="grid h-14 w-14 place-items-center rounded-full bg-brand text-white"
        >
          <Check className="h-6 w-6" />
        </span>
        <h2 className="display mt-8 text-3xl text-ink">Message received.</h2>
        <p className="mt-4 max-w-sm leading-relaxed text-muted">
          Thank you for reaching out. Someone will follow up to arrange a conversation. If it's
          urgent, calling {contact.phone} is the fastest route.
        </p>
        <button
          type="button"
          onClick={() => setStatus({ kind: "idle" })}
          className="btn btn-outline mt-9"
        >
          Send another message
        </button>
      </div>
    );
  }

  const submitting = status.kind === "submitting";

  return (
    <form onSubmit={onSubmit} noValidate className="card self-start p-8 lg:p-12">
      <SectionHead eyebrow="Request a consultation" title="Start here" />

      {status.kind === "error" && (
        <p
          role="alert"
          className="mt-8 flex items-start gap-3 rounded-card border border-brand/30 bg-tint-2 p-4 text-sm leading-relaxed text-brand-ink"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          {status.message}
        </p>
      )}

      <div className="mt-10 grid gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <Field
            id={formId}
            name="firstName"
            label="First name"
            required
            error={errors.firstName}
            autoComplete="given-name"
          />
          <Field
            id={formId}
            name="lastName"
            label="Last name"
            required
            error={errors.lastName}
            autoComplete="family-name"
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field
            id={formId}
            name="email"
            label="Email"
            type="email"
            required
            error={errors.email}
            autoComplete="email"
          />
          <Field
            id={formId}
            name="phone"
            label="Phone"
            type="tel"
            error={errors.phone}
            autoComplete="tel"
          />
        </div>
        <Field
          id={formId}
          name="matter"
          label="Type of matter"
          placeholder="Car accident, wrongful death, civil rights…"
          error={errors.matter}
        />
        <Field
          id={formId}
          name="message"
          label="What happened?"
          as="textarea"
          required
          error={errors.message}
          placeholder="A short summary is plenty — dates, what happened, and how you've been affected."
        />

        {/* Honeypot: visually and programmatically hidden from real users. */}
        <div aria-hidden className="absolute left-[-9999px] h-px w-px overflow-hidden">
          <label htmlFor={`${formId}-company`}>Company</label>
          <input id={`${formId}-company`} name="company" tabIndex={-1} autoComplete="off" />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="btn btn-brand mt-2 disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Send message"}
          {!submitting && <ArrowRight className="h-4 w-4" aria-hidden />}
        </button>

        <p className="text-center text-xs leading-relaxed text-slate-3">
          Free and confidential. Submitting this form does not create an attorney-client
          relationship.
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  as = "input",
  required,
  placeholder,
  autoComplete,
  error,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  as?: "input" | "textarea";
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  error?: string;
}) {
  const fieldId = `${id}-${name}`;
  const errorId = `${fieldId}-error`;

  const classes = cn(
    "mt-2.5 w-full rounded-card border bg-paper px-4 py-3 text-[0.9375rem] text-ink transition-colors",
    "placeholder:text-slate-4 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/12",
    error ? "border-brand" : "border-slate-5",
  );

  return (
    <div>
      <label htmlFor={fieldId} className="label-xs text-slate-1">
        {label}
        {required && (
          <span aria-hidden className="ml-1 text-brand">
            *
          </span>
        )}
      </label>

      {as === "textarea" ? (
        <textarea
          id={fieldId}
          name={name}
          rows={6}
          required={required}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={cn(classes, "resize-y")}
        />
      ) : (
        <input
          id={fieldId}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={classes}
        />
      )}

      {error && (
        <p id={errorId} className="mt-2 text-xs text-brand-deep">
          {error}
        </p>
      )}
    </div>
  );
}
