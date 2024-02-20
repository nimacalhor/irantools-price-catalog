"use server";
import { uploadImage } from "@/api/image.api";
import { connectToDB } from "@/lib/mongo-connection";
import Category from "@/model/category.model";
import { revalidatePath } from "next/cache";

async function createCategory(formData: FormData) {
  try {
    await connectToDB();
    const title = formData.get("title");
    console.log(title)
    const duplicateCategory = await Category.findOne({ title });
    if (duplicateCategory)
      return { ok: false, message: "قبلا برندی با این عنوان ثبت شده" };

    const { ok, imagePath } = await uploadImage(formData);
    if (!ok) return { ok: false };

    const newCategory = new Category({
      title: formData.get("title") as unknown as string,
      image: imagePath,
    });

    await newCategory.save();

    revalidatePath("/setting");
    return { ok: true };
  } catch (error) {
    console.log({ error });
    if (
      error instanceof Error &&
      (error as any).code === 11000
    ) {
      // Handle duplicate key error
      return { ok: false, message: "این دسته بندی قبلا ثبت شده است." };
    }
    return { ok: false, message: "مشکلی حین ذخیره سازی برند اتفاق افتاد" };
  }
}

export default createCategory;
