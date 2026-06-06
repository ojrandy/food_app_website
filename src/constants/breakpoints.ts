/**
 * SmartMeal AI - Breakpoint System
 * Centralized responsive breakpoints aligned with Tailwind defaults.
 * Mobile First approach.
 */

export const breakpoints = {
  sm: 640,   // Mobile landscape / Small tablets
  md: 768,   // Tablets
  lg: 1024,  // Small laptops
  xl: 1280,  // Desktops
  "2xl": 1536, // Large displays
};

export const mediaQueries = {
  sm: `(min-width: ${breakpoints.sm}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,
  "2xl": `(min-width: ${breakpoints["2xl"]}px)`,
};
