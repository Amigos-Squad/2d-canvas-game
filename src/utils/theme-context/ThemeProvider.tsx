import React, { memo, ReactElement, useLayoutEffect } from "react";
import { ChildrenProps } from "@/models";
import ThemeContext, { Theme } from "./ThemeContext";
import { useAppSelector } from "..";

export const ThemeProvider = memo(
  ({ children }: ChildrenProps): ReactElement => {
    const { theme } = useAppSelector('user');

    useLayoutEffect(() => {
      console.log('theme: ', theme)
      const root = document.getElementById('root');
      if (root?.classList.contains(Theme.Dark.toLowerCase())) {
        root?.classList.remove(Theme.Dark.toLowerCase());
      } else if (root?.classList.contains(Theme.Light.toLowerCase())) {
        root?.classList.remove(Theme.Light.toLowerCase());
      }
      root?.classList.add(theme.toLowerCase());
    }, [theme])

    return (
      <ThemeContext.Provider value={theme}>
        {children}
      </ThemeContext.Provider>
    )
  }
);