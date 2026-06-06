import { z } from "zod";

const AboutSchema = z.object({
  mission: z.string(),
  vision: z.string(),
  values: z.array(z.string()),
});

export type About = z.infer<typeof AboutSchema>;

const rawAbout = {
  mission: "To democratize elite-level nutritional planning using advanced artificial intelligence.",
  vision: "A world where optimal health is effortless, personalized, and accessible to everyone.",
  values: [
    "Science-Backed Objectivity",
    "Radical Personalization",
    "User Data Privacy",
    "Continuous Evolution",
  ],
};

export const ABOUT = AboutSchema.parse(rawAbout);
