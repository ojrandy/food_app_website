import { z } from "zod";

const StatisticSchema = z.object({
  id: z.string(),
  label: z.string(),
  value: z.string().or(z.number()),
  prefix: z.string().optional(),
  suffix: z.string().optional(),
});

export type Statistic = z.infer<typeof StatisticSchema>;

const rawStatistics = [
  {
    id: "s1",
    label: "Active Users",
    value: "50",
    suffix: "k+",
  },
  {
    id: "s2",
    label: "Meals Generated",
    value: "2.4",
    suffix: "M",
  },
  {
    id: "s3",
    label: "Algorithm Accuracy",
    value: "99",
    suffix: "%",
  },
];

export const STATISTICS = z.array(StatisticSchema).parse(rawStatistics);
