import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "@/lib/config/seo";

import { ThemeProvider } from "@/providers/theme-provider";
import { MotionProvider } from "@/providers/motion-provider";
import { AnalyticsProvider } from "@/providers/analytics-provider";
import { SmoothScrollProvider } from "@/providers/smooth-scroll-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteShell } from "@/components/layout/site-shell";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <AnalyticsProvider>
            <MotionProvider>
              <SmoothScrollProvider>
                <TooltipProvider>
                  <SiteShell>
                    {children}
                  </SiteShell>
                </TooltipProvider>
              </SmoothScrollProvider>
            </MotionProvider>
          </AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
