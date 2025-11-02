'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function Home() {
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

  return (
    <>
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />

      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur border-b border-slate-900" style={{ position: 'sticky', top: 0, zIndex: 40, backgroundColor: 'rgba(2, 6, 23, 0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgb(15, 23, 42)' }}>
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-6" style={{ maxWidth: '72rem', margin: '0 auto', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
          <div className="flex items-center gap-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div className="h-8 w-8 rounded-md bg-violet-500/90 flex items-center justify-center text-sm font-bold text-white" style={{ height: '2rem', width: '2rem', borderRadius: '0.375rem', backgroundColor: 'rgb(139, 92, 246)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', fontWeight: 'bold', color: 'white' }}>M</div>
            <span className="font-semibold tracking-tight text-white" style={{ fontWeight: 600, letterSpacing: '-0.025em', color: 'white' }}>Momentum</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-slate-200/70" style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem', color: 'rgba(226, 232, 240, 0.7)' }}>
            <Link href="/how-it-works" className="hover:text-white" style={{ color: 'rgba(226, 232, 240, 0.7)', textDecoration: 'none' }}>How it works</Link>
            <a href="#stakeholders" className="hover:text-white" style={{ color: 'rgba(226, 232, 240, 0.7)', textDecoration: 'none' }}>Stakeholders</a>
            <Link href="/integrations" className="hover:text-white" style={{ color: 'rgba(226, 232, 240, 0.7)', textDecoration: 'none' }}>Integrations</Link>
            <Link href="/docs" className="hover:text-white" style={{ color: 'rgba(226, 232, 240, 0.7)', textDecoration: 'none' }}>Resources</Link>
          </nav>
          <div className="flex gap-3" style={{ display: 'flex', gap: '0.75rem' }}>
            <a href="https://fss-app-iota.vercel.app/" className="text-sm text-slate-200/70 hover:text-white" style={{ fontSize: '0.875rem', color: 'rgba(226, 232, 240, 0.7)', textDecoration: 'none' }}>Login</a>
            <a href="https://fss-app-iota.vercel.app/" className="bg-white text-slate-950 text-sm px-4 py-2 rounded-md font-medium hover:bg-slate-100" style={{ backgroundColor: 'white', color: 'rgb(2, 6, 23)', fontSize: '0.875rem', padding: '0.5rem 1rem', borderRadius: '0.375rem', fontWeight: 500, textDecoration: 'none' }}>
              Schedule a walkthrough
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
                Momentum collects post-event feedback from sales, attendees, marketing, and partners — then ranks events by pipeline impact, not just registrations.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <a href="https://fss-app-iota.vercel.app/" className="bg-violet-500 hover:bg-violet-400 text-sm px-5 py-2.5 rounded-md font-medium inline-block">
                  Schedule a walkthrough
                </a>
                <a href="https://fss-app-iota.vercel.app/" className="text-sm text-slate-100/80 hover:text-white">
                  View sample event scorecard →
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
              <ul className="space-y-3">
                <li className="flex items-center justify-between bg-slate-950/30 rounded-lg px-3 py-2">
                  <div>
                    <p className="text-sm">Austin Customer Breakfast</p>
                    <p className="text-xs text-slate-400">Sales 88 · Attendees 90 · Partners 78</p>
                  </div>
                  <span className="text-xs bg-emerald-500/10 text-emerald-200 px-2 py-1 rounded-md">
                    Run again
                  </span>
                </li>
                <li className="flex items-center justify-between bg-slate-950/30 rounded-lg px-3 py-2">
                  <div>
                    <p className="text-sm">Boston Executive Dinner</p>
                    <p className="text-xs text-slate-400">Sales 62 · Attendees 85 · Partners 55</p>
                  </div>
                  <span className="text-xs bg-amber-500/10 text-amber-200 px-2 py-1 rounded-md">
                    Resize
                  </span>
                </li>
                <li className="flex items-center justify-between bg-slate-950/30 rounded-lg px-3 py-2">
                  <div>
                    <p className="text-sm">Partner Webinar</p>
                    <p className="text-xs text-slate-400">Sales 48 · Attendees 74 · Partners 42</p>
                  </div>
                  <span className="text-xs bg-rose-500/10 text-rose-200 px-2 py-1 rounded-md">
                    Pause
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
                <li>✔ Attendee survey / NPS</li>
                <li>✖ Sales reality</li>
                <li>✖ Partner ROI</li>
              </ul>
              <p className="text-xs text-slate-500 mt-4">= 50% of the story</p>
            </div>
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h3 className="font-medium mb-3">What Momentum adds</h3>
              <ul className="space-y-2 text-sm text-slate-200/80">
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
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Ready to show which events actually drive pipeline?</h2>
              <p className="text-slate-300/80">
                We'll walk you through the event scorecard, stakeholder surveys, and how we export to Salesforce.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a href="https://fss-app-iota.vercel.app/" className="bg-white text-slate-950 text-sm px-4 py-2 rounded-md font-medium inline-block">
                Schedule a walkthrough
              </a>
              <a href="https://fss-app-iota.vercel.app/" className="text-sm text-slate-100/80 hover:text-white whitespace-nowrap">
                Download sample report →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-900 text-center text-sm text-slate-500">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8 text-left">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-md bg-violet-500/90 flex items-center justify-center text-sm font-bold">M</div>
                <span className="font-semibold tracking-tight text-white">Momentum</span>
              </div>
              <p className="text-xs text-slate-400">
                The only platform with complete event intelligence. Feedback from Sales, Marketing, Attendees, and Partners—powered by AI.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Product</h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="/how-it-works" className="hover:text-white">How it works</Link></li>
                <li><Link href="/integrations" className="hover:text-white">Integrations</Link></li>
                <li><Link href="/fss-score" className="hover:text-white">FSS Score</Link></li>
                <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Company</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Resources</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-white">Case Studies</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-900">
            © 2025 Momentum. Built for field & event marketing teams.
          </div>
        </div>
      </footer>
    </>
  );
}
