import { listCriteriaSchema } from "@/schemas/criteria.schema";
import { ZodError } from "zod";

export function validateCriteria(criteria: Record<string, any>) {
  return listCriteriaSchema.safeParse(criteria);
}
