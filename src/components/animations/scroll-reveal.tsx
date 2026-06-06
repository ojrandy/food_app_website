"use client";

import * as React from "react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  margin?: string;
  once?: boolean;
}

export function ScrollReveal({ children, className, margin = "-100px", once = true }: ScrollRevealProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: margin as any }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(className)}
    >
      {children}
    </m.div>
  );
}
