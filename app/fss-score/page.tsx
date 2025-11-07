'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function FSSScore() {
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
      <header>
        <div>
          <div className="logo-container">
            <div className="logo-icon">M</div>
            <span className="logo-text">Momentum</span>
          </div>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/how-it-works">How it works</Link>
            <Link href="/integrations">Integrations</Link>
            <Link href="/docs">Resources</Link>
          </nav>
          <div className="nav-actions">
            <a href="https://fss-app-iota.vercel.app/" className="nav-login">Login</a>
            <a href="https://fss-app-iota.vercel.app/" className="nav-cta">
              Get started
            </a>
          </div>
        </div>
      </header>

      <main className="bg-slate-950 text-slate-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),_transparent_55%)]"></div>
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              The Success Score
            </h1>
            <p className="text-slate-200/80 max-w-3xl mx-auto">
              A single metric that shows whether your field marketing events create real value for prospects, sales partners, and your business
            </p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-2xl font-semibold mb-6">The Problem with Event Metrics Today</h2>

          <div className="space-y-4 mb-12 text-slate-200/80">
            <p>
              Field marketing teams are stuck defending MQL counts that don't tell the real story. You hit your numbers, but sales complains about lead quality. Attendees show up, but you don't know if they actually found value. Leadership wants ROI proof, but all you have are activity metrics.
            </p>
            <p>
              The Success Score solves this by combining hard Salesforce data with real feedback from the people who matter most: your attendees, sales partners, and field team.
            </p>
          </div>

          <h2 className="text-2xl font-semibold mb-6">How the Success Score Works</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <div className="text-violet-400 mb-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-3">1. Salesforce Business Metrics</h3>
              <p className="text-sm text-slate-200/80">
                MQLs generated, meetings booked, pipeline created, and target account engagement flow directly from your Salesforce campaigns. This is the quantitative foundation - the business outcomes that prove events drive revenue.
              </p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <div className="text-violet-400 mb-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-3">2. Sales Partner Feedback</h3>
              <p className="text-sm text-slate-200/80">
                Your sales team knows if leads are worth pursuing. After each event, sales partners rate lead quality, attendee engagement, and whether the event helped them advance deals. This is the reality check that separates vanity metrics from real value.
              </p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <div className="text-violet-400 mb-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-3">3. Attendee Experience</h3>
              <p className="text-sm text-slate-200/80">
                High attendee satisfaction predicts conversion. If prospects found genuine value, they're more likely to engage with sales and become customers. This is your early signal of ROI and the proof that events serve your market, not just your metrics.
              </p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <div className="text-violet-400 mb-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-3">4. Field Team Score</h3>
              <p className="text-sm text-slate-200/80">
                Your field marketing team's assessment of execution quality, logistics, and whether the event achieved its strategic goals. This captures operational excellence and provides context that numbers alone can't show.
              </p>
            </div>
          </div>
        </section>

        {/* Why This Matters Section */}
        <section className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-2xl font-semibold mb-10 text-center">Why This Matters</h2>

          <div className="space-y-8">
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h3 className="font-semibold mb-3">For Marketing Leaders</h3>
              <p className="text-sm text-slate-200/80">
                Prove ROI with confidence. Show which events drive actual pipeline and customer value, not just activity. Defend your budget with data that executives trust.
              </p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h3 className="font-semibold mb-3">For Sales Alignment</h3>
              <p className="text-sm text-slate-200/80">
                Stop the "your leads are garbage" conversation. When sales partners rate events highly, you know you're creating opportunities they can actually close. When scores are low, you have clear direction for improvement.
              </p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h3 className="font-semibold mb-3">For Continuous Improvement</h3>
              <p className="text-sm text-slate-200/80">
                Compare events over time. Understand which formats resonate with your market, which topics drive engagement, and which execution approaches deliver the best results. Learn faster, optimize smarter.
              </p>
            </div>
          </div>
        </section>

        {/* Example Section */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-2xl font-semibold mb-10 text-center">Real World Example</h2>

          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
            <h3 className="font-medium mb-6">Scenario: Two Similar Events</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-6">
                <h4 className="font-medium mb-4">Event A: High Volume</h4>
                <ul className="space-y-2 text-sm text-slate-200/80 mb-4">
                  <li>✓ 200 MQLs generated</li>
                  <li>✓ $500K pipeline</li>
                  <li>✗ Sales feedback: 3/10</li>
                  <li>✗ Attendee satisfaction: 5/10</li>
                </ul>
                <div className="text-2xl font-semibold text-rose-400">Success Score: 52</div>
              </div>

              <div className="bg-slate-950/50 border-2 border-emerald-500/30 rounded-xl p-6">
                <h4 className="font-medium mb-4">Event B: High Quality</h4>
                <ul className="space-y-2 text-sm text-slate-200/80 mb-4">
                  <li>✓ 80 MQLs generated</li>
                  <li>✓ $450K pipeline</li>
                  <li>✓ Sales feedback: 9/10</li>
                  <li>✓ Attendee satisfaction: 9/10</li>
                </ul>
                <div className="text-2xl font-semibold text-emerald-400">Success Score: 87</div>
              </div>
            </div>

            <p className="text-sm text-slate-200/80">
              Traditional metrics say Event A was more successful - double the MQLs. But Event B's high Success Score shows it created real value: engaged prospects, quality leads sales actually wants to work, and a format worth repeating. Six months later, Event B drove 3x the closed-won revenue.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row justify-between gap-6 items-center">
            <div>
              <h2 className="text-xl font-semibold mb-2">See the complete picture of event success</h2>
              <p className="text-slate-300/80">
                Combine Salesforce data with real feedback to prove which events drive real value
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0 items-center">
              <a href="https://fss-app-iota.vercel.app/" className="bg-white text-slate-950 text-sm px-4 py-2 rounded-md font-medium inline-block hover:bg-slate-100">
                Get started
              </a>
              <a href="https://fss-app-iota.vercel.app/" className="text-sm text-slate-100/80 hover:text-white whitespace-nowrap">
                View methodology →
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
                <li><Link href="/fss-score" className="hover:text-white">Success Score</Link></li>
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
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
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
