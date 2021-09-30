import React, { memo, ReactElement } from 'react';
import { Props } from './Page.types';
import { Header } from '..';
import './Page.scss';

export const Page = memo(
  ({ children, isHeader = true }: Props): ReactElement => (
    <div className="page">
      {isHeader && <Header />}
      <main className="page__content">{children}</main>
    </div>
  )
);
