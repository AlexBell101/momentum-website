'use client';

import { useState, FormEvent } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'homepage-hero'
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setEmail('');
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <a href="/" className="logo">
            <div className="logo-icon">M</div>
            MOMENTUM
          </a>
          <div className="nav-links">
            <a href="#features">Product</a>
            <a href="#how-it-works">How It Works</a>
            <a href="/pricing">Pricing</a>
            <a href="/docs">Docs</a>
            <a href="/login" className="btn-secondary">Log In</a>
            <a href="#demo" className="btn-primary">Book Demo</a>
          </div>
        </div>
      </nav>

      {/* Success Message */}
      {showSuccess && (
        <div className="success-message">
          Thanks! We'll be in touch soon.
        </div>
      )}

      {/* Hero Section */}
      <section className="hero">
        <h1>
          Turn Event Data Into<br />
          <span className="hero-gradient">Revenue Intelligence</span>
        </h1>
        <p>
          Momentum tracks event success and attributes pipeline to your field marketing—so you can prove ROI and optimize spend.
        </p>
        <div className="hero-ctas">
          <a href="#demo" className="btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }}>Book a Demo</a>
          <a href="#how-it-works" className="btn-secondary" style={{ padding: '16px 32px', fontSize: '16px' }}>See How It Works</a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">10x</span>
            <span className="hero-stat-label">Better event ROI visibility</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">40%</span>
            <span className="hero-stat-label">Faster attribution insights</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">5 min</span>
            <span className="hero-stat-label">Salesforce setup time</span>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem">
        <div className="problem-container">
          <div className="section-title">The Problem</div>
          <h2>Field marketing success is invisible</h2>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">❌</div>
              <h3>Can't prove event ROI</h3>
              <p>"We spend $2M on events but can't prove which ones drive pipeline"</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">❌</div>
              <h3>Feedback is scattered</h3>
              <p>"Event feedback is buried across spreadsheets, email, and Slack DMs"</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">❌</div>
              <h3>Attribution is broken</h3>
              <p>"Sales doesn't know which events influenced their opportunities"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="section-title">The Solution</div>
        <h2>One metric for event effectiveness</h2>
        <p className="features-subtitle">Field Success Score (FSS) + automatic Salesforce attribution + post-event surveys</p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Field Success Score</h3>
            <p>One metric that combines attendance quality, engagement, feedback, and pipeline influence. Know instantly if an event worked.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔗</div>
            <h3>Automatic Attribution</h3>
            <p>See which events influenced opportunities in Salesforce. Multi-touch attribution built for field marketing.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Post-Event Surveys</h3>
            <p>Automated surveys capture feedback while it's fresh. Track NPS, satisfaction, and follow-up interest.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works" id="how-it-works">
        <div className="how-container">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Connect Salesforce</h3>
                <p>Sync with your Salesforce org in 5 minutes. Momentum reads campaigns, contacts, and opportunities to understand your field marketing.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Capture Feedback</h3>
                <p>Automated surveys go out post-event. Momentum calculates your Field Success Score based on attendance, engagement, feedback, and pipeline.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>See Pipeline Impact</h3>
                <p>Watch opportunities flow into your dashboard. Attribution happens automatically—see which events influenced which deals in real-time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="demo" style={{ margin: '80px 24px' }}>
        <h2>Ready to prove event ROI?</h2>
        <p>Book a demo with our team or start your free trial.</p>
        <form className="cta-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Work email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Book Demo'}
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-brand">
            <h3>Momentum</h3>
            <p>Turn event data into revenue intelligence. Built for field marketers who need to prove ROI.</p>
          </div>
          <div className="footer-links">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/integrations">Integrations</a></li>
              <li><a href="/security">Security</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li><a href="/docs">Documentation</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/guides">Guides</a></li>
              <li><a href="/support">Support</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2025 Momentum. All rights reserved.</div>
          <div>Built for field marketers 🚀</div>
        </div>
      </footer>
    </>
  );
}
