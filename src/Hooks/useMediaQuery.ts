import { useState, useEffect } from 'react';

/**
 * A custom React hook for tracking changes to a media query.
 * @param query The media query string to track.
 * @returns A boolean value indicating whether the media query matches the current window size.
 */
const useMediaQuery = (query: string) => {
  // Define state variable to track whether the media query matches
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Create a MediaQueryList object based on the provided query string
    const media = window.matchMedia(query);

    // Update state if the initial matches value doesn't match the media query
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Function to update state when the media query matches change
    const listener = () => setMatches(media.matches);

    // Add resize event listener to update state when the window is resized
    window.addEventListener('resize', listener);

    // Clean up by removing the event listener when the component unmounts or the media query changes
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  // Return the current state of whether the media query matches
  return matches;
};

export default useMediaQuery;

// Example usage
// const isMobile = useMediaQuery('(max-width: 768px)');
// const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
// const isDesktop = useMediaQuery('(min-width: 1025px)');
