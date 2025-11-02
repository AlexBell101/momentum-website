'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function HowItWorks() {
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

    // Stakeholder hover interactions
    const stakeholders = document.querySelectorAll('.stakeholder');
    stakeholders.forEach(stakeholder => {
      stakeholder.addEventListener('mouseenter', () => {
        stakeholder.classList.add('active');
      });
      stakeholder.addEventListener('mouseleave', () => {
        stakeholder.classList.remove('active');
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
              <li><Link href="/#features">Features</Link></li>
              <li><Link href="/how-it-works">How It Works</Link></li>
              <li><Link href="/integrations">Integrations</Link></li>
              <li><Link href="/docs">Docs</Link></li>
            </ul>
            <a href="#" className="cta-button">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" style={{ paddingBottom: '80px' }}>
        <div className="container">
          <div className="hero-content" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              padding: '8px 16px',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: '600',
              color: 'white',
              marginBottom: '24px',
              letterSpacing: '0.02em'
            }}>
              <span style={{ fontSize: '16px' }}>◆</span>
              <span>360° CAMPAIGN INTELLIGENCE</span>
            </div>
            <h1>How Momentum Works</h1>
            <p className="hero-subtitle">The complete feedback loop: Salesforce data + feedback from Sales, Marketing, Attendees, and Partners—synthesized by AI into your Field Success Score.</p>
          </div>
        </div>
      </section>

      {/* Interactive Feedback Loop Visualization */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', color: 'white', marginBottom: '60px' }}>
            <h2 className="section-title" style={{ color: 'white' }}>The Complete Feedback Loop</h2>
            <p style={{ fontSize: '18px', opacity: 0.95, maxWidth: '700px', margin: '0 auto' }}>
              All four perspectives flow into your Field Success Score, with AI analyzing patterns to surface strategic insights.
            </p>
          </div>

          {/* Feedback Loop Visualization */}
          <div className="feedback-loop-container">
            <div className="feedback-loop">
              {/* SVG Connections */}
              <svg className="connections-svg" width="600" height="600" style={{ position: 'absolute', top: 0, left: 0 }}>
                {/* Marketing to Center */}
                <line x1="300" y1="110" x2="300" y2="240" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
                </line>
                {/* Sales to Center */}
                <line x1="300" y1="490" x2="300" y2="360" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
                </line>
                {/* Partners to Center */}
                <line x1="110" y1="300" x2="240" y2="300" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
                </line>
                {/* Attendees to Center */}
                <line x1="490" y1="300" x2="360" y2="300" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
                </line>

                {/* Circular connections */}
                <path d="M 300 110 Q 450 150, 490 300" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" strokeDasharray="3,3">
                  <animate attributeName="stroke-dashoffset" from="0" to="6" dur="2s" repeatCount="indefinite"/>
                </path>
                <path d="M 490 300 Q 450 450, 300 490" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" strokeDasharray="3,3">
                  <animate attributeName="stroke-dashoffset" from="0" to="6" dur="2s" repeatCount="indefinite"/>
                </path>
                <path d="M 300 490 Q 150 450, 110 300" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" strokeDasharray="3,3">
                  <animate attributeName="stroke-dashoffset" from="0" to="6" dur="2s" repeatCount="indefinite"/>
                </path>
                <path d="M 110 300 Q 150 150, 300 110" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" strokeDasharray="3,3">
                  <animate attributeName="stroke-dashoffset" from="0" to="6" dur="2s" repeatCount="indefinite"/>
                </path>
              </svg>

              {/* Center - Event Hub */}
              <div className="feedback-center">
                <div className="event-hub">
                  <div className="event-hub-text">EVENT</div>
                </div>
                <div className="ai-analyzing-badge">✨ AI Analyzing</div>
                <div className="fss-score-display">FSS: 85</div>
              </div>

              {/* Stakeholders - white boxes with dark text */}
              <div className="stakeholder marketing">
                <div className="stakeholder-icon">📊</div>
                <div className="stakeholder-title">Marketing</div>
                <div className="stakeholder-desc">Execution & logistics</div>
              </div>

              <div className="stakeholder sales">
                <div className="stakeholder-icon">💼</div>
                <div className="stakeholder-title">Sales</div>
                <div className="stakeholder-desc">Lead quality & ICP fit</div>
              </div>

              <div className="stakeholder partners">
                <div className="stakeholder-icon">🤝</div>
                <div className="stakeholder-title">Partners</div>
                <div className="stakeholder-desc">Co-marketing value</div>
              </div>

              <div className="stakeholder attendees">
                <div className="stakeholder-icon">👥</div>
                <div className="stakeholder-title">Attendees</div>
                <div className="stakeholder-desc">Value delivery & NPS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>The Problem with Event Metrics Today</h2>

            <div style={{ marginBottom: '40px' }}>
              <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#4a5568', marginBottom: '20px' }}>
                Field marketing teams are stuck defending MQL counts that don't tell the real story. You hit your numbers, but sales complains about lead quality. Attendees show up, but you don't know if they actually found value. <strong>Partners co-invest but you never ask if the event worked for them.</strong> Leadership wants ROI proof, but all you have are activity metrics.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#4a5568' }}>
                The Field Success Score solves this by combining hard Salesforce data with real feedback from <strong>all four stakeholders</strong> who matter most: your attendees, sales team, marketing team, <strong>and partners</strong>—then using AI to surface insights you can act on.
              </p>
            </div>

            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '30px', marginTop: '60px' }}>How the FSS Works</h2>

            <div className="features-grid" style={{ gap: '30px' }}>
              <div className="feature-card animate-on-scroll">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                </div>
                <h3 className="feature-title">1. Salesforce Business Metrics</h3>
                <p className="feature-description">MQLs generated, meetings booked, pipeline created, and target account engagement flow directly from your Salesforce campaigns. This is the quantitative foundation - the business outcomes that prove events drive revenue.</p>
              </div>

              <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.1s' }}>
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                  </svg>
                </div>
                <h3 className="feature-title">2. Sales Team Feedback</h3>
                <p className="feature-description">Your sales team knows if leads are worth pursuing. After each event, sales partners rate lead quality, attendee engagement, and whether the event helped them advance deals. This is the reality check that separates vanity metrics from real value.</p>
              </div>

              <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                </div>
                <h3 className="feature-title">3. Attendee Experience</h3>
                <p className="feature-description">High attendee satisfaction predicts conversion. If prospects found genuine value, they're more likely to engage with sales and become customers. This is your early signal of ROI and the proof that events serve your market, not just your metrics.</p>
              </div>

              <div className="feature-card animate-on-scroll highlight-indicator" style={{ animationDelay: '0.3s' }}>
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <h3 className="feature-title">4. Partner Feedback <span className="new-badge">NEW</span></h3>
                <p className="feature-description">Your channel partners co-invest in events and co-generate pipeline. Their feedback reveals whether events drive co-marketing opportunities, whether attendees match their ICP, and if they'll support future events—predicting channel pipeline growth.</p>
              </div>

              <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.4s' }}>
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                </div>
                <h3 className="feature-title">5. AI-Powered Insights</h3>
                <p className="feature-description">Claude AI analyzes verbatim feedback from all four stakeholders, surfaces patterns across events, predicts pipeline outcomes, and generates strategic recommendations—turning your 360° data into actionable intelligence.</p>
              </div>

              <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.5s' }}>
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                  </svg>
                </div>
                <h3 className="feature-title">6. Marketing Team Assessment</h3>
                <p className="feature-description">Your team&apos;s evaluation of execution quality, logistics, and strategic goal achievement. Captures operational excellence beyond metrics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(180deg, #ffffff 0%, #f5f7fa 100%)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '50px' }}>Why This Matters</h2>

            <div style={{ display: 'grid', gap: '40px' }}>
              <div className="animate-on-scroll">
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#2d3748', marginBottom: '15px' }}>For Marketing Leaders</h3>
                <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#4a5568' }}>
                  Prove ROI with confidence. Show which events drive actual pipeline and customer value, not just activity. Defend your budget with data that executives trust—from all four stakeholders.
                </p>
              </div>

              <div className="animate-on-scroll" style={{ animationDelay: '0.1s' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#2d3748', marginBottom: '15px' }}>For Sales & Partner Alignment</h3>
                <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#4a5568' }}>
                  Stop the "your leads are garbage" conversation. When both sales and partners rate events highly, you know you're creating opportunities everyone can close. When partner scores are low, you get early warning before channel relationships suffer.
                </p>
              </div>

              <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#2d3748', marginBottom: '15px' }}>For AI-Driven Optimization</h3>
                <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#4a5568' }}>
                  AI analyzes feedback from all four perspectives to spot patterns you&apos;d miss. "Partners consistently score webinars 15pts lower" or "Events with Partner Score &gt;80 generate 2.3x more channel pipeline." Learn faster, optimize smarter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Section - UPDATED */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '50px' }}>Real World Example</h2>

            <div style={{ background: '#f7fafc', padding: '40px', borderRadius: '12px', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#2d3748', marginBottom: '20px' }}>Scenario: Two Similar Events</h3>

              <div style={{ display: 'grid', gap: '30px', gridTemplateColumns: '1fr 1fr', marginTop: '30px' }}>
                <div style={{ background: 'white', padding: '25px', borderRadius: '8px', border: '2px solid #e5e7eb' }}>
                  <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#2d3748', marginBottom: '15px' }}>Event A: High Volume</h4>
                  <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#4a5568', listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px' }}>✓ 200 MQLs generated</li>
                    <li style={{ marginBottom: '10px' }}>✓ $500K pipeline</li>
                    <li style={{ marginBottom: '10px' }}>✗ Sales feedback: 3/10</li>
                    <li style={{ marginBottom: '10px' }}>✗ Attendee satisfaction: 5/10</li>
                    <li style={{ marginBottom: '10px' }}>✗ <strong>Partner feedback: 4/10</strong></li>
                    <li style={{ marginTop: '20px', fontWeight: '600', color: '#e53e3e', fontSize: '20px' }}>FSS: 48</li>
                  </ul>
                </div>

                <div style={{ background: 'white', padding: '25px', borderRadius: '8px', border: '2px solid #10B981' }}>
                  <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#2d3748', marginBottom: '15px' }}>Event B: High Quality</h4>
                  <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#4a5568', listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px' }}>✓ 80 MQLs generated</li>
                    <li style={{ marginBottom: '10px' }}>✓ $450K pipeline</li>
                    <li style={{ marginBottom: '10px' }}>✓ Sales feedback: 9/10</li>
                    <li style={{ marginBottom: '10px' }}>✓ Attendee satisfaction: 9/10</li>
                    <li style={{ marginBottom: '10px' }}>✓ <strong>Partner feedback: 8/10</strong></li>
                    <li style={{ marginTop: '20px', fontWeight: '600', color: '#38a169', fontSize: '20px' }}>FSS: 87</li>
                  </ul>
                </div>
              </div>

              <div style={{ marginTop: '30px', padding: '25px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '24px' }}>✨</span>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#059669', marginBottom: '8px' }}>AI Insight</h4>
                    <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#4a5568' }}>
                      Event B's high partner score (8/10) predicted future co-marketing success. Three partners requested follow-up events, generating an additional $800K in channel pipeline over 6 months—something Event A's vanity metrics completely missed.
                    </p>
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#4a5568', marginTop: '30px' }}>
                Traditional metrics say Event A was more successful - double the MQLs. But Event B's high FSS shows it created real value across <strong>all four stakeholders</strong>: engaged prospects, quality leads sales wants to work, partners eager to co-market again, and flawless execution. Six months later, Event B drove 4x the closed-won revenue and strengthened channel relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>See the complete picture of event success</h2>
            <p>Combine Salesforce data with feedback from Sales, Marketing, Attendees, and Partners—powered by AI</p>
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
                <li><Link href="/#features">Features</Link></li>
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
