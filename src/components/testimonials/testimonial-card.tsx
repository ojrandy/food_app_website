import * as React from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  rating?: number;
}

export function TestimonialCard({ quote, author, rating = 5, className, ...props }: TestimonialCardProps) {
  return (
    <div className={cn("flex flex-col gap-6 p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm", className)} {...props}>
      <div className="flex items-center gap-1 text-smartOrange">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={cn("w-4 h-4", i < rating ? "fill-current" : "text-slate-200")} />
        ))}
      </div>
      <blockquote className="text-lg text-slate-700 leading-relaxed">
        "{quote}"
      </blockquote>
      <div className="flex items-center gap-4 mt-auto pt-2">
        <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden shrink-0">
          {author.avatar ? (
            <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" loading="lazy" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-smartOrange/10 text-smartOrange font-bold">
              {author.name.charAt(0)}
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-slate-900">{author.name}</span>
          <span className="text-sm text-slate-500">{author.role}</span>
        </div>
      </div>
    </div>
  );
}
