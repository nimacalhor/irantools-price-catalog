import customAxios from "@/lib/axios";
import { CUErrorResponse } from "@/types/api-error.type";
import {
  BrandListResponse,
  CreateBrandRequestBody,
  CreateBrandResponse,
} from "@/types/brands.type";
import { ApiReturnType, ListCriteria } from "@/types/common.type";
import { getErrorMessage } from "@/utils/error.util";
import { AxiosResponse } from "axios";

export async function createBrand(
  brandData: CreateBrandRequestBody
): Promise<ApiReturnType<CreateBrandResponse["data"]>> {
  try {
    const { data } = await customAxios.post<
      CreateBrandRequestBody,
      AxiosResponse<CreateBrandResponse | CUErrorResponse>
    >(`/brands`, brandData);

    if (data.ok) return { ok: true, data: data.data };
    else return { ok: false, message: getErrorMessage(data) };
    //
  } catch (error) {
    console.error({ error });
    return { ok: false, message: getErrorMessage() };
  }
}

export async function getBrandList(
  criteria: ListCriteria
): Promise<ApiReturnType<BrandListResponse["data"]>> {
    
}
