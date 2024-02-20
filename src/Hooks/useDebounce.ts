import { useEffect } from 'react';
import useTimeout from './useTimeout';

/**
 * A custom React hook for debouncing the execution of a callback function.
 * @param callback The function to be executed after the debounce delay.
 * @param delay The delay (in milliseconds) before the callback is executed after the last trigger.
 * @param dependencies An array of dependencies that trigger the callback function.
 * @returns A function to manually clear the debounce timeout.
 */
const useDebounce = (callback: () => void, delay: number, dependencies: any[]) => {
  // Use the useTimeout hook to manage the debounce timeout
  const [reset, clear] = useTimeout(callback, delay);

  // Reset the debounce timeout whenever the dependencies change
  useEffect(reset, [...dependencies, reset]);

  // Clear the debounce timeout when the component unmounts or the hook is reinitialized
  useEffect(clear, []);
};

export default useDebounce;

// Example usage
// useDebounce(() => {
// Your callback function here
// console.log('Debounced callback executed');
// }, Delay in milliseconds, [/* dependency array */]);

// Input Field Search: When you have an input field that sends search requests to the server on every keystroke, it can lead to unnecessary network traffic and potentially overload the server, especially if there's a high frequency of keystrokes.

// Debouncing: By using the useDebounce hook, you can limit the number of times the search request is sent within a short period. This ensures that the search request is only sent after the user has stopped typing for a specified delay period, reducing the number of requests and optimizing network usage.

// Improved User Experience: Debouncing the search request improves the user experience by preventing unnecessary loading indicators or flickering results caused by rapid and frequent search requests. It provides a smoother and more responsive search experience for the user.

// Network Efficiency: By waiting for a brief pause in typing before sending the search request, you can optimize network usage and server resources, leading to better performance and scalability of your application.
