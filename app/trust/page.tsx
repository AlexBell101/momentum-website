'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function Trust() {
  useEffect(() => {
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
            <div className="flex items-center gap-3">
              <img src="/eventkarma-logo.svg" alt="Event Karma" className="w-10 h-10" />
              <span className="text-lg font-semibold text-white">Event Karma</span>
            </div>
          </Link>
          <nav>
            <Link href="/">Event Karma</Link>
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

      <main className="bg-slate-950 text-slate-50">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),_transparent_55%)]"></div>
          <div className="relative mx-auto max-w-6xl px-4">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Trust & Security
            </h1>
            <p className="text-slate-200 text-lg max-w-3xl">
              We take security seriously. Event Karma is built on trusted, enterprise-grade cloud infrastructure with industry-standard protections.
            </p>
          </div>
        </section>

        {/* Security Features */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">Encrypted in transit & at rest</h3>
              <p className="text-slate-200">
                All data is encrypted using TLS 1.2+ in transit and AES-256 at rest. Your event data is protected end-to-end.
              </p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">SOC 2 compliant infrastructure</h3>
              <p className="text-slate-200">
                Event Karma runs on cloud infrastructure that maintains SOC 2 Type II certification, ensuring rigorous security controls and auditing.
              </p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">Secure Salesforce integration</h3>
              <p className="text-slate-200">
                We use OAuth 2.0 for Salesforce connections. You control exactly which permissions to grant, and you can revoke access at any time.
              </p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">US-based data hosting</h3>
              <p className="text-slate-200">
                All data is stored in US-based data centers with enterprise-grade physical and network security.
              </p>
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Compliance & Legal</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Data Processing Agreement (DPA)</h3>
                <p className="text-sm text-slate-200 mb-3">
                  Need a DPA for compliance? We're happy to provide one. Just reach out.
                </p>
                <Link href="/contact" className="text-violet-400 hover:text-violet-300 text-sm font-medium">
                  Request DPA →
                </Link>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Privacy Policy</h3>
                <p className="text-sm text-slate-200 mb-3">
                  We don't sell your data. Period. Read our privacy policy for full details on how we handle your information.
                </p>
                <Link href="/privacy" className="text-violet-400 hover:text-violet-300 text-sm font-medium">
                  Read Privacy Policy →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold mb-3">Security questions?</h2>
            <p className="text-slate-200 mb-6">
              We're happy to answer questions about our security practices or complete your security questionnaire.
            </p>
            <Link href="/contact" className="bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600 hover:from-purple-500 hover:via-violet-500 hover:to-pink-500 text-white px-6 py-3 rounded-lg font-medium inline-block transition-all">
              Contact us
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900 text-sm text-slate-500">
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
          <div className="text-center pt-6 border-t border-slate-900">
            <p className="text-xs">Event Karma is a Data Karma product.</p>
            <p className="text-xs mt-2">© 2025 Data Karma. Built for event marketing teams.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
