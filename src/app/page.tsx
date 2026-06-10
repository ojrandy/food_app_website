import * as React from "react";
import { Hero, Footer } from "@/components/sections";
import { ValueStrip } from "@/components/sections/value-strip";
import { FoodChallenges } from "@/components/sections/food-challenges";
import { DownloadApp } from "@/components/sections/download-app";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { RecipeDiscovery } from "@/components/sections/recipe-discovery";
import { BottomCTA } from "@/components/sections/bottom-cta";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden bg-white">
      <Hero />
      <ValueStrip />
      <FoodChallenges />
      <DownloadApp />
      <WhyChooseUs />
      <RecipeDiscovery />
      <BottomCTA />
      <Footer />
    </main>
  );
}
