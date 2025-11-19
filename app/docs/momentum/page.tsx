'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function Docs() {
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
            <img src="/datakarma-ai-logo-white.svg" alt="Data Karma" className="logo-icon" style={{ height: "40px" }} />
            
          </Link>
          <nav>
            
            <Link href="/momentum">Momentum</Link>
            <Link href="/momentum/pricing">Pricing</Link>
            <Link href="/docs/momentum">Docs</Link>
            <Link href="/trust">Trust</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="nav-actions">
            
            <a href="https://fss-app-iota.vercel.app/" className="nav-cta">
              
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
              Documentation
            </h1>
            <p className="text-slate-200/80 max-w-3xl mx-auto">
              Everything you need to get started with Momentum and measure field marketing success
            </p>
          </div>
        </section>

        {/* Quick Start */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-2xl font-semibold mb-10 text-center">Quick Start Guide</h2>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex gap-6 bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-14 h-14 bg-violet-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Connect Salesforce</h3>
                <p className="text-slate-200/80 mb-4">
                  Click "Connect Salesforce" in your Momentum dashboard and authorize access. Momentum will request read access to Campaigns, Campaign Members, Opportunities, and Accounts, plus write access to sync Success Scores back to custom Campaign fields.
                </p>
                <div className="bg-slate-950/50 rounded-lg p-3 font-mono text-sm mb-2">
                  Settings → Integrations → Salesforce → Authorize
                </div>
                <p className="text-xs text-slate-400">⏱️ Setup time: ~5 minutes</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-14 h-14 bg-violet-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Create Your First Event</h3>
                <p className="text-slate-200/80 mb-4">
                  Create a new event in Momentum and link it to your Salesforce Campaign. Set your event date, choose which surveys to send (attendees, sales partners, field team), and configure survey timing.
                </p>
                <ul className="space-y-2 text-sm text-slate-200/80 mb-2">
                  <li className="flex gap-2">
                    <span className="text-violet-400">•</span>
                    Event name and description
                  </li>
                  <li className="flex gap-2">
                    <span className="text-violet-400">•</span>
                    Link to Salesforce Campaign ID
                  </li>
                  <li className="flex gap-2">
                    <span className="text-violet-400">•</span>
                    Configure survey distribution lists
                  </li>
                  <li className="flex gap-2">
                    <span className="text-violet-400">•</span>
                    Set survey send times (typically 1 day post-event)
                  </li>
                </ul>
                <p className="text-xs text-slate-400">⏱️ Setup time: ~10 minutes per event</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-14 h-14 bg-violet-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Collect Feedback</h3>
                <p className="text-slate-200/80 mb-4">
                  After your event, Momentum automatically sends surveys to attendees, sales partners, and your field team. Survey links are sent via email with customizable timing and reminders.
                </p>
                <div className="grid md:grid-cols-3 gap-3 mb-2">
                  <div className="bg-slate-950/50 rounded-lg p-3 text-center">
                    <div className="text-xs font-semibold text-slate-400 mb-1">ATTENDEES</div>
                    <div className="text-lg font-bold text-violet-400">8 questions</div>
                    <div className="text-xs text-slate-400">~2 min survey</div>
                  </div>
                  <div className="bg-slate-950/50 rounded-lg p-3 text-center">
                    <div className="text-xs font-semibold text-slate-400 mb-1">SALES PARTNERS</div>
                    <div className="text-lg font-bold text-violet-400">6 questions</div>
                    <div className="text-xs text-slate-400">~2 min survey</div>
                  </div>
                  <div className="bg-slate-950/50 rounded-lg p-3 text-center">
                    <div className="text-xs font-semibold text-slate-400 mb-1">FIELD TEAM</div>
                    <div className="text-lg font-bold text-violet-400">5 questions</div>
                    <div className="text-xs text-slate-400">~2 min survey</div>
                  </div>
                </div>
                <p className="text-xs text-slate-400">💡 Typical response rate: 35-45% with one reminder</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <div className="flex-shrink-0 w-14 h-14 bg-violet-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">View Your Success Score</h3>
                <p className="text-slate-200/80 mb-4">
                  Once survey responses come in (typically within 3-5 days), Momentum calculates your Success Score by combining Salesforce campaign data with feedback scores. The Success Score and all underlying metrics automatically sync back to your Salesforce Campaign object.
                </p>
                <div className="bg-slate-950/50 rounded-lg p-4 mb-2">
                  <div className="text-xs font-semibold text-slate-400 mb-2">WHAT YOU'LL SEE</div>
                  <ul className="space-y-2 text-sm text-slate-200/80">
                    <li className="flex gap-2">
                      <span className="text-violet-400">•</span>
                      Overall Success Score (0-100)
                    </li>
                    <li className="flex gap-2">
                      <span className="text-violet-400">•</span>
                      Sales Partner Feedback score
                    </li>
                    <li className="flex gap-2">
                      <span className="text-violet-400">•</span>
                      Attendee Experience score
                    </li>
                    <li className="flex gap-2">
                      <span className="text-violet-400">•</span>
                      Field Team Score
                    </li>
                    <li className="flex gap-2">
                      <span className="text-violet-400">•</span>
                      Salesforce business metrics (MQLs, pipeline, etc.)
                    </li>
                    <li className="flex gap-2">
                      <span className="text-violet-400">•</span>
                      Historical comparison to past events
                    </li>
                  </ul>
                </div>
                <p className="text-xs text-slate-400">✅ All data syncs to Salesforce custom Campaign fields</p>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Topics */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold mb-10 text-center">Documentation Topics</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <div className="text-violet-400 mb-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Salesforce Integration</h3>
              <p className="text-sm text-slate-200/80 mb-3">Setup guide, permissions required, custom field mapping, and troubleshooting common sync issues</p>
              <a href="#" className="text-sm text-violet-400 font-medium hover:text-violet-300">Read docs →</a>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <div className="text-violet-400 mb-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Survey Configuration</h3>
              <p className="text-sm text-slate-200/80 mb-3">Customize survey questions, timing, distribution lists, and automated reminders for maximum response rates</p>
              <a href="#" className="text-sm text-violet-400 font-medium hover:text-violet-300">Read docs →</a>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <div className="text-violet-400 mb-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Success Score Methodology</h3>
              <p className="text-sm text-slate-200/80 mb-3">Deep dive into how the Success Score is calculated, weighted, and benchmarked against your historical events</p>
              <a href="#" className="text-sm text-violet-400 font-medium hover:text-violet-300">Read docs →</a>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <div className="text-violet-400 mb-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Dashboard & Reports</h3>
              <p className="text-sm text-slate-200/80 mb-3">Build custom dashboards, export data, create executive reports, and set up automated Slack notifications</p>
              <a href="#" className="text-sm text-violet-400 font-medium hover:text-violet-300">Read docs →</a>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <div className="text-violet-400 mb-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Team Management</h3>
              <p className="text-sm text-slate-200/80 mb-3">Add team members, set permissions, manage roles, and control access to events and data</p>
              <a href="#" className="text-sm text-violet-400 font-medium hover:text-violet-300">Read docs →</a>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
              <div className="text-violet-400 mb-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">API Reference</h3>
              <p className="text-sm text-slate-200/80 mb-3">REST API documentation for custom integrations, webhooks, and programmatic access to your event data</p>
              <a href="#" className="text-sm text-violet-400 font-medium hover:text-violet-300">Read docs →</a>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
            <p className="text-slate-200/80 max-w-2xl mx-auto">
              Our team is here to help you measure field marketing success with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">💬</div>
              <h4 className="font-medium mb-2">Live Chat</h4>
              <p className="text-sm text-slate-200/80 mb-4">Chat with our support team Monday-Friday, 9am-5pm PT</p>
              <a href="#" className="text-sm text-violet-400 font-medium hover:text-violet-300">Start chat →</a>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">📧</div>
              <h4 className="font-medium mb-2">Email Support</h4>
              <p className="text-sm text-slate-200/80 mb-4">Send us your questions, we typically respond within 4 hours</p>
              <a href="#" className="text-sm text-violet-400 font-medium hover:text-violet-300">Email us →</a>
            </div>

            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">📅</div>
              <h4 className="font-medium mb-2">Schedule Call</h4>
              <p className="text-sm text-slate-200/80 mb-4">Book a 30-minute onboarding call with our team</p>
              <a href="#" className="text-sm text-violet-400 font-medium hover:text-violet-300">Book call →</a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row justify-between gap-6 items-center">
            <div>
              <h2 className="text-xl font-semibold mb-2">Ready to get started?</h2>
              <p className="text-slate-300/80">
                Set up your first event in under 15 minutes
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0 items-center">
              <a href="https://fss-app-iota.vercel.app/" className="bg-white text-slate-950 text-sm px-4 py-2 rounded-md font-medium inline-block hover:bg-slate-100">
                Start free
              </a>
              <a href="https://fss-app-iota.vercel.app/" className="text-sm text-slate-100/80 hover:text-white whitespace-nowrap">
                View documentation →
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
                <div className="h-8 w-8 rounded-md bg-violet-500/90 flex items-center justify-center text-sm font-bold">M</div>
                <span className="font-semibold tracking-tight text-white">Momentum</span>
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
            © 2025 Momentum. Built for field & event marketing teams.
          </div>
        </div>
      </footer>
    </>
  );
}
