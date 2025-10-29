import Link from 'next/link';

export default function IntegrationsSection() {
  return (
    <section className="integrations-section">
      <div className="container">
        <div className="section-header-small">
          <span className="tag-purple">Workflows and integrations</span>
        </div>
        <h2 className="section-title-left">Integrate with your favorite tools</h2>
        <p className="section-desc-left">Connect Codity with GitHub, GitLab, Bitbucket, and your entire development stack for seamless code reviews.</p>
        
        <div className="integrations-carousel">
          <div className="integration-card">
            <div className="integration-visual">
              <div className="integration-preview">
                <div className="preview-item">
                  <svg width="20" height="20"><rect width="20" height="20" fill="#666"/></svg>
                  <span>Intercom · zoe@acme.inc</span>
                </div>
                <div className="preview-text">We need a cost breakdown across all cloud platforms in a single report or dashboard</div>
                <div className="preview-meta">
                  <span className="meta-avatar">ACME</span>
                  <span className="meta-label">New request</span>
                </div>
              </div>
            </div>
            <div className="integration-footer">
              <h4>GitHub Integration</h4>
              <p>Automatic code reviews on every pull request</p>
              <Link href="#" className="arrow-link">→</Link>
            </div>
          </div>

          <div className="integration-card">
            <div className="integration-visual">
              <div className="git-preview">
                <div className="git-item">#20319 igorlin 15287 add ...</div>
                <div className="git-item">🔗 igor linked ⚙ igorlin 15287 add ...</div>
                <div className="git-item">igor changed status from In Progress</div>
              </div>
            </div>
            <div className="integration-footer">
              <h4>Slack Notifications</h4>
              <p>Get instant alerts for code issues and review requests</p>
              <button className="add-btn">+</button>
            </div>
          </div>

          <div className="integration-card">
            <div className="integration-visual mobile">
              <div className="mobile-device">
                <div className="mobile-screen">
                  <div className="mobile-header">Inbox</div>
                  <div className="mobile-issue">
                    <span className="mobile-icon">⚡</span>
                    <span>Change button layout</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="integration-footer">
              <h4>VS Code Extension</h4>
              <p>Review code without leaving your editor</p>
              <Link href="#" className="arrow-link">→</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
