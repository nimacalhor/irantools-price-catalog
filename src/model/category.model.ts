import { Schema, model } from "mongoose";

type Category = {
  name: string;
};

const categorySchema = new Schema<Category>({
  name: { type: String, required: true, unique: true },
});

const Category = model<Category>("Categories", categorySchema);

export default Category;
