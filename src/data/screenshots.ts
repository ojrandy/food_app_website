import { z } from "zod";

const ScreenshotSchema = z.object({
  id: z.string(),
  src: z.string().url().or(z.string().startsWith("/")),
  alt: z.string().min(5),
  caption: z.string().optional(),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
});

export type Screenshot = z.infer<typeof ScreenshotSchema>;

const rawScreenshots = [
  {
    id: "dashboard",
    src: "https://images.unsplash.com/photo-1498837167922-41c54333b207?auto=format&fit=crop&w=1200&q=80",
    alt: "SmartMeal AI Dashboard Interface showing daily macro breakdowns",
    caption: "Your complete nutritional overview at a glance.",
    width: 1200,
    height: 800,
  },
  {
    id: "meal-plan",
    src: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=1200&q=80",
    alt: "Weekly meal planner view with recipe cards",
    caption: "Drag and drop meals to perfectly fit your schedule.",
    width: 1200,
    height: 800,
  },
];

export const SCREENSHOTS = z.array(ScreenshotSchema).parse(rawScreenshots);
