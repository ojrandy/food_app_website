import * as React from "react";
import Link from "next/link";
import { MAIN_ROUTES } from "@/data/routes";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  activeRoute: string;
}

export default function MobileNav({ isOpen, onClose, activeRoute }: MobileNavProps) {
  // Focus trapping logic would typically go here for full accessibility
  // For now, ensuring the dialog has appropriate ARIA attributes

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background border-l border-border shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="font-bold text-lg">Menu</span>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-4 flex flex-col gap-2">
          {MAIN_ROUTES.map((route) => {
            const isActive = activeRoute === route.href;
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "block px-4 py-3 rounded-md text-base font-medium transition-colors",
                  isActive
                    ? "bg-smartOrange/10 text-smartOrange"
                    : "text-foreground hover:bg-muted"
                )}
                onClick={onClose}
                aria-current={isActive ? "page" : undefined}
              >
                {route.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <Link
            href="/#get-started"
            className="block w-full text-center bg-smartOrange text-white py-3 rounded-md font-medium hover:bg-smartOrange/90 transition-colors"
            onClick={onClose}
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
