import { createContext } from 'react';

export enum Theme {
  Light = 'Light',
  Dark = 'Dark',
}

const ThemeContext = createContext({
  theme: Theme.Light.toString(),
  toggle: (theme: string) => {},
});

export default ThemeContext;