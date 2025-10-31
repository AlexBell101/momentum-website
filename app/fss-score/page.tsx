'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function FSSScore() {
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
      {/* Navigation */}
      <nav id="navbar">
        <div className="container">
          <div className="nav-content">
            <Link href="/" className="logo">Momentum</Link>
            <ul className="nav-links">
              <li><Link href="/#features">Features</Link></li>
              <li><Link href="/fss-score">FSS Score</Link></li>
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
            <h1>The Field Success Score</h1>
            <p className="hero-subtitle">A single metric that shows whether your field marketing events create real value for prospects, sales partners, and your business</p>
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
                Field marketing teams are stuck defending MQL counts that don't tell the real story. You hit your numbers, but sales complains about lead quality. Attendees show up, but you don't know if they actually found value. Leadership wants ROI proof, but all you have are activity metrics.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#4a5568' }}>
                The Field Success Score solves this by combining hard Salesforce data with real feedback from the people who matter most: your attendees, sales partners, and field team.
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
                <h3 className="feature-title">2. Sales Partner Feedback</h3>
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

              <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.3s' }}>
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <h3 className="feature-title">4. Field Team Score</h3>
                <p className="feature-description">Your field marketing team's assessment of execution quality, logistics, and whether the event achieved its strategic goals. This captures operational excellence and provides context that numbers alone can't show.</p>
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
                  Prove ROI with confidence. Show which events drive actual pipeline and customer value, not just activity. Defend your budget with data that executives trust.
                </p>
              </div>

              <div className="animate-on-scroll" style={{ animationDelay: '0.1s' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#2d3748', marginBottom: '15px' }}>For Sales Alignment</h3>
                <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#4a5568' }}>
                  Stop the "your leads are garbage" conversation. When sales partners rate events highly, you know you're creating opportunities they can actually close. When scores are low, you have clear direction for improvement.
                </p>
              </div>

              <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#2d3748', marginBottom: '15px' }}>For Continuous Improvement</h3>
                <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#4a5568' }}>
                  Compare events over time. Understand which formats resonate with your market, which topics drive engagement, and which execution approaches deliver the best results. Learn faster, optimize smarter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '50px' }}>Real World Example</h2>

            <div style={{ background: '#f7fafc', padding: '40px', borderRadius: '12px', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#2d3748', marginBottom: '20px' }}>Scenario: Two Similar Events</h3>

              <div style={{ display: 'grid', gap: '30px', gridTemplateColumns: '1fr 1fr', marginTop: '30px' }}>
                <div style={{ background: 'white', padding: '25px', borderRadius: '8px' }}>
                  <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#2d3748', marginBottom: '15px' }}>Event A: High Volume</h4>
                  <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#4a5568', listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px' }}>✓ 200 MQLs generated</li>
                    <li style={{ marginBottom: '10px' }}>✓ $500K pipeline</li>
                    <li style={{ marginBottom: '10px' }}>✗ Sales feedback: 3/10</li>
                    <li style={{ marginBottom: '10px' }}>✗ Attendee satisfaction: 5/10</li>
                    <li style={{ marginTop: '20px', fontWeight: '600', color: '#e53e3e' }}>FSS: 52</li>
                  </ul>
                </div>

                <div style={{ background: 'white', padding: '25px', borderRadius: '8px' }}>
                  <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#2d3748', marginBottom: '15px' }}>Event B: High Quality</h4>
                  <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#4a5568', listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px' }}>✓ 80 MQLs generated</li>
                    <li style={{ marginBottom: '10px' }}>✓ $450K pipeline</li>
                    <li style={{ marginBottom: '10px' }}>✓ Sales feedback: 9/10</li>
                    <li style={{ marginBottom: '10px' }}>✓ Attendee satisfaction: 9/10</li>
                    <li style={{ marginTop: '20px', fontWeight: '600', color: '#38a169' }}>FSS: 87</li>
                  </ul>
                </div>
              </div>

              <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#4a5568', marginTop: '30px' }}>
                Traditional metrics say Event A was more successful - double the MQLs. But Event B's high FSS shows it created real value: engaged prospects, quality leads sales actually wants to work, and a format worth repeating. Six months later, Event B drove 3x the closed-won revenue.
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
            <p>Combine Salesforce data with real feedback to prove which events drive real value</p>
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
              <p className="footer-description">Go beyond MQL counts. Prove which events create real value for customers, sales, and your business with combined Salesforce data and team feedback.</p>
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
