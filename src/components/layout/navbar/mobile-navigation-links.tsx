"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_ROUTES } from "@/lib/config/navigation";
import { cn } from "@/lib/utils";

interface MobileNavigationLinksProps {
  onClose: () => void;
}

export function MobileNavigationLinks({ onClose }: MobileNavigationLinksProps) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col space-y-2 mt-8" aria-label="Mobile Navigation">
      {MAIN_ROUTES.map((route) => {
        const isActive = pathname === route.href || (pathname.startsWith(route.href) && route.href !== "/");
        
        return (
          <Link
            key={route.href}
            href={route.href}
            onClick={onClose}
            className={cn(
              "flex items-center w-full min-h-[44px] px-4 py-3 rounded-lg text-lg font-medium transition-colors focus-ring",
              isActive 
                ? "bg-smartOrange/10 text-smartOrange" 
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {route.name}
          </Link>
        );
      })}
    </nav>
  );
}
