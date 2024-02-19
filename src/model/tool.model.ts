import { Tool as ToolType, ToolDetail } from "@/types/tool.type";
import { Model, Schema, model, models } from "mongoose";

const toolDetailSchema = new Schema<ToolDetail>({
  weight: { type: String },
  amountInSet: { type: String },
  amountInBulk: { type: String },
  length: { type: String },
  material: { type: String },
});

const toolSchema = new Schema<ToolType>({
  name: { type: String, required: true },
  code: { type: String, required: true },
  price: { type: Number },
  brand: { type: Schema.Types.ObjectId, ref: "Brand", required: true }, // Adjust "Brand" based on your actual model name
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true }, // Adjust "Category" based on your actual model name
  detail: toolDetailSchema,
  image: { type: String, required: true },
  description: { type: String, required: true },
  available: { type: Boolean, default: true },
});

const Tool =
  (models.Tool as Model<ToolType>) || model<ToolType>("Tool", toolSchema);

export default Tool;
