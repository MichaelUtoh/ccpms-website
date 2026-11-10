import Nav from "@/components/bnhq/Nav";
import Footer from "@/components/bnhq/Footer";
import { ModalProvider, OpenModalButton } from "@/components/bnhq/ModalProvider";

const trust = [
  "Separate work from personal calls",
  "Welcome customers professionally",
  "Keep records of conversations",
  "Grow without office PBX hardware",
];

const pains = [
  "Customers call your personal number, even after business hours.",
  "You miss enquiries while serving another customer or attending to work.",
  "There is no easy way to review what was discussed with a customer.",
  "Your business depends too much on one person's availability.",
];

const pbxFeatures = [
  ["☎", "Your Dedicated Business Number", "Give your business a recognisable contact number. Keep your personal number separate from your business identity."],
  ["♫", "Professional Welcome Message", "Set a greeting that introduces your business and makes every caller feel they have reached the right place."],
  ["⇄", "Smart Call Routing", "Use IVR menus to direct customers to sales, support, accounts or the right team member."],
  ["◉", "Call Recording", "Keep a record of conversations to support follow-ups, service reviews and dispute resolution."],
  ["◷", "Missed-call Visibility", "See calls you could not answer and identify customers who may need a call back."],
  ["▥", "Call Analytics", "Understand inbound and outbound call activity, duration and communication trends."],
];

const useCases = [
  ["🛍️", "Retailers & Shop Owners", "Separate business enquiries from your personal calls."],
  ["🏠", "Real Estate Professionals", "Give buyers, tenants and property owners one dedicated contact."],
  ["📦", "Online Vendors", "Manage orders, customer enquiries and delivery calls professionally."],
  ["💊", "Pharmacies & Clinics", "Make it easier for customers and patients to reach your business."],
  ["🚚", "Logistics & Delivery", "Organise customer and delivery-related communication."],
  ["🧑🏾‍💻", "Consultants & Service Providers", "Build a professional contact identity independent of your personal line."],
];

const steps = [
  ["Create Your Account", "Register and access your business communications dashboard."],
  ["Choose Your Number", "Browse available business numbers and select your preferred option."],
  ["Download the App", "Install the supported mobile app and sign in to your account."],
  ["Set Up Your Calls", "Configure your greeting, call routing and business preferences."],
  ["Start Communicating", "Begin using your business number once activation is complete."],
];

const ccpmsFeatures = [
  ["◎", "Agent Performance", "Individual and team performance dashboards against defined targets."],
  ["✓", "Quality Assurance", "Structured QA scorecards, evaluation records and coaching opportunities."],
  ["◷", "Productivity Metrics", "Track AHT, schedule adherence and other configured performance indicators."],
  ["♡", "Customer Experience", "Bring CSAT and customer feedback into performance reviews."],
  ["▤", "Knowledge Assessment", "Record knowledge tests and identify training needs."],
  ["↗", "Management Reporting", "Review trends, performance bands, monthly results and coaching actions."],
];

const faqs = [
  ["Do I need to buy another phone?", "No. The service is designed to work through the supported mobile application on a compatible smartphone. Confirm supported devices and operating systems before activation."],
  ["Can I keep my personal number private?", "Yes. Customers call your dedicated business number, while you manage business calls through the application. Your personal number does not need to be your advertised business contact."],
  ["Can calls be directed to different people or departments?", "Yes. Configure supported IVR options and call-routing destinations so callers can reach the right person or team."],
  ["Can I record customer conversations?", "Call recording is a product capability where enabled. Businesses are responsible for appropriate notices, lawful processing, access controls and compliance with applicable privacy requirements."],
  ["Can I use a number for an event or temporary project?", "A dedicated number can be useful for campaigns, events and temporary projects. Availability, subscription duration and number-retention terms will depend on the selected service."],
  ["Does it work without internet?", "The mobile application relies on an internet connection for app-based calling and service features. Ask the team about supported network requirements and contingency options."],
  ["How quickly can I get started?", "The self-service journey is designed to be straightforward. Activation depends on number availability, account verification and successful service setup."],
];

type Bar = React.CSSProperties & { "--h": string };
const bar = (h: number): Bar => ({ "--h": `${h}%` });

function Bars({ values, className = "bars" }: { values: number[]; className?: string }) {
  return (
    <div className={className}>
      {values.map((v, i) => <span key={i} style={bar(v)} />)}
    </div>
  );
}

