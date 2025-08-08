import { useState, useEffect } from 'react';

// Breakpoint values
const breakpoints = {
  xs: 320,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1200,
  xxl: 1400,
};

// Custom hook to handle responsive behavior
export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Set initial size
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isXs = screenSize.width <= breakpoints.xs;
  const isSm =
    screenSize.width <= breakpoints.sm && screenSize.width > breakpoints.xs;
  const isMd =
    screenSize.width <= breakpoints.md && screenSize.width > breakpoints.sm;
  const isLg =
    screenSize.width <= breakpoints.lg && screenSize.width > breakpoints.md;
  const isXl =
    screenSize.width <= breakpoints.xl && screenSize.width > breakpoints.lg;
  const isXxl = screenSize.width > breakpoints.xl;

  const isMobile = screenSize.width <= breakpoints.md;
  const isTablet =
    screenSize.width > breakpoints.md && screenSize.width <= breakpoints.lg;
  const isDesktop = screenSize.width > breakpoints.lg;

  return {
    screenSize,
    breakpoints: {
      isXs,
      isSm,
      isMd,
      isLg,
      isXl,
      isXxl,
      isMobile,
      isTablet,
      isDesktop,
    },
  };
};

// Hook for detecting if user prefers reduced motion
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
};

// Hook for detecting user's color scheme preference
export const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState('dark');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setColorScheme(mediaQuery.matches ? 'dark' : 'light');

    const handler = () => setColorScheme(mediaQuery.matches ? 'dark' : 'light');
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return colorScheme;
};

// Hook for touch device detection
export const useTouchDevice = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    };

    setIsTouchDevice(checkTouchDevice());
  }, []);

  return isTouchDevice;
};

export default useResponsive;
