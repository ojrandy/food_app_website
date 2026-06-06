"use client";

import * as React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

import { DesktopNav } from "./desktop-nav";
import { MegaMenu } from "./mega-menu";
import { SearchPlaceholder } from "./search-placeholder";

// Lazy load mobile nav to save JS bundle size on desktop
const MobileNav = dynamic(() => import("./mobile-nav"), {
  ssr: false,
});

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = React.useState(false);
  const [activeRoute, setActiveRoute] = React.useState("/");

  // Handle scroll detection for sticky header shadow
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm"
          : "bg-background border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl h-16 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 relative z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-smartOrange rounded"
        >
          <div className="w-8 h-8 rounded-lg bg-smartOrange flex items-center justify-center text-white font-bold text-xl">
            S
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:inline-block">
            SmartMeal AI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav 
          activeRoute={activeRoute} 
          onMegaMenuToggle={setIsMegaMenuOpen} 
        />

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4 relative z-50">
          <SearchPlaceholder />
          <Link
            href="/login"
            className="text-sm font-medium hover:text-smartOrange transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-smartOrange rounded px-2 py-1"
          >
            Sign In
          </Link>
          <Link
            href="/#get-started"
            className="bg-smartOrange text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-smartOrange/90 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-smartOrange"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-smartOrange rounded-md"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-drawer"
          aria-label="Open mobile menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mega Menu Dropdown */}
      <MegaMenu 
        isOpen={isMegaMenuOpen} 
        onMouseEnter={() => setIsMegaMenuOpen(true)}
        onMouseLeave={() => setIsMegaMenuOpen(false)}
      />

      {/* Lazy-Loaded Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <MobileNav 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
          activeRoute={activeRoute} 
        />
      )}
    </header>
  );
}
