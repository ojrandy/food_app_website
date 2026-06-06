import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface MobileCTASectionProps {
  onClose: () => void;
}

export function MobileCTASection({ onClose }: MobileCTASectionProps) {
  return (
    <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-slate-100">
      <Button variant="outline" size="lg" className="w-full text-base focus-ring" onClick={onClose} asChild>
        <Link href="/how-it-works">Watch Demo</Link>
      </Button>
      <Button variant="smart" size="pill-lg" className="w-full text-base focus-ring" onClick={onClose} asChild>
        <Link href="/#get-started">Get Started</Link>
      </Button>
    </div>
  );
}
