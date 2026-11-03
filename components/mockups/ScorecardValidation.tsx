"use client";
import { CheckCircle2, Clock, FileText, Edit2 } from "lucide-react";
import MockupFrame from "./MockupFrame";

const agents = [
  { name: "Adaeze Okafor", status: "Finalised", score: 91 },
  { name: "Emeka Nwosu", status: "Pending validation", score: 87 },
  { name: "Ngozi Eze", status: "Pending validation", score: 84 },
  { name: "Babatunde Adeyemi", status: "Draft", score: 78 },
];

type StatusKey = "Finalised" | "Pending validation" | "Draft";

const statusStyle: Record<StatusKey, { cls: string; icon: typeof CheckCircle2 }> = {
  Finalised: { cls: "bg-revenue/10 text-revenue", icon: CheckCircle2 },
  "Pending validation": { cls: "bg-accent/15 text-[#b07820]", icon: Clock },
  Draft: { cls: "bg-line text-ink-muted", icon: FileText },
};

const auditLog = [
  {
    user: "Supervisor · Chidinma Obi",
    action: "AHT corrected from 6:10 to 5:48",
    reason: "Duplicate upload removed from batch.",
    time: "30 Oct 2026 · 16:22",
    type: "correction",
  },
  {
    user: "Manager · Ibrahim Suleiman",
    action: "Scorecard finalised — Adaeze Okafor",
    reason: "",
    time: "31 Oct 2026 · 09:05",
    type: "finalised",
  },
];

export default function ScorecardValidation() {
  return (
    <MockupFrame>
      <div className="p-4 space-y-4 text-[13px]">
        <div className="flex items-center justify-between">
          <p className="font-heading font-semibold text-ink text-sm">
            Scorecard validation — November 2026
          </p>
        </div>

        {/* Status pipeline visual */}
        <div className="flex items-center gap-1 text-[10px] font-semibold">
          {(["Draft", "Pending validation", "Finalised"] as StatusKey[]).map(
            (s, i, arr) => (
              <div key={s} className="flex items-center gap-1">
                <span
                  className={`px-2 py-1 rounded-full ${statusStyle[s].cls}`}
                >
                  {s}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-line">→</span>
                )}
              </div>
            )
          )}
        </div>

        {/* Agent rows */}
        <div className="rounded-xl border border-line overflow-hidden">
          {agents.map((a, i) => {
            const s = statusStyle[a.status as StatusKey];
            const Icon = s.icon;
            return (
              <div
                key={a.name}
                className={`flex items-center justify-between px-3 py-2.5 gap-3 ${
                  i < agents.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5 text-ink-muted shrink-0" />
                  <span className="font-medium text-ink">{a.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="tabular text-ink-muted text-[12px]">
                    {a.score}%
                  </span>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${s.cls}`}
                  >
                    {a.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Audit log */}
        <div className="space-y-2">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
            Audit log
          </p>
          <div className="space-y-2">
            {auditLog.map((entry, i) => (
              <div
                key={i}
                className="flex gap-2 bg-surface-alt rounded-xl border border-line p-3"
              >
                <Edit2 className="w-3.5 h-3.5 text-ink-muted mt-0.5 shrink-0" />
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium text-ink text-[12px]">
                      {entry.action}
                    </span>
                    {entry.type === "correction" && (
                      <span className="text-[9px] bg-accent/15 text-[#b07820] font-semibold px-1.5 py-0.5 rounded-full">
                        Correction
                      </span>
                    )}
                  </div>
                  {entry.reason && (
                    <p className="text-ink-muted text-[11px] mt-0.5">
                      Reason: {entry.reason}
                    </p>
                  )}
                  <p className="text-ink-muted/60 text-[10px] mt-0.5">
                    {entry.user} · {entry.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}
