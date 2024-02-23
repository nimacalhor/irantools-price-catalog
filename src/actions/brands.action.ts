"use server";
import { createBrand, deleteBrand, updateBrand } from "@/api/brand.api";
import { uploadImage } from "@/api/image.api";
import {
  CreateBrandRequestBody,
  CreateBrandResponse,
  UpdateBrandRequestBody,
} from "@/types/brands.type";
import { ApiReturnType } from "@/types/common.type";
import { revalidatePath } from "next/cache";

export async function createBrandAction(
  brandData: CreateBrandRequestBody,
  formData: FormData
): Promise<ApiReturnType<CreateBrandResponse["data"]>> {
  // save image
  const uploadImageResponse = await uploadImage(formData);
  if (!uploadImageResponse.ok)
    return { ok: false, message: uploadImageResponse.message };

  // save brand
  brandData = { ...brandData, image: uploadImageResponse.data._id };
  const createBrandResponse = await createBrand(brandData);
  revalidatePath("/setting");
  revalidatePath("/create");
  return createBrandResponse;
}

export async function deleteBrandAction(brandId: string) {
  const deleteBrandResponse = await deleteBrand(brandId);
  if (!deleteBrandResponse.ok) return deleteBrandResponse;
   
  revalidatePath("/setting", "page");
  revalidatePath("/create", "page");
   
  return deleteBrandResponse;
}

export async function updateBrandAction(
  brandId: string,
  updateBrandData: UpdateBrandRequestBody,
  formData?: FormData
) {
  let image: string | undefined = undefined;
  // save new image
  if (formData) {
    const uploadImageResponse = await uploadImage(formData);
    if (!uploadImageResponse.ok)
      return { ok: false, message: uploadImageResponse.message };

    image = uploadImageResponse.data._id;
  }

  const updateBrandResponse = await updateBrand(brandId, {
    title: updateBrandData.title,
    image,
  });
  revalidatePath("/setting");
  revalidatePath("/create");
  return updateBrandResponse;
}
