"use client";

import * as React from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface DeviceParallaxProps {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}

export function DeviceParallax({ children, className, offset = 50 }: DeviceParallaxProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <m.div ref={ref} style={{ y }} className={cn(className)}>
      {children}
    </m.div>
  );
}
