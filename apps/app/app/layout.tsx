import type React from "react";
import type { Metadata } from "next";
// <CHANGE> Replacing ugly fonts with modern, clean alternatives
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

// <CHANGE> Using Geist for clean, modern typography
const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nilovon Starter Kit - Full-Stack Development Made Simple",
  description:
    "A modern Turbo Repo starter kit with NextJS, ElysiaJS, Better Auth, and Drizzle. Bootstrap your full-stack applications with confidence.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <CHANGE> Updated font variables to use Geist
    <html lang="en" className={`${geist.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
