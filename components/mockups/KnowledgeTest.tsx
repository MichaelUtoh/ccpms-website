"use client";
import { CheckCircle2, Clock } from "lucide-react";
import MockupFrame from "./MockupFrame";
import { useInView } from "@/hooks/useInView";

const options = [
  { text: "The agent should apologise and end the call", correct: false },
  { text: "Acknowledge the concern, then offer a resolution pathway", correct: true },
  { text: "Transfer immediately to a supervisor", correct: false },
  { text: "Ask the customer to call back later", correct: false },
];

export default function KnowledgeTest() {
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
              Knowledge assessment
            </p>
            <p className="text-ink-muted text-[11px]">Customer handling — November 2026</p>
          </div>
          <div className="flex items-center gap-1.5 text-ink-muted text-[11px]">
            <Clock className="w-3.5 h-3.5" />
            <span>8:42 remaining</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] text-ink-muted">
            <span>Question 3 of 10</span>
            <span>30% complete</span>
          </div>
          <div className="h-1.5 rounded-full bg-line overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-700"
              style={{ width: inView ? "30%" : "0%" }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="bg-surface-alt rounded-xl border border-line p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted mb-2">
            Question 3
          </p>
          <p className="text-ink text-[13px] font-medium leading-snug">
            A customer calls to dispute a charge and becomes frustrated. What is the correct first response?
          </p>
        </div>

        {/* Options */}
        <div className="space-y-2">
          {options.map((o, i) => (
            <div
              key={i}
              className={`flex items-start gap-2.5 p-3 rounded-xl border transition-colors ${
                o.correct
                  ? "border-revenue/30 bg-revenue/5"
                  : "border-line bg-surface"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 mt-0.5 shrink-0 flex items-center justify-center ${
                  o.correct
                    ? "border-revenue bg-revenue"
                    : "border-line"
                }`}
              >
                {o.correct && (
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                )}
              </div>
              <span
                className={`text-[12px] leading-snug ${
                  o.correct ? "text-ink font-medium" : "text-ink-muted"
                }`}
              >
                {o.text}
              </span>
            </div>
          ))}
        </div>

        {/* Score summary */}
        <div className="flex items-center gap-3 bg-surface-alt rounded-xl border border-line p-3">
          <CheckCircle2 className="w-4 h-4 text-revenue shrink-0" />
          <div className="flex gap-6">
            <div>
              <p className="text-[10px] text-ink-muted">Latest score</p>
              <p className="font-heading font-bold text-ink tabular">78%</p>
            </div>
            <div>
              <p className="text-[10px] text-ink-muted">Best score</p>
              <p className="font-heading font-bold text-revenue tabular">91%</p>
            </div>
            <div>
              <p className="text-[10px] text-ink-muted">Target</p>
              <p className="font-heading font-bold text-ink tabular">80%</p>
            </div>
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}
