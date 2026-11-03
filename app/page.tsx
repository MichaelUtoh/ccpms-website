import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import Shift from "@/components/home/Shift";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturePillars from "@/components/home/FeaturePillars";
import Roles from "@/components/home/Roles";
import Integrations from "@/components/home/Integrations";
import SecurityTrust from "@/components/home/SecurityTrust";
import CommercialModels from "@/components/home/CommercialModels";
import EarlyAccess from "@/components/home/EarlyAccess";
import FinalCTA from "@/components/home/FinalCTA";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import type { Metadata } from "next";
import brand from "@/lib/brand";

export const metadata: Metadata = {
  title: `${brand.BRAND} — Contact Centre Performance Management`,
  description:
    "Turn your contact centre from a cost centre into a measurable revenue contributor. QA, KPIs, coaching and verified sales in one platform. Built for banks, telecoms, BPOs and insurers in Nigeria.",
  keywords: [
    "contact centre performance management",
    "call centre QA software Nigeria",
    "agent scorecard software",
    "contact centre KPI platform Nigeria",
    "QA evaluation software",
    "contact centre revenue tracking",
    "agent performance management platform",
    "call centre performance software Africa",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${brand.BRAND} — Contact Centre Performance Management`,
    description:
      "Turn your contact centre from a cost centre into a measurable revenue contributor. QA, KPIs, verified sales and scorecards in one platform.",
    url: "/",
  },
  twitter: {
    title: `${brand.BRAND} — Contact Centre Performance Management`,
    description:
      "Turn your contact centre from a cost centre into a measurable revenue contributor.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Shift />
      <HowItWorks />
      <FeaturePillars />
      <Roles />
      <Integrations />
      <SecurityTrust />
      <CommercialModels />
      <EarlyAccess />
      <FinalCTA />
      <WhatsAppButton />
    </>
  );
}
