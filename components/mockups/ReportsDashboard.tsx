"use client";
import { Download, CheckCircle2, TrendingUp, Users } from "lucide-react";
import MockupFrame from "./MockupFrame";
import { useInView } from "@/hooks/useInView";

const stats = [
  { label: "Team QA average", value: "87%", delta: "+2.4pp", positive: true },
  { label: "Verified revenue", value: "₦48.2M", delta: "+₦6.1M", positive: true },
  { label: "Agents reviewed", value: "24 / 24", delta: "100%", positive: true },
];

export default function ReportsDashboard() {
  const { ref, inView } = useInView();

  return (
    <MockupFrame>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="p-4 space-y-4 text-[13px]"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-heading font-semibold text-ink text-sm">
              Monthly performance report
            </p>
            <p className="text-ink-muted text-[11px]">November 2026</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] bg-revenue/10 text-revenue font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Finalised
            </span>
            <button className="w-7 h-7 rounded-lg border border-line flex items-center justify-center text-ink-muted hover:text-ink transition-colors">
              <Download className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-2">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="bg-surface rounded-xl border border-line p-3 space-y-1.5"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(8px)",
                transition: `opacity 0.4s ease ${i * 100}ms, transform 0.4s ease ${i * 100}ms`,
              }}
            >
              <p className="text-[10px] text-ink-muted uppercase tracking-wide font-medium leading-tight">
                {s.label}
              </p>
              <p className="font-heading font-bold text-base tabular text-ink">
                {s.value}
              </p>
              <p className={`text-[10px] font-semibold ${s.positive ? "text-revenue" : "text-risk"}`}>
                {s.delta} vs Oct
              </p>
            </div>
          ))}
        </div>

        {/* Section breakdown */}
        <div className="bg-surface-alt rounded-xl border border-line p-3 space-y-3">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
            Performance by section
          </p>
          {[
            { label: "QA & appeals", bar: 87, icon: CheckCircle2 },
            { label: "Sales & revenue", bar: 91, icon: TrendingUp },
            { label: "Attendance & adherence", bar: 93, icon: Users },
          ].map((row) => {
            const Icon = row.icon;
            return (
              <div key={row.label} className="space-y-1">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5">
                    <Icon className="w-3 h-3 text-ink-muted" />
                    <span className="text-[11px] text-ink">{row.label}</span>
                  </div>
                  <span className="tabular text-[11px] font-semibold text-ink">{row.bar}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-line overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-700"
                    style={{ width: inView ? `${row.bar}%` : "0%" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MockupFrame>
  );
}
