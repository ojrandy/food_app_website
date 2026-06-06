import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SmartMeal AI",
    short_name: "SmartMeal",
    description: "Your Personal AI Chef & Nutritionist.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#FF5E1E",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
