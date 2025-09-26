import { useState, useEffect } from 'react';

interface UseSplashScreenOptions {
  duration?: number;
  autoHide?: boolean;
}

export const useSplashScreen = (options: UseSplashScreenOptions = {}) => {
  const { duration = 5000, autoHide = true } = options;
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, autoHide]);

  const hideSplash = () => {
    setIsVisible(false);
  };

  return {
    isVisible,
    hideSplash,
  };
};