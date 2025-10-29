'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="greptile-pricing-wrapper">
      {/* Hero Section */}
      <section className="greptile-pricing-hero">
        <div className="container">
          <div className="greptile-pricing-hero-content">
            <h1 className="greptile-pricing-title">
              Simple, transparent pricing
            </h1>
            <p className="greptile-pricing-subtitle">
              Choose the plan that fits your team. Start free, upgrade when you're ready.
            </p>
            
            {/* Billing Toggle */}
            <div className="billing-toggle">
              <button 
                className={`billing-option ${billingCycle === 'monthly' ? 'active' : ''}`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button 
                className={`billing-option ${billingCycle === 'annual' ? 'active' : ''}`}
                onClick={() => setBillingCycle('annual')}
              >
                Annual
                <span className="billing-badge">Save 20%</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="greptile-pricing-cards">
        <div className="container">
          <div className="pricing-grid">
            
            {/* Free Plan */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3 className="pricing-card-title">Free</h3>
                <div className="pricing-card-price">
                  <span className="price-amount">$0</span>
                  <span className="price-period">/month</span>
                </div>
                <p className="pricing-card-description">
                  Perfect for trying out Codity
                </p>
              </div>
              <div className="pricing-card-body">
                <ul className="pricing-features">
                  <li><span className="check-icon">✓</span> Up to 5 PRs per month</li>
                  <li><span className="check-icon">✓</span> 1 repository</li>
                  <li><span className="check-icon">✓</span> Basic bug detection</li>
                  <li><span className="check-icon">✓</span> Community support</li>
                  <li className="disabled"><span className="cross-icon">✗</span> Security scanning</li>
                  <li className="disabled"><span className="cross-icon">✗</span> Custom rules</li>
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
                  <span className="price-amount">
                    ${billingCycle === 'monthly' ? '29' : '23'}
                  </span>
                  <span className="price-period">/user/month</span>
                </div>
                <p className="pricing-card-description">
                  For individual developers and small teams
                </p>
              </div>
              <div className="pricing-card-body">
                <ul className="pricing-features">
                  <li><span className="check-icon">✓</span> Unlimited PRs</li>
                  <li><span className="check-icon">✓</span> Unlimited repositories</li>
                  <li><span className="check-icon">✓</span> Advanced bug detection</li>
                  <li><span className="check-icon">✓</span> Security scanning</li>
                  <li><span className="check-icon">✓</span> One-click fixes</li>
                  <li><span className="check-icon">✓</span> Priority support</li>
                  <li><span className="check-icon">✓</span> Custom rules</li>
                  <li><span className="check-icon">✓</span> GitHub & GitLab</li>
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
                  <span className="price-amount">
                    ${billingCycle === 'monthly' ? '49' : '39'}
                  </span>
                  <span className="price-period">/user/month</span>
                </div>
                <p className="pricing-card-description">
                  For growing teams that need more
                </p>
              </div>
              <div className="pricing-card-body">
                <ul className="pricing-features">
                  <li><span className="check-icon">✓</span> Everything in Pro</li>
                  <li><span className="check-icon">✓</span> Team analytics dashboard</li>
                  <li><span className="check-icon">✓</span> Advanced security rules</li>
                  <li><span className="check-icon">✓</span> Team management</li>
                  <li><span className="check-icon">✓</span> SSO authentication</li>
                  <li><span className="check-icon">✓</span> API access</li>
                  <li><span className="check-icon">✓</span> Dedicated support</li>
                  <li><span className="check-icon">✓</span> SLA guarantee</li>
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
                  For large organizations with specific needs
                </p>
              </div>
              <div className="pricing-card-body">
                <ul className="pricing-features">
                  <li><span className="check-icon">✓</span> Everything in Team</li>
                  <li><span className="check-icon">✓</span> Self-hosted option</li>
                  <li><span className="check-icon">✓</span> Custom integrations</li>
                  <li><span className="check-icon">✓</span> Advanced compliance</li>
                  <li><span className="check-icon">✓</span> Training & onboarding</li>
                  <li><span className="check-icon">✓</span> Custom SLA</li>
                  <li><span className="check-icon">✓</span> 24/7 priority support</li>
                  <li><span className="check-icon">✓</span> Volume discounts</li>
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
              <h3 className="faq-question">Do you offer a free trial?</h3>
              <p className="faq-answer">
                Yes! All paid plans come with a 14-day free trial. No credit card required.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can I change plans later?</h3>
              <p className="faq-answer">
                Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What payment methods do you accept?</h3>
              <p className="faq-answer">
                We accept all major credit cards, PayPal, and can arrange invoicing for Enterprise customers.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Is my code secure?</h3>
              <p className="faq-answer">
                Yes. We use industry-standard encryption and never store your source code. We only analyze it in memory.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Do you offer refunds?</h3>
              <p className="faq-answer">
                Yes. If you're not satisfied within the first 30 days, we'll provide a full refund, no questions asked.
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
