'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

// Track GA event
function trackEvent(eventName: string) {
  if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', eventName);
  }
}

export default function EventKarma() {
  const scrollContainerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPos = 0;
    const scrollSpeed = 0.25;
    const itemHeight = 68;
    const totalItems = 8;
    const totalHeight = itemHeight * totalItems;
    let animationId: number | null = null;

    const scroll = () => {
      scrollPos += scrollSpeed;
      if (scrollPos >= totalHeight) {
        scrollPos = 0;
        container.scrollTop = 0;
      } else {
        container.scrollTop = scrollPos;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };
    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };
    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('touchstart', handleTouchStart, { passive: false });

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return (
    <>
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .no-pointer-events {
          pointer-events: none;
          user-select: none;
        }
        .ek-gradient-bg {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(168, 85, 247, 0.12) 50%, rgba(236, 72, 153, 0.1) 100%);
        }
        .ek-gradient-text {
          background: linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #EC4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ek-gradient-border {
          border-image: linear-gradient(135deg, #8B5CF6, #A855F7, #EC4899) 1;
        }
        .ek-glow {
          box-shadow: 0 0 40px rgba(168, 85, 247, 0.3);
        }
        .ek-btn-gradient {
          background: linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #EC4899 100%);
        }
        .ek-btn-gradient:hover {
          background: linear-gradient(135deg, #9D6FFA 0%, #B96AF9 50%, #F084A8 100%);
        }

        /* Karma Platter Animations */
        @keyframes gentle-bob {
          0%, 100% { transform: translateY(0) rotate(-15deg); }
          50% { transform: translateY(-3px) rotate(-15deg); }
        }
        @keyframes wisp {
          0% { transform: translateY(0) translateX(0); opacity: 0.6; }
          50% { transform: translateY(-10px) translateX(3px); opacity: 0.3; }
          100% { transform: translateY(-20px) translateX(-2px); opacity: 0; }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        .animate-bob { animation: gentle-bob 4s ease-in-out infinite; }
        .animate-wisp { animation: wisp 3s ease-out infinite; }
        .animate-wisp-delayed { animation: wisp 3s ease-out infinite 1s; }
        .animate-wisp-delayed-2 { animation: wisp 3s ease-out infinite 2s; }
        .animate-sparkle { animation: sparkle 2s ease-in-out infinite; }
        .animate-sparkle-delayed { animation: sparkle 2s ease-in-out infinite 0.7s; }

        .line-drawing {
          stroke-linecap: round;
          stroke-linejoin: round;
        }
      `}</style>

      {/* Navigation */}
      <header>
        <div>
          <Link href="/" className="logo-container">
            <div className="flex items-center gap-3">
              <img src="/eventkarma-logo.svg" alt="Event Karma" className="w-10 h-10" />
              <span className="text-lg font-semibold text-white">Event Karma</span>
              {/* Karmic flourish - flowing spiral */}
              <svg className="w-4 h-4 ml-1.5 opacity-70" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3c0 4.97-4.03 9-9 9 4.97 0 9 4.03 9 9 0-4.97 4.03-9 9-9-4.97 0-9-4.03-9-9z"
                  fill="url(#karmaGrad)"
                />
                <defs>
                  <linearGradient id="karmaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </Link>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/pricing">Pricing</Link>
            <a href="https://docs.eventkarma.ai">Docs</a>
            <Link href="/trust">Trust</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="nav-actions">
            <a href="https://app.eventkarma.ai" className="nav-login">
              Log in
            </a>
            <a href="https://app.eventkarma.ai" className="nav-cta">
              Start free
            </a>
          </div>
        </div>
      </header>

      <main className="bg-[#0f0a1a] text-slate-50">
        {/* Hero Section - Success Score Focus */}
        <section className="relative overflow-hidden py-12 md:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.2),_rgba(168,85,247,0.1)_40%,_transparent_70%)]"></div>
          <div className="relative mx-auto max-w-6xl px-4">
            <div className="text-center mb-8">
              {/* Small badge */}
              <p className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/30 px-4 py-1.5 text-sm text-purple-200 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                The metric that matters
              </p>

              {/* Main headline */}
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
                One number that tells you<br />
                <span className="ek-gradient-text">if your event actually worked.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-purple-200 max-w-2xl mx-auto">
                Stop debating ROI in spreadsheets. The Success Score synthesizes attendance, engagement, pipeline influence, and feedback into a single, defensible metric.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-center mb-8">
              {/* Left: Inputs flowing to score */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1a0d2e] border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-white text-sm">Attendance & Show Rate</p>
                    <p className="text-xs text-purple-300">Who registered vs. who actually showed up</p>
                  </div>
                  <div className="text-purple-400 text-sm font-mono">→</div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1a0d2e] border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-white text-sm">Engagement Signals</p>
                    <p className="text-xs text-purple-300">Sessions attended, questions asked, booth visits</p>
                  </div>
                  <div className="text-purple-400 text-sm font-mono">→</div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1a0d2e] border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-white text-sm">Pipeline Influence</p>
                    <p className="text-xs text-purple-300">Opportunities touched, deals accelerated</p>
                  </div>
                  <div className="text-purple-400 text-sm font-mono">→</div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1a0d2e] border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-white text-sm">Attendee Feedback</p>
                    <p className="text-xs text-purple-300">NPS scores, survey responses, sentiment</p>
                  </div>
                  <div className="text-purple-400 text-sm font-mono">→</div>
                </div>
              </div>

              {/* Right: Score visualization */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/30 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-5xl font-bold ek-gradient-text">78</p>
                      <p className="text-sm text-purple-200 mt-1">Success Score</p>
                      <p className="text-xs text-purple-400 mt-1 font-medium">Grade: B+</p>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#1a0d2e] border border-purple-500/30 rounded-lg px-3 py-1.5">
                    <p className="text-xs text-purple-200">Above your 6-event average</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-4 mb-3">
                <a
                  href="https://app.eventkarma.ai"
                  onClick={() => trackEvent('ek_cta_start_click')}
                  className="ek-btn-gradient text-white text-sm px-6 py-3 rounded-lg font-medium inline-block transition-all"
                >
                  Start free
                </a>
                <Link
                  href="/success-score"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur text-sm px-6 py-3 rounded-lg font-medium inline-block border border-purple-500/30"
                >
                  How Success Score works
                </Link>
                <Link
                  href="/pricing"
                  onClick={() => trackEvent('ek_cta_pricing_click')}
                  className="text-sm px-5 py-3 rounded-lg font-medium inline-block text-purple-200 hover:text-white"
                >
                  Pricing &rarr;
                </Link>
              </div>
              <p className="text-xs text-purple-300">
                Built for B2B event teams who demand clarity.
              </p>
            </div>
          </div>
        </section>

        {/* Transformation Message */}
        <section className="mx-auto max-w-4xl px-4 py-16 text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/30 px-4 py-1.5 text-sm text-purple-200 mb-6">
            The transformation
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
            Stop chasing MQLs.<br />
            <span className="ek-gradient-text">Start knowing what works.</span>
          </h2>
          <p className="text-purple-200 max-w-2xl mx-auto text-lg">
            Event Karma captures every interaction—from the first registration to the final follow-up—and connects it all to Salesforce. No manual syncs. No guessing.
          </p>
        </section>

        {/* Value Props */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Connected */}
            <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Connected</h3>
              </div>
              <p className="text-purple-200 text-sm mb-4">
                Every touchpoint flows to <span className="text-white">your CRM</span>. Campaign Members update automatically. <span className="text-white">No spreadsheets</span>, no imports, no gaps.
              </p>
              <ul className="space-y-2 text-sm text-purple-200">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                  Salesforce or HubSpot as your CRM
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                  HubSpot marketing + Salesforce CRM
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                  Real-time sync with full audit trail
                </li>
              </ul>
            </div>

            {/* Controlled */}
            <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Controlled</h3>
              </div>
              <p className="text-purple-200 text-sm mb-4">
                <span className="text-white">You decide</span> when data goes live. Review attendees, validate emails, and <span className="text-white">publish when you&apos;re ready</span>—not before.
              </p>
              <ul className="space-y-2 text-sm text-purple-200">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-pink-400 flex-shrink-0"></span>
                  Publish Gate prevents accidents
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-pink-400 flex-shrink-0"></span>
                  Review before syncing
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-pink-400 flex-shrink-0"></span>
                  No premature automation triggers
                </li>
              </ul>
            </div>

            {/* Clear */}
            <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Clear</h3>
              </div>
              <p className="text-purple-200 text-sm mb-4">
                <span className="text-white">AI analyzes</span> every event and tells you what to repeat, resize, or skip. <span className="text-white">Executive scorecards</span> grade performance A–F so leadership gets clarity instantly.
              </p>
              <ul className="space-y-2 text-sm text-purple-200">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                  Executive scorecards with letter grades
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                  Side-by-side event comparison
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                  Survey analytics &amp; NPS tracking
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works - 4 Steps */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold mb-3">How Event Karma works</h2>
            <p className="text-purple-200 max-w-2xl mx-auto">
              Works alongside Splash, Cvent, HubSpot, or any registration tool. We handle what happens next.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Step 1: Capture */}
            <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-xl p-5 text-center hover:border-purple-500/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold mb-2">Capture</h3>
              <p className="text-sm text-purple-200">Registrations, check-ins, badge scans—all synced to your CRM in real time</p>
            </div>

            {/* Step 2: Survey */}
            <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-xl p-5 text-center hover:border-purple-500/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold mb-2">Survey</h3>
              <p className="text-sm text-purple-200">Entry intent + exit feedback captured in seconds on any device</p>
            </div>

            {/* Step 3: Sync */}
            <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-xl p-5 text-center hover:border-purple-500/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-base font-semibold mb-2">Sync</h3>
              <p className="text-sm text-purple-200">Push to Salesforce or HubSpot when you&apos;re ready—with full control</p>
            </div>

            {/* Step 4: Score */}
            <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-xl p-5 text-center hover:border-purple-500/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold mb-2">Score</h3>
              <p className="text-sm text-purple-200">Success Score + series analytics tell you what&apos;s actually working</p>
            </div>
          </div>
        </section>

        {/* iOS Mobile App */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center mb-10">
            <p className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/30 px-4 py-1.5 text-sm text-purple-200 mb-4">
              Native iOS App
            </p>
            <h2 className="text-2xl font-semibold mb-3">Check in anywhere. Capture everything.</h2>
            <p className="text-purple-200 max-w-2xl mx-auto">
              The Event Karma iOS app puts QR scanning, attendee lookup, and real-time surveys in your pocket. Works offline, syncs instantly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Entry Survey Screenshot */}
            <div className="flex flex-col items-center">
              <div className="bg-[#1a0d2e]/60 border border-purple-500/20 rounded-3xl p-2 overflow-hidden shadow-2xl">
                <img
                  src="/surveyscreenshotios.png"
                  alt="Event Karma iOS app entry survey"
                  className="w-full rounded-2xl"
                />
              </div>
              <p className="text-sm text-purple-300 mt-4">Entry survey</p>
            </div>

            {/* Video in center */}
            <div className="flex flex-col items-center">
              <div className="bg-[#1a0d2e]/60 border border-purple-500/20 rounded-3xl p-2 overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-2xl"
                  style={{ display: 'block' }}
                >
                  <source src="/ios_findandadduserwithnotes.mov" type="video/mp4" />
                </video>
              </div>
              <p className="text-sm text-purple-300 mt-4">Find attendees &amp; add notes</p>
            </div>

            {/* Exit Survey Screenshot */}
            <div className="flex flex-col items-center">
              <div className="bg-[#1a0d2e]/60 border border-purple-500/20 rounded-3xl p-2 overflow-hidden shadow-2xl">
                <img
                  src="/exitsurvey.png"
                  alt="Event Karma iOS app exit survey"
                  className="w-full rounded-2xl"
                />
              </div>
              <p className="text-sm text-purple-300 mt-4">Exit survey</p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="ek-gradient-bg border border-purple-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Results teams are seeing</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold ek-gradient-text mb-2">10–20 hrs</p>
                <p className="text-slate-300">Saved per month on reporting</p>
              </div>
              <div>
                <p className="text-4xl font-bold ek-gradient-text mb-2">10–25%</p>
                <p className="text-slate-300">Higher show rates with digital passes</p>
              </div>
              <div>
                <p className="text-4xl font-bold ek-gradient-text mb-2">Faster</p>
                <p className="text-slate-300">Follow-up from cleaner data</p>
              </div>
            </div>
          </div>
        </section>

        {/* See it in action - Product Demo Video */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-3">See Event Karma in action</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Watch how easy it is to manage events, capture feedback, and sync everything to Salesforce.
            </p>
          </div>
          <div className="bg-[#1a0d2e]/60 border border-purple-500/20 rounded-2xl overflow-hidden ek-glow max-w-4xl mx-auto">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{ display: 'block' }}
              onLoadedMetadata={(e) => {
                const video = e.target as HTMLVideoElement;
                video.playbackRate = 1.25;
              }}
            >
              <source src="/EventKarma-App.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* AI Insights */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Measure what matters—across your entire event series.</h2>
              <p className="text-slate-300 mb-6">
                Group events under parent campaigns for aggregated analytics. One-click AI analysis surfaces categorized insights—performance, ROI, sentiment, attendance—with actionable recommendations and trend forecasting.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex-shrink-0"></span>
                  Campaign series reporting with AI-generated executive summaries
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex-shrink-0"></span>
                  Portfolio KPI dashboards with regional performance charts
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex-shrink-0"></span>
                  Compare up to 5 events side-by-side with radar visualizations
                </li>
              </ul>
            </div>
            <div className="bg-[#1a0d2e]/60 border border-purple-500/20 rounded-2xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ display: 'block' }}
              >
                <source src="/Salesforce-Integration.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section id="pricing" className="mx-auto max-w-6xl px-4 py-16">
          <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Simple, transparent pricing</h2>
            <div className="mb-6">
              <p className="text-4xl font-bold mb-2">
                <span className="ek-gradient-text">$199</span><span className="text-slate-50">/mo</span>
                <span className="text-lg font-normal text-slate-300 ml-2">or $1,999/yr</span>
              </p>
              <p className="text-slate-300">
                Unlimited events. Unlimited check-ins. Unlimited users.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                onClick={() => trackEvent('ek_cta_demo_click')}
                className="ek-btn-gradient text-white text-sm px-6 py-3 rounded-lg font-medium inline-block transition-all"
              >
                Book a demo
              </a>
              <Link
                href="/pricing"
                className="text-sm px-6 py-3 rounded-lg font-medium inline-block text-slate-300 hover:text-white border border-purple-500/30 hover:border-purple-500/50"
              >
                See full pricing details
              </Link>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section id="integrations" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold mb-4">Works with your stack</h2>
          <p className="text-slate-300 mb-6 max-w-3xl">
            Connect Salesforce or HubSpot as your CRM. Use HubSpot as a marketing integration alongside Salesforce too.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-[#1a0d2e]/60 border border-purple-500/20 text-sm">Salesforce</span>
            <span className="px-4 py-2 rounded-full bg-[#1a0d2e]/60 border border-purple-500/20 text-sm">HubSpot</span>
            <span className="px-4 py-2 rounded-full bg-[#1a0d2e]/60 border border-purple-500/20 text-sm">Marketo</span>
            <span className="px-4 py-2 rounded-full bg-[#1a0d2e]/60 border border-purple-500/20 text-sm">Cvent / Splash</span>
            <span className="px-4 py-2 rounded-full bg-[#1a0d2e]/60 border border-purple-500/20 text-sm">Slack</span>
            <span className="px-4 py-2 rounded-full bg-[#1a0d2e]/60 border border-purple-500/20 text-sm">Sheets / CSV</span>
          </div>
        </section>

        {/* CTA Strip */}
        <section id="book-demo" className="mx-auto max-w-6xl px-4 py-16">
          <div className="ek-gradient-bg border border-purple-500/30 rounded-2xl p-8 flex flex-col md:flex-row justify-between gap-6 items-center">
            <div>
              <h2 className="text-xl font-semibold mb-2">Ready for event enlightenment?</h2>
              <p className="text-slate-300">
                See how Event Karma connects every touchpoint and finally answers: which events drive pipeline?
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0 items-center flex-wrap">
              <a
                href="/contact"
                onClick={() => trackEvent('ek_cta_demo_click')}
                className="ek-btn-gradient text-white text-sm px-6 py-3 rounded-lg font-medium inline-block transition-all"
              >
                Book a demo
              </a>
              <Link
                href="/pass-demo?event=ek-demo&e=alex%40example.com"
                onClick={() => trackEvent('ek_cta_pass_click')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur text-sm px-6 py-3 rounded-lg font-medium inline-block border border-purple-500/30"
              >
                See a live pass
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0f0a1a] py-12 border-t border-purple-500/10 text-sm text-slate-500">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <img src="/eventkarma-logo.svg" alt="Event Karma" className="w-8 h-8" />
              <span className="text-slate-300 font-medium">Event Karma</span>
            </div>
            <nav className="flex flex-wrap gap-6 text-xs">
              <Link href="/" className="hover:text-white">Event Karma</Link>
              <Link href="/success-score" className="hover:text-white">Success Score</Link>
              <Link href="/pricing" className="hover:text-white">Pricing</Link>
              <a href="https://docs.eventkarma.ai" className="hover:text-white">Docs</a>
              <Link href="/trust" className="hover:text-white">Trust</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/terms" className="hover:text-white">Terms</Link>
              <Link href="/cookies" className="hover:text-white">Cookies</Link>
            </nav>
          </div>
          <div className="text-center pt-6 border-t border-purple-500/10">
            <p className="text-xs">Event Karma is a Data Karma product.</p>
            <p className="text-xs mt-2">© 2025 Data Karma AI LLC. Calm, clear data & event enlightenment.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
