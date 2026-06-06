import * as React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: "default" | "elevated" | "glass" | "gradient";
}

export function FeatureCard({
  icon,
  title,
  description,
  variant = "default",
  className,
  ...props
}: FeatureCardProps) {
  const variants = {
    default: "bg-white border border-slate-200",
    elevated: "bg-white shadow-xl shadow-slate-200/40 border border-slate-100",
    glass: "glass",
    gradient: "bg-gradient-to-br from-smartOrange/5 to-transparent border border-smartOrange/10",
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-2xl p-6 md:p-8 transition-shadow hover:shadow-md",
        variants[variant],
        className
      )}
      {...props}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-smartOrange/10 flex items-center justify-center text-smartOrange">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">{title}</h3>
        <p className="text-slate-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
