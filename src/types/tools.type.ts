import { ObjectId } from "mongoose";
import {
  CUErrorResponse,
  DetailErrorResponse,
  ListErrorResponse,
} from "./api-error.type";

export type Tool = {
  size: number;
  name: string;
  code: string;
  price?: string;
  brand: ObjectId;
  category: ObjectId;
  detail?: ToolDetail;
  image: string;
  description: string;
  available: boolean;
};

export type ToolDetail = {
  weight?: string;
  amountInSet?: string;
  amountInBulk?: string;
  length?: string;
  material?: string;
};

export type CreateToolRequestBody = {
  size: number;
  name: string;
  code: string;
  price?: string;
  brand: string;
  category: string;
  detail?: ToolDetail;
  image?: string;
  description: string;
  available: boolean;
};

export type CreateToolResponse = {
  ok: true;
  data: {
    size: number;
    name: string;
    code: string;
    price: string;
    brand: {
      _id: string;
      title: string;
      image: string;
      __v: number;
    };
    category: {
      _id: string;
      title: string;
      image: string;
      __v: number;
    };
    detail: {
      weight: string;
      amountInSet: number;
      amountInBulk: number;
      length: string;
      material: string;
      _id: string;
    };
    image: {
      _id: string;
      path: string;
      __v: number;
    };
    description: string;
    available: boolean;
    _id: string;
    __v: number;
  };
  statusCode: number;
  message: string;
  metadata: {
    reqBody: {
      name: string;
      size: number;
      code: string;
      price: string;
      brand: string;
      category: string;
      image: string;
      available: boolean;
      description: string;
      detail: {
        weight: string;
        amountInSet: number;
        amountInBulk: number;
        length: string;
        material: string;
      };
    };
  };
};

export type UpdateToolRequestBody = Partial<CreateToolRequestBody>;

export type UpdateToolResponse = CreateToolResponse;

export type ToolListResponse = {
  ok: true;
  data: Array<{
    _id: string;
    size: number;
    name: string;
    code: string;
    price: string;
    brand: {
      _id: string;
      title: string;
      image: string;
      __v: number;
    };
    category: {
      _id: string;
      title: string;
      image: string;
      __v: number;
    };
    detail: {
      weight: string;
      amountInSet: number;
      amountInBulk: number;
      length: string;
      material: string;
      _id: string;
    };
    image: {
      _id: string;
      path: string;
      __v: number;
    };
    description: string;
    available: boolean;
    __v: number;
  }>;
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
  statusCode: number;
};

export type ToolDetailResponse = {
  ok: true;
  data: {
    _id: string;
    size: number;
    name: string;
    code: string;
    price: string;
    brand: {
      _id: string;
      title: string;
      image: string;
      __v: number;
    };
    category: {
      _id: string;
      title: string;
      image: string;
      __v: number;
    };
    detail: {
      weight: string;
      amountInSet: number;
      amountInBulk: number;
      length: string;
      material: string;
      _id: string;
    };
    image: {
      _id: string;
      path: string;
      __v: number;
    };
    description: string;
    available: boolean;
    __v: number;
  };
  statusCode: number;
};
