import themeContext from "@/contexts/theme.context";
import { useContext } from "react";

function useTheme() {
  return useContext(themeContext);
}

export default useTheme;
