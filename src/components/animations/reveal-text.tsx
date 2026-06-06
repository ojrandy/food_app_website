"use client";

import * as React from "react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  text: string;
  as?: React.ElementType;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function RevealText({ text, as: Component = "p", className, staggerDelay = 0.05, once = true }: RevealTextProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <Component className={cn("overflow-hidden flex flex-wrap", className)}>
      <m.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-50px" }}
        className="flex flex-wrap gap-[0.25em]"
      >
        {words.map((word, index) => (
          <m.span variants={child} key={index} className="inline-block">
            {word}
          </m.span>
        ))}
      </m.span>
    </Component>
  );
}
