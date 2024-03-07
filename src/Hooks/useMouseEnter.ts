import { useEffect, MutableRefObject } from 'react';

/**
 * Tracks when the mouse pointer is over a specified element.
 * @param elementRef Ref object containing the target element.
 * @param callback Callback function to be invoked when the mouse is over the element.
 */
const useMouseEnter = (elementRef: MutableRefObject<HTMLElement | null>, callback: () => void): void => {
  useEffect(() => {
    const handleMouseOver = () => {
      callback();
    };

    const element = elementRef.current;
    if (!element) return;

    element.addEventListener('mouseover', handleMouseOver);

    return () => {
      element.removeEventListener('mouseover', handleMouseOver);
    };
  }, [elementRef, callback]);
};

export default useMouseEnter;

// Example usage
// const containerRef = useRef<HTMLDivElement>(null);
// Define the callback function to be called when the mouse enters the container
//   const handleMouseEnter = () => {
//     console.log('Mouse enters the container!');
//   };
// Apply the hook to the container reference and callback function
//   useMouseEnter(containerRef, handleMouseEnter);
//   return (
//     <div ref={containerRef} style={{ width: '200px', height: '200px', border: '1px solid black' }}>
//       Mouse enters the container!
//     </div>
//   );
