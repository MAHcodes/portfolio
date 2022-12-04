import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

const ThemeContextProvider = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    typeof window !== "undefined" ? localStorage.mahcodestheme : false
  );

  useEffect(() => {
    localStorage.setItem("mahcodestheme", isDarkTheme);
    document.body.className = isDarkTheme ? "mocha" : "latte";
  }, [isDarkTheme])

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
