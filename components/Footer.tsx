import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Features</h4>
            <ul>
              <li><Link href="#">Plan</Link></li>
              <li><Link href="#">Build</Link></li>
              <li><Link href="#">Insights</Link></li>
              <li><Link href="#">Customer Requests</Link></li>
              <li><Link href="#">Linear Asks</Link></li>
              <li><Link href="#">Security</Link></li>
              <li><Link href="#">Mobile</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="#">Method</Link></li>
              <li><Link href="#">Integrations</Link></li>
              <li><Link href="#">Changelog</Link></li>
              <li><Link href="#">Documentation</Link></li>
              <li><Link href="#">Download</Link></li>
              <li><Link href="#">Switch</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Customers</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Now</Link></li>
              <li><Link href="#">README</Link></li>
              <li><Link href="#">Quality</Link></li>
              <li><Link href="#">Brand</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><Link href="#">Developers</Link></li>
              <li><Link href="#">Status</Link></li>
              <li><Link href="#">Startups</Link></li>
              <li><Link href="#">Report vulnerability</Link></li>
              <li><Link href="#">DPA</Link></li>
              <li><Link href="#">Privacy</Link></li>
              <li><Link href="#">Terms</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><Link href="/contact">Contact us</Link></li>
              <li><Link href="#">Community</Link></li>
              <li><Link href="#">X (Twitter)</Link></li>
              <li><Link href="#">GitHub</Link></li>
              <li><Link href="#">YouTube</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="security-badges">
            <span className="badge">SOC 2</span>
            <span className="badge">GDPR</span>
            <span className="badge">HIPAA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
