import type { Metadata } from "next";
import { Check } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import ModuleNav from "@/components/shared/ModuleNav";
import FinalCTA from "@/components/home/FinalCTA";
import MockupFrame from "@/components/mockups/MockupFrame";
import IllustrativeLabel from "@/components/ui/IllustrativeLabel";
import ScorecardBuilder from "@/components/mockups/ScorecardBuilder";
import ScorecardValidation from "@/components/mockups/ScorecardValidation";
import QAAppeal from "@/components/mockups/QAAppeal";
import SalesVerificationQueue from "@/components/mockups/SalesVerificationQueue";
import SalesFunnel from "@/components/mockups/SalesFunnel";
import KnowledgeTest from "@/components/mockups/KnowledgeTest";
import AdherenceSchedule from "@/components/mockups/AdherenceSchedule";
import CoachingSession from "@/components/mockups/CoachingSession";
import ReportsDashboard from "@/components/mockups/ReportsDashboard";
import brand from "@/lib/brand";

export const metadata: Metadata = {
  title: `Product — ${brand.BRAND}`,
  description:
    `A complete tour of ${brand.BRAND}: configurable KPIs, QA and appeals, verified sales tracking, knowledge tests, adherence, coaching and board-ready reports. Built for Nigerian contact centres.`,
  keywords: [
    "contact centre performance platform",
    "QA evaluation software",
    "agent scorecard software",
    "verified sales tracking contact centre",
    "call centre coaching software",
    "contact centre KPI metrics",
  ],
  alternates: { canonical: "/product" },
  openGraph: { url: "/product" },
};

const navItems = [
  { id: "kpis", label: "KPIs & scorecards" },
  { id: "qa", label: "QA & appeals" },
  { id: "sales", label: "Sales verification" },
  { id: "knowledge", label: "Knowledge tests" },
  { id: "adherence", label: "Adherence" },
  { id: "coaching", label: "Coaching & PIPs" },
  { id: "reports", label: "Reports" },
  { id: "integrations", label: "Integrations" },
];

const scorecardWeights = [
  { metric: "QA Score", weight: 35, color: "bg-primary" },
  { metric: "CSAT", weight: 15, color: "bg-revenue" },
  { metric: "Adherence", weight: 15, color: "bg-revenue" },
  { metric: "Knowledge test", weight: 10, color: "bg-accent" },
  { metric: "AHT", weight: 15, color: "bg-accent" },
  { metric: "Verified sales", weight: 10, color: "bg-revenue" },
];

const integrationCategories = [
  { label: "Telephony", icon: "📞", note: "" },
  { label: "CRM", icon: "🗂️", note: "On the roadmap" },
  { label: "Surveys / CSAT", icon: "📊", note: "" },
  { label: "Workforce mgmt", icon: "🗓️", note: "On the roadmap" },
  { label: "SSO / Identity", icon: "🔐", note: "" },
  { label: "BI & reporting", icon: "📈", note: "On the roadmap" },
];

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((b) => (
        <li key={b} className="flex items-start gap-2.5">
          <span className="mt-0.5 w-5 h-5 rounded-full bg-revenue/10 flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 text-revenue" />
          </span>
          <span className="text-[15px] text-ink leading-snug">{b}</span>
        </li>
      ))}
    </ul>
  );
}

