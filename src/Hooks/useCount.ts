import { useState } from 'react';

/**
 * Represents the shape of the state object returned by the useCount hook.
 */
interface CountState {
  /** The current count value. */
  count: number;
  /** Function to increment the count value. */
  increment: () => void;
  /** Function to decrement the count value. */
  decrement: () => void;
  /** Function to reset the count value to its initial value. */
  reset: () => void;
}

/**
 * A custom React hook for managing a count state along with increment, decrement, and reset actions.
 * @param initialCount The initial value for the count state (default is 0).
 * @returns An object containing the count state and actions to manipulate it.
 */
const useCount = (initialCount: number = 0): CountState => {
  // Define the count state using useState hook
  const [count, setCount] = useState<number>(initialCount);

  // Function to increment the count
  const increment = (): void => {
    setCount((prevCount) => prevCount + 1);
  };

  // Function to decrement the count
  const decrement = (): void => {
    setCount((prevCount) => prevCount - 1);
  };

  // Function to reset the count to its initial value
  const reset = (): void => {
    setCount(initialCount);
  };

  // Return the count state and actions
  return {
    count,
    increment,
    decrement,
    reset,
  };
};

export default useCount;

// Example usage
// const { count, increment, decrement, reset } = useCount(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
