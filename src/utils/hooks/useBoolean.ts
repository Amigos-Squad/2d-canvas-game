import { useMemo, useState } from 'react';

export function useBoolean(
  defaultValue = false
): [boolean, () => void, () => void, () => void] {
  const [state, changeState] = useState(defaultValue);

  const actions = useMemo(() => {
    const setTrue = () => changeState(true);
    const setFalse = () => changeState(false);
    const toggle = () => changeState(!state);
    return { toggle, setTrue, setFalse };
  }, [state]);

  return [state, actions.toggle, actions.setTrue, actions.setFalse];
}
