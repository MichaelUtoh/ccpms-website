import type { Metadata } from "next";
import { Check } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import FaqAccordion from "@/components/shared/FaqAccordion";
import FinalCTA from "@/components/home/FinalCTA";
import AgentDashboard from "@/components/mockups/AgentDashboard";
import brand from "@/lib/brand";

export const metadata: Metadata = {
  title: `For Contact Centre Agents — ${brand.BRAND}`,
  description:
    "What your agents will see: their own targets and scores, a fair QA appeals process with call recording evidence, and credit for every verified sale.",
  keywords: [
    "contact centre agent performance dashboard",
    "call centre agent scorecard",
    "QA appeal software agents",
    "agent performance visibility",
  ],
  alternates: { canonical: "/solutions/agents" },
  openGraph: { url: "/solutions/agents" },
};

const concerns = [
  {
    title: "\"This feels like surveillance.\"",
    body: "The most common objection. Agents worry the platform is designed to catch them out. In practice, they see only their own data — and they can see it too, not just their manager.",
  },
  {
    title: "\"My QA scores are unfair.\"",
    body: "Without an appeals process, frustrated agents either accept scores they believe are wrong, or dispute them informally — which is worse for everyone. Evidence changes the conversation.",
  },
  {
    title: "\"My sales never get credited.\"",
    body: "When cross-sells go unverified, agents stop logging them. The revenue is invisible and so is the agent's effort. A structured verification step makes their contribution visible.",
  },
];

const benefits = [
  "Each agent sees their own targets, scores and progress — nothing else",
  "A formal appeals process: submit the call recording alongside your reason",
  "Sales are credited to the agent once a supervisor verifies the outcome",
  "Knowledge test scores and improvement over time are tracked per agent",
  "Coaching session notes are visible so there are no surprises at review time",
];

const faq = [
  {
    q: "Will my manager see everything I do?",
    a: "Agents see the same data their manager sees about them — no more, no less. The platform shows performance data: QA scores, adherence, knowledge test results and verified sales. It is not an activity monitor.",
  },
  {
    q: "How does the QA appeals process work?",
    a: "If you disagree with a QA criterion, you can raise an appeal and attach the relevant part of the call recording alongside your reason. Your supervisor reviews it and makes a decision on the evidence. The original score is always preserved alongside any revision.",
  },
  {
    q: "When are my sales credited?",
    a: "Once your supervisor verifies that a cross-sell or upsell converted — they confirm the customer outcome, not just the attempt. Only verified conversions count toward your target.",
  },
  {
    q: "What if my KPI target seems unreasonable?",
    a: "Targets are set by your manager using the scorecard builder. If you have a concern, raise it with your manager or supervisor — the platform records the conversation in a coaching session so it is documented.",
  },
  {
    q: "Can I see my score before the end of the month?",
    a: "Your in-progress scorecard is visible throughout the month. The final scorecard is locked by your manager before it is published, so you always see the validated version.",
  },
];

export default function AgentsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Agents"
        headline="What your agents will see: fairness, clarity and recognition."
        sub="This page is written for managers and operations leaders considering agent adoption. Here is exactly what the platform gives each agent — and why they will actually use it."
        ctaLabel="Book a demo"
        ctaHref="/demo"
      />

      {/* Adoption concerns */}
      <section className="py-20 px-6 bg-surface-alt border-y border-line">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-xl mb-12">
            <h2 className="font-heading font-bold text-[clamp(24px,3vw,34px)] text-ink leading-tight">
              The three objections you'll hear from agents — and how the platform addresses them.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {concerns.map((c) => (
              <div
                key={c.title}
                className="bg-surface rounded-2xl border border-line p-7 space-y-3"
              >
                <h3 className="font-heading font-semibold text-[16px] text-ink leading-snug">
                  {c.title}
                </h3>
                <p className="text-ink-muted text-[14px] leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What agents get */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                What agents see
              </p>
              <h2 className="font-heading font-bold text-[clamp(24px,3vw,34px)] text-ink leading-tight mb-6">
                Their own data. No one else's.
              </h2>
              <ul className="space-y-4 mb-8">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-revenue/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-revenue" />
                    </span>
                    <span className="text-[15px] text-ink leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <p className="text-primary font-semibold text-sm">
                  Built to be fair to agents, so they actually use it.
                </p>
                <p className="text-ink-muted text-[13px] mt-1">
                  Adoption isn't a training problem. It's a trust problem. When
                  agents see that the platform is consistent, transparent and
                  gives them a voice, adoption follows.
                </p>
              </div>
            </div>
            <AgentDashboard />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-surface-alt border-y border-line">
        <div className="mx-auto max-w-[1200px] max-w-2xl">
          <FaqAccordion
            items={faq}
            title="Questions agents usually ask"
          />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
