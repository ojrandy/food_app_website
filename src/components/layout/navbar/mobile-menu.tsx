import * as React from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export function MobileMenu({ isOpen, onToggle, className }: MobileMenuProps) {
  return (
    <button
      className={cn(
        "lg:hidden p-2 -mr-2 text-slate-900 rounded-md focus-ring",
        className
      )}
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls="mobile-nav-drawer"
      aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
    >
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );
}
