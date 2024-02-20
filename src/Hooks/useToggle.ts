import { useState } from 'react';

/**
 * A custom React hook for managing a boolean toggle state.
 * @param initialValue The initial value of the toggle state (optional, default is false).
 * @returns A tuple containing the current toggle state and a function to toggle it.
 */
const useToggle = (initialValue?: boolean): [boolean, (bool?: boolean) => void] => {
  // Define a state variable "value" using useState, initialized with the provided initial value or false
  const [value, setValue] = useState<boolean>(initialValue || false);

  // Define a function "toggleValue" to toggle the state
  const toggleValue = (bool?: boolean) => {
    // Update the state based on the provided boolean value or toggle it if no value is provided
    setValue((currValue) => (typeof bool === 'boolean' ? bool : !currValue));
  };

  // Return a tuple containing the current toggle state and the toggle function
  return [value, toggleValue];
};

export default useToggle;

// Example usage
// const [visible, toggleVisible] = useToggle(false);
// const [darkMode, toggleDarkMode] = useToggle(false);

// Boolean State Management: The primary purpose of the useToggle hook is to manage boolean states within React functional components.

// Initialization: It allows for optional initialization of the toggle state with an initial value. If not provided, the default initial value is false.

// Toggle Functionality: The hook returns a tuple containing the current toggle state and a function to toggle it. The toggle function toggles the state between true and false. If provided with a boolean parameter, it sets the state to the specified value.

// Ease of Use: With useToggle, developers can easily handle scenarios where components need to switch between two states, such as showing/hiding elements, enabling/disabling features, or toggling themes.
