import { z } from "zod";
import { Schema, Types } from "mongoose";
import type { Tool, ToolDetail } from "@/types/tool.type";

const TITLE_REQUIRED_MSG_ZOD = 'وارد کردن "عنوان" الزامی است.';
const NUMERIC_FORMAT_MSG_ZOD = '"{#label}" باید فقط شامل ارقام باشد.';
const TITLE_REQUIRED_MSG = 'وارد کردن "عنوان" الزامی است.';
const NUMERIC_FORMAT_MSG = 'فرمت "{PATH}" صحیح نیست؛ باید فقط شامل ارقام باشد.';
const CODE_REQUIRED_MSG = 'وارد کردن "کد" الزامی است.';
const BRAND_REQUIRED_MSG = 'وارد کردن "برند" الزامی است.';
const CATEGORY_REQUIRED_MSG = 'وارد کردن "دسته بندی" الزامی است.';
const DETAIL_REQUIRED_MSG = 'وارد کردن "جزئیات" الزامی است.';
const IMAGE_REQUIRED_MSG = 'وارد کردن "تصویر" الزامی است.';
const DESCRIPTION_REQUIRED_MSG = 'وارد کردن "توضیحات" الزامی است.';
const AVAILABLE_REQUIRED_MSG = 'وارد کردن "در دسترس بودن" الزامی است.';

const ToolDetailSchema = new Schema<ToolDetail>({
  weight: { type: String, required: false },
  amountInSet: { type: Number, required: false },
  amountInBulk: { type: Number, required: false },
  length: { type: String, required: false },
  material: { type: String, required: false },
});

const ToolSchema = new Schema<Tool>({
  name: { type: String, required: [true, TITLE_REQUIRED_MSG] },
  code: { type: String, required: [true, CODE_REQUIRED_MSG] },
  price: {
    type: String,
    validate: {
      validator: (value: string) => /^[0-9]+$/.test(value),
      message: NUMERIC_FORMAT_MSG,
    },
  },
  brand: {
    type: Schema.Types.ObjectId,
    required: [true, BRAND_REQUIRED_MSG],
    ref: "Brands",
  },
  category: {
    type: Schema.Types.ObjectId,
    required: [true, CATEGORY_REQUIRED_MSG],
    ref: "Categories",
  },
  detail: {
    type: ToolDetailSchema,
    required: [true, DETAIL_REQUIRED_MSG],
  },
  image: { type: String, required: [true, IMAGE_REQUIRED_MSG] },
  description: { type: String, required: [true, DESCRIPTION_REQUIRED_MSG] },
  available: { type: Boolean, required: [true, AVAILABLE_REQUIRED_MSG] },
});

const ToolDetailZodSchema = z.object({
  weight: z.string().optional(),
  amountInSet: z
    .string()
    .regex(/[0-9]+/)
    .optional(),
  amountInBulk: z
    .string()
    .regex(/[0-9]+/)
    .optional(),
  length: z.string().optional(),
  material: z.string().optional(),
});

const toolZodSchema = z.object({
  name: z.string({ required_error: TITLE_REQUIRED_MSG_ZOD }),
  code: z.string({ required_error: CODE_REQUIRED_MSG }),
  price: z
    .string()
    .refine((value) => /^[0-9]+$/.test(value), {
      message: NUMERIC_FORMAT_MSG_ZOD,
    })
    .optional(),
  brand: z.string({ required_error: BRAND_REQUIRED_MSG }), // Assuming you use MongoDB ObjectId as a string
  category: z.string({ required_error: CATEGORY_REQUIRED_MSG }), // Assuming you use MongoDB ObjectId as a string
  detail: ToolDetailZodSchema,
});

export { toolZodSchema };

export default ToolSchema;
