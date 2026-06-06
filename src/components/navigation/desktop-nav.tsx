import * as React from "react";
import Link from "next/link";
import { MAIN_ROUTES } from "@/data/routes";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface DesktopNavProps {
  activeRoute: string;
  onMegaMenuToggle: (isOpen: boolean) => void;
}

export function DesktopNav({ activeRoute, onMegaMenuToggle }: DesktopNavProps) {
  return (
    <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
      {MAIN_ROUTES.map((route) => {
        const isActive = activeRoute === route.href;
        const isMegaMenuTrigger = route.hasMegaMenu;

        return (
          <div key={route.href} className="relative group">
            <Link
              href={route.href}
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors hover:text-smartOrange",
                isActive ? "text-smartOrange" : "text-foreground"
              )}
              onMouseEnter={() => isMegaMenuTrigger && onMegaMenuToggle(true)}
              onMouseLeave={() => isMegaMenuTrigger && onMegaMenuToggle(false)}
              aria-current={isActive ? "page" : undefined}
            >
              {route.name}
              {isMegaMenuTrigger && <ChevronDown className="w-3 h-3 opacity-50" />}
            </Link>
          </div>
        );
      })}
    </nav>
  );
}
