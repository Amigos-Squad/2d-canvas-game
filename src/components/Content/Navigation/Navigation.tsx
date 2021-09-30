import React, { ReactElement, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { Props } from './Navigation.types';
import './Navigation.scss';

export const Navigation = React.memo(({ items }: Props): ReactElement => {
  const navItems = useMemo(
    () =>
      items.map(({ path, exact, title, key }) => (
        <NavLink
          to={path}
          className="page-content__header-nav-item"
          activeClassName="page-content__header-nav-item_active"
          exact={exact}
          key={key}
        >
          {title}
        </NavLink>
      )),
    [items]
  );

  return <nav className="page-content__header-nav">{navItems}</nav>;
});
