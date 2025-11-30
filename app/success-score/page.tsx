'use client';

import Link from 'next/link';
import Script from 'next/script';

export default function SuccessScore() {
  return (
    <>
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />

      <style jsx global>{`
        .ek-gradient-text {
          background: linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #EC4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ek-gradient-bg {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(236, 72, 153, 0.1) 100%);
        }
      `}</style>

      {/* Navigation */}
      <header>
        <div>
          <Link href="/" className="logo-container">
            <div className="flex items-center gap-3">
              <img src="/eventkarma-logo.svg" alt="Event Karma" className="w-10 h-10" />
              <span className="text-lg font-semibold text-white">Event Karma</span>
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
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.2),_rgba(168,85,247,0.1)_40%,_transparent_70%)]"></div>
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/30 px-4 py-1.5 text-sm text-purple-200 mb-6">
              The metric that matters
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              What is a <span className="ek-gradient-text">Success Score?</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A single, defensible number that tells you whether your event actually drove business results—not just attendance.
            </p>
          </div>
        </section>

        {/* The Problem */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Events are expensive to justify.
              </h2>
              <p className="text-slate-300 mb-4">
                After every event, the same questions come up: Was it worth it? Should we do it again? How does it compare to our other events?
              </p>
              <p className="text-slate-300 mb-4">
                Most teams cobble together attendance numbers, survey results, and pipeline reports in a spreadsheet—and still can't give a clear answer.
              </p>
              <p className="text-slate-300">
                The Success Score changes that. It synthesizes all your event data into one number that leadership can understand and act on.
              </p>
            </div>
            <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-2xl p-8">
              <p className="text-sm text-slate-400 mb-4">The old way:</p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="text-red-400">?</span>
                  <span>"We had 200 attendees... is that good?"</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="text-red-400">?</span>
                  <span>"NPS was 42... but what does that mean for ROI?"</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="text-red-400">?</span>
                  <span>"Pipeline touched $2M... was that incremental?"</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="text-red-400">?</span>
                  <span>"Should we do this event again next year?"</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Four dimensions. One score.
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              The Success Score weighs four key areas that together paint a complete picture of event performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Attendance */}
            <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Attendance Quality</h3>
                  <p className="text-slate-300 text-sm mb-3">
                    Not just how many showed up—but who. Show rate, target account attendance, and seniority mix all factor in.
                  </p>
                  <ul className="text-xs text-slate-400 space-y-1">
                    <li>• Registration to attendance conversion</li>
                    <li>• Target account representation</li>
                    <li>• Decision-maker attendance rate</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Engagement */}
            <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Engagement Depth</h3>
                  <p className="text-slate-300 text-sm mb-3">
                    Did attendees just badge-scan and leave, or did they engage? Sessions attended, demos requested, and conversations captured.
                  </p>
                  <ul className="text-xs text-slate-400 space-y-1">
                    <li>• Session attendance and duration</li>
                    <li>• Demo/meeting requests</li>
                    <li>• Content downloads and interactions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pipeline */}
            <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Pipeline Influence</h3>
                  <p className="text-slate-300 text-sm mb-3">
                    The business impact. How much pipeline did attendees touch? Did opportunities accelerate after the event?
                  </p>
                  <ul className="text-xs text-slate-400 space-y-1">
                    <li>• Open pipeline value touched</li>
                    <li>• New opportunities created</li>
                    <li>• Deal stage progression post-event</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Feedback */}
            <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Attendee Sentiment</h3>
                  <p className="text-slate-300 text-sm mb-3">
                    What did attendees actually think? NPS scores, survey responses, and qualitative feedback weighted by respondent value.
                  </p>
                  <ul className="text-xs text-slate-400 space-y-1">
                    <li>• Net Promoter Score (NPS)</li>
                    <li>• Session and speaker ratings</li>
                    <li>• Intent signals from surveys</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Score */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="ek-gradient-bg border border-purple-500/20 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  From data to decision.
                </h2>
                <p className="text-slate-300 mb-6">
                  Each dimension is scored 0–100 based on your goals and benchmarks. The weighted average becomes your Success Score, instantly translated to a letter grade everyone understands.
                </p>
                <div className="grid grid-cols-5 gap-2 text-center text-sm">
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg py-2">
                    <p className="font-bold text-green-400">A</p>
                    <p className="text-xs text-slate-400">90+</p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg py-2">
                    <p className="font-bold text-green-300">B</p>
                    <p className="text-xs text-slate-400">80-89</p>
                  </div>
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg py-2">
                    <p className="font-bold text-yellow-300">C</p>
                    <p className="text-xs text-slate-400">70-79</p>
                  </div>
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg py-2">
                    <p className="font-bold text-orange-300">D</p>
                    <p className="text-xs text-slate-400">60-69</p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg py-2">
                    <p className="font-bold text-red-400">F</p>
                    <p className="text-xs text-slate-400">&lt;60</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/10 border-4 border-purple-500/40 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-5xl font-bold ek-gradient-text">84</p>
                      <p className="text-sm text-slate-300 mt-1">Success Score</p>
                      <p className="text-lg text-green-400 mt-1 font-semibold">B</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              What you can do with it.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Compare events</h3>
              <p className="text-sm text-slate-300">
                See how this quarter's roadshow stacks up against last year's conference—apples to apples.
              </p>
            </div>

            <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Track trends</h3>
              <p className="text-sm text-slate-300">
                Monitor your event series over time. Are you improving? Which types of events perform best?
              </p>
            </div>

            <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Report to leadership</h3>
              <p className="text-sm text-slate-300">
                Give your CMO a one-page scorecard they'll actually read—and understand.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Ready to know if your events are working?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Start capturing the data you need to generate Success Scores for every event.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-sm px-6 py-3 rounded-lg font-medium inline-block transition-all"
            >
              Book a demo
            </Link>
            <Link
              href="/pricing"
              className="bg-white/10 hover:bg-white/20 backdrop-blur text-sm px-6 py-3 rounded-lg font-medium inline-block border border-purple-500/30"
            >
              See pricing
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 mt-12 py-12 bg-slate-950/50">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <img src="/eventkarma-logo.svg" alt="Event Karma" className="w-8 h-8" />
                  <span className="font-semibold text-white">Event Karma</span>
                </div>
                <p className="text-sm text-slate-400">
                  Event analytics for B2B teams who demand clarity.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Product</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                  <li><a href="https://docs.eventkarma.ai" className="hover:text-white">Documentation</a></li>
                  <li><Link href="/success-score" className="hover:text-white">Success Score</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Company</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><Link href="/trust" className="hover:text-white">Trust & Security</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                  <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Legal</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                  <li><Link href="/dpa" className="hover:text-white">DPA</Link></li>
                  <li><Link href="/cookies" className="hover:text-white">Cookie Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-500">
                &copy; {new Date().getFullYear()} Data Karma AI LLC. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
