import * as React from "react";
import { cn } from "@/lib/utils";

interface CTASectionProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "gradient";
  children: React.ReactNode;
}

export function CTASection({ variant = "default", children, className, ...props }: CTASectionProps) {
  const variants = {
    default: "bg-slate-900 text-white",
    glass: "glass bg-white/50 border border-slate-200",
    gradient: "bg-gradient-to-br from-smartOrange to-[#D97706] text-white", // smartOrange to a slightly darker orange
  };

  return (
    <div className={cn("rounded-3xl overflow-hidden relative p-8 md:p-12 lg:p-16 text-center shadow-xl", variants[variant], className)} {...props}>
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
        {children}
      </div>
    </div>
  );
}
