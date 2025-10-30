'use client';

import { useEffect } from 'react';
import Image from 'next/image';

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
            <div className="logo">Momentum</div>
            <ul className="nav-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#scores">FSS Score</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
            <a href="#" className="cta-button">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Measure event success<br />with total confidence</h1>
            <p className="hero-subtitle">MQL, meeting, and pipeline data from Salesforce with real feedback from your attendees and sales partners</p>
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

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">Go beyond vanity metrics</h2>
          <p className="section-subtitle">Marketing teams using Momentum prove real business value, not just MQL counts</p>
        </div>
      </section>

      {/* FSS Score Section */}
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
                    <span className="metric-name">Data Score</span>
                    <span className="metric-value">88</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-name">Sales Partner Feedback</span>
                    <span className="metric-value">82</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-name">Attendee Experience</span>
                    <span className="metric-value">90</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-name">Field Team Score</span>
                    <span className="metric-value">80</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="fss-info animate-on-scroll">
              <h3>Beyond the numbers</h3>
              <p>Your leadership wants to know if events are worth the investment. Sales wants quality leads they can close. Prospects want valuable experiences. The FSS shows you're delivering on all three.</p>

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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section" style={{ padding: '120px 0' }}>
        <div className="container">
          <h2 className="section-title">Stop defending arbitrary MQL targets</h2>
          <p className="section-subtitle">One metric that tells you if your event created real value for prospects, customers, and your business</p>

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

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <h2 className="section-title">Understand which events truly deliver</h2>
          <p className="section-subtitle">Stop guessing which campaigns create real value. Momentum shows you which events resonate with customers, align with sales, and drive actual pipeline.</p>

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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
              </div>
              <h3 className="feature-title">Multi-Perspective Feedback</h3>
              <p className="feature-description">Surveys from attendees, sales partners, and your field team. Understand not just how many leads, but whether they're quality leads your sales team actually wants.</p>
            </div>

            <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              </div>
              <h3 className="feature-title">Complete Success Picture</h3>
              <p className="feature-description">An event with 50 MQLs and 90% sales satisfaction beats one with 200 MQLs and frustrated reps. See quality and quantity together.</p>
            </div>

            <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                </svg>
              </div>
              <h3 className="feature-title">Campaign Object Sync</h3>
              <p className="feature-description">Data syncs directly to Salesforce Campaign objects. Build executive dashboards showing real ROI, not vanity metrics.</p>
            </div>

            <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 className="feature-title">Customer Value Insights</h3>
              <p className="feature-description">See which events prospects and customers actually find valuable. High attendee satisfaction scores predict better conversion and retention.</p>
            </div>

            <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.5s' }}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <h3 className="feature-title">Continuous Improvement</h3>
              <p className="feature-description">Compare events over time. Learn what works, double down on high-performing formats, and stop wasting budget on events that don't deliver.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Stop defending MQL counts.<br />Start proving real value.</h2>
            <p>Show leadership which events drive pipeline. Show sales you're sending quality. Show yourself what's actually working.</p>
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
                <li><a href="#">Features</a></li>
                <li><a href="#">Integrations</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Documentation</a></li>
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
