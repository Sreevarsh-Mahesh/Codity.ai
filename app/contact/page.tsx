'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    subject: 'general'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page-wrapper">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">Get in Touch</h1>
            <p className="contact-hero-subtitle">
              Have questions about Codity? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2 className="contact-form-title">Send us a message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company" className="form-label">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="form-input"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    className="form-select"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Pricing</option>
                    <option value="support">Technical Support</option>
                    <option value="enterprise">Enterprise Solutions</option>
                    <option value="partnership">Partnership Opportunities</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button type="submit" className="form-submit-btn">
                  {submitted ? 'Message Sent! ✓' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-wrapper">
              <div className="contact-info-card">
                <h3 className="contact-info-title">Contact Information</h3>
                <p className="contact-info-description">
                  Reach out to us through any of these channels. We typically respond within 24 hours.
                </p>

                <div className="contact-info-items">
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <div>
                      <div className="contact-info-label">Email</div>
                      <a href="mailto:support@codity.ai" className="contact-info-value">support@codity.ai</a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div>
                      <div className="contact-info-label">Location</div>
                      <div className="contact-info-value">San Francisco, CA</div>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </div>
                    <div>
                      <div className="contact-info-label">Response Time</div>
                      <div className="contact-info-value">Within 24 hours</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-info-card">
                <h3 className="contact-info-title">Enterprise Solutions</h3>
                <p className="contact-info-description">
                  Need a custom plan or on-premise deployment? Our enterprise team is here to help.
                </p>
                <Link href="/pricing" className="contact-info-link">
                  View Enterprise Plans →
                </Link>
              </div>

              <div className="contact-info-card">
                <h3 className="contact-info-title">Quick Links</h3>
                <div className="contact-quick-links">
                  <Link href="/features" className="contact-quick-link">Features</Link>
                  <Link href="/pricing" className="contact-quick-link">Pricing</Link>
                  <Link href="/blog" className="contact-quick-link">Blog</Link>
                  <a href="https://docs.codity.ai" className="contact-quick-link" target="_blank" rel="noopener noreferrer">Documentation</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="container">
          <h2 className="contact-faq-title">Frequently Asked Questions</h2>
          <div className="contact-faq-grid">
            <div className="contact-faq-item">
              <h3 className="contact-faq-question">How quickly can I get started?</h3>
              <p className="contact-faq-answer">
                You can start using Codity in minutes. Simply connect your repository and our AI will begin analyzing your code immediately.
              </p>
            </div>
            <div className="contact-faq-item">
              <h3 className="contact-faq-question">Do you offer a free trial?</h3>
              <p className="contact-faq-answer">
                Yes! All paid plans come with a 14-day free trial. No credit card required to get started.
              </p>
            </div>
            <div className="contact-faq-item">
              <h3 className="contact-faq-question">What about data security?</h3>
              <p className="contact-faq-answer">
                We take security seriously. Your code is encrypted in transit and at rest. We also offer on-premise deployment for enterprise customers.
              </p>
            </div>
            <div className="contact-faq-item">
              <h3 className="contact-faq-question">Can I schedule a demo?</h3>
              <p className="contact-faq-answer">
                Absolutely! Select "Sales & Pricing" in the form above, and our team will reach out to schedule a personalized demo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="contact-founder">
        <div className="container">
          <div className="founder-card">
            <div className="founder-image-wrapper">
              <div className="founder-image-placeholder">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
            <div className="founder-info">
              <h3 className="founder-name">Shree Varshan T</h3>
              <p className="founder-title">Co-founder & CEO</p>
              <p className="founder-bio">
                Building the future of AI-powered code reviews. Passionate about helping developers ship better code faster.
              </p>
              <div className="founder-contact">
                <a href="mailto:shree@codity.ai" className="founder-contact-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  shree@codity.ai
                </a>
              </div>
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
