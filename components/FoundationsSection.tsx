export default function FoundationsSection() {
  return (
    <section className="foundations-section">
      <div className="container">
        <div className="foundations-layout">
          <div className="foundations-content">
            <div className="section-tag-small">Under the hood</div>
            <h2>Powered by cutting-edge AI</h2>
            <p className="foundations-desc">Codity combines state-of-the-art machine learning models with advanced static analysis to deliver the most accurate code reviews.</p>
            
            <div className="tech-features">
              <div className="tech-item">
                <h4>Advanced ML Models</h4>
                <p>Trained on billions of lines of code to detect patterns humans might miss.</p>
              </div>
              <div className="tech-item">
                <h4>Enterprise-grade security →</h4>
                <p>Your code never leaves your infrastructure. SOC 2 Type II certified.</p>
              </div>
              <div className="tech-item">
                <h4>Built for any scale</h4>
                <p>From solo developers to teams with 10,000+ engineers.</p>
              </div>
            </div>

            <div className="security-badges-inline">
              <div className="badge-item">
                <div className="badge-logo">SOC 2</div>
                <span>SOC 2 ✓</span>
              </div>
              <div className="badge-item">
                <div className="badge-logo">GDPR</div>
                <span>GDPR ✓</span>
              </div>
              <div className="badge-item">
                <div className="badge-logo">HIPAA</div>
                <span>HIPAA ✓</span>
              </div>
            </div>
          </div>
          <div className="foundations-visual">
            <div className="server-container">
              <div className="server-screen">
                <div className="server-header">CODITY<br />AI ENGINE</div>
                <div className="server-display">1M+</div>
                <div className="server-grid">
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                  <div className="grid-line"></div>
                </div>
              </div>
              <div className="server-base">
                <div className="server-vents"></div>
                <div className="server-text">PULL REQUESTS<br />REVIEWED MONTHLY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
