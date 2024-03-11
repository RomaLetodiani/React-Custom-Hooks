import { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using Axios for API calls

/**
 * A custom React hook for making API calls.
 * @param apiUrl The URL of the API endpoint to fetch data from.
 * @returns An object containing the fetched data, loading state, and error.
 */
const useAPI = (apiUrl: string) => {
  // Initialize state variables
  const [data, setData] = useState<any>(null); // Adjust the type based on the expected data structure
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null); // Adjust the type based on the expected error structure

  useEffect(() => {
    // Function to make the API call
    const fetchData = async () => {
      try {
        // Make the API call using Axios
        const response = await axios.get(apiUrl);
        // Set the fetched data and update loading state
        setData(response.data);
        setIsLoading(false);
      } catch (err) {
        // Handle errors and update loading state
        setError(err);
        setIsLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [apiUrl]); // Trigger the effect when the apiUrl changes

  // Return the data, loading state, and error
  return { data, isLoading, error };
};

export default useAPI;

// Example usage

// const apiUrl = 'https://api.example.com/data'; // Replace with your API URL
// const { data, isLoading, error } = useApi(apiUrl);
