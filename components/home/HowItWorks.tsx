"use client";
import {
  Settings2,
  Database,
  ClipboardCheck,
  BadgeDollarSign,
  ShieldCheck,
  MessageCircle,
  CheckSquare,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    icon: Settings2,
    title: "Configure metrics",
    desc: "Set KPIs, targets, weights and performance bands to your policy.",
  },
  {
    icon: Database,
    title: "Capture data",
    desc: "Upload spreadsheets, connect via API or enter directly.",
  },
  {
    icon: ClipboardCheck,
    title: "Evaluate QA",
    desc: "Supervisors complete evaluations using your existing QA form.",
  },
  {
    icon: BadgeDollarSign,
    title: "Record sales",
    desc: "Agents log every cross-sell and upsell activity.",
  },
  {
    icon: ShieldCheck,
    title: "Verify results",
    desc: "Supervisors confirm outcomes. Only verified sales count.",
  },
  {
    icon: MessageCircle,
    title: "Coach agents",
    desc: "Schedule sessions, record notes and track improvement.",
  },
  {
    icon: CheckSquare,
    title: "Validate scorecards",
    desc: "Managers approve monthly scorecards before they are finalised.",
  },
];

export default function HowItWorks() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="how-it-works" className="py-24 px-6 bg-surface-alt border-y border-line">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-xl mb-14">
          <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-ink leading-tight">
            One cycle, from target to result.
          </h2>
        </div>

        {/* Stepper */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="relative"
        >
          {/* Progress line — desktop */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-0.5 bg-line z-0">
            <div
              className="h-full bg-primary transition-all duration-[1400ms] ease-out"
              style={{ width: inView ? "100%" : "0%" }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 lg:gap-4 relative z-10">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="flex flex-col items-center text-center gap-3"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 0.4s ease ${i * 80}ms, transform 0.4s ease ${i * 80}ms`,
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-surface border-2 border-primary flex items-center justify-center z-10 shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-[13px] text-ink leading-tight">
                      {s.title}
                    </p>
                    <p className="text-ink-muted text-[12px] mt-1 leading-snug hidden lg:block">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile descriptions */}
          <div className="lg:hidden mt-8 space-y-3">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="flex items-start gap-3 p-4 bg-surface rounded-xl border border-line">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm">
                      {i + 1}. {s.title}
                    </p>
                    <p className="text-ink-muted text-[13px] mt-0.5">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
