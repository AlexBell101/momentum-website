'use client';

import { Suspense, useEffect, useState } from 'react';
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

// Loading skeleton component
function PassDemoSkeleton() {
  return (
    <div className="bg-[#1a0d2e]/60 border border-purple-500/20 rounded-2xl p-8">
      <div className="animate-pulse">
        <div className="h-8 bg-purple-900/30 rounded w-3/4 mx-auto mb-4"></div>
        <div className="h-64 bg-purple-900/30 rounded mb-4"></div>
      </div>
    </div>
  );
}

// Main pass demo content that uses useSearchParams
function PassDemoContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
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
      setShowForm(false);

      // Generate pass data
      (async () => {
        const token = await buildDemoToken(emailLower, eventParam);
        const qr = `https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent(token)}`;
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

  if (isLoading) {
    return <PassDemoSkeleton />;
  }

  if (showForm) {
    return (
      <div className="bg-[#1a0d2e]/60 border border-purple-500/20 rounded-2xl p-8">
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
              className="w-full px-4 py-3 rounded-lg bg-[#0f0a1a] border border-purple-500/30 text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full ek-btn-gradient text-white font-medium py-3 px-6 rounded-lg transition-all"
          >
            Generate my pass
          </button>
        </form>
      </div>
    );
  }

  return (
    <>
      {/* Pass Card */}
      <div className="bg-[#1a0d2e]/60 border border-purple-500/20 rounded-2xl p-8 ek-glow">
        <div className="mb-6">
          <p className="text-xs text-purple-400 font-medium mb-2">EVENT</p>
          <h2 className="text-2xl font-semibold ek-gradient-text">Event Karma Demo</h2>
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
          className="w-full bg-white/10 hover:bg-white/20 backdrop-blur text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 border border-purple-500/30"
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
          className="mt-4 text-sm text-purple-400 hover:text-purple-300 transition-colors"
        >
          Try another email
        </button>
      </div>

      {/* What happens when scanned */}
      <div className="mt-10">
        <p className="text-center text-sm text-slate-400 mb-4">
          When your pass is scanned, you&apos;ll see:
        </p>

        {/* Entry Question Demo */}
        <div className="bg-[#1a0d2e]/60 border border-purple-500/20 rounded-2xl p-6 mb-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-emerald-400 text-sm font-medium">You&apos;re checked in!</p>
          </div>

          <p className="text-slate-200 font-medium mb-4">What do you most want from today?</p>

          <div className="space-y-2">
            {[
              'Learn new strategies',
              'Network with peers',
              'Evaluate solutions',
              'Support a relationship',
              'Just exploring'
            ].map((option, i) => (
              <label key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[#0f0a1a]/60 border border-purple-500/10 hover:border-purple-500/30 cursor-pointer transition-colors">
                <div className="w-4 h-4 rounded-full border-2 border-purple-400/50"></div>
                <span className="text-sm text-slate-300">{option}</span>
              </label>
            ))}
          </div>

          <div className="flex gap-3 mt-4">
            <button className="flex-1 text-sm py-2 px-4 rounded-lg text-slate-400 hover:text-slate-300 transition-colors">
              Skip
            </button>
            <button className="flex-1 ek-btn-gradient text-white text-sm py-2 px-4 rounded-lg font-medium">
              Continue
            </button>
          </div>
        </div>

        {/* Exit Question Demo */}
        <div className="bg-[#1a0d2e]/60 border border-purple-500/20 rounded-2xl p-6">
          <p className="text-xs text-purple-400 mb-2 font-medium">AT EXIT</p>
          <p className="text-slate-200 font-medium mb-4">Did you get what you came for?</p>

          <div className="flex justify-center gap-4 mb-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                className={`w-12 h-12 rounded-full border-2 text-lg font-medium transition-all ${
                  n === 4
                    ? 'bg-purple-500/30 border-purple-400 text-purple-200'
                    : 'border-purple-500/30 text-slate-400 hover:border-purple-500/50'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
          <div className="flex justify-between text-xs text-slate-500 px-2">
            <span>Not at all</span>
            <span>Absolutely</span>
          </div>

          <button className="w-full ek-btn-gradient text-white text-sm py-2 px-4 rounded-lg font-medium mt-4">
            Submit
          </button>
        </div>

        <p className="text-center text-xs text-slate-500 mt-4">
          Responses feed directly into your event&apos;s Success Score.
        </p>
      </div>

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
          <div className="mt-4 bg-[#1a0d2e]/40 border border-purple-500/20 rounded-xl p-6 text-left text-sm text-slate-300/80">
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/20 text-purple-300 flex items-center justify-center text-xs font-medium">1</span>
                <span><strong>Personalized passes</strong> are emailed to registrants from your marketing automation (Marketo, HubSpot).</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/20 text-purple-300 flex items-center justify-center text-xs font-medium">2</span>
                <span><strong>On scan</strong>, attendees answer one quick question about their goals. This takes 5 seconds.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/20 text-purple-300 flex items-center justify-center text-xs font-medium">3</span>
                <span><strong>At exit</strong>, a quick rating captures if they got what they came for. Instant Success Score input.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/20 text-purple-300 flex items-center justify-center text-xs font-medium">4</span>
                <span><strong>Attendance + feedback</strong> syncs to Salesforce Campaign Members when you publish.</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default function PassDemo() {
  return (
    <>
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <style jsx global>{`
        .ek-gradient-bg {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(168, 85, 247, 0.12) 50%, rgba(236, 72, 153, 0.1) 100%);
        }
        .ek-gradient-text {
          background: linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #EC4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ek-glow {
          box-shadow: 0 0 40px rgba(168, 85, 247, 0.3);
        }
        .ek-btn-gradient {
          background: linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #EC4899 100%);
        }
        .ek-btn-gradient:hover {
          background: linear-gradient(135deg, #9D6FFA 0%, #B96AF9 50%, #F084A8 100%);
        }
      `}</style>

      {/* Navigation */}
      <header>
        <div>
          <Link href="/" className="logo-container">
            <img src="/datakarma-ai-logo-white.svg" alt="Data Karma" className="logo-icon" />
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

      <main className="bg-[#0f0a1a] text-slate-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.2),_rgba(168,85,247,0.1)_40%,_transparent_70%)]"></div>
          <div className="relative mx-auto max-w-xl px-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img src="/eventkarma-logo.svg" alt="Event Karma" className="w-10 h-10" />
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight ek-gradient-text">
                Your Event Pass
              </h1>
            </div>
            <p className="text-slate-400 mb-8">
              This is a live demo. Use any email address to see how digital passes work.
            </p>

            <Suspense fallback={<PassDemoSkeleton />}>
              <PassDemoContent />
            </Suspense>

            {/* Back to Event Karma */}
            <div className="mt-12">
              <Link
                href="/"
                className="text-sm text-purple-400 hover:text-white transition-colors"
              >
                &larr; Back to Event Karma
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0f0a1a] py-12 border-t border-purple-500/10 text-sm text-slate-500">
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
          <div className="text-center pt-6 border-t border-purple-500/10">
            <p className="text-xs">Event Karma is a Data Karma product.</p>
            <p className="text-xs mt-2">© 2025 Data Karma. Calm, clear data & event enlightenment.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
