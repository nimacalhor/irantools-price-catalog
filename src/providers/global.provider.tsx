"use client";
import React from "react";
import StoreProvider from "./Store.provider";
import { ThemeProvider } from "./Theme.provider";

type GlobalProvidersProps = { children: React.ReactNode };

function GlobalProviders({ children }: GlobalProvidersProps) {
  return (
    <>
      <ThemeProvider>
        <StoreProvider>{children}</StoreProvider>
      </ThemeProvider>
    </>
  );
}

export default GlobalProviders;
