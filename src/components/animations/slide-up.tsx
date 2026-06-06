"use client";

import * as React from "react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  once?: boolean;
}

export function SlideUp({ children, delay = 0, duration = 0.5, yOffset = 30, className, once = true }: SlideUpProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{ duration, delay, type: "spring", damping: 20, stiffness: 100 }}
      className={cn(className)}
    >
      {children}
    </m.div>
  );
}
