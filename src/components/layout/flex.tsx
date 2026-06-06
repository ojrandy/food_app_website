import * as React from "react";
import { cn } from "@/lib/utils";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
}

export function Flex({
  className,
  as: Component = "div",
  direction = "row",
  align = "stretch",
  justify = "start",
  wrap = "nowrap",
  gap = "none",
  ...props
}: FlexProps) {
  const directionStyles = {
    row: "flex-row",
    col: "flex-col",
    "row-reverse": "flex-row-reverse",
    "col-reverse": "flex-col-reverse",
  };

  const alignStyles = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  };

  const justifyStyles = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  };

  const wrapStyles = {
    nowrap: "flex-nowrap",
    wrap: "flex-wrap",
    "wrap-reverse": "flex-wrap-reverse",
  };

  const gapStyles = {
    none: "gap-0",
    xs: "gap-2",
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  };

  return (
    <Component
      className={cn(
        "flex",
        directionStyles[direction],
        alignStyles[align],
        justifyStyles[justify],
        wrapStyles[wrap],
        gapStyles[gap],
        className
      )}
      {...props}
    />
  );
}
