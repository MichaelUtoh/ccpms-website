"use client";
import { GripVertical, ChevronDown } from "lucide-react";
import MockupFrame from "./MockupFrame";

const metrics = [
  {
    name: "QA Score",
    weight: 35,
    direction: "Higher is better",
    bands: [
      { label: "Excellent", min: 90, color: "bg-revenue" },
      { label: "Good", min: 80, color: "bg-primary" },
      { label: "Developing", min: 70, color: "bg-accent" },
      { label: "Below target", min: 0, color: "bg-risk" },
    ],
  },
  {
    name: "AHT",
    weight: 15,
    direction: "Target range",
    bands: [
      { label: "Excellent", min: 300, color: "bg-revenue" },
      { label: "Good", min: 270, color: "bg-primary" },
      { label: "Developing", min: 240, color: "bg-accent" },
      { label: "Below target", min: 0, color: "bg-risk" },
    ],
  },
  { name: "Adherence", weight: 15, direction: "Higher is better", bands: [] },
  { name: "Knowledge test", weight: 10, direction: "Higher is better", bands: [] },
  { name: "CSAT", weight: 15, direction: "Higher is better", bands: [] },
  { name: "Verified sales", weight: 10, direction: "Higher is better", bands: [] },
];

const total = metrics.reduce((s, m) => s + m.weight, 0);

export default function ScorecardBuilder() {
  return (
    <MockupFrame>
      <div className="p-4 space-y-3 text-[13px]">
        <div className="flex items-center justify-between">
          <p className="font-heading font-semibold text-ink text-sm">
            Scorecard builder
          </p>
          <span
            className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
              total === 100
                ? "bg-revenue/10 text-revenue"
                : "bg-risk/10 text-risk"
            }`}
          >
            Total: {total}%
          </span>
        </div>

        {/* Column headers */}
        <div className="grid grid-cols-12 text-[10px] font-semibold uppercase tracking-wide text-ink-muted pb-1 border-b border-line">
          <span className="col-span-1" />
          <span className="col-span-4">Metric</span>
          <span className="col-span-2 text-center">Weight</span>
          <span className="col-span-5">Scoring direction</span>
        </div>

        {metrics.map((m) => (
          <div
            key={m.name}
            className="grid grid-cols-12 items-center gap-1 py-1.5 border-b border-line/50 last:border-0"
          >
            <GripVertical className="col-span-1 w-3.5 h-3.5 text-line cursor-grab" />
            <span className="col-span-4 text-ink font-medium">{m.name}</span>
            <div className="col-span-2 flex justify-center">
              <div className="w-14 h-7 border border-line rounded-lg bg-surface-alt flex items-center justify-center tabular text-[12px] font-semibold text-primary">
                {m.weight}%
              </div>
            </div>
            <div className="col-span-5 flex items-center gap-1">
              <div className="flex-1 h-7 border border-line rounded-lg bg-surface-alt flex items-center justify-between px-2 text-[11px] text-ink-muted">
                {m.direction}
                <ChevronDown className="w-3 h-3" />
              </div>
            </div>

            {/* Bands preview for first metric */}
            {m.bands.length > 0 && (
              <div className="col-span-11 col-start-2 mt-1 flex gap-1">
                {m.bands.map((b) => (
                  <div
                    key={b.label}
                    className="flex-1 rounded-md overflow-hidden"
                  >
                    <div className={`h-1 ${b.color}`} />
                    <p className="text-[9px] text-ink-muted text-center mt-0.5">
                      {b.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <p className="text-[10px] text-ink-muted text-right">
          Weights must add to 100% before saving
        </p>
      </div>
    </MockupFrame>
  );
}
