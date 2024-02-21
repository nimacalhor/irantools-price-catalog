"use server";
import {
  createCategory,
  deleteCategory,
  updateCategory,
} from "@/api/category.api";
import { uploadImage } from "@/api/image.api";
import {
  CreateCategoryRequestBody,
  CreateCategoryResponse,
  UpdateCategoryRequestBody,
} from "@/types/category.type";
import { ApiReturnType } from "@/types/common.type";
import { revalidatePath } from "next/cache";

export async function createCategoryAction(
  categoryData: CreateCategoryRequestBody,
  formData: FormData
): Promise<ApiReturnType<CreateCategoryResponse["data"]>> {
  // save image
  const uploadImageResponse = await uploadImage(formData);
  if (!uploadImageResponse.ok)
    return { ok: false, message: uploadImageResponse.message };

  // save category
  categoryData = { ...categoryData, image: uploadImageResponse.data._id };
  const createCategoryResponse = await createCategory(categoryData);
  revalidatePath("/setting");
  revalidatePath("/create");
  return createCategoryResponse;
}

export async function deleteCategoryAction(categoryId: string) {
  const deleteCategoryResponse = await deleteCategory(categoryId);
  if (!deleteCategoryResponse.ok) return deleteCategoryResponse;
  revalidatePath("/setting");
  revalidatePath("/create");
  return deleteCategoryResponse;
}

export async function updateCategoryAction(
  categoryId: string,
  updateCategoryData: UpdateCategoryRequestBody
) {
  const updateCategoryResponse = await updateCategory(
    categoryId,
    updateCategoryData
  );
  revalidatePath("/setting");
  revalidatePath("/create");
  return updateCategoryResponse;
}
