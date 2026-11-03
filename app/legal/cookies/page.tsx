import type { Metadata } from "next";
import Link from "next/link";
import brand from "@/lib/brand";

export const metadata: Metadata = {
  title: `Cookie Notice — ${brand.BRAND}`,
  description: `How ${brand.BRAND} uses cookies and similar tracking technologies.`,
};

const cookieTypes = [
  {
    type: "Strictly necessary",
    examples: "Session cookie, CSRF token",
    purpose: "Required for the platform to function. Cannot be disabled.",
    duration: "Session / 24 hours",
    canOptOut: false,
  },
  {
    type: "Analytics",
    examples: "Plausible / GA4",
    purpose: "Privacy-friendly analytics to understand how pages are used. No cross-site tracking.",
    duration: "Up to 12 months",
    canOptOut: true,
  },
  {
    type: "Preferences",
    examples: "Theme, language",
    purpose: "Remembers your preferences between visits.",
    duration: "12 months",
    canOptOut: true,
  },
];

export default function CookiesPage() {
  return (
    <>
      {/* Sidebar */}
      <aside className="md:sticky md:top-24 self-start space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted mb-1">
            Document
          </p>
          <p className="font-heading font-semibold text-ink">Cookie notice</p>
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
          <Link href="/legal/terms" className="block text-sm text-ink-muted hover:text-ink">
            Terms of service
          </Link>
        </div>
      </aside>

      {/* Content */}
      <article className="max-w-2xl">
        <h1 className="font-heading font-bold text-[clamp(24px,3vw,36px)] text-ink mb-2">
          Cookie Notice
        </h1>
        <p className="text-ink-muted text-sm mb-10">Last updated: November 2026</p>

        <div className="space-y-8 text-[15px] text-ink-muted leading-relaxed">
          <div>
            <h2 className="font-heading font-bold text-lg text-ink mb-3">
              What are cookies?
            </h2>
            <p>
              Cookies are small text files placed on your device by websites you visit. We use cookies and similar technologies to make the platform work, measure how it is used and remember your preferences.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-lg text-ink mb-4">
              Cookies we use
            </h2>
            <div className="rounded-xl border border-line overflow-hidden">
              <div className="grid grid-cols-4 bg-surface-alt border-b border-line px-4 py-3 text-[12px] font-semibold uppercase tracking-wide text-ink-muted">
                <span>Type</span>
                <span>Purpose</span>
                <span>Duration</span>
                <span>Can opt out</span>
              </div>
              {cookieTypes.map((c, i) => (
                <div
                  key={c.type}
                  className={`grid grid-cols-4 gap-3 px-4 py-4 text-[13px] ${
                    i < cookieTypes.length - 1 ? "border-b border-line/50" : ""
                  }`}
                >
                  <div>
                    <p className="font-medium text-ink">{c.type}</p>
                    <p className="text-ink-muted/70 text-[11px] mt-0.5">{c.examples}</p>
                  </div>
                  <p className="text-ink-muted leading-snug">{c.purpose}</p>
                  <p className="text-ink-muted">{c.duration}</p>
                  <p className={c.canOptOut ? "text-ink-muted" : "text-ink font-medium"}>
                    {c.canOptOut ? "Yes" : "No — required"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading font-bold text-lg text-ink mb-3">
              Managing your preferences
            </h2>
            <p>
              You can manage cookie preferences through your browser settings or by using the cookie preference panel on this site (if available). Disabling strictly necessary cookies will affect platform functionality.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-lg text-ink mb-3">
              Changes to this notice
            </h2>
            <p>
              We may update this notice as our use of cookies changes. Material updates will be communicated to registered users.
            </p>
          </div>
        </div>

        <div className="mt-12 p-5 bg-surface-alt border border-line rounded-xl text-[14px] text-ink-muted">
          Questions about cookies? Email{" "}
          <a href={`mailto:${brand.CONTACT_EMAIL}`} className="text-primary hover:underline">
            {brand.CONTACT_EMAIL}
          </a>
        </div>
      </article>
    </>
  );
}
