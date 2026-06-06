import { z } from "zod";

const FAQSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
});

export type FAQ = z.infer<typeof FAQSchema>;

const rawFAQs = [
  {
    id: "f1",
    question: "How does the AI determine my macronutrients?",
    answer: "Our engine uses a combination of your biometric data (age, weight, height, gender), activity level, and specific goals (e.g., muscle gain, fat loss) processed through validated Harris-Benedict and Mifflin-St Jeor equations, dynamically adjusted by our proprietary ML model.",
  },
  {
    id: "f2",
    question: "Can it handle multiple dietary restrictions at once?",
    answer: "Yes. SmartMeal AI's filtering system allows you to stack as many restrictions as needed. For example, you can generate a plan that is strictly Vegan, Gluten-Free, and High-Protein simultaneously.",
  },
  {
    id: "f3",
    question: "Is my personal health data secure?",
    answer: "Absolutely. We employ bank-level encryption and strictly adhere to HIPAA and GDPR guidelines. Your biometric data is never sold or shared with third parties.",
  },
];

export const FAQS = z.array(FAQSchema).parse(rawFAQs);
