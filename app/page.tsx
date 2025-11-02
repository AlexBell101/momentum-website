'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Sticky Navbar - Dark */}
      <nav id="navbar" className="dark-nav">
        <div className="container-nav">
          <Link href="/" className="logo-dark">Momentum</Link>
          <ul className="nav-links-dark">
            <li><Link href="/how-it-works">How it works</Link></li>
            <li><Link href="#stakeholders">Stakeholders</Link></li>
            <li><Link href="/integrations">Integrations</Link></li>
            <li><Link href="/docs">Resources</Link></li>
          </ul>
          <div className="nav-actions">
            <a href="https://fss-app-iota.vercel.app/" className="nav-login">Login</a>
            <a href="https://fss-app-iota.vercel.app/" className="nav-cta-primary">Schedule a walkthrough</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="hero-dark">
        <div className="container-wide">
          <div className="hero-split">
            {/* Left: Copy + CTAs */}
            <div className="hero-content-dark">
              <div className="hero-badge-dark">
                <span className="badge-dot"></span>
                <span>FIELD EVENT INTELLIGENCE</span>
              </div>

              <h1 className="hero-title-dark">
                Know which events to<br />
                <span className="gradient-text-blue">repeat, resize, or pause.</span>
              </h1>

              <p className="hero-subtitle-dark">
                Stop guessing. Momentum collects feedback from Sales, Attendees, Marketing, and Partners—then uses AI to recommend what to run next.
              </p>

              <div className="hero-ctas">
                <a href="https://fss-app-iota.vercel.app/" className="btn-primary-dark">
                  Schedule a walkthrough
                  <svg className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a href="https://fss-app-iota.vercel.app/" className="btn-secondary-dark">
                  Start free trial
                </a>
              </div>
            </div>

            {/* Right: Product Panel showing Events with AI Recommendations */}
            <div className="hero-visual-dark">
              <div className="product-panel">
                <div className="panel-header">
                  <span className="panel-title">Recent Events</span>
                  <span className="panel-subtitle">AI-powered recommendations</span>
                </div>

                <div className="event-cards">
                  {/* Event 1 - Repeat */}
                  <div className="event-card">
                    <div className="event-header">
                      <div>
                        <h3 className="event-name">Austin Field Summit</h3>
                        <p className="event-date">Dec 2024 • 80 attendees</p>
                      </div>
                      <div className="event-score success">87</div>
                    </div>
                    <div className="event-recommendation success-rec">
                      <svg className="rec-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Recommendation:</strong> Repeat Q1 2025</span>
                    </div>
                  </div>

                  {/* Event 2 - Resize */}
                  <div className="event-card">
                    <div className="event-header">
                      <div>
                        <h3 className="event-name">Boston Tech Mixer</h3>
                        <p className="event-date">Nov 2024 • 120 attendees</p>
                      </div>
                      <div className="event-score warning">62</div>
                    </div>
                    <div className="event-recommendation warning-rec">
                      <svg className="rec-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span><strong>Recommendation:</strong> Reduce to 60 people</span>
                    </div>
                  </div>

                  {/* Event 3 - Pause */}
                  <div className="event-card">
                    <div className="event-header">
                      <div>
                        <h3 className="event-name">NYC Networking Happy Hour</h3>
                        <p className="event-date">Oct 2024 • 95 attendees</p>
                      </div>
                      <div className="event-score danger">43</div>
                    </div>
                    <div className="event-recommendation danger-rec">
                      <svg className="rec-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span><strong>Recommendation:</strong> Pause this format</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Stakeholders Section */}
      <section id="stakeholders" className="stakeholders-dark">
        <div className="container">
          <div className="section-header-dark">
            <h2 className="section-title-dark">
              One event. Four reports.<br />
              <span className="gradient-text-blue">Zero chasing.</span>
            </h2>
            <p className="section-subtitle-dark">
              Most platforms only collect feedback from attendees. Momentum gets the full picture—automatically.
            </p>
          </div>

          <div className="stakeholder-grid-dark">
            {/* Sales Card */}
            <div className="stakeholder-card-dark animate-on-scroll">
              <div className="card-icon blue-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="card-title-dark">Sales</h3>
              <p className="card-desc-dark">
                Were the leads high-quality? Did attendees match our ICP? Would sales want us to run it again?
              </p>
            </div>

            {/* Attendees Card */}
            <div className="stakeholder-card-dark animate-on-scroll" style={{ animationDelay: '0.1s' }}>
              <div className="card-icon emerald-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="card-title-dark">Attendees</h3>
              <p className="card-desc-dark">
                Was the content valuable? Would they come again? Post-event NPS and sentiment analysis.
              </p>
            </div>

            {/* Marketing Card */}
            <div className="stakeholder-card-dark animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="card-icon purple-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="card-title-dark">Marketing</h3>
              <p className="card-desc-dark">
                Did execution go smoothly? Was logistics on point? Internal team assessment of event quality.
              </p>
            </div>

            {/* Partners Card */}
            <div className="stakeholder-card-dark animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <div className="card-icon cyan-icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="card-title-dark">Partners</h3>
              <p className="card-desc-dark">
                Did the co-marketing work? Were attendees a good fit for their ICP too? Will they co-invest again?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Decision Section - Austin vs Boston */}
      <section className="ai-decision-dark">
        <div className="container">
          <div className="ai-split-layout">
            {/* Left: Copy */}
            <div className="ai-copy-dark">
              <div className="ai-badge-dark">
                <svg className="ai-badge-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span>AI-POWERED INSIGHTS</span>
              </div>

              <h2 className="ai-title-dark">
                AI that tells you<br />
                <span className="gradient-text-blue">what to do next</span>
              </h2>

              <p className="ai-desc-dark">
                Momentum doesn't just report scores. Claude AI analyzes patterns across all four stakeholders, compares events, and recommends which formats to scale—and which to cut.
              </p>

              <ul className="ai-benefits-dark">
                <li>
                  <svg className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Spot patterns across dozens of events</span>
                </li>
                <li>
                  <svg className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Predict which events will drive pipeline</span>
                </li>
                <li>
                  <svg className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Get recommendations you can act on</span>
                </li>
              </ul>
            </div>

            {/* Right: Comparison Card */}
            <div className="ai-comparison-card">
              <div className="comparison-header">
                <span className="comparison-title">Event Comparison Analysis</span>
                <span className="ai-chip">
                  <svg className="chip-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  AI Powered
                </span>
              </div>

              <div className="comparison-events">
                <div className="comparison-event winner">
                  <div className="event-label">
                    <span className="event-location">Austin</span>
                    <span className="winner-badge">Winner</span>
                  </div>
                  <div className="event-score-large">87</div>
                  <div className="event-metrics">
                    <div className="metric">
                      <span className="metric-label">Sales Rating</span>
                      <span className="metric-value">9/10</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Attendee NPS</span>
                      <span className="metric-value">+72</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Partner Score</span>
                      <span className="metric-value">8/10</span>
                    </div>
                  </div>
                </div>

                <div className="comparison-divider">vs</div>

                <div className="comparison-event">
                  <div className="event-label">
                    <span className="event-location">Boston</span>
                  </div>
                  <div className="event-score-large">62</div>
                  <div className="event-metrics">
                    <div className="metric">
                      <span className="metric-label">Sales Rating</span>
                      <span className="metric-value">5/10</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Attendee NPS</span>
                      <span className="metric-value">+34</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Partner Score</span>
                      <span className="metric-value">6/10</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ai-recommendation-box">
                <svg className="rec-icon-ai" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <div>
                  <p className="rec-label">AI Recommendation</p>
                  <p className="rec-text">
                    Austin's format drives 2.3x more qualified pipeline. Repeat quarterly. Boston needs smaller groups—sales rated venue size as "too large for meaningful conversations."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Today vs Momentum Section */}
      <section className="comparison-section-dark">
        <div className="container">
          <div className="section-header-dark">
            <h2 className="section-title-dark">
              Most teams only see<br />
              <span className="gradient-text-blue">half the story</span>
            </h2>
          </div>

          <div className="today-vs-momentum">
            {/* Today Card */}
            <div className="comparison-card-dark incomplete animate-on-scroll">
              <div className="comparison-card-header">
                <h3 className="comparison-card-title">Today</h3>
                <span className="incomplete-badge">Incomplete data</span>
              </div>
              <ul className="comparison-list">
                <li className="has-data">
                  <svg className="list-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Registrations</span>
                </li>
                <li className="has-data">
                  <svg className="list-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Check-ins</span>
                </li>
                <li className="has-data">
                  <svg className="list-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Attendee NPS</span>
                </li>
                <li className="missing-data">
                  <svg className="list-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Sales feedback</span>
                </li>
                <li className="missing-data">
                  <svg className="list-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Partner feedback</span>
                </li>
                <li className="missing-data">
                  <svg className="list-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>AI recommendations</span>
                </li>
              </ul>
            </div>

            {/* Arrow */}
            <div className="arrow-divider">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            {/* Momentum Card */}
            <div className="comparison-card-dark complete animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="comparison-card-header">
                <h3 className="comparison-card-title">Momentum</h3>
                <span className="complete-badge">Complete picture</span>
              </div>
              <ul className="comparison-list">
                <li className="has-data">
                  <svg className="list-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Registrations</span>
                </li>
                <li className="has-data">
                  <svg className="list-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Check-ins</span>
                </li>
                <li className="has-data">
                  <svg className="list-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Attendee NPS</span>
                </li>
                <li className="has-data highlight">
                  <svg className="list-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sales feedback</span>
                </li>
                <li className="has-data highlight">
                  <svg className="list-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Partner feedback</span>
                </li>
                <li className="has-data highlight">
                  <svg className="list-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AI recommendations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="integrations-dark">
        <div className="container">
          <div className="section-header-dark">
            <h2 className="section-title-dark">Integrations</h2>
            <p className="section-subtitle-dark">
              Works with the tools you already use
            </p>
          </div>

          <div className="integration-badges">
            <div className="integration-badge">
              <svg className="integration-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
              <span>Salesforce</span>
            </div>
            <div className="integration-badge">
              <svg className="integration-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
              <span>Marketo</span>
            </div>
            <div className="integration-badge">
              <svg className="integration-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
              <span>HubSpot</span>
            </div>
            <div className="integration-badge">
              <svg className="integration-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
              <span>Cvent</span>
            </div>
            <div className="integration-badge">
              <svg className="integration-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
              <span>Splash</span>
            </div>
            <div className="integration-badge">
              <svg className="integration-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
              <span>Slack</span>
            </div>
            <div className="integration-badge">
              <svg className="integration-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
              <span>Google Sheets</span>
            </div>
            <div className="integration-badge">
              <svg className="integration-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
              <span>CSV Import</span>
            </div>
          </div>

          <div className="integration-cta">
            <Link href="/integrations" className="link-view-all">
              View all integrations
              <svg className="link-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-dark">
        <div className="container">
          <div className="cta-box-dark">
            <h2 className="cta-title-dark">
              Ready to show which events<br />
              <span className="gradient-text-blue">actually drive pipeline?</span>
            </h2>
            <p className="cta-subtitle-dark">
              Join field marketing teams who stopped guessing and started proving ROI with complete event intelligence.
            </p>
            <div className="cta-actions-dark">
              <a href="https://fss-app-iota.vercel.app/" className="btn-primary-dark">
                Schedule a walkthrough
                <svg className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="https://fss-app-iota.vercel.app/" className="btn-secondary-dark">
                Start free trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-dark">
        <div className="container">
          <div className="footer-grid-dark">
            <div className="footer-brand-dark">
              <div className="logo-dark">Momentum</div>
              <p className="footer-tagline-dark">
                The only platform with complete event intelligence. Feedback from Sales, Marketing, Attendees, and Partners—powered by AI.
              </p>
            </div>

            <div className="footer-column-dark">
              <h4>Product</h4>
              <ul>
                <li><Link href="/how-it-works">How it works</Link></li>
                <li><Link href="/integrations">Integrations</Link></li>
                <li><Link href="/fss-score">FSS Score</Link></li>
                <li><Link href="/docs">Documentation</Link></li>
              </ul>
            </div>

            <div className="footer-column-dark">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column-dark">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-dark">
            <div>&copy; 2025 Momentum. All rights reserved.</div>
            <div className="social-links-dark">
              <a href="#">𝕏</a>
              <a href="#">in</a>
              <a href="#">📧</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
