import { useState, useEffect } from 'react';
import { useTheme } from '../providers/ThemeProvider';
import statisticsData from '../utils/statisticsData';
import getRandomIndices from '../utils/getRandomIndices';

const Statistics = () => {
  const [currentStat, setCurrentStat] = useState(statisticsData[0]); // Initial display
  const { theme } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      // Get a random index excluding the currently displayed statistic
      const excludeIndex = statisticsData.indexOf(currentStat);
      const randomIndices = getRandomIndices([excludeIndex], 1, statisticsData.length);
      setCurrentStat(statisticsData[randomIndices[0]]);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [currentStat]);

  return (
    <div className={`text-center mb-12 ${theme === 'dark' ? 'bg-gray-900 p-6 rounded-lg' : 'bg-gray-100 p-6 rounded-lg'}`}>
      <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-magenta' : 'text-gray-900'}`}>
        {currentStat.value}
      </h2>
      <p className={`text-lg ${theme === 'dark' ? 'text-magenta' : 'text-gray-600'}`}>
        {currentStat.text}
      </p>
    </div>
  );
};

export default Statistics;
