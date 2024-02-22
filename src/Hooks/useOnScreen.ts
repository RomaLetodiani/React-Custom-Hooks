import { useEffect, useState, RefObject } from 'react';

/**
 * A custom React hook that detects whether an element is within the viewport.
 * @param ref A reference to the DOM element to observe.
 * @param rootMargin The margin around the root (viewport) within which to trigger visibility.
 * @returns A boolean indicating whether the observed element is visible in the viewport.
 */
export default function useOnScreen(ref: RefObject<Element>, rootMargin: string = '0px'): boolean {
  // Initialize state to track visibility
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the ref is available
    if (ref.current == null) return;

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { rootMargin });

    // Observe the target element
    observer.observe(ref.current);

    // Cleanup function to disconnect the observer when unmounting or ref changes
    return () => {
      if (ref.current == null) return;
      observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]);

  return isVisible;
}

// Example usage

// const headerTwoRef = useRef()
// const visible = useOnScreen(headerTwoRef, "-100px")
