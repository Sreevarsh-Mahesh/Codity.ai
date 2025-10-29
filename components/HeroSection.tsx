import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-top">
        <div className="hero-content">
          <h1 className="hero-title">
            Spend less time reviewing, more time building!
          </h1>
          <p className="hero-subtitle">
            AI-powered code reviewer to help spot the toughest bugs and save hours.<br />
            Ship better code faster with intelligent code reviews.
          </p>
          <div className="hero-actions">
            <Link href="#" className="btn-primary">Try it out</Link>
            <Link href="#" className="btn-secondary">
              No credit card required
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
        
        <div className="hero-logo-animation">
          <div className="animated-logo-container">
            <Image 
              src="/logo-main.svg" 
              alt="Codity Logo" 
              width={250} 
              height={250} 
              className="main-animated-logo"
              priority
            />
            
            <div className="particle particle-1">
              <div className="particle-glow"></div>
            </div>
            <div className="particle particle-2">
              <div className="particle-glow"></div>
            </div>
            <div className="particle particle-3">
              <div className="particle-glow"></div>
            </div>
            <div className="particle particle-4">
              <div className="particle-glow"></div>
            </div>
            
            <div className="rotating-ring ring-1"></div>
            <div className="rotating-ring ring-2"></div>
            
            <div className="logo-glow-effect"></div>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="app-preview">
          <div className="app-sidebar">
            <div className="app-header">
              <div className="app-dots">
                <span></span><span></span><span></span>
              </div>
            </div>
            <div className="sidebar-item">
              <svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 5C3 4 3.5 3 4.5 3C4 4 4 5 4 6C4 7 4 8 4.5 9C3.5 9 3 8 3 7L3 5Z M12 5C12 4 11.5 3 10.5 3C11 4 11 5 11 6C11 7 11 8 10.5 9C11.5 9 12 8 12 7L12 5Z" fill="#666"/></svg>
              <span>Dashboard</span>
            </div>
            <div className="sidebar-item active">
              <svg width="16" height="16" viewBox="0 0 16 16"><rect x="3" y="4" width="10" height="8" rx="1" fill="#888"/><path d="M5 7h6M5 9h4" stroke="#000" strokeWidth="1"/></svg>
              <span>Code Reviews</span>
            </div>
            <div className="sidebar-item">
              <svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="5" stroke="#666" fill="none"/><path d="M6 8L7 9L10 6" stroke="#666" strokeWidth="1" fill="none"/></svg>
              <span>Approved</span>
            </div>
            <div className="sidebar-item">
              <svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 3L10 7L14 8L10 9L8 13L6 9L2 8L6 7Z" fill="#666"/></svg>
              <span>AI Insights</span>
            </div>
          </div>
          <div className="app-main">
            <div className="app-toolbar">
              <div className="toolbar-left">
                <button className="tool-btn">←</button>
                <button className="tool-btn">→</button>
                <button className="tool-btn">↻</button>
              </div>
              <div className="toolbar-center">Pull Requests</div>
            </div>
            <div className="app-content">
              <div className="issue-item">
                <span className="issue-id">PR-#247</span>
                <span className="issue-title">Fix memory leak in auth module</span>
                <span className="issue-author">🤖 AI: 3 issues • 2 suggestions</span>
                <span className="issue-time">12m</span>
              </div>
              <div className="issue-item">
                <span className="issue-id">PR-#246</span>
                <span className="issue-title">Refactor payment processing logic</span>
                <span className="issue-author">✓ Approved • Code quality: 98%</span>
                <span className="issue-time">1h</span>
              </div>
              <div className="issue-item error">
                <span className="issue-id">PR-#245</span>
                <span className="issue-title">🔒 Security: SQL injection in search</span>
                <span className="issue-author">⚠️ 2 critical vulnerabilities</span>
                <span className="issue-time">3h</span>
              </div>
              <div className="issue-item">
                <span className="issue-id">PR-#244</span>
                <span className="issue-title">Update dependencies & fix deprecations</span>
                <span className="issue-author">🤖 AI: No issues found</span>
                <span className="issue-time">5h</span>
              </div>
            </div>
          </div>
          <div className="app-detail">
            <div className="detail-header">
              <span className="detail-tag">🔒 Security</span>
              <span className="detail-tag">⚠️ High Priority</span>
              <span className="detail-id">PR-#247</span>
            </div>
            <h2 className="detail-title">Fix memory leak in auth module</h2>
            <div className="detail-code">
              <div className="code-line"><span style={{color: '#f59e0b'}}>⚠️ Issue #1: Memory Leak Pattern (Line 47)</span></div>
              <div className="code-line"><span style={{color: '#ef4444'}}>- const user = await User.findOne(&#123; email &#125;);</span></div>
              <div className="code-line"><span style={{color: '#10b981'}}>+ const user = await User.findOne(&#123; email &#125;).lean();</span></div>
              <div className="code-line"></div>
              <div className="code-line"><span style={{color: '#3b82f6'}}>💡 AI Suggestion:</span> Use .lean() to prevent memory retention</div>
              <div className="code-line"><span style={{color: '#8b5cf6'}}>📊 Impact:</span> Can cause 40% memory overhead in production</div>
              <div className="code-line"><span style={{color: '#06b6d4'}}>🔧 Auto-fix available</span> • <span style={{color: '#ec4899'}}>Similar in 3 files</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}