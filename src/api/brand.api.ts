import {
  CUErrorResponse,
  DetailErrorResponse,
  ListErrorResponse,
} from "@/types/api-error.type";
import {
  BrandListResponse,
  CreateBrandRequestBody,
  CreateBrandResponse,
  UpdateBrandRequestBody,
  UpdateBrandResponse,
} from "@/types/brands.type";
import { ApiReturnType, ListCriteria } from "@/types/common.type";
import { getErrorMessage } from "@/utils/error.util";
import { AxiosResponse } from "axios";
import customAxios from "@/lib/axios";
import { cache } from "react";

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

export const getBrandList = cache(async function (
  criteria?: ListCriteria
): Promise<ApiReturnType<BrandListResponse["data"]>> {
  try {
    const { data } = await customAxios.get<
      any,
      AxiosResponse<BrandListResponse | ListErrorResponse>
    >(`/brands?`);

    if (data.ok)
      return {
        data: data.data,
        pagination: data.pagination,
        ok: true,
      };
    else
      return {
        ok: false,
        message: getErrorMessage(data),
      };
  } catch (error) {
    //  temp log
    console.log("__________ error in brand.api", { error, response: (error as any).response });
    return { ok: false, message: getErrorMessage() };
  }
});

export async function updateBrand(
  brandId: string,
  updateBrandData: UpdateBrandRequestBody
): Promise<ApiReturnType<UpdateBrandResponse["data"]>> {
  try {
    //
    const { data } = await customAxios.put<
      UpdateBrandRequestBody,
      AxiosResponse<UpdateBrandResponse | CUErrorResponse>
    >(`/brands/${brandId}`, updateBrandData);

    if (data.ok) return { ok: true, data: data.data };
    //
    else return { ok: false, message: getErrorMessage(data) };
    //
  } catch (error) {
    console.error({ error });
    return { ok: false, message: getErrorMessage() };
  }
}

export async function deleteBrand(
  brandId: string
): Promise<ApiReturnType<null>> {
  try {
    const { data } = await customAxios.delete<
      any,
      AxiosResponse<undefined | DetailErrorResponse>
    >(`/brands/${brandId}`);

    if (!data) return { ok: true, data: null };
    else return { ok: false, message: getErrorMessage(data) };
    //
  } catch (error) {
    console.error({ error });
    return { ok: false, message: getErrorMessage() };
  }
}
