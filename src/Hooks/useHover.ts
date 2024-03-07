import { useState, useEffect, MutableRefObject } from 'react';

/**
 * Tracks whether the mouse pointer is hovering over a specified element.
 * @param elementRef Ref object containing the target element.
 * @returns Boolean value indicating whether the element is hovered.
 */
const useHover = (elementRef: MutableRefObject<HTMLElement | null>): boolean => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [elementRef]);

  return isHovered;
};

export default useHover;

// Example usage
// const containerRef = useRef<HTMLDivElement>(null);
// Use the useHover hook to track whether the mouse is over the container
//   const isHovered = useHover(containerRef);
//   return (
//     <div ref={containerRef} style={{ width: '200px', height: '200px', border: '1px solid black' }}>
//       {isHovered ? 'Mouse is over the container!' : 'Mouse is not over the container!'}
//     </div>
//   );
