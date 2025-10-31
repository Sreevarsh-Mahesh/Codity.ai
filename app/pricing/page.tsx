'use client';

import Link from 'next/link';
import DecryptedText from '@/components/ui/shadcn-io/decrypted-text';
import BlurText from '@/components/ui/shadcn-io/blur-text';

export default function PricingPage() {
  return (
    <div className="greptile-pricing-wrapper">
      {/* Hero Section */}
      <section className="greptile-pricing-hero">
        <div className="container">
          <div className="greptile-pricing-hero-content">
            <BlurText
              text="Simple, transparent pricing"
              delay={150}
              animateBy="words"
              direction="top"
              className="greptile-pricing-title"
              as="h1"
            />
            <p className="greptile-pricing-subtitle">
              <DecryptedText
                text="Choose the plan that fits your team. Start free, upgrade when you're ready."
                speed={60}
                maxIterations={15}
                sequential={false}
                className=""
                encryptedClassName="opacity-50"
                animateOn="hover"
              />
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="greptile-pricing-cards">
        <div className="container">
          <div className="pricing-grid">
            
            {/* Developer Plan */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3 className="pricing-card-title">Free</h3>
                <div className="pricing-card-price">
                  <span className="price-amount">$0</span>
                  <span className="price-period">/month</span>
                </div>
                <p className="pricing-card-description">
                  Perfect for individual developers
                </p>
              </div>
              <div className="pricing-card-body">
                <ul className="pricing-features">
                  <li><span className="check-icon">✓</span> Basic AI PR reviews (limited/month)</li>
                  <li><span className="check-icon">✓</span> Limited AI chat</li>
                  <li><span className="check-icon">✓</span> 2 repository limit</li>
                  <li className="disabled"><span className="cross-icon">✗</span> Jira integration</li>
                  <li className="disabled"><span className="cross-icon">✗</span> Advanced analytics</li>
                  <li className="disabled"><span className="cross-icon">✗</span> Custom review rules</li>
                </ul>
              </div>
              <div className="pricing-card-footer">
                <Link href="https://codity.ai" className="pricing-btn secondary">
                  Get Started
                </Link>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="pricing-card featured">
              <div className="popular-badge">Most Popular</div>
              <div className="pricing-card-header">
                <h3 className="pricing-card-title">Pro</h3>
                <div className="pricing-card-price">
                  <span className="price-amount">$11.99</span>
                  <span className="price-period">/user/month</span>
                </div>
                <p className="pricing-card-description">
                  For professional developers
                </p>
              </div>
              <div className="pricing-card-body">
                <ul className="pricing-features">
                  <li><span className="check-icon">✓</span> Unlimited PR reviews</li>
                  <li><span className="check-icon">✓</span> AI chat with repo context</li>
                  <li><span className="check-icon">✓</span> Jira & GitHub issue linking</li>
                  <li><span className="check-icon">✓</span> Basic analytics</li>
                  <li><span className="check-icon">✓</span> Unlimited repositories</li>
                  <li><span className="check-icon">✓</span> Priority support</li>
                </ul>
              </div>
              <div className="pricing-card-footer">
                <Link href="/contact" className="pricing-btn primary">
                  Start Free Trial
                </Link>
              </div>
            </div>

            {/* Team Plan */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3 className="pricing-card-title">Team</h3>
                <div className="pricing-card-price">
                  <span className="price-amount">$31.99</span>
                  <span className="price-period">/user/month</span>
                </div>
                <p className="pricing-card-description">
                  For growing engineering teams
                </p>
              </div>
              <div className="pricing-card-body">
                <ul className="pricing-features">
                  <li><span className="check-icon">✓</span> Everything in Pro</li>
                  <li><span className="check-icon">✓</span> Team analytics dashboard</li>
                  <li><span className="check-icon">✓</span> Custom review rules</li>
                  <li><span className="check-icon">✓</span> Priority support</li>
                  <li><span className="check-icon">✓</span> Team management</li>
                  <li><span className="check-icon">✓</span> Advanced collaboration tools</li>
                </ul>
              </div>
              <div className="pricing-card-footer">
                <Link href="/contact" className="pricing-btn secondary">
                  Contact Sales
                </Link>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3 className="pricing-card-title">Enterprise</h3>
                <div className="pricing-card-price">
                  <span className="price-amount">Custom</span>
                </div>
                <p className="pricing-card-description">
                  For large organizations at scale
                </p>
              </div>
              <div className="pricing-card-body">
                <ul className="pricing-features">
                  <li><span className="check-icon">✓</span> Everything in Team</li>
                  <li><span className="check-icon">✓</span> On-prem deployment</li>
                  <li><span className="check-icon">✓</span> Org-level learning</li>
                  <li><span className="check-icon">✓</span> Advanced analytics (reviewer load, merge time)</li>
                  <li><span className="check-icon">✓</span> SSO / SCIM</li>
                  <li><span className="check-icon">✓</span> SLA-backed uptime</li>
                  <li><span className="check-icon">✓</span> Dedicated support team</li>
                  <li><span className="check-icon">✓</span> Custom integrations</li>
                </ul>
              </div>
              <div className="pricing-card-footer">
                <Link href="/contact" className="pricing-btn secondary">
                  Contact Sales
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="greptile-pricing-faq">
        <div className="container">
          <div className="faq-header">
            <h2 className="faq-title">Frequently asked questions</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">What is Codity and how does it work?</h3>
              <p className="faq-answer">
                Codity is an AI-powered code review tool designed to enhance code quality and streamline development workflows. It identifies potential issues, suggests improvements, and ensures your code adheres to best practices.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Who can benefit from using Codity?</h3>
              <p className="faq-answer">
                Codity is perfect for development teams, solo programmers, and organizations aiming to improve code quality, reduce bugs, and accelerate deployment times.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Does Codity integrate with my existing tools?</h3>
              <p className="faq-answer">
                Yes! Codity integrates seamlessly with popular version control systems like GitHub, GitLab, and Bitbucket, as well as CI/CD pipelines for effortless implementation.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How does Codity ensure code security and privacy?</h3>
              <p className="faq-answer">
                We prioritize your security by using encrypted connections and following industry-leading practices to ensure your code is safe. Your data is never shared or stored beyond what's necessary for the review process.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How does Codity help improve development workflows?</h3>
              <p className="faq-answer">
                Codity streamlines code reviews by automatically detecting issues, offering actionable suggestions, and ensuring adherence to coding standards. This reduces review time, enhances collaboration, and helps teams ship high-quality code faster.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can I get a custom plan?</h3>
              <p className="faq-answer">
                Yes! Enterprise customers can work with our team to create a custom plan that fits their specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="greptile-pricing-cta">
        <div className="container">
          <div className="pricing-cta-content">
            <h2 className="pricing-cta-title">Ready to get started?</h2>
            <p className="pricing-cta-description">
              Start your free trial today. No credit card required.
            </p>
            <div className="pricing-cta-actions">
              <Link href="/contact" className="greptile-btn-primary-large">
                Start Free Trial
              </Link>
              <Link href="/contact" className="greptile-btn-secondary-large">
                Talk to Sales
              </Link>
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
