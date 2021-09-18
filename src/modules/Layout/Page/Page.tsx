import React, { memo, ReactElement } from 'react';
import { Props } from './Page.types';
import './Page.scss';
import { Header } from '..';

export const Page = memo(
  ({ children, withHeader = false }: Props): ReactElement => (
    <div className="page">
      {withHeader && <Header />}
      <main className="page__content">{children}</main>
    </div>
  )
);
