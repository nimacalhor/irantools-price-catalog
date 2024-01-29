import type { Brand } from "@/types/setting.type";
import { Model, Schema, model, models } from "mongoose";

const brandSchema = new Schema<Brand>({
  title: { type: String, required: true, unique: true },
  image: { type: String, required: true },
});

const Brand =
  (models.Brands as Model<Brand>) || model<Brand>("Brands", brandSchema);

export default Brand;
