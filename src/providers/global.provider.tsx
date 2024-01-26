"use client"
import React from "react";
import StoreProvider from "./Store.provider";

type GlobalProvidersProps = { children: React.ReactNode };

function GlobalProviders({ children }: GlobalProvidersProps) {
  return (
    <>
      <StoreProvider>{children}</StoreProvider>
    </>
  );
}

export default GlobalProviders;
