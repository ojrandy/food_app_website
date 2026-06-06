import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export function SearchPlaceholder({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={cn(
        "flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/30 text-muted-foreground hover:bg-muted/50 transition-colors text-sm",
        className
      )}
      aria-label="Search site"
    >
      <Search className="w-4 h-4" />
      <span className="hidden lg:inline-block">Search...</span>
      <kbd className="hidden lg:inline-flex items-center gap-1 bg-background border px-1.5 rounded text-[10px] font-mono ml-2">
        <span className="text-xs">⌘</span>K
      </kbd>
    </button>
  );
}
