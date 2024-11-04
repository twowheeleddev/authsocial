// src/components/PageTemplate.jsx
import { useTheme } from '../providers/ThemeProvider';

const PageTemplate = ({ title, children }) => {
  const { isDarkMode } = useTheme();

  // Define your colors here for easy modification
  const colors = {
    background: isDarkMode ? 'bg-gray-900' : 'bg-white', // Background color based on theme
    text: isDarkMode ? 'text-gray-200' : 'text-gray-900', // Text color based on theme
    primary: isDarkMode ? 'text-indigo-400' : 'text-indigo-600', // Primary text color for titles
    link: isDarkMode ? 'text-yellow-400' : 'text-yellow-500', // Link color based on theme
  };

  return (
    <div
      className={`p-8 max-w-4xl mx-auto text-center transition-colors duration-300 ${colors.background} ${colors.text}`}
    >
      <h1 className={`text-3xl font-bold ${colors.primary}`}>
        {title}
      </h1>
      <div className={`text-gray-700`}>
        {children}
      </div>
    </div>
  );
};

export default PageTemplate;
