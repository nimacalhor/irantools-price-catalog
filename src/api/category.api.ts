import {
  CUErrorResponse,
  DetailErrorResponse,
  ListErrorResponse,
} from "@/types/api-error.type";
import {
  CategoryListResponse,
  CreateCategoryRequestBody,
  CreateCategoryResponse,
  UpdateCategoryRequestBody,
  UpdateCategoryResponse,
} from "@/types/category.type";
import { ApiReturnType, ListCriteria } from "@/types/common.type";
import { getErrorMessage } from "@/utils/error.util";
import { AxiosResponse } from "axios";
import customAxios from "@/lib/axios";
import { cache } from "react";

export async function createCategory(
  categoryData: CreateCategoryRequestBody
): Promise<ApiReturnType<CreateCategoryResponse["data"]>> {
  try {
    const { data } = await customAxios.post<
      CreateCategoryRequestBody,
      AxiosResponse<CreateCategoryResponse | CUErrorResponse>
    >(`/categories`, categoryData);

    if (data.ok) return { ok: true, data: data.data };
    else return { ok: false, message: getErrorMessage(data) };
    //
  } catch (error) {
    console.error({ error });
    return { ok: false, message: getErrorMessage() };
  }
}

export const getCategoryList = cache(async function (
  criteria?: ListCriteria
): Promise<ApiReturnType<CategoryListResponse["data"]>> {
  try {
    const { data } = await customAxios.get<
      any,
      AxiosResponse<CategoryListResponse | ListErrorResponse>
    >(`/categories?`);

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
    console.error({ error });
    return { ok: false, message: getErrorMessage() };
  }
});

export async function updateCategory(
  categoryId: string,
  updateCategoryData: UpdateCategoryRequestBody
): Promise<ApiReturnType<UpdateCategoryResponse["data"]>> {
  try {
    //
    const { data } = await customAxios.put<
      UpdateCategoryRequestBody,
      AxiosResponse<UpdateCategoryResponse | CUErrorResponse>
    >(`/categories/${categoryId}`, updateCategoryData);

    if (data.ok) return { ok: true, data: data.data };
    //
    else return { ok: false, message: getErrorMessage(data) };
    //
  } catch (error) {
    console.error({ error });
    return { ok: false, message: getErrorMessage() };
  }
}

export async function deleteCategory(
  categoryId: string
): Promise<ApiReturnType<null>> {
  try {
    const { data } = await customAxios.delete<
      any,
      AxiosResponse<undefined | DetailErrorResponse>
    >(`/categories/${categoryId}`);

    if (!data) return { ok: true, data: null };
    else return { ok: false, message: getErrorMessage(data) };
    //
  } catch (error) {
    console.error({ error });
    return { ok: false, message: getErrorMessage() };
  }
}
