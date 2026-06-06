/**
 * SmartMeal AI - Typography System
 * Complete typographic hierarchy mapping to Tailwind utilities.
 */

export const typography = {
  // Core fonts mapped to CSS variables
  fonts: {
    sans: "var(--font-sans)",
    mono: "var(--font-mono)",
  },

  // Typography Hierarchy (Scale)
  hierarchy: {
    display: {
      fontSize: "text-6xl md:text-8xl",
      fontWeight: "font-extrabold",
      lineHeight: "leading-tight",
      letterSpacing: "tracking-tighter",
    },
    h1: {
      fontSize: "text-5xl md:text-6xl",
      fontWeight: "font-bold",
      lineHeight: "leading-tight",
      letterSpacing: "tracking-tight",
    },
    h2: {
      fontSize: "text-4xl md:text-5xl",
      fontWeight: "font-bold",
      lineHeight: "leading-tight",
      letterSpacing: "tracking-tight",
    },
    h3: {
      fontSize: "text-3xl md:text-4xl",
      fontWeight: "font-semibold",
      lineHeight: "leading-tight",
      letterSpacing: "tracking-tight",
    },
    h4: {
      fontSize: "text-2xl md:text-3xl",
      fontWeight: "font-semibold",
      lineHeight: "leading-snug",
      letterSpacing: "tracking-normal",
    },
    h5: {
      fontSize: "text-xl md:text-2xl",
      fontWeight: "font-medium",
      lineHeight: "leading-snug",
      letterSpacing: "tracking-normal",
    },
    h6: {
      fontSize: "text-lg md:text-xl",
      fontWeight: "font-medium",
      lineHeight: "leading-normal",
      letterSpacing: "tracking-normal",
    },
  },

  // Body Text
  body: {
    large: {
      fontSize: "text-lg",
      fontWeight: "font-normal",
      lineHeight: "leading-relaxed",
    },
    medium: {
      fontSize: "text-base",
      fontWeight: "font-normal",
      lineHeight: "leading-relaxed",
    },
    small: {
      fontSize: "text-sm",
      fontWeight: "font-normal",
      lineHeight: "leading-relaxed",
    },
  },

  // Utility Text
  utility: {
    caption: {
      fontSize: "text-xs",
      fontWeight: "font-medium",
      lineHeight: "leading-none",
    },
    label: {
      fontSize: "text-sm",
      fontWeight: "font-medium",
      lineHeight: "leading-none",
      textTransform: "uppercase",
      letterSpacing: "tracking-wide",
    },
  },
};
