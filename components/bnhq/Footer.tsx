export default function Footer() {
  return (
    <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <a className="brand" href="/" style={{ color: "#fff" }}>
            <span className="brand-mark">HQ</span><span>Business Number HQ</span>
          </a>
          <p style={{ maxWidth: 270, marginTop: 17 }}>Your business. Your number. Your identity. A smarter way for Nigerian businesses to communicate and grow.</p>
        </div>
        <div>
          <h4>Products</h4>
          <a href="/#mobile-pbx">Mobile Cloud PBX</a>
          <a href="/ccpms">Call Centre Performance Management</a>
          <a href="/#pricing">Plans &amp; Pricing</a>
        </div>
        <div>
          <h4>Get Started</h4>
          <a href="/#how-it-works">How It Works</a>
          <a href="/#mobile-pbx">Business Number</a>
          <a href="/ccpms#demo">Book a CCPMS Demo</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="mailto:hello@example.com">hello@example.com</a>
          <a href="#">Nigeria</a>
          <p>Contact details to be updated before launch.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Business Number HQ. All rights reserved.</span>
        <span>Built for Nigerian businesses 🇳🇬</span>
      </div>
    </div>
  </footer>
  );
}
