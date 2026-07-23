import { createServerFn } from "@tanstack/react-start";

import { contact } from "@/content/site";

export type InquiryInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  matter: string;
  message: string;
  /** Honeypot. Real people leave it empty; most bots fill everything in. */
  company: string;
};

export type InquiryErrors = Partial<Record<keyof InquiryInput, string>>;
export type InquiryResult = { ok: true } | { ok: false; message: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const str = (value: unknown) => (typeof value === "string" ? value.trim() : "");

/**
 * Plain-TS validation shared by the browser and the server function, so the
 * rules can't drift between the two and no schema library ends up in the client
 * bundle. Returns the normalized values alongside any field errors.
 */
export function validateInquiry(raw: Record<string, unknown>): {
  data: InquiryInput;
  errors: InquiryErrors;
} {
  const data: InquiryInput = {
    firstName: str(raw.firstName).slice(0, 80),
    lastName: str(raw.lastName).slice(0, 80),
    email: str(raw.email).slice(0, 160),
    phone: str(raw.phone).slice(0, 40),
    matter: str(raw.matter).slice(0, 120),
    message: str(raw.message).slice(0, 5000),
    company: str(raw.company),
  };

  const errors: InquiryErrors = {};
  if (!data.firstName) errors.firstName = "Please enter your first name";
  if (!data.lastName) errors.lastName = "Please enter your last name";
  if (!data.email) errors.email = "Please enter your email address";
  else if (!EMAIL.test(data.email)) errors.email = "Please enter a valid email address";
  if (data.message.length < 20) {
    errors.message = "Please share a little more so Brandon can review it properly";
  }

  return { data, errors };
}

/** Field order used to focus the first invalid input. */
export const FIELD_ORDER = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "matter",
  "message",
] as const;

/**
 * Delivers a consultation request.
 *
 * Set CONTACT_WEBHOOK_URL to the intake endpoint (Formspree, Zapier, a CRM
 * webhook, or a small Resend/Postmark function). Until that variable is set the
 * submission is logged server-side and the visitor is told to call or email
 * instead — the previous build showed a success screen and silently discarded
 * every lead, which is worse than an honest failure.
 */
export const submitInquiry = createServerFn({ method: "POST" })
  .validator((raw: Record<string, unknown>) => {
    const { data, errors } = validateInquiry(raw);
    if (Object.keys(errors).length > 0) {
      throw new Error(`Invalid submission: ${Object.values(errors).join("; ")}`);
    }
    return data;
  })
  .handler(async ({ data }): Promise<InquiryResult> => {
    // Honeypot tripped: accept quietly so the bot learns nothing.
    if (data.company) return { ok: true };

    const endpoint = process.env.CONTACT_WEBHOOK_URL;

    if (!endpoint) {
      console.warn(
        "[contact] CONTACT_WEBHOOK_URL is not set — inquiry was NOT delivered.",
        JSON.stringify({ ...data, message: `${data.message.slice(0, 120)}…` }),
      );
      return {
        ok: false,
        message: `This form isn't connected to an inbox yet. Please call ${contact.phone} or email ${contact.email} and you'll get a reply.`,
      };
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "content-type": "application/json", accept: "application/json" },
        body: JSON.stringify({
          subject: `New consultation request — ${data.firstName} ${data.lastName}`,
          submittedAt: new Date().toISOString(),
          ...data,
        }),
      });

      if (!response.ok) throw new Error(`Intake endpoint returned ${response.status}`);
      return { ok: true };
    } catch (error) {
      console.error("[contact] delivery failed", error);
      return {
        ok: false,
        message: `Something went wrong sending that. Please call ${contact.phone} or email ${contact.email}.`,
      };
    }
  });
