import * as React from "react";
import { cn } from "@/lib/utils";

interface ScreenshotGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
}

export function ScreenshotGrid({ children, columns = 3, className, ...props }: ScreenshotGridProps) {
  const columnClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  };

  return (
    <div className={cn("grid gap-8 w-full max-w-7xl mx-auto px-4", columnClasses[columns], className)} {...props}>
      {children}
    </div>
  );
}
