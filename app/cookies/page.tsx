'use client';

import Link from 'next/link';
import Script from 'next/script';

export default function Cookies() {
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
              Cookie Policy
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
                This Cookie Policy explains how DataKarma, Inc. ("Event Karma," "we," "us," or "our") uses cookies and similar technologies on our website and application. By using our services, you consent to the use of cookies as described in this policy.
              </p>
            </div>

            {/* What are cookies */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
              <p className="text-slate-200/80 mb-4">
                Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and understand how you use the site.
              </p>
              <p className="text-slate-200/80">
                We also use similar technologies like local storage and session storage for the same purposes.
              </p>
            </div>

            {/* Types of cookies */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-violet-300">Essential Cookies</h3>
                  <p className="text-slate-200/80 mb-2">
                    Required for the website to function. These cannot be disabled.
                  </p>
                  <ul className="list-disc list-inside text-slate-200/80 text-sm space-y-1">
                    <li>Authentication and session management</li>
                    <li>Security tokens (CSRF protection)</li>
                    <li>Load balancing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-violet-300">Functional Cookies</h3>
                  <p className="text-slate-200/80 mb-2">
                    Remember your preferences and settings.
                  </p>
                  <ul className="list-disc list-inside text-slate-200/80 text-sm space-y-1">
                    <li>Language preferences</li>
                    <li>Theme settings (dark/light mode)</li>
                    <li>Recently viewed items</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-violet-300">Analytics Cookies</h3>
                  <p className="text-slate-200/80 mb-2">
                    Help us understand how visitors use our site.
                  </p>
                  <ul className="list-disc list-inside text-slate-200/80 text-sm space-y-1">
                    <li>Page views and navigation paths</li>
                    <li>Time spent on pages</li>
                    <li>Error tracking</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third party */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
              <p className="text-slate-200/80 mb-4">
                We may use the following third-party services that set their own cookies:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-2 text-slate-300">Provider</th>
                      <th className="text-left py-2 text-slate-300">Purpose</th>
                      <th className="text-left py-2 text-slate-300">Privacy Policy</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-200/80">
                    <tr className="border-b border-slate-800">
                      <td className="py-2">Vercel Analytics</td>
                      <td className="py-2">Website analytics</td>
                      <td className="py-2"><a href="https://vercel.com/legal/privacy-policy" className="text-violet-400 hover:text-violet-300">Link</a></td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-2">Stripe</td>
                      <td className="py-2">Payment processing</td>
                      <td className="py-2"><a href="https://stripe.com/privacy" className="text-violet-400 hover:text-violet-300">Link</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Managing cookies */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
              <p className="text-slate-200/80 mb-4">
                You can control cookies through your browser settings:
              </p>
              <ul className="list-disc list-inside text-slate-200/80 space-y-2">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies</li>
                <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
              </ul>
              <p className="text-slate-200/80 mt-4 text-sm">
                Note: Disabling essential cookies may prevent you from using certain features of our service.
              </p>
            </div>

            {/* Updates */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
              <p className="text-slate-200/80">
                We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated "Last updated" date.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-slate-200/80 mb-4">
                Questions about our use of cookies?
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
