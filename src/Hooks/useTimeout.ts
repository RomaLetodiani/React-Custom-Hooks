import { useCallback, useEffect, useRef } from 'react';

/**
 * A custom React hook for managing a timeout.
 * @param callback The function to be executed when the timeout expires.
 * @param delay The delay (in milliseconds) before the timeout expires.
 * @returns A function to reset the timeout and a function to clear the timeout.
 */
const useTimeout = (callback: () => void, delay: number) => {
  // Create a ref to store the callback function
  const callbackRef = useRef(callback);
  // Create a ref to store the timeout ID
  const timeoutRef = useRef<NodeJS.Timeout | undefined>();

  // Update the callback ref whenever the callback prop changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Function to set the timeout
  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  // Function to clear the timeout
  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  // Set the timeout when the component mounts or when the delay prop changes
  useEffect(() => {
    set();
    // Clear the timeout when the component unmounts or when the delay prop changes
    return clear;
  }, [delay, set, clear]);

  // Function to reset the timeout
  const reset = useCallback(() => {
    clear(); // Clear any existing timeout
    set(); // Set a new timeout
  }, [clear, set]);

  // Return the reset and clear functions
  return [reset, clear];
};

export default useTimeout;

// Example Usage
// Call the useTimeout hook with a callback function and delay
// const [resetVisibility, clear] = useTimeout(() => {
//   setIsVisible(false); // Callback function: Hides the component
// }, 3000); // Timeout duration: 3000 milliseconds (3 seconds)

// Function to show the component and start/reset the timeout
// const showComponent = () => {
//   setIsVisible(true); // Show the component
//   resetVisibility(); // Start/reset the timeout
// };

// Function to hide the component and clear the timeout
// const hideComponent = () => {
//   setIsVisible(false); // Hide the component
//   clear(); // Clear the timeout
// };

// Notification Message: Show a notification message that automatically disappears after a certain amount of time to provide feedback to the user without requiring manual dismissal.

// Form Submission: Display a loading spinner or message for a specified duration after form submission before redirecting the user to another page or showing the next step.

// Slideshow: Automatically advance the slides in a slideshow at regular intervals, providing a seamless viewing experience for the user.

// Countdown Timer: Create a countdown timer that displays the remaining time and triggers an action when it reaches zero, such as ending an online auction or redirecting to a different page.

// Auto-save Feature: Implement an auto-save feature for forms, where the form data is automatically saved after a certain period of inactivity to prevent data loss.

// Session Timeout: Set up a session timeout mechanism to automatically log out users after a specified period of inactivity to enhance security and protect user privacy.

// Debounce Function: Implement a debounce function that delays the execution of a callback function until a certain amount of time has passed without further invocations, useful for optimizing performance-sensitive operations like search input handling.
