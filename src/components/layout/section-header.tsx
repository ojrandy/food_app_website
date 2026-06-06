import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  label?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeader({
  className,
  title,
  subtitle,
  label,
  align = "left",
  ...props
}: SectionHeaderProps) {
  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col gap-4 max-w-3xl", alignStyles[align], className)} {...props}>
      {label && (
        <span className="text-sm font-semibold tracking-wider uppercase text-smartOrange">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
