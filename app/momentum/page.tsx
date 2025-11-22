'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function Home() {
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
    const scrollSpeed = 0.25; // pixels per frame - slower, more elegant
    const itemHeight = 68; // approximate height of each item including gap
    const totalItems = 8;
    const totalHeight = itemHeight * totalItems;
    let animationId: number | null = null;

    const scroll = () => {
      scrollPos += scrollSpeed;

      // Reset to beginning when we've scrolled through half the items (since they're duplicated)
      if (scrollPos >= totalHeight) {
        scrollPos = 0;
        container.scrollTop = 0;
      } else {
        container.scrollTop = scrollPos;
      }

      animationId = requestAnimationFrame(scroll);
    };

    // Start the animation
    animationId = requestAnimationFrame(scroll);

    // Prevent ALL mouse interactions from interfering with auto-scroll
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
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
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
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }
      `}</style>

      {/* Navigation */}
      <header>
        <div>
          <Link href="/" className="logo-container">
            <img src="/datakarma-ai-logo-white.svg" alt="Data Karma" className="logo-icon" />
          </Link>
          <nav>
            <Link href="/momentum">Momentum</Link>
            <Link href="/momentum/pricing">Pricing</Link>
            <Link href="/docs/momentum">Docs</Link>
            <Link href="/trust">Trust</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="nav-actions">
            <a href="https://momentum.datakarma.ai" className="nav-cta">
              Start free
            </a>
          </div>
        </div>
      </header>

      <main className="bg-slate-950 text-slate-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),_transparent_55%)]"></div>
          <div className="relative mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-3">
                Momentum
              </h1>
              <p className="text-xl md:text-2xl text-violet-300 mb-6">
                Event Ops for B2B Teams
              </p>
              <p className="text-lg text-slate-200 mb-4 max-w-xl">
                Registration. Check-in. Salesforce. Done.
              </p>
              <p className="text-slate-300/80 mb-6 max-w-xl">
                The full-funnel event operations platform. Handle registration, QR check-in, walk-in capture, and publish to Salesforce—no spreadsheets, no manual syncs.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <a href="https://momentum.datakarma.ai" className="bg-violet-500 hover:bg-violet-400 text-sm px-5 py-2.5 rounded-md font-medium inline-block">
                  Get started
                </a>
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
                  video.playbackRate = 1.25; // Speed up slightly for snappier demo
                }}
              >
                <source src="/momentumvid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Optional: Keep event list below video or remove */}
            <div className="hidden bg-slate-900/40 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-50">Q3 events — AI recommendations</p>
                <span className="text-xs text-slate-400">Updated 3m ago</span>
              </div>
              <ul ref={scrollContainerRef} className="space-y-3 max-h-52 overflow-y-auto pr-2 scrollbar-hide no-pointer-events">
                <li className="flex items-center justify-between bg-slate-950/30 rounded-lg px-3 py-2">
                  <div>
                    <p className="text-sm">Austin Customer Breakfast</p>
                    <p className="text-xs text-slate-400">Score 92 · 28 attendees · 12 MQLs · $340k pipeline · 6 partners</p>
                  </div>
                  <span className="text-xs bg-emerald-500/10 text-emerald-200 px-2 py-1 rounded-md">
                    Run again
                  </span>
                </li>
                <li className="flex items-center justify-between bg-slate-950/30 rounded-lg px-3 py-2">
                  <div>
                    <p className="text-sm">Boston Executive Dinner</p>
                    <p className="text-xs text-slate-400">Score 88 · 18 attendees · 7 MQLs · $180k pipeline · 3 partners</p>
                  </div>
                  <span className="text-xs bg-amber-500/10 text-amber-200 px-2 py-1 rounded-md">
                    Resize
                  </span>
                </li>
                <li className="flex items-center justify-between bg-slate-950/30 rounded-lg px-3 py-2">
                  <div>
                    <p className="text-sm">Partner Webinar</p>
                    <p className="text-xs text-slate-400">Score 74 · 142 attendees · 31 MQLs · $220k pipeline · 8 partners</p>
                  </div>
                  <span className="text-xs bg-rose-500/10 text-rose-200 px-2 py-1 rounded-md">
                    Pause
                  </span>
                </li>
                <li className="flex items-center justify-between bg-slate-950/30 rounded-lg px-3 py-2">
                  <div>
                    <p className="text-sm">NYC Product Launch</p>
                    <p className="text-xs text-slate-400">Score 96 · 85 attendees · 24 MQLs · $520k pipeline · 4 partners</p>
                  </div>
                  <span className="text-xs bg-blue-500/10 text-blue-200 px-2 py-1 rounded-md">
                    Schedule
                  </span>
                </li>
                <li className="flex items-center justify-between bg-slate-950/30 rounded-lg px-3 py-2">
                  <div>
                    <p className="text-sm">SF Sales Kickoff</p>
                    <p className="text-xs text-slate-400">Score 91 · 64 attendees · 18 MQLs · $410k pipeline · 2 partners</p>
                  </div>
                  <span className="text-xs bg-violet-500/10 text-violet-200 px-2 py-1 rounded-md">
                    Expand
                  </span>
                </li>
                <li className="flex items-center justify-between bg-slate-950/30 rounded-lg px-3 py-2">
                  <div>
                    <p className="text-sm">Chicago Industry Conference</p>
                    <p className="text-xs text-slate-400">Score 68 · 287 attendees · 45 MQLs · $380k pipeline · 0 partners</p>
                  </div>
                  <span className="text-xs bg-indigo-500/10 text-indigo-200 px-2 py-1 rounded-md">
                    Optimize
                  </span>
                </li>
                <li className="flex items-center justify-between bg-slate-950/30 rounded-lg px-3 py-2">
                  <div>
                    <p className="text-sm">Seattle Executive Roundtable</p>
                    <p className="text-xs text-slate-400">Score 94 · 12 attendees · 8 MQLs · $290k pipeline · 2 partners</p>
                  </div>
                  <span className="text-xs bg-cyan-500/10 text-cyan-200 px-2 py-1 rounded-md">
                    Review
                  </span>
                </li>
                <li className="flex items-center justify-between bg-slate-950/30 rounded-lg px-3 py-2">
                  <div>
                    <p className="text-sm">Denver Training Workshop</p>
                    <p className="text-xs text-slate-400">Score 79 · 52 attendees · 14 MQLs · $125k pipeline · 0 partners</p>
                  </div>
                  <span className="text-xs bg-teal-500/10 text-teal-200 px-2 py-1 rounded-md">
                    Adjust
                  </span>
                </li>
                {/* Duplicate items for seamless loop */}
                <li className="flex items-center justify-between bg-slate-950/30 rounded-lg px-3 py-2">
                  <div>
                    <p className="text-sm">Austin Customer Breakfast</p>
                    <p className="text-xs text-slate-400">Score 92 · 28 attendees · 12 MQLs · $340k pipeline · 6 partners</p>
                  </div>
                  <span className="text-xs bg-emerald-500/10 text-emerald-200 px-2 py-1 rounded-md">
                    Run again
                  </span>
                </li>
                <li className="flex items-center justify-between bg-slate-950/30 rounded-lg px-3 py-2">
                  <div>
                    <p className="text-sm">Boston Executive Dinner</p>
                    <p className="text-xs text-slate-400">Score 88 · 18 attendees · 7 MQLs · $180k pipeline · 3 partners</p>
                  </div>
                  <span className="text-xs bg-amber-500/10 text-amber-200 px-2 py-1 rounded-md">
                    Resize
                  </span>
                </li>
                <li className="flex items-center justify-between bg-slate-950/30 rounded-lg px-3 py-2">
                  <div>
                    <p className="text-sm">Partner Webinar</p>
                    <p className="text-xs text-slate-400">Score 74 · 142 attendees · 31 MQLs · $220k pipeline · 8 partners</p>
                  </div>
                  <span className="text-xs bg-rose-500/10 text-rose-200 px-2 py-1 rounded-md">
                    Pause
                  </span>
                </li>
                <li className="flex items-center justify-between bg-slate-950/30 rounded-lg px-3 py-2">
                  <div>
                    <p className="text-sm">NYC Product Launch</p>
                    <p className="text-xs text-slate-400">Score 96 · 85 attendees · 24 MQLs · $520k pipeline · 4 partners</p>
                  </div>
                  <span className="text-xs bg-blue-500/10 text-blue-200 px-2 py-1 rounded-md">
                    Schedule
                  </span>
                </li>
                <li className="flex items-center justify-between bg-slate-950/30 rounded-lg px-3 py-2">
                  <div>
                    <p className="text-sm">SF Sales Kickoff</p>
                    <p className="text-xs text-slate-400">Score 91 · 64 attendees · 18 MQLs · $410k pipeline · 2 partners</p>
                  </div>
                  <span className="text-xs bg-violet-500/10 text-violet-200 px-2 py-1 rounded-md">
                    Expand
                  </span>
                </li>
                <li className="flex items-center justify-between bg-slate-950/30 rounded-lg px-3 py-2">
                  <div>
                    <p className="text-sm">Chicago Industry Conference</p>
                    <p className="text-xs text-slate-400">Score 68 · 287 attendees · 45 MQLs · $380k pipeline · 0 partners</p>
                  </div>
                  <span className="text-xs bg-indigo-500/10 text-indigo-200 px-2 py-1 rounded-md">
                    Optimize
                  </span>
                </li>
                <li className="flex items-center justify-between bg-slate-950/30 rounded-lg px-3 py-2">
                  <div>
                    <p className="text-sm">Seattle Executive Roundtable</p>
                    <p className="text-xs text-slate-400">Score 94 · 12 attendees · 8 MQLs · $290k pipeline · 2 partners</p>
                  </div>
                  <span className="text-xs bg-cyan-500/10 text-cyan-200 px-2 py-1 rounded-md">
                    Review
                  </span>
                </li>
                <li className="flex items-center justify-between bg-slate-950/30 rounded-lg px-3 py-2">
                  <div>
                    <p className="text-sm">Denver Training Workshop</p>
                    <p className="text-xs text-slate-400">Score 79 · 52 attendees · 14 MQLs · $125k pipeline · 0 partners</p>
                  </div>
                  <span className="text-xs bg-teal-500/10 text-teal-200 px-2 py-1 rounded-md">
                    Adjust
                  </span>
                </li>
              </ul>
              <div className="border-t border-slate-800 pt-3">
                <p className="text-xs text-slate-400">
                  AI insight: partner-aligned breakfasts in Austin produced 2.3× co-fundable pipeline. Repeat in Q4.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Event Lifecycle Features */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/30 px-3 py-1 text-xs text-violet-100 mb-4">
              FULL EVENT LIFECYCLE
            </p>
            <h2 className="text-3xl font-semibold mb-3">One platform from registration to Salesforce</h2>
            <p className="text-slate-300/80 max-w-2xl mx-auto">
              Stop juggling spreadsheets and manual syncs. Momentum handles the entire event lifecycle with native Salesforce integration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Pre-Event */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
              <p className="text-xs text-violet-400 font-medium mb-3">PRE-EVENT</p>
              <h3 className="text-xl font-semibold mb-3">Registration & Lead Capture</h3>
              <ul className="space-y-2 text-sm text-slate-200/80">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0"></span>
                  Branded registration pages
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0"></span>
                  Session signup and email passes
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0"></span>
                  Lead capture forms
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0"></span>
                  Auto-sync to Salesforce Campaigns
                </li>
              </ul>
            </div>

            {/* At-Event */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
              <p className="text-xs text-emerald-400 font-medium mb-3">AT-EVENT</p>
              <h3 className="text-xl font-semibold mb-3">QR Check-In Module</h3>
              <ul className="space-y-2 text-sm text-slate-200/80">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                  QR scanner for staff
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                  Kiosk self-service check-in
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                  Walk-in capture on the spot
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                  Works offline, syncs when back online
                </li>
              </ul>
            </div>

            {/* Post-Event */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
              <p className="text-xs text-blue-400 font-medium mb-3">POST-EVENT</p>
              <h3 className="text-xl font-semibold mb-3">Publish to Salesforce</h3>
              <ul className="space-y-2 text-sm text-slate-200/80">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                  Update Campaign Members directly
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                  MQL routing and attribution
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                  Guardrails before publishing
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                  Business email validation
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1: Check-In Module */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Event Check-In Module</h3>
                  <p className="text-sm text-emerald-300">Works offline, syncs automatically</p>
                </div>
                <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-200 text-xs font-medium">NEW</span>
              </div>

              <p className="text-slate-300/90 mb-4">
                QR code check-in for staff, self-service kiosk mode for attendees, and instant walk-in capture. No WiFi? No problem—works offline and syncs when you're back online.
              </p>

              <div className="bg-slate-950/50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-400">Chicago Tech Summit Check-Ins</span>
                  <span className="text-xs px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-200">Live</span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-bold text-emerald-300">247</span>
                  <span className="text-sm text-slate-400">checked in</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">34 walk-ins captured · 0 duplicates · Ready to publish</p>
              </div>

              <ul className="space-y-2 text-sm text-slate-200/80 flex-grow">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                  Scan QR codes or search by name
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                  Capture walk-ins with business email validation
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                  Session-level attendance tracking
                </li>
              </ul>
            </div>

            {/* Feature 2: Salesforce Publishing */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Native Salesforce Integration</h3>
                  <p className="text-sm text-blue-300">Updates Campaign Members directly</p>
                </div>
                <span className="px-2 py-1 rounded-md bg-blue-500/10 text-blue-200 text-xs font-medium">NATIVE</span>
              </div>

              <p className="text-slate-300/90 mb-4">
                Publish attendees directly to Salesforce Campaign Members. Built-in guardrails validate business emails, check session counts, and prevent duplicates before anything hits your CRM.
              </p>

              <div className="bg-slate-950/50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-slate-400">Ready to Publish</span>
                  <span className="text-xs px-2 py-1 rounded-md bg-blue-500/10 text-blue-200">Guardrails passed</span>
                </div>
                <p className="text-xs text-slate-300/80 leading-relaxed mb-2">
                  247 attendees ready • 34 walk-ins validated • 12 flagged for review (personal emails)
                </p>
                <p className="text-xs text-blue-300">One click to update Campaign Members →</p>
              </div>

              <ul className="space-y-2 text-sm text-slate-200/80 flex-grow">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                  No spreadsheets or manual imports
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                  MQL routing based on engagement
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                  Full attribution in campaign reports
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Four Stakeholders */}
        <section id="stakeholders" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold mb-4">One event. Four reports. Zero chasing.</h2>
          <p className="text-slate-300/80 mb-8 max-w-3xl">
            Sales, attendees, marketing, and partners all see the event differently. Momentum centralizes their feedback and turns it into a single event score.
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
                Momentum analyzes stakeholder feedback across location, audience, and partner alignment to recommend what to scale and what to adjust.
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
              <p className="text-sm font-medium mb-3 text-slate-50">Insight: Austin vs. Boston events</p>
              <p className="text-sm text-slate-200/80 mb-3">
                Austin events scored higher because sales follow-up was 32% faster and partner target accounts were present. Replicate for Q4 roadshow.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-slate-950/30 rounded-lg p-3">
                  <p className="text-xs text-slate-400 mb-1">Austin</p>
                  <p className="text-2xl font-semibold">88</p>
                  <p className="text-xs text-emerald-300 mt-1">Run again</p>
                </div>
                <div className="bg-slate-950/30 rounded-lg p-3">
                  <p className="text-xs text-slate-400 mb-1">Boston</p>
                  <p className="text-2xl font-semibold">62</p>
                  <p className="text-xs text-amber-200 mt-1">Resize</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4">
                Explanation available inside the app for stakeholders. Exportable to Salesforce / Sheets.
              </p>
            </div>
          </div>
        </section>

        {/* 50% Story */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h3 className="font-medium mb-3">How most teams measure events today</h3>
              <ul className="space-y-2 text-sm text-slate-200/80">
                <li>✔ Registrations</li>
                <li>✔ Check-ins</li>
                <li>✔ MQLs</li>
              </ul>
              <p className="text-xs text-slate-500 mt-4">= 50% of the story</p>
            </div>
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h3 className="font-medium mb-3">What Momentum adds</h3>
              <ul className="space-y-2 text-sm text-slate-200/80">
                <li>✅ Attendee survey</li>
                <li>✅ Sales feedback (auto-routed)</li>
                <li>✅ Partner/sponsor value</li>
                <li>✅ AI recommendation</li>
              </ul>
              <p className="text-xs text-slate-500 mt-4">= full view for repeat / resize / pause</p>
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

        {/* CTA / Resources */}
        <section id="resources" className="mx-auto max-w-6xl px-4 py-16">
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row justify-between gap-6 items-center">
            <div>
              <h2 className="text-xl font-semibold mb-2">Ready to show which events actually drive pipeline?</h2>
              <p className="text-slate-300/80">
                We'll walk you through the event scorecard, stakeholder surveys, and how we export to Salesforce.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0 items-center">
              <a href="https://momentum.datakarma.ai" className="bg-white text-slate-950 text-sm px-4 py-2 rounded-md font-medium inline-block hover:bg-slate-100">
                Get started
              </a>
              <a href="https://momentum.datakarma.ai" className="text-sm text-slate-100/80 hover:text-white whitespace-nowrap">
                Download sample report →
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
              <Link href="/momentum" className="hover:text-white">Momentum</Link>
              <Link href="/momentum/pricing" className="hover:text-white">Pricing</Link>
              <Link href="/docs/momentum" className="hover:text-white">Docs</Link>
              <Link href="/trust" className="hover:text-white">Trust</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
            </nav>
          </div>
          <div className="text-center pt-6 border-t border-slate-900">
            <p className="text-xs">Momentum is a Data Karma product.</p>
            <p className="text-xs mt-2">© 2025 Data Karma. Built for event marketing teams.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
