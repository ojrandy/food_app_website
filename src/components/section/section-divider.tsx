import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionDividerProps extends React.HTMLAttributes<HTMLHRElement> {
  variant?: "solid" | "dashed" | "gradient";
}

export function SectionDivider({ variant = "solid", className, ...props }: SectionDividerProps) {
  const variants = {
    solid: "border-slate-200",
    dashed: "border-slate-200 border-dashed",
    gradient: "border-transparent bg-gradient-to-r from-transparent via-slate-200 to-transparent h-[1px]",
  };

  return (
    <hr
      className={cn("w-full border-t my-0", variants[variant], className)}
      aria-hidden="true"
      {...props}
    />
  );
}
