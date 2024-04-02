import { RefObject, useEffect, useRef, useState } from 'react';

/**
 * A custom React hook that detects long press events on a specified DOM element.
 * @param ref A reference to the DOM element on which the long press event should be detected.
 * @param duration The duration (in milliseconds) for which the user must press on the element to trigger a long press event. Default is 500 milliseconds.
 * @returns A boolean value indicating whether a long press event is detected.
 */
const useLongPressDetection = <T extends HTMLElement>(ref: RefObject<T>, duration: number = 500): boolean => {
  const [isLongPress, setIsLongPress] = useState<boolean>(false);
  const timeout = useRef<number | null>(null);

  useEffect(() => {
    const handleTouchStart = () => {
      timeout.current = window.setTimeout(() => {
        setIsLongPress(true);
      }, duration);
    };

    const handleTouchEnd = () => {
      if (timeout.current !== null) {
        clearTimeout(timeout.current);
      }
      setIsLongPress(false);
    };

    const element = ref.current;

    if (element) {
      element.addEventListener('touchstart', handleTouchStart);
      element.addEventListener('touchend', handleTouchEnd);

      return () => {
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [ref, duration]);

  return isLongPress;
};

export default useLongPressDetection;

// Example usage
// const isLongPressed = useLongPressDetection(YourREF, YourDuration)
