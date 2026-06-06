/**
 * SmartMeal AI - Color System
 * Semantic color tokens with light and dark mode support.
 */

export const colors = {
  // Brand
  primary: {
    DEFAULT: "#FF5E1E", // Smart Orange
    light: "#FF8A5B",
    dark: "#CC4B18",
    foreground: "#FFFFFF",
  },
  secondary: {
    DEFAULT: "#1C1C1E", // Dark Charcoal
    light: "#2C2C2E",
    dark: "#000000",
    foreground: "#FFFFFF",
  },
  accent: {
    DEFAULT: "#FF5E1E",
    foreground: "#FFFFFF",
  },
  
  // Semantic
  success: {
    DEFAULT: "#34C759", // Health/Success Green
    light: "#66D482",
    dark: "#2A9F47",
    foreground: "#FFFFFF",
  },
  warning: {
    DEFAULT: "#FFCC00",
    light: "#FFD633",
    dark: "#CCA300",
    foreground: "#1C1C1E",
  },
  error: {
    DEFAULT: "#FF3B30",
    light: "#FF6259",
    dark: "#CC2F26",
    foreground: "#FFFFFF",
  },
  info: {
    DEFAULT: "#2196F3", // AI Blue
    light: "#64B5F6",
    dark: "#1976D2",
    foreground: "#FFFFFF",
  },

  // Neutral Scale
  neutral: {
    50: "#FAFAFA", // Backgrounds
    100: "#F5F5F5",
    200: "#E5E5E5", // Borders
    300: "#D4D4D4",
    400: "#A3A3A3", // Placeholder text
    500: "#737373", // Muted text
    600: "#525252",
    700: "#404040", // Body text
    800: "#262626",
    900: "#171717", // Headings
    950: "#0A0A0A",
  },

  // Theme Variables
  theme: {
    light: {
      background: "#FDF8F5", // Warm Cream
      foreground: "#1C1C1E",
      card: "#FFFFFF", // Soft White
      cardForeground: "#1C1C1E",
      border: "#E5E5E5",
      muted: "#F5F5F5",
      mutedForeground: "#737373",
    },
    dark: {
      background: "#0A0A0A",
      foreground: "#FAFAFA",
      card: "#171717",
      cardForeground: "#FAFAFA",
      border: "#262626",
      muted: "#262626",
      mutedForeground: "#A3A3A3",
    },
  },
};
