import { ObjectId } from "mongoose";

export type Tool = {
  name: string;
  code: string;
  price?: string;
  brand: ObjectId;
  category: ObjectId;
  detail: ToolDetail;
  image: string;
  description: string;
  available: boolean
};

export type ToolDetail = {
  weight?: string;
  amountInSet?: string;
  amountInBulk?: string;
  length?: string;
  material?: string;
};
