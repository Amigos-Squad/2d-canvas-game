import React, { ReactElement, memo } from 'react';

import { Info } from './Info';
import { Logo } from './Logo';
import { Navigation } from './Navigation';

import './Header.scss';

export const Header = memo(
  (): ReactElement => (
    <header className="page__header">
      <Logo />
      <Navigation />
      <Info />
    </header>
  )
);
