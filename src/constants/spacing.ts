/**
 * SmartMeal AI - Spacing, Shadow, and Border Radius Systems
 */

export const spacing = {
  // 4px-based Spacing Scale
  scale: {
    4: "0.25rem",  // 4px
    8: "0.5rem",   // 8px
    12: "0.75rem", // 12px
    16: "1rem",    // 16px
    20: "1.25rem", // 20px
    24: "1.5rem",  // 24px
    32: "2rem",    // 32px
    40: "2.5rem",  // 40px
    48: "3rem",    // 48px
    64: "4rem",    // 64px
    80: "5rem",    // 80px
    96: "6rem",    // 96px
  },

  // Border Radius System
  radius: {
    sm: "0.125rem", // 2px
    md: "0.375rem", // 6px
    lg: "0.5rem",   // 8px
    xl: "0.75rem",  // 12px
    "2xl": "1rem",  // 16px
    "3xl": "1.5rem",// 24px
    full: "9999px",
  },

  // Shadow System
  shadows: {
    xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    
    // Custom Semantic Shadows
    glass: "0 8px 32px 0 rgba(0, 0, 0, 0.05)",
    floatingCard: "0 20px 40px -10px rgba(0,0,0,0.1), 0 10px 20px -5px rgba(0,0,0,0.05)",
    navigation: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
  },
};
