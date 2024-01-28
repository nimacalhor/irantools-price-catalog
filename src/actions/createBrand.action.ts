"use action"
import { connectToDB } from "@/lib/mongo-connection";
import Brand from "@/model/brand.model";
import { Brand as BrandType } from "@/types/setting.type";
import { revalidatePath } from "next/cache";

async function createBrand(brand: BrandType) {
  try {
    await connectToDB();
    const newBrand = new Brand(brand);
    await newBrand.save();
    revalidatePath("/setting")
    return { ok: true };
  } catch (error) {
    return { ok: false, message: "مشکلی حین ذخیره سازی برند اتفاق افتاد" };
  }
}

export default createBrand;
