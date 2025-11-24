'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';

// Utility functions
function maskEmail(email: string): string {
  const [user, domain] = email.split('@');
  return (user ? user[0] : '') + '***@' + (domain || 'example.com');
}

async function sha256hex(s: string): Promise<string> {
  const buf = new TextEncoder().encode(s);
  const digest = await crypto.subtle.digest('SHA-256', buf);
  return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, '0')).join('');
}

async function buildDemoToken(email: string, cid: string): Promise<string> {
  const exp = Math.floor(Date.now() / 1000) + 10 * 60; // 10 minutes
  const jtiArray = new Uint8Array(8);
  crypto.getRandomValues(jtiArray);
  const jti = [...jtiArray].map(b => b.toString(16).padStart(2, '0')).join('');
  const hash = await sha256hex(email);
  const sub = hash.slice(0, 16);
  const payload = { sub, cid, exp, jti };
  return btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
}

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

function buildICS(event: string, email: string): string {
  const dt = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); // 3 days from now
  const end = new Date(dt.getTime() + 60 * 60 * 1000); // 1 hour duration
  const fmt = (d: Date) =>
    d.getUTCFullYear() +
    pad(d.getUTCMonth() + 1) +
    pad(d.getUTCDate()) +
    'T' +
    pad(d.getUTCHours()) +
    pad(d.getUTCMinutes()) +
    '00Z';
  const url = `https://www.datakarma.ai/pass-demo?event=${encodeURIComponent(event)}&e=${encodeURIComponent(email)}`;
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//DataKarma//EventKarma Demo//EN',
    'BEGIN:VEVENT',
    `UID:${event}@datakarma.ai`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(dt)}`,
    `DTEND:${fmt(end)}`,
    'SUMMARY:Event Karma Demo',
    `DESCRIPTION:Your pass: ${url}`,
    `URL:${url}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
}

// Track GA event
function trackEvent(eventName: string) {
  if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', eventName);
  }
}

export default function PassDemo() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [qrUrl, setQrUrl] = useState('');
  const [maskedEmail, setMaskedEmail] = useState('');
  const [icsData, setIcsData] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const eventParam = searchParams.get('event') || 'ek-demo';
    const emailParam = searchParams.get('e') || '';

    if (emailParam) {
      const emailLower = emailParam.toLowerCase().trim();
      setEmail(emailLower);
      setShowForm(false);

      // Generate pass data
      (async () => {
        const token = await buildDemoToken(emailLower, eventParam);
        const qr = `https://chart.googleapis.com/chart?cht=qr&chs=256x256&chl=${encodeURIComponent(token)}`;
        const ics = buildICS(eventParam, emailLower);

        setMaskedEmail(maskEmail(emailLower));
        setQrUrl(qr);
        setIcsData('data:text/calendar;charset=utf-8,' + encodeURIComponent(ics));
        setIsLoading(false);

        // Track page load with pass
        trackEvent('ek_pass_loaded');
      })();
    } else {
      setShowForm(true);
      setIsLoading(false);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputEmail.trim()) return;

    const eventParam = searchParams.get('event') || 'ek-demo';
    router.push(`/pass-demo?event=${encodeURIComponent(eventParam)}&e=${encodeURIComponent(inputEmail.trim())}`);
  };

  const handleDownloadICS = () => {
    trackEvent('ek_ics_download');
    const link = document.createElement('a');
    link.href = icsData;
    link.download = 'EventKarmaDemo.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            <a href="https://docs.event.datakarma.ai">Docs</a>
            <Link href="/trust">Trust</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="nav-actions">
            <a href="https://event.datakarma.ai" className="nav-cta">
              Start free
            </a>
          </div>
        </div>
      </header>

      <main className="bg-slate-950 text-slate-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),_transparent_55%)]"></div>
          <div className="relative mx-auto max-w-xl px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
              Your Event Pass
            </h1>
            <p className="text-slate-300/80 mb-8">
              This is a live demo. Use any email address to see how Universal Pass Links work.
            </p>

            {isLoading ? (
              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8">
                <div className="animate-pulse">
                  <div className="h-8 bg-slate-700 rounded w-3/4 mx-auto mb-4"></div>
                  <div className="h-64 bg-slate-700 rounded mb-4"></div>
                </div>
              </div>
            ) : showForm ? (
              /* Email Form */
              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2 text-left">
                      Enter your email to generate a pass
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={inputEmail}
                      onChange={(e) => setInputEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-violet-500 hover:bg-violet-400 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Generate my pass
                  </button>
                </form>
              </div>
            ) : (
              /* Pass Card */
              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8">
                <div className="mb-6">
                  <p className="text-xs text-violet-400 font-medium mb-2">EVENT</p>
                  <h2 className="text-2xl font-semibold">Event Karma Demo</h2>
                </div>

                <div className="mb-6">
                  <p className="text-xs text-slate-400 mb-1">ATTENDEE</p>
                  <p className="text-lg text-slate-200">{maskedEmail}</p>
                </div>

                {/* QR Code */}
                <div className="bg-white rounded-xl p-4 inline-block mb-6">
                  {qrUrl && (
                    <img
                      src={qrUrl}
                      alt="Event pass QR code"
                      width={256}
                      height={256}
                      className="block"
                      loading="lazy"
                    />
                  )}
                </div>

                <p className="text-xs text-slate-500 mb-6">
                  QR contains a short-lived token. No PII in code.
                </p>

                {/* Add to Calendar Button */}
                <button
                  onClick={handleDownloadICS}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Add to calendar
                </button>

                {/* Try another email */}
                <button
                  onClick={() => {
                    setShowForm(true);
                    setInputEmail('');
                    router.push('/pass-demo');
                  }}
                  className="mt-4 text-sm text-violet-400 hover:text-violet-300 transition-colors"
                >
                  Try another email
                </button>
              </div>
            )}

            {/* How this works accordion */}
            <div className="mt-8">
              <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-slate-300 mx-auto transition-colors"
              >
                <span>How this works</span>
                <svg
                  className={`w-4 h-4 transition-transform ${accordionOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {accordionOpen && (
                <div className="mt-4 bg-slate-900/30 border border-slate-800 rounded-xl p-6 text-left text-sm text-slate-300/80">
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500/20 text-violet-300 flex items-center justify-center text-xs font-medium">1</span>
                      <span><strong>Universal Pass Links (UPL)</strong> are emailed to registrants from your marketing automation (Marketo, HubSpot).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500/20 text-violet-300 flex items-center justify-center text-xs font-medium">2</span>
                      <span><strong>The QR code</strong> contains a short-lived, non-PII token. Staff scan it at the event using our PWA.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500/20 text-violet-300 flex items-center justify-center text-xs font-medium">3</span>
                      <span><strong>Check-in data</strong> syncs to Salesforce Campaign Members after you approve via the Publish Gate.</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Back to Event Karma */}
            <div className="mt-12">
              <Link
                href="/eventkarma"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                &larr; Back to Event Karma
              </Link>
            </div>
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
              <Link href="/eventkarma" className="hover:text-white">Event Karma</Link>
              <Link href="/eventkarma/pricing" className="hover:text-white">Pricing</Link>
              <a href="https://docs.event.datakarma.ai" className="hover:text-white">Docs</a>
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
