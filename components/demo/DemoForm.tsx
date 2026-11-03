"use client";
import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle } from "lucide-react";
import brand from "@/lib/brand";

const FREE_MAIL_DOMAINS = [
  "gmail.com", "yahoo.com", "hotmail.com", "outlook.com",
  "icloud.com", "live.com", "aol.com", "yahoo.co.uk",
  "protonmail.com", "mail.com",
];

const roleOptions = [
  "CX / Contact centre leader",
  "Contact centre manager",
  "Supervisor / QA lead",
  "IT / technical",
  "Other",
];

const agentOptions = [
  "Under 30",
  "30–100",
  "101–300",
  "301–1,000",
  "1,000+",
];

const improveOptions = [
  "QA evaluations",
  "Sales tracking",
  "Scorecards",
  "Data & reporting",
  "Coaching",
];

interface FormData {
  name: string;
  email: string;
  company: string;
  role: string;
  agents: string;
  phone: string;
  improve: string[];
  consent: boolean;
  website: string; // honeypot
}

const initial: FormData = {
  name: "",
  email: "",
  company: "",
  role: "",
  agents: "",
  phone: "",
  improve: [],
  consent: false,
  website: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export default function DemoForm() {
  const [form, setForm] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [emailWarning, setEmailWarning] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const setField = (field: keyof FormData, value: string | boolean | string[]) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const checkFreemail = () => {
    const domain = form.email.split("@")[1]?.toLowerCase() ?? "";
    if (FREE_MAIL_DOMAINS.includes(domain)) {
      setEmailWarning(
        "Looks like a personal email address. Please use your work email for a faster response."
      );
    } else {
      setEmailWarning("");
    }
  };

  const toggleImprove = (val: string) => {
    setForm((f) => ({
      ...f,
      improve: f.improve.includes(val)
        ? f.improve.filter((v) => v !== val)
        : [...f.improve, val],
    }));
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) e.name = "Please enter your full name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.company.trim()) e.company = "Please enter your company name.";
    if (!form.role) e.role = "Please select your role.";
    if (!form.agents) e.agents = "Please select the number of agents.";
    if (!form.consent) e.consent = "Please confirm your consent to continue.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Honeypot check — silently succeed if bot filled it
    if (form.website) {
      setStatus("success");
      return;
    }

    setStatus("submitting");

    try {
      if (brand.DEMO_FORM_ENDPOINT) {
        const res = await fetch(brand.DEMO_FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            company: form.company,
            role: form.role,
            agents: form.agents,
            phone: form.phone,
            improve: form.improve,
          }),
        });
        if (!res.ok) throw new Error("submission failed");
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-revenue/30 bg-revenue/5 p-10 text-center space-y-4">
        <CheckCircle2 className="w-10 h-10 text-revenue mx-auto" />
        <h3 className="font-heading font-bold text-xl text-ink">
          Request received.
        </h3>
        <p className="text-ink-muted leading-relaxed max-w-sm mx-auto">
          We&apos;ll reply within one business day to confirm your demo. Check
          your inbox — including your junk folder.
        </p>
        {brand.CALENDLY_URL && (
          <a
            href={brand.CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-[#1840b8] transition-colors mt-2"
          >
            Pick a time now →
          </a>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot */}
      <div aria-hidden="true" className="hidden" tabIndex={-1}>
        <label htmlFor="website">Leave this blank</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => setField("website", e.target.value)}
        />
      </div>

      {/* Name */}
      <Field label="Full name" required error={errors.name}>
        <input
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={(e) => setField("name", e.target.value)}
          className={inputCls(!!errors.name)}
          placeholder="Adaeze Okafor"
        />
      </Field>

      {/* Email */}
      <Field
        label="Work email"
        required
        error={errors.email}
        warning={emailWarning}
      >
        <input
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => setField("email", e.target.value)}
          onBlur={checkFreemail}
          className={inputCls(!!errors.email)}
          placeholder="you@company.com"
        />
      </Field>

      {/* Company */}
      <Field label="Company" required error={errors.company}>
        <input
          type="text"
          autoComplete="organization"
          value={form.company}
          onChange={(e) => setField("company", e.target.value)}
          className={inputCls(!!errors.company)}
          placeholder="Your company name"
        />
      </Field>

      {/* Role */}
      <Field label="Your role" required error={errors.role}>
        <select
          value={form.role}
          onChange={(e) => setField("role", e.target.value)}
          className={inputCls(!!errors.role)}
        >
          <option value="">Select your role…</option>
          {roleOptions.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </Field>

      {/* Agents */}
      <Field label="Number of agents" required error={errors.agents}>
        <select
          value={form.agents}
          onChange={(e) => setField("agents", e.target.value)}
          className={inputCls(!!errors.agents)}
        >
          <option value="">Select a range…</option>
          {agentOptions.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </Field>

      {/* Phone */}
      <Field label="Phone / WhatsApp" hint="Optional">
        <input
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={(e) => setField("phone", e.target.value)}
          className={inputCls(false)}
          placeholder="+234 800 000 0000"
        />
      </Field>

      {/* Improve checkboxes */}
      <fieldset>
        <legend className="text-[14px] font-semibold text-ink mb-3">
          What do you want to improve?{" "}
          <span className="text-ink-muted font-normal text-[13px]">(Optional)</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {improveOptions.map((opt) => {
            const checked = form.improve.includes(opt);
            return (
              <label
                key={opt}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-[13px] font-medium cursor-pointer transition-colors ${
                  checked
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-line text-ink-muted hover:border-ink-muted hover:text-ink"
                }`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={checked}
                  onChange={() => toggleImprove(opt)}
                />
                {opt}
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* Consent */}
      <div className="space-y-1">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative mt-0.5">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={form.consent}
              onChange={(e) => setField("consent", e.target.checked)}
            />
            <div
              className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                form.consent
                  ? "bg-primary border-primary"
                  : errors.consent
                  ? "border-risk"
                  : "border-line group-hover:border-ink-muted"
              }`}
            >
              {form.consent && (
                <svg viewBox="0 0 12 9" className="w-3 h-2.5 fill-white">
                  <path d="M1 4l3 3 7-7" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          </div>
          <span className="text-[13px] text-ink-muted leading-snug">
            I agree to the processing of my data in line with the{" "}
            <Link href="/legal/privacy" className="text-primary hover:underline">
              privacy policy
            </Link>
            . I understand I can request deletion of my data at any time.
          </span>
        </label>
        {errors.consent && (
          <p className="text-risk text-[12px] flex items-center gap-1 ml-7">
            <AlertCircle className="w-3 h-3" />
            {errors.consent}
          </p>
        )}
      </div>

      {/* Submit */}
      {status === "error" && (
        <div className="flex items-center gap-2 p-3 bg-risk/5 border border-risk/20 rounded-xl text-risk text-[13px]">
          <AlertCircle className="w-4 h-4 shrink-0" />
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full px-6 py-3.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-[#1840b8] transition-colors min-h-[52px] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Book my demo"}
      </button>

      <p className="text-center text-[12px] text-ink-muted">
        We&apos;ll reply within one business day.
      </p>
    </form>
  );
}

function inputCls(hasError: boolean) {
  return [
    "w-full px-4 py-2.5 rounded-xl border text-[14px] text-ink bg-surface transition-colors outline-none",
    "focus:border-primary focus:ring-2 focus:ring-primary/20",
    hasError ? "border-risk focus:border-risk focus:ring-risk/20" : "border-line hover:border-ink-muted",
  ].join(" ");
}

function Field({
  label,
  required,
  hint,
  error,
  warning,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  warning?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="text-[14px] font-semibold text-ink">
          {label}
          {required && <span className="text-risk ml-1" aria-hidden>*</span>}
        </label>
        {hint && <span className="text-[12px] text-ink-muted">{hint}</span>}
      </div>
      {children}
      {warning && !error && (
        <p className="text-accent text-[12px] flex items-center gap-1.5">
          <AlertCircle className="w-3 h-3 shrink-0" />
          {warning}
        </p>
      )}
      {error && (
        <p className="text-risk text-[12px] flex items-center gap-1.5">
          <AlertCircle className="w-3 h-3 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}
