'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const circleRef = useRef<HTMLDivElement>(null);

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

    // Interactive circle - mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      if (circleRef.current) {
        const rect = circleRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const distance = Math.sqrt(x * x + y * y);

        if (distance < 300) {
          const angle = Math.atan2(y, x);
          const offsetX = Math.cos(angle) * (300 - distance) * 0.1;
          const offsetY = Math.sin(angle) * (300 - distance) * 0.1;
          circleRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        } else {
          circleRef.current.style.transform = 'translate(0, 0)';
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav id="navbar" className="navbar-modern">
        <div className="container">
          <div className="nav-content">
            <Link href="/" className="logo-modern">
              <div className="logo-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M4 12L8 8M4 12L8 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span>Momentum</span>
            </Link>
            <ul className="nav-links-modern">
              <li><a href="#platform">Platform</a></li>
              <li><Link href="/how-it-works">How It Works</Link></li>
              <li><Link href="/integrations">Integrations</Link></li>
              <li><Link href="/docs">Docs</Link></li>
            </ul>
            <a href="https://fss-app-iota.vercel.app/" className="cta-button-modern">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - DRAMATIC */}
      <section className="hero-modern">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content-modern">
              <div className="badge-modern">
                <span className="badge-pulse"></span>
                360° Campaign Intelligence
              </div>

              <h1 className="hero-title-dramatic">
                The Complete
                <br />
                <span className="gradient-text">Feedback Loop</span>
              </h1>

              <p className="hero-subtitle-large">
                The only platform that captures feedback from <strong>Sales, Marketing, Attendees, and Partners</strong>—then uses AI to turn that 360° view into strategic insights.
              </p>

              <div className="hero-cta">
                <a href="https://fss-app-iota.vercel.app/" className="btn-primary-large">
                  Start Free Trial
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="btn-secondary-large">
                  <svg className="btn-icon-play" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Interactive Visual - THE KEY PIECE */}
            <div className="hero-visual-modern" ref={circleRef}>
              <div className="circle-diagram">
                {/* Center Score */}
                <div className="circle-center">
                  <div className="fss-number">85</div>
                  <div className="fss-label">FSS</div>
                  <div className="ai-indicator">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>AI Powered</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="connection-lines" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.2"/>
                      <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.2"/>
                    </linearGradient>
                  </defs>

                  {/* Animated connecting lines */}
                  <circle cx="200" cy="200" r="120" fill="none" stroke="url(#lineGradient1)" strokeWidth="2" strokeDasharray="8 4">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 200 200"
                      to="360 200 200"
                      dur="20s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  <circle cx="200" cy="200" r="140" fill="none" stroke="url(#lineGradient1)" strokeWidth="1" strokeDasharray="4 8" opacity="0.4">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="360 200 200"
                      to="0 200 200"
                      dur="30s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>

                {/* Stakeholder Nodes - Circular Layout */}
                <div className="stakeholder-node node-top">
                  <div className="node-icon marketing-node">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="node-label">Marketing</div>
                  <div className="node-score">88</div>
                </div>

                <div className="stakeholder-node node-right">
                  <div className="node-icon sales-node">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="node-label">Sales</div>
                  <div className="node-score">82</div>
                </div>

                <div className="stakeholder-node node-bottom">
                  <div className="node-icon attendees-node">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="node-label">Attendees</div>
                  <div className="node-score">90</div>
                </div>

                <div className="stakeholder-node node-left">
                  <div className="node-icon partners-node">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="node-label">Partners</div>
                  <div className="node-score">78</div>
                </div>

                {/* Data Flow Particles */}
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
                <div className="particle particle-4"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* Social Proof */}
      <section className="social-proof">
        <div className="container">
          <p className="proof-text">Trusted by marketing teams at</p>
          <div className="company-logos">
            <div className="logo-item">Company A</div>
            <div className="logo-item">Company B</div>
            <div className="logo-item">Company C</div>
            <div className="logo-item">Company D</div>
            <div className="logo-item">Company E</div>
          </div>
        </div>
      </section>

      {/* The Problem - Asymmetric Layout */}
      <section className="problem-section">
        <div className="container">
          <div className="problem-grid">
            <div className="problem-content animate-on-scroll">
              <div className="section-label">The Problem</div>
              <h2 className="section-title-large">
                Most platforms only show<br />
                <span className="text-muted">half the story</span>
              </h2>
              <p className="text-xlarge">
                You hit your MQL targets. Sales complains about lead quality.
                Attendees show up but you don&apos;t know if they found value.
                Partners co-invest but you never ask if it worked for them.
              </p>
              <p className="text-xlarge">
                <strong>You&apos;re flying blind with incomplete data.</strong>
              </p>
            </div>

            <div className="incomplete-visual animate-on-scroll">
              <div className="incomplete-circle">
                <div className="incomplete-segment seg-1"></div>
                <div className="incomplete-segment seg-2"></div>
                <div className="incomplete-segment seg-3 missing"></div>
                <div className="incomplete-segment seg-4 missing"></div>
                <div className="incomplete-label">Incomplete View</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution - Platform Section */}
      <section id="platform" className="platform-section">
        <div className="container-wide">
          <div className="section-header-center animate-on-scroll">
            <div className="section-label">The Momentum Platform</div>
            <h2 className="section-title-xl">
              Complete campaign intelligence<br />
              from <span className="gradient-text">all four perspectives</span>
            </h2>
            <p className="section-subtitle-xl">
              Momentum captures feedback from Sales, Marketing, Attendees, and Partners—
              <br />then uses AI to surface insights you can act on.
            </p>
          </div>

          {/* Interconnected Features - NOT A BORING GRID */}
          <div className="features-interconnected">
            {/* Center Hub */}
            <div className="feature-hub animate-on-scroll">
              <div className="hub-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3>AI-Powered Insights</h3>
              <p>Claude analyzes all four perspectives to surface patterns and predict outcomes</p>
            </div>

            {/* Connected Feature Cards */}
            <div className="feature-card card-top-left animate-on-scroll">
              <div className="feature-number">01</div>
              <div className="feature-card-icon marketing-color">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4>Marketing Execution</h4>
              <p>Track logistics, messaging effectiveness, and operational quality from your team&apos;s perspective</p>
              <div className="feature-link">
                <span>Learn more</span>
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <div className="feature-card card-top-right animate-on-scroll">
              <div className="feature-number">02</div>
              <div className="feature-card-icon sales-color">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4>Sales Reality Check</h4>
              <p>Understand lead quality, ICP fit, and whether events actually help advance deals</p>
              <div className="feature-link">
                <span>Learn more</span>
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <div className="feature-card card-bottom-left animate-on-scroll">
              <div className="feature-number">03</div>
              <div className="feature-card-icon attendees-color">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4>Customer Value Signal</h4>
              <p>High attendee satisfaction predicts conversion and proves ROI to leadership</p>
              <div className="feature-link">
                <span>Learn more</span>
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <div className="feature-card card-bottom-right animate-on-scroll highlight-card">
              <div className="feature-number">04</div>
              <div className="feature-card-icon partners-color">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4>Channel Partnership Health</h4>
              <p>Partners co-invest in events. Their feedback predicts co-marketing and channel revenue</p>
              <div className="feature-link">
                <span>Learn more</span>
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Connection Lines Visual */}
            <svg className="feature-connections" viewBox="0 0 1000 800">
              <defs>
                <linearGradient id="connGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3"/>
                </linearGradient>
              </defs>
              <path d="M 250 200 Q 500 300 750 200" stroke="url(#connGrad)" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
              <path d="M 250 600 Q 500 500 750 600" stroke="url(#connGrad)" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
              <path d="M 250 200 Q 300 400 250 600" stroke="url(#connGrad)" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
              <path d="M 750 200 Q 700 400 750 600" stroke="url(#connGrad)" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
            </svg>
          </div>

          <div className="platform-footer animate-on-scroll">
            <Link href="/how-it-works" className="btn-secondary-xl">
              See how it all connects
              <svg className="btn-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats - Full Width Impact */}
      <section className="stats-modern">
        <div className="container-wide">
          <div className="stats-grid-large">
            <div className="stat-modern animate-on-scroll">
              <div className="stat-number-huge">500+</div>
              <div className="stat-label-modern">Events measured with complete feedback</div>
            </div>
            <div className="stat-modern animate-on-scroll" style={{animationDelay: '0.1s'}}>
              <div className="stat-number-huge">$50M+</div>
              <div className="stat-label-modern">Pipeline tracked across all channels</div>
            </div>
            <div className="stat-modern animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <div className="stat-number-huge">92%</div>
              <div className="stat-label-modern">Teams see improved ROI visibility</div>
            </div>
            <div className="stat-modern animate-on-scroll" style={{animationDelay: '0.3s'}}>
              <div className="stat-number-huge">65%</div>
              <div className="stat-label-modern">Average survey response rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Section - Split Screen */}
      <section className="ai-modern">
        <div className="ai-split">
          <div className="ai-content-side">
            <div className="animate-on-scroll">
              <div className="section-label">Powered by Claude AI</div>
              <h2 className="section-title-large">
                Turn 360° feedback into<br />
                <span className="gradient-text-cyan">strategic insights</span>
              </h2>
              <p className="text-xlarge">
                Momentum doesn&apos;t just collect feedback—it uses AI to analyze patterns across all four stakeholders, predict outcomes, and generate actionable recommendations.
              </p>

              <div className="ai-capabilities">
                <div className="capability-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <div>
                    <strong>Pattern Recognition</strong>
                    <p>&quot;Partners consistently score webinars 15pts lower than field events&quot;</p>
                  </div>
                </div>

                <div className="capability-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <div>
                    <strong>Predictive Analytics</strong>
                    <p>&quot;Events with Partner Score &gt;80 generate 2.3x more channel pipeline&quot;</p>
                  </div>
                </div>

                <div className="capability-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <div>
                    <strong>Natural Language Queries</strong>
                    <p>&quot;Which Q3 events should we replicate in Q4?&quot; Get instant answers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ai-visual-side">
            <div className="ai-dashboard-preview animate-on-scroll">
              <div className="ai-query">
                <div className="query-avatar">You</div>
                <div className="query-text">Why did Austin perform better than Boston for partners?</div>
              </div>
              <div className="ai-response">
                <div className="response-avatar">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="response-text">
                  <p><strong>Austin partners mentioned &quot;ICP alignment&quot; 8x vs Boston.</strong></p>
                  <p>Austin attracted enterprise SaaS (partner sweet spot), Boston skewed SMB.</p>
                  <div className="ai-rec">
                    💡 <strong>Recommendation:</strong> Add enterprise track to Boston 2025 or adjust targeting
                  </div>
                </div>
              </div>
              <div className="insights-preview">
                <div className="insight-pill">Pattern detected across 12 events</div>
                <div className="insight-pill">87% confidence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Full Bleed */}
      <section className="cta-modern">
        <div className="container">
          <div className="cta-content-modern animate-on-scroll">
            <h2 className="cta-title-huge">
              See the complete picture
            </h2>
            <p className="cta-subtitle-large">
              Stop flying blind with incomplete data. Get 360° campaign intelligence from all four stakeholders—powered by AI to show you what actually works.
            </p>
            <div className="cta-actions">
              <a href="https://fss-app-iota.vercel.app/" className="btn-primary-xl">
                Start Free Trial
                <svg className="btn-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="btn-outline-xl">Schedule Demo</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-modern">
        <div className="container">
          <div className="footer-grid-modern">
            <div className="footer-brand-modern">
              <div className="logo-modern">
                <div className="logo-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M4 12L8 8M4 12L8 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <span>Momentum</span>
              </div>
              <p className="footer-tagline">
                The only platform with 360° campaign intelligence.
              </p>
            </div>

            <div className="footer-links-modern">
              <div className="footer-column">
                <h4>Product</h4>
                <ul>
                  <li><a href="#platform">Platform</a></li>
                  <li><Link href="/how-it-works">How It Works</Link></li>
                  <li><Link href="/integrations">Integrations</Link></li>
                  <li><a href="#">Pricing</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Company</h4>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Resources</h4>
                <ul>
                  <li><Link href="/docs">Documentation</Link></li>
                  <li><a href="#">Help Center</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom-modern">
            <p>&copy; 2025 Momentum. All rights reserved.</p>
            <div className="social-links-modern">
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="GitHub">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