function ModuleSection({
  id,
  eyebrow,
  headline,
  body,
  bullets,
  mockup,
  reverse = false,
  alt = false,
}: {
  id: string;
  eyebrow: string;
  headline: string;
  body: string;
  bullets: string[];
  mockup: React.ReactNode;
  reverse?: boolean;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-20 px-6 scroll-mt-32 ${alt ? "bg-surface-alt border-y border-line" : "bg-surface"}`}
    >
      <div className="mx-auto max-w-[1200px]">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            reverse ? "lg:[direction:rtl]" : ""
          }`}
        >
          <div className={reverse ? "lg:[direction:ltr]" : ""}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              {eyebrow}
            </p>
            <h2 className="font-heading font-bold text-[clamp(24px,3vw,34px)] text-ink leading-tight mb-4">
              {headline}
            </h2>
            <p className="text-ink-muted text-[15px] leading-relaxed mb-6 max-w-lg">
              {body}
            </p>
            <Bullets items={bullets} />
          </div>
          <div className={reverse ? "lg:[direction:ltr]" : ""}>{mockup}</div>
        </div>
      </div>
    </section>
  );
}

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        headline="Everything you need to run a high-performing contact centre."
        sub="One platform covering QA, KPIs, verified sales, knowledge, adherence, coaching and reports — all configurable to your policy."
        ctaLabel="Book a demo"
        ctaHref="/demo"
        secondaryCtaLabel="See pricing"
        secondaryCtaHref="/pricing"
      />

      <ModuleNav items={navItems} />

      {/* ── KPIs & scorecards ── */}
      <ModuleSection
        id="kpis"
        eyebrow="KPIs & scorecards"
        headline="Your metrics. Your targets. Your rules."
        body="Configure every metric, weight, formula and performance band to match your existing policy. Nothing is hard-coded. Change targets for next month without rewriting history."
        bullets={[
          "Define as many metrics as you need — QA, AHT, CSAT, adherence, knowledge, sales",
          "Set individual weights that must total 100%",
          "Choose scoring direction: higher is better, or a target range for metrics like AHT",
          "Define Excellent, Good, Developing and Below Target bands with your own thresholds",
          "Changes take effect from the next period; historical data is preserved",
        ]}
        mockup={<ScorecardBuilder />}
      />

      {/* Scorecard explained */}
      <section className="py-12 px-6 bg-surface border-b border-line">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">
              Scorecard explained
            </p>
            <h3 className="font-heading font-bold text-xl text-ink mb-6">
              How weights add up to a single score.
            </h3>
            <div className="space-y-3">
              {scorecardWeights.map((w) => (
                <div key={w.metric} className="flex items-center gap-4">
                  <span className="w-32 text-[13px] font-medium text-ink shrink-0">
                    {w.metric}
                  </span>
                  <div className="flex-1 h-6 rounded-lg bg-surface-alt border border-line overflow-hidden">
                    <div
                      className={`h-full ${w.color} flex items-center pl-2`}
                      style={{ width: `${w.weight}%` }}
                    >
                      <span className="text-white text-[10px] font-semibold tabular">
                        {w.weight}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
              <span className="text-sm font-semibold text-ink">Total</span>
              <span className="text-sm font-bold text-revenue tabular">100%</span>
            </div>
            <div className="mt-3">
              <IllustrativeLabel />
              <span className="ml-2 text-[12px] text-ink-muted">
                Example only. Set your own weights in the scorecard builder.
              </span>
            </div>
          </div>
        </div>
      </section>

      <ModuleSection
        id="kpis-validation"
        eyebrow="Scorecard validation"
        headline="Nothing finalises without manager sign-off."
        body="Monthly scorecards move through a Draft → Pending validation → Finalised workflow. Every correction is logged with the reason and who made it."
        bullets={[
          "Managers validate scorecards before they are published to agents",
          "Corrections keep the original value alongside the revised one",
          "Full audit log: every change has a timestamp and user identity",
        ]}
        mockup={<ScorecardValidation />}
        reverse
        alt
      />

      {/* ── QA & appeals ── */}
      <ModuleSection
        id="qa"
        eyebrow="QA & appeals"
        headline="Fair QA, with the call to prove it."
        body="Use your existing QA form. Agents can raise appeals with the call recording as evidence. Managers review on the facts, and the original evaluation is always preserved."
        bullets={[
          "Import or recreate your QA form — no need to change your evaluation process",
          "Agents attach the relevant call segment when they appeal a criterion",
          "Managers review the audio, the original score and the agent's reason before deciding",
          "Decisions are logged: upheld, partially upheld or rejected — with a reason",
          "Original scores are never overwritten; corrections sit alongside them",
        ]}
        mockup={<QAAppeal />}
        alt
      />

      {/* ── Sales verification ── */}
      <ModuleSection
        id="sales"
        eyebrow="Sales verification"
        headline="Interest isn't revenue. Verified sales are."
        body="Agents log every cross-sell and upsell activity. Supervisors confirm the outcome. Only verified conversions count toward targets — so your revenue number means something."
        bullets={[
          "Agents submit sales with customer name, product, amount and notes",
          "Supervisors review and verify, return for more information, or reject",
          "Three-stage pipeline: submitted → verified opportunity → verified conversion",
          "Only verified conversions appear in scorecards and board reports",
          "Rejected submissions are retained with the supervisor's reason",
        ]}
        mockup={<SalesVerificationQueue />}
        reverse
      />

      <section className="py-12 px-6 bg-surface-alt border-y border-line">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Pipeline view
          </p>
          <SalesFunnel />
        </div>
      </section>

      {/* ── Knowledge tests ── */}
      <ModuleSection
        id="knowledge"
        eyebrow="Knowledge tests"
        headline="Assess product and process knowledge at scale."
        body="Create scored assessments and assign them to individuals or teams. Results feed directly into scorecards — with a configurable weight alongside QA, AHT and sales."
        bullets={[
          "Multi-choice question banks, assignable by role or team",
          "Timed assessments with automatic scoring",
          "Latest score, best score and target tracked per agent",
          "Score contributes to the overall scorecard at your configured weight",
          "Managers can reassign failed assessments for reattempt",
        ]}
        mockup={<KnowledgeTest />}
        alt
      />

      {/* ── Schedules & adherence ── */}
      <ModuleSection
        id="adherence"
        eyebrow="Schedules & adherence"
        headline="Capture planned versus actual time on the floor."
        body="Upload shift schedules and login/logout data to generate adherence percentages per agent per day. Exceptions are flagged automatically for supervisor review."
        bullets={[
          "Bulk schedule upload via spreadsheet or API connection",
          "Login and logout times matched to scheduled shifts",
          "Status chips: On time, Late, Early departure — reviewable by supervisors",
          "Adherence contributes to scorecard at your configured weight",
          "Missing data is flagged, not defaulted to zero",
        ]}
        mockup={<AdherenceSchedule />}
        reverse
      />

      {/* ── Coaching & PIPs ── */}
      <ModuleSection
        id="coaching"
        eyebrow="Coaching & PIPs"
        headline="Structure every development conversation."
        body="Log coaching sessions against the agent's current scorecard. Where performance requires formal intervention, create an improvement plan — approved by the manager before it becomes active."
        bullets={[
          "Coaching sessions linked to specific scorecard periods and metrics",
          "Structured notes: topic, observations, agreed actions",
          "Improvement plans (PIPs) require manager approval before activation",
          "PIP targets tied to specific metrics with a review date",
          "Session history visible to managers and agents — no surprises",
        ]}
        mockup={<CoachingSession />}
        alt
      />

      {/* ── Reports ── */}
      <ModuleSection
        id="reports"
        eyebrow="Reports"
        headline="Board-ready numbers, not spreadsheet exports."
        body="Monthly performance reports are generated automatically once scorecards are finalised. Export to PDF or share a read-only link with senior stakeholders."
        bullets={[
          "Team-level and individual-level views from the same data source",
          "Verified revenue, QA averages and adherence in one report",
          "Reports are locked once finalised — no retroactive changes",
          "Export in PDF; share via read-only link with access logging",
          "Trend data compared to the previous period",
        ]}
        mockup={<ReportsDashboard />}
        reverse
      />

      {/* ── Integrations ── */}
      <section id="integrations" className="py-20 px-6 bg-surface-alt border-t border-line scroll-mt-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Integrations
              </p>
              <h2 className="font-heading font-bold text-[clamp(24px,3vw,34px)] text-ink leading-tight mb-4">
                Connect what you already use.
              </h2>
              <p className="text-ink-muted text-[15px] leading-relaxed mb-6">
                A documented REST API connects {brand.BRAND} to telephony
                platforms, CRMs, survey tools and workforce management systems.
                No integration ready yet? Spreadsheet uploads work from day one
                and can be replaced with API feeds later.
              </p>
              <Bullets
                items={[
                  "REST API with webhook support for real-time data feeds",
                  "Spreadsheet upload as a fallback — validated before import",
                  "SSO via SAML 2.0 on Enterprise plans",
                  "API documentation provided; no vendor lock-in",
                ]}
              />
            </div>

            {/* Hub diagram */}
            <div className="relative flex items-center justify-center min-h-[300px]">
              <div className="absolute z-10 w-20 h-20 rounded-2xl bg-panel flex items-center justify-center shadow-lg">
                <span className="text-white font-heading font-bold text-xs text-center leading-tight px-2">
                  {brand.BRAND}
                </span>
              </div>
              {integrationCategories.map((c, i) => {
                const angle = (i / integrationCategories.length) * 360 - 90;
                const rad = (angle * Math.PI) / 180;
                const r = 120;
                const x = Math.cos(rad) * r;
                const y = Math.sin(rad) * r;
                return (
                  <div
                    key={c.label}
                    className="absolute flex flex-col items-center gap-1.5"
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                  >
                    <div className="w-16 h-14 rounded-xl bg-surface border border-line flex flex-col items-center justify-center gap-1 shadow-sm">
                      <span className="text-lg">{c.icon}</span>
                      <p className="text-[9px] font-medium text-ink-muted text-center leading-tight px-1">
                        {c.label}
                      </p>
                    </div>
                    {c.note && (
                      <span className="text-[8px] text-ink-muted/60 font-medium">
                        {c.note}
                      </span>
                    )}
                  </div>
                );
              })}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                aria-hidden="true"
              >
                {integrationCategories.map((_, i) => {
                  const angle = (i / integrationCategories.length) * 360 - 90;
                  const rad = (angle * Math.PI) / 180;
                  const ex = 50 + Math.cos(rad) * 38;
                  const ey = 50 + Math.sin(rad) * 38;
                  return (
                    <line
                      key={i}
                      x1="50%"
                      y1="50%"
                      x2={`${ex}%`}
                      y2={`${ey}%`}
                      stroke="#e2e7ed"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
