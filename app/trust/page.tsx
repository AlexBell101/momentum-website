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
              Data Karma is built with enterprise security and compliance in mind. We protect your data and respect your privacy.
            </p>
          </div>
        </section>

        {/* Security Features */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">Enterprise SSO</h3>
              <p className="text-slate-200 mb-4">
                Single sign-on with your identity provider for secure, centralized access control.
              </p>
              <p className="text-xs text-slate-500">Available as add-on; included in Enterprise</p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">Least-privilege Salesforce access</h3>
              <p className="text-slate-200">
                Our managed Salesforce app requests only the minimum permissions needed. No write access to your core objects without explicit configuration.
              </p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">Data residency</h3>
              <p className="text-slate-200">
                US-based infrastructure by default. Regional data residency available on request for compliance requirements.
              </p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">Uptime & transparency</h3>
              <p className="text-slate-200 mb-4">
                Real-time status page, incident history, and proactive notifications for any service impacts.
              </p>
              <p className="text-xs text-slate-500">99.9% uptime SLA available</p>
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
                  GDPR-compliant DPA available on request. Covers data processing, sub-processors, and security commitments.
                </p>
                <Link href="/contact" className="text-violet-400 hover:text-violet-300 text-sm font-medium">
                  Request DPA →
                </Link>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Privacy Policy</h3>
                <p className="text-sm text-slate-200 mb-3">
                  Transparent data practices. We don't sell your data, and we minimize retention.
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
              Our team is happy to answer specific security and compliance questions.
            </p>
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-6 py-3 rounded-lg font-medium inline-block transition-all">
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
