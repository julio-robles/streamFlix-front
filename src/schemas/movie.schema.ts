import { z } from 'zod';

export const MovieSchema = z.object({
  id: z.number(),
  title: z.string(),
  release_date: z.string()
});

export type Movie = z.infer<typeof MovieSchema>;
