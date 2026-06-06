import * as React from "react";
import { cn } from "@/lib/utils";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  direction?: "col" | "row";
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end" | "stretch";
}

export function Stack({
  className,
  as: Component = "div",
  direction = "col",
  gap = "md",
  align = "stretch",
  ...props
}: StackProps) {
  const directionStyles = {
    col: "flex-col",
    row: "flex-row",
  };

  const gapStyles = {
    xs: "gap-2",
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  };

  const alignStyles = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  };

  return (
    <Component
      className={cn(
        "flex",
        directionStyles[direction],
        gapStyles[gap],
        alignStyles[align],
        className
      )}
      {...props}
    />
  );
}
