import customAxios from "@/lib/axios";
import {
  FileRequiredErrorResponse,
  DetailErrorResponse,
} from "@/types/api-error.type";
import { ApiReturnType } from "@/types/common.type";
import {
  UploadImageRequestBody,
  UploadImageResponse,
} from "@/types/image.type";
import { getErrorMessage } from "@/utils/error.util";
import { AxiosResponse } from "axios";

export async function uploadImage(
  formData: FormData
): Promise<ApiReturnType<UploadImageResponse["data"]>> {
  //
  try {
    const { data } = await customAxios.post<
      UploadImageRequestBody,
      AxiosResponse<UploadImageResponse | FileRequiredErrorResponse>
    >("/images", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (data.ok) {
      const { data: imageData } = data;
      return { ok: true, data: imageData };
    }
    //
    else return { ok: false, message: getErrorMessage(data) };
    //
  } catch (error) {
    console.error({ error });
    return { ok: false, message: getErrorMessage() };
  }
}

export async function deleteImage(imageId: string): Promise<ApiReturnType<{}>> {
  try {
    const { data } = await customAxios.delete<
      any,
      AxiosResponse<undefined | DetailErrorResponse>
    >(`/images/${imageId}`);

    if (data) return { ok: false, message: getErrorMessage(data) };

    return { ok: true, data: {} };
    //
  } catch (error) {
    console.error({ error });
    return { ok: false, message: getErrorMessage() };
  }
}
