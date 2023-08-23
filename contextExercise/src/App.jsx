import Parent from "./components/Parent";
import Child from "./components/Child";

import { useCallback, useState, createContext } from "react";

// provide the theme to nested children using context
// provide a way to toggle theme to nested chidlren using context

const themes = {
  light: {
    color: "#000000",
    background: "#eeeeee",
  },
  dark: {
    color: "#ffffff",
    background: "#222222",
  },
};

export const themeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  return (
    <themeContext.Provider value={[theme, themes, toggleTheme]}>
      <Parent>
        <Child />
      </Parent>
    </themeContext.Provider>
  );
};

export default App;
