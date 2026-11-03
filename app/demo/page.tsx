import type { Metadata } from "next";
import { CheckCircle2, Clock, Users, BarChart2, ArrowRight } from "lucide-react";
import DemoForm from "@/components/demo/DemoForm";
import FinalCTA from "@/components/home/FinalCTA";
import brand from "@/lib/brand";

export const metadata: Metadata = {
  title: `Book a demo — ${brand.BRAND}`,
  description:
    `Book a 30-minute demo of ${brand.BRAND}, the contact centre performance management platform for Nigerian banks, telecoms, BPOs and insurers. We reply within one business day.`,
  alternates: { canonical: "/demo" },
  openGraph: { url: "/demo" },
  robots: { index: true, follow: true },
};

const covers = [
  {
    icon: BarChart2,
    text: `How ${brand.BRAND} fits your existing QA and scorecard process`,
  },
  {
    icon: CheckCircle2,
    text: "The verified revenue workflow — from agent submission to supervisor sign-off",
  },
  {
    icon: Users,
    text: "What managers, supervisors and agents each see in the platform",
  },
  {
    icon: Clock,
    text: "Implementation timeline and what onboarding looks like for your team",
  },
];

const next = [
  "We review your submission and match you with the right team member",
  "You receive a calendar invite within one business day",
  "The 30-minute demo is tailored to your industry and team size",
  "A follow-up summary and pricing proposal if relevant",
];

export default function DemoPage() {
  return (
    <>
      <section className="py-16 px-6 bg-surface">
        <div className="mx-auto max-w-[1200px]">
          {/* Page header */}
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Book a demo
            </p>
            <h1 className="font-heading font-bold text-[clamp(30px,4vw,48px)] text-ink leading-tight max-w-xl">
              See your contact centre's real contribution.
            </h1>
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — what the demo covers */}
            <div className="space-y-10">
              <div>
                <h2 className="font-heading font-semibold text-lg text-ink mb-5">
                  What the demo covers
                </h2>
                <ul className="space-y-4">
                  {covers.map((c) => {
                    const Icon = c.icon;
                    return (
                      <li key={c.text} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-[15px] text-ink leading-snug">
                          {c.text}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-semibold text-lg text-ink mb-5">
                  What happens next
                </h2>
                <ol className="space-y-4">
                  {next.map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-surface-alt border border-line flex items-center justify-center text-[11px] font-bold text-ink-muted shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-[15px] text-ink-muted leading-snug">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-surface-alt border border-line rounded-2xl p-5 flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-ink text-sm mb-1">
                    We reply within one business day.
                  </p>
                  <p className="text-ink-muted text-[13px]">
                    Based in Lagos. Demos available Monday–Friday, 9am–5pm WAT.
                    WhatsApp enquiries welcome.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-ink-muted">
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                <span>
                  Prefer a written introduction first?{" "}
                  <a
                    href="/product"
                    className="text-primary font-medium hover:underline"
                  >
                    See the full product tour
                  </a>
                </span>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-surface rounded-2xl border border-line p-8 lg:p-10">
              <h2 className="font-heading font-bold text-xl text-ink mb-6">
                Request a demo
              </h2>
              <DemoForm />
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
