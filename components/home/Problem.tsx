import { Table2, EyeOff, MessageSquareWarning } from "lucide-react";

const problems = [
  {
    icon: Table2,
    title: "Scorecards built in spreadsheets.",
    body: "Every month, supervisors copy QA, AHT and CSAT into Excel. Errors creep in and no one trusts the totals.",
  },
  {
    icon: EyeOff,
    title: "Sales that no one can verify.",
    body: "Agents cross-sell and upsell every day, but without a record, that revenue is invisible to leadership.",
  },
  {
    icon: MessageSquareWarning,
    title: "QA scores that start arguments.",
    body: "Agents dispute evaluations, and there is no fair, evidence-based way to settle them.",
  },
];

export default function Problem() {
  return (
    <section className="bg-surface-alt py-24 px-6 border-y border-line">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-ink leading-tight mb-4">
            Your contact centre does more than answer calls.
            <span className="block text-ink-muted font-semibold">
              Can you prove it?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-surface rounded-2xl border border-line p-7 space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-risk/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-risk" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-ink leading-snug">
                  {p.title}
                </h3>
                <p className="text-ink-muted text-[15px] leading-relaxed">
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
