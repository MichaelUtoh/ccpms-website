import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "./home.css";
import brand from "@/lib/brand";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(brand.SITE_URL),
  title: "Business Number HQ | Your Business. Your Number. Your Identity.",
  description:
    "Give your Nigerian business its own professional phone number. Manage calls, welcome customers, route enquiries and keep call records from your mobile phone.",
};

export const viewport: Viewport = { themeColor: "#ff6500" };

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG" className={inter.variable}>
      <body>
        <div className="bnhq">{children}</div>
      </body>
    </html>
  );
}
