import * as React from "react";
import { cn } from "@/lib/utils";

export function FooterContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl", className)}>
      {children}
    </div>
  );
}
