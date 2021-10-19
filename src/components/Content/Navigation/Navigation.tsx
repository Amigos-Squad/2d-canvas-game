import React, { ReactElement, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Props } from './Navigation.types';
import './Navigation.scss';

export const Navigation = memo(({ items }: Props): ReactElement => {
  const navItems = items.map(({ path, exact, title, key }) => (
    <NavLink
      to={path}
      className="page-content__header-nav-item"
      activeClassName="page-content__header-nav-item_active"
      exact={exact}
      key={key}
    >
      {title}
    </NavLink>
  ));

  return <nav className="page-content__header-nav">{navItems}</nav>;
});
