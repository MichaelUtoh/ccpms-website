"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const steps = ["Your account", "Choose a number", "Choose a plan", "Payment", "Verify identity"];

const numbers = ["0203 950 3000", "0203 950 3001", "0203 950 3002", "0203 950 3004", "0203 950 3005", "0203 950 3100", "0203 950 3200", "0203 950 3300", "0203 950 3400", "0203 950 3500"];

const SAMPLE_NIN = "12345678901";

type Plan = { id: string; name: string; users: string; blurb: string; price: number | null; tag?: string; perks: string[]; off?: string[] };
const plans: Plan[] = [
  { id: "basic", name: "Basic", users: "1 user", blurb: "The essentials for your business calls.", price: 6000, perks: ["1 phone number", "Includes 1 user", "₦6,000 per additional person/user", "Professional welcome/caller greeting", "Call forwarding", "Call history", "10-minute setup", "Everything managed for you"], off: ["Call recording", "AI team performance scoring", "AI team-specific coaching", "AI insights", "Advanced team features", "Full dashboard"] },
  { id: "executive", name: "Executive", users: "6–10 users", blurb: "More capabilities for a larger team.", price: 30000, perks: ["1 phone number", "Includes 5 users", "₦10,000 per additional person/user", "Professional welcome/caller greeting", "Teams and ring groups", "Call queues with hold music", "Business hours", "Call history", "Call forwarding", "Call recording (90 days)", "Call transcripts", "Call routing and IVR", "Voicemail", "Smart decision-making analytics", "AI team performance scoring", "AI team-specific coaching", "AI insights", "10-minute setup", "Everything managed for you"] },
];
const ENT_PERKS = ["Everything in Business, plus", "Unlimited users and teams", "Custom roles and permissions", "Dedicated account manager", "Bring your own trunk", "Data retention policies", "Audit and compliance", "Integrations", "Custom quotations"];
const naira = (n: number) => "₦" + n.toLocaleString("en-NG");

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [number, setNumber] = useState("");
  const [biz, setBiz] = useState("");
  const [query, setQuery] = useState("");
  const [planId, setPlanId] = useState("");
  const [nin, setNin] = useState("");
  const [cam, setCam] = useState<"idle" | "live" | "captured">("idle");
  const [camErr, setCamErr] = useState("");
  const [ack, setAck] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const plan = plans.find((p) => p.id === planId);

  const stopCam = () => { streamRef.current?.getTracks().forEach((t) => t.stop()); streamRef.current = null; };
  useEffect(() => stopCam, []);
  const openCam = async () => {
    setCamErr("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
      streamRef.current = stream;
      setCam("live");
      requestAnimationFrame(() => { if (videoRef.current) videoRef.current.srcObject = stream; });
    } catch {
      setCamErr("Camera unavailable here. Use the sample capture instead.");
    }
  };
  const capture = () => { stopCam(); setCam("captured"); };
  const restart = () => {
    stopCam();
    setDone(false); setStep(0); setNumber(""); setBiz(""); setQuery(""); setPlanId(""); setNin(""); setCam("idle"); setCamErr(""); setAck(false);
    window.scrollTo({ top: 0 });
  };
  const kycReady = /^\d{11}$/.test(nin) && cam === "captured" && ack;

  const next = (e: React.FormEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0 });
    if (step === steps.length - 1) setDone(true);
    else setStep(step + 1);
  };

  return (
    <div className="ob">
      <aside className="ob-side">
        <div className="ob-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpeg" alt="AGaf Global Systems" />
        </div>
        <div className="ob-side-body">
          <div className="kicker">BUSINESS NUMBER HQ</div>
          <h2>Your next chapter.<br /><em>Your own number.</em></h2>
          <p>A dedicated line for the business you&rsquo;re building. Let&rsquo;s make it yours.</p>
          <ol className="ob-steps">
            {steps.map((s, i) => (
              <li key={s} className={done ? (i === steps.length - 1 ? "active" : "done") : i < step ? "done" : i === step ? "active" : ""}>
                <span>{done || i < step ? "✓" : i + 1}</span>{s}
              </li>
            ))}
          </ol>
        </div>
        <div className="ob-side-foot">
          <div>Your business. Your number. Your identity.</div>
          <a href="mailto:hello@example.com">Need a hand? Talk to our team ↗</a>
        </div>
      </aside>

      <main className="ob-main">
        <div className="ob-top">
          <Link href="/">← Back to website</Link>
          <span className="ob-badge">INTERACTIVE PREVIEW</span>
        </div>

        <div className="ob-center">
          {done ? (
            <div className="ob-form">
              <div className="ob-bigcheck">✓</div>
              <div className="kicker">ONBOARDING PREVIEW COMPLETE</div>
              <h1>Ready for your next chapter.</h1>
              <p className="ob-sub">{biz || "You"}, you&rsquo;ve explored the complete onboarding journey.</p>
              <div className="ob-card">
                <span className="ob-pill">Preview submission complete</span>
                <div className="ob-final-number">{number}</div>
                <div className="ob-sum"><span>Plan</span><b>{plan?.name} · {plan?.users}</b></div>
                <div className="ob-sum"><span>Monthly price</span><b>{plan?.price ? naira(plan.price) : "To be confirmed"}</b></div>
                <div className="ob-sum"><span>Payment</span><b>Simulated confirmation</b></div>
                <div className="ob-sum"><span>KYC</span><b>Sample submitted · unverified</b></div>
                <div className="notice" style={{ marginTop: 22 }}>No number is reserved or activated. A live service requires real account authentication, payment confirmation and a connected identity verification provider.</div>
                <a className="btn btn-gold ob-btn" href="mailto:Sales@agafglobalsystem.com.ng">Talk to our team ↗</a>
              </div>
              <div className="ob-actions">
                <Link className="btn btn-outline" href="/">Back to website</Link>
                <button type="button" className="ob-link" style={{ padding: 0, marginRight: 4 }} onClick={restart}>Restart preview</button>
              </div>
            </div>
          ) : (
            <form onSubmit={next} className="ob-form">
              {step === 0 && (
                <>
                  <div className="kicker">LET&rsquo;S GET YOU STARTED</div>
                  <h1>A home for your business.</h1>
                  <p className="ob-sub">Create your dashboard, pick your number and get ready for your first business call.</p>
                  <div className="ob-card">
                    <div className="field"><label htmlFor="b">Business name</label><input id="b" required value={biz} onChange={(e) => setBiz(e.target.value)} placeholder="e.g. Adunni’s Studio" /></div>
                    <div className="field"><label htmlFor="e">Email address</label><input id="e" type="email" required placeholder="you@example.com" /></div>
                    <div className="field"><label htmlFor="p">Phone number</label><input id="p" type="tel" required placeholder="e.g. 0800 000 0000" /></div>
                    <div className="field">
                      <label htmlFor="nin">NIN <span style={{ fontWeight: 500, color: "#777" }}>(optional)</span></label>
                      <input id="nin" value={nin} onChange={(e) => setNin(e.target.value.replace(/\D/g, ""))} inputMode="numeric" maxLength={11} pattern="[0-9]{11}" title="NIN is 11 digits" placeholder="11-digit National Identification Number" />
                    </div>
                    <div className="field">
                      <label htmlFor="pw">Choose a password</label>
                      <input id="pw" type="password" required minLength={8} placeholder="At least 8 characters" />
                      <small>Use an example password, never your real password.</small>
                    </div>
                    <div className="notice">Design preview: this form does not create or authenticate an account. Sample details are used only during this visit.</div>
                    <button className="btn btn-gold ob-btn">Create preview dashboard <span>→</span></button>
                    <p className="ob-alt">Already have an account? <a href="#">Log in</a></p>
                  </div>
                </>
              )}

              {step === 1 && (
                <>
                  <div className="kicker">01 / YOUR BUSINESS LINE</div>
                  <h1>Good numbers. Great beginnings.</h1>
                  <p className="ob-sub">Welcome, {biz || "there"}. Choose the number your customers remember.</p>
                  <div className="ob-pool"><span>Number pool</span><b>{numbers.length} sample business numbers</b></div>
                  <div className="ob-search">
                    <label htmlFor="q">Find your favourite ending</label>
                    <input id="q" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search numbers, e.g. 3000" />
                  </div>
                  <div className="ob-numgrid" role="radiogroup" aria-label="Business numbers">
                    {numbers.filter((n) => n.replace(/\s/g, "").includes(query.replace(/\s/g, ""))).map((n) => (
                      <button type="button" role="radio" aria-checked={n === number} key={n} className={`ob-num${n === number ? " on" : ""}`} onClick={() => setNumber(n)}>
                        <span><strong>{n}</strong><small>SAMPLE BUSINESS NUMBER</small></span>
                        <i aria-hidden />
                      </button>
                    ))}
                  </div>
                  <p className="ob-hint">Sample inventory only. Selecting a number does not reserve or activate it.</p>
                  <Actions back={() => setStep(0)} backLabel="Account" label="Choose a plan" disabled={!number} />
                </>
              )}

              {step === 2 && (
                <>
                  <div className="kicker">02 / MAKE ROOM TO GROW</div>
                  <h1>A plan for your next chapter.</h1>
                  <p className="ob-sub">Start with the team you have today. All published prices are billed monthly.</p>
                  <div className="ob-pool"><span>Your chosen number</span><b>{number}</b></div>
                  <div className="ob-plangrid" role="radiogroup" aria-label="Plans">
                    {plans.map((pl) => (
                      <button type="button" role="radio" aria-checked={pl.id === planId} key={pl.id} className={`ob-plan${pl.id === planId ? " on" : ""}`} onClick={() => setPlanId(pl.id)}>
                        {pl.tag && <span className="ob-tag">{pl.tag}</span>}
                        <span className="ob-plan-head"><strong>{pl.name}</strong><i aria-hidden /></span>
                        <small>{pl.users} · {pl.blurb}</small>
                        <span className="ob-price">{pl.price ? <>{naira(pl.price)} <em>/ month</em></> : "To be confirmed"}</span>
                        <ul>{pl.perks.map((x) => <li key={x}>{x}</li>)}{pl.off?.map((x) => <li key={x} className="off">{x}</li>)}</ul>
                      </button>
                    ))}
                  </div>
                  <div className="ob-plan ob-ent">
                    <span className="ob-plan-head"><strong>Enterprise</strong><span className="ob-pill">More than 10 users</span></span>
                    <span className="ob-price">Let’s talk</span>
                    <small>For enterprises that need custom and more advanced solutions.</small>
                    <ul>{ENT_PERKS.map((x) => <li key={x}>{x}</li>)}</ul>
                    <a href="mailto:Sales@agafglobalsystem.com.ng">Talk to Sales ↗</a>
                  </div>
                  <p className="ob-hint">Enterprise onboarding is arranged with Sales.</p>
                  <Actions back={() => setStep(1)} backLabel="Change number" label="Continue" disabled={!planId} />
                </>
              )}

              {step === 3 && (
                <>
                  <div className="kicker">03 / REVIEW &amp; PAYMENT</div>
                  <h1>You&rsquo;re one step closer.</h1>
                  <p className="ob-sub">Review your selection before trying the payment confirmation preview.</p>
                  <div className="ob-card">
                    <span className="ob-pill">Awaiting demo confirmation</span>
                    <div className="ob-sum"><span>Business number</span><b>{number}</b></div>
                    <div className="ob-sum"><span>{plan?.name} plan · {plan?.users}</span><b>{plan?.price ? `${naira(plan.price)}/month` : "To be confirmed"}</b></div>
                    <div className="ob-sum total"><span>Monthly total</span><b>{plan?.price ? naira(plan.price) : "To be confirmed"}</b></div>
                    <div className="notice">This is a simulated checkout. No money is collected and no card or banking details are requested.</div>
                    <button className="btn btn-gold ob-btn">Simulate payment confirmation <span>→</span></button>
                    <p className="ob-hint" style={{ marginTop: 12 }}>KYC opens only after the demo payment is confirmed.</p>
                  </div>
                  <div className="ob-actions"><button type="button" className="btn btn-outline" onClick={() => setStep(2)}>← Change plan</button></div>
                </>
              )}

              {step === 4 && (
                <>
                  <div className="kicker">04 / KNOW YOUR CUSTOMER</div>
                  <h1>Put a face to your business.</h1>
                  <p className="ob-sub">Explore the identity submission step after your demo payment confirmation.</p>
                  <div className="ob-card">
                    <span className="ob-pill">Demo payment confirmed</span>
                    <div className="notice" style={{ marginTop: 16 }}>KYC preview only. Use the supplied sample NIN. A facial capture is not a liveness or identity check; nothing is sent to a verification provider.</div>
                    <div className="field">
                      <label htmlFor="kyc-nin">National Identification Number (NIN)</label>
                      <input id="kyc-nin" value={nin} onChange={(e) => setNin(e.target.value.replace(/\D/g, ""))} inputMode="numeric" maxLength={11} placeholder="Use the sample NIN below" />
                      <button type="button" className="ob-link" onClick={() => setNin(SAMPLE_NIN)}>Use sample NIN</button>
                      <small>The sample has 11 digits for format validation only. Do not enter a real NIN.</small>
                    </div>
                    <div className="ob-capture">
                      <div className={`ob-oval${cam === "captured" ? " ok" : ""}`}>
                        {cam === "live" ? <video ref={videoRef} autoPlay playsInline muted /> : cam === "captured" ? <span>✓</span> : <span className="ring" />}
                      </div>
                      <strong>{cam === "captured" ? "Capture received" : "Facial capture"}</strong>
                      <small>{camErr || (cam === "live" ? "Centre your face, then capture." : "Try the camera locally or use a sample capture.")}</small>
                      <div className="ob-cap-actions">
                        {cam === "live"
                          ? <button type="button" className="btn btn-outline" onClick={capture}>Capture</button>
                          : <button type="button" className="btn btn-outline" onClick={openCam}>Open camera</button>}
                        <button type="button" className="btn btn-outline" onClick={() => { stopCam(); setCam("captured"); }}>Use sample capture</button>
                      </div>
                    </div>
                    <label className="ob-check-row">
                      <input type="checkbox" checked={ack} onChange={(e) => setAck(e.target.checked)} />
                      I understand this is a preview, and the NIN and capture are not verified or submitted to a live service.
                    </label>
                    <button className="btn btn-gold ob-btn" disabled={!kycReady}>Submit KYC preview <span>→</span></button>
                  </div>
                  <div className="ob-actions"><button type="button" className="btn btn-outline" onClick={() => { stopCam(); setCam("idle"); setStep(3); }}>← Payment summary</button></div>
                </>
              )}
            </form>
          )}
        </div>

        <p className="ob-foot">No real account, payment or identity check is created. Progress resets on refresh.<br />Use sample details and a password you don&rsquo;t use elsewhere.</p>
      </main>
    </div>
  );
}

function Actions({ back, label, backLabel = "Back", disabled = false }: { back: () => void; label: string; backLabel?: string; disabled?: boolean }) {
  return (
    <div className="ob-actions">
      <button type="button" className="btn btn-outline" onClick={back}>← {backLabel}</button>
      <button className="btn btn-gold" disabled={disabled}>{label} <span>→</span></button>
    </div>
  );
}
