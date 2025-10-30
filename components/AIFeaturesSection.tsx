import Link from 'next/link';

export default function AIFeaturesSection() {
  return (
    <section className="ai-features-section">
      <div className="container">
        <div className="features-grid">
          <div className="ai-feature-card large">
            <div className="card-header">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L12 8L18 10L12 12L10 18L8 12L2 10L8 8L10 2Z" fill="#888" stroke="#888"/>
              </svg>
              <span>Product Intelligence</span>
            </div>
            <div className="ai-suggestions">
              <div className="suggestion-header">
                <span className="suggest-label">AI Code Analysis</span>
                <div className="suggest-tags">
                  <span className="tag-item"><span className="avatar-sm">alex</span> auth-service</span>
                  <span className="tag-item bug">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{marginRight: '4px'}}>
                      <rect x="1" y="5" width="10" height="6" rx="0.5" stroke="currentColor" strokeWidth="1"/>
                      <line x1="6" y1="5" x2="6" y2="1" stroke="currentColor" strokeWidth="1"/>
                      <circle cx="6" cy="2.5" r="0.5" fill="currentColor"/>
                    </svg>
                    Security
                  </span>
                </div>
              </div>
              <div className="suggestion-section">
                <div className="suggest-title">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{marginRight: '6px', display: 'inline-block', verticalAlign: 'middle'}}>
                    <circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1"/>
                    <line x1="8.5" y1="8.5" x2="12" y2="12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                  </svg>
                  Similar patterns detected
                </div>
                <div className="suggest-item">
                  <span className="item-id">PR-#198</span>
                  <span>User input not sanitized in search query</span>
                </div>
                <div className="suggest-item">
                  <span className="item-id">PR-#156</span>
                  <span>Raw SQL query in reports module</span>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <h3>Intelligent code review</h3>
              <p>Catch bugs, security issues, and code smells before they reach production</p>
              <div className="feature-stats">
                <div className="stat-item">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Accuracy</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Languages</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">&lt;2s</div>
                  <div className="stat-label">Review Time</div>
                </div>
              </div>
              <Link href="#" className="arrow-link">→</Link>
            </div>
          </div>

          <div className="ai-feature-card">
            <div className="insights-visual">
              <div className="dots-visualization">
                <canvas id="dotsCanvas" width="400" height="300"></canvas>
              </div>
            </div>
            <div className="card-footer">
              <h3>Code quality insights</h3>
              <p>Real-time analytics on bugs, vulnerabilities, and technical debt</p>
              <ul className="feature-list">
                <li>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{marginRight: '8px', display: 'inline-block', verticalAlign: 'middle'}}>
                    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1"/>
                    <circle cx="7" cy="7" r="2" fill="currentColor"/>
                  </svg>
                  Code complexity analysis
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{marginRight: '8px', display: 'inline-block', verticalAlign: 'middle'}}>
                    <rect x="1" y="4" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
                    <line x1="4" y1="1" x2="4" y2="3" stroke="currentColor" strokeWidth="1"/>
                    <line x1="7" y1="1" x2="7" y2="3" stroke="currentColor" strokeWidth="1"/>
                    <line x1="10" y1="1" x2="10" y2="3" stroke="currentColor" strokeWidth="1"/>
                    <line x1="4" y1="6" x2="10" y2="6" stroke="currentColor" strokeWidth="0.8"/>
                    <line x1="4" y1="8" x2="8" y2="8" stroke="currentColor" strokeWidth="0.8"/>
                  </svg>
                  Technical debt tracking
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{marginRight: '8px', display: 'inline-block', verticalAlign: 'middle'}}>
                    <rect x="1" y="5" width="12" height="8" rx="0.5" stroke="currentColor" strokeWidth="1"/>
                    <line x1="7" y1="5" x2="7" y2="1" stroke="currentColor" strokeWidth="1"/>
                    <circle cx="7" cy="2.5" r="0.5" fill="currentColor"/>
                  </svg>
                  Security vulnerability scanning
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{marginRight: '8px', display: 'inline-block', verticalAlign: 'middle'}}>
                    <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1"/>
                    <line x1="7" y1="2" x2="7" y2="7" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    <line x1="7" y1="7" x2="10" y2="7" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                  </svg>
                  Performance bottleneck detection
                </li>
              </ul>
              <Link href="#" className="arrow-link">→</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
