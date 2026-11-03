import { X, Check } from "lucide-react";
import brand from "@/lib/brand";

const before = [
  "Monthly scorecard builds in Excel",
  "Disputed QA scores with no trail",
  "Unverified sales invisible to leadership",
  "Fixed formulas you can't change",
  "Manual totals no one trusts",
];

const after = [
  "One system of record for every metric",
  "Evidence-based appeals with call audio",
  "Supervisor-verified revenue on every report",
  "Fully configurable metrics, weights and bands",
  "Validated data, no duplicates, no gaps",
];

export default function Shift() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-xl mb-14">
          <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-ink leading-tight">
            From cost centre to revenue contributor.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Before */}
          <div className="rounded-2xl border border-line bg-surface-alt p-8 space-y-5">
            <p className="font-heading font-semibold text-ink-muted text-sm uppercase tracking-wider">
              Before
            </p>
            <ul className="space-y-4">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-risk/10 flex items-center justify-center shrink-0">
                    <X className="w-3 h-3 text-risk" />
                  </span>
                  <span className="text-ink-muted text-[15px] leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-8 space-y-5">
            <p className="font-heading font-semibold text-primary text-sm uppercase tracking-wider">
              With {brand.BRAND}
            </p>
            <ul className="space-y-4">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-revenue/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-revenue" />
                  </span>
                  <span className="text-ink text-[15px] leading-snug font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
