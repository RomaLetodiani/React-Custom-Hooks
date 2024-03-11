import { useEffect, useState } from 'react';

/**
 * Hook to track user idle time.
 * @param idleTimeout The duration in milliseconds after
 * which the user is considered idle. Defaults to 30000ms (30 seconds).
 * @returns A boolean indicating whether the user is idle.
 */
const useIdle = (idleTimeout: number = 30000): boolean => {
  const [isIdle, setIsIdle] = useState<boolean>(false);

  useEffect(() => {
    let idleTimer: NodeJS.Timeout | null = null;

    function resetIdleTimer() {
      if (idleTimer) {
        clearTimeout(idleTimer);
      }

      idleTimer = setTimeout(() => {
        setIsIdle(true);
      }, idleTimeout);
    }

    function handleUserActivity() {
      setIsIdle(false);
      resetIdleTimer();
    }

    resetIdleTimer();

    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);
    window.addEventListener('scroll', handleUserActivity);

    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
      window.removeEventListener('scroll', handleUserActivity);
      if (idleTimer) {
        clearTimeout(idleTimer);
      }
    };
  }, [idleTimeout]);

  return isIdle;
};

export default useIdle;

// Example usage
// const isIdle = useIdle(20000)
