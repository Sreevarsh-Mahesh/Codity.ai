import Link from 'next/link';
import BlurText from '@/components/ui/shadcn-io/blur-text';
import Prism from '@/components/Prism';
import FeatureFlowSection from '../../components/FeatureFlowSection';

export default function FeaturesPage() {
  return (
    <div className="greptile-features-wrapper">
      {/* Minimalist Hero */}
      <section className="greptile-hero" style={{ position: 'relative' }}>
        <div style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0 }}>
          <Prism
            animationType="rotate"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0.5}
            glow={1}
          />
        </div>
        <div className="container">
          <div className="greptile-hero-content">
            <BlurText
              text="Features"
              delay={150}
              animateBy="words"
              direction="top"
              className="greptile-hero-title"
              as="h1"
            />
            <div className="greptile-hero-actions">
              <Link href="/pricing" className="greptile-btn-primary">Start Free Trial</Link>
              <Link href="/contact" className="greptile-btn-secondary">Book a Demo</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="greptile-stats">
        <div className="container">
          <div className="greptile-stats-grid">
            <div className="greptile-stat">
              <div className="greptile-stat-value">3627</div>
              <div className="greptile-stat-label">Bugs caught</div>
            </div>
            <div className="greptile-stat">
              <div className="greptile-stat-value">3.31</div>
              <div className="greptile-stat-label">Bugs every PR</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="greptile-features">
        <div className="container">
          <div className="greptile-section-header">
            <h2 className="greptile-section-title">Everything you need to review code faster</h2>
            <p className="greptile-section-description">
              Powerful features that integrate seamlessly into your development workflow
            </p>
          </div>

          <div className="greptile-features-grid">
            {/* Feature 1 */}
            <div className="greptile-feature-card">
              <div className="greptile-feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 9h8M8 13h6M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="greptile-feature-title">Code Navigation - Talk to Your Code</h3>
              <p className="greptile-feature-description">
                Ask anything. Find functions, compare branches, plan new features.
              </p>
              <ul className="greptile-feature-list">
                <li>Instant answers</li>
                <li>Repo-aware search</li>
                <li>Context-driven navigation</li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="greptile-feature-card">
              <div className="greptile-feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3 className="greptile-feature-title">AI That Understands Your Codebase</h3>
              <p className="greptile-feature-description">
                Not just your PR — your whole project. Structure, patterns, history — fully in context.
              </p>
              <ul className="greptile-feature-list">
                <li>Full project awareness</li>
                <li>Pattern recognition</li>
                <li>Historical context</li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="greptile-feature-card">
              <div className="greptile-feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
              </div>
              <h3 className="greptile-feature-title">Seamless Jira Sync</h3>
              <p className="greptile-feature-description">
                Auto-links tickets, summarizes changes, and flags missing features — automatically.
              </p>
              <ul className="greptile-feature-list">
                <li>Auto ticket linking</li>
                <li>Change summaries</li>
                <li>Feature tracking</li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="greptile-feature-card">
              <div className="greptile-feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="greptile-feature-title">Built for Focus — Not Fatigue</h3>
              <p className="greptile-feature-description">
                Less noise, more clarity. Only the comments that matter.
              </p>
              <ul className="greptile-feature-list">
                <li>Smart filtering</li>
                <li>Priority-based alerts</li>
                <li>Actionable insights only</li>
              </ul>
            </div>

            {/* Feature 5 */}
            <div className="greptile-feature-card">
              <div className="greptile-feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3 className="greptile-feature-title">Fix Smarter, Not Harder</h3>
              <p className="greptile-feature-description">
                AI comments with ready-to-commit fixes. Lint-safe. Reasoned. Actionable.
              </p>
              <ul className="greptile-feature-list">
                <li>One-click fixes</li>
                <li>Lint-safe solutions</li>
                <li>Context-aware refactoring</li>
              </ul>
            </div>

            {/* Feature 6 */}
            <div className="greptile-feature-card">
              <div className="greptile-feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="greptile-feature-title">Collective Memory</h3>
              <p className="greptile-feature-description">
                Every repo. Every PR. Every decision. One collective memory for your entire codebase.
              </p>
              <ul className="greptile-feature-list">
                <li>Cross-team consistency</li>
                <li>Historical decision tracking</li>
                <li>Unified knowledge base</li>
              </ul>
            </div>

            {/* Feature 7 */}
            <div className="greptile-feature-card">
              <div className="greptile-feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 7h10M7 12h10M7 17h10"/>
                </svg>
              </div>
              <h3 className="greptile-feature-title">Tagged for Clarity</h3>
              <p className="greptile-feature-description">
                Each comment comes with priority & type — security, logic, maintainability.
              </p>
              <ul className="greptile-feature-list">
                <li>Priority tagging</li>
                <li>Category classification</li>
                <li>No noise, just focus</li>
              </ul>
            </div>

            {/* Feature 8 */}
            <div className="greptile-feature-card">
              <div className="greptile-feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <h3 className="greptile-feature-title">Security + Logic Layer</h3>
              <p className="greptile-feature-description">
                Find bugs and vulnerabilities early. Goes beyond style and syntax.
              </p>
              <ul className="greptile-feature-list">
                <li>Security scanning</li>
                <li>Logic analysis</li>
                <li>Early detection</li>
              </ul>
            </div>

            {/* Feature 9 */}
            <div className="greptile-feature-card">
              <div className="greptile-feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="greptile-feature-title">Insights That Matter</h3>
              <p className="greptile-feature-description">
                Visualize review speed, merge health, and AI impact. Make better engineering calls, fast.
              </p>
              <ul className="greptile-feature-list">
                <li>Performance metrics</li>
                <li>Health visualization</li>
                <li>Data-driven decisions</li>
              </ul>
            </div>

            {/* Feature 10 */}
            <div className="greptile-feature-card">
              <div className="greptile-feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                </svg>
              </div>
              <h3 className="greptile-feature-title">Your Code, Your Control</h3>
              <p className="greptile-feature-description">
                Cloud or self-hosted — same power, your choice.
              </p>
              <ul className="greptile-feature-list">
                <li>Cloud deployment</li>
                <li>Self-hosted option</li>
                <li>Full data control</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="greptile-how-it-works">
        <div className="container">
          <div className="greptile-section-header">
            <h2 className="greptile-section-title">How it works</h2>
          </div>
          <div className="greptile-steps">
            <div className="greptile-step">
              <div className="greptile-step-number">1</div>
              <h3 className="greptile-step-title">Connect your repository</h3>
              <p className="greptile-step-description">
                Install Codity on your GitHub or GitLab repository in seconds.
              </p>
            </div>
            <div className="greptile-step">
              <div className="greptile-step-number">2</div>
              <h3 className="greptile-step-title">Open a pull request</h3>
              <p className="greptile-step-description">
                Our AI analyzes your code changes with full codebase context.
              </p>
            </div>
            <div className="greptile-step">
              <div className="greptile-step-number">3</div>
              <h3 className="greptile-step-title">Get instant feedback</h3>
              <p className="greptile-step-description">
                Receive intelligent suggestions, fixes, and security alerts in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Interactive */}
      <FeatureFlowSection />

      {/* CTA Section */}
      <section className="greptile-cta">
        <div className="container">
          <div className="greptile-cta-content">
            <h2 className="greptile-cta-title">Ready to ship faster?</h2>
            <p className="greptile-cta-description">
              Start your free trial today. No credit card required.
            </p>
            <div className="greptile-cta-actions">
              <Link href="/pricing" className="greptile-btn-primary-large">Start Free Trial</Link>
              <Link href="/contact" className="greptile-btn-secondary-large">Book a Demo</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="container" style={{ padding: '2rem', textAlign: 'center' }}>
        <Link href="/" className="greptile-back-link">← Back to Home</Link>
      </div>
    </div>
  );
}
