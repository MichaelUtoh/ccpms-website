"use client";
import { AlertTriangle, CheckCircle2, Upload } from "lucide-react";
import MockupFrame from "./MockupFrame";

const rows = [
  {
    agent: "Adaeze Okafor",
    date: "01 Nov 2026",
    aht: "5:21",
    calls: 42,
    error: null,
  },
  {
    agent: "EMP-99142",
    date: "01 Nov 2026",
    aht: "6:04",
    calls: 38,
    error: "Unknown agent ID",
  },
  {
    agent: "Ngozi Eze",
    date: "01 Nov 2026",
    aht: "5:55",
    calls: 39,
    error: null,
  },
  {
    agent: "Emeka Nwosu",
    date: "01 Nov 2026",
    aht: "5:38",
    calls: 41,
    error: "Duplicate record",
  },
  {
    agent: "Babatunde Adeyemi",
    date: "01 Nov 2026",
    aht: "6:12",
    calls: 35,
    error: null,
  },
];

const valid = rows.filter((r) => !r.error).length;

export default function UploadPreview() {
  return (
    <MockupFrame>
      <div className="p-4 space-y-3 text-[13px]">
        <div className="flex items-center justify-between">
          <p className="font-heading font-semibold text-ink text-sm">
            Upload preview — AHT data
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[11px] bg-risk/10 text-risk font-semibold px-2 py-0.5 rounded-full">
              2 issues
            </span>
          </div>
        </div>

        {/* File info */}
        <div className="flex items-center gap-2 bg-surface-alt border border-line rounded-lg px-3 py-2">
          <Upload className="w-3.5 h-3.5 text-ink-muted" />
          <span className="text-ink-muted text-[11px]">
            aht_november_2026.xlsx · 150 rows · uploaded now
          </span>
        </div>

        {/* Table */}
        <div className="rounded-xl border border-line overflow-hidden">
          <div className="grid grid-cols-12 text-[10px] font-semibold uppercase tracking-wide text-ink-muted px-3 py-2 bg-surface-alt border-b border-line">
            <span className="col-span-4">Agent</span>
            <span className="col-span-2">Date</span>
            <span className="col-span-2 text-right">AHT</span>
            <span className="col-span-2 text-right">Calls</span>
            <span className="col-span-2 text-right">Status</span>
          </div>
          {rows.map((r, i) => (
            <div
              key={i}
              className={`grid grid-cols-12 items-center px-3 py-2 border-b border-line/50 last:border-0 ${
                r.error ? "bg-risk/5" : ""
              }`}
            >
              <div className="col-span-4 flex items-center gap-1.5">
                {r.error && (
                  <AlertTriangle className="w-3 h-3 text-risk shrink-0" />
                )}
                <span
                  className={`font-medium truncate ${r.error ? "text-risk" : "text-ink"}`}
                >
                  {r.agent}
                </span>
              </div>
              <span className="col-span-2 text-ink-muted text-[11px]">
                {r.date}
              </span>
              <span className="col-span-2 text-right tabular text-ink">
                {r.aht}
              </span>
              <span className="col-span-2 text-right tabular text-ink">
                {r.calls}
              </span>
              <div className="col-span-2 flex justify-end">
                {r.error ? (
                  <span className="text-[9px] bg-risk/10 text-risk font-semibold px-1.5 py-0.5 rounded-full text-right leading-tight">
                    {r.error}
                  </span>
                ) : (
                  <CheckCircle2 className="w-3.5 h-3.5 text-revenue" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Confirm button */}
        <div className="flex items-center justify-between">
          <p className="text-ink-muted text-[11px]">
            2 rows will be skipped. Fix or proceed.
          </p>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-primary text-white rounded-lg text-[11px] font-semibold hover:bg-[#1840b8] transition-colors">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Confirm import ({valid} valid rows)
          </button>
        </div>
      </div>
    </MockupFrame>
  );
}
