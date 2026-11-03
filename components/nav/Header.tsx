"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import brand from "@/lib/brand";
import ThemeToggle from "@/components/nav/ThemeToggle";

const solutions = [
  { href: "/solutions/managers", label: "For Managers" },
  { href: "/solutions/supervisors", label: "For Supervisors" },
  { href: "/solutions/agents", label: "For Agents" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-line bg-surface/95 backdrop-blur-sm transition-all duration-200 ${
        scrolled ? "py-2" : "py-0"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading font-bold text-xl text-ink tracking-tight hover:opacity-80 transition-opacity"
        >
          {brand.BRAND}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <Link
            href="/product"
            className="text-ink-muted hover:text-ink transition-colors"
          >
            Product
          </Link>

          {/* Solutions dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setSolutionsOpen((v) => !v)}
              className="flex items-center gap-1 text-ink-muted hover:text-ink transition-colors"
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
            >
              Solutions
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-150 ${
                  solutionsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {solutionsOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-surface border border-line rounded-xl shadow-lg py-2 z-50">
                {solutions.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setSolutionsOpen(false)}
                    className="block px-4 py-2 text-sm text-ink-muted hover:text-ink hover:bg-surface-alt transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/security"
            className="text-ink-muted hover:text-ink transition-colors"
          >
            Security
          </Link>
          <Link
            href="/pricing"
            className="text-ink-muted hover:text-ink transition-colors"
          >
            Pricing
          </Link>
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href={`https://app.${brand.DOMAIN}`}
            className="text-sm font-medium text-ink-muted hover:text-ink transition-colors"
          >
            Log in
          </a>
          <Link
            href="/demo"
            className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-[#1840b8] transition-colors min-h-[40px] flex items-center"
          >
            Book a demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-1">
        <ThemeToggle />
        <button
          className="p-2 -mr-2 text-ink"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-line bg-surface px-6 py-5 space-y-1">
          <Link
            href="/product"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 text-sm font-medium text-ink"
          >
            Product
          </Link>
          <div className="py-1">
            <span className="block py-2 text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Solutions
            </span>
            {solutions.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 pl-3 text-sm text-ink-muted hover:text-ink"
              >
                {s.label}
              </Link>
            ))}
          </div>
          <Link
            href="/security"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 text-sm font-medium text-ink"
          >
            Security
          </Link>
          <Link
            href="/pricing"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 text-sm font-medium text-ink"
          >
            Pricing
          </Link>
          <div className="pt-4 flex flex-col gap-3 border-t border-line mt-2">
            <a
              href={`https://app.${brand.DOMAIN}`}
              className="text-sm font-medium text-ink-muted"
            >
              Log in
            </a>
            <Link
              href="/demo"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 rounded-lg bg-primary text-white text-sm font-semibold text-center"
            >
              Book a demo
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
