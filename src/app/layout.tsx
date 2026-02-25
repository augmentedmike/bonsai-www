import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bonsai-www.vercel.app"),
  title: "Bonsai — The kanban board that not can but does",
  description:
    "Bonsai is an AI-powered kanban board where digital workers build your software for you. Describe what you want. Watch it get built.",
  openGraph: {
    title: "Bonsai — The kanban board that not can but does",
    description:
      "An AI-powered kanban board where digital workers — researchers, designers, developers — execute your tickets autonomously. You describe it. They build it.",
    url: "https://bonsai-www.vercel.app",
    siteName: "Bonsai",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Bonsai — AI-powered kanban board",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bonsai — The kanban board that not can but does",
    description:
      "AI workers build your software while you sleep. Define tickets. Watch them ship.",
    images: ["/hero-bg.jpg"],
  },
  keywords: [
    "AI development team",
    "autonomous software development",
    "kanban AI",
    "AI coding agent",
    "no-code development",
    "digital workers",
    "open source",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
