import { z } from "zod";

export const filterSchema = z.object({
  name: z
    .string({ invalid_type_error: `name باید مقداری متنی باشد` })
    .optional(),
  code: z
    .string({ invalid_type_error: `code باید مقداری متنی باشد` })
    .optional(),
  brand: z
    .string({ invalid_type_error: `brand باید مقداری متنی باشد` })
    .optional(),
  category: z
    .string({ invalid_type_error: `category باید مقداری متنی باشد` })
    .optional(),
});
