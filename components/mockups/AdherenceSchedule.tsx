import MockupFrame from "./MockupFrame";

type AdherenceStatus = "On time" | "Late" | "Early departure";

const rows: {
  agent: string;
  shift: string;
  login: string;
  logout: string;
  pct: number;
  status: AdherenceStatus;
}[] = [
  { agent: "Adaeze Okafor", shift: "08:00–17:00", login: "07:58", logout: "17:03", pct: 98, status: "On time" },
  { agent: "Emeka Nwosu", shift: "08:00–17:00", login: "08:14", logout: "17:01", pct: 91, status: "Late" },
  { agent: "Ngozi Eze", shift: "09:00–18:00", login: "09:02", logout: "17:45", pct: 87, status: "Early departure" },
  { agent: "Babatunde Adeyemi", shift: "08:00–17:00", login: "07:55", logout: "17:05", pct: 99, status: "On time" },
  { agent: "Fatima Mohammed", shift: "09:00–18:00", login: "09:18", logout: "18:01", pct: 89, status: "Late" },
];

const statusStyle: Record<AdherenceStatus, string> = {
  "On time": "bg-revenue/10 text-revenue",
  "Late": "bg-accent/15 text-[#b07820]",
  "Early departure": "bg-risk/10 text-risk",
};

export default function AdherenceSchedule() {
  return (
    <MockupFrame>
      <div className="p-4 space-y-3 text-[13px]">
        <div className="flex items-center justify-between">
          <p className="font-heading font-semibold text-ink text-sm">
            Adherence — 1 November 2026
          </p>
          <span className="text-[11px] text-ink-muted">Team avg: 92.8%</span>
        </div>

        <div className="rounded-xl border border-line overflow-hidden">
          <div className="grid grid-cols-12 text-[10px] font-semibold uppercase tracking-wide text-ink-muted px-3 py-2 bg-surface-alt border-b border-line">
            <span className="col-span-3">Agent</span>
            <span className="col-span-2 text-center">Scheduled</span>
            <span className="col-span-2 text-center">Login</span>
            <span className="col-span-2 text-center">Logout</span>
            <span className="col-span-1 text-right">%</span>
            <span className="col-span-2 text-right">Status</span>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.agent}
              className={`grid grid-cols-12 items-center px-3 py-2.5 ${
                i < rows.length - 1 ? "border-b border-line/50" : ""
              }`}
            >
              <span className="col-span-3 font-medium text-ink text-[12px] truncate">
                {r.agent.split(" ")[0]}
              </span>
              <span className="col-span-2 text-center tabular text-ink-muted text-[11px]">
                {r.shift.split("–")[0]}
              </span>
              <span className={`col-span-2 text-center tabular text-[11px] ${r.status === "Late" ? "text-accent font-medium" : "text-ink"}`}>
                {r.login}
              </span>
              <span className={`col-span-2 text-center tabular text-[11px] ${r.status === "Early departure" ? "text-risk font-medium" : "text-ink"}`}>
                {r.logout}
              </span>
              <span className="col-span-1 text-right tabular text-[12px] font-semibold text-ink">
                {r.pct}%
              </span>
              <div className="col-span-2 flex justify-end">
                <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full whitespace-nowrap ${statusStyle[r.status]}`}>
                  {r.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[10px] text-ink-muted">
          Data uploaded via spreadsheet · Next upload window: 02 Nov 2026
        </p>
      </div>
    </MockupFrame>
  );
}
