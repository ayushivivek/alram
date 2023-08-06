import { createContext } from "react";

export const themes = {
  light: "light",
  dark: "dark",
};

const ThemeContext = createContext(themes.dark); // default value

export default ThemeContext;
