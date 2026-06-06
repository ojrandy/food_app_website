import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function SectionDescription({ children, className, ...props }: SectionDescriptionProps) {
  return (
    <p
      className={cn(
        "text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
