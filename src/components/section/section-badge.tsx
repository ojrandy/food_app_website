import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SectionBadge({ children, className, ...props }: SectionBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-smartOrange/20 bg-smartOrange/10 px-3 py-1 text-sm font-semibold text-smartOrange",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
