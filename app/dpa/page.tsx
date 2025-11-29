'use client';

import Link from 'next/link';
import Script from 'next/script';

export default function DPA() {
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

      <main className="bg-slate-950 text-slate-50">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),_transparent_55%)]"></div>
          <div className="relative mx-auto max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Data Processing Agreement
            </h1>
            <p className="text-slate-200/80">
              For customers who require a DPA for compliance
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-4xl px-4 py-16">
          <div className="prose prose-invert prose-slate max-w-none space-y-12">

            {/* Overview */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">What is a DPA?</h2>
              <p className="text-slate-200/80 mb-4">
                A Data Processing Agreement (DPA) is a legally binding contract between a data controller (you) and a data processor (Event Karma). It ensures that we handle your data in compliance with data protection regulations like GDPR.
              </p>
              <p className="text-slate-200/80">
                Our DPA covers the nature and purpose of processing, types of personal data, data subject categories, security measures, and sub-processor disclosures.
              </p>
            </div>

            {/* What's covered */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Our DPA Covers</h2>
              <ul className="list-disc list-inside text-slate-200/80 space-y-2">
                <li><strong>Processing scope:</strong> What data we process and why</li>
                <li><strong>Security measures:</strong> Technical and organizational safeguards</li>
                <li><strong>Sub-processors:</strong> Third parties we use to deliver the service</li>
                <li><strong>Data subject rights:</strong> How we help you respond to requests</li>
                <li><strong>Breach notification:</strong> Our process for notifying you of incidents</li>
                <li><strong>Data deletion:</strong> What happens when you terminate the service</li>
                <li><strong>Audit rights:</strong> Your ability to verify our compliance</li>
              </ul>
            </div>

            {/* Sub-processors */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Sub-Processors</h2>
              <p className="text-slate-200/80 mb-4">
                We use the following sub-processors to deliver our services:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 text-slate-300">Provider</th>
                      <th className="text-left py-2 text-slate-300">Purpose</th>
                      <th className="text-left py-2 text-slate-300">Location</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-200/80">
                    <tr className="border-b border-slate-800">
                      <td className="py-2">Vercel</td>
                      <td className="py-2">Web hosting & edge network</td>
                      <td className="py-2">United States</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2">Render</td>
                      <td className="py-2">Application hosting</td>
                      <td className="py-2">United States</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2">Stripe</td>
                      <td className="py-2">Payment processing</td>
                      <td className="py-2">United States</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2">Resend</td>
                      <td className="py-2">Transactional email</td>
                      <td className="py-2">United States</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-200/80 mt-4 text-sm">
                All sub-processors maintain SOC 2 Type II certification and have signed DPAs with us.
              </p>
            </div>

            {/* Request DPA */}
            <div className="bg-gradient-to-r from-violet-900/30 to-purple-900/30 border border-violet-500/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Request a DPA</h2>
              <p className="text-slate-200/80 mb-6">
                Need a signed DPA for your compliance requirements? We're happy to provide one. Just reach out and we'll send it over.
              </p>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600 hover:from-purple-500 hover:via-violet-500 hover:to-pink-500 text-white px-6 py-3 rounded-lg font-medium inline-block transition-all"
              >
                Request DPA
              </Link>
              <p className="text-slate-400 text-sm mt-4">
                Typical turnaround: 1-2 business days
              </p>
            </div>

            {/* Questions */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Questions?</h2>
              <p className="text-slate-200/80 mb-4">
                For questions about our data processing practices or to discuss specific compliance requirements:
              </p>
              <div className="text-slate-200/80 space-y-1 text-sm">
                <p><strong>Email:</strong> <a href="mailto:support@datakarma.ai" className="text-violet-400 hover:text-violet-300">support@datakarma.ai</a></p>
              </div>
            </div>

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
              <Link href="/" className="hover:text-white">Home</Link>
              <Link href="/pricing" className="hover:text-white">Pricing</Link>
              <Link href="/trust" className="hover:text-white">Trust</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/terms" className="hover:text-white">Terms</Link>
            </nav>
          </div>
          <div className="text-center pt-6 border-t border-slate-900">
            <p className="text-xs">© 2025 DataKarma, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
