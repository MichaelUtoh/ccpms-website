"use client";
import { useState } from "react";
import Link from "next/link";
import { Check, Minus } from "lucide-react";
import brand from "@/lib/brand";

type Tab = "subscription" | "licence";

const tiers = [
  {
    name: "Starter",
    price: brand.PRICE_STARTER,
    description: "For contact centres getting started with structured performance management.",
    agents: "Up to 50 agents",
    cta: "Talk to sales",
    highlight: false,
    features: {
      "Configured KPI metrics": "5",
      "QA evaluations": true,
      "QA appeals": false,
      "Verified sales tracking": false,
      "Knowledge tests": false,
      "Adherence tracking": false,
      "Coaching & PIPs": false,
      "Reports & exports": true,
      "API access": false,
      "SSO / single sign-on": false,
      "On-premise hosting": false,
      "Dedicated support": false,
    },
  },
  {
    name: "Growth",
    price: brand.PRICE_GROWTH,
    description: "For teams that need the full QA, sales and coaching workflow.",
    agents: "Up to 200 agents",
    cta: "Talk to sales",
    highlight: true,
    features: {
      "Configured KPI metrics": "Unlimited",
      "QA evaluations": true,
      "QA appeals": true,
      "Verified sales tracking": true,
      "Knowledge tests": true,
      "Adherence tracking": true,
      "Coaching & PIPs": true,
      "Reports & exports": true,
      "API access": true,
      "SSO / single sign-on": false,
      "On-premise hosting": false,
      "Dedicated support": false,
    },
  },
  {
    name: "Enterprise",
    price: brand.PRICE_ENTERPRISE,
    description: "For large or multi-site contact centres with enterprise security requirements.",
    agents: "Unlimited agents",
    cta: "Contact sales",
    highlight: false,
    features: {
      "Configured KPI metrics": "Unlimited",
      "QA evaluations": true,
      "QA appeals": true,
      "Verified sales tracking": true,
      "Knowledge tests": true,
      "Adherence tracking": true,
      "Coaching & PIPs": true,
      "Reports & exports": true,
      "API access": true,
      "SSO / single sign-on": true,
      "On-premise hosting": true,
      "Dedicated support": true,
    },
  },
];

const featureList = Object.keys(tiers[0].features);

function FeatureValue({ val }: { val: string | boolean }) {
  if (val === true) return <Check className="w-4 h-4 text-revenue mx-auto" />;
  if (val === false) return <Minus className="w-4 h-4 text-line mx-auto" />;
  return <span className="text-[13px] text-ink tabular">{val}</span>;
}

export default function PricingCards() {
  const [tab, setTab] = useState<Tab>("subscription");

  return (
    <div className="space-y-12">
      {/* Toggle */}
      <div className="flex justify-center">
        <div className="inline-flex bg-surface-alt border border-line rounded-xl p-1 gap-1">
          {(["subscription", "licence"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors capitalize min-h-[40px] ${
                tab === t
                  ? "bg-surface text-ink shadow-sm border border-line"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {t === "subscription" ? "Subscription" : "One-time licence"}
            </button>
          ))}
        </div>
      </div>

      {tab === "subscription" ? (
        <>
          {/* Tier cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-8 flex flex-col ${
                  tier.highlight
                    ? "border-primary bg-primary/[0.03] relative"
                    : "border-line bg-surface"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-heading font-bold text-lg text-ink mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-ink-muted text-[13px] leading-snug mb-4">
                    {tier.description}
                  </p>
                  <div className="mb-2">
                    <span className="font-heading font-bold text-2xl text-ink tabular">
                      {tier.price}
                    </span>
                    {(tier.price as string) !== "Contact sales" && (
                      <span className="text-ink-muted text-sm ml-1">
                        / agent / month
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-ink-muted">{tier.agents}</p>
                </div>

                <Link
                  href="/demo"
                  className={`w-full text-center px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors min-h-[44px] flex items-center justify-center mb-6 ${
                    tier.highlight
                      ? "bg-primary text-white hover:bg-[#1840b8]"
                      : "border border-line hover:border-ink-muted text-ink"
                  }`}
                >
                  {tier.cta}
                </Link>

                <ul className="space-y-3 text-[13px] flex-1">
                  {featureList.map((f) => {
                    const val = tier.features[f as keyof typeof tier.features];
                    if (val === false) return null;
                    return (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-revenue shrink-0 mt-0.5" />
                        <span className="text-ink">
                          {f}
                          {typeof val === "string" && val !== "Unlimited" && `: ${val}`}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Feature comparison table */}
          <div className="rounded-2xl border border-line overflow-hidden">
            <div className="grid grid-cols-4 bg-surface-alt border-b border-line px-5 py-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                Features
              </span>
              {tiers.map((t) => (
                <span
                  key={t.name}
                  className="text-xs font-semibold uppercase tracking-wide text-ink-muted text-center"
                >
                  {t.name}
                </span>
              ))}
            </div>
            {featureList.map((f, i) => (
              <div
                key={f}
                className={`grid grid-cols-4 px-5 py-3 items-center ${
                  i < featureList.length - 1 ? "border-b border-line/50" : ""
                } ${i % 2 === 0 ? "" : "bg-surface-alt/40"}`}
              >
                <span className="text-[14px] text-ink">{f}</span>
                {tiers.map((tier) => (
                  <div key={tier.name} className="flex justify-center">
                    <FeatureValue
                      val={tier.features[f as keyof typeof tier.features]}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Licence tab */
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-ink/20 bg-panel text-white p-10 space-y-6">
            <div>
              <h3 className="font-heading font-bold text-xl mb-2">
                One-time perpetual licence
              </h3>
              <p className="text-white/70 leading-relaxed">
                A single upfront payment grants you the perpetual right to use
                the software. Hosting, support, security updates and upgrades
                are agreed separately in your contract.
              </p>
            </div>

            <ul className="space-y-3 text-[15px] text-white/80">
              {[
                "Perpetual right to use the full platform",
                "Deploy on your own cloud or on-premise infrastructure",
                "Host with us on dedicated infrastructure in Nigeria",
                "Support and SLA agreed as part of your contract",
                "Security updates and upgrades contracted separately",
                "Suitable for regulated industries and data-residency requirements",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-revenue mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-7 py-3 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-[#1840b8] transition-colors min-h-[48px]"
            >
              Talk to sales about licensing
            </Link>
          </div>

          <p className="mt-6 text-sm text-ink-muted text-center">
            Not sure which model is right for you?{" "}
            <Link href="/demo" className="text-primary font-medium hover:underline">
              Book a 30-minute conversation →
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
