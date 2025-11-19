'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function Privacy() {
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
          <div className="relative mx-auto max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-200/80 max-w-3xl">
              Last updated: November 7, 2025
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="mx-auto max-w-4xl px-4 py-16">
          <div className="prose prose-invert prose-slate max-w-none">

            {/* Introduction */}
            <div className="mb-12">
              <p className="text-slate-200/80 mb-4">
                DataKarma, Inc. ("Momentum," "we," "us," or "our") operates the Momentum platform at momentum.com and related services. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our event marketing analytics platform.
              </p>
              <p className="text-slate-200/80 mb-4">
                We are committed to protecting your privacy and complying with applicable data protection laws, including the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other privacy regulations.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 mb-12">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="text-slate-200/80 space-y-2 text-sm">
                <p><strong>Company:</strong> DataKarma, Inc.</p>
                <p><strong>Address:</strong> 440 Strafer St, Cincinnati, OH 45226</p>
                <p><strong>Email:</strong> <a href="mailto:support@datakarma.ai" className="text-violet-400 hover:text-violet-300">support@datakarma.ai</a></p>
                <p><strong>Website:</strong> <a href="https://momentum.com" className="text-violet-400 hover:text-violet-300">momentum.com</a></p>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 mb-12">
              <h3 className="text-xl font-semibold mb-4">Quick Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#information-we-collect" className="text-violet-400 hover:text-violet-300">1. Information We Collect</a></li>
                <li><a href="#how-we-use" className="text-violet-400 hover:text-violet-300">2. How We Use Your Information</a></li>
                <li><a href="#legal-basis" className="text-violet-400 hover:text-violet-300">3. Legal Basis for Processing (GDPR)</a></li>
                <li><a href="#data-sharing" className="text-violet-400 hover:text-violet-300">4. Data Sharing and Disclosure</a></li>
                <li><a href="#third-party" className="text-violet-400 hover:text-violet-300">5. Third-Party Integrations</a></li>
                <li><a href="#data-retention" className="text-violet-400 hover:text-violet-300">6. Data Retention</a></li>
                <li><a href="#your-rights" className="text-violet-400 hover:text-violet-300">7. Your Privacy Rights</a></li>
                <li><a href="#ccpa" className="text-violet-400 hover:text-violet-300">8. California Privacy Rights (CCPA)</a></li>
                <li><a href="#security" className="text-violet-400 hover:text-violet-300">9. Data Security</a></li>
                <li><a href="#international" className="text-violet-400 hover:text-violet-300">10. International Data Transfers</a></li>
                <li><a href="#cookies" className="text-violet-400 hover:text-violet-300">11. Cookies and Tracking</a></li>
                <li><a href="#children" className="text-violet-400 hover:text-violet-300">12. Children's Privacy</a></li>
                <li><a href="#changes" className="text-violet-400 hover:text-violet-300">13. Changes to This Policy</a></li>
              </ul>
            </div>

            {/* 1. Information We Collect */}
            <div id="information-we-collect" className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">1. Information We Collect</h2>

              <h3 className="text-xl font-semibold mb-4 text-slate-100">1.1 Information You Provide</h3>
              <ul className="list-disc pl-6 text-slate-200/80 mb-6 space-y-2">
                <li><strong>Account Information:</strong> Name, email address, company name, job title, phone number</li>
                <li><strong>Authentication Data:</strong> Username, password (encrypted), security questions</li>
                <li><strong>Payment Information:</strong> Billing address, payment method details (processed by third-party payment processors)</li>
                <li><strong>Communications:</strong> Messages, feedback, and support inquiries you send to us</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-slate-100">1.2 Information We Collect Automatically</h3>
              <ul className="list-disc pl-6 text-slate-200/80 mb-6 space-y-2">
                <li><strong>Usage Data:</strong> Pages visited, features used, time spent, click patterns</li>
                <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                <li><strong>Log Data:</strong> Access times, error logs, performance data</li>
                <li><strong>Cookies and Similar Technologies:</strong> Session IDs, preferences, analytics data</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-slate-100">1.3 Information From Third Parties</h3>
              <ul className="list-disc pl-6 text-slate-200/80 mb-6 space-y-2">
                <li><strong>CRM Data:</strong> Campaign data, contact information, opportunity data from Salesforce, HubSpot, or Marketo</li>
                <li><strong>Event Platforms:</strong> Attendee data, registration information from Cvent, Splash, or similar platforms</li>
                <li><strong>Survey Responses:</strong> Feedback collected through our branded survey tools</li>
                <li><strong>Sales Team Data:</strong> Event feedback and ratings provided by sales representatives</li>
                <li><strong>Partner Data:</strong> Feedback from partner organizations and co-marketing participants</li>
              </ul>
            </div>

            {/* 2. How We Use Your Information */}
            <div id="how-we-use" className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">2. How We Use Your Information</h2>

              <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3 text-slate-100">Service Delivery</h3>
                <ul className="list-disc pl-6 text-slate-200/80 space-y-2 text-sm">
                  <li>Calculate Success Scores for your events</li>
                  <li>Generate AI-powered recommendations using Claude AI</li>
                  <li>Create executive reports and performance analytics</li>
                  <li>Sync data with your CRM and marketing automation platforms</li>
                  <li>Provide predictive event success forecasting</li>
                </ul>
              </div>

              <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3 text-slate-100">Communication</h3>
                <ul className="list-disc pl-6 text-slate-200/80 space-y-2 text-sm">
                  <li>Send transactional emails (password resets, account notifications)</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Send product updates and feature announcements (with opt-out option)</li>
                  <li>Request feedback and conduct user research</li>
                </ul>
              </div>

              <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-semibold mb-3 text-slate-100">Improvement and Analytics</h3>
                <ul className="list-disc pl-6 text-slate-200/80 space-y-2 text-sm">
                  <li>Improve AI models and recommendation algorithms</li>
                  <li>Analyze platform usage to enhance features</li>
                  <li>Conduct product research and development</li>
                  <li>Generate aggregated, anonymized benchmarks and insights</li>
                </ul>
              </div>

              <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-slate-100">Legal and Security</h3>
                <ul className="list-disc pl-6 text-slate-200/80 space-y-2 text-sm">
                  <li>Comply with legal obligations and regulatory requirements</li>
                  <li>Protect against fraud, security threats, and abuse</li>
                  <li>Enforce our Terms of Service</li>
                  <li>Defend legal claims and protect our rights</li>
                </ul>
              </div>
            </div>

            {/* 3. Legal Basis for Processing */}
            <div id="legal-basis" className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">3. Legal Basis for Processing (GDPR)</h2>
              <p className="text-slate-200/80 mb-4">
                For users in the European Economic Area (EEA), UK, and Switzerland, we process your personal data based on the following legal grounds:
              </p>

              <div className="space-y-4">
                <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-slate-100">Contractual Necessity</h4>
                  <p className="text-sm text-slate-200/80">Processing necessary to provide our services under our Terms of Service</p>
                </div>

                <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-slate-100">Legitimate Interests</h4>
                  <p className="text-sm text-slate-200/80">Improving our services, preventing fraud, and maintaining security</p>
                </div>

                <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-slate-100">Consent</h4>
                  <p className="text-sm text-slate-200/80">Marketing communications, cookies, and optional features (you may withdraw consent at any time)</p>
                </div>

                <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-slate-100">Legal Obligations</h4>
                  <p className="text-sm text-slate-200/80">Compliance with applicable laws and regulations</p>
                </div>
              </div>
            </div>

            {/* 4. Data Sharing */}
            <div id="data-sharing" className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">4. Data Sharing and Disclosure</h2>
              <p className="text-slate-200/80 mb-4">
                We do not sell your personal information. We may share your data in the following circumstances:
              </p>

              <ul className="list-disc pl-6 text-slate-200/80 mb-6 space-y-2">
                <li><strong>Service Providers:</strong> Cloud hosting (AWS, GCP), analytics (Posthog), AI services (Anthropic Claude), payment processing (Stripe)</li>
                <li><strong>Business Partners:</strong> With your consent, we may share data with CRM platforms (Salesforce, HubSpot, Marketo) and event platforms you've integrated</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (you will be notified)</li>
                <li><strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of our users</li>
              </ul>
            </div>

            {/* 5. Third-Party Integrations */}
            <div id="third-party" className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">5. Third-Party Integrations</h2>
              <p className="text-slate-200/80 mb-4">
                Momentum integrates with the following third-party services. Each integration is governed by that service's privacy policy:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-slate-100">CRM Platforms</h4>
                  <ul className="text-sm text-slate-200/80 space-y-1">
                    <li>• Salesforce</li>
                    <li>• HubSpot</li>
                    <li>• Marketo</li>
                  </ul>
                </div>

                <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-slate-100">Event Platforms</h4>
                  <ul className="text-sm text-slate-200/80 space-y-1">
                    <li>• Cvent</li>
                    <li>• Splash</li>
                    <li>• Custom event platforms</li>
                  </ul>
                </div>

                <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-slate-100">AI Services</h4>
                  <ul className="text-sm text-slate-200/80 space-y-1">
                    <li>• Anthropic Claude (report generation, predictions)</li>
                  </ul>
                </div>

                <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-slate-100">Communication</h4>
                  <ul className="text-sm text-slate-200/80 space-y-1">
                    <li>• Slack</li>
                    <li>• Email service providers</li>
                  </ul>
                </div>
              </div>

              <p className="text-slate-200/80 text-sm">
                You control which integrations are enabled in your account settings. Disabling an integration will stop data sharing with that service.
              </p>
            </div>

            {/* 6. Data Retention */}
            <div id="data-retention" className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">6. Data Retention</h2>
              <p className="text-slate-200/80 mb-4">
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes described in this policy:
              </p>

              <ul className="list-disc pl-6 text-slate-200/80 mb-6 space-y-2">
                <li><strong>Active Accounts:</strong> Data retained while your account is active</li>
                <li><strong>After Account Closure:</strong> 90 days for operational purposes, then deleted unless we have a legal obligation to retain it</li>
                <li><strong>Backup Systems:</strong> Data may remain in backups for up to 90 additional days</li>
                <li><strong>Aggregated Data:</strong> Anonymized, aggregated data may be retained indefinitely for analytics and benchmarking</li>
                <li><strong>Legal Obligations:</strong> Data retained as required by law (e.g., financial records for 7 years)</li>
              </ul>

              <p className="text-slate-200/80 text-sm">
                You can request deletion of your account and data at any time by contacting <a href="mailto:support@datakarma.ai" className="text-violet-400 hover:text-violet-300">support@datakarma.ai</a>.
              </p>
            </div>

            {/* 7. Your Privacy Rights */}
            <div id="your-rights" className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">7. Your Privacy Rights</h2>
              <p className="text-slate-200/80 mb-4">
                Depending on your location, you may have the following rights:
              </p>

              <div className="space-y-4">
                <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-slate-100">Right to Access</h4>
                  <p className="text-sm text-slate-200/80">Request a copy of the personal data we hold about you</p>
                </div>

                <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-slate-100">Right to Rectification</h4>
                  <p className="text-sm text-slate-200/80">Correct inaccurate or incomplete personal data</p>
                </div>

                <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-slate-100">Right to Erasure ("Right to be Forgotten")</h4>
                  <p className="text-sm text-slate-200/80">Request deletion of your personal data (subject to legal exceptions)</p>
                </div>

                <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-slate-100">Right to Restriction</h4>
                  <p className="text-sm text-slate-200/80">Request limitation of how we process your data</p>
                </div>

                <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-slate-100">Right to Data Portability</h4>
                  <p className="text-sm text-slate-200/80">Receive your data in a machine-readable format</p>
                </div>

                <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-slate-100">Right to Object</h4>
                  <p className="text-sm text-slate-200/80">Object to processing based on legitimate interests or for marketing purposes</p>
                </div>

                <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-slate-100">Right to Withdraw Consent</h4>
                  <p className="text-sm text-slate-200/80">Withdraw consent at any time (where processing is based on consent)</p>
                </div>
              </div>

              <p className="text-slate-200/80 mt-6 text-sm">
                To exercise any of these rights, contact us at <a href="mailto:support@datakarma.ai" className="text-violet-400 hover:text-violet-300">support@datakarma.ai</a>. We will respond within 30 days (or as required by applicable law).
              </p>
            </div>

            {/* 8. CCPA */}
            <div id="ccpa" className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">8. California Privacy Rights (CCPA)</h2>
              <p className="text-slate-200/80 mb-4">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
              </p>

              <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4 text-slate-100">Your CCPA Rights</h3>
                <ul className="list-disc pl-6 text-slate-200/80 space-y-2 text-sm">
                  <li><strong>Right to Know:</strong> Request disclosure of personal information we collect, use, and share</li>
                  <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
                  <li><strong>Right to Opt-Out:</strong> Opt-out of the "sale" of personal information (we do not sell personal information)</li>
                  <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights</li>
                </ul>
              </div>

              <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4 text-slate-100">Categories of Personal Information</h3>
                <p className="text-sm text-slate-200/80 mb-3">We collect the following categories of personal information:</p>
                <ul className="list-disc pl-6 text-slate-200/80 space-y-1 text-sm">
                  <li>Identifiers (name, email, IP address)</li>
                  <li>Commercial information (purchase history, account interactions)</li>
                  <li>Internet activity (usage data, browsing behavior)</li>
                  <li>Professional information (company, job title)</li>
                  <li>Inferences (preferences, predictions about behavior)</li>
                </ul>
              </div>

              <p className="text-slate-200/80 mt-6 text-sm">
                To submit a CCPA request, email <a href="mailto:support@datakarma.ai" className="text-violet-400 hover:text-violet-300">support@datakarma.ai</a> with "CCPA Request" in the subject line.
              </p>
            </div>

            {/* 9. Data Security */}
            <div id="security" className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">9. Data Security</h2>
              <p className="text-slate-200/80 mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-slate-100">Technical Safeguards</h4>
                  <ul className="text-sm text-slate-200/80 space-y-1">
                    <li>• TLS/SSL encryption in transit</li>
                    <li>• AES-256 encryption at rest</li>
                    <li>• Secure authentication (OAuth 2.0)</li>
                    <li>• Regular security audits</li>
                  </ul>
                </div>

                <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-slate-100">Organizational Measures</h4>
                  <ul className="text-sm text-slate-200/80 space-y-1">
                    <li>• Access controls and authentication</li>
                    <li>• Employee training on data protection</li>
                    <li>• Confidentiality agreements</li>
                    <li>• Incident response procedures</li>
                  </ul>
                </div>

                <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-slate-100">Infrastructure Security</h4>
                  <ul className="text-sm text-slate-200/80 space-y-1">
                    <li>• SOC 2 compliant cloud providers</li>
                    <li>• Regular vulnerability scanning</li>
                    <li>• Automated backups</li>
                    <li>• Disaster recovery plans</li>
                  </ul>
                </div>

                <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-slate-100">Monitoring</h4>
                  <ul className="text-sm text-slate-200/80 space-y-1">
                    <li>• 24/7 security monitoring</li>
                    <li>• Intrusion detection systems</li>
                    <li>• Audit logging</li>
                    <li>• Breach notification procedures</li>
                  </ul>
                </div>
              </div>

              <p className="text-slate-200/80 mt-6 text-sm">
                While we strive to protect your data, no method of transmission or storage is 100% secure. If you believe your account has been compromised, contact us immediately.
              </p>
            </div>

            {/* 10. International Transfers */}
            <div id="international" className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">10. International Data Transfers</h2>
              <p className="text-slate-200/80 mb-4">
                Your information may be transferred to and processed in the United States and other countries where our service providers operate. These countries may have different data protection laws than your country.
              </p>

              <p className="text-slate-200/80 mb-4">
                For transfers from the EEA, UK, and Switzerland, we rely on:
              </p>

              <ul className="list-disc pl-6 text-slate-200/80 mb-6 space-y-2">
                <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                <li>Adequacy decisions where applicable</li>
                <li>Supplier certifications (e.g., EU-U.S. Data Privacy Framework when applicable)</li>
              </ul>

              <p className="text-slate-200/80 text-sm">
                Contact us at <a href="mailto:support@datakarma.ai" className="text-violet-400 hover:text-violet-300">support@datakarma.ai</a> for more information about our data transfer mechanisms.
              </p>
            </div>

            {/* 11. Cookies */}
            <div id="cookies" className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">11. Cookies and Tracking Technologies</h2>
              <p className="text-slate-200/80 mb-4">
                We use cookies and similar tracking technologies to improve your experience:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-slate-100">Essential Cookies</h4>
                  <p className="text-sm text-slate-200/80">Required for authentication, security, and core functionality (cannot be disabled)</p>
                </div>

                <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-slate-100">Analytics Cookies</h4>
                  <p className="text-sm text-slate-200/80">Help us understand usage patterns and improve our service (can be disabled in settings)</p>
                </div>

                <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-slate-100">Preference Cookies</h4>
                  <p className="text-sm text-slate-200/80">Remember your settings and preferences</p>
                </div>
              </div>

              <p className="text-slate-200/80 text-sm">
                You can control cookies through your browser settings. Note that disabling certain cookies may impact functionality.
              </p>
            </div>

            {/* 12. Children's Privacy */}
            <div id="children" className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">12. Children's Privacy</h2>
              <p className="text-slate-200/80 mb-4">
                Our services are not directed to individuals under 16 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately at <a href="mailto:support@datakarma.ai" className="text-violet-400 hover:text-violet-300">support@datakarma.ai</a>, and we will delete it.
              </p>
            </div>

            {/* 13. Changes */}
            <div id="changes" className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">13. Changes to This Policy</h2>
              <p className="text-slate-200/80 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of material changes by:
              </p>

              <ul className="list-disc pl-6 text-slate-200/80 mb-6 space-y-2">
                <li>Posting the updated policy on our website with a new "Last Updated" date</li>
                <li>Sending an email notification to your registered email address</li>
                <li>Displaying a prominent notice in the application</li>
              </ul>

              <p className="text-slate-200/80 text-sm">
                Your continued use of our services after the effective date constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-violet-500/10 border border-violet-500/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Questions or Concerns?</h2>
              <p className="text-slate-200/80 mb-6">
                If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
              </p>
              <div className="space-y-2 text-slate-200/80">
                <p><strong>Email:</strong> <a href="mailto:support@datakarma.ai" className="text-violet-300 hover:text-violet-200">support@datakarma.ai</a></p>
                <p><strong>Mail:</strong> DataKarma, Inc., 440 Strafer St, Cincinnati, OH 45226</p>
              </div>
              <p className="text-sm text-slate-400 mt-6">
                We aim to respond to all inquiries within 30 days.
              </p>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/datakarma-ai-logo-white.svg" alt="Data Karma" className="logo-icon" />
                
              </div>
              <p className="text-xs text-slate-400">
                Event analytics powered by AI
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
                <li><a href="mailto:support@datakarma.ai" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Legal</h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-400">
            © 2025 DataKarma, Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
