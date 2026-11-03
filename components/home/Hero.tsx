import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import ManagerDashboard from "@/components/mockups/ManagerDashboard";
import brand from "@/lib/brand";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface pt-16 pb-20 md:pt-24 md:pb-28">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="max-w-xl">
            <p className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-5">
              Contact centre performance management
            </p>

            <h1 className="font-heading font-bold text-[clamp(36px,5vw,60px)] leading-[1.08] tracking-tight text-ink mb-6">
              Prove what your contact centre earns.
            </h1>

            <p className="text-lg text-ink-muted leading-relaxed mb-8 max-w-[480px]">
              {brand.BRAND} brings QA, KPIs, coaching and verified sales into
              one platform, so you can show leadership exactly how your agents
              drive revenue — not just how much they cost.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-[#1840b8] transition-colors min-h-[48px]"
              >
                Book a demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-6 py-3 border border-line text-ink rounded-xl font-semibold text-sm hover:border-ink-muted hover:bg-surface-alt transition-colors min-h-[48px]"
              >
                See how it works
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-ink-muted">
              <CheckCircle2 className="w-4 h-4 text-revenue shrink-0" />
              <span>
                Built for banks, telecoms, insurers and BPOs. NDPA-aligned data
                protection.
              </span>
            </div>
          </div>

          {/* Right — manager dashboard mockup */}
          <div className="relative">
            <ManagerDashboard />

            {/* Floating revenue badge */}
            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-revenue text-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5 z-10">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <div>
                <p className="font-heading font-bold text-base tabular leading-tight">
                  ₦48.2M
                </p>
                <p className="text-white/80 text-[11px] leading-tight">
                  Verified revenue this month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
