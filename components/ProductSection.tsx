export default function ProductSection() {
  return (
    <section id="product" className="product-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-badge">Product</span>
          <h2 className="mega-title">Everything you need for perfect code reviews</h2>
          <p className="mega-description">Codity brings together AI-powered analysis, security scanning, and team collaboration in one powerful platform</p>
        </div>

        <div className="product-features">
          <div className="product-feature-large">
            <div className="feature-image">
              <div className="code-review-mockup">
                <div className="mockup-header">
                  <span className="mockup-title">Pull Request Review</span>
                  <span className="mockup-status status-reviewing">⚡ AI Reviewing...</span>
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
              <div className="card-icon">🔒</div>
              <h3>Security First</h3>
              <p>Automatically scan for SQL injection, XSS, CSRF, and 50+ other vulnerability types</p>
            </div>
            <div className="product-card">
              <div className="card-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Reviews complete in under 2 seconds, keeping your development velocity high</p>
            </div>
            <div className="product-card">
              <div className="card-icon">🌐</div>
              <h3>50+ Languages</h3>
              <p>Support for JavaScript, Python, Java, Go, Rust, and 45+ more languages</p>
            </div>
            <div className="product-card">
              <div className="card-icon">📊</div>
              <h3>Quality Metrics</h3>
              <p>Track code quality, complexity, and technical debt over time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
