import { connectToDB } from "@/lib/mongo-connection";
import Category from "@/model/category.model";

export async function getCategoryList() {
  try {
    await connectToDB();
    const categories = (await Category.find({})).map((ctg) => ({
      ...ctg.toJSON(),
      _id: ctg._id.toString(),
    }));
    return { ok: true, categories, message: null };
  } catch (error) {
    console.log({ error });
    return { ok: false, message: "مشکلی در ارتباز با سرور اتفاق افتاد" };
  }
}
