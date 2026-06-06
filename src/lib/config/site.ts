export const siteConfig = {
  name: "SmartMeal AI",
  shortName: "SmartMeal",
  description: "An AI-powered food recommendation and meal planning platform.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://smartmeal-ai.com",
  ogImage: "https://smartmeal-ai.com/og.jpg",
  links: {
    twitter: "https://twitter.com/smartmealai",
    github: "https://github.com/smartmealai",
  },
  creator: "SmartMeal Team",
};

export type SiteConfig = typeof siteConfig;
