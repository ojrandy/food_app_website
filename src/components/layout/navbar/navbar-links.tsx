"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_ROUTES } from "@/lib/config/navigation";
import { cn } from "@/lib/utils";

export function NavbarLinks() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex items-center gap-8 relative z-50">
      {MAIN_ROUTES.map((route) => {
        const isActive = pathname === route.href || (pathname.startsWith(route.href) && route.href !== "/");
        
        return (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors focus-ring rounded-sm py-1 px-2 -mx-2",
              isActive 
                ? "text-smartOrange" 
                : "text-slate-600 hover:text-slate-900"
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {route.name}
          </Link>
        );
      })}
    </div>
  );
}
