import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Momentum - Measure field marketing success with confidence",
  description: "MQL, meeting, and pipeline data from Salesforce with real feedback from your attendees and sales partners. Go beyond vanity metrics with the Field Success Score.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
