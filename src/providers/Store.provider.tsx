"use clint"
import React from "react";
import { Provider } from "react-redux";
import store from "@/store";

type StoreProviderClass = { children: React.ReactNode };

function StoreProvider({ children }: StoreProviderClass) {
  return <Provider store={store}>{children}</Provider>;
}

export default StoreProvider;
