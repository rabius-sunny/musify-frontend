import * as z from 'zod'

export const searchSchema = z.object({
  searchKey: z
    .string()
    .min(2, 'please enter at least 2 characters')
    .max(20, 'maximum characters exceeded')
})

export type TSearchSchema = z.infer<typeof searchSchema>
