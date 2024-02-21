"use server"
import { createTool, deleteTool, updateTool } from "@/api/tools.api";
import { uploadImage } from "@/api/image.api";
import {
  CreateToolRequestBody,
  CreateToolResponse,
  UpdateToolRequestBody,
} from "@/types/tools.type";
import { ApiReturnType } from "@/types/common.type";
import { revalidatePath } from "next/cache";

export async function createToolAction(
  toolData: CreateToolRequestBody,
  formData: FormData
): Promise<ApiReturnType<CreateToolResponse["data"]>> {
  // save image
  const uploadImageResponse = await uploadImage(formData);
  if (!uploadImageResponse.ok)
    return { ok: false, message: uploadImageResponse.message };

  // save tool
  toolData = { ...toolData, image: uploadImageResponse.data._id };
  const createToolResponse = await createTool(toolData);
  revalidatePath("/setting");
  revalidatePath("/create");
  return createToolResponse;
}

export async function deleteToolAction(toolId: string) {
  const deleteToolResponse = await deleteTool(toolId);
  if (!deleteToolResponse.ok) return deleteToolResponse;
  revalidatePath("/setting");
  revalidatePath("/create");
  return deleteToolResponse;
}

export async function updateToolAction(
  toolId: string,
  updateToolData: UpdateToolRequestBody
) {
  const updateToolResponse = await updateTool(toolId, updateToolData);
  revalidatePath("/setting");
  revalidatePath("/create");
  return updateToolResponse;
}

