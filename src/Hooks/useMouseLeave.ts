import { useEffect, MutableRefObject } from 'react';

/**
 * Tracks when the mouse pointer leaves a specified element.
 * @param elementRef Ref object containing the target element.
 * @param callback Callback function to be invoked when the mouse leaves the element.
 */
const useMouseLeave = (elementRef: MutableRefObject<HTMLElement | null>, callback: () => void): void => {
  useEffect(() => {
    const handleMouseLeave = () => {
      callback();
    };

    const element = elementRef.current;
    if (!element) return;

    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [elementRef, callback]);
};

export default useMouseLeave;

// Example usage
// const containerRef = useRef<HTMLDivElement>(null);
// Define the callback function to be called when the mouse leaves the container
//   const handleMouseLeave = () => {
//     console.log('Mouse has left the container!');
//   };
// Apply the hook to the container reference and callback function
//   useMouseLeave(containerRef, handleMouseLeave);
//   return (
//     <div ref={containerRef} style={{ width: '200px', height: '200px', border: '1px solid black' }}>
//       Mouse has left the container!
//     </div>
//   );
