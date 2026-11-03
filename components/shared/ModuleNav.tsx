"use client";
import { useEffect, useRef, useState } from "react";

interface NavItem {
  id: string;
  label: string;
}

export default function ModuleNav({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = items
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-64px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 128;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="sticky top-16 z-40 bg-surface border-b border-line">
      <div
        ref={scrollRef}
        className="mx-auto max-w-[1200px] px-6 flex gap-1 overflow-x-auto py-2 scrollbar-none"
        style={{ scrollbarWidth: "none" }}
      >
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors min-h-[36px] ${
              active === item.id
                ? "bg-primary text-white"
                : "text-ink-muted hover:text-ink hover:bg-surface-alt"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
