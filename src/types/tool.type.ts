import { ObjectId } from "mongoose";

export type Tool = {
  size: number;
  name: string;
  code: string;
  price?: string;
  brand: ObjectId;
  category: ObjectId;
  detail: ToolDetail;
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

export type CreateToolResponse = {
  ok: boolean;
  data: {
    size: number;
    name: string;
    code: string;
    price: string;
    brand: string;
    category: string;
    detail: {
      weight: string;
      amountInSet: number;
      amountInBulk: number;
      length: string;
      material: string;
      _id: string;
    };
    image: string;
    description: string;
    available: boolean;
    _id: string;
    __v: number;
  };
  statusCode: number;
  message: string;
};

export type UpdateToolType = {
  ok: boolean;
  data: {
    _id: string;
    size: number;
    name: string;
    code: string;
    price: string;
    brand: string;
    category: string;
    detail: {
      weight: string;
      amountInSet: number;
      amountInBulk: number;
      length: string;
      material: string;
      _id: string;
    };
    image: string;
    description: string;
    available: boolean;
    __v: number;
  };
  statusCode: number;
  message: string;
};
