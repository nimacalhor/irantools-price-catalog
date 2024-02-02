import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RefObject } from "react";

type ToolListStore = {
  a4Ref: any;
};

const initialState: ToolListStore = {
  a4Ref: null,
};

const toolListSlice = createSlice({
  name: "toolList",
  initialState,
  reducers: {
    setRef(
      store: ToolListStore,
      action: PayloadAction<RefObject<HTMLDivElement>>
    ) {
      store.a4Ref = action.payload;
    },
  },
});

const { actions, reducer } = toolListSlice;
export { actions };
export default reducer;
