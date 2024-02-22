import axios from 'axios';
import useAsync from './useAsync'; // Import the useAsync hook

/**
 * A custom React hook for making asynchronous API calls.
 * @param apiUrl The URL of the API endpoint to fetch data from.
 * @returns An object containing the fetched data, loading state, and error.
 */
function useAsyncAPI(apiUrl: string) {
  // Use the useAsync hook to handle asynchronous operations
  const {
    loading,
    error,
    value: data,
  } = useAsync(async () => {
    // Make the API call using Axios
    const response = await axios.get(apiUrl);
    // Return the fetched data
    return response.data;
  }, [apiUrl]); // Pass the apiUrl as a dependency

  // Return the data, loading state, and error
  return { data, isLoading: loading, error };
}

export default useAsyncAPI;

// Example usage
// const apiUrl = 'https://api.example.com/data'; // Replace with your API URL
// const { data, isLoading, error } = useAsyncAPI(apiUrl);
