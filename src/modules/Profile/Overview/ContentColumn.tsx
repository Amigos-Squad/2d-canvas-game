import React, { ReactElement, memo } from 'react';
import { ColumnProps } from './Overview.types';

export const ContentColumn = memo(
  ({ children, title, actions }: ColumnProps): ReactElement => (
    <section className="content-column scroll__wrapper">
      <header className="content-column__header">
        <div className="content-column__header-title">{title}</div>
        <div className="content-column__header-actions">{actions}</div>
      </header>
      <div className="content-column__content">{children}</div>
    </section>
  )
);
