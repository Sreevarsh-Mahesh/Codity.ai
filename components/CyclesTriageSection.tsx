export default function CyclesTriageSection() {
  return (
    <section className="cycles-triage-section">
      <div className="container">
        <div className="split-layout">
          <div className="content-block">
            <div className="text-content">
              <h2>Track code quality metrics</h2>
              <p>Monitor review velocity, bug detection rates, and code quality trends over time.</p>
            </div>
            <div className="visual-content">
              <div className="cycle-card">
                <h3>Code Quality Trends</h3>
                <div className="cycle-legend">
                  <span className="legend-item"><span className="dot gray"></span> PRs Reviewed</span>
                  <span className="legend-item"><span className="dot yellow"></span> Bugs Found</span>
                  <span className="legend-item"><span className="dot purple"></span> Issues Fixed</span>
                </div>
                <div className="cycle-chart">
                  <svg viewBox="0 0 400 200" className="chart-svg">
                    <path d="M 20,150 Q 100,140 200,120 T 380,80" stroke="#666" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
                    <path d="M 20,180 Q 100,160 200,130 T 380,100" stroke="#f5a623" strokeWidth="3" fill="none" className="animate-path"/>
                    <path d="M 20,190 Q 100,170 200,140 T 380,110" stroke="#7c3aed" strokeWidth="3" fill="none" className="animate-path"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="content-block">
            <div className="text-content">
              <h2>AI-assisted code reviews</h2>
              <p>Get instant feedback on security vulnerabilities, performance issues, and code smells.</p>
            </div>
            <div className="visual-content">
              <div className="triage-card">
                <h3>Smart Suggestions</h3>
                <div className="triage-items">
                  <div className="triage-item">
                    <div className="item-header">
                      <span>🔒 Potential SQL injection vulnerability</span>
                    </div>
                    <div className="item-meta">
                      <div className="avatar">AI Review</div>
                    </div>
                  </div>
                  <div className="triage-menu">
                    <button className="menu-item">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 12L4 8L5.5 6.5L8 9L14.5 2.5L16 4L8 12Z" fill="currentColor"/>
                      </svg>
                      Apply fix
                    </button>
                    <button className="menu-item">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect x="4" y="4" width="8" height="8" rx="1" stroke="currentColor" fill="none"/>
                      </svg>
                      View details
                    </button>
                    <button className="menu-item">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      Ignore
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
