import * as React from "react";
import { cn } from "@/lib/utils";

interface StatisticCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  trend?: { value: string; positive: boolean };
}

export function StatisticCard({ value, label, trend, className, ...props }: StatisticCardProps) {
  return (
    <div className={cn("flex flex-col gap-2 p-6 rounded-2xl bg-white border border-slate-200", className)} {...props}>
      <div className="flex items-end gap-3">
        <span className="text-4xl font-bold text-slate-900 tracking-tight">{value}</span>
        {trend && (
          <span className={cn("text-sm font-semibold mb-1", trend.positive ? "text-successGreen" : "text-alertRed")}>
            {trend.positive ? "+" : "-"}{trend.value}
          </span>
        )}
      </div>
      <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">{label}</span>
    </div>
  );
}
