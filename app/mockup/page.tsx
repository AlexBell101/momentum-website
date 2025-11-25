'use client';

import Script from 'next/script';

export default function Mockup() {
  return (
    <>
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <style jsx global>{`
        .ek-gradient-text {
          background: linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #EC4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ek-btn-gradient {
          background: linear-gradient(135deg, #8B5CF6 0%, #A855F7 50%, #EC4899 100%);
        }

        /* Animations */
        @keyframes float-up {
          0%, 100% { transform: translateY(0); opacity: 0.7; }
          50% { transform: translateY(-8px); opacity: 1; }
        }
        @keyframes float-up-delayed {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-6px); opacity: 0.8; }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes gentle-bob {
          0%, 100% { transform: translateY(0) rotate(-15deg); }
          50% { transform: translateY(-3px) rotate(-15deg); }
        }
        @keyframes wisp {
          0% { transform: translateY(0) translateX(0); opacity: 0.6; }
          50% { transform: translateY(-10px) translateX(3px); opacity: 0.3; }
          100% { transform: translateY(-20px) translateX(-2px); opacity: 0; }
        }
        .animate-float { animation: float-up 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-up-delayed 3s ease-in-out infinite 0.5s; }
        .animate-sparkle { animation: sparkle 2s ease-in-out infinite; }
        .animate-sparkle-delayed { animation: sparkle 2s ease-in-out infinite 0.7s; }
        .animate-bob { animation: gentle-bob 4s ease-in-out infinite; }
        .animate-wisp { animation: wisp 3s ease-out infinite; }
        .animate-wisp-delayed { animation: wisp 3s ease-out infinite 1s; }
        .animate-wisp-delayed-2 { animation: wisp 3s ease-out infinite 2s; }

        /* Line drawing style */
        .line-drawing {
          stroke-linecap: round;
          stroke-linejoin: round;
        }
      `}</style>

      <main className="bg-[#0f0a1a] text-slate-50 min-h-screen py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-2xl font-semibold mb-8 text-center text-purple-300">Hero Mockup - Karma Platter Concepts</h1>

          {/* Option 3 Animated: Lifted cloche with animations */}
          <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-2xl p-8 mb-12">
            <p className="text-xs text-purple-400 mb-4">Option 3 ANIMATED: Lifted cloche with floating sparkles</p>

            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight ek-gradient-text mb-4">
                From registration to performance insight.
              </h2>
              <p className="text-lg text-purple-100 mb-2 max-w-xl mx-auto">
                Take your targets and goals, mix in real time feedback from your attendees. Pipeline driving events: served.
              </p>

              {/* Animated lifted cloche */}
              <div className="flex justify-center my-6">
                <svg width="180" height="100" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Animated sparkles/insights floating up */}
                  <g className="animate-float">
                    <path d="M90 35 c0 3-2.5 5.5-2.5 5.5 c0-3 2.5-5.5 2.5-5.5 c0 3 2.5 5.5 2.5 5.5 c0-3-2.5-5.5-2.5-5.5z" fill="#EC4899"/>
                  </g>
                  <g className="animate-float-delayed">
                    <path d="M70 40 c0 2-1.5 3.5-1.5 3.5 c0-2 1.5-3.5 1.5-3.5 c0 2 1.5 3.5 1.5 3.5 c0-2-1.5-3.5-1.5-3.5z" fill="#A855F7"/>
                  </g>
                  <g className="animate-float">
                    <path d="M110 38 c0 2-1.5 3.5-1.5 3.5 c0-2 1.5-3.5 1.5-3.5 c0 2 1.5 3.5 1.5 3.5 c0-2-1.5-3.5-1.5-3.5z" fill="#8B5CF6"/>
                  </g>
                  <circle cx="80" cy="45" r="2" fill="#EC4899" className="animate-sparkle"/>
                  <circle cx="100" cy="42" r="2" fill="#A855F7" className="animate-sparkle-delayed"/>
                  <circle cx="95" cy="50" r="1.5" fill="#8B5CF6" className="animate-sparkle"/>

                  {/* Lifted cloche (tilted) with gentle bob */}
                  <g className="animate-bob" style={{transformOrigin: '90px 50px'}}>
                    <g transform="translate(25, -10)">
                      <ellipse cx="65" cy="55" rx="40" ry="22" fill="url(#liftedCloche)" opacity="0.7"/>
                      <circle cx="65" cy="35" r="6" fill="url(#liftedHandle)"/>
                      <circle cx="65" cy="35" r="3.5" fill="#1a0d2e"/>
                    </g>
                  </g>

                  {/* Plate */}
                  <ellipse cx="90" cy="85" rx="55" ry="10" fill="url(#plate3)"/>
                  <ellipse cx="90" cy="83" rx="48" ry="7" fill="#2d1f42" opacity="0.4"/>

                  {/* "Data" on the plate - abstract bars/chart hint */}
                  <rect x="70" y="75" width="6" height="10" rx="1" fill="#8B5CF6" opacity="0.8"/>
                  <rect x="80" y="72" width="6" height="13" rx="1" fill="#A855F7" opacity="0.8"/>
                  <rect x="90" y="68" width="6" height="17" rx="1" fill="#EC4899" opacity="0.8"/>
                  <rect x="100" y="74" width="6" height="11" rx="1" fill="#A855F7" opacity="0.8"/>

                  <defs>
                    <linearGradient id="liftedCloche" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6"/>
                      <stop offset="100%" stopColor="#EC4899"/>
                    </linearGradient>
                    <linearGradient id="liftedHandle" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#A855F7"/>
                      <stop offset="100%" stopColor="#EC4899"/>
                    </linearGradient>
                    <linearGradient id="plate3" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4c3a6e"/>
                      <stop offset="50%" stopColor="#6b4d8a"/>
                      <stop offset="100%" stopColor="#4c3a6e"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <p className="text-xs text-purple-300/80 mb-6">
                Built for B2B event teams who seek enlightenment.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#" className="ek-btn-gradient text-white text-sm px-6 py-3 rounded-lg font-medium">
                  Book a demo
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 backdrop-blur text-sm px-6 py-3 rounded-lg font-medium border border-purple-500/30">
                  See a live event pass
                </a>
              </div>
            </div>
          </div>

          {/* Option 4: LINE DRAWING / Genie style */}
          <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-2xl p-8 mb-12">
            <p className="text-xs text-purple-400 mb-4">Option 4: LINE DRAWING - Genie/magical reveal style</p>

            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight ek-gradient-text mb-4">
                From registration to performance insight.
              </h2>
              <p className="text-lg text-purple-100 mb-2 max-w-xl mx-auto">
                Take your targets and goals, mix in real time feedback from your attendees. Pipeline driving events: served.
              </p>

              {/* Line drawing style - magical cloche reveal */}
              <div className="flex justify-center my-6">
                <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="line-drawing">
                  {/* Magical wisps/smoke rising - animated */}
                  <path d="M80 45 Q85 35, 78 25 Q82 15, 75 5" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="animate-wisp"/>
                  <path d="M100 40 Q105 28, 98 18 Q103 8, 100 0" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="animate-wisp-delayed"/>
                  <path d="M120 45 Q115 35, 122 25 Q118 15, 125 5" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" className="animate-wisp-delayed-2"/>

                  {/* Swirling magical elements */}
                  <path d="M70 50 Q60 45, 65 35 Q58 30, 62 22" stroke="#A855F7" strokeWidth="1" fill="none" opacity="0.5" className="animate-wisp"/>
                  <path d="M130 50 Q140 45, 135 35 Q142 30, 138 22" stroke="#EC4899" strokeWidth="1" fill="none" opacity="0.5" className="animate-wisp-delayed"/>

                  {/* Sparkle stars - line drawn */}
                  <g className="animate-sparkle">
                    <path d="M90 30 l0 -6 M90 30 l0 6 M90 30 l-5 0 M90 30 l5 0 M90 30 l-3.5 -3.5 M90 30 l3.5 3.5 M90 30 l3.5 -3.5 M90 30 l-3.5 3.5" stroke="#EC4899" strokeWidth="1.5"/>
                  </g>
                  <g className="animate-sparkle-delayed">
                    <path d="M65 40 l0 -4 M65 40 l0 4 M65 40 l-4 0 M65 40 l4 0" stroke="#A855F7" strokeWidth="1"/>
                  </g>
                  <g className="animate-sparkle">
                    <path d="M135 38 l0 -4 M135 38 l0 4 M135 38 l-4 0 M135 38 l4 0" stroke="#8B5CF6" strokeWidth="1"/>
                  </g>

                  {/* Cloche - line drawing style, lifted and tilted */}
                  <g className="animate-bob" style={{transformOrigin: '100px 60px'}}>
                    <g transform="translate(15, -5) rotate(-12, 85, 60)">
                      {/* Dome outline */}
                      <path d="M45 75 Q45 45, 85 45 Q125 45, 125 75" stroke="url(#lineGrad)" strokeWidth="2" fill="none"/>
                      {/* Handle */}
                      <circle cx="85" cy="42" r="5" stroke="url(#lineGrad)" strokeWidth="2" fill="none"/>
                      <circle cx="85" cy="42" r="2" fill="#A855F7"/>
                      {/* Dome rim */}
                      <ellipse cx="85" cy="75" rx="40" ry="8" stroke="url(#lineGrad)" strokeWidth="2" fill="none"/>
                    </g>
                  </g>

                  {/* Plate - line drawing */}
                  <ellipse cx="100" cy="100" rx="60" ry="12" stroke="url(#lineGrad)" strokeWidth="2" fill="none"/>
                  <ellipse cx="100" cy="100" rx="50" ry="8" stroke="#6b4d8a" strokeWidth="1" fill="none" opacity="0.5"/>

                  {/* Abstract "insights" on plate - simple line icons */}
                  <g opacity="0.9">
                    {/* Mini chart */}
                    <path d="M75 95 L75 88 L82 92 L89 85 L96 90" stroke="#EC4899" strokeWidth="1.5" fill="none"/>
                    {/* Mini lightbulb */}
                    <path d="M110 95 Q110 88, 115 88 Q120 88, 120 95" stroke="#A855F7" strokeWidth="1.5" fill="none"/>
                    <path d="M112 95 L118 95" stroke="#A855F7" strokeWidth="1.5"/>
                    <circle cx="115" cy="85" r="1" fill="#A855F7"/>
                  </g>

                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6"/>
                      <stop offset="50%" stopColor="#A855F7"/>
                      <stop offset="100%" stopColor="#EC4899"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <p className="text-xs text-purple-300/80 mb-6">
                Built for B2B event teams who seek enlightenment.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#" className="ek-btn-gradient text-white text-sm px-6 py-3 rounded-lg font-medium">
                  Book a demo
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 backdrop-blur text-sm px-6 py-3 rounded-lg font-medium border border-purple-500/30">
                  See a live event pass
                </a>
              </div>
            </div>
          </div>

          {/* Option 5: Pure genie wisp - minimal */}
          <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-2xl p-8">
            <p className="text-xs text-purple-400 mb-4">Option 5: MINIMAL - Genie wisp only, very light touch</p>

            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight ek-gradient-text mb-4">
                From registration to performance insight.
              </h2>
              <p className="text-lg text-purple-100 mb-2 max-w-xl mx-auto">
                Take your targets and goals, mix in real time feedback from your attendees. Pipeline driving events: served.
              </p>

              {/* Minimal genie wisp */}
              <div className="flex justify-center my-6">
                <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Elegant curved wisps */}
                  <path d="M60 75 Q55 60, 60 50 Q50 40, 55 25 Q45 15, 50 5" stroke="url(#wispGrad1)" strokeWidth="2" fill="none" strokeLinecap="round" className="animate-wisp"/>
                  <path d="M60 75 Q65 55, 60 45 Q70 35, 65 20 Q75 10, 70 0" stroke="url(#wispGrad2)" strokeWidth="2" fill="none" strokeLinecap="round" className="animate-wisp-delayed"/>
                  <path d="M60 75 Q58 65, 55 55 Q62 45, 58 35 Q65 25, 60 15" stroke="url(#wispGrad3)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" className="animate-wisp-delayed-2"/>

                  {/* Small sparkles at tips */}
                  <circle cx="50" cy="5" r="2" fill="#EC4899" className="animate-sparkle"/>
                  <circle cx="70" cy="3" r="2" fill="#A855F7" className="animate-sparkle-delayed"/>
                  <circle cx="60" cy="15" r="1.5" fill="#8B5CF6" className="animate-sparkle"/>

                  {/* Simple plate line */}
                  <ellipse cx="60" cy="75" rx="35" ry="5" stroke="url(#wispGrad1)" strokeWidth="1.5" fill="none"/>

                  <defs>
                    <linearGradient id="wispGrad1" x1="50%" y1="100%" x2="50%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#EC4899" stopOpacity="0.2"/>
                    </linearGradient>
                    <linearGradient id="wispGrad2" x1="50%" y1="100%" x2="50%" y2="0%">
                      <stop offset="0%" stopColor="#A855F7" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#EC4899" stopOpacity="0.2"/>
                    </linearGradient>
                    <linearGradient id="wispGrad3" x1="50%" y1="100%" x2="50%" y2="0%">
                      <stop offset="0%" stopColor="#EC4899" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <p className="text-xs text-purple-300/80 mb-6">
                Built for B2B event teams who seek enlightenment.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#" className="ek-btn-gradient text-white text-sm px-6 py-3 rounded-lg font-medium">
                  Book a demo
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 backdrop-blur text-sm px-6 py-3 rounded-lg font-medium border border-purple-500/30">
                  See a live event pass
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-slate-500 text-sm mt-8">
            View at: /mockup
          </p>
        </div>
      </main>
    </>
  );
}
