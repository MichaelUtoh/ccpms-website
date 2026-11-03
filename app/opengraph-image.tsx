import { ImageResponse } from "next/og";
import brand from "@/lib/brand";

export const dynamic = "force-static";
export const alt = `${brand.BRAND} — Contact Centre Performance Management`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          backgroundColor: "#0f1b2d",
          padding: "64px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "linear-gradient(#e2e7ed 1px, transparent 1px), linear-gradient(90deg, #e2e7ed 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Revenue accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #1f4fd8 0%, #0e9f6e 100%)",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: 2,
              backgroundColor: "#0e9f6e",
            }}
          />
          <span
            style={{
              color: "#0e9f6e",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Contact centre performance management
          </span>
        </div>

        {/* Brand name */}
        <div
          style={{
            color: "#ffffff",
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: -2,
            marginBottom: 20,
          }}
        >
          {brand.BRAND}
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: 28,
            lineHeight: 1.35,
            maxWidth: 680,
            marginBottom: 40,
          }}
        >
          Prove what your contact centre earns.
        </div>

        {/* Bottom chips */}
        <div style={{ display: "flex", gap: 12 }}>
          {["QA & scorecards", "Verified revenue", "Evidence-based appeals", "NDPA-aligned"].map(
            (label) => (
              <div
                key={label}
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 8,
                  padding: "8px 14px",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                {label}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
