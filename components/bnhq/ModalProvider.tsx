"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type ModalId = "signup" | "demo";

const ModalContext = createContext<{ open: (id: ModalId) => void; close: () => void } | null>(null);

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used inside ModalProvider");
  return ctx;
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<ModalId | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const open = useCallback((id: ModalId) => {
    setSubmitted(false);
    setActive(id);
  }, []);
  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const backdrop = (id: ModalId) => (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && active === id) close();
  };

  const thanks = (
    <>
      <button className="close" onClick={close} aria-label="Close">×</button>
      <div className="feature-icon">✓</div>
      <h2>Thank you!</h2>
      <p>
        Your sample submission has been received in this prototype. Connect a backend or form
        service to receive real enquiries.
      </p>
      <button className="btn btn-dark" onClick={close}>Close</button>
    </>
  );

  return (
    <ModalContext.Provider value={{ open, close }}>
      {children}

      <div className={`modal${active === "signup" ? " show" : ""}`} role="dialog" aria-modal="true" aria-labelledby="signupTitle" onClick={backdrop("signup")}>
        <div className="modal-box">
          {submitted ? thanks : (
            <>
              <button className="close" onClick={close} aria-label="Close">×</button>
              <div className="kicker">START YOUR BUSINESS LINE</div>
              <h2 id="signupTitle">Get your business number.</h2>
              <p>This is a website prototype. Submit a sample enquiry to preview the self-service journey.</p>
              <form onSubmit={onSubmit}>
                <div className="field"><label htmlFor="su-name">Your name</label><input id="su-name" required placeholder="e.g. Ada Okafor" /></div>
                <div className="field"><label htmlFor="su-biz">Business name</label><input id="su-biz" required placeholder="Your business name" /></div>
                <div className="field"><label htmlFor="su-phone">Phone number</label><input id="su-phone" required type="tel" placeholder="080..." /></div>
                <div className="field">
                  <label htmlFor="su-type">What best describes your business?</label>
                  <select id="su-type">
                    <option>Retail / Shop</option>
                    <option>Professional services</option>
                    <option>Online business</option>
                    <option>Startup</option>
                    <option>Project / Campaign</option>
                    <option>Other</option>
                  </select>
                </div>
                <button className="btn btn-gold" style={{ width: "100%" }}>Continue <span>→</span></button>
              </form>
              <div className="notice">Demo only: no account will be created and no number will be provisioned.</div>
            </>
          )}
        </div>
      </div>

      <div className={`modal${active === "demo" ? " show" : ""}`} role="dialog" aria-modal="true" aria-labelledby="demoTitle" onClick={backdrop("demo")}>
        <div className="modal-box">
          {submitted ? thanks : (
            <>
              <button className="close" onClick={close} aria-label="Close">×</button>
              <div className="kicker">CCPMS PRODUCT DEMONSTRATION</div>
              <h2 id="demoTitle">Let&apos;s talk about your call centre.</h2>
              <p>Leave your details and the prototype will show a sample confirmation.</p>
              <form onSubmit={onSubmit}>
                <div className="field"><label htmlFor="d-name">Full name</label><input id="d-name" required placeholder="Your name" /></div>
                <div className="field"><label htmlFor="d-email">Work email</label><input id="d-email" required type="email" placeholder="name@company.com" /></div>
                <div className="field"><label htmlFor="d-org">Organisation</label><input id="d-org" required placeholder="Company name" /></div>
                <div className="field">
                  <label htmlFor="d-agents">Number of agents</label>
                  <select id="d-agents">
                    <option>1–10</option>
                    <option>11–30</option>
                    <option>31–100</option>
                    <option>100+</option>
                  </select>
                </div>
                <button className="btn btn-dark" style={{ width: "100%" }}>Request a Demo →</button>
              </form>
              <div className="notice">Demo only: connect this form to your CRM or email workflow before launch.</div>
            </>
          )}
        </div>
      </div>
    </ModalContext.Provider>
  );
}

export function OpenModalButton({
  modal,
  className,
  style,
  children,
}: {
  modal: ModalId;
  className: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const { open } = useModal();
  return (
    <button className={className} style={style} onClick={() => open(modal)}>
      {children}
    </button>
  );
}
