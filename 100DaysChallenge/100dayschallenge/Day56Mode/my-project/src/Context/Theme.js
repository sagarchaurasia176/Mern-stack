// step - 1
import { createContext, useContext } from "react";

//step -2
export const themeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});
export const themeProvider = themeContext.Provider;

//you can create you're own custom hook
export default function useTheme() {
  return useContext(themeContext);
}
