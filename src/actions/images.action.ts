"use server"
import { uploadImage } from "@/api/image.api";

export async function uploadImageAction(formData: FormData) {
  const uploadImageResponse = await uploadImage(formData);
  return uploadImageResponse
}
