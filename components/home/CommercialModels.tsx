import Link from "next/link";
import { Cloud, Server } from "lucide-react";

export default function CommercialModels() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Pricing
          </p>
          <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-ink leading-tight">
            Subscribe, or licence it outright.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          {/* Subscription */}
          <div className="rounded-2xl border border-line bg-surface-alt p-8 space-y-6 flex flex-col">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Cloud className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-heading font-bold text-ink text-lg">
                  Subscription
                </p>
                <p className="text-ink-muted text-[13px]">Monthly or annual</p>
              </div>
            </div>
            <ul className="space-y-3 text-[14px] text-ink-muted flex-1">
              <li className="flex items-start gap-2">
                <span className="text-revenue mt-0.5">✓</span>
                Hosted and maintained by us
              </li>
              <li className="flex items-start gap-2">
                <span className="text-revenue mt-0.5">✓</span>
                Automatic updates and new features
              </li>
              <li className="flex items-start gap-2">
                <span className="text-revenue mt-0.5">✓</span>
                Priced per agent per month
              </li>
              <li className="flex items-start gap-2">
                <span className="text-revenue mt-0.5">✓</span>
                No upfront infrastructure cost
              </li>
            </ul>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-primary text-primary rounded-xl font-semibold text-sm hover:bg-primary/5 transition-colors min-h-[44px]"
            >
              Talk to sales
            </Link>
          </div>

          {/* Licence */}
          <div className="rounded-2xl border border-ink/20 bg-panel p-8 space-y-6 flex flex-col">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Server className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-lg">
                  One-time licence
                </p>
                <p className="text-white/60 text-[13px]">Cloud or on-premise</p>
              </div>
            </div>
            <ul className="space-y-3 text-[14px] text-white/70 flex-1">
              <li className="flex items-start gap-2">
                <span className="text-revenue mt-0.5">✓</span>
                Perpetual right to use
              </li>
              <li className="flex items-start gap-2">
                <span className="text-revenue mt-0.5">✓</span>
                Host on your infrastructure or ours
              </li>
              <li className="flex items-start gap-2">
                <span className="text-revenue mt-0.5">✓</span>
                Support and upgrades contracted separately
              </li>
              <li className="flex items-start gap-2">
                <span className="text-revenue mt-0.5">✓</span>
                Suitable for regulated environments
              </li>
            </ul>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-[#1840b8] transition-colors min-h-[44px]"
            >
              Talk to sales
            </Link>
          </div>
        </div>

        <p className="mt-6 text-sm text-ink-muted">
          Not sure which model fits?{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">
            See full pricing →
          </Link>
        </p>
      </div>
    </section>
  );
}
