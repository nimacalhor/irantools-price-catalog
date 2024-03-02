import { z } from "zod";

export const listCriteriaSchema = z.object({
  limit: z
    .number({ invalid_type_error: `مقدار "limit" باید عدد باشد` })
    .optional(),
  page: z
    .number({ invalid_type_error: `مقدار "page" باید عدد باشد` })
    .optional(),
  select: z
    .string({ invalid_type_error: `مقدار "select" باید متن باشد` })
    .optional(),
  sort: z
    .string({ invalid_type_error: `مقدار "sort" باید متن باشد` })
    .optional(),
  populate: z
    .string({ invalid_type_error: `مقدار "populate" باید متن باشد` })
    .optional(),
});
