import { FaMoon, FaSun } from "react-icons/fa";

import { useTheme } from "../providers/ThemeProvider";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 ml-4 rounded-full transition-colors duration-300 ${
        isDarkMode
          ? "bg-gray-800 text-yellow-500"
          : "bg-yellow-500 text-gray-800"
      }`}
      aria-label="Toggle theme"
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
