export default function FeaturesDetailedSection() {
  return (
    <section id="features" className="features-detailed-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-badge-enhanced">Core Capabilities</span>
          <h2 className="mega-title-enhanced">Everything You Need to Ship Better Code</h2>
          <p className="section-subtitle">
            Comprehensive tools and intelligent automation designed to accelerate your development workflow 
            while maintaining the highest standards of code quality and security.
          </p>
        </div>

        <div className="features-list-enhanced">
          {/* New feature: Fastest AI Code Reviewer */}
          <div className="feature-row-enhanced">
            <div className="feature-content-enhanced">
              <div className="feature-badge-modern speed">⚡ Speed & Performance</div>
              <h3 className="feature-title-enhanced">Fastest AI Code Reviewer in the Market</h3>
              <p className="feature-description-enhanced">
                Codity revolutionizes code review speed with AI-powered analysis that delivers comprehensive 
                feedback in mere seconds. Our intelligent engine surfaces high-confidence suggestions, automated 
                fixes, and crystal-clear explanations, enabling both reviewers and authors to maintain velocity 
                without compromising quality.
              </p>
              <ul className="feature-list-enhanced">
                <li><span className="list-icon">✓</span> Reviews typical PRs in under 2 seconds</li>
                <li><span className="list-icon">✓</span> One-click fixes and inline suggestions</li>
                <li><span className="list-icon">✓</span> Intelligent refactoring, security, and style recommendations</li>
                <li><span className="list-icon">✓</span> Real-time feedback as you code</li>
              </ul>
            </div>
            <div className="feature-visual">
              <div className="speed-demo">
                <div className="speed-left">
                  <div className="speed-number">
                    <span className="speed-icon" aria-hidden>⚡</span>
                    <span className="speed-value">2s</span>
                  </div>
                  <div className="speed-meta">
                    <div className="speed-caption">average review time</div>
                    <div className="speed-bars" aria-hidden>
                      <span className="speed-bar"></span>
                      <span className="speed-bar"></span>
                      <span className="speed-bar"></span>
                    </div>
                  </div>
                </div>

                {/* Extra compact content to reduce empty space */}
                <div className="speed-extras" aria-hidden>
                  <div className="mini-pr-card">
                    <div className="pr-header">
                      <div className="pr-title">PR: fix/auth-bug</div>
                      <div className="pr-badge">High</div>
                    </div>
                    <div className="pr-stats">
                      <span>Files: <strong>3</strong></span>
                      <span>Comments: <strong>4</strong></span>
                    </div>
                    <div className="pr-snippet">const isAdmin = user.role === 'admin';</div>
                    <div className="pr-actions">
                      <button className="apply-btn">Apply suggestion</button>
                      <button className="view-btn">View PR</button>
                    </div>
                  </div>

                  <ul className="use-cases">
                    <li>Refactor suggestions</li>
                    <li>Security & vulnerability fixes</li>
                    <li>Style & lint consistency</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-row-enhanced alternate">
            <div className="feature-content-enhanced">
              <div className="feature-badge-modern ai">🤖 AI-Powered Intelligence</div>
              <h3 className="feature-title-enhanced">Next-Generation Bug Detection</h3>
              <p className="feature-description-enhanced">
                Powered by state-of-the-art AI models trained on billions of lines of open-source code, 
                our intelligent detection engine catches subtle bugs, security vulnerabilities, and code smells 
                that traditional linters completely miss. Experience the future of automated code analysis.
              </p>
              <div className="feature-stats-row-enhanced">
                <div className="stat-enhanced">
                  <span className="stat-num-enhanced">98.7%</span>
                  <span className="stat-text-enhanced">Detection Accuracy</span>
                </div>
                <div className="stat-enhanced">
                  <span className="stat-num-enhanced">10B+</span>
                  <span className="stat-text-enhanced">Training Data Lines</span>
                </div>
                <div className="stat-enhanced">
                  <span className="stat-num-enhanced">0.3%</span>
                  <span className="stat-text-enhanced">False Positive Rate</span>
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

          <div className="feature-row-enhanced">
            <div className="feature-content-enhanced">
              <div className="feature-badge-modern security">🔒 Enterprise Security</div>
              <h3 className="feature-title-enhanced">Military-Grade Security Scanning</h3>
              <p className="feature-description-enhanced">
                Protect your codebase with enterprise-level security analysis that goes beyond basic checks. 
                Our comprehensive security engine covers OWASP Top 10, CVE databases, custom security rules, 
                and emerging threat patterns to keep your application safe from vulnerabilities.
              </p>
              <ul className="security-list-enhanced">
                <li><span className="security-icon">🛡️</span> <strong>SQL Injection Prevention</strong> - Deep query analysis</li>
                <li><span className="security-icon">🔐</span> <strong>XSS & CSRF Detection</strong> - Client-side security</li>
                <li><span className="security-icon">🔑</span> <strong>Exposed Secrets Scanning</strong> - API keys & credentials</li>
                <li><span className="security-icon">⚠️</span> <strong>Dependency Vulnerabilities</strong> - Real-time CVE monitoring</li>
                <li><span className="security-icon">🔍</span> <strong>Code Injection Defense</strong> - Runtime protection</li>
                <li><span className="security-icon">📋</span> <strong>Compliance Checking</strong> - GDPR, SOC2, HIPAA</li>
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
