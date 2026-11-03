import type { ReactNode } from "react";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="py-16 px-6 bg-surface">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid md:grid-cols-[200px_1fr] gap-12">{children}</div>
      </div>
    </div>
  );
}
