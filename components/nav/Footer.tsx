import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import brand from "@/lib/brand";

const product = [
  { href: "/product", label: "Product overview" },
  { href: "/product#kpis", label: "KPIs & scorecards" },
  { href: "/product#qa", label: "QA & appeals" },
  { href: "/product#sales", label: "Sales verification" },
  { href: "/product#coaching", label: "Coaching & PIPs" },
];

const solutionsLinks = [
  { href: "/solutions/managers", label: "For Managers" },
  { href: "/solutions/supervisors", label: "For Supervisors" },
  { href: "/solutions/agents", label: "For Agents" },
  { href: "/industries/banking", label: "Banking & fintech" },
  { href: "/industries/telecoms", label: "Telecoms" },
  { href: "/industries/bpo", label: "BPOs" },
];

const company = [
  { href: "/security", label: "Security" },
  { href: "/pricing", label: "Pricing" },
  { href: "/demo", label: "Book a demo" },
];

const legal = [
  { href: "/legal/privacy", label: "Privacy policy" },
  { href: "/legal/terms", label: "Terms of service" },
  { href: "/legal/cookies", label: "Cookie notice" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface-alt">
      {/* CTA band */}
      <div className="bg-panel text-white py-14 px-6">
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-heading font-bold text-2xl mb-1">
              Ready to prove what your contact centre earns?
            </p>
            <p className="text-white/70 text-sm">
              A 30-minute demo, tailored to how your team measures performance.
            </p>
          </div>
          <Link
            href="/demo"
            className="shrink-0 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-[#1840b8] transition-colors min-h-[44px] flex items-center"
          >
            Book a demo
          </Link>
        </div>
      </div>

      {/* Links */}
      <div className="mx-auto max-w-[1200px] px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-4">
            Product
          </p>
          <ul className="space-y-3">
            {product.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-ink-muted hover:text-ink transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-4">
            Solutions
          </p>
          <ul className="space-y-3">
            {solutionsLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-ink-muted hover:text-ink transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-4">
            Company
          </p>
          <ul className="space-y-3">
            {company.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-ink-muted hover:text-ink transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-4 mt-8">
            Legal
          </p>
          <ul className="space-y-3">
            {legal.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-ink-muted hover:text-ink transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-4">
            Contact
          </p>
          <ul className="space-y-3">
            <li>
              <a
                href={`mailto:${brand.CONTACT_EMAIL}`}
                className="flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {brand.CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a
                href="tel:+2340000000000"
                className="flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                Lagos office
              </a>
            </li>
          </ul>

          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-4 mt-8">
            Follow
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Twitter / X"
              className="w-9 h-9 rounded-lg border border-line flex items-center justify-center text-ink-muted hover:text-ink hover:border-ink-muted transition-colors text-xs font-bold"
            >
              𝕏
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg border border-line flex items-center justify-center text-ink-muted hover:text-ink hover:border-ink-muted transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-line">
        <div className="mx-auto max-w-[1200px] px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-muted">
          <span>
            © 2026 {brand.BRAND}. All rights reserved.
          </span>
          <span>Built for banks, telecoms, insurers and BPOs.</span>
        </div>
      </div>
    </footer>
  );
}
