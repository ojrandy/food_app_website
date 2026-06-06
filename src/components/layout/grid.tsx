import * as React from "react";
import { cn } from "@/lib/utils";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: "sm" | "md" | "lg" | "xl";
}

export function Grid({
  className,
  as: Component = "div",
  cols = 1,
  gap = "md",
  ...props
}: GridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
    6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
    12: "grid-cols-4 md:grid-cols-8 lg:grid-cols-12",
  };

  const gapStyles = {
    sm: "gap-4",
    md: "gap-6 md:gap-8",
    lg: "gap-8 md:gap-12",
    xl: "gap-12 md:gap-16",
  };

  return (
    <Component
      className={cn("grid w-full", gridCols[cols], gapStyles[gap], className)}
      {...props}
    />
  );
}
