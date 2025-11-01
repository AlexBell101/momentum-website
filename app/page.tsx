'use client';

import { useEffect } from 'react';
import Image from 'next/image';
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

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav id="navbar">
        <div className="container">
          <div className="nav-content">
            <Link href="/" className="logo">Momentum</Link>
            <ul className="nav-links">
              <li><a href="#features">Features</a></li>
              <li><Link href="/how-it-works">How It Works</Link></li>
              <li><Link href="/integrations">Integrations</Link></li>
              <li><Link href="/docs">Docs</Link></li>
            </ul>
            <a href="#" className="cta-button">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            {/* New Badge */}
            <div className="hero-badge">
              <span className="badge-icon">✨</span>
              <span>The only platform with 360° campaign intelligence</span>
            </div>

            <h1>The Complete<br />Campaign Feedback Loop</h1>
            <p className="hero-subtitle">Momentum captures feedback from Sales, Marketing, Attendees, <strong>and Partners</strong>—then uses AI to turn that 360° view into strategic insights you can act on.</p>

            {/* Four Stakeholder Pills */}
            <div className="stakeholder-pills">
              <div className="pill">📊 Marketing</div>
              <div className="pill">💼 Sales</div>
              <div className="pill">👥 Attendees</div>
              <div className="pill pill-highlight">🤝 Partners</div>
            </div>

            <div className="hero-buttons">
              <a href="#" className="primary-button">Start Free Trial</a>
              <a href="#" className="secondary-button">Watch Demo</a>
            </div>

            {/* Dashboard Mockup */}
            <div className="dashboard-mockup">
              <div className="dashboard-header">
                <div className="traffic-lights">
                  <div className="traffic-light red"></div>
                  <div className="traffic-light yellow"></div>
                  <div className="traffic-light green"></div>
                </div>
              </div>
              <div className="dashboard-content">
                <Image
                  src="/screenshot.png"
                  alt="Momentum Dashboard"
                  width={1200}
                  height={800}
                  style={{ width: '100%', height: 'auto' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Four Perspectives Matter */}
      <section className="perspectives-section">
        <div className="container">
          <h2 className="section-title">Why Four Perspectives Matter</h2>
          <p className="section-subtitle">Most platforms show 2-3 views. We show all four—because your channel partners are co-investing, co-generating pipeline, and influencing deals outside your visibility.</p>

          <div className="perspectives-grid">
            <div className="perspective-card animate-on-scroll">
              <div className="perspective-icon sales">💼</div>
              <h3>Sales Feedback</h3>
              <p className="perspective-quote">"These leads matched our ICP perfectly"</p>
              <p className="perspective-insight">→ Validates targeting</p>
            </div>

            <div className="perspective-card animate-on-scroll" style={{ animationDelay: '0.1s' }}>
              <div className="perspective-icon marketing">📊</div>
              <h3>Marketing Feedback</h3>
              <p className="perspective-quote">"Logistics were flawless, messaging resonated"</p>
              <p className="perspective-insight">→ Confirms execution quality</p>
            </div>

            <div className="perspective-card animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="perspective-icon attendees">👥</div>
              <h3>Attendee Feedback</h3>
              <p className="perspective-quote">"Best content I've seen on this topic"</p>
              <p className="perspective-insight">→ Proves customer value delivery</p>
            </div>

            <div className="perspective-card animate-on-scroll highlight" style={{ animationDelay: '0.3s' }}>
              <div className="perspective-icon partners">🤝</div>
              <h3>Partner Feedback <span className="new-badge">NEW</span></h3>
              <p className="perspective-quote">"We're co-marketing 5 more events"</p>
              <p className="perspective-insight">→ Predicts channel pipeline</p>
            </div>
          </div>

          <div className="perspectives-footer">
            <p><strong>All four combine into your Field Success Score</strong></p>
            <Link href="/how-it-works" className="text-link">Learn more about how it works →</Link>
          </div>
        </div>
      </section>

      {/* AI Insights Section - NEW */}
      <section className="ai-section">
        <div className="container">
          <div className="ai-content">
            <div className="ai-visual animate-on-scroll">
              <div className="ai-badge-large">
                <span className="ai-icon">✨</span>
                <span>Powered by Claude AI</span>
              </div>
              <div className="ai-chat-preview">
                <div className="chat-message user-message">
                  <p>Why did partners love our Austin event but not Boston?</p>
                </div>
                <div className="chat-message ai-message">
                  <p><strong>Partners in Austin mentioned "ICP alignment" 8 times vs 0 in Boston.</strong> Austin attracted enterprise SaaS attendees (partner sweet spot). Boston skewed toward SMB.</p>
                  <p className="recommendation">💡 <strong>Recommendation:</strong> For Boston 2025, add enterprise track or adjust targeting to attract larger companies.</p>
                </div>
              </div>
              <div className="ai-insights-list">
                <div className="insight-item">
                  <span className="insight-icon">🎯</span>
                  <span>Pattern Detection</span>
                </div>
                <div className="insight-item">
                  <span className="insight-icon">📈</span>
                  <span>Pipeline Prediction</span>
                </div>
                <div className="insight-item">
                  <span className="insight-icon">⚠️</span>
                  <span>Risk Alerts</span>
                </div>
              </div>
            </div>

            <div className="ai-info animate-on-scroll">
              <h3>AI-Powered Strategic Insights</h3>
              <p className="ai-intro">Momentum doesn't just collect feedback from all 4 stakeholders—it uses AI to turn that 360° view into strategic insights you can act on.</p>

              <div className="ai-features">
                <div className="ai-feature">
                  <div className="ai-feature-icon">🔍</div>
                  <div>
                    <h4>Analyze Verbatim Feedback</h4>
                    <p>AI reads every comment from sales, marketing, attendees, and partners—spotting patterns humans miss.</p>
                  </div>
                </div>

                <div className="ai-feature">
                  <div className="ai-feature-icon">💡</div>
                  <div>
                    <h4>Surface Hidden Insights</h4>
                    <p>"Partner feedback mentions 'ICP mismatch' 12 times across Q3 events. Consider targeting adjustments."</p>
                  </div>
                </div>

                <div className="ai-feature">
                  <div className="ai-feature-icon">🎯</div>
                  <div>
                    <h4>Generate Recommendations</h4>
                    <p>Not just data—actionable next steps. "Events with Partner Score &gt;80 generate 2.3x more channel pipeline."</p>
                  </div>
                </div>

                <div className="ai-feature">
                  <div className="ai-feature-icon">💬</div>
                  <div>
                    <h4>Ask Questions in Natural Language</h4>
                    <p>"Which events should we replicate in Q2?" "How did our webinars compare to field events?" Get instant answers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Differentiation - NEW */}
      <section className="comparison-section">
        <div className="container">
          <h2 className="section-title">The Only Platform with Complete Campaign Intelligence</h2>
          <p className="section-subtitle">Most tools show 2-3 perspectives. We show all four.</p>

          <div className="comparison-table">
            <div className="comparison-header">
              <div className="comparison-cell empty"></div>
              <div className="comparison-cell">
                <div className="company-logo momentum">Momentum</div>
              </div>
              <div className="comparison-cell">
                <div className="company-logo">Competitor A</div>
              </div>
              <div className="comparison-cell">
                <div className="company-logo">Competitor B</div>
              </div>
            </div>

            <div className="comparison-row">
              <div className="comparison-cell feature-name">Sales Feedback</div>
              <div className="comparison-cell"><span className="check">✓</span></div>
              <div className="comparison-cell"><span className="check">✓</span></div>
              <div className="comparison-cell"><span className="check">✓</span></div>
            </div>

            <div className="comparison-row">
              <div className="comparison-cell feature-name">Marketing Feedback</div>
              <div className="comparison-cell"><span className="check">✓</span></div>
              <div className="comparison-cell"><span className="check">✓</span></div>
              <div className="comparison-cell"><span className="cross">✗</span></div>
            </div>

            <div className="comparison-row">
              <div className="comparison-cell feature-name">Attendee Feedback</div>
              <div className="comparison-cell"><span className="check">✓</span></div>
              <div className="comparison-cell"><span className="check">✓</span></div>
              <div className="comparison-cell"><span className="check">✓</span></div>
            </div>

            <div className="comparison-row highlight-row">
              <div className="comparison-cell feature-name"><strong>Partner Feedback</strong></div>
              <div className="comparison-cell"><span className="check">✓</span></div>
              <div className="comparison-cell"><span className="cross">✗</span></div>
              <div className="comparison-cell"><span className="cross">✗</span></div>
            </div>

            <div className="comparison-row">
              <div className="comparison-cell feature-name">360° Campaign View</div>
              <div className="comparison-cell"><span className="check">✓</span></div>
              <div className="comparison-cell"><span className="cross">✗</span></div>
              <div className="comparison-cell"><span className="cross">✗</span></div>
            </div>

            <div className="comparison-row highlight-row">
              <div className="comparison-cell feature-name"><strong>AI-Powered Insights</strong></div>
              <div className="comparison-cell"><span className="check">✓</span></div>
              <div className="comparison-cell"><span className="cross">✗</span></div>
              <div className="comparison-cell"><span className="cross">✗</span></div>
            </div>

            <div className="comparison-row">
              <div className="comparison-cell feature-name">Channel Pipeline Prediction</div>
              <div className="comparison-cell"><span className="check">✓</span></div>
              <div className="comparison-cell"><span className="cross">✗</span></div>
              <div className="comparison-cell"><span className="cross">✗</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* FSS Score Section - UPDATED */}
      <section id="scores" className="fss-section">
        <div className="container">
          <div className="fss-content">
            <div className="fss-visual animate-on-scroll">
              <div className="score-display">
                <div className="score-ring">
                  <svg width="250" height="250">
                    <circle className="score-bg" cx="125" cy="125" r="90"></circle>
                    <circle className="score-progress" cx="125" cy="125" r="90"></circle>
                  </svg>
                  <div className="score-text">85</div>
                </div>
                <div className="score-label">Field Success Score</div>

                <div className="metrics-list">
                  <div className="metric-item">
                    <span className="metric-icon">💼</span>
                    <span className="metric-name">Sales Feedback</span>
                    <span className="metric-value">82</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-icon">📊</span>
                    <span className="metric-name">Marketing Score</span>
                    <span className="metric-value">88</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-icon">👥</span>
                    <span className="metric-name">Attendee Experience</span>
                    <span className="metric-value">90</span>
                  </div>
                  <div className="metric-item highlight-metric">
                    <span className="metric-icon">🤝</span>
                    <span className="metric-name">Partner Feedback</span>
                    <span className="metric-value">78</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="fss-info animate-on-scroll">
              <h3>Beyond the numbers</h3>
              <p>Your leadership wants to know if events are worth the investment. Sales wants quality leads they can close. Prospects want valuable experiences. <strong>Partners want co-marketing opportunities that work.</strong> The FSS shows you're delivering on all four.</p>

              <div className="quality-indicators">
                <div className="indicator">
                  <div className="indicator-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                  </div>
                  <div className="indicator-content">
                    <h4>Hard Business Metrics</h4>
                    <p>MQLs, pipeline generated, meetings booked, target account engagement. The quantitative proof that events drive revenue.</p>
                  </div>
                </div>

                <div className="indicator">
                  <div className="indicator-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                    </svg>
                  </div>
                  <div className="indicator-content">
                    <h4>Sales Team Reality Check</h4>
                    <p>Did they get leads worth pursuing? Were attendees engaged? Sales feedback tells you if you're creating actual opportunities or just hitting a number.</p>
                  </div>
                </div>

                <div className="indicator">
                  <div className="indicator-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </div>
                  <div className="indicator-content">
                    <h4>Customer Value Signal</h4>
                    <p>High attendee satisfaction means prospects found real value. That predicts conversion. That proves ROI. That's what leadership needs to see.</p>
                  </div>
                </div>

                <div className="indicator highlight-indicator">
                  <div className="indicator-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                  </div>
                  <div className="indicator-content">
                    <h4>Channel Partnership Health</h4>
                    <p>Partners co-invest in your events and co-generate pipeline. High partner scores predict future co-marketing opportunities and channel revenue.</p>
                  </div>
                </div>
              </div>

              <Link href="/how-it-works" className="learn-more-link">
                See the complete feedback loop visualization →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section" style={{ padding: '120px 0' }}>
        <div className="container">
          <h2 className="section-title">The platform built for modern field marketing</h2>
          <p className="section-subtitle">One metric that tells you if your event created real value for prospects, customers, sales, and partners</p>

          <div className="stats-grid">
            <div className="stat-card animate-on-scroll">
              <div className="stat-number">500+</div>
              <div className="stat-label">Events Measured</div>
            </div>
            <div className="stat-card animate-on-scroll" style={{ animationDelay: '0.1s' }}>
              <div className="stat-number">$50M+</div>
              <div className="stat-label">Pipeline Tracked</div>
            </div>
            <div className="stat-card animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="stat-number">92%</div>
              <div className="stat-label">Teams See Better ROI</div>
            </div>
            <div className="stat-card animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <div className="stat-number">10K+</div>
              <div className="stat-label">Survey Responses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - UPDATED */}
      <section id="features" className="features-section">
        <div className="container">
          <h2 className="section-title">Everything you need for complete campaign intelligence</h2>
          <p className="section-subtitle">Stop guessing which campaigns create real value. See which events resonate with customers, align with sales, satisfy partners, and drive actual pipeline.</p>

          <div className="features-grid">
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
              </div>
              <h3 className="feature-title">Salesforce Data Integration</h3>
              <p className="feature-description">MQLs, meetings booked, pipeline generated, and target account engagement flow directly from your Salesforce campaigns. See the business outcomes that matter.</p>
            </div>

            <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h3 className="feature-title">Partner Feedback Collection</h3>
              <p className="feature-description">The only platform that captures partner perspectives. Know which events drive channel loyalty, competitive wins, and future co-marketing pipeline.</p>
            </div>

            <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              </div>
              <h3 className="feature-title">AI-Powered Insights</h3>
              <p className="feature-description">Claude AI analyzes verbatim feedback from all four stakeholders, surfaces hidden patterns, predicts pipeline, and generates strategic recommendations.</p>
            </div>

            <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
              </div>
              <h3 className="feature-title">Multi-Stakeholder Surveys</h3>
              <p className="feature-description">Automated surveys for attendees, sales reps, marketing teams, and partners. 90-second surveys with 65% response rates.</p>
            </div>

            <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                </svg>
              </div>
              <h3 className="feature-title">Campaign Object Sync</h3>
              <p className="feature-description">FSS and all four feedback scores sync directly to Salesforce Campaign objects. Build executive dashboards showing real ROI, not vanity metrics.</p>
            </div>

            <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.5s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <h3 className="feature-title">Continuous Improvement</h3>
              <p className="feature-description">Compare events over time. AI helps you learn what works, double down on high-performing formats, and stop wasting budget on events that don't deliver.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>See the complete picture.<br />Not just the metrics you hope leadership accepts.</h2>
            <p>360° campaign intelligence from Sales, Marketing, Attendees, and Partners—powered by AI to show you what actually works.</p>
            <a href="#" className="primary-button" style={{ fontSize: '20px', padding: '20px 50px' }}>Start Your Free Trial</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div>
              <div className="footer-brand">Momentum</div>
              <p className="footer-description">The only platform with 360° campaign intelligence. Capture feedback from Sales, Marketing, Attendees, and Partners—then use AI to turn insights into action.</p>
            </div>

            <div className="footer-section">
              <h4>Product</h4>
              <ul className="footer-links">
                <li><a href="#features">Features</a></li>
                <li><Link href="/integrations">Integrations</Link></li>
                <li><a href="#">Pricing</a></li>
                <li><Link href="/docs">Documentation</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Company</h4>
              <ul className="footer-links">
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Resources</h4>
              <ul className="footer-links">
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div>&copy; 2025 Momentum. All rights reserved.</div>
            <div className="social-links">
              <a href="#" className="social-link">𝕏</a>
              <a href="#" className="social-link">in</a>
              <a href="#" className="social-link">📧</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
