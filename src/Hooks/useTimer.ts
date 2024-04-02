import { useState } from 'react';
import useInterval from './useInterval';

/**
 * A custom React hook for managing a timer.
 * @returns An object containing timer state and control functions.
 */
const useTimer = (): {
  /**
   * The number of seconds elapsed on the timer.
   */
  seconds: number;
  /**
   * A boolean indicating whether the timer is currently running.
   */
  isRunning: boolean;
  /**
   * Function to start the timer.
   */
  startTimer: () => void;
  /**
   * Function to pause the timer.
   */
  pauseTimer: () => void;
  /**
   * Function to reset the timer.
   */
  resetTimer: () => void;
} => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // Define functions to manage the timer
  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(true);
  };

  // Effect to decrement seconds when timer is running
  useInterval(
    () => {
      if (isRunning) {
        setSeconds((prevSeconds) => prevSeconds + 1);
      } else {
        setIsRunning(false); // Pause when at 0 or not running
      }
    },
    isRunning ? 1000 : null
  );

  return { seconds, isRunning, startTimer, pauseTimer, resetTimer };
};

export default useTimer;

// Example usage
// const { seconds, isRunning, startTimer, resetTimer, pauseTimer } = useTimer();
