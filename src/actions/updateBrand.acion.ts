"use server";

import { deleteImage, uploadImage } from "@/api/image.api";
import { connectToDB } from "@/lib/mongo-connection";
import Brand from "@/model/brand.model";
import { Brand as BrandType } from "@/types/setting.type";
import { revalidatePath } from "next/cache";

async function updateBrand(id: string, formData: FormData) {
  try {
    // Extracting values from formData
    const [title, image, oldImage] = [
      formData.get("title"),
      formData.get("image"),
      formData.get("oldImage"),
    ];

    // If an old image is provided, delete it
    if (oldImage) await deleteImage(oldImage as string);

    let newImagePath: string | undefined;

    // If a new image is provided, save it using the uploadImage function
    if (image) {
      const { ok, imagePath } = await uploadImage(formData);
      if (!ok) return { ok: false };
      newImagePath = imagePath as string;
    }

    // Connect to the database
    await connectToDB();

    // Prepare data for updating the brand
    const brandUpdateData: BrandType = {
      title: title as string,
      image: newImagePath,
    };

    // Update the brand in the database
    await Brand.findByIdAndUpdate(id, brandUpdateData);

    // Revalidate the specified path in the Next.js application
    revalidatePath("/setting");

    // Return a success response
    return { ok: true };
  } catch (error) {
    // Return an error response with a generic error message
    return {
      ok: false,
      message: "An error occurred while updating the brand.",
    };
  }
}

export default updateBrand;
