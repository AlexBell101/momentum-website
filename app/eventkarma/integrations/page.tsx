'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function Integrations() {
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
            <img src="/datakarma-ai-logo-white.svg" alt="Data Karma" className="logo-icon" />
            
          </Link>
          <nav>
            
            <Link href="/eventkarma">Event Karma</Link>
            <Link href="/eventkarma/pricing">Pricing</Link>
            <Link href="/docs/eventkarma">Docs</Link>
            <Link href="/trust">Trust</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="nav-actions">
            
            <a href="https://momentum.datakarma.ai" className="nav-cta">
              
              Start free
            </a>
          </div>
        </div>
      </header>

      <main className="bg-slate-950 text-slate-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),_transparent_55%)]"></div>
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Integrations
            </h1>
            <p className="text-slate-200/80 max-w-3xl mx-auto">
              Connect Event Karma with your existing marketing and sales tools to measure event success automatically
            </p>
          </div>
        </section>

        {/* Salesforce Integration */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-24 h-24 bg-[#00A1E0] rounded-2xl flex items-center justify-center mb-6">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <h2 className="text-3xl font-semibold mb-4">Salesforce Integration</h2>
              <p className="text-slate-200/80 mb-6">
                Event Karma connects directly to your Salesforce instance to pull campaign data, track pipeline, and sync Success Scores back to Campaign objects.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-semibold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Campaign Member Data</h4>
                    <p className="text-sm text-slate-200/80">Pull MQLs, meetings booked, and target account engagement automatically</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-semibold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Pipeline Tracking</h4>
                    <p className="text-sm text-slate-200/80">See pipeline generated and track through to closed-won revenue</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-semibold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Success Score Sync Back</h4>
                    <p className="text-sm text-slate-200/80">Success Scores automatically sync to custom Campaign fields for executive dashboards</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-semibold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Secure OAuth Connection</h4>
                    <p className="text-sm text-slate-200/80">Enterprise-grade security with OAuth 2.0 authentication and field-level permissions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <h3 className="font-medium mb-4">What Gets Synced</h3>
              <div className="space-y-3 mb-6">
                <div className="bg-slate-950/50 rounded-xl p-4">
                  <div className="text-xs font-semibold text-slate-400 mb-1">FROM SALESFORCE</div>
                  <div className="text-sm">Campaign Members, Opportunities, Activities, Account Data</div>
                </div>
                <div className="bg-slate-950/50 rounded-xl p-4">
                  <div className="text-xs font-semibold text-slate-400 mb-1">TO SALESFORCE</div>
                  <div className="text-sm">Success Score, Survey Results, Sales Feedback Ratings</div>
                </div>
              </div>

              <div className="bg-slate-950/50 rounded-xl p-4">
                <div className="text-xs font-semibold mb-2">Setup Time</div>
                <div className="text-3xl font-bold text-violet-400">~15 minutes</div>
                <div className="text-xs text-slate-400 mt-1">Click-based setup, no code required</div>
              </div>
            </div>
          </div>
        </section>

        {/* Slack Integration */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
                <div className="space-y-3">
                  <div className="bg-slate-950/50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-md bg-violet-500 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                      </div>
                      <span className="font-medium text-sm">Event Karma</span>
                      <span className="text-xs text-slate-400 ml-auto">10:34 AM</span>
                    </div>
                    <div className="text-sm leading-relaxed">
                      <strong>Enterprise Summit SF</strong> scored <strong className="text-emerald-400">89/100</strong> 🎉<br/>
                      <span className="text-slate-400 text-xs">Sales feedback: 9/10 | Attendee satisfaction: 8.5/10</span>
                    </div>
                  </div>

                  <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-md bg-rose-500 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                        </svg>
                      </div>
                      <span className="font-medium text-sm">Event Karma</span>
                      <span className="text-xs text-slate-400 ml-auto">Yesterday</span>
                    </div>
                    <div className="text-sm leading-relaxed">
                      <strong>Webinar: Product Launch</strong> scored <strong className="text-rose-400">58/100</strong><br/>
                      <span className="text-slate-400 text-xs">Low sales feedback (4/10) - check lead quality</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-center text-slate-500 mt-4">
                  Example Slack notifications
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="w-24 h-24 bg-[#4A154B] rounded-2xl flex items-center justify-center mb-6">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <path d="M8 4C8 5.1 7.1 6 6 6C4.9 6 4 5.1 4 4C4 2.9 4.9 2 6 2C7.1 2 8 2.9 8 4Z" fill="white"/>
                  <path d="M8 12C8 13.1 7.1 14 6 14C4.9 14 4 13.1 4 12C4 10.9 4.9 10 6 10C7.1 10 8 10.9 8 12Z" fill="white"/>
                  <path d="M16 12C16 13.1 15.1 14 14 14C12.9 14 12 13.1 12 12C12 10.9 12.9 10 14 10C15.1 10 16 10.9 16 12Z" fill="white"/>
                  <path d="M16 4C16 5.1 15.1 6 14 6C12.9 6 12 5.1 12 4C12 2.9 12.9 2 14 2C15.1 2 16 2.9 16 4Z" fill="white"/>
                  <path d="M14 18H10V6H14V18Z" fill="white"/>
                  <path d="M18 14V10H6V14H18Z" fill="white"/>
                </svg>
              </div>
              <h2 className="text-3xl font-semibold mb-4">Slack Integration</h2>
              <p className="text-slate-200/80 mb-6">
                Get real-time notifications and insights delivered directly to your team's Slack workspace. Stay on top of event performance without context switching.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4A154B] flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-semibold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Event Score Alerts</h4>
                    <p className="text-sm text-slate-200/80">Get notified when Success Scores are calculated for your events</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4A154B] flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-semibold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Low Score Warnings</h4>
                    <p className="text-sm text-slate-200/80">Automatically flag events that underperform so you can course-correct quickly</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4A154B] flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-semibold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Survey Response Updates</h4>
                    <p className="text-sm text-slate-200/80">Real-time updates when attendees and sales partners complete feedback surveys</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4A154B] flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-semibold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Weekly Summaries</h4>
                    <p className="text-sm text-slate-200/80">Automated weekly reports showing your highest and lowest performing events</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Integrations Coming */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-4">More Integrations Coming Soon</h2>
            <p className="text-slate-200/80 max-w-2xl mx-auto">
              We're constantly expanding our integration ecosystem. Have a specific tool you need? Let us know.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">📧</div>
              <h4 className="font-medium mb-2">Email Platforms</h4>
              <p className="text-sm text-slate-400">HubSpot, Marketo, Pardot</p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="font-medium mb-2">Analytics Tools</h4>
              <p className="text-sm text-slate-400">Google Analytics, Mixpanel</p>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🎫</div>
              <h4 className="font-medium mb-2">Event Platforms</h4>
              <p className="text-sm text-slate-400">Eventbrite, Splash, Swoogo</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row justify-between gap-6 items-center">
            <div>
              <h2 className="text-xl font-semibold mb-2">Ready to connect your tools?</h2>
              <p className="text-slate-300/80">
                Set up Salesforce and Slack integrations in minutes
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0 items-center">
              <a href="https://momentum.datakarma.ai" className="bg-white text-slate-950 text-sm px-4 py-2 rounded-md font-medium inline-block hover:bg-slate-100">
                Start free
              </a>
              <a href="https://momentum.datakarma.ai" className="text-sm text-slate-100/80 hover:text-white whitespace-nowrap">
                View integrations →
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
                <div className="h-8 w-8 rounded-md bg-violet-500/90 flex items-center justify-center text-sm font-bold">EK</div>
                <span className="font-semibold tracking-tight text-white">Event Karma</span>
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
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
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
            © 2025 Event Karma. Built for event marketing teams.
          </div>
        </div>
      </footer>
    </>
  );
}
