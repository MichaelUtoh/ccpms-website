"use client";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const query = "(prefers-color-scheme: dark)";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  const mq = window.matchMedia(query);
  mq.addEventListener("change", onChange);
  return () => {
    observer.disconnect();
    mq.removeEventListener("change", onChange);
  };
}

function getTheme(): Theme {
  const set = document.documentElement.dataset.theme;
  if (set === "light" || set === "dark") return set;
  return window.matchMedia(query).matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore<Theme | null>(subscribe, getTheme, () => null);


  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-surface-alt transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
    >
      {theme === "dark" ? (
        <Sun className="w-[18px] h-[18px]" />
      ) : theme === "light" ? (
        <Moon className="w-[18px] h-[18px]" />
      ) : (
        <span className="w-[18px] h-[18px]" />
      )}
    </button>
  );
}
