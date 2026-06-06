import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "SmartMeal AI Website",
  description: "Phase 1.0 Project Foundation",
};

import { SkipLink } from "@/components/navigation/skip-link";
import { Navbar } from "@/components/navigation/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SmoothScrollProvider } from "@/providers/smooth-scroll-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <SmoothScrollProvider>
          <TooltipProvider>
            <SkipLink />
            <Navbar />
            {children}
          </TooltipProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
