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
      `}</style>

      {/* Navigation */}
      <header>
        <div>
          <Link href="/" className="logo-container">
            <img src="/datakarma-ai-logo-white.svg" alt="Data Karma" className="logo-icon" />
          </Link>
          <nav>
            <Link href="/eventkarma">Event Karma</Link>
            <Link href="/eventkarma/pricing">Pricing</Link>
            <a href="https://docs.event.datakarma.ai">Docs</a>
            <Link href="/trust">Trust</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="nav-actions">
            <a href="https://event.datakarma.ai" className="nav-cta">
              Start free
            </a>
          </div>
        </div>
      </header>

      <main className="bg-slate-950 text-slate-50">
        {/* Hero Section - B1 */}
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),_transparent_55%)]"></div>
          <div className="relative mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-3">
                Event Karma
              </h1>
              <p className="text-xl md:text-2xl text-violet-300 mb-6">
                The Event GTM OS
              </p>
              <p className="text-lg text-slate-200 mb-4 max-w-xl">
                From invite to impact.
              </p>
              <p className="text-slate-300/80 mb-6 max-w-xl">
                UPL passes, QR check-in, Salesforce updates, notes & surveys, and AI insights—so you know what to repeat, resize, or skip.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href="#book-demo"
                  onClick={() => trackEvent('ek_cta_demo_click')}
                  className="bg-violet-500 hover:bg-violet-400 text-sm px-5 py-2.5 rounded-md font-medium inline-block"
                >
                  Book a demo
                </a>
                <Link
                  href="/pass-demo?event=ek-demo&e=alex%40example.com"
                  onClick={() => trackEvent('ek_cta_pass_click')}
                  className="bg-slate-800 hover:bg-slate-700 text-sm px-5 py-2.5 rounded-md font-medium inline-block border border-slate-700"
                >
                  See a live event pass
                </Link>
                <Link
                  href="/eventkarma/pricing"
                  onClick={() => trackEvent('ek_cta_pricing_click')}
                  className="text-sm px-5 py-2.5 rounded-md font-medium inline-block text-slate-300 hover:text-white"
                >
                  Pricing &rarr;
                </Link>
              </div>
              <p className="text-xs text-slate-500">
                Built for B2B event teams at SaaS, cybersecurity, and data companies.
              </p>
            </div>

            {/* Demo Video */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
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

        {/* From Invite to Impact Spine - B2 */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/30 px-3 py-1 text-xs text-violet-100 mb-4">
              FROM INVITE TO IMPACT
            </p>
            <h2 className="text-3xl font-semibold mb-3">The complete event lifecycle, connected</h2>
            <p className="text-slate-300/80 max-w-2xl mx-auto">
              Six steps from registration to AI recommendations. No spreadsheets, no manual syncs.
            </p>
          </div>

          <div className="grid md:grid-cols-6 gap-4 mb-12">
            {/* Step 1: Registration */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 text-center">
              <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs text-violet-400 font-medium mb-1">1</p>
              <h3 className="text-sm font-semibold mb-1">Registration</h3>
              <p className="text-xs text-slate-400">Send Universal Pass Links from Marketo/HubSpot.</p>
            </div>

            {/* Step 2: Event Pass */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <p className="text-xs text-emerald-400 font-medium mb-1">2</p>
              <h3 className="text-sm font-semibold mb-1">Event Pass</h3>
              <p className="text-xs text-slate-400">Renders a short-lived QR—no PII in code.</p>
            </div>

            {/* Step 3: QR Check-in */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 text-center">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs text-blue-400 font-medium mb-1">3</p>
              <h3 className="text-sm font-semibold mb-1">QR Check-in</h3>
              <p className="text-xs text-slate-400">PWA scanner, offline-tolerant, kiosk-friendly.</p>
            </div>

            {/* Step 4: Publish Gate */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-xs text-amber-400 font-medium mb-1">4</p>
              <h3 className="text-sm font-semibold mb-1">Publish Gate</h3>
              <p className="text-xs text-slate-400">Local fields first; you decide when to publish.</p>
            </div>

            {/* Step 5: Notes & Surveys */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 text-center">
              <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-rose-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <p className="text-xs text-rose-400 font-medium mb-1">5</p>
              <h3 className="text-sm font-semibold mb-1">Notes & Surveys</h3>
              <p className="text-xs text-slate-400">Pulse questions + rep notes stitched to CM.</p>
            </div>

            {/* Step 6: AI Insights */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 text-center">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p className="text-xs text-cyan-400 font-medium mb-1">6</p>
              <h3 className="text-sm font-semibold mb-1">AI Insights</h3>
              <p className="text-xs text-slate-400">Forecasts, momentum score, next-best actions.</p>
            </div>
          </div>
        </section>

        {/* Ops & Trust Rows - B3 */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Salesforce-first */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Salesforce-first</h3>
              </div>
              <p className="text-slate-300/80 text-sm mb-4">
                CM status updates, timestamp stamps, consent fields; identity resolution and audit logs.
              </p>
              <ul className="space-y-2 text-sm text-slate-200/80">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                  Update Campaign Members directly
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                  Create new leads for walk-ins
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                  Full audit trail
                </li>
              </ul>
            </div>

            {/* Control */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Control</h3>
              </div>
              <p className="text-slate-300/80 text-sm mb-4">
                Publish Gate prevents premature MQLs. You choose when follow-ups trigger.
              </p>
              <ul className="space-y-2 text-sm text-slate-200/80">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                  Local fields until you&apos;re ready
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                  Review before publishing
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                  No accidental automation triggers
                </li>
              </ul>
            </div>

            {/* Privacy */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Privacy</h3>
              </div>
              <p className="text-slate-300/80 text-sm mb-4">
                No PII in QR codes. HTTPS everywhere. GDPR-aware consent for onsite lookups.
              </p>
              <ul className="space-y-2 text-sm text-slate-200/80">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                  Short-lived tokens only
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                  Referrer policy enforced
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                  SOC 2 compliant infrastructure
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Results Row - B4 */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="bg-gradient-to-r from-violet-500/10 to-blue-500/10 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Results teams are seeing</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-violet-300 mb-2">10–20 hrs</p>
                <p className="text-slate-300/80">Saved per month on reporting</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-emerald-300 mb-2">10–25%</p>
                <p className="text-slate-300/80">Lift in show rate with UPL + reminders</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-300 mb-2">Faster</p>
                <p className="text-slate-300/80">Opp creation from cleaner follow-ups</p>
              </div>
            </div>
          </div>
        </section>

        {/* Four Stakeholders */}
        <section id="stakeholders" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold mb-4">One event. Four reports. Zero chasing.</h2>
          <p className="text-slate-300/80 mb-8 max-w-3xl">
            Sales, attendees, marketing, and partners all see the event differently. Event Karma centralizes their feedback and turns it into a single event score.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-5 flex flex-col gap-3">
              <span className="text-xs px-2 py-1 rounded-full bg-slate-950/50 text-slate-200/70 w-fit">Auto-sent to AE/SE</span>
              <h3 className="font-medium">Sales</h3>
              <p className="text-sm text-slate-300/80">Were the leads ICP? Did the event help active opps at this account?</p>
            </div>
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-5 flex flex-col gap-3">
              <span className="text-xs px-2 py-1 rounded-full bg-slate-950/50 text-slate-200/70 w-fit">Branded survey</span>
              <h3 className="font-medium">Attendees</h3>
              <p className="text-sm text-slate-300/80">Experience, topic interest, who else to invite next time.</p>
            </div>
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-5 flex flex-col gap-3">
              <span className="text-xs px-2 py-1 rounded-full bg-slate-950/50 text-slate-200/70 w-fit">Ops-friendly</span>
              <h3 className="font-medium">Marketing</h3>
              <p className="text-sm text-slate-300/80">Promo, list quality, campaign member updates — no more manual cleanup.</p>
            </div>
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-5 flex flex-col gap-3">
              <span className="text-xs px-2 py-1 rounded-full bg-slate-950/50 text-slate-200/70 w-fit">Predicts renewals</span>
              <h3 className="font-medium">Partners</h3>
              <p className="text-sm text-slate-300/80">Was it worth the co-investment or sponsorship? Should we co-fund again?</p>
            </div>
          </div>
        </section>

        {/* AI / Decisions */}
        <section id="how" className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">AI that tells you what to run next.</h2>
              <p className="text-slate-300/80 mb-4">
                Event Karma analyzes stakeholder feedback across location, audience, and partner alignment to recommend what to scale and what to adjust.
              </p>
              <ul className="space-y-3 text-sm text-slate-200/80">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                  See which event formats generate pipeline, not just attendance.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                  Spot partner events worth repeating and co-funding.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                  Compare cities, audiences, and hosting teams.
                </li>
              </ul>
            </div>
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-5">
              <p className="text-sm font-medium mb-3 text-slate-50">AI Insight: Exec Card</p>
              <p className="text-sm text-slate-200/80 mb-3">
                Austin events scored higher because sales follow-up was 32% faster and partner target accounts were present. Recommendation: Repeat in Q4 roadshow.
              </p>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div className="bg-slate-950/30 rounded-lg p-3 text-center">
                  <p className="text-2xl font-semibold text-emerald-300">88</p>
                  <p className="text-xs text-emerald-200 mt-1">Repeat</p>
                </div>
                <div className="bg-slate-950/30 rounded-lg p-3 text-center">
                  <p className="text-2xl font-semibold text-amber-300">62</p>
                  <p className="text-xs text-amber-200 mt-1">Resize</p>
                </div>
                <div className="bg-slate-950/30 rounded-lg p-3 text-center">
                  <p className="text-2xl font-semibold text-rose-300">34</p>
                  <p className="text-xs text-rose-200 mt-1">Skip</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Teaser - B5 */}
        <section id="pricing" className="mx-auto max-w-6xl px-4 py-16">
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Simple pricing</h2>
            <div className="mb-6">
              <p className="text-4xl font-bold text-slate-50 mb-2">
                <span className="text-violet-300">$9,999</span>/yr
                <span className="text-lg font-normal text-slate-400 ml-2">or $999/mo</span>
              </p>
              <p className="text-slate-300/80">
                Unlimited events, unlimited check-ins, unlimited users.
              </p>
            </div>
            <p className="text-sm text-violet-300 mb-6">
              Founding customers: $7,500 for year one.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#book-demo"
                onClick={() => trackEvent('ek_cta_demo_click')}
                className="bg-violet-500 hover:bg-violet-400 text-sm px-6 py-2.5 rounded-md font-medium inline-block"
              >
                Book a demo
              </a>
              <Link
                href="/eventkarma/pricing"
                className="text-sm px-6 py-2.5 rounded-md font-medium inline-block text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600"
              >
                See full pricing details
              </Link>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section id="integrations" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold mb-4">Works with your event and GTM stack.</h2>
          <p className="text-slate-300/80 mb-6 max-w-3xl">
            Fast to connect, predictable to maintain. Export to where your sales and ops teams already live.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-sm">Salesforce</span>
            <span className="px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-sm">Marketo</span>
            <span className="px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-sm">HubSpot</span>
            <span className="px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-sm">Cvent / Splash</span>
            <span className="px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-sm">Slack</span>
            <span className="px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-sm">Sheets / CSV</span>
          </div>
        </section>

        {/* CTA Strip - B6 */}
        <section id="book-demo" className="mx-auto max-w-6xl px-4 py-16">
          <div className="bg-gradient-to-r from-violet-600/20 to-blue-600/20 border border-violet-500/30 rounded-2xl p-8 flex flex-col md:flex-row justify-between gap-6 items-center">
            <div>
              <h2 className="text-xl font-semibold mb-2">Ready to see what events actually drive pipeline?</h2>
              <p className="text-slate-300/80">
                We&apos;ll walk you through UPL passes, QR check-in, the Publish Gate, and how we export to Salesforce.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0 items-center flex-wrap">
              <a
                href="https://event.datakarma.ai"
                onClick={() => trackEvent('ek_cta_demo_click')}
                className="bg-violet-500 hover:bg-violet-400 text-sm px-5 py-2.5 rounded-md font-medium inline-block"
              >
                Book a demo
              </a>
              <Link
                href="/pass-demo?event=ek-demo&e=alex%40example.com"
                onClick={() => trackEvent('ek_cta_pass_click')}
                className="bg-slate-800 hover:bg-slate-700 text-sm px-5 py-2.5 rounded-md font-medium inline-block border border-slate-700"
              >
                See a live pass
              </Link>
              <a
                href="https://event.datakarma.ai"
                className="text-sm text-slate-100/80 hover:text-white whitespace-nowrap"
              >
                Start free &rarr;
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900 text-sm text-slate-500">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <img src="/datakarma-ai-logo-white.svg" alt="Data Karma" className="logo-icon" />
            </div>
            <nav className="flex flex-wrap gap-6 text-xs">
              <Link href="/eventkarma" className="hover:text-white">Event Karma</Link>
              <Link href="/eventkarma/pricing" className="hover:text-white">Pricing</Link>
              <a href="https://docs.event.datakarma.ai" className="hover:text-white">Docs</a>
              <Link href="/trust" className="hover:text-white">Trust</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
            </nav>
          </div>
          <div className="text-center pt-6 border-t border-slate-900">
            <p className="text-xs">Event Karma is a Data Karma product.</p>
            <p className="text-xs mt-2">© 2025 Data Karma. Built for event marketing teams.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
