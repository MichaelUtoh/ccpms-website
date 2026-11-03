"use client";
import { TrendingUp, Users, CheckCircle2 } from "lucide-react";
import MockupFrame from "./MockupFrame";
import { useInView } from "@/hooks/useInView";

const kpis = [
  { label: "QA Score", value: "87%", target: "≥85%", color: "revenue", bar: 87 },
  { label: "AHT", value: "5:42", target: "Target range", color: "revenue", bar: 74 },
  { label: "CSAT", value: "91%", target: "≥88%", color: "revenue", bar: 91 },
  { label: "Adherence", value: "94%", target: "≥90%", color: "revenue", bar: 94 },
];

const agents = [
  { name: "Adaeze Okafor", qa: 92, aht: "5:21", csat: 94, band: "Excellent", sales: "₦840k" },
  { name: "Emeka Nwosu", qa: 88, aht: "5:38", csat: 91, band: "Good", sales: "₦620k" },
  { name: "Ngozi Eze", qa: 85, aht: "5:55", csat: 89, band: "Good", sales: "₦510k" },
  { name: "Babatunde Adeyemi", qa: 79, aht: "6:12", csat: 85, band: "Developing", sales: "₦390k" },
];

const bandColors: Record<string, string> = {
  Excellent: "bg-revenue/10 text-revenue",
  Good: "bg-primary/10 text-primary",
  Developing: "bg-accent/15 text-[#b07820]",
};

type KpiColors = "revenue" | "accent";
const kpiBarColor: Record<KpiColors, string> = {
  revenue: "bg-revenue",
  accent: "bg-accent",
};

export default function ManagerDashboard() {
  const { ref, inView } = useInView();

  return (
    <MockupFrame>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="p-4 bg-surface-alt space-y-4 text-[13px]"
      >
        {/* Header row */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-heading font-semibold text-ink text-sm">
              Team Dashboard
            </p>
            <p className="text-ink-muted text-[11px]">November 2026 · All agents</p>
          </div>
          <div className="flex items-center gap-1.5 bg-revenue/10 border border-revenue/20 rounded-lg px-3 py-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-revenue" />
            <span className="text-revenue font-semibold text-[11px] tabular">
              ₦48.2M verified revenue
            </span>
          </div>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-4 gap-2">
          {kpis.map((k) => (
            <div
              key={k.label}
              className="bg-surface rounded-xl border border-line p-3 space-y-1.5"
            >
              <p className="text-ink-muted text-[10px] uppercase tracking-wide font-medium">
                {k.label}
              </p>
              <p className="font-heading font-bold text-base text-ink tabular">
                {k.value}
              </p>
              <div className="h-1.5 rounded-full bg-line overflow-hidden">
                <div
                  className={`h-full rounded-full ${kpiBarColor[k.color as KpiColors] ?? "bg-revenue"} transition-all duration-700`}
                  style={{
                    width: inView ? `${k.bar}%` : "0%",
                  }}
                />
              </div>
              <p className="text-ink-muted/70 text-[10px]">{k.target}</p>
            </div>
          ))}
        </div>

        {/* Sparkline revenue card */}
        <div className="bg-surface rounded-xl border border-revenue/20 p-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-revenue shrink-0" />
            <div>
              <p className="text-[10px] text-ink-muted font-medium uppercase tracking-wide">
                Verified revenue this month
              </p>
              <p className="font-heading font-bold text-lg text-revenue tabular">
                ₦48.2M
              </p>
            </div>
          </div>
          {/* Mini sparkline */}
          <svg
            viewBox="0 0 80 28"
            className="w-20 h-7 shrink-0"
            fill="none"
            aria-hidden="true"
          >
            <polyline
              points="0,22 13,18 26,20 39,14 52,10 65,6 80,2"
              stroke="#0e9f6e"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Agent table */}
        <div className="bg-surface rounded-xl border border-line overflow-hidden">
          <div className="grid grid-cols-5 text-[10px] font-semibold uppercase tracking-wide text-ink-muted px-3 py-2 border-b border-line bg-surface-alt">
            <span className="col-span-2">Agent</span>
            <span className="text-right">QA</span>
            <span className="text-right">CSAT</span>
            <span className="text-right">Sales</span>
          </div>
          {agents.map((a, i) => (
            <div
              key={a.name}
              className={`grid grid-cols-5 items-center px-3 py-2 ${
                i < agents.length - 1 ? "border-b border-line" : ""
              }`}
            >
              <div className="col-span-2 flex items-center gap-2">
                <Users className="w-3 h-3 text-ink-muted shrink-0" />
                <span className="text-ink font-medium truncate">{a.name}</span>
                <span
                  className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${bandColors[a.band]}`}
                >
                  {a.band}
                </span>
              </div>
              <span className="text-right tabular text-ink">{a.qa}%</span>
              <span className="text-right tabular text-ink">{a.csat}%</span>
              <span className="text-right tabular text-revenue font-medium">
                {a.sales}
              </span>
            </div>
          ))}
        </div>
      </div>
    </MockupFrame>
  );
}
