import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";

export function NavbarLogo() {
  return (
    <Link 
      href="/" 
      className="flex items-center gap-2 relative z-50 focus-ring rounded-lg shrink-0"
      aria-label={`${siteConfig.name} Home`}
    >
      <div className="w-8 h-8 rounded-lg bg-smartOrange flex items-center justify-center text-white font-bold text-xl">
        S
      </div>
      <span className="font-bold text-xl tracking-tight hidden sm:inline-block text-slate-900">
        {siteConfig.name}
      </span>
    </Link>
  );
}
