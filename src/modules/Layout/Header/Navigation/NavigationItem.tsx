import React, { memo, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { Props } from './NavigationItem.types';

export const NavigationItem = memo(
  ({ path, title, exact = false }: Props): ReactElement => (
    <NavLink
      className="navigation__item"
      activeClassName="navigation__item_active"
      to={path}
      exact={exact}
    >
      {title}
    </NavLink>
  )
);
