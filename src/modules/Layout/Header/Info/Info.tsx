import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { signOut, toggleTheme } from '@/redux';
/* import { GH_LINK } from './const';

import { Icon, ICONS } from '@/components'; */

import './Info.scss';
import { useAppSelector } from '@/utils';
import { Theme } from '@/utils/theme-context/ThemeContext';

export const Info = React.memo((): ReactElement => {
  const dispatch = useDispatch();
  const { theme } = useAppSelector('user');

  const handleSignOut = () => dispatch(signOut());
  const handleThemeToggle = () => dispatch(toggleTheme(theme === Theme.Light ? Theme.Dark : Theme.Light));

  return (
    <div className="page-header__info">
      {/* <Icon name={ICONS.GitHub} href={GH_LINK} /> */}
      <button className={`page-header__theme ${theme === Theme.Dark ? 'page-header__theme--active' : null}`} id="toggle" type="button" onClick={handleThemeToggle}> </button>
      <span className="page-header__sign-out" onClick={handleSignOut}>
        SIGN OUT
      </span>
    </div>
  );
});
