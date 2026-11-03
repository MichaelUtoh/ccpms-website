import { MessageSquare, TrendingUp, AlertTriangle } from "lucide-react";
import MockupFrame from "./MockupFrame";

export default function CoachingSession() {
  return (
    <MockupFrame>
      <div className="p-4 space-y-4 text-[13px]">
        <div className="flex items-center justify-between">
          <p className="font-heading font-semibold text-ink text-sm">
            Coaching record
          </p>
          <span className="text-[11px] bg-accent/15 text-[#b07820] font-semibold px-2 py-0.5 rounded-full">
            PIP active
          </span>
        </div>

        {/* Session header */}
        <div className="bg-surface-alt rounded-xl border border-line p-3 space-y-2">
          <div className="flex justify-between items-start gap-2">
            <div>
              <p className="font-medium text-ink">Babatunde Adeyemi</p>
              <p className="text-ink-muted text-[11px]">
                Session 2 of 3 · 29 Oct 2026
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-ink-muted">Supervisor</p>
              <p className="text-[12px] font-medium text-ink">Chidinma Obi</p>
            </div>
          </div>
          <div className="flex items-center gap-2 pt-1 border-t border-line">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
              Topic:
            </span>
            <span className="text-[12px] text-ink">
              QA score improvement — empathy and resolution
            </span>
          </div>
        </div>

        {/* Notes */}
        <div className="space-y-1.5">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted flex items-center gap-1.5">
            <MessageSquare className="w-3 h-3" />
            Session notes
          </p>
          <div className="bg-surface rounded-xl border border-line p-3 text-[12px] text-ink leading-relaxed">
            Agent acknowledged issue with empathy statements. Practised using
            structured acknowledgement phrases. Agreed to self-review 3 calls
            this week using the QA checklist before next session.
          </div>
        </div>

        {/* Target metric */}
        <div className="flex items-center gap-3 bg-surface-alt rounded-xl border border-line p-3">
          <TrendingUp className="w-4 h-4 text-primary shrink-0" />
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <p className="text-[11px] font-semibold text-ink">
                QA target: 80% by end of November
              </p>
              <span className="text-[11px] tabular text-ink-muted">
                Current: 75%
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-line overflow-hidden">
              <div
                className="h-full rounded-full bg-accent"
                style={{ width: "75%" }}
              />
            </div>
          </div>
        </div>

        {/* PIP status */}
        <div className="flex items-start gap-2 bg-risk/5 border border-risk/20 rounded-xl p-3">
          <AlertTriangle className="w-3.5 h-3.5 text-risk mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold text-ink text-[12px]">
              Improvement plan active
            </p>
            <p className="text-ink-muted text-[11px] mt-0.5">
              Review date: 30 November 2026 · Approved by: Ibrahim Suleiman
            </p>
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}
