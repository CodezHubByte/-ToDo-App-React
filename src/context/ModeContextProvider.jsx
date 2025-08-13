import { useState, createContext } from "react";

export const ModeContext = createContext({
  isDarkMode: false,
  toggleMode: () => {},
});

export const ModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ModeContext.Provider value={{ isDarkMode, toggleMode }}>
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>{children}</div>
    </ModeContext.Provider>
  );
};
