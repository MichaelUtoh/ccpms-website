import type { Metadata } from "next";
import { Check } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import FaqAccordion from "@/components/shared/FaqAccordion";
import FinalCTA from "@/components/home/FinalCTA";
import ManagerDashboard from "@/components/mockups/ManagerDashboard";
import brand from "@/lib/brand";

export const metadata: Metadata = {
  title: `For Contact Centre Managers — ${brand.BRAND}`,
  description:
    `Stop defending costs with spreadsheets. ${brand.BRAND} gives contact centre managers verified revenue figures, configurable scorecards and board-ready performance reports.`,
  keywords: [
    "contact centre manager software",
    "contact centre performance reporting",
    "contact centre revenue reporting Nigeria",
    "scorecard software contact centre manager",
  ],
  alternates: { canonical: "/solutions/managers" },
  openGraph: { url: "/solutions/managers" },
};

const pains = [
  {
    title: "Justifying headcount to the board.",
    body: "You know your team drives revenue through cross-sell and upsell, but without a verified number, those contributions are invisible. The spreadsheet says ₦30M; the CFO trusts none of it.",
  },
  {
    title: "Scorecards built manually every month.",
    body: "Your supervisors spend days copying QA scores, AHT and CSAT data into Excel, then another day fixing the errors. The process is slow, error-prone and impossible to audit.",
  },
  {
    title: "QA disputes that go nowhere.",
    body: "An agent disputes their evaluation. You have the score but not the call. The conversation becomes circular, and either the score stands unfairly or gets changed without evidence.",
  },
];

const benefits = [
  "Verified revenue figure — supervisor-confirmed, not self-reported — ready for board reports",
  "Scorecards generated automatically from validated data; no manual assembly",
  "QA appeals resolved on evidence: the call, the criterion, the agent's reason and your decision",
  "Configure every metric, weight and band to match your existing policy",
  "Monthly scorecards validated before agents see them — no mid-cycle surprises",
];

const faq = [
  {
    q: "How long does implementation take?",
    a: "Most contact centres are live within 2–4 weeks. The platform is configured to match your existing scorecard policy — we don't impose our own framework.",
  },
  {
    q: "Do we need to change our QA process?",
    a: "No. We replicate your existing QA form in the platform. Your supervisors continue evaluating the way they always have — the platform adds the evidence layer and the audit trail.",
  },
  {
    q: "Can we configure our own performance bands?",
    a: "Yes. You define what Excellent, Good and Developing mean for your team. Thresholds can differ between metrics and are version-controlled so historical bands are preserved.",
  },
  {
    q: "Is there a board-level report?",
    a: "Yes. Once monthly scorecards are finalised, a management report summarises verified revenue, team QA average, adherence and headcount reviewed — exportable as PDF.",
  },
  {
    q: "Can we host the platform on our own infrastructure?",
    a: "Yes, through the one-time licence model. We support vendor-hosted, customer-hosted cloud and on-premise deployments. See the pricing page for details.",
  },
];

export default function ManagersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Managers"
        headline="Prove what your contact centre earns."
        sub="Stop defending costs with spreadsheets. Give leadership a verified revenue number and a scorecard they can trust."
        ctaLabel="Book a demo"
        ctaHref="/demo"
        secondaryCtaLabel="See pricing"
        secondaryCtaHref="/pricing"
      />

      {/* Pain points */}
      <section className="py-20 px-6 bg-surface-alt border-y border-line">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-xl mb-12">
            <h2 className="font-heading font-bold text-[clamp(24px,3vw,34px)] text-ink leading-tight">
              The problems you're probably solving with spreadsheets right now.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pains.map((p) => (
              <div
                key={p.title}
                className="bg-surface rounded-2xl border border-line p-7 space-y-3"
              >
                <h3 className="font-heading font-semibold text-[16px] text-ink leading-snug">
                  {p.title}
                </h3>
                <p className="text-ink-muted text-[14px] leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                What you get
              </p>
              <h2 className="font-heading font-bold text-[clamp(24px,3vw,34px)] text-ink leading-tight mb-6">
                A single source of truth for your team's performance.
              </h2>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-revenue/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-revenue" />
                    </span>
                    <span className="text-[15px] text-ink leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ManagerDashboard />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-surface-alt border-y border-line">
        <div className="mx-auto max-w-[1200px] max-w-2xl">
          <FaqAccordion
            items={faq}
            title="Questions managers usually ask"
          />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
