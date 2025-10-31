import Link from 'next/link';
import DecryptedText from '@/components/ui/shadcn-io/decrypted-text';
import BlurText from '@/components/ui/shadcn-io/blur-text';

export default function FeaturesPage() {
  return (
    <div className="greptile-features-wrapper">
      {/* Minimalist Hero */}
      <section className="greptile-hero">
        <div className="container">
          <div className="greptile-hero-content">
            <BlurText
              text="Ship faster with AI-powered code reviews"
              delay={150}
              animateBy="words"
              direction="top"
              className="greptile-hero-title"
              as="h1"
            />
            <p className="greptile-hero-subtitle">
              <DecryptedText
                text="Codity understands your entire codebase to provide intelligent, context-aware reviews in seconds."
                speed={60}
                maxIterations={15}
                sequential={false}
                className=""
                encryptedClassName="opacity-50"
                animateOn="hover"
              />
            </p>
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
              <div className="greptile-stat-value">2s</div>
              <div className="greptile-stat-label">Average review time</div>
            </div>
            <div className="greptile-stat">
              <div className="greptile-stat-value">98.7%</div>
              <div className="greptile-stat-label">Detection accuracy</div>
            </div>
            <div className="greptile-stat">
              <div className="greptile-stat-value">10B+</div>
              <div className="greptile-stat-label">Lines of training data</div>
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
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3 className="greptile-feature-title">Lightning Fast Reviews</h3>
              <p className="greptile-feature-description">
                Get comprehensive code reviews in under 2 seconds. No more waiting hours for feedback.
              </p>
              <ul className="greptile-feature-list">
                <li>Reviews in &lt;2s</li>
                <li>Real-time feedback</li>
                <li>Instant suggestions</li>
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
              <h3 className="greptile-feature-title">Full Codebase Context</h3>
              <p className="greptile-feature-description">
                Unlike other tools, Codity understands your entire codebase, not just the changed files.
              </p>
              <ul className="greptile-feature-list">
                <li>Deep codebase analysis</li>
                <li>Cross-file understanding</li>
                <li>Contextual suggestions</li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="greptile-feature-card">
              <div className="greptile-feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="greptile-feature-title">Security First</h3>
              <p className="greptile-feature-description">
                Automatic detection of security vulnerabilities, exposed secrets, and OWASP Top 10 issues.
              </p>
              <ul className="greptile-feature-list">
                <li>CVE scanning</li>
                <li>Secret detection</li>
                <li>OWASP coverage</li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="greptile-feature-card">
              <div className="greptile-feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3 className="greptile-feature-title">One-Click Fixes</h3>
              <p className="greptile-feature-description">
                Apply AI-suggested fixes with a single click. Refactor, optimize, and fix bugs instantly.
              </p>
              <ul className="greptile-feature-list">
                <li>Auto-fix suggestions</li>
                <li>Smart refactoring</li>
                <li>Code optimization</li>
              </ul>
            </div>

            {/* Feature 5 */}
            <div className="greptile-feature-card">
              <div className="greptile-feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M2 12h20"/>
                </svg>
              </div>
              <h3 className="greptile-feature-title">Custom Rules</h3>
              <p className="greptile-feature-description">
                Enforce your team's coding standards and best practices with customizable rules.
              </p>
              <ul className="greptile-feature-list">
                <li>Custom guidelines</li>
                <li>Style enforcement</li>
                <li>Team standards</li>
              </ul>
            </div>

            {/* Feature 6 */}
            <div className="greptile-feature-card">
              <div className="greptile-feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="9" y1="9" x2="15" y2="15"/>
                  <line x1="15" y1="9" x2="9" y2="15"/>
                </svg>
              </div>
              <h3 className="greptile-feature-title">Smart Integrations</h3>
              <p className="greptile-feature-description">
                Works seamlessly with GitHub, GitLab, and your existing development tools.
              </p>
              <ul className="greptile-feature-list">
                <li>GitHub integration</li>
                <li>GitLab support</li>
                <li>API access</li>
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
