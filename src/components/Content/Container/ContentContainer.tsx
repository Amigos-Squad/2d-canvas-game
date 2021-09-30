import React, { ReactElement, memo } from 'react';
import { Props } from './ContentContainer.types';
import './ContentContainer.scss';

export const ContentContainer = memo(
  ({
    children,
    wrapperClassName = '',
    className = '',
    isFooterGap = true,
  }: Props): ReactElement => (
    <div className={`page-content__wrapper ${wrapperClassName}`}>
      <div className={`page-content__container ${className}`}>{children}</div>
      {isFooterGap && <footer className="page-content__footer"> </footer>}
    </div>
  )
);
