import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import PricingCards from "@/components/pricing/PricingCards";
import FaqAccordion from "@/components/shared/FaqAccordion";
import FinalCTA from "@/components/home/FinalCTA";
import brand from "@/lib/brand";

export const metadata: Metadata = {
  title: `Pricing — ${brand.BRAND}`,
  description:
    "Subscribe per agent per month, or licence the platform outright. Starter, Growth and Enterprise plans for contact centres from 30 to 1,000+ agents. NGN and USD pricing available.",
  keywords: [
    "contact centre software pricing Nigeria",
    "QA software pricing",
    "contact centre platform cost",
    "agent performance software pricing",
  ],
  alternates: { canonical: "/pricing" },
  openGraph: { url: "/pricing" },
};

const faq = [
  {
    q: "What is the minimum contract term?",
    a: "Subscriptions are available month-to-month or on an annual basis. Annual plans attract a discount. One-time licence terms are defined in your contract.",
  },
  {
    q: "How long does onboarding take?",
    a: "Most implementations are live within 2–4 weeks. Our team provides hands-on setup support for all plans, covering configuration, data upload templates and user training.",
  },
  {
    q: "Can I export my data if I leave?",
    a: "Yes. On request, we provide a full export of your data in CSV and JSON formats within 5 business days. Data is deleted from our systems within 30 days of confirmed export delivery.",
  },
  {
    q: "Can I pay in USD?",
    a: "Yes. Invoices can be issued in NGN or USD. Talk to sales for details on currency options and international payment arrangements.",
  },
  {
    q: "Is on-premise hosting available?",
    a: "On-premise and private cloud hosting is available on the one-time licence model. Contact sales to discuss your infrastructure requirements and deployment options.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        headline="Transparent pricing for every contact centre."
        sub="Subscribe month-to-month or annually, or licence the platform outright. No hidden fees."
        centred
      />

      <section className="py-16 px-6 bg-surface">
        <div className="mx-auto max-w-[1200px]">
          <PricingCards />
        </div>
      </section>

      <section className="py-20 px-6 bg-surface-alt border-y border-line">
        <div className="mx-auto max-w-[1200px] max-w-2xl">
          <FaqAccordion items={faq} title="Common questions about pricing" />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
