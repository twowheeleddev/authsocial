// src/context/ThemeProvider.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage for user's theme preference
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme === 'dark' : false; // Default to light mode
  });

  useEffect(() => {
    // Update the document class based on the theme state
    document.documentElement.classList.toggle('dark', isDarkMode);
    // Persist the theme choice in localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prevMode => !prevMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
