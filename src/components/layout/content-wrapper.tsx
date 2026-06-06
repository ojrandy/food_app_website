import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "prose" | "none";
}

export function ContentWrapper({
  className,
  as: Component = "div",
  maxWidth = "lg",
  ...props
}: ContentWrapperProps) {
  const maxWidthStyles = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl",
    prose: "max-w-prose",
    none: "max-w-none",
  };

  return (
    <Component
      className={cn("mx-auto w-full", maxWidthStyles[maxWidth], className)}
      {...props}
    />
  );
}
