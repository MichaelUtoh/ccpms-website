import ScorecardBuilder from "@/components/mockups/ScorecardBuilder";
import SalesVerificationQueue from "@/components/mockups/SalesVerificationQueue";
import SalesFunnel from "@/components/mockups/SalesFunnel";
import QAAppeal from "@/components/mockups/QAAppeal";
import UploadPreview from "@/components/mockups/UploadPreview";
import ScorecardValidation from "@/components/mockups/ScorecardValidation";
import { Check } from "lucide-react";

const pillars = [
  {
    eyebrow: "Configurable KPI engine",
    headline: "Your metrics. Your targets. Your rules.",
    body: "Define QA, AHT, adherence, CSAT, knowledge and sales metrics with your own formulas, weights and performance bands. Change them for next month without rewriting history.",
    bullets: [
      "Editable weights that must total 100%",
      "Scoring direction per metric — higher is better or target range",
      "Custom performance bands: Excellent, Good, Developing",
    ],
    mockup: ScorecardBuilder,
    callout: null,
  },
  {
    eyebrow: "Verified revenue tracking",
    headline: "Interest isn't revenue. Verified sales are.",
    body: "Agents log every cross-sell and upsell. Supervisors verify the outcome, and only qualifying sales count toward targets.",
    bullets: [
      "Three-stage pipeline: submitted → verified opportunity → verified conversion",
      "Supervisors approve, return or reject with a reason",
      "Only verified conversions appear in reports and scorecards",
    ],
    mockup: SalesVerificationQueue,
    callout: "This is the most important pillar. Only counted revenue is real revenue.",
  },
  {
    eyebrow: "Evidence-based QA",
    headline: "Fair QA, with the call to prove it.",
    body: "Keep the QA form your team already uses. Agents can appeal with the call recording, and managers decide on evidence while the original score stays on record.",
    bullets: [
      "Agents attach the relevant call segment when they appeal",
      "Original evaluations survive; corrections are logged alongside",
      "Full decision trail: submitted → under review → upheld or rejected",
    ],
    mockup: QAAppeal,
    callout: null,
  },
  {
    eyebrow: "Reliable data",
    headline: "Upload, connect or enter. Count it once.",
    body: "Bring in data by spreadsheet, API or direct entry. Every import is validated and previewed before it lands, and duplicates are caught automatically.",
    bullets: [
      "Preview flagged rows before confirming an import",
      "Duplicate detection across all upload methods",
      "Missing data is flagged, not silently treated as zero",
    ],
    mockup: UploadPreview,
    callout: null,
  },
  {
    eyebrow: "Controlled workflows",
    headline: "Nothing changes without a trail.",
    body: "Managers validate monthly scorecards and approve improvement plans. Every correction keeps the original value, the reason and the person who made it.",
    bullets: [
      "Scorecard status: Draft → Pending validation → Finalised",
      "Every edit is logged with the reason and the user who made it",
      "PIPs require manager approval before they become active",
    ],
    mockup: ScorecardValidation,
    callout: null,
  },
];

export default function FeaturePillars() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="mx-auto max-w-[1200px] space-y-24">
        {pillars.map((p, i) => {
          const Mockup = p.mockup;
          const isEven = i % 2 === 0;
          return (
            <div
              key={p.eyebrow}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                isEven ? "" : "lg:[direction:rtl]"
              }`}
            >
              {/* Text */}
              <div className={isEven ? "" : "lg:[direction:ltr]"}>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                  {p.eyebrow}
                </p>
                <h2 className="font-heading font-bold text-[clamp(24px,3vw,34px)] text-ink leading-tight mb-4">
                  {p.headline}
                </h2>
                <p className="text-ink-muted text-[15px] leading-relaxed mb-6 max-w-lg">
                  {p.body}
                </p>
                <ul className="space-y-3">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-revenue/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-revenue" />
                      </span>
                      <span className="text-[15px] text-ink leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
                {p.callout && (
                  <blockquote className="mt-6 border-l-2 border-revenue pl-4 text-ink-muted text-sm italic">
                    {p.callout}
                  </blockquote>
                )}
              </div>

              {/* Mockup */}
              <div className={isEven ? "" : "lg:[direction:ltr]"}>
                <Mockup />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
