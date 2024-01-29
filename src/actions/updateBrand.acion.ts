"use server"

import { connectToDB } from "@/lib/mongo-connection";
import Brand from "@/model/brand.model";
import { Brand as BrandType } from "@/types/setting.type";
import { revalidatePath } from "next/cache";

async function updateBrand(id: string, brandUpdateData: any) {
  try {
    await connectToDB();
    await Brand.findByIdAndUpdate(id, brandUpdateData, {
      new: true,
      runValidators: true,
    });
    revalidatePath("/setting");
    return { ok: true };
  } catch (error) {
    return { ok: false, message: "مشکلی حین ویرایش سازی برند اتفاق افتاد" };
  }
}

export default updateBrand;
