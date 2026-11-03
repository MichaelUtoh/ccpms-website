import type { ReactNode } from "react";
import IllustrativeLabel from "@/components/ui/IllustrativeLabel";
import brand from "@/lib/brand";

interface MockupFrameProps {
  children: ReactNode;
  className?: string;
  label?: boolean;
}

export default function MockupFrame({
  children,
  className = "",
  label = true,
}: MockupFrameProps) {
  return (
    <div
      className={`relative rounded-2xl border border-line shadow-[0_8px_32px_rgba(15,27,45,0.10)] overflow-hidden bg-surface ${className}`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-surface-alt border-b border-line">
        <span className="w-2.5 h-2.5 rounded-full bg-line" />
        <span className="w-2.5 h-2.5 rounded-full bg-line" />
        <span className="w-2.5 h-2.5 rounded-full bg-line" />
        <div className="mx-3 flex-1 max-w-[240px] h-5 rounded bg-line/60 text-[10px] text-ink-muted flex items-center px-2 truncate">
          app.{brand.DOMAIN}
        </div>
      </div>

      {/* Content */}
      <div className="relative">{children}</div>

      {/* Illustrative label */}
      {label && (
        <div className="absolute bottom-2 right-3">
          <IllustrativeLabel />
        </div>
      )}
    </div>
  );
}
