import React, { memo, ReactElement } from 'react';
import { NavigationItem } from './NavigationItem';
import { NAVIGATION } from './const';
import './Navigation.scss';

export const Navigation = memo(
  (): ReactElement => (
    <nav className="page-header__navigation">
      {NAVIGATION.map((props) => (
        <NavigationItem {...props} key={props.key} />
      ))}
    </nav>
  )
);
