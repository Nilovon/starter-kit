import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://nilovon-starterkit.vercel.app"
  ),
  title: {
    template: "%s | Nilovon Starterkit",
    default: "Nilovon Starterkit",
  },
  description:
    "A modern, full-stack starter kit built with Turborepo, Next.js, TypeScript, and more. Get started quickly with authentication, database, email, and Redis.",
  keywords: [
    "starterkit",
    "turborepo",
    "nextjs",
    "typescript",
    "fullstack",
    "monorepo",
    "authentication",
    "database",
    "email",
    "redis",
    "drizzle",
    "tailwindcss",
    "biome",
    "turbo",
  ],
  authors: [{ name: "Nilovon", url: "https://github.com/nilovon" }],
  creator: "Nilovon",
  publisher: "Nilovon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nilovon-starterkit.vercel.app",
    title: "Nilovon Starterkit",
    description:
      "A modern, full-stack starter kit built with Turborepo, Next.js, TypeScript, and more. Get started quickly with authentication, database, email, and Redis.",
    siteName: "Nilovon Starterkit",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nilovon Starterkit Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nilovon Starterkit",
    description:
      "A modern, full-stack starter kit built with Turborepo, Next.js, TypeScript, and more. Get started quickly with authentication, database, email, and Redis.",
    images: ["/og-image.png"],
    creator: "@nilovon",
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
  alternates: {
    canonical: "https://nilovon-starterkit.vercel.app",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: { rel: "icon", url: "/favicon.ico" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${geist.variable} ${geistMono.variable} h-full`}
      lang="en"
      suppressHydrationWarning
    >
      <body className="flex h-full min-h-screen flex-col bg-background text-foreground antialiased">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
