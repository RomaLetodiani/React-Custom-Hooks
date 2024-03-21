import { useEffect, useRef } from 'react';

/**
 * Run a callback at a specified interval.
 * @param callback - The function to call on each interval.
 * @param delay - The delay in milliseconds.
 * @returns A function to clear the interval.
 */
const useInterval = (callback: () => void, delay: number | null): (() => void) => {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current && savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);

  return () => {}; // No-op function as the cleanup
};

export default useInterval;

// Example usage
// useInterval(callback, delay)
