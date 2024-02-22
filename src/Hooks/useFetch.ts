import useAsync from './useAsync';

const DEFAULT_OPTIONS = {
  headers: { 'Content-Type': 'application/json' },
};

/**
 * A custom React hook for making fetch requests with asynchronous handling.
 * @param url The URL of the API endpoint to fetch data from.
 * @param options Additional options for the fetch request.
 * @param dependencies The dependencies that trigger the fetch request.
 * @returns An object containing the fetched data, loading state, and error.
 */
export default function useFetch(url: string, options: RequestInit = {}, dependencies: any[] = []) {
  // Using the useAsync hook to handle asynchronous operations
  return useAsync(() => {
    // Making the fetch call
    return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then((res) => {
      // Checking if the response is OK
      if (res.ok) return res.json();
      // Handling non-OK response
      return res.json().then((json) => Promise.reject(json));
    });
  }, dependencies);
}

// Example usage
// const apiUrl = 'https://api.example.com/data'; // Replace with your API URL
// const { data, isLoading, error } = useFetch(apiUrl);
