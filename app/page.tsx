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
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),_transparent_55%)]"></div>
          <div className="relative mx-auto max-w-6xl px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
              The event marketing scorecard
            </h1>
            <p className="text-xl text-slate-200/80 max-w-3xl mx-auto mb-8">
              Data Karma builds products that help marketers run fewer, better events. Our flagship, Momentum, combines survey signal, partner feedback, and Salesforce outcomes into one Event Success Score.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/momentum" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-6 py-3 rounded-lg font-medium inline-block transition-all">
                Explore Momentum
              </Link>
              <Link href="/contact" className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium inline-block transition-colors">
                Talk to us
              </Link>
            </div>
          </div>
        </section>

        {/* Why Data Karma */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold mb-12 text-center">Why Data Karma</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">Outcome-first scoring</h3>
              <p className="text-slate-300/80">
                Align events to pipeline, influence, and quality—not just registrations.
              </p>
            </div>
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">Integrated where you work</h3>
              <p className="text-slate-300/80">
                Salesforce managed app, Marketo patterns, Slack alerts.
              </p>
            </div>
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">Partner-ready</h3>
              <p className="text-slate-300/80">
                Capture and weight partner feedback alongside sales and attendee signal.
              </p>
            </div>
          </div>
        </section>

        {/* Our Product */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">Momentum — the Event Success Platform</h2>
            <p className="text-lg text-slate-300/80 mb-8 max-w-2xl mx-auto">
              Score every event the same way, compare programs apples-to-apples, and know what to repeat, resize, or pause.
            </p>
            <Link href="/momentum" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-6 py-3 rounded-lg font-medium inline-block transition-all">
              See Momentum
            </Link>
          </div>
        </section>

        {/* Trust */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Security & Trust</h2>
            <p className="text-lg text-slate-300/80 mb-6 max-w-2xl mx-auto">
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
