import type { Metadata } from "next";
import Link from "next/link";
import brand from "@/lib/brand";

export const metadata: Metadata = {
  title: `Privacy Policy — ${brand.BRAND}`,
  description: `How ${brand.BRAND} collects, uses and protects your personal data.`,
};

const sections = [
  {
    heading: "Who we are",
    body: `${brand.BRAND} is the data controller for personal data collected through this website and the platform. Contact us at ${brand.CONTACT_EMAIL} with any data protection queries.`,
  },
  {
    heading: "What data we collect",
    body: "We collect the personal data you provide when you request a demo or create an account (name, work email, company, role, phone number). We also collect usage data (pages visited, form interactions) via privacy-friendly analytics.",
  },
  {
    heading: "Why we process your data",
    body: "We process your data to respond to demo requests, to provide the platform services, and to send service-related communications. We do not use your data for advertising or share it with third parties for marketing purposes.",
  },
  {
    heading: "Lawful basis",
    body: "We process personal data on the basis of your consent (demo requests, marketing emails) or contract performance (platform users). You may withdraw consent at any time by contacting us.",
  },
  {
    heading: "Data retention",
    body: "Demo enquiry data is retained for 24 months unless you request earlier deletion. Platform data is retained for the duration of the subscription and deleted within 30 days of contract end following data export.",
  },
  {
    heading: "Your rights",
    body: "Under the Nigeria Data Protection Act 2023, you have the right to access, correct, delete or export your personal data. Submit requests to our contact email. We respond within the statutory timeframe.",
  },
  {
    heading: "Cookies",
    body: "We use functional cookies necessary for the platform to operate, and optional analytics cookies. See our Cookie Notice for details.",
  },
  {
    heading: "Changes to this policy",
    body: "We will notify registered users of material changes at least 14 days before they take effect. The current version date is shown on this page.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Sidebar */}
      <aside className="md:sticky md:top-24 self-start space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted mb-1">
            Document
          </p>
          <p className="font-heading font-semibold text-ink">Privacy Policy</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted mb-1">
            Version
          </p>
          <p className="text-sm text-ink-muted">1.0 · November 2026</p>
        </div>
        <div className="space-y-1 pt-2 border-t border-line">
          <Link href="/legal/terms" className="block text-sm text-ink-muted hover:text-ink">
            Terms of service
          </Link>
          <Link href="/legal/cookies" className="block text-sm text-ink-muted hover:text-ink">
            Cookie notice
          </Link>
        </div>
      </aside>

      {/* Content */}
      <article className="prose-custom max-w-2xl">
        <h1 className="font-heading font-bold text-[clamp(24px,3vw,36px)] text-ink mb-2">
          Privacy Policy
        </h1>
        <p className="text-ink-muted text-sm mb-10">Last updated: November 2026</p>

        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-heading font-bold text-lg text-ink mb-3">
                {s.heading}
              </h2>
              <p className="text-ink-muted text-[15px] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-5 bg-surface-alt border border-line rounded-xl text-[14px] text-ink-muted">
          Questions about your data? Email{" "}
          <a href={`mailto:${brand.CONTACT_EMAIL}`} className="text-primary hover:underline">
            {brand.CONTACT_EMAIL}
          </a>
        </div>
      </article>
    </>
  );
}
