'use client';

import Link from 'next/link';
import Script from 'next/script';

export default function HeroMockup() {
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

        @keyframes gentle-bob {
          0%, 100% { transform: translateY(0) rotate(-10deg); }
          50% { transform: translateY(-3px) rotate(-10deg); }
        }
        @keyframes wisp {
          0% { transform: translateY(0) translateX(0); opacity: 0.6; }
          50% { transform: translateY(-10px) translateX(3px); opacity: 0.3; }
          100% { transform: translateY(-20px) translateX(-2px); opacity: 0; }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        .animate-bob { animation: gentle-bob 4s ease-in-out infinite; }
        .animate-wisp { animation: wisp 3s ease-out infinite; }
        .animate-sparkle { animation: sparkle 2s ease-in-out infinite; }
        .animate-sparkle-delayed { animation: sparkle 2s ease-in-out infinite 0.7s; }

        .line-drawing {
          stroke-linecap: round;
          stroke-linejoin: round;
        }
      `}</style>

      {/* Navigation */}
      <header>
        <div>
          <Link href="/" className="logo-container">
            <div className="flex items-center gap-3">
              <img src="/eventkarma-logo.svg" alt="Event Karma" className="w-10 h-10" />
              <span className="text-lg font-semibold text-white">Event Karma</span>
              <svg className="w-4 h-4 ml-1.5 opacity-70" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3c0 4.97-4.03 9-9 9 4.97 0 9 4.03 9 9 0-4.97 4.03-9 9-9-4.97 0-9-4.03-9-9z"
                  fill="url(#karmaGrad)"
                />
                <defs>
                  <linearGradient id="karmaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
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

      <main className="bg-[#0f0a1a] text-slate-50">
        {/* Mockup Label */}
        <div className="bg-yellow-500/20 border-b border-yellow-500/30 py-2 text-center">
          <p className="text-yellow-300 text-sm font-medium">
            🎨 HERO MOCKUP — <Link href="/" className="underline hover:text-white">View current homepage</Link>
          </p>
        </div>

        {/* Hero Section - Clean, Typography-Focused */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.2),_rgba(168,85,247,0.1)_40%,_transparent_70%)]"></div>
          <div className="relative mx-auto max-w-5xl px-4 text-center">
            {/* Small badge */}
            <p className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/30 px-4 py-1.5 text-sm text-purple-200 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Event analytics for B2B teams
            </p>

            {/* Main headline - Bold and clear */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Finally know which events<br />
              <span className="ek-gradient-text">drive pipeline.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-4">
              Event Karma captures every touchpoint—from registration to feedback—and syncs it all to Salesforce. No spreadsheets. No guessing.
            </p>

            {/* Tagline with karma platter */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <p className="text-lg font-semibold ek-gradient-text">
                Pipeline driving events: served.
              </p>
              {/* Small Karma Platter Icon */}
              <svg width="50" height="35" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="line-drawing">
                {/* Wisps */}
                <path d="M100 40 Q105 28, 98 18" stroke="url(#heroGrad)" strokeWidth="2" fill="none" className="animate-wisp"/>
                {/* Cloche lifted */}
                <g className="animate-bob" style={{transformOrigin: '100px 60px'}}>
                  <g transform="translate(15, 0) rotate(-10, 85, 60)">
                    <path d="M50 75 Q50 50, 85 50 Q120 50, 120 75" stroke="url(#heroGrad)" strokeWidth="3" fill="none"/>
                    <circle cx="85" cy="47" r="4" fill="#A855F7"/>
                  </g>
                </g>
                {/* Plate */}
                <ellipse cx="100" cy="100" rx="55" ry="10" stroke="url(#heroGrad)" strokeWidth="3" fill="none"/>
                {/* Bar graph */}
                <g opacity="0.9">
                  <rect x="75" y="88" width="8" height="10" rx="1" fill="#8B5CF6"/>
                  <rect x="88" y="82" width="8" height="16" rx="1" fill="#EC4899"/>
                  <rect x="101" y="85" width="8" height="13" rx="1" fill="#A855F7"/>
                  <rect x="114" y="89" width="8" height="9" rx="1" fill="#8B5CF6"/>
                </g>
                <defs>
                  <linearGradient id="heroGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6"/>
                    <stop offset="50%" stopColor="#A855F7"/>
                    <stop offset="100%" stopColor="#EC4899"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* CTAs - Prominent and centered */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a
                href="https://app.eventkarma.ai"
                className="ek-btn-gradient text-white px-8 py-4 rounded-lg font-semibold inline-block transition-all text-base"
              >
                Start free
              </a>
              <a
                href="/contact"
                className="bg-white/10 hover:bg-white/15 backdrop-blur px-8 py-4 rounded-lg font-semibold inline-block border border-purple-500/30 text-base"
              >
                Book a demo
              </a>
            </div>

            {/* Social proof - Trust indicators */}
            <div className="flex flex-col items-center gap-3">
              <p className="text-xs text-slate-500 uppercase tracking-wider">Trusted by B2B event teams at</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {/* Placeholder company logos - text for now */}
                <span className="text-slate-400 text-sm font-medium">SaaS Companies</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400 text-sm font-medium">Tech Startups</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400 text-sm font-medium">Enterprise Teams</span>
              </div>
            </div>
          </div>
        </section>

        {/* Product Screenshot - Hero visual */}
        <section className="mx-auto max-w-6xl px-4 -mt-4 mb-8">
          <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-2xl p-4 overflow-hidden ek-glow relative">
            <img
              src="/Event Karma Home Page.png"
              alt="Event Karma dashboard showing event analytics and ROI metrics"
              className="w-full rounded-lg"
            />
            {/* Floating sparkles */}
            <svg className="absolute top-6 right-8 w-4 h-4 animate-sparkle" viewBox="0 0 24 24" fill="none">
              <path d="M12 2l0 4M12 18l0 4M2 12l4 0M18 12l4 0M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" stroke="#EC4899" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <svg className="absolute top-12 left-10 w-3 h-3 animate-sparkle-delayed" viewBox="0 0 24 24" fill="none">
              <path d="M12 2l0 4M12 18l0 4M2 12l4 0M18 12l4 0" stroke="#A855F7" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <svg className="absolute bottom-10 right-16 w-3 h-3 animate-sparkle" viewBox="0 0 24 24" fill="none">
              <path d="M12 2l0 4M12 18l0 4M2 12l4 0M18 12l4 0" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </section>

        {/* Sample lower section to show video placement */}
        <section className="mx-auto max-w-4xl px-4 py-16 text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/30 px-4 py-1.5 text-sm text-purple-200 mb-6">
            The transformation
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
            Stop chasing spreadsheets.<br />
            <span className="ek-gradient-text">Start knowing what works.</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg mb-8">
            Event Karma captures every interaction—from the first registration to the final follow-up—and connects it all to Salesforce. No manual syncs. No guessing.
          </p>
        </section>

        {/* Video Section - Moved here */}
        <section className="mx-auto max-w-6xl px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-3">See Event Karma in action</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Watch how easy it is to manage events, capture feedback, and sync everything to Salesforce.
            </p>
          </div>
          <div className="bg-[#1a0d2e]/60 border border-purple-500/20 rounded-2xl overflow-hidden ek-glow max-w-4xl mx-auto">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{ display: 'block' }}
              onLoadedMetadata={(e) => {
                const video = e.target as HTMLVideoElement;
                video.playbackRate = 1.25;
              }}
            >
              <source src="/EventKarma-App.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* End of mockup indicator */}
        <section className="mx-auto max-w-4xl px-4 py-16 text-center">
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
            <p className="text-slate-400 mb-4">— End of Hero Mockup —</p>
            <p className="text-slate-500 text-sm mb-6">
              The rest of the page (value props, results, AI insights, pricing, etc.) would continue below.
            </p>
            <Link
              href="/"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              ← Back to current homepage
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0f0a1a] py-12 border-t border-purple-500/10 text-sm text-slate-500">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-xs">Hero Mockup Page — Event Karma</p>
        </div>
      </footer>
    </>
  );
}
