import React, { createContext, useContext, useState } from "react";

// Create a context with default value of false (light mode)
const ThemeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
