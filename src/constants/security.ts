/**
 * SmartMeal AI - Security Standards
 * Frontend security configurations and future CSP preparation.
 */

export const security = {
  // Content Security Policy (CSP) Directives (Future-proof)
  csp: {
    defaultSrc: ["'self'"],
    scriptSrc: [
      "'self'",
      "'unsafe-eval'", // For Next.js dev mode (remove in prod)
      "https://www.googletagmanager.com",
    ],
    styleSrc: ["'self'", "'unsafe-inline'"], // required by some UI libraries / Framer Motion
    imgSrc: [
      "'self'",
      "data:",
      "blob:",
      "https://images.unsplash.com",
      "https://res.cloudinary.com", // Example external assets
    ],
    fontSrc: ["'self'", "https://fonts.gstatic.com"],
    connectSrc: [
      "'self'",
      "https://api.smartmeal.ai",
      "https://vitals.vercel-insights.com",
    ],
    frameSrc: ["'self'", "https://www.youtube.com"],
  },

  // Trusted Domains for Assets/Images (mapped to next.config.ts)
  trustedDomains: [
    "images.unsplash.com",
    "res.cloudinary.com",
    "smartmeal.ai",
  ],

  // Security Policies for developers
  policies: {
    allowInlineStyles: false, // Strict: Prevent arbitrary inline styling
    allowDangerouslySetInnerHTML: false, // Strict: Prevent XSS
    allowUnsafeScripts: false,
    requireHTTPS: true,
  },
};
