'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function Contact() {
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
            <a href="https://fss-app-iota.vercel.app/" className="nav-cta">
              Start free
            </a>
          </div>
        </div>
      </header>

      <main className="bg-slate-950 text-slate-50">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),_transparent_55%)]"></div>
          <div className="relative mx-auto max-w-6xl px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Get in Touch
            </h1>
            <p className="text-slate-200/80 text-lg max-w-2xl mx-auto">
              Questions about Momentum? Want to talk about your event measurement challenges? We're here to help.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="mx-auto max-w-4xl px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">General Inquiries</h3>
              <p className="text-slate-300/80 mb-4">
                Questions about Momentum, pricing, or how Data Karma works.
              </p>
              <a href="mailto:support@datakarma.ai" className="text-violet-400 hover:text-violet-300 font-medium">
                support@datakarma.ai
              </a>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">Sales & Demos</h3>
              <p className="text-slate-300/80 mb-4">
                Want to see Momentum in action or discuss enterprise needs?
              </p>
              <a href="mailto:support@datakarma.ai" className="text-violet-400 hover:text-violet-300 font-medium">
                support@datakarma.ai
              </a>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">Technical Support</h3>
              <p className="text-slate-300/80 mb-4">
                Already a customer? Get help with integration, setup, or technical issues.
              </p>
              <a href="mailto:support@datakarma.ai" className="text-violet-400 hover:text-violet-300 font-medium">
                support@datakarma.ai
              </a>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">Security & Compliance</h3>
              <p className="text-slate-300/80 mb-4">
                DPA requests, security questionnaires, or compliance questions.
              </p>
              <a href="mailto:support@datakarma.ai" className="text-violet-400 hover:text-violet-300 font-medium">
                support@datakarma.ai
              </a>
            </div>
          </div>
        </section>

        {/* Quick Start CTA */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold mb-3">Ready to get started?</h2>
            <p className="text-slate-300/80 mb-6">
              No need to wait for a reply—start free and explore Momentum on your own.
            </p>
            <a href="https://fss-app-iota.vercel.app/" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-6 py-3 rounded-lg font-medium inline-block transition-all">
              Start free
            </a>
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
            <p className="text-xs mt-2">© 2025 Data Karma. Built for field & event marketing teams.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
