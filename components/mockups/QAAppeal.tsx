"use client";
import { Play, Clock, CheckCircle2, AlertCircle, Minus } from "lucide-react";
import MockupFrame from "./MockupFrame";

const timeline = [
  { status: "Submitted", date: "28 Oct 2026 · 09:14", active: true, done: true },
  { status: "Under review", date: "29 Oct 2026 · 11:30", active: true, done: true },
  { status: "Partially upheld", date: "30 Oct 2026 · 14:55", active: true, done: false },
];

export default function QAAppeal() {
  return (
    <MockupFrame>
      <div className="p-4 space-y-4 text-[13px]">
        <div className="flex items-center justify-between">
          <p className="font-heading font-semibold text-ink text-sm">
            QA appeal — Fatima Mohammed
          </p>
          <span className="text-[11px] bg-accent/15 text-[#b07820] font-semibold px-2 py-0.5 rounded-full">
            Partially upheld
          </span>
        </div>

        {/* Disputed criterion */}
        <div className="bg-surface-alt rounded-xl border border-line p-3 space-y-2">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
            Disputed criterion
          </p>
          <p className="text-ink font-medium">
            Empathy and active listening — Q3: Did the agent acknowledge the customer's concern?
          </p>
          <div className="flex items-center gap-4 mt-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-ink-muted">Original score:</span>
              <span className="tabular font-semibold text-risk line-through">0 / 5</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-ink-muted">Revised score:</span>
              <span className="tabular font-semibold text-revenue">3 / 5</span>
            </div>
          </div>
        </div>

        {/* Agent's reason */}
        <div className="space-y-1">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
            Agent's reason
          </p>
          <p className="text-ink text-[12px] leading-relaxed">
            "I did acknowledge the customer's concern at 2:14 in the call. The evaluator may have missed it as the customer spoke over me briefly."
          </p>
        </div>

        {/* Audio player */}
        <div className="bg-surface rounded-xl border border-line p-3 space-y-2">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
            Call recording
          </p>
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
              <Play className="w-3.5 h-3.5 text-white ml-0.5" />
            </button>
            {/* Waveform */}
            <svg
              viewBox="0 0 200 28"
              className="flex-1 h-7"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {Array.from({ length: 40 }).map((_, i) => {
                const h = [8, 14, 20, 12, 24, 16, 8, 18, 22, 10, 14, 20, 8, 24, 12, 16, 20, 14, 8, 22, 18, 12, 24, 10, 16, 20, 8, 14, 22, 12, 18, 24, 10, 16, 8, 20, 14, 22, 12, 18][i];
                const isPlayed = i < 17;
                return (
                  <rect
                    key={i}
                    x={i * 5 + 1}
                    y={(28 - h) / 2}
                    width="3"
                    height={h}
                    rx="1.5"
                    fill={isPlayed ? "#1f4fd8" : "#e2e7ed"}
                  />
                );
              })}
            </svg>
            <div className="flex items-center gap-1 text-[11px] tabular text-ink-muted shrink-0">
              <Clock className="w-3 h-3" />
              <span>2:14 / 5:38</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-2">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
            Decision trail
          </p>
          <div className="space-y-2">
            {timeline.map((t, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0">
                  {t.done && i < timeline.length - 1 ? (
                    <CheckCircle2 className="w-4 h-4 text-revenue" />
                  ) : i === timeline.length - 1 ? (
                    <AlertCircle className="w-4 h-4 text-accent" />
                  ) : (
                    <Minus className="w-4 h-4 text-line" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-ink text-[12px]">{t.status}</p>
                  <p className="text-ink-muted text-[10px]">{t.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}
