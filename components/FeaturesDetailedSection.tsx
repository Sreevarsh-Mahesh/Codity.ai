export default function FeaturesDetailedSection() {
  return (
    <section id="features" className="features-detailed-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-badge">Features</span>
          <h2 className="mega-title">Powerful features for modern teams</h2>
        </div>

        <div className="features-list">
          <div className="feature-row">
            <div className="feature-content">
              <div className="feature-badge">AI-Powered</div>
              <h3>Intelligent Bug Detection</h3>
              <p>Our AI models are trained on billions of lines of code from open source projects, enabling them to detect subtle bugs that traditional linters miss.</p>
              <div className="feature-stats-row">
                <div className="stat">
                  <span className="stat-num">98.7%</span>
                  <span className="stat-text">Accuracy</span>
                </div>
                <div className="stat">
                  <span className="stat-num">10B+</span>
                  <span className="stat-text">Training Lines</span>
                </div>
                <div className="stat">
                  <span className="stat-num">0.3%</span>
                  <span className="stat-text">False Positives</span>
                </div>
              </div>
            </div>
            <div className="feature-visual">
              <div className="bug-detection-demo">
                <div className="demo-code">
                  <div className="code-line">if (user.role = &apos;admin&apos;) {'{'}</div>
                  <div className="code-line error-line">
                    <span className="error-indicator">⚠️</span> // Assignment instead of comparison
                  </div>
                  <div className="code-line">  grantAccess();</div>
                  <div className="code-line">{'}'}</div>
                </div>
                <div className="demo-fix">
                  <strong>💡 AI Suggestion:</strong>
                  <p>Use === for comparison instead of = assignment</p>
                  <button className="fix-btn">Apply Fix</button>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-row reverse">
            <div className="feature-content">
              <div className="feature-badge">Security</div>
              <h3>Advanced Security Scanning</h3>
              <p>Protect your codebase with comprehensive security analysis covering OWASP Top 10, CVEs, and custom security rules.</p>
              <ul className="security-list">
                <li><span className="icon">🛡️</span> SQL Injection Prevention</li>
                <li><span className="icon">🔐</span> XSS & CSRF Detection</li>
                <li><span className="icon">🔑</span> Exposed Secrets Scanning</li>
                <li><span className="icon">⚠️</span> Dependency Vulnerabilities</li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="security-demo">
                <div className="vulnerability-card critical">
                  <div className="vuln-header">
                    <span className="severity">🔴 Critical</span>
                    <span className="vuln-type">SQL Injection</span>
                  </div>
                  <p className="vuln-desc">User input directly concatenated in SQL query</p>
                  <div className="vuln-location">auth/login.js:47</div>
                </div>
                <div className="vulnerability-card high">
                  <div className="vuln-header">
                    <span className="severity">🟠 High</span>
                    <span className="vuln-type">Exposed API Key</span>
                  </div>
                  <p className="vuln-desc">Hardcoded API key found in source code</p>
                  <div className="vuln-location">config/keys.js:12</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
