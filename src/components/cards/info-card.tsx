import * as React from "react";
import { cn } from "@/lib/utils";

interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function InfoCard({ title, children, icon, className, ...props }: InfoCardProps) {
  return (
    <div className={cn("flex flex-col gap-3 p-6 rounded-xl bg-slate-50 border border-slate-100", className)} {...props}>
      <div className="flex items-center gap-3">
        {icon && <div className="text-smartOrange flex-shrink-0">{icon}</div>}
        <h4 className="font-semibold text-slate-900">{title}</h4>
      </div>
      <div className="text-sm text-slate-600 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
