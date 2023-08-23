import { useContext } from "react";
import { themeContext } from "../App";

const Child = () => {
  const [theme, themes, toggleTheme] = useContext(themeContext);

  return (
    <>
      <div style={themes[theme]}>Deeply Nested Child</div>
      <button
        onClick={() => {
          toggleTheme();
        }}
      >
        switch theme
      </button>
    </>
  );
};

export default Child;
