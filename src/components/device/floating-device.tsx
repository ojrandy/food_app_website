"use client";

import * as React from "react";
import { m, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingDeviceProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

export function FloatingDevice({ children, className, delay = 0, yOffset = 15 }: FloatingDeviceProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={cn("relative", className)}>{children}</div>;
  }

  return (
    <m.div
      initial={{ y: 0 }}
      animate={{ y: [0, -yOffset, 0] }}
      transition={{ 
        duration: 6, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay 
      }}
      className={cn("relative", className)}
    >
      {children}
    </m.div>
  );
}
