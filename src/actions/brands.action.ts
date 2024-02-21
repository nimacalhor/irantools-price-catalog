"use server"
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
  revalidatePath("/setting");
  revalidatePath("/create");
  return deleteBrandResponse;
}

export async function updateBrandAction(
  brandId: string,
  updateBrandData: UpdateBrandRequestBody
) {
  const updateBrandResponse = await updateBrand(brandId, updateBrandData);
  revalidatePath("/setting");
  revalidatePath("/create");
  return updateBrandResponse;
}
