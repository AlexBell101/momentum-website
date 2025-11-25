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
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-float { animation: float-up 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-up-delayed 3s ease-in-out infinite 0.5s; }
        .animate-sparkle { animation: sparkle 2s ease-in-out infinite; }
        .animate-sparkle-delayed { animation: sparkle 2s ease-in-out infinite 0.7s; }
        .animate-bob { animation: gentle-bob 4s ease-in-out infinite; }
        .animate-wisp { animation: wisp 3s ease-out infinite; }
        .animate-wisp-delayed { animation: wisp 3s ease-out infinite 1s; }
        .animate-wisp-delayed-2 { animation: wisp 3s ease-out infinite 2s; }
        .animate-subtle-float { animation: subtle-float 3s ease-in-out infinite; }

        .line-drawing {
          stroke-linecap: round;
          stroke-linejoin: round;
        }
      `}</style>

      <main className="bg-[#0f0a1a] text-slate-50 min-h-screen py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-2xl font-semibold mb-8 text-center text-purple-300">Karma Platter - Final Options</h1>

          {/* Option A: Original lifted cloche with data (line drawing) */}
          <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-2xl p-8 mb-12">
            <p className="text-xs text-purple-400 mb-4">Option A: Lifted cloche revealing insights (line drawing)</p>

            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight ek-gradient-text mb-4">
                From registration to performance insight.
              </h2>
              <p className="text-lg text-purple-100 mb-2 max-w-xl mx-auto">
                Take your targets and goals, mix in real time feedback from your attendees. Pipeline driving events: served.
              </p>

              <div className="flex justify-center my-6">
                <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="line-drawing">
                  {/* Magical wisps rising */}
                  <path d="M80 45 Q85 35, 78 25 Q82 15, 75 5" stroke="url(#lineGradA)" strokeWidth="1.5" fill="none" className="animate-wisp"/>
                  <path d="M100 40 Q105 28, 98 18 Q103 8, 100 0" stroke="url(#lineGradA)" strokeWidth="1.5" fill="none" className="animate-wisp-delayed"/>
                  <path d="M120 45 Q115 35, 122 25 Q118 15, 125 5" stroke="url(#lineGradA)" strokeWidth="1.5" fill="none" className="animate-wisp-delayed-2"/>

                  {/* Sparkle stars */}
                  <g className="animate-sparkle">
                    <path d="M90 30 l0 -5 M90 30 l0 5 M90 30 l-4 0 M90 30 l4 0" stroke="#EC4899" strokeWidth="1.5"/>
                  </g>
                  <g className="animate-sparkle-delayed">
                    <path d="M110 25 l0 -4 M110 25 l0 4 M110 25 l-4 0 M110 25 l4 0" stroke="#A855F7" strokeWidth="1"/>
                  </g>

                  {/* Cloche - lifted and tilted */}
                  <g className="animate-bob" style={{transformOrigin: '100px 60px'}}>
                    <g transform="translate(15, -5) rotate(-12, 85, 60)">
                      <path d="M45 75 Q45 45, 85 45 Q125 45, 125 75" stroke="url(#lineGradA)" strokeWidth="2" fill="none"/>
                      <circle cx="85" cy="42" r="5" stroke="url(#lineGradA)" strokeWidth="2" fill="none"/>
                      <circle cx="85" cy="42" r="2" fill="#A855F7"/>
                      <ellipse cx="85" cy="75" rx="40" ry="8" stroke="url(#lineGradA)" strokeWidth="2" fill="none"/>
                    </g>
                  </g>

                  {/* Plate */}
                  <ellipse cx="100" cy="100" rx="60" ry="12" stroke="url(#lineGradA)" strokeWidth="2" fill="none"/>

                  {/* Data bar graph on plate */}
                  <g opacity="0.9">
                    <rect x="70" y="90" width="6" height="8" rx="1" fill="#8B5CF6"/>
                    <rect x="80" y="86" width="6" height="12" rx="1" fill="#A855F7"/>
                    <rect x="90" y="82" width="6" height="16" rx="1" fill="#EC4899"/>
                    <rect x="100" y="85" width="6" height="13" rx="1" fill="#A855F7"/>
                    <rect x="110" y="88" width="6" height="10" rx="1" fill="#8B5CF6"/>
                    <rect x="120" y="91" width="6" height="7" rx="1" fill="#EC4899" opacity="0.8"/>
                  </g>

                  <defs>
                    <linearGradient id="lineGradA" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6"/>
                      <stop offset="50%" stopColor="#A855F7"/>
                      <stop offset="100%" stopColor="#EC4899"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <p className="text-xs text-purple-300/80 mb-6">Built for B2B event teams who seek enlightenment.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#" className="ek-btn-gradient text-white text-sm px-6 py-3 rounded-lg font-medium">Book a demo</a>
                <a href="#" className="bg-white/10 hover:bg-white/20 backdrop-blur text-sm px-6 py-3 rounded-lg font-medium border border-purple-500/30">See a live event pass</a>
              </div>
            </div>
          </div>

          {/* Option B: Alternative cloche - more elegant dome */}
          <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-2xl p-8 mb-12">
            <p className="text-xs text-purple-400 mb-4">Option B: Elegant bell cloche style</p>

            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight ek-gradient-text mb-4">
                From registration to performance insight.
              </h2>
              <p className="text-lg text-purple-100 mb-2 max-w-xl mx-auto">
                Take your targets and goals, mix in real time feedback from your attendees. Pipeline driving events: served.
              </p>

              <div className="flex justify-center my-6">
                <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="line-drawing">
                  {/* Rising magical elements */}
                  <path d="M85 40 Q80 25, 90 15" stroke="url(#lineGradB)" strokeWidth="1.5" fill="none" className="animate-wisp"/>
                  <path d="M100 35 Q100 20, 105 10" stroke="url(#lineGradB)" strokeWidth="1.5" fill="none" className="animate-wisp-delayed"/>
                  <path d="M115 40 Q120 25, 110 15" stroke="url(#lineGradB)" strokeWidth="1.5" fill="none" className="animate-wisp-delayed-2"/>

                  {/* Sparkles */}
                  <circle cx="90" cy="15" r="2" fill="#EC4899" className="animate-sparkle"/>
                  <circle cx="105" cy="10" r="2" fill="#A855F7" className="animate-sparkle-delayed"/>
                  <circle cx="110" cy="18" r="1.5" fill="#8B5CF6" className="animate-sparkle"/>

                  {/* Bell-shaped cloche - lifted */}
                  <g className="animate-subtle-float">
                    <g transform="translate(-15, -15) rotate(-8, 100, 70)">
                      {/* Tall dome */}
                      <path d="M70 80 Q70 40, 100 35 Q130 40, 130 80" stroke="url(#lineGradB)" strokeWidth="2" fill="none"/>
                      {/* Ornate handle */}
                      <path d="M95 35 Q100 25, 105 35" stroke="url(#lineGradB)" strokeWidth="2" fill="none"/>
                      <circle cx="100" cy="25" r="3" stroke="url(#lineGradB)" strokeWidth="1.5" fill="none"/>
                      {/* Rim */}
                      <ellipse cx="100" cy="80" rx="30" ry="6" stroke="url(#lineGradB)" strokeWidth="2" fill="none"/>
                    </g>
                  </g>

                  {/* Serving plate */}
                  <ellipse cx="100" cy="100" rx="55" ry="10" stroke="url(#lineGradB)" strokeWidth="2" fill="none"/>
                  <ellipse cx="100" cy="98" rx="45" ry="6" stroke="#6b4d8a" strokeWidth="1" fill="none" opacity="0.4"/>

                  {/* Data bar graph on plate */}
                  <g opacity="0.9">
                    <rect x="70" y="90" width="6" height="7" rx="1" fill="#8B5CF6"/>
                    <rect x="80" y="86" width="6" height="11" rx="1" fill="#A855F7"/>
                    <rect x="90" y="81" width="6" height="16" rx="1" fill="#EC4899"/>
                    <rect x="100" y="84" width="6" height="13" rx="1" fill="#A855F7"/>
                    <rect x="110" y="88" width="6" height="9" rx="1" fill="#8B5CF6"/>
                    <rect x="120" y="91" width="6" height="6" rx="1" fill="#EC4899" opacity="0.8"/>
                  </g>

                  <defs>
                    <linearGradient id="lineGradB" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6"/>
                      <stop offset="50%" stopColor="#A855F7"/>
                      <stop offset="100%" stopColor="#EC4899"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <p className="text-xs text-purple-300/80 mb-6">Built for B2B event teams who seek enlightenment.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#" className="ek-btn-gradient text-white text-sm px-6 py-3 rounded-lg font-medium">Book a demo</a>
                <a href="#" className="bg-white/10 hover:bg-white/20 backdrop-blur text-sm px-6 py-3 rounded-lg font-medium border border-purple-500/30">See a live event pass</a>
              </div>
            </div>
          </div>

          {/* Option C: Waiter arm with plate and towel - elegant line drawing */}
          <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-2xl p-8 mb-12">
            <p className="text-xs text-purple-400 mb-4">Option C: Waiter arm with plate & draped towel (elegant)</p>

            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight ek-gradient-text mb-4">
                From registration to performance insight.
              </h2>
              <p className="text-lg text-purple-100 mb-2 max-w-xl mx-auto">
                Take your targets and goals, mix in real time feedback from your attendees. Pipeline driving events: served.
              </p>

              <div className="flex justify-center my-6">
                <svg width="220" height="130" viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="line-drawing">
                  {/* Rising wisps from plate */}
                  <path d="M90 55 Q85 40, 92 25" stroke="url(#lineGradC)" strokeWidth="1.5" fill="none" className="animate-wisp"/>
                  <path d="M110 50 Q115 35, 108 20" stroke="url(#lineGradC)" strokeWidth="1.5" fill="none" className="animate-wisp-delayed"/>
                  <path d="M130 55 Q125 40, 132 28" stroke="url(#lineGradC)" strokeWidth="1.5" fill="none" className="animate-wisp-delayed-2"/>

                  {/* Sparkles */}
                  <circle cx="92" cy="22" r="2" fill="#EC4899" className="animate-sparkle"/>
                  <circle cx="108" cy="18" r="2" fill="#A855F7" className="animate-sparkle-delayed"/>
                  <circle cx="130" cy="26" r="1.5" fill="#8B5CF6" className="animate-sparkle"/>

                  {/* Waiter arm and hand */}
                  <g className="animate-subtle-float">
                    {/* Sleeve/cuff */}
                    <path d="M30 95 Q25 85, 35 80 L55 75 Q60 78, 58 85 L40 92 Q32 95, 30 95" stroke="url(#lineGradC)" strokeWidth="2" fill="none"/>
                    {/* Cuff detail lines */}
                    <path d="M35 82 L38 90" stroke="#A855F7" strokeWidth="1" opacity="0.6"/>
                    <path d="M42 80 L44 88" stroke="#A855F7" strokeWidth="1" opacity="0.6"/>

                    {/* Hand */}
                    <path d="M55 75 Q70 70, 85 72 Q90 74, 88 78 L70 80 Q60 82, 58 85" stroke="url(#lineGradC)" strokeWidth="2" fill="none"/>
                    {/* Thumb */}
                    <path d="M70 80 Q72 85, 68 88" stroke="url(#lineGradC)" strokeWidth="1.5" fill="none"/>

                    {/* Draped towel over arm */}
                    <path d="M25 88 Q20 100, 28 115 Q35 125, 45 120 Q50 110, 45 95 Q40 90, 35 92" stroke="url(#lineGradC)" strokeWidth="1.5" fill="none"/>
                    <path d="M28 95 Q32 105, 30 112" stroke="#A855F7" strokeWidth="1" opacity="0.5"/>
                    <path d="M35 93 Q38 103, 36 110" stroke="#EC4899" strokeWidth="1" opacity="0.5"/>
                  </g>

                  {/* Plate */}
                  <g className="animate-subtle-float">
                    <ellipse cx="130" cy="75" rx="55" ry="12" stroke="url(#lineGradC)" strokeWidth="2" fill="none"/>
                    <ellipse cx="130" cy="73" rx="45" ry="8" stroke="#6b4d8a" strokeWidth="1" fill="none" opacity="0.4"/>
                  </g>

                  {/* Data bar graph on plate */}
                  <g className="animate-subtle-float" opacity="0.9">
                    <rect x="105" y="67" width="7" height="6" rx="1" fill="#8B5CF6"/>
                    <rect x="117" y="63" width="7" height="10" rx="1" fill="#A855F7"/>
                    <rect x="129" y="58" width="7" height="15" rx="1" fill="#EC4899"/>
                    <rect x="141" y="61" width="7" height="12" rx="1" fill="#A855F7"/>
                    <rect x="153" y="65" width="7" height="8" rx="1" fill="#8B5CF6"/>
                  </g>

                  <defs>
                    <linearGradient id="lineGradC" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6"/>
                      <stop offset="50%" stopColor="#A855F7"/>
                      <stop offset="100%" stopColor="#EC4899"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <p className="text-xs text-purple-300/80 mb-6">Built for B2B event teams who seek enlightenment.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#" className="ek-btn-gradient text-white text-sm px-6 py-3 rounded-lg font-medium">Book a demo</a>
                <a href="#" className="bg-white/10 hover:bg-white/20 backdrop-blur text-sm px-6 py-3 rounded-lg font-medium border border-purple-500/30">See a live event pass</a>
              </div>
            </div>
          </div>

          {/* Option D: Waiter arm - more whimsical/stylized */}
          <div className="bg-[#1a0d2e]/40 border border-purple-500/20 rounded-2xl p-8">
            <p className="text-xs text-purple-400 mb-4">Option D: Waiter arm with plate & towel (whimsical flourish)</p>

            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight ek-gradient-text mb-4">
                From registration to performance insight.
              </h2>
              <p className="text-lg text-purple-100 mb-2 max-w-xl mx-auto">
                Take your targets and goals, mix in real time feedback from your attendees. Pipeline driving events: served.
              </p>

              <div className="flex justify-center my-6">
                <svg width="240" height="130" viewBox="0 0 240 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="line-drawing">
                  {/* Magical swirls and wisps */}
                  <path d="M120 45 Q110 30, 125 20 Q115 10, 130 5" stroke="url(#lineGradD)" strokeWidth="1.5" fill="none" className="animate-wisp"/>
                  <path d="M140 40 Q150 25, 138 15" stroke="url(#lineGradD)" strokeWidth="1.5" fill="none" className="animate-wisp-delayed"/>
                  <path d="M160 50 Q165 35, 155 25" stroke="url(#lineGradD)" strokeWidth="1.5" fill="none" className="animate-wisp-delayed-2"/>

                  {/* Extra magical swirls */}
                  <path d="M100 50 Q90 40, 95 30 Q85 25, 92 18" stroke="#A855F7" strokeWidth="1" fill="none" opacity="0.4" className="animate-wisp"/>

                  {/* Sparkle bursts */}
                  <g className="animate-sparkle">
                    <path d="M130 8 l0 -6 M130 8 l0 6 M130 8 l-5 0 M130 8 l5 0 M130 8 l-3.5 -3.5 M130 8 l3.5 3.5 M130 8 l3.5 -3.5 M130 8 l-3.5 3.5" stroke="#EC4899" strokeWidth="1.2"/>
                  </g>
                  <circle cx="138" cy="15" r="2" fill="#A855F7" className="animate-sparkle-delayed"/>
                  <circle cx="155" cy="22" r="2" fill="#8B5CF6" className="animate-sparkle"/>

                  {/* Stylized arm - more curved and flowing */}
                  <g className="animate-subtle-float">
                    {/* Arm coming from left side - elegant curve */}
                    <path d="M0 90 Q30 85, 50 75 Q70 65, 90 68" stroke="url(#lineGradD)" strokeWidth="2.5" fill="none"/>

                    {/* Hand holding plate */}
                    <path d="M90 68 Q100 65, 110 70 Q115 73, 112 78 Q105 80, 95 78 Q90 75, 90 68" stroke="url(#lineGradD)" strokeWidth="2" fill="none"/>

                    {/* Flowing towel - more dramatic drape */}
                    <path d="M35 80 Q25 95, 30 110 Q40 125, 55 118 Q65 105, 55 85 Q48 78, 42 82" stroke="url(#lineGradD)" strokeWidth="2" fill="none"/>
                    {/* Towel fold details */}
                    <path d="M32 92 Q38 100, 35 108" stroke="#EC4899" strokeWidth="1" opacity="0.5"/>
                    <path d="M40 88 Q45 98, 42 106" stroke="#A855F7" strokeWidth="1" opacity="0.5"/>
                    <path d="M48 85 Q52 95, 50 102" stroke="#8B5CF6" strokeWidth="1" opacity="0.4"/>

                    {/* Decorative cuff with flourish */}
                    <path d="M0 92 Q15 95, 25 88" stroke="url(#lineGradD)" strokeWidth="1.5" fill="none"/>
                    <circle cx="18" cy="92" r="2" stroke="#EC4899" strokeWidth="1" fill="none"/>
                  </g>

                  {/* Large serving plate */}
                  <g className="animate-subtle-float">
                    <ellipse cx="155" cy="75" rx="65" ry="14" stroke="url(#lineGradD)" strokeWidth="2" fill="none"/>
                    <ellipse cx="155" cy="73" rx="55" ry="10" stroke="#6b4d8a" strokeWidth="1" fill="none" opacity="0.3"/>
                    {/* Plate rim highlight */}
                    <path d="M95 75 Q125 68, 155 67 Q185 68, 215 75" stroke="url(#lineGradD)" strokeWidth="1" fill="none" opacity="0.3"/>
                  </g>

                  {/* Data bar graph on plate */}
                  <g className="animate-subtle-float" opacity="0.9">
                    <rect x="120" y="67" width="8" height="6" rx="1" fill="#8B5CF6"/>
                    <rect x="133" y="62" width="8" height="11" rx="1" fill="#A855F7"/>
                    <rect x="146" y="56" width="8" height="17" rx="1" fill="#EC4899"/>
                    <rect x="159" y="60" width="8" height="13" rx="1" fill="#A855F7"/>
                    <rect x="172" y="64" width="8" height="9" rx="1" fill="#8B5CF6"/>
                    <rect x="185" y="66" width="8" height="7" rx="1" fill="#EC4899" opacity="0.7"/>
                  </g>

                  <defs>
                    <linearGradient id="lineGradD" x1="0%" y1="50%" x2="100%" y2="50%">
                      <stop offset="0%" stopColor="#8B5CF6"/>
                      <stop offset="50%" stopColor="#A855F7"/>
                      <stop offset="100%" stopColor="#EC4899"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <p className="text-xs text-purple-300/80 mb-6">Built for B2B event teams who seek enlightenment.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#" className="ek-btn-gradient text-white text-sm px-6 py-3 rounded-lg font-medium">Book a demo</a>
                <a href="#" className="bg-white/10 hover:bg-white/20 backdrop-blur text-sm px-6 py-3 rounded-lg font-medium border border-purple-500/30">See a live event pass</a>
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
