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
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') as string);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
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
              <li><a href="#quality">Quality</a></li>
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
            <h1>Ship quality code<br />with AI confidence</h1>
            <p className="hero-subtitle">Momentum gives you real-time quality metrics and test coverage for every AI-generated code change</p>
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
          <h2 className="section-title">Trusted by forward-thinking teams</h2>
          <div className="stats-grid">
            <div className="stat-card animate-on-scroll">
              <div className="stat-number">95%</div>
              <div className="stat-label">Average FSS Score</div>
            </div>
            <div className="stat-card animate-on-scroll" style={{ animationDelay: '0.1s' }}>
              <div className="stat-number">10M+</div>
              <div className="stat-label">Code Changes Analyzed</div>
            </div>
            <div className="stat-card animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="stat-number">60%</div>
              <div className="stat-label">Faster PR Reviews</div>
            </div>
            <div className="stat-card animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime Reliability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <h2 className="section-title">Everything you need to ship with confidence</h2>
          <p className="section-subtitle">Comprehensive quality metrics and insights for every line of AI-generated code</p>

          <div className="features-grid">
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Real-time Analysis</h3>
              <p className="feature-description">Get instant feedback on code quality, test coverage, and potential issues as you code. No waiting, no delays.</p>
            </div>

            <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.1s' }}>
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">FSS Quality Score</h3>
              <p className="feature-description">Our proprietary Function Signature Similarity score gives you a single metric to understand code quality at a glance.</p>
            </div>

            <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Security First</h3>
              <p className="feature-description">Automated security scanning catches vulnerabilities before they make it to production. Sleep better at night.</p>
            </div>

            <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <div className="feature-icon">🧪</div>
              <h3 className="feature-title">Test Coverage</h3>
              <p className="feature-description">Ensure every function has proper test coverage. Momentum shows you exactly what's tested and what needs attention.</p>
            </div>

            <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Visual Insights</h3>
              <p className="feature-description">Beautiful dashboards and visualizations make it easy to understand code quality across your entire project.</p>
            </div>

            <div className="feature-card animate-on-scroll" style={{ animationDelay: '0.5s' }}>
              <div className="feature-icon">🔄</div>
              <h3 className="feature-title">CI/CD Integration</h3>
              <p className="feature-description">Seamlessly integrates with your existing workflow. Works with GitHub, GitLab, Jenkins, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FSS Score Section */}
      <section id="quality" className="fss-section">
        <div className="container">
          <h2 className="section-title">The FSS Score: Your quality compass</h2>
          <p className="section-subtitle">A single, powerful metric that tells you everything you need to know about your code quality</p>

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
                <div className="score-label">Average Project Score</div>

                <div className="metrics-list">
                  <div className="metric-item">
                    <span className="metric-name">Test Coverage</span>
                    <span className="metric-value">92%</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-name">Security Score</span>
                    <span className="metric-value">98</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-name">Code Complexity</span>
                    <span className="metric-value">Low</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-name">Documentation</span>
                    <span className="metric-value">88%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="fss-info animate-on-scroll">
              <h3>Quality you can measure, trust you can build</h3>
              <p>The FSS (Function Signature Similarity) score analyzes your code across multiple dimensions to give you a comprehensive quality metric.</p>

              <div className="quality-indicators">
                <div className="indicator">
                  <div className="indicator-icon">✓</div>
                  <div className="indicator-content">
                    <h4>Comprehensive Analysis</h4>
                    <p>Examines function signatures, test coverage, documentation quality, and code patterns to generate your score.</p>
                  </div>
                </div>

                <div className="indicator">
                  <div className="indicator-icon">⚙️</div>
                  <div className="indicator-content">
                    <h4>Actionable Insights</h4>
                    <p>Don't just see a number - get specific recommendations on how to improve your code quality.</p>
                  </div>
                </div>

                <div className="indicator">
                  <div className="indicator-icon">📈</div>
                  <div className="indicator-content">
                    <h4>Track Progress</h4>
                    <p>Watch your score improve over time as your codebase matures and quality practices take hold.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to ship with confidence?</h2>
            <p>Join thousands of developers who trust Momentum for their AI-generated code</p>
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
              <p className="footer-description">Ship quality code with AI confidence. Real-time quality metrics and test coverage for every code change.</p>
            </div>

            <div className="footer-section">
              <h4>Product</h4>
              <ul className="footer-links">
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">API</a></li>
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
              <h4>Legal</h4>
              <ul className="footer-links">
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div>&copy; 2025 Momentum. All rights reserved.</div>
            <div className="social-links">
              <a href="#" className="social-link">𝕏</a>
              <a href="#" className="social-link">in</a>
              <a href="#" className="social-link">GH</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
