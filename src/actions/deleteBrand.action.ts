"use server";

import { deleteImage } from "@/api/image.api";
import { connectToDB } from "@/lib/mongo-connection";
import Brand from "@/model/brand.model";
import { revalidatePath } from "next/cache";

async function deleteBrand(id: string, imageName: string) {
  try {
    debugger;
    await connectToDB();
    await Brand.findByIdAndDelete(id);
    revalidatePath("/setting");
    deleteImage(imageName);
    return { ok: true };
  } catch (error) {
    return { ok: false, message: "مشکلی حین حذف سازی برند اتفاق افتاد" };
  }
}

export default deleteBrand;
