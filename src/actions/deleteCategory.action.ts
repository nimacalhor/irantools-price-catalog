"use server";

import { deleteImage } from "@/api/image.api";
import { connectToDB } from "@/lib/mongo-connection";
import Category from "@/model/category.model";
import { revalidatePath } from "next/cache";

async function deleteCategory(id: string, imageName: string) {
  try {
     
    await connectToDB();
    await Category.findByIdAndDelete(id);
    revalidatePath("/setting");
    deleteImage(imageName);
    return { ok: true };
  } catch (error) {
    return { ok: false, message: "مشکلی حین حذف سازی برند اتفاق افتاد" };
  }
}

export default deleteCategory;
