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

      {/* Hero Section - Enterprise */}
      <section className="hero-enterprise">
        <div className="container">
          <div className="hero-content-enterprise">
            {/* Professional Badge */}
            <div className="badge-enterprise">
              <span className="badge-dot"></span>
              The only platform with 360° campaign intelligence
            </div>

            <h1 className="hero-title-enterprise">The Complete<br />Campaign Feedback Loop</h1>
            <p className="hero-subtitle-enterprise">Momentum captures feedback from Sales, Marketing, Attendees, <strong>and Partners</strong>—then uses AI to turn that 360° view into strategic insights you can act on.</p>

            {/* Four Stakeholder Indicators with SVG Icons */}
            <div className="stakeholder-indicators">
              <div className="indicator-item">
                <svg className="indicator-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
                <span>Marketing</span>
              </div>
              <div className="indicator-item">
                <svg className="indicator-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
                <span>Sales</span>
              </div>
              <div className="indicator-item">
                <svg className="indicator-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
                <span>Attendees</span>
              </div>
              <div className="indicator-item indicator-highlight">
                <svg className="indicator-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
                <span>Partners</span>
                <span className="new-badge-enterprise">NEW</span>
              </div>
            </div>

            <div className="hero-buttons-enterprise">
              <a href="#" className="primary-button-enterprise">Start Free Trial</a>
              <a href="#" className="secondary-button-enterprise">Watch Demo</a>
            </div>

            {/* Dashboard Mockup */}
            <div className="dashboard-mockup-enterprise">
              <div className="dashboard-header-enterprise">
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
      <section className="perspectives-section-enterprise">
        <div className="container">
          <h2 className="section-title-enterprise">Why Four Perspectives Matter</h2>
          <p className="section-subtitle-enterprise">Most platforms show 2-3 views. We show all four—because your channel partners are co-investing, co-generating pipeline, and influencing deals outside your visibility.</p>

          <div className="perspectives-grid-enterprise">
            {[
              {
                icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />),
                title: 'Sales Feedback',
                quote: '"These leads matched our ICP perfectly"',
                insight: '→ Validates targeting',
                color: 'blue'
              },
              {
                icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />),
                title: 'Marketing Feedback',
                quote: '"Logistics were flawless, messaging resonated"',
                insight: '→ Confirms execution quality',
                color: 'purple'
              },
              {
                icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />),
                title: 'Attendee Feedback',
                quote: '"Best content I\'ve seen on this topic"',
                insight: '→ Proves customer value delivery',
                color: 'orange'
              },
              {
                icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />),
                title: 'Partner Feedback',
                quote: '"We\'re co-marketing 5 more events"',
                insight: '→ Predicts channel pipeline',
                color: 'green',
                isNew: true,
                highlight: true
              }
            ].map((perspective, i) => (
              <div key={i} className={`perspective-card-enterprise animate-on-scroll ${perspective.highlight ? 'highlight' : ''}`} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={`perspective-icon-enterprise ${perspective.color}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {perspective.icon}
                  </svg>
                </div>
                <h3 className="perspective-title-enterprise">
                  {perspective.title}
                  {perspective.isNew && <span className="new-badge-enterprise">NEW</span>}
                </h3>
                <p className="perspective-quote-enterprise">{perspective.quote}</p>
                <p className="perspective-insight-enterprise">{perspective.insight}</p>
              </div>
            ))}
          </div>

          <div className="perspectives-footer-enterprise">
            <p><strong>All four combine into your Field Success Score</strong></p>
            <Link href="/how-it-works" className="text-link-enterprise">Learn more about how it works →</Link>
          </div>
        </div>
      </section>

      {/* AI Insights Section */}
      <section className="ai-section-enterprise">
        <div className="container">
          <div className="ai-content-enterprise">
            <div className="ai-visual-enterprise animate-on-scroll">
              <div className="ai-badge-large-enterprise">
                <svg className="ai-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
                <span>Powered by Claude AI</span>
              </div>
              <div className="ai-chat-preview-enterprise">
                <div className="chat-message user-message">
                  <p>Why did partners love our Austin event but not Boston?</p>
                </div>
                <div className="chat-message ai-message">
                  <p><strong>Partners in Austin mentioned "ICP alignment" 8 times vs 0 in Boston.</strong> Austin attracted enterprise SaaS attendees (partner sweet spot). Boston skewed toward SMB.</p>
                  <p className="recommendation-enterprise">
                    <svg className="recommendation-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                    <strong>Recommendation:</strong> For Boston 2025, add enterprise track or adjust targeting to attract larger companies.
                  </p>
                </div>
              </div>
              <div className="ai-insights-list-enterprise">
                {[
                  { icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />), label: 'Pattern Detection' },
                  { icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />), label: 'Pipeline Prediction' },
                  { icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />), label: 'Risk Alerts' }
                ].map((item, i) => (
                  <div key={i} className="insight-item-enterprise">
                    <svg className="insight-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      {item.icon}
                    </svg>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="ai-info-enterprise animate-on-scroll">
              <h3>AI-Powered Strategic Insights</h3>
              <p className="ai-intro-enterprise">Momentum doesn't just collect feedback from all 4 stakeholders—it uses AI to turn that 360° view into strategic insights you can act on.</p>

              <div className="ai-features-enterprise">
                {[
                  {
                    icon: (<path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />),
                    title: 'Analyze Verbatim Feedback',
                    desc: 'AI reads every comment from sales, marketing, attendees, and partners—spotting patterns humans miss.'
                  },
                  {
                    icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />),
                    title: 'Surface Hidden Insights',
                    desc: '"Partner feedback mentions \'ICP mismatch\' 12 times across Q3 events. Consider targeting adjustments."'
                  },
                  {
                    icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />),
                    title: 'Generate Recommendations',
                    desc: 'Not just data—actionable next steps. "Events with Partner Score >80 generate 2.3x more channel pipeline."'
                  },
                  {
                    icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />),
                    title: 'Ask Questions in Natural Language',
                    desc: '"Which events should we replicate in Q2?" "How did our webinars compare to field events?" Get instant answers.'
                  }
                ].map((feature, i) => (
                  <div key={i} className="ai-feature-enterprise">
                    <div className="ai-feature-icon-enterprise">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {feature.icon}
                      </svg>
                    </div>
                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Differentiation */}
      <section className="comparison-section-enterprise">
        <div className="container">
          <h2 className="section-title-enterprise">The Only Platform with Complete Campaign Intelligence</h2>
          <p className="section-subtitle-enterprise">Most tools show 2-3 perspectives. We show all four.</p>

          <div className="comparison-table-enterprise">
            <div className="comparison-header-enterprise">
              <div className="comparison-cell-enterprise empty"></div>
              <div className="comparison-cell-enterprise">
                <div className="company-logo-enterprise momentum">Momentum</div>
              </div>
              <div className="comparison-cell-enterprise">
                <div className="company-logo-enterprise">Competitor A</div>
              </div>
              <div className="comparison-cell-enterprise">
                <div className="company-logo-enterprise">Competitor B</div>
              </div>
            </div>

            {[
              { name: 'Sales Feedback', momentum: true, a: true, b: true },
              { name: 'Marketing Feedback', momentum: true, a: true, b: false },
              { name: 'Attendee Feedback', momentum: true, a: true, b: true },
              { name: 'Partner Feedback', momentum: true, a: false, b: false, highlight: true },
              { name: '360° Campaign View', momentum: true, a: false, b: false },
              { name: 'AI-Powered Insights', momentum: true, a: false, b: false, highlight: true },
              { name: 'Channel Pipeline Prediction', momentum: true, a: false, b: false }
            ].map((row, i) => (
              <div key={i} className={`comparison-row-enterprise ${row.highlight ? 'highlight-row-enterprise' : ''}`}>
                <div className="comparison-cell-enterprise feature-name"><strong>{row.name}</strong></div>
                <div className="comparison-cell-enterprise">
                  {row.momentum ? <span className="check-enterprise">✓</span> : <span className="cross-enterprise">✗</span>}
                </div>
                <div className="comparison-cell-enterprise">
                  {row.a ? <span className="check-enterprise">✓</span> : <span className="cross-enterprise">✗</span>}
                </div>
                <div className="comparison-cell-enterprise">
                  {row.b ? <span className="check-enterprise">✓</span> : <span className="cross-enterprise">✗</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FSS Score Section */}
      <section id="scores" className="fss-section-enterprise">
        <div className="container">
          <div className="fss-content-enterprise">
            <div className="fss-visual-enterprise animate-on-scroll">
              <div className="score-display-enterprise">
                <div className="score-ring-enterprise">
                  <svg width="250" height="250">
                    <circle className="score-bg-enterprise" cx="125" cy="125" r="90"></circle>
                    <circle className="score-progress-enterprise" cx="125" cy="125" r="90"></circle>
                  </svg>
                  <div className="score-text-enterprise">85</div>
                </div>
                <div className="score-label-enterprise">Field Success Score</div>

                <div className="metrics-list-enterprise">
                  {[
                    { icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />), name: 'Sales Feedback', value: 82 },
                    { icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />), name: 'Marketing Score', value: 88 },
                    { icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />), name: 'Attendee Experience', value: 90 },
                    { icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />), name: 'Partner Feedback', value: 78, highlight: true }
                  ].map((metric, i) => (
                    <div key={i} className={`metric-item-enterprise ${metric.highlight ? 'highlight-metric-enterprise' : ''}`}>
                      <svg className="metric-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {metric.icon}
                      </svg>
                      <span className="metric-name-enterprise">{metric.name}</span>
                      <span className="metric-value-enterprise">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="fss-info-enterprise animate-on-scroll">
              <h3>Beyond the numbers</h3>
              <p>Your leadership wants to know if events are worth the investment. Sales wants quality leads they can close. Prospects want valuable experiences. <strong>Partners want co-marketing opportunities that work.</strong> The FSS shows you're delivering on all four.</p>

              <div className="quality-indicators-enterprise">
                {[
                  {
                    icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />),
                    title: 'Hard Business Metrics',
                    desc: 'MQLs, pipeline generated, meetings booked, target account engagement. The quantitative proof that events drive revenue.'
                  },
                  {
                    icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />),
                    title: 'Sales Team Reality Check',
                    desc: 'Did they get leads worth pursuing? Were attendees engaged? Sales feedback tells you if you\'re creating actual opportunities or just hitting a number.'
                  },
                  {
                    icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />),
                    title: 'Customer Value Signal',
                    desc: 'High attendee satisfaction means prospects found real value. That predicts conversion. That proves ROI. That\'s what leadership needs to see.'
                  },
                  {
                    icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />),
                    title: 'Channel Partnership Health',
                    desc: 'Partners co-invest in your events and co-generate pipeline. High partner scores predict future co-marketing opportunities and channel revenue.',
                    highlight: true
                  }
                ].map((indicator, i) => (
                  <div key={i} className={`indicator-enterprise ${indicator.highlight ? 'highlight-indicator-enterprise' : ''}`}>
                    <div className="indicator-icon-enterprise">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {indicator.icon}
                      </svg>
                    </div>
                    <div className="indicator-content-enterprise">
                      <h4>{indicator.title}</h4>
                      <p>{indicator.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/how-it-works" className="learn-more-link-enterprise">
                See the complete feedback loop visualization →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section-enterprise">
        <div className="container">
          <h2 className="section-title-enterprise">The platform built for modern field marketing</h2>
          <p className="section-subtitle-enterprise">One metric that tells you if your event created real value for prospects, customers, sales, and partners</p>

          <div className="stats-grid-enterprise">
            {[
              { number: '500+', label: 'Events Measured' },
              { number: '$50M+', label: 'Pipeline Tracked' },
              { number: '92%', label: 'Teams See Better ROI' },
              { number: '10K+', label: 'Survey Responses' }
            ].map((stat, i) => (
              <div key={i} className="stat-card-enterprise animate-on-scroll" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="stat-number-enterprise">{stat.number}</div>
                <div className="stat-label-enterprise">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section-enterprise">
        <div className="container">
          <h2 className="section-title-enterprise">Everything you need for complete campaign intelligence</h2>
          <p className="section-subtitle-enterprise">Stop guessing which campaigns create real value. See which events resonate with customers, align with sales, satisfy partners, and drive actual pipeline.</p>

          <div className="features-grid-enterprise">
            {[
              {
                icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />),
                title: 'Salesforce Data Integration',
                desc: 'MQLs, meetings booked, pipeline generated, and target account engagement flow directly from your Salesforce campaigns. See the business outcomes that matter.'
              },
              {
                icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />),
                title: 'Partner Feedback Collection',
                desc: 'The only platform that captures partner perspectives. Know which events drive channel loyalty, competitive wins, and future co-marketing pipeline.'
              },
              {
                icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />),
                title: 'AI-Powered Insights',
                desc: 'Claude AI analyzes verbatim feedback from all four stakeholders, surfaces hidden patterns, predicts pipeline, and generates strategic recommendations.'
              },
              {
                icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />),
                title: 'Multi-Stakeholder Surveys',
                desc: 'Automated surveys for attendees, sales reps, marketing teams, and partners. 90-second surveys with 65% response rates.'
              },
              {
                icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />),
                title: 'Campaign Object Sync',
                desc: 'FSS and all four feedback scores sync directly to Salesforce Campaign objects. Build executive dashboards showing real ROI, not vanity metrics.'
              },
              {
                icon: (<path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />),
                title: 'Continuous Improvement',
                desc: 'Compare events over time. AI helps you learn what works, double down on high-performing formats, and stop wasting budget on events that don\'t deliver.'
              }
            ].map((feature, i) => (
              <div key={i} className="feature-card-enterprise animate-on-scroll" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="feature-icon-enterprise">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="feature-title-enterprise">{feature.title}</h3>
                <p className="feature-desc-enterprise">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-enterprise">
        <div className="container">
          <div className="cta-content-enterprise">
            <h2>See the complete picture.<br />Not just the metrics you hope leadership accepts.</h2>
            <p>360° campaign intelligence from Sales, Marketing, Attendees, and Partners—powered by AI to show you what actually works.</p>
            <a href="#" className="primary-button-enterprise-large">Start Your Free Trial</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-enterprise">
        <div className="container">
          <div className="footer-content-enterprise">
            <div>
              <div className="footer-brand-enterprise">Momentum</div>
              <p className="footer-description-enterprise">The only platform with 360° campaign intelligence. Capture feedback from Sales, Marketing, Attendees, and Partners—then use AI to turn insights into action.</p>
            </div>

            <div className="footer-section-enterprise">
              <h4>Product</h4>
              <ul className="footer-links-enterprise">
                <li><a href="#features">Features</a></li>
                <li><Link href="/integrations">Integrations</Link></li>
                <li><a href="#">Pricing</a></li>
                <li><Link href="/docs">Documentation</Link></li>
              </ul>
            </div>

            <div className="footer-section-enterprise">
              <h4>Company</h4>
              <ul className="footer-links-enterprise">
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section-enterprise">
              <h4>Resources</h4>
              <ul className="footer-links-enterprise">
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-enterprise">
            <div>&copy; 2025 Momentum. All rights reserved.</div>
            <div className="social-links-enterprise">
              <a href="#" className="social-link-enterprise">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="social-link-enterprise">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3ZM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75ZM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66Z"/>
                </svg>
              </a>
              <a href="#" className="social-link-enterprise">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
