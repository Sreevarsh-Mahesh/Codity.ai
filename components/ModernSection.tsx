import Link from 'next/link';
import BlurText from '@/components/ui/shadcn-io/blur-text';

export default function ModernSection() {
  return (
    <section className="modern-section">
      <div className="container">
        <BlurText
          text="Made for modern development teams"
          delay={150}
          animateBy="words"
          direction="top"
          className="section-title"
        />
        <p className="section-description">
          Codity is built on the principles that define exceptional engineering teams: thorough code review, rapid iteration, and an unwavering commitment to code quality. <Link href="#" className="link-arrow">Try Codity today</Link>
        </p>
        
        <div className="feature-cards">
          <div className="feature-card">
            <div className="card-visual">
              <div className="card-icon-container">
                <svg width="120" height="120" viewBox="0 0 120 120" className="feature-icon">
                  <rect x="20" y="30" width="80" height="60" rx="4" fill="#1a1a1a" stroke="#3b82f6" strokeWidth="2"/>
                  <line x1="30" y1="45" x2="70" y2="45" stroke="#f44" strokeWidth="2"/>
                  <line x1="30" y1="55" x2="90" y2="55" stroke="#4f4" strokeWidth="2"/>
                  <line x1="30" y1="65" x2="60" y2="65" stroke="#ff0" strokeWidth="2"/>
                  <circle cx="85" cy="75" r="8" fill="#3b82f6" opacity="0.3"/>
                  <text x="82" y="80" fontSize="12" fill="#fff">AI</text>
                </svg>
              </div>
            </div>
            <div className="card-content">
              <h3>AI-powered code analysis</h3>
              <p className="card-description">Deep learning models trained on 10B+ lines of code detect security flaws, performance issues, and code smells</p>
              <button className="expand-btn">+</button>
            </div>
          </div>

          <div className="feature-card">
            <div className="card-visual">
              <div className="card-icon-container speed-lines">
                <div className="speed-indicator">&lt;2s</div>
                <div className="speed-line" style={{animationDelay: '0s'}}></div>
                <div className="speed-line" style={{animationDelay: '0.1s'}}></div>
                <div className="speed-line" style={{animationDelay: '0.2s'}}></div>
                <div className="speed-line" style={{animationDelay: '0.3s'}}></div>
                <div className="speed-line" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
            <div className="card-content">
              <h3>Lightning-fast reviews</h3>
              <p className="card-description">Get instant feedback on every PR. Our AI reviews code faster than any human while maintaining accuracy</p>
              <button className="expand-btn">+</button>
            </div>
          </div>

          <div className="feature-card">
            <div className="card-visual">
              <div className="card-icon-container">
                <svg width="200" height="120" viewBox="0 0 200 120" className="feature-icon">
                  <rect x="40" y="30" width="120" height="60" rx="8" fill="#1a1a1a" stroke="#4f4" strokeWidth="2"/>
                  <circle cx="70" cy="50" r="12" fill="#4f4"/>
                  <path d="M63 50 L69 56 L77 46" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="90" y1="45" x2="140" y2="45" stroke="#666" strokeWidth="2"/>
                  <line x1="90" y1="55" x2="150" y2="55" stroke="#666" strokeWidth="2"/>
                  <line x1="90" y1="65" x2="130" y2="65" stroke="#666" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            <div className="card-content">
              <h3>Catch bugs before production</h3>
              <p className="card-description">Prevent critical bugs, security vulnerabilities, and performance bottlenecks from reaching your users</p>
              <button className="expand-btn">+</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
