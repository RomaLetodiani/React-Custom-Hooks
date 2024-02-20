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
