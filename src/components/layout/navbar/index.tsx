"use client";

import * as React from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { NavbarContainer } from "./navbar-container";
import { NavbarLogo } from "./navbar-logo";
import { NavbarLinks } from "./navbar-links";
import { NavbarActions } from "./navbar-actions";
import { MobileMenu } from "./mobile-menu";
import { MobileDrawer } from "./mobile-drawer";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Handle sticky logic
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out h-16 md:h-20",
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm"
            : "bg-transparent border-transparent"
        )}
      >
        <nav aria-label="Main Navigation" className="w-full h-full">
          <NavbarContainer>
            <NavbarLogo />
            <NavbarLinks />
            <NavbarActions />
            <MobileMenu 
              isOpen={isMobileMenuOpen} 
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            />
          </NavbarContainer>
        </nav>
      </header>

      <MobileDrawer 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}
