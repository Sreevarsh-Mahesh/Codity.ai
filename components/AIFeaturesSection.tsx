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
                  <span className="tag-item bug">🔒 Security</span>
                </div>
              </div>
              <div className="suggestion-section">
                <div className="suggest-title">🔍 Similar patterns detected</div>
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
                <li>🎯 Code complexity analysis</li>
                <li>📊 Technical debt tracking</li>
                <li>🔒 Security vulnerability scanning</li>
                <li>⚡ Performance bottleneck detection</li>
              </ul>
              <Link href="#" className="arrow-link">→</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
