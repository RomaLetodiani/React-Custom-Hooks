import { useEffect, useRef } from "react";

/**
 * Custom hook to get the previous value of a state or prop.
 * @template T - The type of the value.
 * @param value - The current value to track.
 * @returns The previous value.
 */
const usePrevious = <T>(value: T): T | undefined => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePrevious;

// Example usage
// const [state, setState] = useState();
// const prevState = usePrevious(state);
