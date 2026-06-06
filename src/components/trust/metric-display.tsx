"use client";

import * as React from "react";
import { m, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface MetricDisplayProps {
  value: string;
  label: string;
  className?: string;
}

export function MetricDisplay({ value, label, className }: MetricDisplayProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={cn("flex flex-col gap-1 items-center justify-center text-center", className)}>
      <m.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
      >
        {value}
      </m.span>
      <span className="text-sm md:text-base font-medium text-slate-500 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
