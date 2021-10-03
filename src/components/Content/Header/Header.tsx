import React, { ReactElement } from 'react';
import { Navigation } from '../Navigation';
import type { Props } from './Header.types';
import './Header.scss';

export const Header = React.memo(
  ({ navItems, children }: Props): ReactElement => (
    <header className="page-content__header">
      <>{navItems && <Navigation items={navItems} />}</>
      <div className="page-content__header-actions">{children}</div>
    </header>
  )
);
