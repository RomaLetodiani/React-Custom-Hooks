import { useState } from 'react';

/**
 * A custom React hook for managing array state with common array operations.
 * @param defaultValue The initial value of the array (optional).
 * @returns An object containing the current array state and functions to manipulate the array.
 */
const useArray = <T>(defaultValue: T[]) => {
  // Define state variable to store the array
  const [array, setArray] = useState(defaultValue);

  /**
   * Adds a new element to the end of the array.
   * @param element The element to add to the array.
   */
  function push(element: T) {
    setArray((a) => [...a, element]);
  }

  /**
   * Filters the array based on the provided callback function.
   * @param callback A function to test each element of the array.
   */
  function filter(callback: (value: T) => boolean) {
    setArray((a) => a.filter(callback));
  }

  /**
   * Replaces the element at the specified index with a new element.
   * @param index The index of the element to update.
   * @param newElement The new element to replace the existing one.
   */
  function update(index: number, newElement: T) {
    setArray((a) => [...a.slice(0, index), newElement, ...a.slice(index + 1, a.length)]);
  }

  /**
   * Removes the element at the specified index from the array.
   * @param index The index of the element to remove.
   */
  function remove(index: number) {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  }

  /**
   * Empties the array, setting it to an empty array.
   */
  function clear() {
    setArray([]);
  }

  // Return an object containing the array state and functions
  return { array, set: setArray, push, filter, update, remove, clear };
};

export default useArray;

// import useArray from "./useArray"
// export default function ArrayComponent() {
//   const { array, set, push, remove, filter, update, clear } = useArray<number>([1, 2, 3, 4, 5, 6])
//   return (
//     <div>
//       <div>{array.join(", ")}</div>
//       <button onClick={() => push(7)}>Add 7</button>
//       <button onClick={() => update(1, 9)}>Change Second Element To 9</button>
//       <button onClick={() => remove(1)}>Remove Second Element</button>
//       <button onClick={() => filter(n => n < 3)}>
//         Keep Numbers Less Than 4
//       </button>
//       <button onClick={() => set([1, 2])}>Set To 1, 2</button>
//       <button onClick={clear}>Clear</button>
//     </div>
//   )
// }

// export default function ArrayComponent() {
//   const { array, set, push, remove, filter, update, clear } = useArray<string>(['Hello']);
//   return (
//     <div>
//       <div>{array.join(', ')}</div>
//       <button onClick={() => push('whats up')}>Add 'whats up'</button>
//       <button onClick={() => update(1, 'not much')}>Change Second Element To 'not much'</button>
//       <button onClick={() => remove(1)}>Remove Second element</button>
//       <button onClick={() => filter((n) => n.length < 3)}>Keep elements with length less Than 3</button>
//       <button onClick={() => set(['hello', 'roma'])}>Set To ['Hello', 'Roma']</button>
//       <button onClick={clear}>Clear</button>
//     </div>
//   );
// }
