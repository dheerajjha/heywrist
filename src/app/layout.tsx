import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import PageTracker from "./components/PageTracker";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "HeyWrist - Beautiful Apps for iPhone & Apple Watch",
    template: "%s | HeyWrist",
  },
  description:
    "Beautiful, privacy-first apps for iPhone and Apple Watch. Screen time, sleep tracking, voice recording, habit tracking, hydration, AI notes, fitness timers, and more.",
  icons: {
    icon: "/icons/heywrist.png",
    apple: "/icons/heywrist.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
        <PageTracker />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
