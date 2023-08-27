// context/useIsMobile.ts
import { useState, useEffect } from 'react';

export const useIsMobile = () => {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      handleResize();

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const isMobile = viewportWidth < 768;

  return { isMobile, viewportWidth };
};
