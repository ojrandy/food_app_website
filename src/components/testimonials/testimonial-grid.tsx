import * as React from "react";
import { cn } from "@/lib/utils";

interface TestimonialGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function TestimonialGrid({ children, className, ...props }: TestimonialGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)} {...props}>
      {children}
    </div>
  );
}
