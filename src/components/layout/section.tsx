import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  background?: "default" | "muted" | "primary" | "dark";
}

export function Section({
  className,
  as: Component = "section",
  spacing = "md",
  background = "default",
  ...props
}: SectionProps) {
  const spacingStyles = {
    none: "py-0",
    sm: "py-8 md:py-12",
    md: "py-16 md:py-24",
    lg: "py-24 md:py-32",
    xl: "py-32 md:py-48",
  };

  const bgStyles = {
    default: "bg-transparent",
    muted: "bg-muted",
    primary: "bg-smartOrange text-white",
    dark: "bg-darkCharcoal text-white",
  };

  return (
    <Component
      className={cn(
        "relative w-full",
        spacingStyles[spacing],
        bgStyles[background],
        className
      )}
      {...props}
    />
  );
}
