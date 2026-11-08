import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Lock,
  ShieldCheck,
  Headphones,
  ClipboardList,
  HardDrive,
  Database,
  Scale,
  Server,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import FinalCTA from "@/components/home/FinalCTA";
import brand from "@/lib/brand";

export const metadata: Metadata = {
  title: `Security — ${brand.BRAND}`,
  description:
    "Tenant data isolation, role-based access control, encrypted call audio, full audit logs and NDPA-aligned data handling. Hosted in Nigeria or on your own infrastructure.",
  keywords: [
    "contact centre data security Nigeria",
    "NDPA aligned software",
    "contact centre NDPA compliance",
    "tenant isolation contact centre",
    "call audio encryption",
  ],
  alternates: { canonical: "/security" },
  openGraph: { url: "/security" },
};

const sections = [
  {
    id: "data-isolation",
    icon: Building2,
    title: "Data isolation",
    content: [
      "Each organisation's data is stored in its own isolated database schema. Queries cannot cross tenant boundaries at any layer of the application.",
      "Platform administrators cannot access tenant data without a formal access request, which is logged to the audit trail with a reason and a timestamp.",
      "Tenant data is never used for training, analytics or any purpose outside the contracted service.",
    ],
  },
  {
    id: "access-control",
    icon: Lock,
    title: "Access control & MFA",
    content: [
      "Five built-in roles with defined permission sets: Agent, Supervisor, Manager, Client Admin and Platform Admin. No role can exceed its defined permissions.",
      "Multi-factor authentication (TOTP or SMS) is available for all roles and can be made mandatory by the Client Admin.",
      "Single sign-on via SAML 2.0 is supported on Enterprise plans, allowing your identity provider to manage access centrally.",
    ],
  },
  {
    id: "encryption",
    icon: ShieldCheck,
    title: "Encryption in transit & at rest",
    content: [
      "All data in transit is encrypted using TLS 1.2 or higher. Connections that do not meet this standard are rejected.",
      "Data at rest — including database records, uploaded files and call recordings — is encrypted using AES-256.",
      "Encryption keys are stored separately from the data they protect and are rotated on a defined schedule.",
    ],
  },
  {
    id: "call-audio",
    icon: Headphones,
    title: "Call audio protection",
    content: [
      "Uploaded call recordings are stored in encrypted object storage. No public or persistent URLs are generated for audio files.",
      "Access is via short-lived signed URLs that expire after a configurable window (default: 15 minutes). Every access event is written to the audit log.",
      "Agents and supervisors can access recordings only within the appeal or evaluation they are attached to; broader access requires a Manager or Admin role.",
    ],
  },
  {
    id: "audit-logs",
    icon: ClipboardList,
    title: "Audit logs",
    content: [
      "Every data write, correction, login, permission change and administrative action is written to an immutable audit log.",
      "Each log entry records: the action taken, the user who took it, their IP address and the timestamp. Log entries cannot be edited or deleted.",
      "Audit logs are retained for a minimum of 12 months and are available for export on request.",
    ],
  },
  {
    id: "backups",
    icon: HardDrive,
    title: "Backups & recovery",
    content: [
      "Database data is backed up daily to a geographically separate location. Point-in-time recovery is available.",
      "Recovery time objective (RTO) and recovery point objective (RPO) are defined in the service-level agreement for each plan.",
      "Backup integrity is tested on a scheduled basis. Restoration procedures are documented and reviewed regularly.",
    ],
  },
  {
    id: "data-retention",
    icon: Database,
    title: "Data retention",
    content: [
      "Data is retained for the duration of your active subscription. On cancellation, a full data export is provided within 5 business days.",
      "Following confirmed export delivery, data is deleted from production systems within 30 days and from backup media within 90 days.",
      "Retention periods for specific data categories (call audio, evaluation records, personal data) are configurable on Enterprise plans to meet your internal policies.",
    ],
  },
  {
    id: "ndpa",
    icon: Scale,
    title: "Nigeria Data Protection Act alignment",
    content: [
      "The platform is designed to align with the Nigeria Data Protection Act (NDPA) 2023. Lawful basis for the processing of employee and customer data is documented.",
      "Data subjects (including agents whose data is processed) can request access to, correction of, or deletion of their personal data. Requests are handled within the statutory timeframe.",
      "We do not claim formal NDPA certification. We describe our approach as NDPA-aligned: designed to support compliance, not a substitute for your organisation's own legal review.",
    ],
  },
  {
    id: "hosting",
    icon: Server,
    title: "Hosting options",
    content: [
      "Vendor-hosted: the platform runs on cloud infrastructure located in Nigeria, managed and maintained by us. This is the default for subscription customers.",
      "Customer-hosted cloud: deploy on your own AWS, Azure or GCP tenancy in a region of your choice. We provide deployment artefacts and setup support.",
      "On-premise: available on the one-time licence model. Your infrastructure team manages the host environment; we provide the application package, documentation and upgrade releases.",
    ],
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security & trust"
        headline="Enterprise-grade control over sensitive data."
        sub="Designed for banks, telecoms and regulated industries where data protection is non-negotiable."
        ctaLabel="Request a security overview"
        ctaHref="/demo"
        badge="NDPA-aligned data handling · Tenant isolation · Encrypted call audio"
      />

      {/* Sections */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-[1200px] space-y-0">
          {sections.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                id={s.id}
                className={`grid md:grid-cols-[280px_1fr] gap-8 py-12 ${
                  i < sections.length - 1 ? "border-b border-line" : ""
                }`}
              >
                {/* Left */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <h2 className="font-heading font-bold text-lg text-ink leading-snug">
                    {s.title}
                  </h2>
                </div>

                {/* Right */}
                <ul className="space-y-3">
                  {s.content.map((para, j) => (
                    <li
                      key={j}
                      className="text-ink-muted text-[15px] leading-relaxed"
                    >
                      {para}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Request overview CTA */}
      <section className="py-16 px-6 bg-surface-alt border-y border-line">
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="font-heading font-bold text-xl text-ink mb-2">
              Need a detailed security overview?
            </h2>
            <p className="text-ink-muted text-[15px]">
              We provide a written security overview document covering architecture, data flows, encryption, access controls and NDPA alignment for prospective customers.
            </p>
          </div>
          <Link
            href="/demo"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-xl font-semibold text-sm hover:bg-primary/5 transition-colors min-h-[48px]"
          >
            Request our security overview
          </Link>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
