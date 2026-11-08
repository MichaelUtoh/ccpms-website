import type { Metadata } from "next";
import { Check } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import FaqAccordion from "@/components/shared/FaqAccordion";
import FinalCTA from "@/components/home/FinalCTA";
import ScorecardValidation from "@/components/mockups/ScorecardValidation";
import brand from "@/lib/brand";

export const metadata: Metadata = {
  title: `For Contact Centre Supervisors — ${brand.BRAND}`,
  description:
    `Run QA evaluations, verify sales and upload performance data without the month-end spreadsheet scramble. ${brand.BRAND} is built for contact centre supervisors.`,
  keywords: [
    "QA evaluation software supervisor",
    "contact centre QA tool",
    "call centre supervisor software",
    "QA appeal software Nigeria",
  ],
  alternates: { canonical: "/solutions/supervisors" },
  openGraph: { url: "/solutions/supervisors" },
};

const pains = [
  {
    title: "Too much time uploading and copying data.",
    body: "You spend the last week of every month uploading AHT, CSAT and adherence data into separate spreadsheets, then reconciling them with QA scores. It's error-prone work that isn't supervision.",
  },
  {
    title: "QA disputes you can't resolve fairly.",
    body: "An agent says the call was scored wrong. You wrote the evaluation three weeks ago. You may not have the recording. The dispute goes nowhere constructive.",
  },
  {
    title: "Sales tracking that nobody trusts.",
    body: "Agents log their own cross-sells in a shared sheet. There's no verification step, so by the end of the month the numbers are inflated and no one can challenge them credibly.",
  },
];

const benefits = [
  "Complete QA evaluations using the same form your team already uses",
  "Upload AHT, CSAT and adherence data in bulk — validated before import, duplicates caught automatically",
  "Verify sales submissions one by one: approve, return for more information or reject with a reason",
  "Review and resolve QA appeals with the call recording in the same view",
  "Record coaching sessions with structured notes linked to the agent's scorecard",
];

const faq = [
  {
    q: "Can I bring my existing QA form?",
    a: "Yes. We replicate your existing evaluation form in the platform. The criteria, weightings and scoring scale are yours — we add the appeal layer and the audit trail.",
  },
  {
    q: "How do I upload AHT and adherence data?",
    a: "Via a spreadsheet template we provide, or via API if your telephony platform supports it. Every upload is previewed before it lands — you can see and dismiss flagged rows before confirming.",
  },
  {
    q: "Can I override a QA score I already submitted?",
    a: "Yes, with a reason. The original score is preserved alongside the correction. Both appear in the audit log so the history is never lost.",
  },
  {
    q: "How many evaluations can I complete per day?",
    a: "There is no limit. Evaluations are saved progressively so you can pick up where you left off.",
  },
  {
    q: "Do I need to verify every sales submission?",
    a: "Yes. Only supervisor-verified sales count toward targets and appear in reports. This is what makes the revenue number credible to leadership.",
  },
];

export default function SupervisorsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Supervisors"
        headline="Less admin. More coaching."
        sub="One place to complete QA evaluations, verify sales, upload data and record coaching sessions — without the month-end spreadsheet scramble."
        ctaLabel="Book a demo"
        ctaHref="/demo"
      />

      {/* Pain points */}
      <section className="py-20 px-6 bg-surface-alt border-y border-line">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-xl mb-12">
            <h2 className="font-heading font-bold text-[clamp(24px,3vw,34px)] text-ink leading-tight">
              The parts of your job that shouldn't take as long as they do.
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
            <ScorecardValidation />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                What you get
              </p>
              <h2 className="font-heading font-bold text-[clamp(24px,3vw,34px)] text-ink leading-tight mb-6">
                All your supervisory tasks, in one workflow.
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
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-surface-alt border-y border-line">
        <div className="mx-auto max-w-[1200px] max-w-2xl">
          <FaqAccordion
            items={faq}
            title="Questions supervisors usually ask"
          />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
