import React, { ReactElement, memo, useMemo } from 'react';
import { Props } from './Button.types';
import { BUTTON_TYPES } from './const';
import './Button.scss';

export const Button = memo(
  ({
    children,
    type,
    buttonType = BUTTON_TYPES.PRIMARY,
  }: Props): ReactElement => {
    const className = useMemo(
      () => `button button_${buttonType}`,
      [buttonType]
    );

    return (
      <button type={type} className={className}>
        {children}
      </button>
    );
  }
);
