import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Momentum - Ship quality code with AI confidence",
  description: "Momentum gives you real-time quality metrics and test coverage for every AI-generated code change. Track code quality with FSS Score.",
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
