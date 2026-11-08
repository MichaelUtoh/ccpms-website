import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import Header from "@/components/nav/Header";
import Footer from "@/components/nav/Footer";
import brand from "@/lib/brand";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.SITE_URL),
  title: {
    default: `${brand.BRAND} — Contact Centre Performance Management`,
    template: `%s — ${brand.BRAND}`,
  },
  description:
    `${brand.BRAND} brings QA, KPIs, coaching and verified sales into one platform, so contact centre leaders can show exactly how their agents drive revenue, not just how much they cost.`,
  keywords: [
    "contact centre performance management",
    "call centre QA software Nigeria",
    "agent scorecard software",
    "contact centre KPI platform",
    "QA evaluation software Africa",
    "contact centre revenue tracking",
    "agent performance scorecard",
    "call centre coaching software",
  ],
  authors: [{ name: `${brand.BRAND}` }],
  creator: `${brand.BRAND}`,
  openGraph: {
    type: "website",
    siteName: `${brand.BRAND}`,
    title: `${brand.BRAND} — Contact Centre Performance Management`,
    description:
      "Turn your contact centre from a cost centre into a measurable revenue contributor. QA, KPIs, verified sales and scorecards in one platform.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.BRAND} — Contact Centre Performance Management`,
    description:
      "Turn your contact centre from a cost centre into a measurable revenue contributor.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.BRAND,
  url: brand.SITE_URL,
  email: brand.CONTACT_EMAIL,
  description:
    "Contact centre performance management platform for banks, telecoms, BPOs and insurers in Nigeria and West Africa.",
  areaServed: ["Nigeria", "West Africa"],
  knowsAbout: [
    "Contact centre performance management",
    "QA evaluation",
    "Agent scorecards",
    "Sales verification",
    "Coaching and improvement plans",
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: brand.BRAND,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: brand.SITE_URL,
  description:
    "Contact centre performance management platform combining QA, KPIs, verified sales tracking, coaching and configurable scorecards.",
  offers: {
    "@type": "Offer",
    priceCurrency: "NGN",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: brand.BRAND },
  },
  featureList: [
    "Configurable KPI engine",
    "Verified revenue tracking",
    "Evidence-based QA appeals",
    "Bulk data upload with validation",
    "Controlled scorecard workflows",
    "Coaching and PIPs",
    "Knowledge assessments",
    "Adherence tracking",
  ],
};

const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-surface text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
