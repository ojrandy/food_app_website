import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ResearchCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  summary: string;
  href: string;
  date?: string;
  category?: string;
}

export function ResearchCard({ title, summary, href, date, category, className, ...props }: ResearchCardProps) {
  return (
    <div className={cn("flex flex-col gap-4 p-6 rounded-2xl bg-white border border-slate-200 hover:border-smartOrange/50 transition-colors group", className)} {...props}>
      {(date || category) && (
        <div className="flex items-center gap-3 text-xs font-medium text-slate-400">
          {category && <span className="uppercase tracking-wider text-smartOrange">{category}</span>}
          {category && date && <span>•</span>}
          {date && <span>{date}</span>}
        </div>
      )}
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-smartOrange transition-colors">{title}</h3>
        <p className="text-slate-500 line-clamp-3">{summary}</p>
      </div>
      <div className="mt-auto pt-4">
        <Link href={href} className="inline-flex items-center gap-2 text-sm font-semibold text-smartOrange hover:text-smartOrange/80 focus-ring rounded-sm">
          Read Full Paper <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
