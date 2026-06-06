import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";

export function FooterBrand() {
  return (
    <div className="flex flex-col gap-6">
      <Link 
        href="/" 
        className="flex items-center gap-2 relative z-10 focus-ring rounded-lg shrink-0 w-fit"
        aria-label={`${siteConfig.name} Home`}
      >
        <div className="w-8 h-8 rounded-lg bg-smartOrange flex items-center justify-center text-white font-bold text-xl">
          S
        </div>
        <span className="font-bold text-xl tracking-tight text-slate-900">
          {siteConfig.name}
        </span>
      </Link>
      <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
        {siteConfig.description}
      </p>
    </div>
  );
}
