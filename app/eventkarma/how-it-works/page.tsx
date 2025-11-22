'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function HowItWorks() {
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
          <Link href="/" className="logo-container">
            <img src="/datakarma-ai-logo-white.svg" alt="Data Karma" className="logo-icon" />
            
          </Link>
          <nav>
            
            <Link href="/eventkarma">Event Karma</Link>
            <Link href="/eventkarma/pricing">Pricing</Link>
            <Link href="/docs/eventkarma">Docs</Link>
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
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/30 px-3 py-1 text-xs text-violet-100 mb-5">
              360° CAMPAIGN INTELLIGENCE
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              How Event Karma Works
            </h1>
            <p className="text-slate-200/80 max-w-3xl mx-auto">
              The complete feedback loop: Salesforce data + feedback from Sales, Marketing, Attendees, and Partners—synthesized by AI into your Success Score.
            </p>
          </div>
        </section>

        {/* Interactive Feedback Loop Visualization */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              The Complete Feedback Loop
            </h2>
            <p className="text-slate-200/80 max-w-2xl mx-auto">
              All four perspectives flow into your Success Score, with AI analyzing patterns to surface strategic insights.
            </p>
          </div>

          {/* Feedback Loop Visualization */}
          <div className="relative mx-auto max-w-2xl aspect-square mb-12">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600">
              {/* Marketing to Center */}
              <line x1="300" y1="110" x2="300" y2="240" stroke="rgba(139,92,246,0.3)" strokeWidth="2" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
              </line>
              {/* Sales to Center */}
              <line x1="300" y1="490" x2="300" y2="360" stroke="rgba(139,92,246,0.3)" strokeWidth="2" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
              </line>
              {/* Partners to Center */}
              <line x1="110" y1="300" x2="240" y2="300" stroke="rgba(139,92,246,0.3)" strokeWidth="2" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
              </line>
              {/* Attendees to Center */}
              <line x1="490" y1="300" x2="360" y2="300" stroke="rgba(139,92,246,0.3)" strokeWidth="2" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
              </line>

              {/* Circular connections */}
              <path d="M 300 110 Q 450 150, 490 300" stroke="rgba(139,92,246,0.2)" strokeWidth="1" fill="none" strokeDasharray="3,3">
                <animate attributeName="stroke-dashoffset" from="0" to="6" dur="2s" repeatCount="indefinite"/>
              </path>
              <path d="M 490 300 Q 450 450, 300 490" stroke="rgba(139,92,246,0.2)" strokeWidth="1" fill="none" strokeDasharray="3,3">
                <animate attributeName="stroke-dashoffset" from="0" to="6" dur="2s" repeatCount="indefinite"/>
              </path>
              <path d="M 300 490 Q 150 450, 110 300" stroke="rgba(139,92,246,0.2)" strokeWidth="1" fill="none" strokeDasharray="3,3">
                <animate attributeName="stroke-dashoffset" from="0" to="6" dur="2s" repeatCount="indefinite"/>
              </path>
              <path d="M 110 300 Q 150 150, 300 110" stroke="rgba(139,92,246,0.2)" strokeWidth="1" fill="none" strokeDasharray="3,3">
                <animate attributeName="stroke-dashoffset" from="0" to="6" dur="2s" repeatCount="indefinite"/>
              </path>
            </svg>

            {/* Center - Event Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-violet-500/20 border-2 border-violet-500/50 flex items-center justify-center text-2xl font-bold mb-2">
                EVENT
              </div>
              <div className="text-xs bg-violet-500/10 text-violet-200 px-2 py-1 rounded-md mb-1">✨ AI Analyzing</div>
              <div className="text-sm font-semibold">Success Score: 85</div>
            </div>

            {/* Stakeholders */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-slate-900/90 border border-slate-800 rounded-lg p-4 w-32 text-center">
              <div className="text-2xl mb-2">📊</div>
              <div className="font-medium text-sm mb-1">Marketing</div>
              <div className="text-xs text-slate-400">Execution & logistics</div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-slate-900/90 border border-slate-800 rounded-lg p-4 w-32 text-center">
              <div className="text-2xl mb-2">💼</div>
              <div className="font-medium text-sm mb-1">Sales</div>
              <div className="text-xs text-slate-400">Lead quality & ICP fit</div>
            </div>

            <div className="absolute top-1/2 left-8 -translate-y-1/2 bg-slate-900/90 border border-slate-800 rounded-lg p-4 w-32 text-center">
              <div className="text-2xl mb-2">🤝</div>
              <div className="font-medium text-sm mb-1">Partners</div>
              <div className="text-xs text-slate-400">Co-marketing value</div>
            </div>

            <div className="absolute top-1/2 right-8 -translate-y-1/2 bg-slate-900/90 border border-slate-800 rounded-lg p-4 w-32 text-center">
              <div className="text-2xl mb-2">👥</div>
              <div className="font-medium text-sm mb-1">Attendees</div>
              <div className="text-xs text-slate-400">Value delivery & NPS</div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-2xl font-semibold mb-6">The Problem with Event Metrics Today</h2>

          <div className="space-y-4 mb-12 text-slate-200/80">
            <p>
              Event marketing teams are stuck defending MQL counts that don't tell the real story. You hit your numbers, but sales complains about lead quality. Attendees show up, but you don't know if they actually found value. <strong>Partners co-invest but you never ask if the event worked for them.</strong> Leadership wants ROI proof, but all you have are activity metrics.
            </p>
            <p>
              The Success Score solves this by combining hard Salesforce data with real feedback from <strong>all four stakeholders</strong> who matter most: your attendees, sales team, marketing team, <strong>and partners</strong>—then using AI to surface insights you can act on.
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
              <h3 className="font-semibold mb-3">2. Sales Team Feedback</h3>
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

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 relative">
              <span className="absolute top-4 right-4 text-xs bg-violet-500/20 text-violet-200 px-2 py-1 rounded-md font-medium">NEW</span>
              <div className="text-violet-400 mb-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-3">4. Partner Feedback</h3>
              <p className="text-sm text-slate-200/80">
                Your channel partners co-invest in events and co-generate pipeline. Their feedback reveals whether events drive co-marketing opportunities, whether attendees match their ICP, and if they'll support future events—predicting channel pipeline growth.
              </p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <div className="text-violet-400 mb-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-3">5. AI-Powered Insights</h3>
              <p className="text-sm text-slate-200/80">
                Claude AI analyzes verbatim feedback from all four stakeholders, surfaces patterns across events, predicts pipeline outcomes, and generates strategic recommendations—turning your 360° data into actionable intelligence.
              </p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <div className="text-violet-400 mb-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-3">6. Marketing Team Assessment</h3>
              <p className="text-sm text-slate-200/80">
                Your team's evaluation of execution quality, logistics, and strategic goal achievement. Captures operational excellence beyond metrics.
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
                Prove ROI with confidence. Show which events drive actual pipeline and customer value. Defend your budget with trusted data from all four stakeholders.
              </p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h3 className="font-semibold mb-3">For Sales & Partner Alignment</h3>
              <p className="text-sm text-slate-200/80">
                Stop the "your leads are garbage" conversation. When both sales and partners rate events highly, you know you're creating opportunities everyone can close. When partner scores are low, you get early warning before channel relationships suffer.
              </p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h3 className="font-semibold mb-3">For AI-Driven Optimization</h3>
              <p className="text-sm text-slate-200/80">
                AI analyzes feedback from all four perspectives to spot patterns you'd miss. "Partners consistently score webinars 15pts lower" or "Events with Partner Score &gt;80 generate 2.3x more channel pipeline." Learn faster, optimize smarter.
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
                  <li>✗ <strong>Partner feedback: 4/10</strong></li>
                </ul>
                <div className="text-2xl font-semibold text-rose-400">Success Score: 48</div>
              </div>

              <div className="bg-slate-950/50 border-2 border-emerald-500/30 rounded-xl p-6">
                <h4 className="font-medium mb-4">Event B: High Quality</h4>
                <ul className="space-y-2 text-sm text-slate-200/80 mb-4">
                  <li>✓ 80 MQLs generated</li>
                  <li>✓ $450K pipeline</li>
                  <li>✓ Sales feedback: 9/10</li>
                  <li>✓ Attendee satisfaction: 9/10</li>
                  <li>✓ <strong>Partner feedback: 8/10</strong></li>
                </ul>
                <div className="text-2xl font-semibold text-emerald-400">Success Score: 87</div>
              </div>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 mb-6">
              <div className="flex gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h4 className="font-semibold text-emerald-200 mb-2">AI Insight</h4>
                  <p className="text-sm text-slate-200/80">
                    Event B's high partner score (8/10) predicted future co-marketing success. Three partners requested follow-up events, generating an additional $800K in channel pipeline over 6 months—something Event A's vanity metrics completely missed.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-200/80">
              Traditional metrics say Event A was more successful - double the MQLs. But Event B's high Success Score shows it created real value across <strong>all four stakeholders</strong>: engaged prospects, quality leads sales wants to work, partners eager to co-market again, and flawless execution. Six months later, Event B drove 4x the closed-won revenue and strengthened channel relationships.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row justify-between gap-6 items-center">
            <div>
              <h2 className="text-xl font-semibold mb-2">See the complete picture of event success</h2>
              <p className="text-slate-300/80">
                Combine Salesforce data with feedback from Sales, Marketing, Attendees, and Partners—powered by AI
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0 items-center">
              <a href="https://momentum.datakarma.ai" className="bg-white text-slate-950 text-sm px-4 py-2 rounded-md font-medium inline-block hover:bg-slate-100">
                Start free
              </a>
              <a href="https://momentum.datakarma.ai" className="text-sm text-slate-100/80 hover:text-white whitespace-nowrap">
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
                <div className="h-8 w-8 rounded-md bg-violet-500/90 flex items-center justify-center text-sm font-bold">EK</div>
                <span className="font-semibold tracking-tight text-white">Event Karma</span>
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
            © 2025 Event Karma. Built for event marketing teams.
          </div>
        </div>
      </footer>
    </>
  );
}
