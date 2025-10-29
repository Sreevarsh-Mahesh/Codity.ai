import MergeTimeChart from './MergeTimeChart';
import AIHumanBalanceChart from './AIHumanBalanceChart';
import ReviewerLoadChart from './ReviewerLoadChart';

export default function CyclesTriageSection() {
  return (
    <section className="cycles-triage-section">
      <div className="container">
        <div className="split-layout">
              <div className="content-block">
                <div className="text-content">
                  <h2 className="section-heading section-heading-blue">Track code quality metrics</h2>
                  <p>Monitor review velocity, bug detection rates, and code quality trends over time.</p>
                </div>
                <div className="visual-content">
                  <MergeTimeChart />
                </div>
              </div>

              <div className="content-block">
                <div className="text-content">
                  <h2 className="section-heading section-heading-orange">AI-assisted code reviews</h2>
                  <p>Get instant feedback on security vulnerabilities, performance issues, and code smells.</p>
                </div>
                <div className="visual-content">
                  <AIHumanBalanceChart />
                </div>
              </div>
        </div>
        
            <div className="split-layout" style={{marginTop: '4rem'}}>
              <div className="content-block">
                <div className="text-content">
                  <h2 className="section-heading section-heading-green">Reviewer workload distribution</h2>
                  <p>Monitor how review tasks are distributed across your team members and identify bottlenecks.</p>
                </div>
                <div className="visual-content">
                  <ReviewerLoadChart />
                </div>
              </div>

              <div className="content-block">
                <div className="text-content">
                  <h2 className="section-heading section-heading-purple">Smart code analysis</h2>
                  <p>AI-powered insights help identify potential issues before they become problems.</p>
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
