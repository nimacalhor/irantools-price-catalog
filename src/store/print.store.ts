import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RefObject } from "react";

type PrintStore = {
  printComponentRef: any;
};

const initialState: PrintStore = {
  printComponentRef: null,
};

const printSlice = createSlice({
  name: "print",
  initialState,
  reducers: {
    setRef(store: PrintStore, action: PayloadAction<RefObject<HTMLElement>>) {
      store.printComponentRef = action.payload;
    },
  },
});

const { actions, reducer } = printSlice;
export { actions };
export default reducer;
