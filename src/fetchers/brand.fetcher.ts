import { connectToDB } from "@/lib/mongo-connection";
import Brand from "@/model/brand.model";

export async function getBrandList() {
  try {
    await connectToDB();
    const brands = await Brand.find();
    return {ok:true, brands, message: null};
  } catch (error) {
    console.log({error})
    return { ok: false, message: "مشکلی در ارتباز با سرور اتفاق افتاد" };
  }
}
