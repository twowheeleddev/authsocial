// src/hooks/useResponsive.js
import { useEffect, useState } from 'react';

const useResponsive = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Breakpoints based on width
  const isMobile = dimensions.width <= 640;
  const isTablet = dimensions.width >= 641
  const isDesktop = dimensions.width > 641;

  return { dimensions, isMobile, isTablet, isDesktop };
};

export default useResponsive;
