import * as React from "react";
import { cn } from "@/lib/utils";
import { SectionBadge } from "./section-badge";
import { SectionDescription } from "./section-description";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  highlightedText?: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center" | "right";
  cta?: React.ReactNode;
}

export function SectionHeader({
  title,
  highlightedText,
  subtitle,
  badge,
  align = "center",
  cta,
  className,
  ...props
}: SectionHeaderProps) {
  const alignmentStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col gap-6 max-w-3xl", alignmentStyles[align], className)} {...props}>
      {badge && <SectionBadge>{badge}</SectionBadge>}
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
        {title}{" "}
        {highlightedText && (
          <span className="text-smartOrange block mt-2 sm:inline sm:mt-0">{highlightedText}</span>
        )}
      </h2>
      
      {subtitle && <SectionDescription>{subtitle}</SectionDescription>}
      
      {cta && <div className="mt-2">{cta}</div>}
    </div>
  );
}
