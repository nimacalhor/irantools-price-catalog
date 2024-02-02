import { ThemeOnions } from "@/providers/Theme.provider";
import { createContext } from "react";

const themeContext = createContext<[ThemeOnions, (theme: ThemeOnions) => void]>([
  "",
  (theme: string) => {},
]);

export default themeContext;
