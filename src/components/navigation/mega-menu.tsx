"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface MegaMenuProps {
  isOpen: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function MegaMenu({ isOpen, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "absolute top-full left-0 w-full bg-card border-b border-border shadow-lg",
        "animate-in fade-in slide-in-from-top-2 duration-200 z-50"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto max-w-7xl px-4 py-8 grid grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold text-smartOrange mb-4">Core Features</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="hover:text-foreground transition-colors cursor-pointer">AI Meal Generation</li>
            <li className="hover:text-foreground transition-colors cursor-pointer">Smart Grocery Lists</li>
            <li className="hover:text-foreground transition-colors cursor-pointer">Nutritional Tracking</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-smartOrange mb-4">Advanced</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="hover:text-foreground transition-colors cursor-pointer">Pantry Integration</li>
            <li className="hover:text-foreground transition-colors cursor-pointer">Family Planning</li>
            <li className="hover:text-foreground transition-colors cursor-pointer">Dietary Restrictions</li>
          </ul>
        </div>
        <div className="bg-muted p-6 rounded-lg">
          <h4 className="font-semibold mb-2">Research Backed</h4>
          <p className="text-sm text-muted-foreground">
            Our recommendation engine is built on validated nutritional research models.
          </p>
        </div>
      </div>
    </div>
  );
}
