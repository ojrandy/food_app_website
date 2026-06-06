import * as React from "react";
import { cn } from "@/lib/utils";

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className={cn(
        "absolute left-4 top-4 -translate-y-24 focus:translate-y-0",
        "bg-smartOrange text-white px-4 py-2 rounded-md font-medium z-[100]",
        "transition-transform duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-smartOrange"
      )}
    >
      Skip to main content
    </a>
  );
}
