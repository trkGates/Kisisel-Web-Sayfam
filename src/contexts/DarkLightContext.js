import { createContext, useEffect, useState } from "react";

export const DarkLightMod = createContext();

const DarkLightTheme = ({ children }) => {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const storedTheme = JSON.parse(localStorage.getItem("theme"));

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === null ? !isDarkMode : storedTheme);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const contextState = {
    theme: theme,
    setTheme: setTheme,
  };

  return (
    <DarkLightMod.Provider value={contextState}>
      {children}
    </DarkLightMod.Provider>
  );
};

export default DarkLightTheme;
