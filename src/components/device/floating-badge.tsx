"use client";

import * as React from "react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingBadgeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

export function FloatingBadge({ children, className, delay = 0, yOffset = 15 }: FloatingBadgeProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: yOffset, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 200, damping: 20 }}
      className={cn(
        "absolute z-30 bg-white/90 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-4 flex items-center gap-3",
        className
      )}
    >
      {children}
    </m.div>
  );
}
