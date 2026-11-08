"use client";

import { useState } from "react";
import Link from "next/link";
import { OpenModalButton } from "./ModalProvider";

const links = [
  ["/#mobile-pbx", "Mobile Cloud PBX"],
  ["/ccpms", "CCPMS"],
  ["/#how-it-works", "How It Works"],
  ["/#pricing", "Pricing"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav-wrap">
      <nav className="container">
        <Link className="brand" href="/" aria-label="AGaf Global Systems home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-logo" src="/logo.jpeg" alt="AGaf Global Systems" />
        </Link>
        <div className={`nav-links${open ? " open" : ""}`}>
          {links.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
        </div>
        <div className="nav-actions">
          <Link className="btn btn-outline" href="/ccpms">Explore CCPMS</Link>
          <OpenModalButton modal="signup" className="btn btn-gold">
            Get Started <span>→</span>
          </OpenModalButton>
        </div>
        <button className="menu-btn" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>☰</button>
      </nav>
    </div>
  );
}
