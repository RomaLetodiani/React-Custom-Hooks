import { useCallback, useEffect, useState } from 'react';

/**
 * A custom React hook for managing state stored in the local storage or session storage of the browser.
 * @template T - The type of the state value.
 * @param {string} key - The key under which the value will be stored in the storage.
 * @param {T | (() => T)} initialValue - The initial value of the state, or a function that returns the initial value.
 * @param {'localStorage' | 'sessionStorage'} storageType - The type of storage to use.
 * @returns {[T, React.Dispatch<React.SetStateAction<T>>, () => void]}
 * A tuple containing the current value, a function to set the value, and a function to remove the value from storage.
 */
const useStorage = <T>(
  key: string,
  initialValue: T | (() => T),
  storageType: 'localStorage' | 'sessionStorage'
): [T, React.Dispatch<React.SetStateAction<T>>, () => void] => {
  const storageObject = storageType === 'localStorage' ? window.localStorage : window.sessionStorage;
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    }

    if (typeof initialValue === 'function') {
      return (initialValue as () => T)();
    }
    return initialValue;
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);

    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => setValue(undefined), []);

  return [value, setValue, remove];
};

/**
 * A custom React hook for managing state stored in the local storage of the browser.
 * @template T - The type of the state value.
 * @param {string} key - The key under which the value will be stored in the local storage.
 * @param {T | (() => T)} initialValue - The initial value of the state, or a function that returns the initial value.
 * @returns {[T, React.Dispatch<React.SetStateAction<T>>, () => void]}
 * A tuple containing the current value, a function to set the value, and a function to remove the value from local storage.
 */
export const useLocalStorage = <T>(
  key: string,
  initialValue: T | (() => T)
): [T, React.Dispatch<React.SetStateAction<T>>, () => void] => {
  return useStorage(key, initialValue, 'localStorage');
};

/**
 * A custom React hook for managing state stored in the session storage of the browser.
 * @template T - The type of the state value.
 * @param {string} key - The key under which the value will be stored in the session storage.
 * @param {T | (() => T)} initialValue - The initial value of the state, or a function that returns the initial value.
 * @returns {[T, React.Dispatch<React.SetStateAction<T>>, () => void]}
 * A tuple containing the current value, a function to set the value, and a function to remove the value from session storage.
 */
export const useSessionStorage = <T>(
  key: string,
  initialValue: T | (() => T)
): [T, React.Dispatch<React.SetStateAction<T>>, () => void] => {
  return useStorage(key, initialValue, 'sessionStorage');
};

// Example 1
// Initialize a key and an initial value
// const key1 = 'exampleKey';
// const initialValue = 'defaultValue';

// Use the useLocalStorage hook to get the stored value, setter function, and remover function
// const [storedValue, setStoredValue, removeStoredValue] = useLocalStorage<string>(key1, initialValue);

// Example 2
// Define key for last login date
// const key2 = 'lastLoginDate';

/**
 * Function to get the initial last login date.
 * @returns {Date} The initial last login date.
 */
// const getInitialDate = (): Date => new Date();

// Use the useLocalStorage hook to get the stored last login date, setter function, and remover function
// const [lastLoginDate, setLastLoginDate, removeLoginDate] = useLocalStorage<Date>(key2, getInitialDate);

// Function to format date to local string
// const formatDate = (date: Date | string): string => {
//   if (typeof date === 'string') {
//     return new Date(date).toLocaleString();
//   }
//   return date.toLocaleString();
// };

// Example 3
// Define key for API base URL
// const key3 = 'apiBaseUrl';

/**
 * Function to get the initial API base URL.
 * @returns {string} The initial API base URL.
 */
// const getInitialApiBaseUrl = (): string => {
// Determine the API base URL dynamically based on the environment or configuration
// return process.env.NODE_ENV === 'production' ? 'https://api.example.com' : 'http://localhost:8000';
// };

// Use the useLocalStorage hook to get the stored API base URL, setter function, and remover function
// const [apiBaseUrl, setApiBaseUrl, removeApiBaseUrl] = useLocalStorage<string>(key3, getInitialApiBaseUrl);

// Example 4
// Define key for heavy computation result
// const key4 = 'heavyComputationResult';

/**
 * Function to compute the initial value for heavy computation result.
 * This computation is deferred until the value is requested for the first time.
 * @returns {ResultType} The initial result of heavy computation.
 */
// const computeInitialValue = () => {
/* Perform some heavy computation
      /* Perform some heavy computation */
// return performHeavyComputation();
// };

// Use the useLocalStorage hook to get the stored heavy computation result and setter function
// const [result, setResult] = useLocalStorage<ResultType>(key4, computeInitialValue);
