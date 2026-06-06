"use client";

import * as React from "react";
import { m, AnimatePresence } from "framer-motion";

export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="w-full h-full flex flex-col"
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
}
