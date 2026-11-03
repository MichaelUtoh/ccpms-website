"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
}

export default function FaqAccordion({ items, title = "Frequently asked questions" }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {title && (
        <h2 className="font-heading font-bold text-[clamp(22px,2.5vw,30px)] text-ink mb-8">
          {title}
        </h2>
      )}
      <div className="space-y-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="border border-line rounded-xl overflow-hidden bg-surface"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-ink text-[15px] hover:bg-surface-alt transition-colors"
              aria-expanded={open === i}
            >
              <span>{item.q}</span>
              {open === i ? (
                <Minus className="w-4 h-4 text-ink-muted shrink-0" />
              ) : (
                <Plus className="w-4 h-4 text-ink-muted shrink-0" />
              )}
            </button>
            {open === i && (
              <div className="px-5 pb-5 pt-1 text-ink-muted text-[15px] leading-relaxed border-t border-line">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
