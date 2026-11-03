"use client";
import { Check, RotateCcw, XCircle, ChevronDown } from "lucide-react";
import MockupFrame from "./MockupFrame";

type StatusKey = "Submitted" | "Pending" | "Verified" | "Rejected";

const statusStyle: Record<StatusKey, string> = {
  Submitted: "bg-line text-ink-muted",
  Pending: "bg-accent/15 text-[#b07820]",
  Verified: "bg-revenue/10 text-revenue",
  Rejected: "bg-risk/10 text-risk",
};

const submissions = [
  {
    agent: "Adaeze Okafor",
    product: "Premium savings account",
    amount: "₦120,000",
    date: "31 Oct 2026",
    status: "Verified" as StatusKey,
    expanded: false,
  },
  {
    agent: "Emeka Nwosu",
    product: "Mobile data bundle",
    amount: "₦45,000",
    date: "31 Oct 2026",
    status: "Pending" as StatusKey,
    expanded: true,
    response: "Customer confirmed upgrade on the call. Reference: TXN-2910841.",
  },
  {
    agent: "Ngozi Eze",
    product: "Insurance top-up",
    amount: "₦85,000",
    date: "30 Oct 2026",
    status: "Submitted" as StatusKey,
    expanded: false,
  },
  {
    agent: "Kelechi Nwachukwu",
    product: "Credit card upgrade",
    amount: "₦200,000",
    date: "30 Oct 2026",
    status: "Rejected" as StatusKey,
    expanded: false,
  },
];

export default function SalesVerificationQueue() {
  return (
    <MockupFrame>
      <div className="p-4 space-y-3 text-[13px]">
        <div className="flex items-center justify-between mb-1">
          <p className="font-heading font-semibold text-ink text-sm">
            Sales verification queue
          </p>
          <span className="text-[11px] text-ink-muted">
            4 submissions · November 2026
          </span>
        </div>

        {submissions.map((s, i) => (
          <div
            key={i}
            className="border border-line rounded-xl overflow-hidden bg-surface"
          >
            <div className="flex items-center justify-between px-3 py-2.5 gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-ink truncate">{s.agent}</span>
                  <span
                    className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full shrink-0 ${statusStyle[s.status]}`}
                  >
                    {s.status}
                  </span>
                </div>
                <p className="text-ink-muted text-[11px] mt-0.5 truncate">
                  {s.product} · {s.date}
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="font-heading font-semibold tabular text-ink">
                  {s.amount}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-ink-muted ${s.expanded ? "rotate-180" : ""}`}
                />
              </div>
            </div>

            {s.expanded && s.response && (
              <div className="border-t border-line bg-surface-alt px-3 py-3 space-y-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted mb-1">
                    Customer response
                  </p>
                  <p className="text-ink text-[12px] leading-relaxed">
                    {s.response}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 bg-revenue text-white rounded-lg text-[11px] font-semibold hover:bg-revenue/90 transition-colors">
                    <Check className="w-3 h-3" /> Verify
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 border border-accent text-[#b07820] rounded-lg text-[11px] font-semibold hover:bg-accent/5 transition-colors">
                    <RotateCcw className="w-3 h-3" /> Return
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 border border-risk/40 text-risk rounded-lg text-[11px] font-semibold hover:bg-risk/5 transition-colors">
                    <XCircle className="w-3 h-3" /> Reject
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </MockupFrame>
  );
}
