# Custom React/TypeScript Hooks

![Mastering Custom Hooks](./Custom-Hooks.png)
This repository contains a collection of custom React/TypeScript hooks designed to solve common problems encountered during React/TypeScript development.
These hooks are reusable pieces of logic that encapsulate common patterns, making it easier to share functionality across components.

## Hooks Included

### [useArray](./src/Hooks/useArray.ts)

Provides utilities for managing arrays in React state.

### [useMediaQuery](./src/Hooks/useMediaQuery.ts)

Easily detect changes in the viewport size and tracking changes to a media query.

### [useTimeout](./src/Hooks/useTimeout.ts)

Enables you to create and manage timeouts in React components.

### [useDebounce](./src/Hooks/useDebounce.ts)

Delaying the execution of a callback function.

### [useToggle](./src/Hooks/useToggle.ts)

Simplifies the management of boolean state toggles.

### [useStorage](./src/Hooks/useStorage.ts)

Allows you to store and retrieve stateful values in the browser's local storage or session storage.

### [useInput](./src/Hooks/useInput.ts)

Manages the state of an input field, including validation and focus tracking.

### [useAPI](./src/Hooks/useAPI.ts)

Simplifies making API calls using the Fetch API, managing loading state and error handling.

### [useAsync](./src/Hooks/useAsync.ts)

Generic hook for managing asynchronous operations, including loading state, error handling, and value retrieval.

### [useAsyncAPI](./src/Hooks/useAsyncAPI.ts)

Handles asynchronous API calls using Axios, managing loading state, error handling, and data retrieval.

### [useWindowSize](./src/Hooks/useWindowSize.ts)

Tracks browser window size changes, providing updates when the dimensions change.

### [useCount](./src/Hooks/useCount.ts)

Manages count state with increment, decrement, and reset functionalities.

### [useOnScreen](./src/Hooks/useOnScreen.ts)

Detects element visibility on the screen using the Intersection Observer API.

### [useFetch](./src/Hooks/useFetch.ts)

Facilitates making fetch requests with customizable options, handling loading state, error handling, and data retrieval.

## Usage

```typescript
function MyComponent() {
  // Example usage of useArray
  const { array, set, push, remove, filter, update, clear } = useArray<number>([1, 2, 3, 4, 5, 6]);
  const { array, set, push, remove, filter, update, clear } = useArray<string>(['Hello']);

  // Example usage of useDebounce
  const [inputValue, setInputValue] = useState<string>(''); // State to hold input value
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  // Use the useDebounce hook to debounce the callback function
  const debouncedInputChange = useDebounce(handleInputChange, 500); // Debounce for 500 milliseconds

  // Example usage of useMediaQuery
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  // Example usage of useTimeout
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [resetVisibility, clear] = useTimeout(() => setIsVisible(false), 3000);

  // Example usage of useToggle
  const [isOn, toggle] = useToggle(false);

  // Example usage of useStorage
  const [storedValue, setStoredValue, removeStoredValue] = useLocalStorage<string>(key1, initialValue);

  // Example usage of useInput
  const {
    value: inputValue,
    focus: inputFocus,
    onChange: handleInputChange,
    onBlur: handleInputBlur,
    onFocus: handleInputFocus,
    hasError: inputHasError,
  } = useInput((value: string) => value.trim() !== '');

  // Example usage of useAsync
  const asyncTask = async () => {
    // Simulating an asynchronous task
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Async data');
      }, 1000);
    });
  };
  const { loading: asyncLoading, error: asyncError, value: asyncData } = useAsync(asyncTask, []);

  // Example usage of useAsyncAPI
  const apiUrl = 'https://api.example.com/data'; // Replace with your API URL
  const { data: asyncAPIData, isLoading: asyncAPILoading, error: asyncAPIError } = useAsyncAPI(apiUrl);

  // Example usage of useWindowSize
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  // Example usage of useAPI
  const apiURL = 'https://api.example.com/data'; // Replace with your API URL
  const { data: apiData, isLoading: apiLoading, error: apiError } = useAPI(apiURL);

  // Example usage of useCount
  const { count, increment, decrement, reset } = useCount();

  // Example usage of useOnScreen
  const ref = React.useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(ref);

  // Example usage of useFetch
  const apiURL = 'https://api.example.com/data'; // Replace with your API URL
  const { data, isLoading, error } = useFetch(apiURL);

  return (
    // Your component JSX here...
  );
}

export default MyComponent;
```

[For detailed usage instructions and examples for each hook,<br>please refer to the documentation provided in the respective hook's source file.](./src/Hooks)

## Contributing

Contributions to this repository are welcome!<br>
If you have ideas for new custom hooks or improvements to existing ones,<br>
feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
