"use client";

import { useState } from "react";
import themeContext from "@/contexts/theme.context";

export type ThemeOnions = "" | "dark" | "orange" | "orange-dark";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeOnions>("");

  return (
    <themeContext.Provider value={[theme, setTheme]}>
      <div className={theme+" bg-background text-foreground"}>{children}</div>
    </themeContext.Provider>
  );
}
