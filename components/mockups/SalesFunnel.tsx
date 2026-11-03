"use client";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import MockupFrame from "./MockupFrame";
import { useInView } from "@/hooks/useInView";

const stages = [
  {
    label: "Activities logged",
    count: 142,
    sub: "Agents submitted",
    color: "bg-primary/10 border-primary/20",
    text: "text-primary",
    width: "100%",
  },
  {
    label: "Verified opportunities",
    count: 96,
    sub: "Supervisor confirmed",
    color: "bg-accent/10 border-accent/20",
    text: "text-[#b07820]",
    width: "67.6%",
  },
  {
    label: "Verified conversions",
    count: 38,
    sub: "Revenue confirmed",
    color: "bg-revenue/10 border-revenue/20",
    text: "text-revenue",
    width: "26.8%",
  },
];

export default function SalesFunnel() {
  const { ref, inView } = useInView();

  return (
    <MockupFrame>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="p-5 space-y-4 text-[13px]"
      >
        <div className="flex items-center justify-between">
          <p className="font-heading font-semibold text-ink text-sm">
            Sales pipeline — November 2026
          </p>
          <div className="flex items-center gap-1.5 text-revenue text-[11px] font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            ₦6.4M verified revenue
          </div>
        </div>

        {/* Funnel bars */}
        <div className="space-y-3">
          {stages.map((s, i) => (
            <div key={s.label} className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-ink-muted text-[11px] font-medium">
                  {s.label}
                </span>
                <span className={`font-heading font-bold text-base tabular ${s.text}`}>
                  {s.count}
                </span>
              </div>
              <div className="h-8 rounded-lg bg-surface-alt border border-line overflow-hidden relative">
                <div
                  className={`h-full rounded-lg border ${s.color} flex items-center px-3 transition-all duration-700 delay-${i * 150}`}
                  style={{
                    width: inView ? s.width : "0%",
                    transitionDelay: `${i * 150}ms`,
                  }}
                >
                  <span className={`text-[11px] font-semibold ${s.text} whitespace-nowrap`}>
                    {s.sub}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conversion summary */}
        <div className="flex items-center justify-between bg-surface-alt rounded-xl border border-line px-4 py-3">
          <div className="text-center">
            <p className="text-[10px] text-ink-muted uppercase tracking-wide font-medium">
              Activities
            </p>
            <p className="font-heading font-bold text-lg text-primary tabular">142</p>
          </div>
          <ArrowRight className="w-4 h-4 text-ink-muted" />
          <div className="text-center">
            <p className="text-[10px] text-ink-muted uppercase tracking-wide font-medium">
              Opportunities
            </p>
            <p className="font-heading font-bold text-lg text-[#b07820] tabular">96</p>
          </div>
          <ArrowRight className="w-4 h-4 text-ink-muted" />
          <div className="text-center">
            <p className="text-[10px] text-ink-muted uppercase tracking-wide font-medium">
              Conversions
            </p>
            <p className="font-heading font-bold text-lg text-revenue tabular">38</p>
          </div>
          <ArrowRight className="w-4 h-4 text-ink-muted" />
          <div className="text-center">
            <p className="text-[10px] text-ink-muted uppercase tracking-wide font-medium">
              Revenue
            </p>
            <p className="font-heading font-bold text-lg text-revenue tabular">₦6.4M</p>
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}
