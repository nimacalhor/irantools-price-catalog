import { Tool } from "@/types/tools.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JSONContent } from "@tiptap/react";

export type CreateToolStore = {
  tool: {
    size?: number;
    name?: string;
    code?: string;
    price?: string;
    brand?: string;
    category?: string;
    image?: string;
    description?: any;
    available?: boolean;
    detail?: {
      weight?: string | number;
      amountInSet?: string | number;
      amountInBulk?: string | number;
      length?: string | number;
      material?: string | number;
    };
    id?: string;
  };
  imageFile: File | null;
  pending: boolean;
};

export const initialState: CreateToolStore = {
  tool: {
    size: 1,
    name: undefined,
    code: undefined,
    price: undefined,
    brand: undefined,
    category: undefined,
    image: undefined,
    description: undefined,
    available: undefined,
    detail: {
      weight: undefined,
      amountInSet: undefined,
      amountInBulk: undefined,
      length: undefined,
      material: undefined,
    },
    id: undefined,
  },
  imageFile: null,
  pending: false,
};

const createToolSlice = createSlice({
  name: "createTool",
  initialState,
  reducers: {
    setTool(
      store: CreateToolStore,
      action: PayloadAction<CreateToolStore["tool"] | undefined>
    ) {
      if (!action.payload) store.tool = initialState.tool;
      else
        store.tool = {
          ...store.tool,
          ...action.payload,
          detail: { ...store.tool.detail, ...action.payload.detail },
        };
    },
    removeTool(store: CreateToolStore) {
      store.tool = initialState.tool;
    },
    setSize(store: CreateToolStore, action: PayloadAction<number>) {
      if ([1, 2, 3, 4, 5].some((a) => a === action.payload)) {
        store.tool.size = action.payload;
      }
    },
    setImageFile(store: CreateToolStore, action: PayloadAction<File | null>) {
      store.imageFile = action.payload;
    },
    setPending(store: CreateToolStore, action: PayloadAction<boolean>) {
      store.pending = action.payload;
    },
  },
});

const { actions, reducer } = createToolSlice;
export { actions };
export default reducer;
