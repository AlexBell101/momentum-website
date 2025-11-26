'use client';

import Link from 'next/link';
import Script from 'next/script';

export default function Terms() {
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
              Terms of Service
            </h1>
            <p className="text-slate-200/80">
              Last updated: November 26, 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-4xl px-4 py-16">
          <div className="prose prose-invert prose-slate max-w-none space-y-12">

            {/* Introduction */}
            <div>
              <p className="text-slate-200/80 mb-4">
                These Terms of Service ("Terms") govern your access to and use of Event Karma, a product of DataKarma, Inc. ("Company," "we," "us," or "our"). By accessing or using our services, you agree to be bound by these Terms.
              </p>
              <p className="text-slate-200/80">
                If you are using Event Karma on behalf of an organization, you represent that you have authority to bind that organization to these Terms.
              </p>
            </div>

            {/* 1. Services */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">1. Description of Services</h2>
              <p className="text-slate-200/80 mb-4">
                Event Karma is an event marketing analytics platform that helps B2B teams measure event ROI, collect attendee feedback, and sync data with Salesforce. Our services include:
              </p>
              <ul className="list-disc list-inside text-slate-200/80 space-y-2">
                <li>Event registration and check-in management</li>
                <li>Attendee survey and feedback collection</li>
                <li>CRM integration (Salesforce)</li>
                <li>Analytics and reporting dashboards</li>
                <li>Digital event passes</li>
              </ul>
            </div>

            {/* 2. Account */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">2. Account Registration</h2>
              <p className="text-slate-200/80 mb-4">
                To use Event Karma, you must create an account. You agree to:
              </p>
              <ul className="list-disc list-inside text-slate-200/80 space-y-2">
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly notify us of any unauthorized access</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </div>

            {/* 3. Acceptable Use */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">3. Acceptable Use</h2>
              <p className="text-slate-200/80 mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-slate-200/80 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights of others</li>
                <li>Upload malicious code or attempt to compromise our systems</li>
                <li>Use the service to send spam or unsolicited communications</li>
                <li>Resell or redistribute the service without authorization</li>
                <li>Attempt to reverse engineer or extract source code</li>
              </ul>
            </div>

            {/* 4. Data */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">4. Your Data</h2>
              <p className="text-slate-200/80 mb-4">
                You retain ownership of all data you submit to Event Karma ("Your Data"). You grant us a limited license to process Your Data solely to provide the services. We will:
              </p>
              <ul className="list-disc list-inside text-slate-200/80 space-y-2">
                <li>Not sell Your Data to third parties</li>
                <li>Process Your Data in accordance with our <Link href="/privacy" className="text-violet-400 hover:text-violet-300">Privacy Policy</Link></li>
                <li>Maintain appropriate security measures</li>
                <li>Allow you to export or delete Your Data upon request</li>
              </ul>
            </div>

            {/* 5. Payment */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
              <p className="text-slate-200/80 mb-4">
                For paid plans:
              </p>
              <ul className="list-disc list-inside text-slate-200/80 space-y-2">
                <li>Fees are billed in advance on a monthly or annual basis</li>
                <li>All fees are non-refundable except as required by law</li>
                <li>We may change pricing with 30 days notice</li>
                <li>You are responsible for applicable taxes</li>
              </ul>
            </div>

            {/* 6. Termination */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
              <p className="text-slate-200/80 mb-4">
                You may cancel your account at any time from your account settings. We may suspend or terminate your account if you violate these Terms. Upon termination:
              </p>
              <ul className="list-disc list-inside text-slate-200/80 space-y-2">
                <li>Your right to use the service ends immediately</li>
                <li>We will retain Your Data for 30 days, after which it will be deleted</li>
                <li>You may request a data export before deletion</li>
              </ul>
            </div>

            {/* 7. Disclaimers */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">7. Disclaimers</h2>
              <p className="text-slate-200/80 mb-4">
                THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-slate-200/80">
                We do not guarantee that the service will be uninterrupted, error-free, or completely secure.
              </p>
            </div>

            {/* 8. Limitation of Liability */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
              <p className="text-slate-200/80 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM THESE TERMS OR YOUR USE OF THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
              <p className="text-slate-200/80">
                WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
              </p>
            </div>

            {/* 9. Changes */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
              <p className="text-slate-200/80">
                We may update these Terms from time to time. We will notify you of material changes via email or through the service. Continued use after changes constitutes acceptance of the updated Terms.
              </p>
            </div>

            {/* 10. Contact */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">10. Contact</h2>
              <p className="text-slate-200/80 mb-4">
                Questions about these Terms? Contact us:
              </p>
              <div className="text-slate-200/80 space-y-1 text-sm">
                <p><strong>Email:</strong> <a href="mailto:support@datakarma.ai" className="text-violet-400 hover:text-violet-300">support@datakarma.ai</a></p>
                <p><strong>Address:</strong> DataKarma, Inc., 440 Strafer St, Cincinnati, OH 45226</p>
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
