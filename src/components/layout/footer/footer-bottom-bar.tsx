import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";

export function FooterBottomBar() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200 mt-16 pb-8 md:pb-12">
      <p className="text-sm text-slate-500">
        &copy; {currentYear} {siteConfig.name}. All rights reserved.
      </p>
      <div className="flex items-center gap-6">
        <Link href="/privacy" className="text-sm text-slate-500 hover:text-slate-900 transition-colors focus-ring rounded-sm">
          Privacy Policy
        </Link>
        <Link href="/terms" className="text-sm text-slate-500 hover:text-slate-900 transition-colors focus-ring rounded-sm">
          Terms of Service
        </Link>
      </div>
    </div>
  );
}
