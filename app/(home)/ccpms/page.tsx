import type { Metadata } from "next";
import Nav from "@/components/bnhq/Nav";
import Footer from "@/components/bnhq/Footer";
import { ModalProvider, OpenModalButton } from "@/components/bnhq/ModalProvider";
import ManagerDashboard from "@/components/mockups/ManagerDashboard";
import AgentDashboard from "@/components/mockups/AgentDashboard";
import ScorecardBuilder from "@/components/mockups/ScorecardBuilder";
import QAAppeal from "@/components/mockups/QAAppeal";
import SalesFunnel from "@/components/mockups/SalesFunnel";
import KnowledgeTest from "@/components/mockups/KnowledgeTest";
import AdherenceSchedule from "@/components/mockups/AdherenceSchedule";
import CoachingSession from "@/components/mockups/CoachingSession";
import ReportsDashboard from "@/components/mockups/ReportsDashboard";
import "./ccpms.css";

export const metadata: Metadata = {
  title: "CCPMS | Call Centre Performance Management System",
  description:
    "Measure agent productivity, call quality and customer experience. QA scorecards, KPIs, adherence, coaching and management reporting in one system.",
};

const stats = [
  ["24", "Agents tracked"],
  ["91%", "Average QA score"],
  ["4.6/5", "CSAT score"],
  ["04:32", "Average handle time"],
];

const features = [
  ["◎", "Agent Performance", "Individual and team dashboards measured against the targets you define."],
  ["✓", "Quality Assurance", "Structured QA scorecards, evaluation records, appeals and coaching opportunities."],
  ["◷", "Productivity Metrics", "Track AHT, schedule adherence and other configured performance indicators."],
  ["♡", "Customer Experience", "Bring CSAT and customer feedback into every performance review."],
  ["▤", "Knowledge Assessment", "Record knowledge tests and identify training needs early."],
  ["↗", "Management Reporting", "Review trends, performance bands, monthly results and coaching actions."],
];

const sections = [
  {
    id: "dashboards",
    kicker: "TEAM VISIBILITY",
    title: "One dashboard for the whole floor.",
    text: "Supervisors and managers see QA, AHT, CSAT and adherence for every agent in one place, with performance bands that make it obvious who is excelling and who needs support.",
    points: ["Live team KPIs against targets", "Performance bands per agent", "Verified revenue alongside quality metrics"],
    mock: <ManagerDashboard />,
  },
  {
    id: "agents",
    kicker: "FOR AGENTS",
    title: "Agents know exactly where they stand.",
    text: "Every agent gets a personal view of their scores, targets and feedback, so there are no surprises at review time and improvement starts earlier.",
    points: ["Personal scorecard and trends", "Transparent targets", "Feedback and coaching in one view"],
    mock: <AgentDashboard />,
  },
  {
    id: "scorecards",
    kicker: "SCORECARDS & KPIs",
    title: "Build scorecards that match how you measure.",
    text: "Configure KPIs and weights to your own standards: QA, CSAT, adherence, knowledge and AHT, with controlled workflows so changes are deliberate.",
    points: ["Configurable KPI weights", "Controlled scorecard changes", "Consistent scoring across teams"],
    mock: <ScorecardBuilder />,
  },
  {
    id: "qa",
    kicker: "QUALITY ASSURANCE",
    title: "Fair QA, with evidence and appeals.",
    text: "Evaluate calls with structured forms, and give agents a clear way to appeal a score with supporting evidence, keeping QA credible and defensible.",
    points: ["Structured evaluation records", "Evidence-based appeals", "Coaching opportunities flagged automatically"],
    mock: <QAAppeal />,
  },
  {
    id: "sales",
    kicker: "SALES TRACKING",
    title: "See which conversations turn into revenue.",
    text: "Track sales through a verification funnel so your reporting reflects confirmed results, not claims.",
    points: ["Verification queue for sales", "Funnel from lead to verified sale", "Revenue tied to agent performance"],
    mock: <SalesFunnel />,
  },
  {
    id: "knowledge",
    kicker: "KNOWLEDGE & ADHERENCE",
    title: "Close training gaps. Keep schedules honest.",
    text: "Run knowledge tests to find training needs, and monitor schedule adherence to see how the day is really being covered.",
    points: ["Knowledge assessments with results", "Schedule adherence tracking", "Training needs identified per agent"],
    mock: (
      <div style={{ display: "grid", gap: 16 }}>
        <KnowledgeTest />
        <AdherenceSchedule />
      </div>
    ),
  },
  {
    id: "coaching",
    kicker: "COACHING",
    title: "Turn scores into improvement.",
    text: "Record coaching sessions and improvement plans against real performance data so every conversation leads to a clear next step.",
    points: ["Coaching session records", "Improvement plans with follow-up", "Progress visible to managers"],
    mock: <CoachingSession />,
  },
  {
    id: "reports",
    kicker: "MANAGEMENT REPORTING",
    title: "Board-ready reports, without the spreadsheets.",
    text: "Review monthly trends, performance bands and coaching actions in reports built for decision-makers.",
    points: ["Monthly and trend reporting", "Performance band summaries", "Exportable for leadership reviews"],
    mock: <ReportsDashboard />,
  },
];

