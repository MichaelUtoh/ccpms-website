"use client";
import { CheckCircle2, MessageSquare, AlertCircle } from "lucide-react";
import MockupFrame from "./MockupFrame";
import { useInView } from "@/hooks/useInView";

const metrics = [
  { label: "QA Score", value: 88, target: 85, color: "#0e9f6e", track: "#e2e7ed" },
  { label: "CSAT", value: 91, target: 88, color: "#0e9f6e", track: "#e2e7ed" },
  { label: "Adherence", value: 92, target: 90, color: "#0e9f6e", track: "#e2e7ed" },
  { label: "Knowledge", value: 76, target: 80, color: "#f2a93b", track: "#e2e7ed" },
];

function Ring({
  value,
  target,
  label,
  color,
  inView,
}: {
  value: number;
  target: number;
  label: string;
  color: string;
  inView: boolean;
}) {
  const r = 22;
  const circ = 2 * Math.PI * r;
  const progress = inView ? (value / 100) * circ : 0;

  return (
    <div className="flex flex-col items-center gap-1.5">
      <svg width="56" height="56" viewBox="0 0 56 56" className="-rotate-90">
        <circle
          cx="28"
          cy="28"
          r={r}
          fill="none"
          stroke="#e2e7ed"
          strokeWidth="5"
        />
        <circle
          cx="28"
          cy="28"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={`${progress} ${circ}`}
          style={{ transition: "stroke-dasharray 0.8s ease" }}
        />
      </svg>
      <div className="text-center -mt-12 mb-6">
        <p
          className="font-heading font-bold text-sm tabular"
          style={{ color }}
        >
          {value}%
        </p>
      </div>
      <p className="text-[10px] text-ink-muted text-center leading-tight">
        {label}
        <br />
        <span className="text-[9px]">Target {target}%</span>
      </p>
    </div>
  );
}

export default function AgentDashboard() {
  const { ref, inView } = useInView();

  return (
    <MockupFrame>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="p-4 space-y-4 text-[13px]"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="font-heading font-semibold text-ink text-sm">
              My performance
            </p>
            <p className="text-ink-muted text-[11px]">
              Adaeze Okafor · November 2026
            </p>
          </div>
          <span className="text-[11px] bg-revenue/10 text-revenue font-semibold px-2 py-0.5 rounded-full">
            On track
          </span>
        </div>

        {/* Progress rings */}
        <div className="grid grid-cols-4 gap-2 py-2">
          {metrics.map((m) => (
            <Ring
              key={m.label}
              value={m.value}
              target={m.target}
              label={m.label}
              color={m.color}
              inView={inView}
            />
          ))}
        </div>

        {/* Sales card */}
        <div className="bg-revenue/5 border border-revenue/20 rounded-xl p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-revenue" />
            <div>
              <p className="font-semibold text-ink text-[12px]">My verified sales</p>
              <p className="text-ink-muted text-[10px]">9 of 12 submitted verified</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-heading font-bold text-revenue tabular text-sm">9</p>
            <p className="text-[10px] text-ink-muted">verified</p>
          </div>
        </div>

        {/* Latest QA */}
        <div className="bg-surface-alt rounded-xl border border-line p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-ink-muted" />
            <div>
              <p className="font-medium text-ink text-[12px]">
                Latest QA evaluation
              </p>
              <p className="text-ink-muted text-[10px]">30 Oct 2026 · 88 / 100</p>
            </div>
          </div>
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-primary text-primary rounded-lg text-[11px] font-semibold hover:bg-primary/5 transition-colors">
            <MessageSquare className="w-3 h-3" />
            Appeal
          </button>
        </div>
      </div>
    </MockupFrame>
  );
}
