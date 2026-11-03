"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import ManagerDashboard from "@/components/mockups/ManagerDashboard";
import AgentDashboard from "@/components/mockups/AgentDashboard";

const roles = [
  {
    id: "manager",
    label: "Manager",
    tagline: "Prove the team's commercial value.",
    bullets: [
      "Configure scorecards, metrics and performance bands",
      "Review team-level and individual performance reports",
      "Decide QA appeals and approve improvement plans",
      "Board-ready verified revenue reporting",
    ],
    mockup: ManagerDashboard,
  },
  {
    id: "supervisor",
    label: "Supervisor",
    tagline: "Less admin. More coaching.",
    bullets: [
      "Complete QA evaluations using your existing form",
      "Upload AHT, CSAT and adherence data in bulk",
      "Verify sales submissions from your team",
      "Record coaching sessions with structured notes",
    ],
    mockup: null,
  },
  {
    id: "agent",
    label: "Agent",
    tagline: "Fairness, clarity, recognition.",
    bullets: [
      "See your own targets and real-time progress",
      "Take knowledge tests and track your score",
      "Appeal QA evaluations with the call recording",
      "Get credit for every verified sale",
    ],
    callout: "Built to be fair to agents, so they actually use it.",
    mockup: AgentDashboard,
  },
];

export default function Roles() {
  const [active, setActive] = useState("manager");
  const current = roles.find((r) => r.id === active)!;
  const Mockup = current.mockup;

  return (
    <section className="py-24 px-6 bg-surface-alt border-y border-line">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-xl mb-12">
          <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-ink leading-tight">
            One platform. Every seat in the contact centre.
          </h2>
        </div>

        {/* Tab bar */}
        <div className="flex gap-2 mb-10 flex-wrap" role="tablist">
          {roles.map((r) => (
            <button
              key={r.id}
              role="tab"
              aria-selected={active === r.id}
              onClick={() => setActive(r.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors min-h-[44px] ${
                active === r.id
                  ? "bg-primary text-white"
                  : "bg-surface border border-line text-ink-muted hover:border-ink-muted hover:text-ink"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-ink-muted text-sm mb-6">{current.tagline}</p>
            <ul className="space-y-4">
              {current.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-revenue/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-revenue" />
                  </span>
                  <span className="text-[15px] text-ink leading-snug">{b}</span>
                </li>
              ))}
            </ul>
            {current.callout && (
              <div className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-4">
                <p className="text-primary font-semibold text-sm">
                  {current.callout}
                </p>
              </div>
            )}
          </div>

          <div>
            {Mockup ? (
              <Mockup />
            ) : (
              <div className="rounded-2xl border border-line bg-surface p-10 flex items-center justify-center min-h-[300px]">
                <div className="text-center space-y-2">
                  <p className="font-heading font-semibold text-ink text-sm">
                    Supervisor view
                  </p>
                  <p className="text-ink-muted text-[13px]">
                    QA queue, data uploads and coaching records
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
