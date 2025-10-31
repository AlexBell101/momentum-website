'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Docs() {
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
      <section className="hero" style={{ paddingBottom: '60px' }}>
        <div className="container">
          <div className="hero-content" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h1>Documentation</h1>
            <p className="hero-subtitle">Everything you need to get started with Momentum and measure field marketing success</p>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '50px' }}>Quick Start Guide</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {/* Step 1 */}
              <div className="animate-on-scroll" style={{ display: 'flex', gap: '30px', padding: '30px', background: '#f7fafc', borderRadius: '12px', border: '2px solid #e2e8f0' }}>
                <div style={{ flexShrink: 0, width: '60px', height: '60px', background: '#4299e1', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '28px', fontWeight: '700', color: 'white' }}>1</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#2d3748', marginBottom: '15px' }}>Connect Salesforce</h3>
                  <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#4a5568', marginBottom: '15px' }}>
                    Click "Connect Salesforce" in your Momentum dashboard and authorize access. Momentum will request read access to Campaigns, Campaign Members, Opportunities, and Accounts, plus write access to sync Field Success Scores back to custom Campaign fields.
                  </p>
                  <div style={{ background: 'white', padding: '15px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '14px', color: '#2d3748' }}>
                    Settings → Integrations → Salesforce → Authorize
                  </div>
                  <p style={{ fontSize: '14px', color: '#718096', marginTop: '10px' }}>⏱️ Setup time: ~5 minutes</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="animate-on-scroll" style={{ display: 'flex', gap: '30px', padding: '30px', background: '#f7fafc', borderRadius: '12px', border: '2px solid #e2e8f0', animationDelay: '0.1s' }}>
                <div style={{ flexShrink: 0, width: '60px', height: '60px', background: '#4299e1', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '28px', fontWeight: '700', color: 'white' }}>2</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#2d3748', marginBottom: '15px' }}>Create Your First Event</h3>
                  <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#4a5568', marginBottom: '15px' }}>
                    Create a new event in Momentum and link it to your Salesforce Campaign. Set your event date, choose which surveys to send (attendees, sales partners, field team), and configure survey timing.
                  </p>
                  <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#4a5568', marginLeft: '20px', marginBottom: '15px' }}>
                    <li>Event name and description</li>
                    <li>Link to Salesforce Campaign ID</li>
                    <li>Configure survey distribution lists</li>
                    <li>Set survey send times (typically 1 day post-event)</li>
                  </ul>
                  <p style={{ fontSize: '14px', color: '#718096', marginTop: '10px' }}>⏱️ Setup time: ~10 minutes per event</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="animate-on-scroll" style={{ display: 'flex', gap: '30px', padding: '30px', background: '#f7fafc', borderRadius: '12px', border: '2px solid #e2e8f0', animationDelay: '0.2s' }}>
                <div style={{ flexShrink: 0, width: '60px', height: '60px', background: '#4299e1', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '28px', fontWeight: '700', color: 'white' }}>3</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#2d3748', marginBottom: '15px' }}>Collect Feedback</h3>
                  <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#4a5568', marginBottom: '15px' }}>
                    After your event, Momentum automatically sends surveys to attendees, sales partners, and your field team. Survey links are sent via email with customizable timing and reminders.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                    <div style={{ background: 'white', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#718096', marginBottom: '5px' }}>ATTENDEES</div>
                      <div style={{ fontSize: '20px', fontWeight: '700', color: '#4299e1' }}>8 questions</div>
                      <div style={{ fontSize: '12px', color: '#4a5568', marginTop: '5px' }}>~2 min survey</div>
                    </div>
                    <div style={{ background: 'white', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#718096', marginBottom: '5px' }}>SALES PARTNERS</div>
                      <div style={{ fontSize: '20px', fontWeight: '700', color: '#4299e1' }}>6 questions</div>
                      <div style={{ fontSize: '12px', color: '#4a5568', marginTop: '5px' }}>~2 min survey</div>
                    </div>
                    <div style={{ background: 'white', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#718096', marginBottom: '5px' }}>FIELD TEAM</div>
                      <div style={{ fontSize: '20px', fontWeight: '700', color: '#4299e1' }}>5 questions</div>
                      <div style={{ fontSize: '12px', color: '#4a5568', marginTop: '5px' }}>~2 min survey</div>
                    </div>
                  </div>
                  <p style={{ fontSize: '14px', color: '#718096', marginTop: '10px' }}>💡 Typical response rate: 35-45% with one reminder</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="animate-on-scroll" style={{ display: 'flex', gap: '30px', padding: '30px', background: '#f7fafc', borderRadius: '12px', border: '2px solid #e2e8f0', animationDelay: '0.3s' }}>
                <div style={{ flexShrink: 0, width: '60px', height: '60px', background: '#4299e1', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '28px', fontWeight: '700', color: 'white' }}>4</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#2d3748', marginBottom: '15px' }}>View Your Field Success Score</h3>
                  <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#4a5568', marginBottom: '15px' }}>
                    Once survey responses come in (typically within 3-5 days), Momentum calculates your Field Success Score by combining Salesforce campaign data with feedback scores. The FSS and all underlying metrics automatically sync back to your Salesforce Campaign object.
                  </p>
                  <div style={{ background: 'white', padding: '20px', borderRadius: '8px', marginBottom: '15px' }}>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#718096', marginBottom: '10px' }}>WHAT YOU'LL SEE</div>
                    <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#4a5568', marginLeft: '20px' }}>
                      <li>Overall Field Success Score (0-100)</li>
                      <li>Sales Partner Feedback score</li>
                      <li>Attendee Experience score</li>
                      <li>Field Team Score</li>
                      <li>Salesforce business metrics (MQLs, pipeline, etc.)</li>
                      <li>Historical comparison to past events</li>
                    </ul>
                  </div>
                  <p style={{ fontSize: '14px', color: '#718096', marginTop: '10px' }}>✅ All data syncs to Salesforce custom Campaign fields</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Topics */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(180deg, #ffffff 0%, #f5f7fa 100%)' }}>
        <div className="container">
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '50px' }}>Documentation Topics</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
              {/* Topic 1 */}
              <div className="feature-card animate-on-scroll">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                </div>
                <h3 className="feature-title">Salesforce Integration</h3>
                <p className="feature-description">Setup guide, permissions required, custom field mapping, and troubleshooting common sync issues</p>
                <a href="#" style={{ color: '#4299e1', fontSize: '14px', fontWeight: '600', marginTop: '10px', display: 'inline-block' }}>Read docs →</a>
              </div>

              {/* Topic 2 */}
              <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.1s' }}>
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                  </svg>
                </div>
                <h3 className="feature-title">Survey Configuration</h3>
                <p className="feature-description">Customize survey questions, timing, distribution lists, and automated reminders for maximum response rates</p>
                <a href="#" style={{ color: '#4299e1', fontSize: '14px', fontWeight: '600', marginTop: '10px', display: 'inline-block' }}>Read docs →</a>
              </div>

              {/* Topic 3 */}
              <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                  </svg>
                </div>
                <h3 className="feature-title">FSS Score Methodology</h3>
                <p className="feature-description">Deep dive into how the Field Success Score is calculated, weighted, and benchmarked against your historical events</p>
                <a href="#" style={{ color: '#4299e1', fontSize: '14px', fontWeight: '600', marginTop: '10px', display: 'inline-block' }}>Read docs →</a>
              </div>

              {/* Topic 4 */}
              <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.3s' }}>
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                  </svg>
                </div>
                <h3 className="feature-title">Dashboard & Reports</h3>
                <p className="feature-description">Build custom dashboards, export data, create executive reports, and set up automated Slack notifications</p>
                <a href="#" style={{ color: '#4299e1', fontSize: '14px', fontWeight: '600', marginTop: '10px', display: 'inline-block' }}>Read docs →</a>
              </div>

              {/* Topic 5 */}
              <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.4s' }}>
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <h3 className="feature-title">Team Management</h3>
                <p className="feature-description">Add team members, set permissions, manage roles, and control access to events and data</p>
                <a href="#" style={{ color: '#4299e1', fontSize: '14px', fontWeight: '600', marginTop: '10px', display: 'inline-block' }}>Read docs →</a>
              </div>

              {/* Topic 6 */}
              <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.5s' }}>
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
                <h3 className="feature-title">API Reference</h3>
                <p className="feature-description">REST API documentation for custom integrations, webhooks, and programmatic access to your event data</p>
                <a href="#" style={{ color: '#4299e1', fontSize: '14px', fontWeight: '600', marginTop: '10px', display: 'inline-block' }}>Read docs →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: '30px' }}>Need Help?</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#4a5568', marginBottom: '40px' }}>
              Our team is here to help you measure field marketing success with confidence
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
              <div style={{ padding: '30px', background: '#f7fafc', borderRadius: '12px' }}>
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>💬</div>
                <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#2d3748', marginBottom: '10px' }}>Live Chat</h4>
                <p style={{ fontSize: '14px', color: '#4a5568', marginBottom: '15px' }}>Chat with our support team Monday-Friday, 9am-5pm PT</p>
                <a href="#" style={{ color: '#4299e1', fontSize: '14px', fontWeight: '600' }}>Start chat →</a>
              </div>

              <div style={{ padding: '30px', background: '#f7fafc', borderRadius: '12px' }}>
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>📧</div>
                <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#2d3748', marginBottom: '10px' }}>Email Support</h4>
                <p style={{ fontSize: '14px', color: '#4a5568', marginBottom: '15px' }}>Send us your questions, we typically respond within 4 hours</p>
                <a href="#" style={{ color: '#4299e1', fontSize: '14px', fontWeight: '600' }}>Email us →</a>
              </div>

              <div style={{ padding: '30px', background: '#f7fafc', borderRadius: '12px' }}>
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>📅</div>
                <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#2d3748', marginBottom: '10px' }}>Schedule Call</h4>
                <p style={{ fontSize: '14px', color: '#4a5568', marginBottom: '15px' }}>Book a 30-minute onboarding call with our team</p>
                <a href="#" style={{ color: '#4299e1', fontSize: '14px', fontWeight: '600' }}>Book call →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to get started?</h2>
            <p>Set up your first event in under 15 minutes</p>
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
