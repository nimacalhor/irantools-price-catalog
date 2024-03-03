import { z } from "zod";

export const listCriteriaSchema = z.object({
  limit: z
    .number({ invalid_type_error: `مقدار "limit" باید عدد باشد` })
    .min(1, { message: `مقدار "limit" باید حداقل 1 کاراکتر داشته باشد` })
    .optional(),
  page: z
    .number({ invalid_type_error: `مقدار "page" باید عدد باشد` })
    .min(1, { message: `مقدار "page" باید حداقل 1 کاراکتر داشته باشد` })
    .optional(),
  select: z
    .string({ invalid_type_error: `مقدار "select" باید متن باشد` })
    .min(1, { message: `مقدار "select" باید حداقل 1 کاراکتر داشته باشد` })
    .optional(),
  sort: z
    .string({ invalid_type_error: `مقدار "sort" باید متن باشد` })
    .min(1, { message: `مقدار "sort" باید حداقل 1 کاراکتر داشته باشد` })
    .optional(),
  populate: z
    .string({ invalid_type_error: `مقدار "populate" باید متن باشد` })
    .min(1, { message: `مقدار "populate" باید حداقل 1 کاراکتر داشته باشد` })
    .optional(),
  brand: z
    .string({ invalid_type_error: `مقدار "brand" باید متن باشد` })
    .min(1, { message: `مقدار "brand" باید حداقل 1 کاراکتر داشته باشد` })
    .optional(),
  category: z
    .string({ invalid_type_error: `مقدار "category" باید متن باشد` })
    .min(1, { message: `مقدار "category" باید حداقل 1 کاراکتر داشته باشد` })
    .optional(),
  name: z
    .string({ invalid_type_error: `مقدار "name" باید متن باشد` })
    .min(1, { message: `مقدار "name" باید حداقل 1 کاراکتر داشته باشد` })
    .optional(),
  code: z
    .string({ invalid_type_error: `مقدار "code" باید متن باشد` })
    .min(1, { message: `مقدار "code" باید حداقل 1 کاراکتر داشته باشد` })
    .optional(),
});
