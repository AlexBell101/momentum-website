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
            <a href="https://app.eventkarma.ai" className="nav-cta">
              Start free
            </a>
          </div>
        </div>
      </header>

      <main className="bg-[#0f0a1a] text-slate-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.2),_rgba(168,85,247,0.1)_40%,_transparent_70%)]"></div>
          <div className="relative mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight ek-gradient-text mb-6">
                From registration to performance insight.
              </h1>

              <p className="text-lg text-purple-100 mb-4 max-w-xl">
                Take your targets and goals, mix in real time feedback from your attendees. Pipeline driving events: served.
              </p>

              {/* Karma Platter Illustration */}
              <div className="my-6">
                <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="line-drawing">
                  {/* Magical wisps rising */}
                  <path d="M80 45 Q85 35, 78 25 Q82 15, 75 5" stroke="url(#heroGrad)" strokeWidth="1.5" fill="none" className="animate-wisp"/>
                  <path d="M100 40 Q105 28, 98 18 Q103 8, 100 0" stroke="url(#heroGrad)" strokeWidth="1.5" fill="none" className="animate-wisp-delayed"/>
                  <path d="M120 45 Q115 35, 122 25 Q118 15, 125 5" stroke="url(#heroGrad)" strokeWidth="1.5" fill="none" className="animate-wisp-delayed-2"/>

                  {/* Sparkle stars */}
                  <g className="animate-sparkle">
                    <path d="M90 30 l0 -5 M90 30 l0 5 M90 30 l-4 0 M90 30 l4 0" stroke="#EC4899" strokeWidth="1.5"/>
                  </g>
                  <g className="animate-sparkle-delayed">
                    <path d="M110 25 l0 -4 M110 25 l0 4 M110 25 l-4 0 M110 25 l4 0" stroke="#A855F7" strokeWidth="1"/>
                  </g>

                  {/* Cloche - lifted and tilted */}
                  <g className="animate-bob" style={{transformOrigin: '100px 60px'}}>
                    <g transform="translate(15, -5) rotate(-12, 85, 60)">
                      <path d="M45 75 Q45 45, 85 45 Q125 45, 125 75" stroke="url(#heroGrad)" strokeWidth="2" fill="none"/>
                      <circle cx="85" cy="42" r="5" stroke="url(#heroGrad)" strokeWidth="2" fill="none"/>
                      <circle cx="85" cy="42" r="2" fill="#A855F7"/>
                      <ellipse cx="85" cy="75" rx="40" ry="8" stroke="url(#heroGrad)" strokeWidth="2" fill="none"/>
                    </g>
                  </g>

                  {/* Plate */}
                  <ellipse cx="100" cy="100" rx="60" ry="12" stroke="url(#heroGrad)" strokeWidth="2" fill="none"/>

                  {/* Data bar graph on plate */}
                  <g opacity="0.9">
                    <rect x="70" y="90" width="6" height="8" rx="1" fill="#8B5CF6"/>
                    <rect x="80" y="86" width="6" height="12" rx="1" fill="#A855F7"/>
                    <rect x="90" y="82" width="6" height="16" rx="1" fill="#EC4899"/>
                    <rect x="100" y="85" width="6" height="13" rx="1" fill="#A855F7"/>
                    <rect x="110" y="88" width="6" height="10" rx="1" fill="#8B5CF6"/>
                    <rect x="120" y="91" width="6" height="7" rx="1" fill="#EC4899" opacity="0.8"/>
                  </g>

                  <defs>
                    <linearGradient id="heroGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6"/>
                      <stop offset="50%" stopColor="#A855F7"/>
                      <stop offset="100%" stopColor="#EC4899"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href="#book-demo"
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
                  See a live event pass
                </Link>
                <Link
                  href="/pricing"
                  onClick={() => trackEvent('ek_cta_pricing_click')}
                  className="text-sm px-5 py-3 rounded-lg font-medium inline-block text-purple-200 hover:text-white"
                >
                  Pricing &rarr;
                </Link>
              </div>
              <p className="text-xs text-purple-300/80">
                Built for B2B event teams who seek enlightenment.
              </p>
            </div>

            {/* Demo Video */}
            <div className="bg-[#1a0d2e]/60 border border-purple-500/20 rounded-2xl overflow-hidden ek-glow">
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
                <source src="/momentumvid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Transformation Message */}
        <section className="mx-auto max-w-4xl px-4 py-16 text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/30 px-4 py-1.5 text-sm text-purple-200 mb-6">
            The transformation
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
            Stop chasing spreadsheets.<br />
            <span className="ek-gradient-text">Start knowing what works.</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Event Karma captures every interaction—from the first registration to the final follow-up—and connects it all to Salesforce. No manual syncs. No guessing.
          </p>
        </section>

        {/* How It Works - Visual Flow */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-3">The complete event lifecycle</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Six steps from invite to insight. Each one connected, measured, and ready for Salesforce.
            </p>
          </div>

          <div className="grid md:grid-cols-6 gap-4 mb-12">
            {/* Step 1: Invite */}
            <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-xl p-4 text-center hover:border-purple-500/40 transition-colors">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/20 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs text-purple-400 font-medium mb-1">1</p>
              <h3 className="text-sm font-semibold mb-1">Invite</h3>
              <p className="text-xs text-slate-300">Send personalized passes via email</p>
            </div>

            {/* Step 2: Register */}
            <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-xl p-4 text-center hover:border-purple-500/40 transition-colors">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/20 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs text-purple-400 font-medium mb-1">2</p>
              <h3 className="text-sm font-semibold mb-1">Register</h3>
              <p className="text-xs text-slate-300">Capture signups, sync to CRM</p>
            </div>

            {/* Step 3: Check In + Capture */}
            <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-xl p-4 text-center hover:border-purple-500/40 transition-colors">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/20 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <p className="text-xs text-purple-400 font-medium mb-1">3</p>
              <h3 className="text-sm font-semibold mb-1">Scan + Ask</h3>
              <p className="text-xs text-slate-300">Instant intent capture on entry</p>
            </div>

            {/* Step 4: Rate */}
            <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-xl p-4 text-center hover:border-purple-500/40 transition-colors">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/20 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <p className="text-xs text-purple-400 font-medium mb-1">4</p>
              <h3 className="text-sm font-semibold mb-1">Rate</h3>
              <p className="text-xs text-slate-300">Exit feedback in 5 seconds</p>
            </div>

            {/* Step 5: Publish */}
            <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-xl p-4 text-center hover:border-purple-500/40 transition-colors">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/20 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
              <p className="text-xs text-purple-400 font-medium mb-1">5</p>
              <h3 className="text-sm font-semibold mb-1">Publish</h3>
              <p className="text-xs text-slate-300">Push to Salesforce when ready</p>
            </div>

            {/* Step 6: Learn */}
            <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-xl p-4 text-center hover:border-purple-500/40 transition-colors">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/20 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p className="text-xs text-purple-400 font-medium mb-1">6</p>
              <h3 className="text-sm font-semibold mb-1">Learn</h3>
              <p className="text-xs text-slate-300">AI insights, repeat winners</p>
            </div>
          </div>
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
              <p className="text-slate-300 text-sm mb-4">
                Every touchpoint flows to Salesforce. Campaign Members update automatically. No spreadsheets, no imports, no gaps.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                  Native Salesforce integration
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                  Real-time Campaign Member updates
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                  Full audit trail
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
              <p className="text-slate-300 text-sm mb-4">
                You decide when data goes live. Review attendees, validate emails, and publish when you&apos;re ready—not before.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
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
              <p className="text-slate-300 text-sm mb-4">
                AI analyzes every event and tells you what to repeat, resize, or skip. No more guessing which events drive pipeline.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                  Event success scoring
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                  AI-powered recommendations
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                  Pipeline attribution
                </li>
              </ul>
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

        {/* AI Insights */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Know what to run next.</h2>
              <p className="text-slate-300 mb-6">
                Event Karma doesn&apos;t just collect data—it tells you what to do with it. AI analyzes attendance, engagement, and outcomes to recommend your next move.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex-shrink-0"></span>
                  See which event formats generate pipeline, not just attendance
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex-shrink-0"></span>
                  Spot partner events worth repeating and co-funding
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex-shrink-0"></span>
                  Compare cities, audiences, and hosting teams
                </li>
              </ul>
            </div>
            <div className="bg-[#1a0d2e]/60 border border-purple-500/20 rounded-2xl p-6">
              <p className="text-sm font-medium mb-3 text-purple-200">AI Recommendation</p>
              <p className="text-sm text-slate-300 mb-4">
                Austin events scored higher because sales follow-up was 32% faster and partner target accounts were present.
              </p>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div className="bg-[#0f0a1a] rounded-lg p-3 text-center border border-emerald-500/20">
                  <p className="text-2xl font-semibold text-emerald-400">88</p>
                  <p className="text-xs text-emerald-300 mt-1">Repeat</p>
                </div>
                <div className="bg-[#0f0a1a] rounded-lg p-3 text-center border border-amber-500/20">
                  <p className="text-2xl font-semibold text-amber-400">62</p>
                  <p className="text-xs text-amber-300 mt-1">Resize</p>
                </div>
                <div className="bg-[#0f0a1a] rounded-lg p-3 text-center border border-rose-500/20">
                  <p className="text-2xl font-semibold text-rose-400">34</p>
                  <p className="text-xs text-rose-300 mt-1">Skip</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section id="pricing" className="mx-auto max-w-6xl px-4 py-16">
          <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Simple, transparent pricing</h2>
            <div className="mb-6">
              <p className="text-4xl font-bold mb-2">
                <span className="ek-gradient-text">$9,999</span><span className="text-slate-50">/yr</span>
                <span className="text-lg font-normal text-slate-300 ml-2">or $999/mo</span>
              </p>
              <p className="text-slate-300">
                Unlimited events. Unlimited check-ins. Unlimited users.
              </p>
            </div>
            <p className="text-sm text-purple-300 mb-6">
              Founding customers: $7,500 for year one.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#book-demo"
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
            Connect to the tools your team already uses. Fast to set up, predictable to maintain.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-[#1a0d2e]/60 border border-purple-500/20 text-sm">Salesforce</span>
            <span className="px-4 py-2 rounded-full bg-[#1a0d2e]/60 border border-purple-500/20 text-sm">Marketo</span>
            <span className="px-4 py-2 rounded-full bg-[#1a0d2e]/60 border border-purple-500/20 text-sm">HubSpot</span>
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
                href="https://app.eventkarma.ai"
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
              <Link href="/pricing" className="hover:text-white">Pricing</Link>
              <a href="https://docs.eventkarma.ai" className="hover:text-white">Docs</a>
              <Link href="/trust" className="hover:text-white">Trust</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
            </nav>
          </div>
          <div className="text-center pt-6 border-t border-purple-500/10">
            <p className="text-xs">Event Karma is a Data Karma product.</p>
            <p className="text-xs mt-2">© 2025 Data Karma. Calm, clear data & event enlightenment.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