export default function CcpmsPage() {
  return (
    <ModalProvider>
      <Nav />
      <main>
        <header className="hero" style={{ paddingBottom: 70 }}>
          <div className="container" style={{ paddingTop: 80, position: "relative", zIndex: 1 }}>
            <div className="kicker" style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* <span style={{ width: 44, height: 3, background: "#ff6500" }} />PRODUCT 02 · CCPMS */}
            </div>
            <h1 style={{ fontSize: "clamp(38px,5.5vw,66px)", lineHeight: 1.05, letterSpacing: -2.5, maxWidth: 820, margin: "18px 0" }}>
              Don&apos;t just manage calls. <span style={{ color: "#ff7a1a" }}>Manage performance.</span>
            </h1>
            <p style={{ color: "#d3ddec", fontSize: 17, maxWidth: 640 }}>
              The Call Centre Performance Management System gives supervisors and managers the visibility to measure agent productivity, call quality and customer experience.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 26 }}>
              <OpenModalButton modal="demo" className="btn btn-gold">Book a CCPMS Demo <span>→</span></OpenModalButton>
              <a className="btn btn-outline" href="#dashboards">See the product</a>
            </div>
            <div className="dash-grid" style={{ marginTop: 44 }}>
              {stats.map(([v, l]) => (
                <div className="dash-stat" key={l}><small>{l.toUpperCase()}</small><strong>{v}</strong></div>
              ))}
            </div>
            <p style={{ fontSize: 11, color: "#aab9ce", margin: "10px 0 0" }}>Illustrative demo data</p>
          </div>
        </header>

        <section style={{ background: "#f5f7fa" }}>
          <div className="container">
            <div className="section-head">
              <div className="kicker">EVERYTHING IN ONE SYSTEM</div>
              <h2>Measure what matters. Improve what counts.</h2>
              <p>Your call centre is a business performance centre. CCPMS turns customer conversations into opportunities to improve.</p>
            </div>
            <div className="feature-grid">
              {features.map(([icon, title, text]) => (
                <div className="feature" key={title}>
                  <div className="feature-icon">{icon}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {sections.map((s, i) => (
          <section key={s.id} id={s.id} style={{ background: i % 2 ? "#f5f7fa" : "#fff" }}>
            <div className={`container mockup-stage${i % 2 ? " flip" : ""}`}>
              <div className="split-copy">
                <div className="kicker">{s.kicker}</div>
                <h2>{s.title}</h2>
                <p>{s.text}</p>
                <ul className="ticks">{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
              <div className="mockup-wrap">{s.mock}</div>
            </div>
          </section>
        ))}

        <section id="demo" style={{ paddingTop: 15 }}>
          <div className="container">
            <div className="cta-band">
              <div>
                <div className="kicker">SEE CCPMS IN ACTION</div>
                <h2>Give your supervisors and managers the visibility they need.</h2>
                <p>Book a walkthrough and see how CCPMS fits your call centre.</p>
              </div>
              <OpenModalButton modal="demo" className="btn btn-gold">Book a CCPMS Demo →</OpenModalButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </ModalProvider>
  );
}
