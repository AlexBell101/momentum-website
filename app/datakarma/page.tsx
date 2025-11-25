'use client';

import Script from 'next/script';

export default function DataKarmaHolding() {
  return (
    <>
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Logo/Company Name */}
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-gray-900 mb-2">DataKarma</h1>
            <p className="text-xl text-gray-600">Building the future of event intelligence</p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl p-12 mb-8">
            <div className="mb-8">
              <div className="inline-block bg-indigo-100 rounded-full p-4 mb-4">
                <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Makers of EventKarma
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                The Event Success Score platform that helps you measure and improve event ROI with instant feedback.
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="https://eventkarma.ai"
              className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Go to EventKarma →
            </a>
          </div>

          {/* Footer */}
          <footer className="text-gray-500 text-sm space-y-2">
            <p>© 2025 DataKarma LLC. All rights reserved.</p>
            <div className="flex justify-center gap-6">
              <a href="mailto:support@datakarma.ai" className="hover:text-gray-700 transition-colors">
                Contact: support@datakarma.ai
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
