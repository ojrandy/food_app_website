"use client";

import * as React from "react";

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  // Setup placeholder for Vercel Analytics or Google Tag Manager
  React.useEffect(() => {
    // console.log("Analytics initialized");
  }, []);

  return <>{children}</>;
}
