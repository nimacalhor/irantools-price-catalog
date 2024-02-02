"use server";
import { saveImage } from "@/api/image.api";
import { connectToDB } from "@/lib/mongo-connection";
import Tool from "@/model/tool.model";
import { Tool as ToolType } from "@/types/tool.type";
import { revalidatePath } from "next/cache";

async function createTool(formData: FormData) {
  try {
    await connectToDB();
    const toolData = JSON.parse(
      (formData.get("toolData") as string | null) || "{}"
    );
    const duplicateTool = await Tool.findOne({ name: toolData.name });
    if (duplicateTool)
      return { ok: false, message: "قبلا محصولی با این عنوان ثبت شده" };

    const { ok, imagePath } = await saveImage(formData);
    if (!ok) return { ok: false };

    const newTool = new Tool({ ...toolData, image: imagePath });

    await newTool.save();

    revalidatePath("/");
    revalidatePath("/create");
    return { ok: true };
  } catch (error) {
    console.log({ error });
    if (
      error instanceof Error &&
      error.name === "MongoError" &&
      (error as any).code === 11000
    ) {
      // Handle duplicate key error
      return { ok: false, message: "این محصول قبلا ثبت شده است." };
    }
    return { ok: false, message: "مشکلی حین ذخیره سازی محصول اتفاق افتاد" };
  }
}

export default createTool;
