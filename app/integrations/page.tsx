'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Integrations() {
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
            <h1>Integrations</h1>
            <p className="hero-subtitle">Connect Momentum with your existing marketing and sales tools to measure event success automatically</p>
          </div>
        </div>
      </section>

      {/* Salesforce Integration */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div className="animate-on-scroll">
              <div style={{ width: '120px', height: '120px', background: '#00A1E0', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#2d3748', marginBottom: '20px' }}>Salesforce Integration</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#4a5568', marginBottom: '30px' }}>
                Momentum connects directly to your Salesforce instance to pull campaign data, track pipeline, and sync Field Success Scores back to Campaign objects.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                  <div style={{ flexShrink: 0, width: '24px', height: '24px', background: '#4299e1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '3px' }}>
                    <span style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>✓</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#2d3748', marginBottom: '5px' }}>Campaign Member Data</h4>
                    <p style={{ fontSize: '16px', color: '#4a5568' }}>Pull MQLs, meetings booked, and target account engagement automatically</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                  <div style={{ flexShrink: 0, width: '24px', height: '24px', background: '#4299e1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '3px' }}>
                    <span style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>✓</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#2d3748', marginBottom: '5px' }}>Pipeline Tracking</h4>
                    <p style={{ fontSize: '16px', color: '#4a5568' }}>See pipeline generated and track through to closed-won revenue</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                  <div style={{ flexShrink: 0, width: '24px', height: '24px', background: '#4299e1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '3px' }}>
                    <span style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>✓</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#2d3748', marginBottom: '5px' }}>FSS Sync Back</h4>
                    <p style={{ fontSize: '16px', color: '#4a5568' }}>Field Success Scores automatically sync to custom Campaign fields for executive dashboards</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                  <div style={{ flexShrink: 0, width: '24px', height: '24px', background: '#4299e1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '3px' }}>
                    <span style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>✓</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#2d3748', marginBottom: '5px' }}>Secure OAuth Connection</h4>
                    <p style={{ fontSize: '16px', color: '#4a5568' }}>Enterprise-grade security with OAuth 2.0 authentication and field-level permissions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div style={{ background: '#f7fafc', padding: '40px', borderRadius: '12px', border: '2px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#2d3748', marginBottom: '20px' }}>What Gets Synced</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#718096', marginBottom: '5px' }}>FROM SALESFORCE</div>
                    <div style={{ fontSize: '16px', color: '#2d3748' }}>Campaign Members, Opportunities, Activities, Account Data</div>
                  </div>
                  <div style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#718096', marginBottom: '5px' }}>TO SALESFORCE</div>
                    <div style={{ fontSize: '16px', color: '#2d3748' }}>Field Success Score, Survey Results, Sales Feedback Ratings</div>
                  </div>
                </div>

                <div style={{ marginTop: '30px', padding: '20px', background: '#edf2f7', borderRadius: '8px' }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#2d3748', marginBottom: '10px' }}>Setup Time</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: '#4299e1' }}>~15 minutes</div>
                  <div style={{ fontSize: '14px', color: '#4a5568', marginTop: '5px' }}>Click-based setup, no code required</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slack Integration */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(180deg, #ffffff 0%, #f5f7fa 100%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div className="animate-on-scroll" style={{ order: 2 }}>
              <div style={{ width: '120px', height: '120px', background: '#4A154B', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                  <path d="M8 4C8 5.1 7.1 6 6 6C4.9 6 4 5.1 4 4C4 2.9 4.9 2 6 2C7.1 2 8 2.9 8 4Z" fill="white"/>
                  <path d="M8 12C8 13.1 7.1 14 6 14C4.9 14 4 13.1 4 12C4 10.9 4.9 10 6 10C7.1 10 8 10.9 8 12Z" fill="white"/>
                  <path d="M16 12C16 13.1 15.1 14 14 14C12.9 14 12 13.1 12 12C12 10.9 12.9 10 14 10C15.1 10 16 10.9 16 12Z" fill="white"/>
                  <path d="M16 4C16 5.1 15.1 6 14 6C12.9 6 12 5.1 12 4C12 2.9 12.9 2 14 2C15.1 2 16 2.9 16 4Z" fill="white"/>
                  <path d="M14 18H10V6H14V18Z" fill="white"/>
                  <path d="M18 14V10H6V14H18Z" fill="white"/>
                </svg>
              </div>
              <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#2d3748', marginBottom: '20px' }}>Slack Integration</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#4a5568', marginBottom: '30px' }}>
                Get real-time notifications and insights delivered directly to your team's Slack workspace. Stay on top of event performance without context switching.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                  <div style={{ flexShrink: 0, width: '24px', height: '24px', background: '#4A154B', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '3px' }}>
                    <span style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>✓</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#2d3748', marginBottom: '5px' }}>Event Score Alerts</h4>
                    <p style={{ fontSize: '16px', color: '#4a5568' }}>Get notified when Field Success Scores are calculated for your events</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                  <div style={{ flexShrink: 0, width: '24px', height: '24px', background: '#4A154B', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '3px' }}>
                    <span style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>✓</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#2d3748', marginBottom: '5px' }}>Low Score Warnings</h4>
                    <p style={{ fontSize: '16px', color: '#4a5568' }}>Automatically flag events that underperform so you can course-correct quickly</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                  <div style={{ flexShrink: 0, width: '24px', height: '24px', background: '#4A154B', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '3px' }}>
                    <span style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>✓</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#2d3748', marginBottom: '5px' }}>Survey Response Updates</h4>
                    <p style={{ fontSize: '16px', color: '#4a5568' }}>Real-time updates when attendees and sales partners complete feedback surveys</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                  <div style={{ flexShrink: 0, width: '24px', height: '24px', background: '#4A154B', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '3px' }}>
                    <span style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>✓</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#2d3748', marginBottom: '5px' }}>Weekly Summaries</h4>
                    <p style={{ fontSize: '16px', color: '#4a5568' }}>Automated weekly reports showing your highest and lowest performing events</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll" style={{ animationDelay: '0.2s', order: 1 }}>
              <div style={{ background: 'white', padding: '30px', borderRadius: '12px', border: '2px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.07)' }}>
                <div style={{ background: '#f7fafc', padding: '20px', borderRadius: '8px', marginBottom: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <div style={{ width: '32px', height: '32px', background: '#4299e1', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                      </svg>
                    </div>
                    <span style={{ fontWeight: '600', color: '#2d3748' }}>Momentum</span>
                    <span style={{ fontSize: '12px', color: '#718096' }}>10:34 AM</span>
                  </div>
                  <div style={{ fontSize: '15px', color: '#2d3748', lineHeight: '1.6' }}>
                    <strong>Enterprise Summit SF</strong> scored <strong style={{ color: '#38a169' }}>89/100</strong> 🎉<br/>
                    <span style={{ color: '#4a5568' }}>Sales feedback: 9/10 | Attendee satisfaction: 8.5/10</span>
                  </div>
                </div>

                <div style={{ background: '#fff5f5', padding: '20px', borderRadius: '8px', marginBottom: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <div style={{ width: '32px', height: '32px', background: '#e53e3e', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                      </svg>
                    </div>
                    <span style={{ fontWeight: '600', color: '#2d3748' }}>Momentum</span>
                    <span style={{ fontSize: '12px', color: '#718096' }}>Yesterday</span>
                  </div>
                  <div style={{ fontSize: '15px', color: '#2d3748', lineHeight: '1.6' }}>
                    <strong>Webinar: Product Launch</strong> scored <strong style={{ color: '#e53e3e' }}>58/100</strong><br/>
                    <span style={{ color: '#4a5568' }}>Low sales feedback (4/10) - check lead quality</span>
                  </div>
                </div>

                <div style={{ fontSize: '14px', color: '#718096', textAlign: 'center', marginTop: '20px' }}>
                  Example Slack notifications
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Integrations Coming */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: '20px' }}>More Integrations Coming Soon</h2>
            <p style={{ fontSize: '18px', color: '#4a5568', marginBottom: '50px' }}>We're constantly expanding our integration ecosystem. Have a specific tool you need? Let us know.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
              <div className="animate-on-scroll" style={{ padding: '30px', background: '#f7fafc', borderRadius: '12px' }}>
                <div style={{ fontSize: '48px', marginBottom: '15px' }}>📧</div>
                <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#2d3748', marginBottom: '10px' }}>Email Platforms</h4>
                <p style={{ fontSize: '14px', color: '#718096' }}>HubSpot, Marketo, Pardot</p>
              </div>

              <div className="animate-on-scroll" style={{ padding: '30px', background: '#f7fafc', borderRadius: '12px', animationDelay: '0.1s' }}>
                <div style={{ fontSize: '48px', marginBottom: '15px' }}>📊</div>
                <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#2d3748', marginBottom: '10px' }}>Analytics Tools</h4>
                <p style={{ fontSize: '14px', color: '#718096' }}>Google Analytics, Mixpanel</p>
              </div>

              <div className="animate-on-scroll" style={{ padding: '30px', background: '#f7fafc', borderRadius: '12px', animationDelay: '0.2s' }}>
                <div style={{ fontSize: '48px', marginBottom: '15px' }}>🎫</div>
                <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#2d3748', marginBottom: '10px' }}>Event Platforms</h4>
                <p style={{ fontSize: '14px', color: '#718096' }}>Eventbrite, Splash, Swoogo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to connect your tools?</h2>
            <p>Set up Salesforce and Slack integrations in minutes</p>
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
