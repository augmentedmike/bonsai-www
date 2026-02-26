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

const HOST = process.env.NEXT_PUBLIC_HOST ?? "https://bonsai-www.vercel.app";

export const metadata: Metadata = {
  title: "Bonsai — The kanban board that not only can, but does",
  description:
    "Bonsai is an AI-powered kanban board where your AI team — researchers, designers, developers — builds software for you. Describe it. Watch it ship.",
  metadataBase: new URL(HOST),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
  openGraph: {
    type: "website",
    url: HOST,
    siteName: "Bonsai",
    title: "Bonsai — The kanban board that not only can, but does",
    description:
      "An AI-powered kanban board where digital workers — researchers, designers, developers — execute your tickets autonomously. You describe it. They build it.",
    images: [
      {
        url: `${HOST}/hero-bg.jpg`,
        width: 1200,
        height: 630,
        alt: "Bonsai — AI-powered kanban board",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bonsai — The kanban board that not only can, but does",
    description:
      "An AI-powered kanban board where digital workers — researchers, designers, developers — execute your tickets autonomously. You describe it. They build it.",
    images: [`${HOST}/hero-bg.jpg`],
    site: "@augmentedmike",
    creator: "@augmentedmike",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Bonsai",
  description:
    "An AI-powered kanban board where digital workers execute your tickets autonomously.",
  url: HOST,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
