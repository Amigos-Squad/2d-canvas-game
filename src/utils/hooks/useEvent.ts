import { useEffect } from 'react';

export function useEvent(
  event: keyof WindowEventMap,
  callback: (event: unknown) => void
) {
  useEffect(() => {
    window.addEventListener(event, callback);
    return () => window.removeEventListener(event, callback);
  }, [event, callback]);
}
