import Link from "next/link";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  headline: string;
  sub?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  badge?: string;
  children?: ReactNode;
  centred?: boolean;
}

export default function PageHero({
  eyebrow,
  headline,
  sub,
  ctaLabel,
  ctaHref = "/demo",
  secondaryCtaLabel,
  secondaryCtaHref,
  badge,
  children,
  centred = false,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-surface pt-14 pb-16 md:pt-20 md:pb-20 px-6">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1200px]">
        <div className={centred ? "max-w-3xl mx-auto text-center" : "max-w-2xl"}>
          {eyebrow && (
            <p className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              {eyebrow}
            </p>
          )}

          <h1 className="font-heading font-bold text-[clamp(32px,4.5vw,52px)] leading-[1.1] tracking-tight text-ink mb-5">
            {headline}
          </h1>

          {sub && (
            <p className="text-lg text-ink-muted leading-relaxed mb-8 max-w-xl">
              {sub}
            </p>
          )}

          {(ctaLabel || secondaryCtaLabel) && (
            <div className={`flex flex-wrap gap-3 ${centred ? "justify-center" : ""} mb-5`}>
              {ctaLabel && (
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-[#1840b8] transition-colors min-h-[48px]"
                >
                  {ctaLabel}
                </Link>
              )}
              {secondaryCtaLabel && secondaryCtaHref && (
                <Link
                  href={secondaryCtaHref}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-line text-ink rounded-xl font-semibold text-sm hover:border-ink-muted hover:bg-surface-alt transition-colors min-h-[48px]"
                >
                  {secondaryCtaLabel}
                </Link>
              )}
            </div>
          )}

          {badge && (
            <p className="text-sm text-ink-muted">{badge}</p>
          )}
        </div>

        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}
