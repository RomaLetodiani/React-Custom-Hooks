import { useRef, useEffect, MutableRefObject } from 'react';

/**
 * Calls a function when clicked inside the specified element.
 * Useful for scenarios like handling clicks inside modal or pop-up elements.
 * @param elementRef Ref object containing the target element.
 * @param callback Callback function to be invoked when clicked inside the element.
 */
const useClickInside = (elementRef: MutableRefObject<HTMLElement | null>, callback: () => void): void => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    const handleClickInside = (event: MouseEvent) => {
      event.preventDefault();
      if (elementRef.current && event.target instanceof Node && elementRef.current.contains(event.target)) {
        callbackRef.current();
      }
    };

    document.addEventListener('click', handleClickInside, true);

    return () => {
      document.removeEventListener('click', handleClickInside, true);
    };
  }, [elementRef, callbackRef]);
};

export default useClickInside;
// Example usage
// const containerRef = useRef<HTMLDivElement>(null);

// Define the callback function to be called when clicked inside the container
// const handleClickInside = () => {
//   console.log('Clicked inside the container!');
// };

// Apply the hook to the container reference and callback function
// useClickInside(containerRef, handleClickInside);

// return (
//   <div ref={containerRef} style={{ width: '200px', height: '200px', border: '1px solid black' }}>
//     Click outside this container!
//   </div>
// );
