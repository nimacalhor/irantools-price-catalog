import { Brand } from "@/types/setting.type";
import { Schema, model } from "mongoose";

const brandSchema = new Schema<Brand>({
  title: { type: String, required: true, unique: true },
  image: { type: String, required: true },
});

const Brand = model<Brand>("Brands", brandSchema);

export default Brand;
