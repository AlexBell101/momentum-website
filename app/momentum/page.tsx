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

    const scroll = () => {
      scrollPos += scrollSpeed;

      // Reset to beginning when we've scrolled through half the items (since they're duplicated)
      if (scrollPos >= totalHeight) {
        scrollPos = 0;
        container.scrollTop = 0;
      } else {
        container.scrollTop = scrollPos;
      }

      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      requestAnimationFrame(scroll);
    };

    // Prevent mouse wheel from interfering with auto-scroll
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('wheel', handleWheel);
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
      `}</style>

      {/* Navigation */}
      <header>
        <div>
          <Link href="/" className="logo-container">
            <img src="/datakarma-ai-logo-white.svg" alt="Data Karma" className="logo-icon" style={{ height: "40px" }} />
          </Link>
          <nav>
            <Link href="/momentum">Momentum</Link>
            <Link href="/momentum/pricing">Pricing</Link>
            <Link href="/docs/momentum">Docs</Link>
            <Link href="/trust">Trust</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="nav-actions">
            <a href="https://fss-app-iota.vercel.app/" className="nav-cta">
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
              <p className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/30 px-3 py-1 text-xs text-violet-100 mb-5">
                FIELD & EVENT ANALYTICS
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                Know which events to repeat, resize, or pause.
              </h1>
              <p className="text-slate-200/80 mb-6 max-w-xl">
                Momentum combines pipeline data, MQLs, and feedback from Sales, Marketing, Attendees, and Partners into one holistic Success Score. Get AI recommendations for every event you run.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <a href="https://fss-app-iota.vercel.app/" className="bg-violet-500 hover:bg-violet-400 text-sm px-5 py-2.5 rounded-md font-medium inline-block">
                  Get started
                </a>
              </div>
              <p className="text-xs text-slate-500">
                Built for field & event marketing teams at B2B SaaS, cybersecurity, and data companies.
              </p>
            </div>

            {/* Hero Mock Panel */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-50">Q3 field events — AI recommendations</p>
                <span className="text-xs text-slate-400">Updated 3m ago</span>
              </div>
              <ul ref={scrollContainerRef} className="space-y-3 max-h-52 overflow-y-auto pr-2 scrollbar-hide">
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

        {/* AI-Powered Features */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/30 px-3 py-1 text-xs text-violet-100 mb-4">
              POWERED BY CLAUDE AI
            </p>
            <h2 className="text-3xl font-semibold mb-3">Make smarter decisions before and after every event</h2>
            <p className="text-slate-300/80 max-w-2xl mx-auto">
              Momentum uses AI to predict event success before you spend budget, and auto-generates executive reports in seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1: Predictive Score */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Predictive Event Success Score</h3>
                  <p className="text-sm text-violet-300">Before the event happens</p>
                </div>
                <span className="px-2 py-1 rounded-md bg-violet-500/10 text-violet-200 text-xs font-medium">NEW</span>
              </div>

              <p className="text-slate-300/90 mb-4">
                AI analyzes 100+ historical events to predict your Success Score before you spend a dollar. Make data-driven go/no-go decisions with confidence.
              </p>

              <div className="bg-slate-950/50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-400">Predicted Success Score for "Chicago Tech Summit"</span>
                  <span className="text-xs px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-200">High confidence</span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-bold text-emerald-300">82</span>
                  <span className="text-sm text-slate-400">/ 100</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">Based on: event type, region, budget, timing, team performance</p>
              </div>

              <ul className="space-y-2 text-sm text-slate-200/80 flex-grow">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0"></span>
                  Predict success before spending budget
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0"></span>
                  Risk assessments with specific recommendations
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0"></span>
                  Optimize format, timing, and budget allocation
                </li>
              </ul>
            </div>

            {/* Feature 2: Executive Scorecard */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Executive Scorecard with AI Narratives</h3>
                  <p className="text-sm text-violet-300">Board-ready in seconds</p>
                </div>
                <span className="px-2 py-1 rounded-md bg-violet-500/10 text-violet-200 text-xs font-medium">NEW</span>
              </div>

              <p className="text-slate-300/90 mb-4">
                Claude AI generates executive reports automatically. Get compelling narratives, strategic recommendations, and ROI analysis—ready to present to leadership.
              </p>

              <div className="bg-slate-950/50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-slate-400">Q4 Executive Summary</span>
                  <span className="text-lg font-bold text-emerald-300">A-</span>
                </div>
                <p className="text-xs text-slate-300/80 leading-relaxed mb-2">
                  "Your field events delivered 2.8× ROI this quarter, with Austin and SF markets significantly outperforming. Partner co-funded events showed 34% higher Success Scores..."
                </p>
                <p className="text-xs text-violet-300">+ Strategic recommendations, trend analysis, peer rankings</p>
              </div>

              <ul className="space-y-2 text-sm text-slate-200/80 flex-grow">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0"></span>
                  Generate reports in seconds, not hours
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0"></span>
                  AI-written executive narratives and insights
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0"></span>
                  Performance grades, trends, ROI analysis
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
              <a href="https://fss-app-iota.vercel.app/" className="bg-white text-slate-950 text-sm px-4 py-2 rounded-md font-medium inline-block hover:bg-slate-100">
                Get started
              </a>
              <a href="https://fss-app-iota.vercel.app/" className="text-sm text-slate-100/80 hover:text-white whitespace-nowrap">
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
              <img src="/datakarma-ai-logo-white.svg" alt="Data Karma" style={{ height: "32px" }} />
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
            <p className="text-xs mt-2">© 2025 Data Karma. Built for field & event marketing teams.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
