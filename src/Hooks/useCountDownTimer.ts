import { useState } from 'react';
import useInterval from './useInterval';

/**
 * Custom hook for a countdown timer.
 * @param {number} initialSeconds - The initial number of seconds for the countdown.
 * @returns {{ seconds: number; isRunning: boolean; startTimer: () => void; pauseTimer: () => void; resetTimer: () => void }} - Object containing timer state and functions.
 */
const useCountdownTimer = (
  initialSeconds: number
): { seconds: number; isRunning: boolean; startTimer: () => void; pauseTimer: () => void; resetTimer: () => void } => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  // Define functions to manage the timer
  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setSeconds(initialSeconds);
    setIsRunning(false);
  };

  // Effect to decrement seconds when timer is running
  useInterval(
    () => {
      if (seconds > 0 && isRunning) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        setIsRunning(false); // Pause when at 0 or not running
      }
    },
    isRunning ? 1000 : null
  );

  return { seconds, isRunning, startTimer, pauseTimer, resetTimer };
};

export default useCountdownTimer;

// Example usage
// const { seconds, isRunning, startTimer, resetTimer, pauseTimer } = useCountdownTimer(StartSeconds);
