import "@starter/ui/styles/globals.css"
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import { Footer } from '@/components/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nilvon Starter Kit',
  description: 'Nilvon Starter Kit - A modern TurboRepo starter kit with NextJS, ElysiaJS, Better Auth, and Drizzle. Bootstrap your applications with confidence and ship faster.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <div className="grid h-svh grid-rows-[auto_1fr]">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
