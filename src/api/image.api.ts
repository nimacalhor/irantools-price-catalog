"use server";
import customAxios from "@/lib/axios";

export async function saveImage(formData: FormData) {
  try {
    debugger;
    const { data } = await customAxios.post("/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    debugger;
    if (data.ok) return { ok: true, imagePath: data.image };
    return { ok: false };
  } catch (error) {
    console.log(error);
    return { ok: false };
  }
}

export async function deleteImage(imageName: string) {
  try {
    const { data } = await customAxios.put("/", { imageName });
    debugger;
    if (data.ok) return { ok: true };

    return { ok: false };
  } catch (error) {
    console.log(error);
    return { ok: false };
  }
}
