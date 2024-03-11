import { useEffect, useState } from 'react';

/**
 * Hook to track the scroll position of the window.
 * @returns The current scroll position as an object with `x` and `y` coordinates.
 */
const useScrollPosition = (): { x: number; y: number } => {
  const [scrollPosition, setScrollPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    function handleScroll() {
      setScrollPosition({ x: window.scrollX, y: window.scrollY });
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
};

export default useScrollPosition;

// Example usage
// Window
// const scrollPosition = useScrollPosition();

//  Object Destructuring
// const {x, y} = useScrollPosition()
