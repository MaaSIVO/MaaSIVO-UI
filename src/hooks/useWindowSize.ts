import { useLayoutEffect, useState } from 'react';

export const useWindowSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const updateWindowSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useLayoutEffect(() => {
    window.addEventListener('resize', updateWindowSize);
    updateWindowSize();
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  return { width, height };
};
