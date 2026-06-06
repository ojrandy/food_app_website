"use client";

import * as React from "react";
import { m, AnimatePresence } from "framer-motion";
import { MobileNavigationLinks } from "./mobile-navigation-links";
import { MobileCTASection } from "./mobile-cta-section";
import { NavbarLogo } from "./navbar-logo";
import { MobileMenu } from "./mobile-menu";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  // Focus trapping and scroll locking
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <m.div
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-[400px] bg-white border-l border-slate-100 shadow-2xl flex flex-col lg:hidden"
          >
            <div className="flex items-center justify-between h-16 px-4 md:px-6 border-b border-slate-100 shrink-0">
              <NavbarLogo />
              <MobileMenu isOpen={isOpen} onToggle={onClose} />
            </div>

            <div className="flex-1 overflow-y-auto px-4 md:px-6 pb-8">
              <MobileNavigationLinks onClose={onClose} />
              <MobileCTASection onClose={onClose} />
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}
