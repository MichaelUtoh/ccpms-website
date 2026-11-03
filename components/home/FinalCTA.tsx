import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-panel text-white py-24 px-6">
      <div className="mx-auto max-w-[1200px] text-center">
        <h2 className="font-heading font-bold text-[clamp(28px,4vw,48px)] leading-tight mb-4 max-w-2xl mx-auto">
          See your contact centre's real contribution.
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-md mx-auto">
          A 30-minute demo, tailored to how your team measures performance.
        </p>
        <Link
          href="/demo"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold text-base hover:bg-[#1840b8] transition-colors min-h-[52px]"
        >
          Book a demo
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
