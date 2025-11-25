import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Event Karma — The Event GTM OS by Data Karma",
  description: "Event Karma connects invites, UPL passes, QR check-in, surveys, and Salesforce to forecast outcomes and drive pipeline from every event.",
  keywords: ["event marketing", "event GTM", "event check-in", "QR check-in", "Salesforce integration", "marketing automation", "event success score", "B2B events", "pipeline tracking", "UPL passes", "event ops"],
  authors: [{ name: "Data Karma" }],
  creator: "Data Karma",
  publisher: "Data Karma",
  metadataBase: new URL("https://eventkarma.ai"),
  alternates: {
    canonical: "https://eventkarma.ai",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eventkarma.ai",
    siteName: "Event Karma",
    title: "Event Karma — Event GTM OS",
    description: "From invite to impact with forecasts, check-in, and buying-group activation.",
    images: [
      {
        url: "/eventkarma-logo.svg",
        width: 1200,
        height: 630,
        alt: "Event Karma by Data Karma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Karma — Event GTM OS",
    description: "From invite to impact with forecasts, check-in, and buying-group activation.",
    images: ["/eventkarma-logo.svg"],
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
      { url: "/eventkarma-logo.svg", type: "image/svg+xml" },
      { url: "/eventkarma-logo.svg", type: "image/svg+xml", sizes: "16x16" },
    ],
    apple: { url: "/eventkarma-logo.svg", sizes: "180x180" },
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
