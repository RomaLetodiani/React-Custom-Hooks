import { useEffect, useState } from 'react';

/**
 * Hook to monitor the network status of the user's device.
 * @returns A boolean indicating whether the user is online.
 */
const useNetworkStatus = (): boolean => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
};

export default useNetworkStatus;

// Example usage
// const isOnline = useNetworkStatus()
