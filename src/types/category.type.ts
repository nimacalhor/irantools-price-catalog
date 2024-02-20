import { CUErrorResponse, ListErrorResponse } from "./api-error.type";

export type CreateCategoryResponse =
  | {
      ok: true;
      data: {
        title: string;
        image: {
          _id: string;
          path: string;
          __v: number;
        };
        _id: string;
        __v: number;
      };
      statusCode: number;
      message: string;
    }
   ;

export type CreateCategoryRequestBody = { title: string; image: string };

export type UpdateCategoryRequestBody = Partial<CreateCategoryRequestBody>;

export type CategoryListResponse =
  | {
      ok: true;
      data: Array<{
        _id: string;
        title: string;
        image: {
          _id: string;
          path: string;
          __v: number;
        };
        __v: number;
      }>;
      statusCode: number;
      pagination: {
        totalDocs: number;
        limit: number;
        totalPages: number;
        page: number;
        pagingCounter: number;
        hasPrevPage: boolean;
        hasNextPage: boolean;
        prevPage: any;
        nextPage: any;
      };
    }
   ;

export type CategoryUpdateResponse =
  | {
      ok: true;
      data: {
        _id: string;
        title: string;
        image: {
          _id: string;
          path: string;
          __v: number;
        };
        __v: number;
      };
      statusCode: number;
      message: string;
      metadata: {
        reqBody: {
          title: string;
        };
      };
    }
   ;
