import { z } from "zod";
import { Brain, HeartPulse, ListChecks, Leaf, Utensils, Target } from "lucide-react";

// Note: LucideIcon is a component, so we validate the rest of the data and pass the icon reference safely.
const FeatureSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  description: z.string().min(10),
  iconName: z.enum(["brain", "heart-pulse", "list-checks", "leaf", "utensils", "target"]),
});

export type Feature = z.infer<typeof FeatureSchema> & {
  icon: React.ElementType; // Attach the actual React component type
};

const rawFeatures = [
  {
    id: "ai-generation",
    title: "AI Meal Generation",
    description: "Instantly generate week-long meal plans perfectly tailored to your metabolic rate, goals, and taste preferences using our advanced nutritional models.",
    iconName: "brain" as const,
  },
  {
    id: "grocery-lists",
    title: "Smart Grocery Lists",
    description: "Automatically compile ingredients from your meal plan into categorized shopping lists. Never forget an item or buy excess ingredients again.",
    iconName: "list-checks" as const,
  },
  {
    id: "health-tracking",
    title: "Macro & Micronutrient Tracking",
    description: "Go beyond calories. SmartMeal AI tracks deep nutritional data ensuring you hit your vitamin, mineral, and macronutrient targets every single day.",
    iconName: "heart-pulse" as const,
  },
  {
    id: "dietary-filters",
    title: "Complex Dietary Filters",
    description: "Vegan, Keto, Paleo, or specific allergies? Our engine seamlessly filters millions of recipes to strictly comply with your dietary boundaries.",
    iconName: "leaf" as const,
  },
];

const iconMap: Record<Feature["iconName"], React.ElementType> = {
  brain: Brain,
  "heart-pulse": HeartPulse,
  "list-checks": ListChecks,
  leaf: Leaf,
  utensils: Utensils,
  target: Target,
};

// Validate and attach components
export const FEATURES: Feature[] = z.array(FeatureSchema).parse(rawFeatures).map(feature => ({
  ...feature,
  icon: iconMap[feature.iconName],
}));
