"use client";

import * as React from "react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function ScaleIn({ children, delay = 0, duration = 0.5, className, once = true }: ScaleInProps) {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, margin: "-50px" }}
      transition={{ duration, delay, type: "spring", damping: 20, stiffness: 100 }}
      className={cn(className)}
    >
      {children}
    </m.div>
  );
}
