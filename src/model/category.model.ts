import type { Category as CategoryType } from "@/types/setting.type";
import { Model, Schema, model, models } from "mongoose";

const categorySchema = new Schema<CategoryType>({
  title: { type: String, required: true, unique: true },
  image: { type: String, required: true },
});

const Category =
  (models?.Categories as Model<CategoryType>) ||
  model<CategoryType>("Categories", categorySchema);

export default Category;
