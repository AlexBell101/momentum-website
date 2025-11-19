import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Data Karma — The event marketing scorecard",
  description: "Data Karma builds products for event marketing. Momentum scores every event so you know what to repeat, resize, or pause.",
  keywords: ["event marketing", "event analytics", "marketing scorecard", "event ROI", "Salesforce integration", "marketing automation", "event success score", "B2B events", "pipeline tracking"],
  authors: [{ name: "Data Karma" }],
  creator: "Data Karma",
  publisher: "Data Karma",
  metadataBase: new URL("https://www.datakarma.ai"),
  alternates: {
    canonical: "https://www.datakarma.ai",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.datakarma.ai",
    siteName: "Data Karma",
    title: "Data Karma — The event marketing scorecard",
    description: "Data Karma builds products for event marketing. Momentum scores every event so you know what to repeat, resize, or pause.",
    images: [
      {
        url: "/favicon.svg",
        width: 1200,
        height: 630,
        alt: "Data Karma - Event Marketing Scorecard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Karma — The event marketing scorecard",
    description: "Data Karma builds products for event marketing. Momentum scores every event so you know what to repeat, resize, or pause.",
    images: ["/favicon.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16.svg", type: "image/svg+xml", sizes: "16x16" },
    ],
    apple: { url: "/favicon.svg", sizes: "180x180" },
  },
  themeColor: "#0066FF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-950">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}
