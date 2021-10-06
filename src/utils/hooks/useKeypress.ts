import { useEffect } from 'react';

export function useKeypress(key: string, callback: Function) {
  useEffect(() => {
    function onKeyup(e: KeyboardEvent) {
      if (e.key === key) {
        callback();
      }
    }
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, [key, callback]);
}
