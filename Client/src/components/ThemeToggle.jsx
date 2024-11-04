import React from 'react';
import { useTheme } from '../providers/ThemeProvider'; // Adjust the path as needed
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // Destructure isDarkMode and toggleTheme

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 text-yellow-500' : 'bg-yellow-500 text-gray-800'
        }`}
      aria-label="Toggle theme"
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
