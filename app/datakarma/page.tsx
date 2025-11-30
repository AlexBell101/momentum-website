'use client';

import { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to actual waitlist service
    console.log('Waitlist signup:', email);
    setSubmitted(true);
  };

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
        .replica-gradient-text {
          background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Navigation */}
      <header>
        <div>
          <Link href="/datakarma" className="logo-container">
            <img src="/datakarma-ai-logo-white.svg" alt="Data Karma" className="logo-icon" />
          </Link>
          <nav>
            <a href="https://eventkarma.ai">Event Karma</a>
            <a href="#replica">Replica</a>
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

      <main className="bg-slate-950 text-slate-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),_transparent_55%)]"></div>
          <div className="relative mx-auto max-w-6xl px-4 text-center">
            <p className="text-sm text-violet-400 font-medium mb-4">Data Karma AI</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Tools for Salesforce teams
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We build software that makes Salesforce better—from event operations to test data generation.
            </p>
          </div>
        </section>

        {/* Two Products */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Event Karma Card */}
            <a
              href="https://eventkarma.ai"
              className="group bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <img src="/eventkarma-logo.svg" alt="Event Karma" className="w-10 h-10" />
                <div>
                  <h2 className="text-2xl font-semibold">Event Karma</h2>
                  <p className="text-sm text-purple-400">Live</p>
                </div>
              </div>
              <p className="text-3xl font-semibold mb-4 ek-gradient-text">
                Event analytics that prove ROI.
              </p>
              <p className="text-slate-300 mb-6">
                Combines your KPIs with qualitative survey feedback into a single success metric—so you can evaluate events and know which ones to repeat.
              </p>
              <ul className="space-y-2 text-sm text-slate-400 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                  Registration & check-in
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                  Entry & exit surveys
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                  Salesforce & HubSpot sync
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                  Success Score analytics
                </li>
              </ul>
              <span className="inline-flex items-center gap-2 text-purple-400 group-hover:text-purple-300 font-medium">
                Explore Event Karma
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Replica Card */}
            <div className="bg-gradient-to-br from-blue-500/10 to-violet-500/5 border border-blue-500/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">Replica</h2>
                  <p className="text-sm text-blue-400">Coming Soon</p>
                </div>
              </div>
              <p className="text-3xl font-semibold mb-4 replica-gradient-text">
                Realistic Salesforce test data, on demand.
              </p>
              <p className="text-slate-300 mb-6">
                Generate production-quality CRM data for your sandboxes, scratch orgs, and demos. Stop wasting hours with fake data that looks fake.
              </p>
              <ul className="space-y-2 text-sm text-slate-400 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  AI-generated realistic names
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  Proper object relationships
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  Multi-touch attribution
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  Ready in minutes
                </li>
              </ul>
              <a
                href="#replica"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
              >
                Learn more & join waitlist
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Replica Deep Dive */}
        <section id="replica" className="mx-auto max-w-6xl px-4 py-20">
          <div className="text-center mb-16">
            <p className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 text-sm text-blue-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
              Coming Soon
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              <span className="replica-gradient-text">Replica</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Realistic Salesforce test data, on demand. Data that passes the "screenshot test."
            </p>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Looks Real</h3>
              <p className="text-slate-400 text-sm">
                AI-generated company names, culturally appropriate contacts, and industry-specific patterns. Data that passes the "screenshot test."
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Behaves Real</h3>
              <p className="text-slate-400 text-sm">
                Proper relationships between Accounts, Contacts, Opportunities, and Campaigns. Buying committees. Campaign attribution. The works.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Ready in Minutes</h3>
              <p className="text-slate-400 text-sm">
                Connect your Salesforce org, pick a template, click generate. From empty sandbox to realistic CRM in under 5 minutes.
              </p>
            </div>
          </div>

          {/* What Replica Generates */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">What Replica Generates</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Accounts with hierarchy and regional distribution
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Contacts with realistic buying committees
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Opportunities with stage progression and attribution
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Campaigns tied to real-world event patterns
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Leads, Tasks, and Events
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multi-touch attribution (CampaignInfluence)
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Built For</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Developers testing integrations
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Admins building demos
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Consultants running workshops
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  QA teams needing realistic test data
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Anyone tired of "Test Account 1"
                </li>
              </ul>
            </div>
          </div>

          {/* Waitlist CTA */}
          <div className="bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/30 rounded-2xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🚧</span>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Replica is in private beta</h3>
            <p className="text-slate-300 mb-8 max-w-md mx-auto">
              Join the waitlist to get early access and help shape the product.
            </p>

            {!submitted ? (
              <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-400 hover:to-violet-400 text-white px-6 py-3 rounded-lg font-medium transition-all"
                >
                  Join Waitlist
                </button>
              </form>
            ) : (
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 max-w-md mx-auto">
                <p className="text-green-400 font-medium">You're on the list! We'll be in touch soon.</p>
              </div>
            )}

            <p className="text-xs text-slate-500 mt-6">
              Built by Data Karma • replica.datakarma.ai
            </p>
          </div>
        </section>

        {/* Trust */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Security & Trust</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Enterprise SSO, least-privilege Salesforce scopes, DPA support, uptime transparency.
            </p>
            <Link href="/trust" className="text-violet-400 hover:text-violet-300 font-medium">
              Visit Trust Center →
            </Link>
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
              <a href="https://eventkarma.ai" className="hover:text-white">Event Karma</a>
              <a href="#replica" className="hover:text-white">Replica</a>
              <Link href="/trust" className="hover:text-white">Trust</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
            </nav>
          </div>
          <div className="text-center pt-6 border-t border-slate-900">
            <p className="text-xs">© 2025 Data Karma AI LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
