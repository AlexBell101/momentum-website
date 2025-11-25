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
      `}</style>

      <main className="bg-[#0f0a1a] text-slate-50 min-h-screen py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-2xl font-semibold mb-8 text-center text-purple-300">Hero Mockup with Karma Platter</h1>

          {/* Option 1: Centered below text */}
          <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-2xl p-8 mb-12">
            <p className="text-xs text-purple-400 mb-4">Option 1: Centered illustration below headline</p>

            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight ek-gradient-text mb-4">
                From registration to performance insight.
              </h2>
              <p className="text-lg text-purple-100 mb-6 max-w-xl mx-auto">
                Take your targets and goals, mix in real time feedback from your attendees. Pipeline driving events: served.
              </p>

              {/* Karma Platter SVG - Waiter hand with cloche */}
              <div className="flex justify-center my-8">
                <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Steam wisps */}
                  <path d="M70 25 Q75 15, 70 5" stroke="url(#steamGrad)" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round"/>
                  <path d="M100 20 Q105 8, 100 0" stroke="url(#steamGrad)" strokeWidth="2" fill="none" opacity="0.8" strokeLinecap="round"/>
                  <path d="M130 25 Q125 15, 130 5" stroke="url(#steamGrad)" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round"/>

                  {/* Cloche (dome cover) */}
                  <ellipse cx="100" cy="70" rx="55" ry="30" fill="url(#clocheGrad)" opacity="0.9"/>
                  <ellipse cx="100" cy="70" rx="50" ry="26" fill="url(#clocheInner)" opacity="0.3"/>

                  {/* Cloche handle */}
                  <circle cx="100" cy="42" r="8" fill="url(#handleGrad)"/>
                  <circle cx="100" cy="42" r="5" fill="#1a0d2e"/>

                  {/* Plate/platter */}
                  <ellipse cx="100" cy="95" rx="65" ry="12" fill="url(#plateGrad)"/>
                  <ellipse cx="100" cy="93" rx="58" ry="8" fill="#2d1f42" opacity="0.5"/>

                  {/* Decorative karma sparkles on plate rim */}
                  <circle cx="45" cy="95" r="2" fill="#EC4899" opacity="0.8"/>
                  <circle cx="155" cy="95" r="2" fill="#EC4899" opacity="0.8"/>
                  <circle cx="70" cy="100" r="1.5" fill="#A855F7" opacity="0.6"/>
                  <circle cx="130" cy="100" r="1.5" fill="#A855F7" opacity="0.6"/>

                  {/* Waiter hand (simplified elegant) */}
                  <path d="M160 95 Q175 90, 185 100 Q190 108, 180 115 L165 110 Q155 105, 160 95" fill="url(#handGrad)"/>
                  {/* Cuff */}
                  <path d="M178 108 Q185 105, 190 112 L185 118 Q178 115, 175 112 Z" fill="white" opacity="0.9"/>

                  <defs>
                    <linearGradient id="steamGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#A855F7" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#EC4899" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="clocheGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6"/>
                      <stop offset="50%" stopColor="#A855F7"/>
                      <stop offset="100%" stopColor="#EC4899"/>
                    </linearGradient>
                    <linearGradient id="clocheInner" x1="50%" y1="0%" x2="50%" y2="100%">
                      <stop offset="0%" stopColor="white"/>
                      <stop offset="100%" stopColor="transparent"/>
                    </linearGradient>
                    <linearGradient id="handleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#A855F7"/>
                      <stop offset="100%" stopColor="#EC4899"/>
                    </linearGradient>
                    <linearGradient id="plateGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4c3a6e"/>
                      <stop offset="50%" stopColor="#6b4d8a"/>
                      <stop offset="100%" stopColor="#4c3a6e"/>
                    </linearGradient>
                    <linearGradient id="handGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ddb892"/>
                      <stop offset="100%" stopColor="#c9a77d"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

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

          {/* Option 2: Side illustration - more subtle */}
          <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-2xl p-8 mb-12">
            <p className="text-xs text-purple-400 mb-4">Option 2: Smaller inline flourish after "served."</p>

            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight ek-gradient-text mb-4">
                From registration to performance insight.
              </h2>
              <p className="text-lg text-purple-100 mb-6 max-w-xl mx-auto inline-flex items-center flex-wrap justify-center gap-2">
                <span>Take your targets and goals, mix in real time feedback from your attendees. Pipeline driving events: served.</span>
                {/* Small serving flourish */}
                <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="inline-block ml-1">
                  <ellipse cx="16" cy="18" rx="12" ry="4" fill="url(#miniPlate)"/>
                  <ellipse cx="16" cy="14" rx="10" ry="6" fill="url(#miniCloche)"/>
                  <circle cx="16" cy="9" r="2" fill="#EC4899"/>
                  {/* tiny steam */}
                  <path d="M12 6 Q13 3, 12 1" stroke="#A855F7" strokeWidth="1" fill="none" opacity="0.6" strokeLinecap="round"/>
                  <path d="M20 6 Q19 3, 20 1" stroke="#A855F7" strokeWidth="1" fill="none" opacity="0.6" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="miniPlate" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4c3a6e"/>
                      <stop offset="100%" stopColor="#6b4d8a"/>
                    </linearGradient>
                    <linearGradient id="miniCloche" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6"/>
                      <stop offset="100%" stopColor="#EC4899"/>
                    </linearGradient>
                  </defs>
                </svg>
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

          {/* Option 3: Lifted cloche revealing data/insights */}
          <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-2xl p-8">
            <p className="text-xs text-purple-400 mb-4">Option 3: Lifted cloche revealing "insights" - more conceptual</p>

            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight ek-gradient-text mb-4">
                From registration to performance insight.
              </h2>
              <p className="text-lg text-purple-100 mb-2 max-w-xl mx-auto">
                Take your targets and goals, mix in real time feedback from your attendees. Pipeline driving events: served.
              </p>

              {/* Lifted cloche with sparkles/data coming out */}
              <div className="flex justify-center my-6">
                <svg width="180" height="100" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Sparkles/insights floating up */}
                  <path d="M90 35 c0 3-2.5 5.5-2.5 5.5 c0-3 2.5-5.5 2.5-5.5 c0 3 2.5 5.5 2.5 5.5 c0-3-2.5-5.5-2.5-5.5z" fill="#EC4899" opacity="0.9"/>
                  <path d="M70 40 c0 2-1.5 3.5-1.5 3.5 c0-2 1.5-3.5 1.5-3.5 c0 2 1.5 3.5 1.5 3.5 c0-2-1.5-3.5-1.5-3.5z" fill="#A855F7" opacity="0.7"/>
                  <path d="M110 38 c0 2-1.5 3.5-1.5 3.5 c0-2 1.5-3.5 1.5-3.5 c0 2 1.5 3.5 1.5 3.5 c0-2-1.5-3.5-1.5-3.5z" fill="#8B5CF6" opacity="0.7"/>
                  <circle cx="80" cy="45" r="2" fill="#EC4899" opacity="0.5"/>
                  <circle cx="100" cy="42" r="2" fill="#A855F7" opacity="0.5"/>
                  <circle cx="95" cy="50" r="1.5" fill="#8B5CF6" opacity="0.4"/>

                  {/* Lifted cloche (tilted) */}
                  <g transform="translate(25, -10) rotate(-15, 90, 50)">
                    <ellipse cx="90" cy="55" rx="40" ry="22" fill="url(#liftedCloche)" opacity="0.7"/>
                    <circle cx="90" cy="35" r="6" fill="url(#liftedHandle)"/>
                    <circle cx="90" cy="35" r="3.5" fill="#1a0d2e"/>
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

          <p className="text-center text-slate-500 text-sm mt-8">
            View at: /mockup
          </p>
        </div>
      </main>
    </>
  );
}
