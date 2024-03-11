import { useState } from 'react';

/**
 * Hook to facilitate copying text to the clipboard.
 * @returns A function to copy text to the clipboard and
 * a boolean indicating whether the operation was successful.
 */
const useClipboard = (): [(text: string) => void, boolean] => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  function copyToClipboard(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 3000); // Reset isCopied after 3 seconds
      })
      .catch((error) => {
        console.error('Failed to copy:', error);
      });
  }

  return [copyToClipboard, isCopied];
};

export default useClipboard;

// Example usage
// const [copyToClipboard, isCopied] = useClipboard();
