'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function Pricing() {
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
            <img src="/favicon.svg" alt="Momentum" className="logo-icon" />
            <span className="logo-text">MOMENTUM</span>
          </Link>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/how-it-works">How it works</Link>
            <Link href="/integrations">Integrations</Link>
            <Link href="/pricing">Pricing</Link>
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
          <div className="relative mx-auto max-w-6xl px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-slate-200/80 text-lg max-w-2xl mx-auto">
              Stop guessing if your field marketing works. Start measuring what matters.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="mx-auto max-w-6xl px-4 py-8 md:py-12">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-2">Free</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-slate-400">/month</span>
              </div>
              <p className="text-sm text-slate-300/80 mb-6">Perfect for testing</p>

              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Up to 5 users</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Up to 10 events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Basic Success Score calculations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Email survey invitations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Standard support</span>
                </li>
              </ul>

              <a href="https://fss-app-iota.vercel.app/" className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-lg font-medium transition-colors">
                Get Started Free
              </a>
            </div>

            {/* Pro Plan - Highlighted */}
            <div className="bg-slate-900/30 border-2 border-violet-500/50 rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>

              <h3 className="text-2xl font-semibold mb-2">Pro</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">$399</span>
                <span className="text-slate-400">/month</span>
              </div>
              <p className="text-sm text-slate-300/80 mb-2">For serious field marketing teams</p>
              <p className="text-xs text-violet-300 mb-6">Annual: $3,990/year (save $798)</p>

              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong>Unlimited users</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong>Unlimited events</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Advanced Success Score analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Salesforce integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Custom survey templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>AI-powered insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Predictive scoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Executive scorecards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Export capabilities</span>
                </li>
              </ul>

              <a href="https://fss-app-iota.vercel.app/" className="block w-full text-center bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white py-3 rounded-lg font-medium transition-all">
                Start 14-Day Trial
              </a>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Why $399/month is a no-brainer</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium mb-4 text-rose-300">Replaces:</h3>
                <ul className="space-y-2 text-sm text-slate-300/80">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">❌</span>
                    <span>Survey tools ($99/mo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">❌</span>
                    <span>Spreadsheet chaos (hours/week)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">❌</span>
                    <span>Manual Salesforce reporting (hours/week)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">❌</span>
                    <span>Guesswork on event ROI (priceless)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-4 text-green-300">Delivers:</h3>
                <ul className="space-y-2 text-sm text-slate-300/80">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>Single source of truth for field marketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>Automated ROI calculations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>AI-powered predictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span>Executive-ready reports in seconds</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-800 grid md:grid-cols-2 gap-6 text-center">
              <div>
                <p className="text-sm text-slate-400">Time Saved</p>
                <p className="text-2xl font-semibold text-violet-300">10-20 hours/month</p>
                <p className="text-xs text-slate-500">on reporting</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">ROI</p>
                <p className="text-2xl font-semibold text-violet-300">Optimize your budget</p>
                <p className="text-xs text-slate-500">$50k-500k/year event spend</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Can I start with Free and upgrade later?</h3>
              <p className="text-sm text-slate-300/80">Yes! Start free, upgrade anytime. All your data comes with you.</p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
              <h3 className="font-semibold mb-2">What's included in the 14-day trial?</h3>
              <p className="text-sm text-slate-300/80">Full Pro access. No credit card required. No automatic charges.</p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
              <h3 className="font-semibold mb-2">How does Salesforce integration work?</h3>
              <p className="text-sm text-slate-300/80">Connect once, sync automatically. Pull campaign data, opportunities, and contacts directly into Momentum.</p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Do you offer annual pricing?</h3>
              <p className="text-sm text-slate-300/80">Yes! Save $798/year with annual billing ($3,990/year vs $4,788/year monthly).</p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
              <h3 className="font-semibold mb-2">What if I need custom features or enterprise support?</h3>
              <p className="text-sm text-slate-300/80">Contact us for custom pricing, SSO, SLA, and dedicated support.</p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
              <p className="text-sm text-slate-300/80">Yes. No contracts, cancel anytime from your billing page.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold mb-3">Ready to measure what matters?</h2>
            <p className="text-slate-300/80 mb-6 max-w-2xl mx-auto">
              Start free or jump into Pro with a 14-day trial. No credit card required.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://fss-app-iota.vercel.app/" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-6 py-3 rounded-lg font-medium inline-block transition-all">
                Start 14-Day Trial
              </a>
              <a href="https://fss-app-iota.vercel.app/" className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium inline-block transition-colors">
                Get Started Free
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
                <img src="/favicon.svg" alt="Momentum" className="h-8 w-8" />
                <span className="font-bold tracking-tight text-white uppercase" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.025em' }}>MOMENTUM</span>
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
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
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
