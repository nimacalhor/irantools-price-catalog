import {
  CUErrorResponse,
  DetailErrorResponse,
  ListErrorResponse,
} from "@/types/api-error.type";
import {
  ToolListResponse,
  CreateToolRequestBody,
  CreateToolResponse,
  UpdateToolRequestBody,
  UpdateToolResponse,
  ToolDetailResponse,
} from "@/types/tools.type";
import { ApiReturnType, ListCriteria } from "@/types/common.type";
import { getErrorMessage } from "@/utils/error.util";
import { Axios, AxiosResponse } from "axios";
import customAxios from "@/lib/axios";
import { cache } from "react";
import { objectToParams } from "@/utils/string.util";

export async function createTool(
  toolData: CreateToolRequestBody
): Promise<ApiReturnType<CreateToolResponse["data"]>> {
  try {
    const { data } = await customAxios.post<
      CreateToolRequestBody,
      AxiosResponse<CreateToolResponse | CUErrorResponse>
    >(`/tools`, toolData);

    if (data.ok) return { ok: true, data: data.data };
    else return { ok: false, message: getErrorMessage(data) };
    //
  } catch (error) {
    console.error({ error });
    return { ok: false, message: getErrorMessage() };
  }
}

export const getToolList = cache(async function (
  criteria?: ListCriteria
): Promise<ApiReturnType<ToolListResponse["data"]>> {
  try {
    const searchParams = criteria ? objectToParams(criteria) : "";
    const url = `/tools?${searchParams}`;
    console.log({ searchParams, url });

    const { data } = await customAxios.get<
      any,
      AxiosResponse<ToolListResponse | ListErrorResponse>
    >(`/tools?${searchParams}`);

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
    console.log("__________ error in tools.api", { error });
    return { ok: false, message: getErrorMessage() };
  }
});

export async function updateTool(
  toolId: string,
  updateToolData: UpdateToolRequestBody
): Promise<ApiReturnType<UpdateToolResponse["data"]>> {
  try {
    //
    const { data } = await customAxios.put<
      UpdateToolRequestBody,
      AxiosResponse<UpdateToolResponse | CUErrorResponse>
    >(`/tools/${toolId}`, updateToolData);

    if (data.ok) return { ok: true, data: data.data };
    //
    else return { ok: false, message: getErrorMessage(data) };
    //
  } catch (error) {
    console.error({ error });
    return { ok: false, message: getErrorMessage() };
  }
}

export async function deleteTool(toolId: string): Promise<ApiReturnType<null>> {
  try {
    const { data } = await customAxios.delete<
      any,
      AxiosResponse<undefined | DetailErrorResponse>
    >(`/tools/${toolId}`);

    if (!data) return { ok: true, data: null };
    else return { ok: false, message: getErrorMessage(data) };
    //
  } catch (error) {
    console.error({ error });
    return { ok: false, message: getErrorMessage() };
  }
}

export const getToolDetail = cache(async function (
  toolId: string
): Promise<ApiReturnType<ToolDetailResponse["data"]>> {
  try {
    //
    const { data } = await customAxios.get<
      any,
      AxiosResponse<ToolDetailResponse | DetailErrorResponse>
    >(`/tools/${toolId}`);

    if (data.ok) return { ok: true, data: data.data };
    else return { ok: false, message: getErrorMessage(data) };
    //
  } catch (error) {
    console.error({ error });
    return { ok: false, message: getErrorMessage() };
  }
});
