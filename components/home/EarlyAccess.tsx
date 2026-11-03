import Link from "next/link";
import { Star, Map, Tag } from "lucide-react";

const perks = [
  { icon: Star, text: "Hands-on setup with the product team" },
  { icon: Map, text: "Direct input into the product roadmap" },
  { icon: Tag, text: "Preferential pricing for founding customers" },
];

export default function EarlyAccess() {
  return (
    <section className="py-24 px-6 bg-surface-alt border-y border-line">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Early access
          </p>
          <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-ink leading-tight mb-4">
            Become a founding customer.
          </h2>
          <p className="text-ink-muted text-lg leading-relaxed mb-10">
            We're onboarding a small number of contact centres for a guided
            pilot. Founding customers get hands-on setup, input into the
            roadmap and preferential pricing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            {perks.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.text}
                  className="flex items-center gap-2.5 bg-surface rounded-xl border border-line px-4 py-3"
                >
                  <Icon className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-medium text-ink">{p.text}</span>
                </div>
              );
            })}
          </div>

          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-[#1840b8] transition-colors min-h-[48px]"
          >
            Apply for the pilot
          </Link>
        </div>
      </div>
    </section>
  );
}
