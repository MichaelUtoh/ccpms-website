import { ArrowRight } from "lucide-react";
import brand from "@/lib/brand";

const categories = [
  { label: "Telephony", icon: "📞", note: "" },
  { label: "CRM", icon: "🗂️", note: "On the roadmap" },
  { label: "Surveys / CSAT", icon: "📊", note: "" },
  { label: "Workforce management", icon: "🗓️", note: "On the roadmap" },
  { label: "SSO / Identity", icon: "🔐", note: "" },
  { label: "BI & reporting", icon: "📈", note: "On the roadmap" },
];

export default function Integrations() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Integrations
            </p>
            <h2 className="font-heading font-bold text-[clamp(28px,3.5vw,36px)] text-ink leading-tight mb-4">
              Works with the systems you already run.
            </h2>
            <p className="text-ink-muted text-[15px] leading-relaxed mb-6">
              Connect telephony and contact centre platforms, login-monitoring
              tools, CRMs and survey tools through a secure API. No integration
              yet? Spreadsheet uploads work from day one.
            </p>
            <a
              href="/product#integrations"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
            >
              See integration details
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Hub diagram */}
          <div className="relative flex items-center justify-center min-h-[320px]">
            {/* Centre node */}
            <div className="absolute z-10 w-20 h-20 rounded-2xl bg-panel flex items-center justify-center shadow-lg">
              <span className="text-white font-heading font-bold text-xs text-center leading-tight px-2">
                {brand.BRAND}
              </span>
            </div>

            {/* Category tiles */}
            {categories.map((c, i) => {
              const angle = (i / categories.length) * 360 - 90;
              const rad = (angle * Math.PI) / 180;
              const r = 120;
              const x = Math.cos(rad) * r;
              const y = Math.sin(rad) * r;
              return (
                <div
                  key={c.label}
                  className="absolute flex flex-col items-center gap-1.5"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  {/* Connector */}
                  <svg
                    className="absolute"
                    style={{
                      width: `${Math.abs(x) + 10}px`,
                      height: `${Math.abs(y) + 10}px`,
                      top: "50%",
                      left: "50%",
                      transform: "none",
                      pointerEvents: "none",
                    }}
                    aria-hidden="true"
                  />
                  <div className="w-16 h-14 rounded-xl bg-surface-alt border border-line flex flex-col items-center justify-center gap-1 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-lg">{c.icon}</span>
                    <p className="text-[9px] font-medium text-ink-muted text-center leading-tight px-1">
                      {c.label}
                    </p>
                  </div>
                  {c.note && (
                    <span className="text-[8px] text-ink-muted/60 font-medium whitespace-nowrap">
                      {c.note}
                    </span>
                  )}
                </div>
              );
            })}

            {/* SVG connector lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
              style={{ top: 0, left: 0 }}
            >
              <defs>
                <marker id="dot" viewBox="0 0 4 4" refX="2" refY="2" markerWidth="4" markerHeight="4">
                  <circle cx="2" cy="2" r="1.5" fill="#e2e7ed" />
                </marker>
              </defs>
              {categories.map((_, i) => {
                const angle = (i / categories.length) * 360 - 90;
                const rad = (angle * Math.PI) / 180;
                const cx = 50;
                const cy = 50;
                const ex = 50 + Math.cos(rad) * 38;
                const ey = 50 + Math.sin(rad) * 38;
                return (
                  <line
                    key={i}
                    x1={`${cx}%`}
                    y1={`${cy}%`}
                    x2={`${ex}%`}
                    y2={`${ey}%`}
                    stroke="#e2e7ed"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    markerEnd="url(#dot)"
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
