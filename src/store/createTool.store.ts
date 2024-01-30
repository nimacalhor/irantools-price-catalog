import { Tool } from "@/types/tool.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CreateToolStore = {
  tool: {
    name?: string;
    code?: string;
    price?: string;
    brand?: string;
    category?: string;
    image?: string;
    description?: string;
    available?: boolean;
    detail: {
      weight?: string;
      amountInSet?: string;
      amountInBulk?: string;
      length?: string;
      material?: string;
    };
  };
};

const initialState: CreateToolStore = {
  tool: {
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
  },
};

const createToolSlice = createSlice({
  name: "createTool",
  initialState,
  reducers: {
    setTool(
      store: CreateToolStore,
      action: PayloadAction<CreateToolStore["tool"]>
    ) {
      store.tool = action.payload;
    },
    removeTool(store: CreateToolStore) {
      store.tool = initialState.tool;
    },
  },
});

const { actions, reducer } = createToolSlice;
export { actions };
export default reducer;
