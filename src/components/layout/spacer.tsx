import * as React from "react";
import { cn } from "@/lib/utils";

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  axis?: "vertical" | "horizontal";
}

export function Spacer({
  className,
  size = "md",
  axis = "vertical",
  ...props
}: SpacerProps) {
  const sizeStyles = {
    xs: "1rem", // 16px
    sm: "1.5rem", // 24px
    md: "2.5rem", // 40px
    lg: "4rem", // 64px
    xl: "6rem", // 96px
    "2xl": "8rem", // 128px
  };

  const isVertical = axis === "vertical";

  return (
    <div
      className={cn(className)}
      style={{
        display: "block",
        width: isVertical ? "1px" : sizeStyles[size],
        minWidth: isVertical ? "1px" : sizeStyles[size],
        height: isVertical ? sizeStyles[size] : "1px",
        minHeight: isVertical ? sizeStyles[size] : "1px",
      }}
      aria-hidden="true"
      {...props}
    />
  );
}
