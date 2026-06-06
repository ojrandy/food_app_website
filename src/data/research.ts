import { z } from "zod";

const ResearchCitationSchema = z.object({
  id: z.string(),
  title: z.string(),
  authors: z.string(),
  journal: z.string(),
  year: z.number().int().min(1900).max(new Date().getFullYear()),
  doiUrl: z.string().url(),
});

export type ResearchCitation = z.infer<typeof ResearchCitationSchema>;

const rawResearch = [
  {
    id: "c1",
    title: "Machine Learning Approaches to Personalized Nutrition",
    authors: "Smith, J. et al.",
    journal: "Journal of Nutritional Science",
    year: 2024,
    doiUrl: "https://doi.org/10.1016/example1",
  },
  {
    id: "c2",
    title: "Efficacy of AI-Driven Meal Planning on Metabolic Syndrome Markers",
    authors: "Doe, J., & Lee, M.",
    journal: "Clinical Nutrition",
    year: 2025,
    doiUrl: "https://doi.org/10.1016/example2",
  },
];

export const RESEARCH_CITATIONS = z.array(ResearchCitationSchema).parse(rawResearch);
