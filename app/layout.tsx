import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Momentum - Turn Event Data Into Revenue Intelligence",
  description: "Track event success and attribute pipeline to your field marketing. Prove ROI and optimize spend with Field Success Score (FSS).",
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