function Features({ items, style }: { items: string[][]; style?: React.CSSProperties }) {
  return (
    <div className="feature-grid" style={style}>
      {items.map(([icon, title, text]) => (
        <div className="feature" key={title}>
          <div className="feature-icon">{icon}</div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <ModalProvider>
      <div className="topbar">
        <div className="container">
          <span>Built for ambitious Nigerian businesses 🇳🇬</span>
          <span>One platform. Two powerful business tools.</span>
        </div>
      </div>
      <Nav />

      <main id="home">
        <header className="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">YOUR BUSINESS. YOUR NUMBER. YOUR IDENTITY.</div>
              <h1>Your business deserves <em>its own number.</em></h1>
              <p className="hero-copy">
                Stop mixing business calls with personal calls. 
                {/* Give customers a professional number, welcome every caller, route enquiries to the right person and keep a record of your conversations — all from your mobile phone. */}
                <ul>
                  <li className="bullet-item">Welcome every caller with your customized greeting</li>
                  <li className="bullet-item">Route enquiries to the right person e.g Press 1 for Sales, Press 2 for Finance
</li>
                  <li className="bullet-item">All customer conversations are recorded.</li>
                  <li className="bullet-item">It works on your mobile phone.</li>
                  <li className="bullet-item">Call analytics are available</li>
                  <li className="bullet-item">You can set up after office mesaages</li>
                </ul>
              </p>
              <div className="hero-ctas">
                <OpenModalButton modal="signup" className="btn btn-gold">Get Your Business Number <span>→</span></OpenModalButton>
                <a className="btn btn-outline" href="#how-it-works">See How It Works</a>
              </div>
              <div className="hero-note">For shops, startups, service businesses, growing teams and new projects.</div>
            </div>
            <div className="hero-visual">
              <div className="float-card float-one">
                <span className="float-icon">↗</span>
                <strong>Business calls, organised</strong>
                <span style={{ color: "#718096" }}>Your work line stays separate</span>
              </div>
              <div className="phone">
                <div className="phone-notch" />
                <div className="phone-head"><span>9:41</span><span>●●● ▰</span></div>
                <div style={{ fontSize: 10, color: "#68758a" }}>GOOD MORNING</div>
                <div style={{ fontWeight: 850, fontSize: 17, margin: "2px 0 12px" }}>Your business line</div>
                <div className="phone-number">
                  <small>YOUR BUSINESS NUMBER</small>
                  <strong>0209 000 111</strong>
                  <span>● ACTIVE BUSINESS LINE</span>
                </div>
                <div className="phone-actions"><i>☎</i><i>▤</i><i>◉</i><i>⚙</i></div>
                <div style={{ fontWeight: 800, fontSize: 12, margin: "15px 0 4px" }}>Recent activity</div>
                <div className="phone-row"><span><b>New customer</b><small>Incoming · 2 min ago</small></span><span className="dot" /></div>
                <div className="phone-row"><span><b>Missed call</b><small>Today · 9:12 AM</small></span><span style={{ color: "#c47721", fontWeight: 800 }}>Follow up</span></div>
                <div className="phone-row"><span><b>Call recording</b><small>Yesterday · 4:30 PM</small></span><span>▶</span></div>
              </div>
              <div className="float-card float-two">
                <span className="float-icon">✓</span>
                <strong>Welcome message active</strong>
                <span style={{ color: "#718096" }}>Your customers hear your brand</span>
              </div>
            </div>
          </div>
        </header>

        <div className="trust-strip">
          <div className="container trust-grid">
            {trust.map((t, i) => (
              // <div className="trust-item" key={t}><b>{String(i + 1).padStart(2, "0")}</b> {t}</div>
              <div className="trust-item" key={t}><b>•</b> {t}</div>
            ))}
          </div>
        </div>

        <section className="problem">
          <div className="container problem-grid">
            <div className="people-scene" style={{ minHeight: 0, background: "none" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images.webp" alt="Restaurant owner taking a customer call at Mama Titi's Kitchen, Surulere" style={{ display: "block", width: "100%", height: "auto" }} />
            </div>
            <div className="split-copy">
              <div className="kicker">THE EVERYDAY BUSINESS CHALLENGE</div>
              <h2>Your personal number was never meant to carry your whole business.</h2>
              <p>When customers, suppliers and staff all call your personal line, work follows you everywhere. As your business grows, scattered calls become harder to manage.</p>
              <div className="pain-list">
                {pains.map((p) => (
                  <div className="pain" key={p}><b>✕</b><span>{p}</span></div>
                ))}
              </div>
              <a className="btn btn-dark" href="#mobile-pbx">See a smarter way to work →</a>
            </div>
          </div>
        </section>

        <section id="mobile-pbx">
          <div className="container">
            <div className="section-head">
              <div className="kicker">MOBILE CLOUD PBX</div>
              <h2>Everything your business needs to handle calls professionally.</h2>
              <p>More than a telephone number. A mobile business phone system that helps you welcome, direct, manage and keep track of customer conversations.</p>
            </div>
            <Features items={pbxFeatures} />
          </div>
        </section>

        <div className="brand-band">
          <div className="container">
            <div>
              <div className="eyebrow">BUILD A BRAND CUSTOMERS CAN REACH</div>
              <h2>Look like the business you are becoming.</h2>
              <p>Whether you are running a one-person business, managing a growing team or working from your shop, your customers deserve a professional experience.</p>
              <p>Start small. Sound professional. Grow bigger.</p>
              <OpenModalButton modal="signup" className="btn btn-gold">Choose a Business Number →</OpenModalButton>
            </div>
            <div className="big-quote">“Your business may be new. Your communication should already be professional.”</div>
          </div>
        </div>

        <section>
          <div className="container">
            <div className="section-head">
              <div className="kicker">MADE FOR THE WAY NIGERIANS DO BUSINESS</div>
              <h2>Whatever you do, give customers one number to remember.</h2>
              <p>From your first customer to your next branch, build a more organised way to stay connected.</p>
            </div>
            <div className="usecase-grid">
              {useCases.map(([emoji, title, text]) => (
                <div className="usecase" key={title}>
                  <div className="emoji">{emoji}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="steps" id="how-it-works">
          <div className="container">
            <div className="section-head">
              <div className="kicker">SIMPLE SELF-SERVICE ACTIVATION</div>
              <h2>Your business number in five simple steps.</h2>
              <p>No complicated PBX installation. Create your account and follow the steps to get started, subject to number availability and verification.</p>
            </div>
            <div className="step-grid">
              {steps.map(([title, text], i) => (
                <div className="step" key={title}>
                  <div className="step-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="cta-band">
              <div>
                <h2>Starting a business or launching a project?</h2>
                <p>Get a dedicated number for your new shop, startup, event, campaign or temporary project. Start with a professional business identity from day one.</p>
              </div>
              <OpenModalButton modal="signup" className="btn btn-dark">Get Started Today →</OpenModalButton>
            </div>
          </div>
        </section>

        <section className="products">
          <div className="container">
            <div className="section-head">
              <div className="kicker">ONE PLATFORM · TWO PRODUCTS</div>
              <h2>From managing business calls to managing call-centre performance.</h2>
              <p>Choose the product that fits your operation. Use each independently or bring them together as your business grows.</p>
            </div>
            <div className="product-grid">
              <div className="product-card pb">
                {/* <div className="product-tag">PRODUCT 01</div> */}
                <h3>Mobile Cloud PBX</h3>
                <p>A professional business number and a smarter way to manage customer calls from your mobile phone.</p>
                <a className="btn btn-gold" href="#mobile-pbx">Explore Mobile PBX →</a>
                <div className="mini-dashboard">
                  <small style={{ color: "#dce5f2" }}>BUSINESS CALL ACTIVITY</small>
                  <Bars values={[45, 70, 55, 90, 65, 100, 78]} />
                </div>
              </div>
              <div className="product-card cc" id="ccpms">
                <h3>Call Centre Performance Management System</h3>
                <p>Give supervisors and managers the visibility to measure agent productivity, call quality and customer experience.</p>
                <a className="btn btn-dark" href="/ccpms">Explore CCPMS →</a>
                <div className="mini-dashboard">
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10 }}>
                    <b>Team performance</b><span style={{ color: "#16866a" }}>Monthly view</span>
                  </div>
                  <Bars values={[65, 85, 58, 94, 72, 88]} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ccpms-detail" style={{ background: "#f5f7fa" }}>
          <div className="container">
            <div className="section-head">
              <div className="kicker">CCPMS</div>
              <h2>Don&apos;t just manage calls. Manage performance.</h2>
              <p>Your call centre is more than a team answering calls. It is a business performance centre. Measure what matters and turn customer conversations into opportunities to improve.</p>
            </div>
            <div className="dashboard-demo">
              <div className="dash-top">
                <div>
                  <b>CCPMS · Performance Overview</b>
                  <div style={{ fontSize: 10, color: "#aab9ce" }}>Illustrative dashboard preview</div>
                </div>
                <span style={{ fontSize: 11, color: "#f0c36d" }}>● Demo data</span>
              </div>
              <div className="dash-grid">
                {[["AGENTS TRACKED", "24"], ["AVERAGE QA", "91%"], ["CSAT SCORE", "4.6/5"], ["AVG. AHT", "04:32"]].map(([l, v]) => (
                  <div className="dash-stat" key={l}><small>{l}</small><strong>{v}</strong></div>
                ))}
              </div>
              <div style={{ fontSize: 11, color: "#dce5f2" }}>Team performance trend · Illustrative</div>
              <Bars className="dash-chart" values={[45, 58, 52, 75, 68, 90, 84, 100]} />
            </div>
            <Features items={ccpmsFeatures} style={{ marginTop: 22 }} />
            <div style={{ textAlign: "center", marginTop: 28 }}>
              <OpenModalButton modal="demo" className="btn btn-dark">Book a CCPMS Demo →</OpenModalButton>
            </div>
          </div>
        </section>

        <section id="pricing">
          <div className="container">
            <div className="section-head">
              <div className="kicker">SIMPLE, FLEXIBLE PLANS</div>
              <h2>A better way to run your business calls.</h2>
              <p>Choose a plan that suits your business. Final subscription prices, call charges, number fees and included features will be confirmed before launch.</p>
            </div>
            <div className="pricing-grid">
              <div className="price-card">
                <h3>Starter</h3>
                <p>For individuals and new businesses getting organised.</p>
                <div className="price">Get started</div>
                <ul>
                  <li>Dedicated business number options</li>
                  <li>Mobile app access</li>
                  <li>Call history</li>
                  <li>Core business calling features</li>
                </ul>
                <OpenModalButton modal="signup" className="btn btn-outline" style={{ width: "100%" }}>Choose Starter</OpenModalButton>
              </div>
              <div className="price-card featured">
                <div className="kicker">GROWING BUSINESS</div>
                <h3>Business</h3>
                <p>For teams that want more control over customer calls.</p>
                <div className="price">Flexible plan</div>
                <ul>
                  <li>Business number and team options</li>
                  <li>Welcome message and IVR</li>
                  <li>Call routing and recording options</li>
                  <li>Call analytics and missed-call visibility</li>
                </ul>
                <OpenModalButton modal="signup" className="btn btn-gold" style={{ width: "100%" }}>Choose Business</OpenModalButton>
              </div>
              <div className="price-card">
                <h3>CCPMS</h3>
                <p>For contact centres focused on measurable performance.</p>
                <div className="price">Request a demo</div>
                <ul>
                  <li>Agent performance dashboards</li>
                  <li>QA and performance scorecards</li>
                  <li>Configured KPI tracking</li>
                  <li>Management reporting</li>
                </ul>
                <OpenModalButton modal="demo" className="btn btn-outline" style={{ width: "100%" }}>Book a Demo</OpenModalButton>
              </div>
            </div>
            <p style={{ fontSize: 11, color: "#7b8799", textAlign: "center", marginTop: 18 }}>
              Pricing shown is indicative plan positioning, not a published tariff. Confirm all commercial terms before accepting payment.
            </p>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-head">
              <div className="kicker">FREQUENTLY ASKED QUESTIONS</div>
              <h2>Good questions. Straight answers.</h2>
            </div>
            <div className="faq-list">
              {faqs.map(([q, a]) => (
                <details className="faq" key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section style={{ paddingTop: 15 }}>
          <div className="container">
            <div className="cta-band">
              <div>
                <div className="kicker">YOUR BUSINESS STARTS HERE</div>
                <h2>Don&apos;t wait until your business becomes big before you start operating like a brand.</h2>
                <p>Get your business number. Manage your calls. Build customer trust. Grow with confidence.</p>
              </div>
              <OpenModalButton modal="signup" className="btn btn-gold">Get Started Today →</OpenModalButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </ModalProvider>
  );
}
