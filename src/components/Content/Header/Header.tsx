import React, { ReactElement } from 'react';
import { Navigation } from '../Navigation';
import type { Props } from './Header.types';
import './Header.scss';

export const Header = React.memo(
  ({ navItems, children, className }: Props): ReactElement => (
    <header className={`page-content__header ${className}`}>
      <>{navItems && <Navigation items={navItems} />}</>
      <div className="page-content__header-contenet">{children}</div>
    </header>
  )
);
