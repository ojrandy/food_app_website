import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function NavbarActions() {
  return (
    <div className="hidden lg:flex items-center gap-4 relative z-50 shrink-0">
      <Button variant="ghost" asChild className="text-slate-600 hover:text-slate-900 font-semibold focus-ring">
        <Link href="/how-it-works">Watch Demo</Link>
      </Button>
      <Button variant="smart" size="pill" asChild className="focus-ring">
        <Link href="/#get-started">Get Started</Link>
      </Button>
    </div>
  );
}
