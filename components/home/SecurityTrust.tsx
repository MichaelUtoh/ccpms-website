import Link from "next/link";
import {
  Building2,
  Lock,
  Headphones,
  ClipboardList,
  ShieldAlert,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Tenant isolation",
    desc: "Each organisation's data is completely separated at every layer.",
  },
  {
    icon: Lock,
    title: "Role-based access",
    desc: "Managers, supervisors, agents and admins see only what they need.",
  },
  {
    icon: Headphones,
    title: "Encrypted call audio",
    desc: "Recordings are stored encrypted. No public URLs — logged access only.",
  },
  {
    icon: ClipboardList,
    title: "Full audit trail",
    desc: "Every edit, correction and decision is recorded with a timestamp and user.",
  },
  {
    icon: ShieldAlert,
    title: "Multi-factor authentication",
    desc: "MFA available for all roles. Single sign-on support included.",
  },
  {
    icon: Globe,
    title: "NDPA-aligned data handling",
    desc: "Designed for Nigeria Data Protection Act compliance. Data stays in-region.",
  },
];

export default function SecurityTrust() {
  return (
    <section className="py-24 px-6 bg-surface-alt border-y border-line">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Security &amp; trust
            </p>
            <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,40px)] text-ink leading-tight">
              Enterprise-grade control over sensitive data.
            </h2>
          </div>
          <Link
            href="/security"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline shrink-0"
          >
            Full security details →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-surface rounded-2xl border border-line p-6 space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-[15px] text-ink">
                  {f.title}
                </h3>
                <p className="text-ink-muted text-[14px] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
