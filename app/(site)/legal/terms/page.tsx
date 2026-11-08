import type { Metadata } from "next";
import Link from "next/link";
import brand from "@/lib/brand";

export const metadata: Metadata = {
  title: `Terms of Service — ${brand.BRAND}`,
  description: `Terms governing the use of the ${brand.BRAND} platform and website.`,
};

const sections = [
  {
    heading: "Acceptance of terms",
    body: `By accessing or using the ${brand.BRAND} platform you agree to these terms. If you are accepting on behalf of an organisation, you represent that you have authority to do so.`,
  },
  {
    heading: "The service",
    body: `${brand.BRAND} provides a contact centre performance management platform as described in your subscription or licence agreement. The features available depend on your plan.`,
  },
  {
    heading: "Accounts and access",
    body: "You are responsible for maintaining the confidentiality of your account credentials. You must notify us promptly of any unauthorised access. We may suspend accounts that violate these terms.",
  },
  {
    heading: "Acceptable use",
    body: "You may not use the platform to process data unlawfully, attempt to access other tenants' data, reverse-engineer the software, or use automated means to scrape or overload the service.",
  },
  {
    heading: "Data and privacy",
    body: "We process personal data in accordance with our Privacy Policy and applicable law, including the Nigeria Data Protection Act 2023. You retain ownership of your data at all times.",
  },
  {
    heading: "Intellectual property",
    body: `The ${brand.BRAND} platform, brand and documentation are owned by us. Your subscription or licence grants you a right to use the service; it does not transfer ownership of any intellectual property.`,
  },
  {
    heading: "Uptime and support",
    body: "We aim to maintain high availability. Planned maintenance is communicated in advance. Service level commitments are defined in your subscription or support agreement.",
  },
  {
    heading: "Limitation of liability",
    body: "To the extent permitted by law, our liability is limited to the fees paid by you in the 12 months preceding the claim. We are not liable for indirect, consequential or lost-profit damages.",
  },
  {
    heading: "Termination",
    body: "Either party may terminate the subscription on the notice period in your agreement. We may terminate immediately for material breach. On termination, you may export your data within the period defined in our Privacy Policy.",
  },
  {
    heading: "Governing law",
    body: "These terms are governed by the laws of the Federal Republic of Nigeria. Disputes are subject to the exclusive jurisdiction of the courts of Lagos State.",
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Sidebar */}
      <aside className="md:sticky md:top-24 self-start space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted mb-1">
            Document
          </p>
          <p className="font-heading font-semibold text-ink">Terms of service</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted mb-1">
            Version
          </p>
          <p className="text-sm text-ink-muted">1.0 · November 2026</p>
        </div>
        <div className="space-y-1 pt-2 border-t border-line">
          <Link href="/legal/privacy" className="block text-sm text-ink-muted hover:text-ink">
            Privacy policy
          </Link>
          <Link href="/legal/cookies" className="block text-sm text-ink-muted hover:text-ink">
            Cookie notice
          </Link>
        </div>
      </aside>

      {/* Content */}
      <article className="max-w-2xl">
        <h1 className="font-heading font-bold text-[clamp(24px,3vw,36px)] text-ink mb-2">
          Terms of Service
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
          Questions about these terms? Email{" "}
          <a href={`mailto:${brand.CONTACT_EMAIL}`} className="text-primary hover:underline">
            {brand.CONTACT_EMAIL}
          </a>
        </div>
      </article>
    </>
  );
}
