// src/components/LoadingFallback.jsx
import { useTheme } from '../providers/ThemeProvider';

const LoadingFallback = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`flex items-center justify-center min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900'
        }`}
    >
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
        <p className="mt-4 text-lg font-medium">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default LoadingFallback;
