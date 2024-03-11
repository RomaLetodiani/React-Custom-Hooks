import { useCallback, useEffect, useState } from 'react';

interface AsyncState<T> {
  loading: boolean;
  error?: any;
  value?: T;
}

const useAsync = <T>(callback: () => Promise<T>, dependencies: any[] = []): AsyncState<T> => {
  const [asyncState, setAsyncState] = useState<AsyncState<T>>({
    loading: true,
    error: undefined,
    value: undefined,
  });

  const callbackMemoized = useCallback(() => {
    setAsyncState({
      loading: true,
      error: undefined,
      value: undefined,
    });

    callback()
      .then((value) => {
        setAsyncState({
          loading: false,
          error: undefined,
          value,
        });
      })
      .catch((error) => {
        setAsyncState({
          loading: false,
          error,
          value: undefined,
        });
      });
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return asyncState;
};

export default useAsync;

// Example usage

// const fetchData = async (): Promise<string> => {
// Simulate fetching data from an API
//     return new Promise<string>((resolve, reject) => {
//       setTimeout(() => {
// Resolving with some mock data
//         resolve('Mock data');
//       }, 1000);
//     });
//   };

//   const { loading, error, value } = useAsync<string>(fetchData, []);
