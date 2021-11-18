import React, { memo, ReactElement, useLayoutEffect } from "react";
import { ChildrenProps } from "@/models";
import ThemeContext, { Theme } from "./ThemeContext";
import { useAppSelector } from "..";

export const ThemeProvider = memo(
  ({ children }: ChildrenProps): ReactElement => {
    const { theme } = useAppSelector('user');

    useLayoutEffect(() => {
      const root = document.getElementById('root');
      if (root?.classList.contains(Theme.Dark)) {
        root?.classList.remove(Theme.Dark);
      } else if (root?.classList.contains(Theme.Light)) {
        root?.classList.remove(Theme.Light);
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