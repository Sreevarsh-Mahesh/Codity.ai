export default function ProductSection() {
  return (
    <section id="product" className="product-section">
      <div className="container">
        <div className="section-header-center">
          <h2 className="mega-title">Everything you need for perfect code reviews</h2>
          <p className="mega-description">Codity brings together AI-powered analysis, security scanning, and team collaboration in one powerful platform</p>
        </div>

        <div className="product-features">
          <div className="product-feature-large">
            <div className="feature-image">
              <div className="code-review-mockup">
                <div className="mockup-header">
                  <span className="mockup-title">Pull Request Review</span>
                  <span className="mockup-status status-reviewing">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{marginRight: '4px', display: 'inline-block', verticalAlign: 'middle'}}>
                      <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1"/>
                      <line x1="6" y1="1" x2="6" y2="6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      <line x1="6" y1="6" x2="9" y2="6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    </svg>
                    AI Reviewing...
                  </span>
                </div>
                <div className="mockup-content">
                  <div className="code-diff">
                    <div className="diff-line added">+ async function validateUser(email) {'{'}</div>
                    <div className="diff-line removed">- function validateUser(email) {'{'}</div>
                    <div className="diff-line context">    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;</div>
                    <div className="diff-line context">    return regex.test(email);</div>
                    <div className="diff-line added">+ {'}'}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-description">
              <h3>AI-Powered Code Analysis</h3>
              <p>Our advanced machine learning models review every line of code, detecting bugs, security vulnerabilities, and suggesting improvements in real-time.</p>
              <ul className="feature-checklist">
                <li>✓ Security vulnerability detection</li>
                <li>✓ Performance optimization suggestions</li>
                <li>✓ Code smell identification</li>
                <li>✓ Best practice recommendations</li>
              </ul>
            </div>
          </div>

          <div className="product-grid">
            <div className="product-card">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="3" y="14" width="26" height="15" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <line x1="16" y1="14" x2="16" y2="3" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="16" cy="6" r="2" fill="currentColor"/>
                </svg>
              </div>
              <h3>Security First</h3>
              <p>Automatically scan for SQL injection, XSS, CSRF, and 50+ other vulnerability types</p>
            </div>
            <div className="product-card">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
                  <line x1="16" y1="6" x2="16" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="16" y1="16" x2="22" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Lightning Fast</h3>
              <p>Reviews complete in under 2 seconds, keeping your development velocity high</p>
            </div>
            <div className="product-card">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="8" cy="22" r="2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="16" cy="22" r="2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="24" cy="22" r="2" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>50+ Languages</h3>
              <p>Support for JavaScript, Python, Java, Go, Rust, and 45+ more languages</p>
            </div>
            <div className="product-card">
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="4" y="8" width="24" height="18" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <line x1="4" y1="8" x2="4" y2="5" stroke="currentColor" strokeWidth="2"/>
                  <line x1="16" y1="8" x2="16" y2="5" stroke="currentColor" strokeWidth="2"/>
                  <line x1="28" y1="8" x2="28" y2="5" stroke="currentColor" strokeWidth="2"/>
                  <line x1="8" y1="14" x2="22" y2="14" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="8" y1="18" x2="16" y2="18" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3>Quality Metrics</h3>
              <p>Track code quality, complexity, and technical debt over time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
