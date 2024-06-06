import { useRef, useEffect, MutableRefObject } from 'react';

/**
 * Calls a function when clicked outside the specified element.
 * @param elementRef Ref object of the target element
 * @param callback Callback function to be invoked when clicked outside the element
 */
const useClickOutside = (elementRef: MutableRefObject<HTMLElement | null>, callback: () => void): void => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
        callbackRef.current();
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [elementRef, callbackRef]);
};

export default useClickOutside;

// Example usage
// const containerRef = useRef<HTMLDivElement>(null);

// Define the callback function to be called when clicked outside the container
// const handleClickOutside = () => {
//   console.log('Clicked outside the container!');
// };

// Apply the hook to the container reference and callback function
// useClickOutside(containerRef, handleClickOutside);

// return (
//   <div ref={containerRef} style={{ width: '200px', height: '200px', border: '1px solid black' }}>
//     Click outside this container!
//   </div>
// );
