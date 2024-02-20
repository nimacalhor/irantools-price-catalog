"use server";
import { uploadImage } from "@/api/image.api";
import { connectToDB } from "@/lib/mongo-connection";
import Brand from "@/model/brand.model";
import { revalidatePath } from "next/cache";

async function createBrand(formData: FormData) {
  try {
    await connectToDB();
    const title = formData.get("title");
    const duplicateBrand = await Brand.findOne({ title });
    if (duplicateBrand)
      return { ok: false, message: "قبلا برندی با این عنوان ثبت شده" };

    const { ok, imagePath } = await uploadImage(formData);
    console.log(ok);
    if (!ok) return { ok: false };

    const newBrand = new Brand({
      title: formData.get("title") as unknown as string,
      image: imagePath,
    });

    await newBrand.save();

    revalidatePath("/setting");
    return { ok: true };
  } catch (error) {
    console.log({ error });
    if (
      error instanceof Error &&
      error.name === "MongoError" &&
      (error as any).code === 11000
    ) {
      // Handle duplicate key error
      return { ok: false, message: "این برند قبلا ثبت شده است." };
    }
    return { ok: false, message: "مشکلی حین ذخیره سازی برند اتفاق افتاد" };
  }
}

export default createBrand;
