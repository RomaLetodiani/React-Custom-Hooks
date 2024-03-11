import { useEffect, useState, useRef } from 'react';

/**
 * Hook to detect key presses within current tab.
 * @returns {string | null} The currently pressed key, or null if no key is pressed.
 */
const useKeyPress = (): string | null => {
  // Use useRef to store the pressed key state across re-renders
  const keyPressedRef = useRef<string | null>(null);

  const [keyPressed, setKeyPressed] = useState<string | null>(null);

  useEffect(() => {
    /**
     * Handles the key press event.
     * @param {KeyboardEvent} event - The key press event.
     */
    const handleKeyPress = (event: KeyboardEvent) => {
      keyPressedRef.current = event.key;
      setKeyPressed(keyPressedRef.current);
    };

    /**
     * Handles the key release event.
     * @param {KeyboardEvent} event - The key release event.
     */
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === keyPressedRef.current) {
        keyPressedRef.current = null;
        setKeyPressed(null);
      }
    };

    document.addEventListener('keydown', handleKeyPress as EventListener);
    document.addEventListener('keyup', handleKeyUp as EventListener);

    return () => {
      document.removeEventListener('keydown', handleKeyPress as EventListener);
      document.removeEventListener('keyup', handleKeyUp as EventListener);
    };
  }, []);

  return keyPressed;
};

export default useKeyPress;

// Example usage
// const isKeyPressed = useKeyPress(); // Call the hook to get the pressed key
