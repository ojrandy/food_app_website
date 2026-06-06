import { z } from "zod";

const TechnologySchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.enum(["Frontend", "Backend", "AI", "Infrastructure"]),
});

export type Technology = z.infer<typeof TechnologySchema>;

const rawTechnologies = [
  { id: "tech1", name: "Next.js 15", category: "Frontend" as const },
  { id: "tech2", name: "Tailwind CSS v4", category: "Frontend" as const },
  { id: "tech3", name: "OpenAI GPT-4o", category: "AI" as const },
  { id: "tech4", name: "Supabase", category: "Backend" as const },
];

export const TECHNOLOGIES = z.array(TechnologySchema).parse(rawTechnologies);
